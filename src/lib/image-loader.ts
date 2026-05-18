/**
 * Loader custom pour <Image> de Next.js.
 * Bypass de /_next/image (coûteux Worker free tier).
 * Les images doivent être pré-optimisées (WebP/AVIF) avant upload.
 */
type LoaderProps = { src: string; width?: number; quality?: number };

export default function imageLoader({ src }: LoaderProps): string {
  return src;
}
