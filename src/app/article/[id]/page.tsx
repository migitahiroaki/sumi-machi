import { getArticleContentDetail, listArticles, ArticleContentDetail } from "@/lib/microcms";

export async function generateStaticParams() {
    const articles = await listArticles();
    const paths = articles.map((article) => ({
        id: article.id
    }));
    return [...paths];
}

export default async function ArticleContentDetailPage(props: { params: Promise<{id: string}>}) {

    const resolvedParams = await props.params
    const articleContentDetail: ArticleContentDetail = await getArticleContentDetail(resolvedParams.id);

    return (
        <div>
            <h2>{articleContentDetail.title}</h2>
            <p>{articleContentDetail.publishedAt}</p>
            <div dangerouslySetInnerHTML={{ __html: articleContentDetail.content }} />
        </div>
    );
}