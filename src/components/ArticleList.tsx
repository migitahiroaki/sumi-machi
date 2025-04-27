import { listArticles, ArticleBase } from "@/lib/microcms";

export default async function ArticleList() {
  const articleList: ArticleBase[] = await listArticles();
  return (
    <div>
      <h2>記事一覧</h2>
      <ul>
        {articleList.map((article) => {
          const date: Date = new Date(article.publishedAt);
          return (
            <li key={article.id}>
              <a
                href={`/article/${date.getFullYear().toString()}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${article.id}`}
              >
                {article.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
