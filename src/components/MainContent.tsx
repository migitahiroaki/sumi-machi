import "server-only";
import { SITE_NAME } from "@/lib/constant";
import React, { Fragment } from "react";
import Breadcrumbs, { BreadcrumbElement } from "./Breadcrumbs";
import ContentInfo, { ContentInfoProps } from "./ContentInfo";
import Toc from "./atoms/Toc";

export default function MainContent({
  children,
  title,
  description,
  breadcrumbElements,
  contentInfoProps,
  pageId,
  showToc,
}: Readonly<{
  children: React.ReactNode;
  pageId: string;
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
      url: "https://github.com/migitahiroaki",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: "https://sumi-machi.com/",
      // "logo": {
      //   "@type": "ImageObject",
      //   "url": "https://example.com/ブログのロゴURL", // ブログのロゴ画像のURLを入力
      //   "width": ブログのロゴ画像の幅, // ブログのロゴ画像の幅をピクセル単位で入力
      //   "height": ブログのロゴ画像の高さをピクセル単位で入力
    },
  };
  return (
    <Fragment>
      <Breadcrumbs elements={breadcrumbElements} />
      <h1>{title}</h1>
      {contentInfoProps && <ContentInfo props={contentInfoProps} />}
      {children}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd, null, 2)}
      </script>
      {showToc && <Toc targetId="sidebar-toc" pageId={pageId} />}
    </Fragment>
  );
}
