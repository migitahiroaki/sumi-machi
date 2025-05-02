import { Article, listArticles } from "@/lib/microcms";
import { Fragment } from "react";
import ArticleCard from "./ArticleCard";

export default async function LatestArticleList() {
  const articleList: Article[] = (
    await listArticles(
      [
        "id",
        "title",
        "description",
        "content",
        "publishedAt",
        "category.id",
        "category.name",
        "tags.id",
        "tags.name",
      ],
      0,
      "-publishedAt",
      4
    )
  ).contents;
  return (
    <Fragment>
      <h1>新着記事一覧</h1>
      <div className="text-sm">
        <ul>
          {articleList.map((article) => {
            return (
              <li key={article.id}>
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
