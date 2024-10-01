import { cn } from "@/lib/utils";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata = {
  title: "Banking App",
  description: "Banking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <main className={cn(`${inter.className} ${ibmPlexSerif.variable}`)}>
        {children}
      </main>
    </Providers>
  );
}
