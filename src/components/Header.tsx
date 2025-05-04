import { FaSearch } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Breadcrumbs, { BreadcrumbElement } from "./Breadcrumbs";

export default function Header({
  breadcrumbElements,
}: Readonly<{
  breadcrumbElements: BreadcrumbElement[];
}>) {
  const navMenuItems: { title: string; href: string }[] = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Category",
      href: "/categories",
    },
  ];
  return (
    <header id="header-brand" className="header bg-white">
      <div className="flex items-center justify-between m-4">
        <div className="text-4xl font-bold">住みよいまちだ</div>
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {navMenuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink href={item.href}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <FaSearch />
      </div>
      <Breadcrumbs elements={breadcrumbElements} />
    </header>
  );
}
