import type { Metadata } from "next";
import { canonicalUrl, siteConfig } from "./site-config";

type PageMetadataInput = {
  title?: string | null;
  description?: string | null;
  path: string;
  imageUrl?: string | null;
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  imageUrl,
  noindex,
}: PageMetadataInput): Metadata {
  const finalTitle = title ?? siteConfig.fullName;
  const finalDesc = description ?? siteConfig.description;
  const url = canonicalUrl(path);

  const ogImage = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : `${siteConfig.url}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`
    : null;

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: { canonical: url },
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url,
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.fullName,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDesc,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
