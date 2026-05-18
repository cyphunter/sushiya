import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { MotionGate } from "@/components/motion/motion-gate";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { buildRestaurantSchema } from "@/lib/jsonld/restaurant";
import "./globals.css";

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const fontJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
  variable: "--font-jp",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.baseline}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  keywords: [
    "restaurant japonais Vannes",
    "sushi Vannes",
    "sushiya Vannes",
    "maki Vannes",
    "sashimi Vannes",
    "chirashi Vannes",
    "california rolls Vannes",
    "restaurant japonais Morbihan",
    "sushi à emporter Vannes",
    "huîtres japonaises golfe Morbihan",
    "café gourmand japonais Vannes",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfaf3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const restaurantSchema = buildRestaurantSchema();

  return (
    <html
      lang={siteConfig.language}
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontJp.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Aller au contenu principal
        </a>
        <JsonLd schema={restaurantSchema} />
        <MotionGate>
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </MotionGate>
      </body>
    </html>
  );
}
