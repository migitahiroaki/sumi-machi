import { Fragment } from "react";

export default function HtmlContent({
  children,
  prettyPrint,
}: {
  children: string | TrustedHTML;
  prettyPrint?: boolean;
}) {
  const htmlString = children.toString();
  const htmlContent =
    (prettyPrint ?? true)
      ? htmlString
      : htmlString.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

  return (
    <Fragment>
      {/* HTML フラグメントをレンダリング */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Fragment>
  );
}
