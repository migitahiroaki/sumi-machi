import { createClient } from 'microcms-js-sdk';

export interface ArticleBase {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
}

export interface ArticleContent extends ArticleBase {
  content: string,
}
export interface ArticleContentDetail extends ArticleContent {
  category: { name: string}
}

export interface ListAllArticlesResponse {
  contents: ArticleBase[];
  totalCount: number;
}

const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY || '';
const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN || '';

if (!MICROCMS_API_KEY || !MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_API_KEY or MICROCMS_SERVICE_DOMAIN is not set in environment variables.');
}

// Initialize Client SDK.
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY
});

// async function listArticles() {
//   const res = await client.getList<ArticleBase>({
//     endpoint: 'articles',
//     queries: {
//       fields: ['id', 'title'],
//       limit: 10,
//       // orders: '-publishedAt'
//     }
//   });

//   return res.contents;

// }
export const listArticles = async(): Promise<ArticleBase[]> => {
  const res = await client.getList<ArticleBase>({
    endpoint: 'article',
    queries: {
      fields: ['id', 'title'],
      limit: 10,
      // orders: '-publishedAt'
    }
  });

  return res.contents;
}

export const getArticleContentDetail = async (id: string): Promise<ArticleContentDetail> => {
  const res = await client.get<ArticleContentDetail>({
    endpoint: 'article',
    contentId: id,
    queries: {
      fields: ['id', 'title', 'content'],
    }
  });

  return res;
}
