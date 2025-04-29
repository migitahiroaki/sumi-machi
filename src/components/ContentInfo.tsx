import { Category } from "@/lib/microcms";
import moment from "moment";
import { Fragment } from "react";
import BreadCrumbs, { ListElement } from "./BreadCrumbs";

export default function MetaInfo({
  title,
  category,
  tags,
  publishedAt,
  revisedAt,
}: {
  title: string;
  category?: Category;
  tags?: string[];
  publishedAt?: string;
  revisedAt?: string;
}) {
  const bcListElement: ListElement[] = [
    {
      label: "ホーム",
      link: "/",
    },
  ];
  if (category) {
    if (category.parentCategory) {
      bcListElement.push({
        label: category.parentCategory.name,
        link: `/category/${category.parentCategory.id}`,
      });
    }
    bcListElement.push({
      label: category.name,
      link: `/category/${category.id}`,
    });
    bcListElement.push({ label: title });
  }
  return (
    <Fragment>
      {/* bread-crump list */}
      <BreadCrumbs listElements={bcListElement} />

      <h1>{title}</h1>
      <div className="grid-cols-3 sm:grid-cols-6">
        {publishedAt && (
          <div className="grid col-span-3 grid-cols-subgrid">
            <div className="grid">公開日:</div>
            <div className="grid col-span-2">
              {moment(publishedAt).format("YYYY / MM / DD")}
            </div>
          </div>
        )}

        {revisedAt && publishedAt != revisedAt && (
          <div className="grid col-span-4 grid-cols-subgrid">
            <div className="grid">更新日:</div>
            <div className="grid col-span-3">
              {moment(revisedAt).format("YYYY / MM / DD")}
            </div>
          </div>
        )}
      </div>
      {/* tag list */}
      {tags && (
        <ul className="flex flex-wrap">
          タグ
          <li className="flex">
            {tags.map((tag) => (
              <span key={tag} className="badge badge-primary">
                {tag}
              </span>
            ))}
          </li>
        </ul>
      )}
    </Fragment>
  );
}
