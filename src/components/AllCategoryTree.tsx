import { listCategoryTree, TreeNodeCategory } from "@/lib/microcms";

export default async function AllCategoryTree() {
    const categoryList: TreeNodeCategory[] = await listCategoryTree();

    // 再帰的にツリー構造をレンダリングする関数
    const renderTree = (nodes: TreeNodeCategory[]) => {
        return (
            <ul className="list-disc pl-4">
                {nodes.map((node) => (
                    <li key={node.id}>
                        {node.name}
                        {node.children && node.children.length > 0 && renderTree(node.children)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">カテゴリ一覧</h2>
            {renderTree(categoryList)}
        </div>
    );
}