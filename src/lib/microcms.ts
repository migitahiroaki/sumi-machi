import { createClient } from "microcms-js-sdk";
import { categoryListToTrees } from "./list-util";

export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  category: Category;
  tags: string[];
  revisedAt?: string;
  content?: string;
}

export interface AllArticlesWithTotal {
  contents: Article[];
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

export const listArticles = async (
  fields?: string[],
  depth?: 0 | 1 | 2 | 3,
  orders?: string,
  limit?: number
): Promise<Article[]> => {
  const res = await client.getList<Article>({
    endpoint: "article",
    queries: {
      fields: fields,
      depth: depth,
      limit: limit || 16,
      orders: orders || "-publishedAt",
    },
  });

  return res.contents;
};

export const getArticleContentDetail = async (id: string): Promise<Article> => {
  // articleObjectResponse dosn't countain parentCategory.name.
  const articleRes = await client.get<Article>({
    endpoint: "article",
    contentId: id,
    queries: {
      fields: [
        "id",
        "title",
        "content",
        "category",
        "tags",
        "publishedAt",
        "revisedAt",
      ],
    },
  });
  // so, fetch separately
  const parentCategoryRes = articleRes.category.parentCategory
    ? await client.get<Category>({
        endpoint: "category",
        contentId: articleRes.category.parentCategory.id,
        queries: {
          fields: ["id", "name"],
        },
      })
    : void 0;
  // merge parentCategory to articleObjectResponse
  return {
    ...articleRes,
    category: {
      id: articleRes.category.id,
      name: articleRes.category.name,
      parentCategory: parentCategoryRes,
    },
  };

  return articleRes;
};

export const getCategory = async (id: string): Promise<Category> => {
  const res = await client.get<Category>({
    endpoint: "category",
    contentId: id,
    queries: {
      fields: ["id", "name", "parentCategory"],
    },
  });
  return res;
};

export const listAllCategories = async (): Promise<AllCategoriesWithTotal> => {
  const res = await client.getList<Category>({
    endpoint: "category",
    queries: {
      fields: ["id", "name", "parentCategory"],
      depth: 1, // max depth of category is 2 (parent, child)
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
