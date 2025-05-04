import { Article } from "@/lib/microcms";
import ArticleCard from "./atoms/ArticleCard";

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
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
