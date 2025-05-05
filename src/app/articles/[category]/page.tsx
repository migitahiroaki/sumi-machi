import {
  listArticles,
  Article,
  Category,
  getCategory,
  listCategories,
} from "@/lib/microcms";
import BlogLayout from "@/layouts/BlogLayout";
import ArticleList from "@/components/ArticleList";
import { ARTICLE } from "@/lib/constant";

export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await props.params;
  const category: { name: string } = await getCategory(resolvedParams.category);
  return {
    title: `カテゴリ: ${category.name}`,
    description: `カテゴリ「${category.name}」に属する記事一覧`,
  };
}

export async function generateStaticParams() {
  const categories: Category[] = (
    await listCategories({
      fields: ["id"],
    })
  ).contents;
  return categories.map((category: Category) => ({
    category: category.id,
  }));
}

export default async function ArticleContentDetailPage(props: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await props.params;
  const articles: Article[] = (
    await listArticles({
      fields: [
        "id",
        "title",
        "description",
        "content",
        "category.id",
        "tags.id",
        "tags.name",
      ],
      filters: `category[equals]${resolvedParams.category}`,
      depth: 1,
    })
  ).contents;
  const category: Category = await getCategory(resolvedParams.category, {
    fields: ["name"],
    depth: 0,
  });

  return (
    <BlogLayout
      title={`${category.name} カテゴリの記事一覧`}
      description={`カテゴリ「${category.name}」(${category.id}) に属する記事一覧`}
      breadcrumbElements={[ARTICLE, { label: category.name }]}
    >
      {/* display content */}
      <ArticleList articles={articles} />
    </BlogLayout>
  );
}
