import HtmlContent from "@/components/atoms/HtmlContent";
import { listArticles, Article, getArticle, Category } from "@/lib/microcms";
import BlogLayout from "@/layouts/BlogLayout";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const articleMeta: { title: string; description: string } = await getArticle(
    resolvedParams.id,
    { fields: ["id", "title", "description"] }
  );
  return {
    title: articleMeta.title,
    description: articleMeta.description,
  };
}

export async function generateStaticParams() {
  const articles: Article[] = (await listArticles()).contents;
  return articles.map((article: Article) => ({
    category: article.category.id,
    id: article.id,
  }));
}

export default async function ArticleContentDetailPage(props: {
  params: Promise<{ category: string; id: string }>;
}) {
  const resolvedParams = await props.params;

  const article: Article = await getArticle(resolvedParams.id);
  const category: Category = article.category;

  return (
    <BlogLayout
      title={article.title}
      description={article.description}
      breadcrumbElements={[
        { label: "記事", link: "/articles" },
        { label: category.name, link: `/articles/${category.id}` },
        {
          label: article.title,
        },
      ]}
      contentInfoProps={{
        tags: article.tags,
        publishedAt: article.publishedAt,
        revisedAt: article.revisedAt,
      }}
      showToc={true}
    >
      {/* display content */}
      <HtmlContent>{article.content}</HtmlContent>
    </BlogLayout>
  );
}
