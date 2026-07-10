import "./globals.css";
import { Inter, Fira_Code, Space_Grotesk, Dancing_Script } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
  weight: ["600", "700"],
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050A14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: {
    default: "Md. Maruf Ur Rahman | Full Stack & Mobile Developer",
    template: "%s | Md. Maruf Ur Rahman",
  },
  description:
    "Portfolio of Md. Maruf Ur Rahman Munna — Full Stack Web Developer & Flutter Mobile App Developer from Bangladesh. Specializing in React, Next.js, Node.js, and cross-platform mobile apps.",
  keywords: [
    "Md. Maruf Ur Rahman Munna", "Maruf", "Full Stack Developer", "Mobile App Developer",
    "Flutter Developer", "Backend Engineer", "React Developer", "Next.js", "Node.js", 
    "Software Engineer Bangladesh", "HSTU", "Portfolio"
  ],
  authors: [{ name: "Md. Maruf Ur Rahman Munna", url: "https://github.com/maruf-hstu" }],
  creator: "Md. Maruf Ur Rahman Munna",
  metadataBase: new URL("https://maruf-dev.com"), // Placeholder URL, update to real domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Md. Maruf Ur Rahman | Full Stack & Mobile Developer",
    description: "Full Stack Web Developer & Flutter Mobile App Developer from Bangladesh building scalable applications.",
    siteName: "Maruf Portfolio",
    images: [
      {
        url: "/me.jpg", // Ideally replace with a dedicated OG image
        width: 1200,
        height: 630,
        alt: "Md. Maruf Ur Rahman Munna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Maruf Ur Rahman | Full Stack & Mobile Developer",
    description: "Full Stack Web Developer & Flutter Mobile App Developer from Bangladesh.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Maruf Ur Rahman Munna",
  jobTitle: "Full Stack & Mobile App Developer",
  url: "https://maruf-dev.com", // update with real domain
  sameAs: [
    "https://github.com/maruf-hstu",
    "https://linkedin.com/in/maruf-hstu"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Hajee Mohammad Danesh Science and Technology University (HSTU)"
  },
  knowsAbout: ["Web Development", "Mobile App Development", "React.js", "Next.js", "Flutter", "Node.js", "MongoDB"]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} ${spaceGrotesk.variable} ${dancingScript.variable}`}
    >
      <body className="antialiased">
        <Providers>
          {/* Inject JSON-LD structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
