import { Tag } from "@/lib/microcms";
// import Link from "next/link";

export default function TagBadge({
  tag,
}: Readonly<{
  tag: Tag;
}>) {
  return (
    // <Link href={`/tags/${tag.id}`}>
    <span className="inline-flex mx-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
      {`# ${tag.name}`}
    </span>
    // </Link>
  );
}
