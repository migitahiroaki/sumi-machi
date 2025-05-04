import { Tag } from "@/lib/microcms";
import moment from "moment";
import TagBadge from "./atoms/Tag";

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
    <aside>
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
        {tags && (
          <div className="justify-start">
            {tags.map((tag: Tag) => (
              <TagBadge key={`ContentInfo-Tag-${tag.id}`} tag={tag} />
            ))}
          </div>
        )}
      </div>
      {/* tag list */}
    </aside>
  );
}
