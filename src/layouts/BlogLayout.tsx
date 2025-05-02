import { BreadcrumbElement } from "@/components/Breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentInfo, { ContentInfoProps } from "@/components/ContentInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestArticleList from "@/components/LatestArticleList";
import Sidebar from "@/components/Sidebar";

export default function BlogLayout({
  children,
  title,
  breadcrumbElements,
  contentInfoProps,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  breadcrumbElements: BreadcrumbElement[];
  contentInfoProps?: ContentInfoProps;
}>) {
  return (
    <div className="grid-container">
      {/* Header */}
      <Header>
        <Breadcrumbs elements={breadcrumbElements} />
      </Header>

      <div className="main-container bg-teal-50">
        {/* Left Sidebar */}
        <Sidebar position="left">
          <LatestArticleList />
        </Sidebar>

        {/* Main Content */}
        <main className="main prose-sm bg-sky-100 p-8">
          <h1>{title}</h1>
          {contentInfoProps && <ContentInfo props={contentInfoProps} />}
          {children}
        </main>

        <Sidebar position="right">
          <p>サイドバー</p>
        </Sidebar>
      </div>

      <Footer />
    </div>
  );
}
