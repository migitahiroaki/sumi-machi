import { Article, listArticles } from "@/lib/microcms";
import { Fragment } from "react";
import ArticleCard from "./ArticleCard";

export default async function LatestArticles() {
  const articleList: Article[] = (
    await listArticles({
      fields: [
        "id",
        "title",
        "description",
        "content",
        "eyecatch",
        "publishedAt",
        "category.id",
        "category.name",
        "tags.id",
        "tags.name",
      ],
      depth: 1,
      orders: "-publishedAt",
    })
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
