import BlogLayout from "@/layouts/BlogLayout";
import { pageTitle, SITE_DESCRIPTION } from "@/lib/constant";

// This is a Next.js 13+ app directory page
export async function generateMetadata() {
  return {
    title: pageTitle("トップページ"),
    description: SITE_DESCRIPTION,
  };
}

export default function Home() {
  return (
    <BlogLayout title={pageTitle("トップページ")} breadcrumbElements={[]}>
      <h1>トップページ</h1>
      <p>hello world!</p>
    </BlogLayout>
  );
}
