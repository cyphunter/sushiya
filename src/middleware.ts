import { NextResponse, type NextRequest } from "next/server";
import { LEGACY_REDIRECTS } from "@/lib/routes";

/**
 * Middleware global.
 *
 * Responsabilités :
 *   - Redirections 301 depuis anciennes URLs WordPress (cf. src/lib/routes.ts)
 *   - Les headers de sécurité sont émis via next.config.ts → headers()
 */

const REDIRECT_MAP = new Map<string, string>(
  LEGACY_REDIRECTS.map(([from, to]) => [from, to]),
);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const target = REDIRECT_MAP.get(pathname);
  if (target) {
    const url = req.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon-|apple-touch-|manifest|robots.txt|sitemap.xml).*)",
  ],
};
