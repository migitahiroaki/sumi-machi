import { Article } from "@/lib/microcms";
import ArticleCardStacked from "./atoms/ArticleCardStacked";

export default async function ArticleGrid({
  articles,
}: Readonly<{
  articles: Article[];
}>) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">記事一覧</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
