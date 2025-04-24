
import {Category } from "@/lib/microcms";

export default function MetaInfo({title, categories, publishedAt, revisedAt}: {title: string, categories?: Category[], publishedAt?: string, revisedAt?: string}) {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>

            <div className="flex items-center mb-2">
                {/* Display publication and revision dates */}
                {publishedAt && (
                    <span className="text-sm text-gray-500 mr-2">公開: {publishedAt}</span>
                )}
                {revisedAt && (
                    <span className="text-sm text-gray-500 mr-2">更新: {revisedAt}</span>
                )}
                {/* Display flat categories (if present)*/}
                {categories?.map((category) => (
                    <span key={category.id} className="text-sm text-gray-600 mr-2">
                        #{category.name}
                    </span>
                ))}
            </div>
        </>
    )
}