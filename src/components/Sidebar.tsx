export default function Sidebar({
  children,
  position,
}: Readonly<{
  children: React.ReactNode;
  position: "left" | "right";
}>) {
  return <aside className={`sidebar-${position}`}>{children}</aside>;
}
