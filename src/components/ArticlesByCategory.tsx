import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Article, Category, listArticles } from "@/lib/microcms";
import ArticleList from "./ArticleList";
import Link from "next/link";
import { IoNewspaperOutline } from "react-icons/io5";

export async function ArticlesByCategory() {
  const articles: Article[] = (
    await listArticles({
      fields: [
        "id",
        "title",
        "description",
        "content",
        "eyecatch",
        "publishedAt",
        "category.id",
        "category.name",
        "tags.id",
        "tags.name",
      ],
      depth: 1,
    })
  ).contents;

  const categoryIdToArticle = new Map<string, Article[]>();
  const categoryIdToCategory = new Map<string, Category>();

  articles.forEach((article: Article) => {
    const k: string = article.category.id;
    const v: Article[] = categoryIdToArticle.get(k) ?? [];
    categoryIdToCategory.set(k, article.category);
    v.push(article);
    categoryIdToArticle.set(k, v);
  });

  const orderedCategories = Array.from(categoryIdToCategory.values()).sort(
    (a, b) => a.name.localeCompare(b.name, "ja")
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      {orderedCategories &&
        orderedCategories.map((category: Category) => {
          const articlesInCategory: Article[] =
            categoryIdToArticle.get(category.id) ?? [];
          return (
            <AccordionItem
              key={`CategoryAccordionItem-${category.id}`}
              value={category.id}
            >
              <AccordionTrigger key={`CategoryAccordionTrigger-${category.id}`}>
                {`${category.name} (${articlesInCategory.length})`}{" "}
              </AccordionTrigger>
              <AccordionContent key={`CategoryAccordionContent-${category.id}`}>
                <ArticleList
                  key={`CategoryArticleList-${category.id}`}
                  articles={articlesInCategory}
                />
                <Link href={`articles/${category.id}`}>
                  {/* <span className="inline-flex items-center hover:underline"> */}
                  <div className="inline-flex w-full justify-center hover:underline">
                    <IoNewspaperOutline size={20} />
                    <span className="text-blue-700">
                      {" "}
                      「{category.name}」カテゴリ の記事一覧ページを表示
                    </span>
                  </div>
                </Link>
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
}
