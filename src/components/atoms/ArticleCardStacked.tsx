// components/ArticleCardStacked.js
import { TRUNCATE_TEXT_THRESHOLD_PC } from "@/lib/constant";
import { stripTagsFromHtml } from "@/lib/html";
import { fallbackEyecatch } from "@/lib/image";
// import { microCMSLoader } from "@/lib/loader";
import { Article, Tag } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import TagBadge from "./Tag";

export default async function ArticleCardStacked({
  article,
}: Readonly<{
  article: Article;
}>) {
  // fallback with category's image
  //   const eyecatchUrl: string = article.eyecatch ? article.eyecatch.url
  //     : `/fallback/${article.category.id}.jpg`;
  const strippedContent = stripTagsFromHtml(
    article.content,
    false,
    TRUNCATE_TEXT_THRESHOLD_PC
  );

  return (
    <Link
      href={`/articles/${article.category.id}/${article.id}`}
      className="text-blue-500 self-start"
    >
      <div className="border rounded-md p-3 flex flex-col max-w-100 min-h-60 bg-white hover:bg-gray-50 shadow">
        <div className="relative aspect-3/2 overflow-hidden rounded-md mb-2">
          <Image
            //   loader={microCMSLoader}
            src={fallbackEyecatch(article.eyecatch, article.category.id)}
            alt={article.description}
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-sm font-semibold mb-2 h-12 overflow-hidden">
          {article.title}
        </p>
        <div className="justify-start">
          {article.tags.map((tag: Tag) => (
            <TagBadge key={`ContentInfo-Tag-${tag.id}`} tag={tag} />
          ))}
        </div>
        {/* <p className="text-gray-600 text-sm line-clamp-2 mb-2"> */}
        <p className="text-gray-600 text-xs mb-2 min-h-14 max-h-40 line-clamp-1 sm:line-clamp-2">
          {strippedContent}
        </p>
      </div>
    </Link>
  );
}
