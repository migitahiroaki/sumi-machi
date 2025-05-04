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
      href: "/categories",
    },
  ];
  return (
    <header id="header-brand" className="header bg-white">
      <span className="text-2xl font-bold">住みよい町田</span>
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
      {children}
    </header>
  );
}
