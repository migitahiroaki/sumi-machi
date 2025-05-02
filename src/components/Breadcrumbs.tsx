import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export interface BreadcrumbElement {
  label: string;
  link?: string;
}

export default function Breadcrumbs({
  elements,
}: {
  elements: BreadcrumbElement[];
}) {
  const elementsWithHome: BreadcrumbElement[] = [
    {
      label: "ホーム",
      link: "/",
    },
    ...elements,
  ];
  console.log(elementsWithHome);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {elementsWithHome.map(({ label, link }, index: number) => (
          <Fragment key={`BreadcrumbFragment${index}`}>
            <BreadcrumbItem key={`BreadcrumbItem-${index}`}>
              {link ? (
                <BreadcrumbLink href={link}>{label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < elementsWithHome.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
