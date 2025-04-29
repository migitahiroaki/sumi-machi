import MetaInfo from "@/components/ContentInfo";
import HtmlContent from "@/components/HtmlContent";
import {
  getArticleContentDetail,
  listArticles,
  Article,
  getArticleMetadata,
  ArticleMetadata,
} from "@/lib/microcms";
import { pageTitle } from "@/lib/constant";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const metaData: ArticleMetadata = await getArticleMetadata(resolvedParams.id);
  return {
    title: pageTitle(metaData.title),
    description: metaData.description,
    keywords: metaData.tags?.join(", "),
  };
}

export async function generateStaticParams() {
  const articles = await listArticles();
  const paths = articles.map((article) => {
    const date = new Date(article.publishedAt);
    return {
      yyyy: date.getFullYear().toString(),
      mm: (date.getMonth() + 1).toString().padStart(2, "0"),
      id: article.id,
    };
  });
  return [...paths];
}

export default async function ArticleContentDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const articleContentDetail: Article = await getArticleContentDetail(
    resolvedParams.id
  );

  return (
    <>
      <MetaInfo
        title={articleContentDetail.title}
        category={articleContentDetail.category}
        tags={articleContentDetail.tags}
        publishedAt={articleContentDetail.publishedAt}
        revisedAt={articleContentDetail.revisedAt}
      />
      {/* display content */}
      {articleContentDetail.content && (
        <HtmlContent>{articleContentDetail.content}</HtmlContent>
      )}
    </>
  );
}
