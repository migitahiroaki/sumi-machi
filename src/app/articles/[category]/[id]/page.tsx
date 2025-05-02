// import MetaInfo from "@/components/ContentInfo";
import HtmlContent from "@/components/HtmlContent";
import { listArticles, Article, getArticle, Category } from "@/lib/microcms";
// import { pageTitle } from "@/lib/constant";
import BlogLayout from "@/layouts/BlogLayout";

// export async function generateMetadata(props: {
//   params: Promise<{ id: string }>;
// }) {
//   const resolvedParams = await props.params;
//   const metaData: ArticleMetadata = await getArticleMetadata(resolvedParams.id);
//   return {
//     title: pageTitle(metaData.title),
//     description: metaData.description,
//     keywords: metaData.tags?.join(", "),
//   };
// }

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
    >
      {/* display content */}
      <HtmlContent>{article.content}</HtmlContent>
    </BlogLayout>
  );
}
