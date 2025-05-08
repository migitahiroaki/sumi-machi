// import SearchWithPagination from "@/components/SearchWithPagination";
import { Article, listArticles } from "@/lib/microcms";
import ArticleGrid from "@/components/ArticleGrid";
import { ARTICLE } from "@/lib/constant";
import MainContent from "@/components/MainContent";

const title = "ブログ記事";
const description = "記事の一覧。検索もここから";

export const metadata = {
  title,
  description,
};

export default async function ArticleSearchPage() {
  const listArticlesResponse = await listArticles();
  const articles: Article[] = listArticlesResponse.contents;

  return (
    <MainContent
      pageId="articles"
      title={title}
      description={description}
      breadcrumbElements={[ARTICLE]}
    >
      {/* <SearchWithPagination /> */}
      <ArticleGrid articles={articles} />
    </MainContent>
  );
}
