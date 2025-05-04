import { Article, listArticles } from "@/lib/microcms";
import { Fragment } from "react";
import ArticleCardSmall from "./atoms/ArticleCardHorizontal";

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
                <ArticleCardSmall article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
