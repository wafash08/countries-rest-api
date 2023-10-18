import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Header from "./header";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REST Countries API with color theme switcher",
  description: "REST Countries API frontend mentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(nunito_sans.className, "transition-colors")}>
        <Header />
        <main className='bg-lm-vlg-background dark:bg-dm-vdb-background'>
          {children}
        </main>
      </body>
    </html>
  );
}
