import { Article } from "@/lib/microcms";
import ArticleCard from "./ArticleCard";

export default async function ArticleList({
  articles,
}: Readonly<{
  articles: Article[];
}>) {
  return (
    <div>
      <ul>
        {articles.map((article: Article) => (
          <li key={`Article-{article.id}`}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
