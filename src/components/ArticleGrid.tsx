import { Article } from "@/lib/microcms";
import ArticleCardStacked from "./atoms/ArticleCardStacked";

export default async function ArticleGrid({
  articles,
}: Readonly<{
  articles: Article[];
}>) {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
        {articles.map((article) => (
          <ArticleCardStacked
            key={`ArticleCardStacked-${article.id}`}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}
