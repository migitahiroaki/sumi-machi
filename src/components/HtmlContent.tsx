export default function HtmlContent({ content }: { content: string }) {
    return (
        <div className="prose">
            {/* HTML フラグメントをレンダリング */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}