import { Tag } from "@/lib/microcms";
import moment from "moment";
import { Badge } from "./ui/badge";
import { Fragment } from "react";

export interface ContentInfoProps {
  tags: Tag[];
  publishedAt?: string;
  revisedAt?: string;
}

export default function ContentInfo({ props }: { props: ContentInfoProps }) {
  const tags: Tag[] = props.tags;
  const publishedAt: string | undefined = props.publishedAt;
  const revisedAt: string | undefined = props.revisedAt;
  return (
    <aside className="my-4">
      <div className="flex justify-start gap-8">
        {publishedAt && (
          <div>
            <span>公開日:　</span>
            <time dateTime={publishedAt}>
              {moment(publishedAt).format("YYYY / MM / DD")}
            </time>
          </div>
        )}

        {revisedAt && revisedAt != publishedAt && (
          <div>
            <span>更新日:　</span>
            <time dateTime={revisedAt}>
              {moment(revisedAt).format("YYYY / MM / DD")}
            </time>
          </div>
        )}
      </div>
      {/* tag list */}
      {tags && (
        <Fragment>
          <span>タグ: </span>
          {tags.map((tag: Tag) => (
            <Badge className="mx-2" key={tag.id}>
              {tag.name}
            </Badge>
          ))}
        </Fragment>
      )}
    </aside>
  );
}
