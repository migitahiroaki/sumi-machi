import {
  createClient,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";

interface MicroCMSContentData extends MicroCMSContentId, MicroCMSDate {}

export interface EyeCatch {
  url: string;
  height: number;
  width: number;
}

export interface Article extends MicroCMSContentData {
  title: string;
  description: string;
  content: string;
  category: Category;
  tags: Tag[];
  eyecatch?: EyeCatch;
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

interface CommonQueryParams {
  fields?: string[];
  depth?: 0 | 1 | 2 | 3;
  richEditorFormat?: "html" | "object";
}

interface ListQueryParams extends CommonQueryParams {
  ids?: string[];
  fields?: string[];
  filters?: string;
  q?: string;
  limit?: number;
  offset?: number;
  orders?: string;
}

// Initialize Client SDK.
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export const listArticles = async (
  queryParams?: ListQueryParams
): Promise<MicroCMSListResponse<Article>> => {
  return await client.getList<Article>({
    endpoint: "articles",
    queries: queryParams,
  });
};

export const getArticle = async (
  id: string,
  queryParams?: CommonQueryParams
): Promise<Article> => {
  return await client.get<Article>({
    endpoint: "articles",
    contentId: id,
    queries: queryParams,
  });
};

export const listCategories = async (
  queryParams?: ListQueryParams
): Promise<MicroCMSListResponse<Category>> => {
  return await client.getList<Category>({
    endpoint: "categories",
    queries: queryParams,
  });
};

export const getCategory = async (
  id: string,
  queryParams?: CommonQueryParams
): Promise<Category> => {
  const res = await client.get<Category>({
    endpoint: "categories",
    contentId: id,
    queries: queryParams,
  });
  return res;
};
