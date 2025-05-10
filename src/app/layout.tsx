import "server-only";
import { Noto_Sans_JP as FontSans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${fontSans.className} antialiased`}>
        <div className="grid-container">
          {/* Header */}
          <Header />

          <div className="main-container bg-sky-100">
            {/* Left Sidebar */}
            <Sidebar position="sidebar-left" type="sidebar-ads">
              {/* <LatestArticles /> */}
              サイドバー
            </Sidebar>

            {/* Main Content */}
            <main className="main prose-sm bg-sky-50 p-8">{children}</main>

            <Sidebar position="sidebar-right" type="sidebar-toc"></Sidebar>
            {/* <div className="mokuji">dummy container for toc</div> */}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
