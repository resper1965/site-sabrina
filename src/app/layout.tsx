import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://site-sabrina-nessbr-projects.vercel.app"),
  title: {
    default: "Sabrina Barros | Saúde & Gestão",
    template: "%s | Sabrina Barros",
  },
  description: "Estrategista de Saúde Suplementar, Dentista e Executiva. Insights sobre gestão, regulação e inovação na saúde.",
  openGraph: {
    title: "Sabrina Barros | Saúde & Gestão",
    description: "Insights sobre gestão, regulação e inovação na saúde suplementar.",
    url: "/",
    siteName: "Sabrina Barros",
    images: [
      {
        url: "/sabrinabarros-perfil.png",
        width: 400,
        height: 400,
        alt: "Sabrina Barros - Conselheira de Saúde Suplementar",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabrina Barros | Saúde & Gestão",
    description: "Insights sobre gestão, regulação e inovação na saúde suplementar.",
    images: ["/sabrinabarros-perfil.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-3W69W953QN" />
      </body>
    </html>
  );
}
