import { createClient } from "microcms-js-sdk";
import { categoryListToTrees } from "./list-util";

export interface ArticleBase {
  id: string;
  title: string;
  publishedAt: string;
}

export interface ArticleContent extends ArticleBase {
  content: string;
}

export interface ArticleContentDetail extends ArticleContent {
  categories: Category[];
  revisedAt: string;
}

export interface AllArticlesWithTotal {
  contents: ArticleBase[];
  totalCount: number;
}

export interface Category {
  id: string;
  name: string;
  parentCategory?: Category;
}

export interface TreeNodeCategory {
  id: string;
  name: string;
  children: TreeNodeCategory[];
}

export interface AllCategoriesWithTotal {
  contents: Category[];
  totalCount: number;
}

const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY || "";
const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN || "";

if (!MICROCMS_API_KEY || !MICROCMS_SERVICE_DOMAIN) {
  throw new Error(
    "MICROCMS_API_KEY or MICROCMS_SERVICE_DOMAIN is not set in environment variables."
  );
}

// Initialize Client SDK.
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export const listArticles = async (): Promise<ArticleBase[]> => {
  const res = await client.getList<ArticleBase>({
    endpoint: "article",
    queries: {
      fields: ["id", "title", "publishedAt"],
      limit: 10,
      // orders: '-publishedAt'
    },
  });

  return res.contents;
};

export const getArticleContentDetail = async (
  id: string
): Promise<ArticleContentDetail> => {
  const res = await client.get<ArticleContentDetail>({
    endpoint: "article",
    contentId: id,
    queries: {
      fields: [
        "id",
        "title",
        "content",
        "categories",
        "publishedAt",
        "revisedAt",
      ],
    },
  });

  return res;
};

export const listCategoryTree = async (): Promise<TreeNodeCategory[]> => {
  const res = await client.getList<Category>({
    endpoint: "category",
    queries: {
      fields: ["id", "name", "parentCategory"],
      depth: 1,
    },
  });
  const tree = categoryListToTrees(res.contents);
  return tree;
};
