import { NextResponse, type NextRequest } from "next/server";

/**
 * Webhook Resend — bounces, complaints, deliveries.
 * Doc : https://resend.com/docs/dashboard/webhooks/introduction
 *
 * Vérifier la signature Svix avant de traiter en prod
 * (headers `svix-id`, `svix-timestamp`, `svix-signature`).
 */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const id = req.headers.get("svix-id");
  const ts = req.headers.get("svix-timestamp");
  const sig = req.headers.get("svix-signature");

  if (!id || !ts || !sig) {
    return NextResponse.json({ ok: false, error: "missing-headers" }, { status: 400 });
  }

  try {
    const event = JSON.parse(body) as { type: string; data: Record<string, unknown> };
    // Traitement minimal — en V1, on log seulement (pas de DB).
    switch (event.type) {
      case "email.bounced":
      case "email.complained":
        console.warn("[resend webhook]", event.type, event.data);
        break;
      case "email.delivered":
      case "email.opened":
      case "email.clicked":
        // analytics email — optionnel
        break;
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }
}
