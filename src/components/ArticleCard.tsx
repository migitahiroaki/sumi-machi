import { Article } from "@/lib/microcms";
import moment from "moment";
import Link from "next/link";
import HtmlContent from "./HtmlContent";

export default function Sidebar({
  children,
}: Readonly<{
  children: Article;
}>) {
  const SHORTEN_THRESHOLD = 100;
  const nullSafeContent = children.content ?? "failed to load content";
  const shortenedContent =
    nullSafeContent.length > SHORTEN_THRESHOLD
      ? `${nullSafeContent.slice(0, SHORTEN_THRESHOLD)}...`
      : nullSafeContent;
  return (
    <article id={`card-${children.id}`} className="text-xs m-4 p-4 bg-amber-50">
      <Link
        href={`/article/${moment(children.publishedAt).format("YYYY/MM")}/${children.id}`}
      >
        <h1>{children.title}</h1>
        <HtmlContent prettyPrint={false}>{shortenedContent}</HtmlContent>
      </Link>
    </article>
  );
}
