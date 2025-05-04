import { Article } from "@/lib/microcms";
import Link from "next/link";
import moment from "moment";

export default function ArticleCardSmall({
  article,
}: Readonly<{
  article: Article;
}>) {
  // const prefix: string = `ArticleCard${article.id}`;
  return (
    <Link href={`/articles/${article.category.id}/${article.id}`}>
      <div className="flex w-full ">
        <div className="w-1/5">
          <img
            className="rounded-full"
            src="/window.svg"
            alt="Avatar of Jonathan Reinink"
          />
        </div>
        {/* <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        // ="background-image: url('/img/card-left.jpg')"
        title="Woman holding a mug"
      ></div> */}
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
