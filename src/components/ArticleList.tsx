import { Article } from "@/lib/microcms";
import ArticleCardSmall from "./atoms/ArticleCardHorizontal";

export default async function ArticleList({
  articles,
}: Readonly<{
  articles: Article[];
}>) {
  return (
    <div className="p-4">
      <ul>
        {articles.map((article: Article) => (
          <li key={`Article-${article.id}`}>
            <ArticleCardSmall article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
