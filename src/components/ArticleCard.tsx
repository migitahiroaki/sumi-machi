import { Article } from "@/lib/microcms";
import Link from "next/link";

export default function Sidebar({
  article,
}: Readonly<{
  article: Article;
}>) {
  return (
    <article id={`card-${article.id}`} className="text-xs m-4 p-4 bg-amber-50">
      <Link href={`/articles/${article.category.id}/${article.id}`}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </Link>
    </article>
  );
}
