import { BreadcrumbElement } from "@/components/Breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentInfo, { ContentInfoProps } from "@/components/ContentInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestArticles from "@/components/LatestArticles";
import Sidebar from "@/components/Sidebar";
import React, { Suspense } from "react";

const Toc = React.lazy(() => import("@/components/atoms/Toc"));

export default function BlogLayout({
  children,
  title,
  description,
  breadcrumbElements,
  contentInfoProps,
  showToc,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  description: string;
  breadcrumbElements: BreadcrumbElement[];
  contentInfoProps?: ContentInfoProps;
  showToc?: boolean;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: "右田裕明",
      // "url": "https://github.com/migitahiroaki"
    },
    publisher: {
      "@type": "Organization",
      name: "住みよい町田",
      url: "https://sumi-machi.com/",
      // "logo": {
      //   "@type": "ImageObject",
      //   "url": "https://example.com/ブログのロゴURL", // ブログのロゴ画像のURLを入力
      //   "width": ブログのロゴ画像の幅, // ブログのロゴ画像の幅をピクセル単位で入力
      //   "height": ブログのロゴ画像の高さをピクセル単位で入力
    },
  };
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd, null, 2)}
      </script>

      <div className="grid-container">
        {/* Header */}
        <Header>
          <Breadcrumbs elements={breadcrumbElements} />
        </Header>

        <div className="main-container bg-teal-50">
          {/* Left Sidebar */}
          <Sidebar position="left">
            <LatestArticles />
          </Sidebar>

          {/* Main Content */}
          <main className="main prose-sm bg-sky-100 p-8">
            <h1>{title}</h1>
            {contentInfoProps && <ContentInfo props={contentInfoProps} />}
            {children}
          </main>

          {showToc && (
            <Sidebar position="right">
              <Suspense fallback={<p>Loading heavy component...</p>}>
                <Toc />
              </Suspense>
            </Sidebar>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
