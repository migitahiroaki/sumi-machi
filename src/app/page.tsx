import { pageTitle, SITE_DESCRIPTION } from "@/lib/constant";
import { Fragment } from "react";

// This is a Next.js 13+ app directory page
export async function generateMetadata() {
  return {
    title: pageTitle("トップページ"),
    description: SITE_DESCRIPTION,
  };
}

export default function Home() {
  return (
    <Fragment>
      <h1>hello world</h1>
      <p>this is an example</p>
    </Fragment>
  );
}
