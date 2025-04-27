import { listArticles, Article } from "@/lib/microcms";

export default async function ArticleList() {
  const articleList: Article[] = await listArticles();
  return (
    <div>
      <h1>記事一覧</h1>
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
