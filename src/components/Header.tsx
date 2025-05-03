import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navMenuItems: { title: string; href: string }[] = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Category",
      href: "/category",
    },
  ];
  return (
    <header id="header-brand" className="header bg-blue-300">
      <span className="text-2xl font-bold">住みよい町田</span>
      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          {navMenuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <NavigationMenuLink>{item.title}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {children}
    </header>
  );
}
