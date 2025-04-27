import { listArticles, Article } from "@/lib/microcms";
import { Fragment } from "react";
// import HtmlContent from "./HtmlContent";
// import moment from "moment";
import ArticleCard from "./ArticleCard";

export default async function LatestArticleList() {
  const articleList: Article[] = await listArticles();
  return (
    <Fragment>
      <h1>新着記事一覧</h1>
      <div className="text-sm">
        <ul>
          {articleList.map((article) => {
            return (
              <li key={article.id}>
                <ArticleCard>{article}</ArticleCard>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
