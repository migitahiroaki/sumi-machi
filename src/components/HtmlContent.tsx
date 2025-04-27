import { Fragment } from "react";

export default function HtmlContent({ content }: { content: string }) {
  return (
    <Fragment>
      {/* HTML フラグメントをレンダリング */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Fragment>
  );
}
