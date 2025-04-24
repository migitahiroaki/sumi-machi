import { listArticles, ArticleBase } from "@/lib/microcms";

export default async function ArticleList() {
    const articleList: ArticleBase[] = await listArticles();
    return (
        <div>
            <h2>記事一覧</h2>
            <ul>
                {articleList.map((article) => (
                    <li key={article.id}>
                        <a href={`/article/${article.id}`}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}