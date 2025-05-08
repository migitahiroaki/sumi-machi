import "server-only";
import { ArticlesByCategory } from "@/components/ArticlesByCategory";
import MainContent from "@/components/MainContent";

const title = "カテゴリ";
const description = "記事をカテゴリごとに一覧表示。";

export const metadata = {
  title,
  description,
};

export default async function CategoryPage() {
  return (
    <MainContent
      pageId="categories"
      title={title}
      description={description}
      breadcrumbElements={[{ label: "title" }]}
    >
      <ArticlesByCategory />
    </MainContent>
  );
}
