import { Category, TreeNodeCategory } from "./microcms";

export function categoryListToTrees(categoryList: Category[]): TreeNodeCategory[] {
    // 1. ID をキーとするマップを作成
    const categoryMap: Map<string, TreeNodeCategory> = new Map();

    // 2. categoryList を TreeNodeCategory に変換し、マップに登録
    categoryList.forEach(category => {
        categoryMap.set(category.id, { ...category, children: [] });
    });

    // 3. ルートノード（親がいないカテゴリ）を格納する配列
    const rootCategories: TreeNodeCategory[] = [];

    // 4. 親子関係を構築
    categoryList.forEach(category => {
        const treeNode: TreeNodeCategory = categoryMap.get(category.id)!;
        if (category.parentCategory) {
            // 親カテゴリが存在する場合、親の children に追加
            const parentNode = categoryMap.get(category.parentCategory.id);
            if (parentNode) {
                parentNode.children.push(treeNode);
            }
        } else {
            // 親カテゴリが存在しない場合、ルートノードとして追加
            rootCategories.push(treeNode);
        }
    });

    return rootCategories;
}