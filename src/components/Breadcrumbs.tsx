import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HOME } from "@/lib/constant";
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
  const elementsWithHome: BreadcrumbElement[] = [HOME, ...elements];
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {elementsWithHome.map(({ label, link }, index: number) => (
          <Fragment key={`BreadcrumbFragment${index}`}>
            {index < elementsWithHome.length - 1 ? (
              <>
                <BreadcrumbItem key={`BreadcrumbItem-${index}`}>
                  <BreadcrumbLink href={link ?? "#"}>{label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbItem key={`BreadcrumbItem-${index}`}>
                <BreadcrumbPage>{label}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
