/**
 * Types des bindings et variables d'environnement Cloudflare.
 * Régénérer via `npm run cf-typegen` une fois `wrangler.jsonc` complet
 * (vraies IDs KV / R2 / etc.) — ce fichier est commit-friendly.
 */

interface CloudflareEnv {
  ASSETS: Fetcher;
  MEDIA_BUCKET: R2Bucket;

  // Vars publiques (wrangler.jsonc → vars)
  NEXT_PUBLIC_SITE_URL: string;
  SITE_ID: string;
  CONTACT_TO_EMAIL: string;

  // Secrets (wrangler secret put)
  RESEND_API_KEY?: string;
  RESEND_WEBHOOK_SECRET?: string;
}
