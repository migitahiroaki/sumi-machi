import { Article, listArticles } from "@/lib/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";
import ArticleList from "./ArticleList";

export default async function SearchWithPagination() {
  const result: MicroCMSListResponse<Article> = await listArticles({
    fields: [
      "id",
      "title",
      "content",
      "eyecatch",
      "publishedAt",
      "tags.id",
      "tags.name",
    ],
    //   depth: 1,
    //   orders: "-publishedAt",
  });

  //   const totalCount = 100;
  //   const limit = result.limit;
  //   const offset = result.offset;

  const articles: Article[] = result.contents;

  return <ArticleList articles={articles} />;
}
