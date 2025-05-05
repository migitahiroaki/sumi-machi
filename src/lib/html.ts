export const stripTagsFromHtml = (
  html: string,
  brToSpace?: boolean,
  sub?: number
): string => {
  const htmlString = brToSpace ? html.replaceAll("<br>", " ") : html;
  const stripped = htmlString.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

  return sub ? stripped.substring(0, sub) : stripped;
};
