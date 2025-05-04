import { Article, Tag } from "@/lib/microcms";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
// import Image from "next/image";
import Link from "next/link";
import TagBadge from "./Tag";

export default function ArticleCard({
  article,
}: Readonly<{
  article: Article;
}>) {
  const prefix: string = `ArticleCard${article.id}`;
  return (
    <Card>
      <CardHeader>
        {/* FIXME: implement Custom Loader */}
        {/* {article.eyecatch && (
          <img src={article.eyecatch.url} alt={article.description} />
        )} */}

        <Link href={`/articles/${article.category.id}/${article.id}`}>
          <CardTitle>{article.title}</CardTitle>
          {/* <CardDescription>{article.description}</CardDescription> */}
        </Link>
      </CardHeader>
      <CardContent>
        <p>{article.description}</p>
      </CardContent>
      <CardFooter>
        {article.tags &&
          article.tags.map((tag: Tag) => (
            <TagBadge key={`${prefix}-${tag.id}`} tag={tag} />
          ))}
      </CardFooter>
    </Card>
  );
}
