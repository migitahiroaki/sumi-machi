import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/NavMenu";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LatestArticleList from "@/components/LatestArticleList";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid-container">
          {/* Header */}
          <Header />
          {/* Navigation Menu */}
          <NavigationMenu />

          <div className="main-container">
            {/* Left Sidebar */}
            <Sidebar position="left">
              <LatestArticleList />
            </Sidebar>

            {/* Main Content */}
            <main className="main prose-sm bg-amber-500 p-8">{children}</main>

            <Sidebar position="right">
              <p>サイドバー</p>
            </Sidebar>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
