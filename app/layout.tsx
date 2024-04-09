import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://haytamtanji.vercel.app/"),

	title: "Haytam's Portfolio",
	authors: {
		name: "Haytam",
	},

	description:
		"I'm Haytam Tanji, a web developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Haytam",
		description:
			"I'm Haytam Tanji, a web developer passionate about building a modern web application that users love.",
		url: "https://haytamtanji.vercel.app/",
		siteName: "Haytam's Portfolio",
		images: "/favicon.ico",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
};
