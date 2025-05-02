import NavigationMenu from "./NavMenu";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header id="header-brand" className="header bg-blue-300">
      <h1 className="text-2xl font-bold">住みよい町田</h1>
      <p className="text-sm">町田での生活を発信していきます。</p>
      {/* Navigation Menu */}
      <NavigationMenu />
      {children}
    </header>
  );
}
