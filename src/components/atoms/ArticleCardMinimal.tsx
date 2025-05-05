import { Article } from "@/lib/microcms";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { fallbackEyecatch } from "@/lib/image";

export default function ArticleCardSmall({
  article,
}: Readonly<{
  article: Article;
}>) {
  // const prefix: string = `ArticleCard${article.id}`;
  return (
    <Link href={`/articles/${article.category.id}/${article.id}`}>
      <div className="border rounded-md p-4 flex flex-col max-w-80 bg-white">
        <div className="relative aspect-3/2 overflow-hidden rounded-md mb-2 w-1/5">
          <Image
            src={fallbackEyecatch(article.eyecatch, article.category.id)}
            alt={article.description}
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* <div className="bg-white flex flex-col justify-between leading-normal"> */}
        <div className="w-4/5">
          <span className="text-gray-900 font-bold hover:underline">
            {article.title}
          </span>
          {article.publishedAt && (
            <span className="text-xs text-gray-600 flex items-center">
              {moment(article.publishedAt).format("YYYY / MM / DD")}
            </span>
          )}
          <span className="text-gray-700 text-xs">{article.description}</span>
        </div>
      </div>
    </Link>
  );
}
