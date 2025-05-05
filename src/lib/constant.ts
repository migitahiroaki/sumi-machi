import { BreadcrumbElement } from "@/components/Breadcrumbs";

export const SITE_NAME = "住みよいまちだ";
export const SITE_DESCRIPTION = "町田での生活を発信していきます。";
export const AUTHOR_NAME = "右田 裕明";
export const TRUNCATE_TEXT_THRESHOLD_PC = 512;

export const HOME: BreadcrumbElement = {
  label: "ホーム",
  link: "/",
};

export const CATEGORY: BreadcrumbElement = {
  label: "カテゴリ",
  link: "/categories",
};

export const ARTICLE: BreadcrumbElement = {
  label: "ブログ記事",
  link: "/articles",
};
