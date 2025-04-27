import { Category } from "@/lib/microcms";
import moment from "moment";
import { Fragment } from "react";

export default function MetaInfo({
  title,
  categories,
  publishedAt,
  revisedAt,
}: {
  title: string;
  categories?: Category[];
  publishedAt?: string;
  revisedAt?: string;
}) {
  return (
    <Fragment>
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

        {categories && categories.length > 0 && (
          <div className="grid col-span-9 grid-cols-subgrid">
            <div>カテゴリ:</div>
            <div className="grid">
              {categories.map((category) => (
                <div className="grid col-span-2" key={category.id}>
                  #{category.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
