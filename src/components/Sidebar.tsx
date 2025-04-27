export default function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <aside className="header bg-blue-300">{children}</aside>;
}
