import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Header() {
  const navMenuItems: { title: string; href: string }[] = [
    { title: "Articles", href: "/articles" },
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
      <div className="flex flex-wrap items-center justify-between m-4">
        {/* FIXME: replace with banner */}
        <div className="text-4xl font-bold">すみよいまちだ</div>

        {/* Navigation Menu */}
        <NavigationMenu className="mr-12">
          <NavigationMenuList>
            {navMenuItems.map((item) => (
              <NavigationMenuItem key={item.href} className="px-4">
                <NavigationMenuLink href={item.href}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* <Search /> */}
      </div>
    </header>
  );
}
