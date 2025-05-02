import {
  createClient,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";

interface MicroCMSContentData extends MicroCMSContentId, MicroCMSDate {}

export interface Article extends MicroCMSContentData {
  title: string;
  description: string;
  content: string;
  category: Category;
  tags: Tag[];
  eyecatch?: string;
}

export interface Category extends MicroCMSContentData {
  name: string;
}

export interface Tag extends MicroCMSContentData {
  name: string;
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
): Promise<MicroCMSListResponse<Article>> => {
  return await client.getList<Article>({
    endpoint: "articles",
    queries: {
      fields: fields,
      depth: depth,
      limit: limit,
      orders: orders,
    },
  });
};

export const getArticle = async (
  id: string,
  fields?: string[]
): Promise<Article> => {
  return await client.get<Article>({
    endpoint: `articles/${id}`,
    queries: {
      fields,
    },
  });
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
