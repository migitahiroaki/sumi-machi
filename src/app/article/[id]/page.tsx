import MetaInfo from "@/components/MetaInfo";
import HtmlContent from "@/components/HtmlContent";
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
            <MetaInfo 
                title={articleContentDetail.title}
                categories={articleContentDetail.categories}
                publishedAt={articleContentDetail.publishedAt}
                revisedAt={articleContentDetail.revisedAt}
            />
            {/* display content */}
            <HtmlContent content={articleContentDetail.content} />
        </div>
    );
}