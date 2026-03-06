import "./globals.css";
import { Inter, Fira_Code } from "next/font/google";
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

export const metadata = {
  title: "Maruf | Full Stack Web Developer & Backend Enthusiast",
  description:
    "Portfolio of Md. Maruf — Full Stack Web Developer, Backend Enthusiast, Competitive Programmer, and aspiring Entrepreneur from HSTU, Bangladesh.",
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Bangladesh",
    "HSTU",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Md. Maruf" }],
  openGraph: {
    title: "Maruf | Full Stack Web Developer",
    description:
      "Full Stack Web Developer & Backend Enthusiast. Building real-world web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruf | Full Stack Web Developer",
    description:
      "Full Stack Web Developer & Backend Enthusiast. Building real-world web and mobile applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
