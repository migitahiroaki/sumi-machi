import BlogLayout from "@/layouts/BlogLayout";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constant";

const title = SITE_NAME;
const description = SITE_DESCRIPTION;
// This is a Next.js 13+ app directory page
export const metadata = {
  title,
  description,
};

export default function Home() {
  return (
    <BlogLayout title={title} description={description} breadcrumbElements={[]}>
      <h1>トップページ</h1>
      <p>hello world!</p>
    </BlogLayout>
  );
}
