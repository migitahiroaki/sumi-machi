import BlogLayout from "@/layouts/BlogLayout";
import { pageTitle } from "@/lib/constant";
import { ArticlesByCategory } from "@/components/ArticlesByCategory";

const title = pageTitle(`カテゴリ一覧`);
const description = "記事をカテゴリごとに一覧表示。";

export const metadata = {
  title,
  description,
};

export default async function CategoryPage() {
  return (
    <BlogLayout
      title={title}
      description={description}
      breadcrumbElements={[{ label: title }]}
    >
      <ArticlesByCategory />
    </BlogLayout>
  );
}
