export default function Sidebar({
  children,
  position,
}: Readonly<{
  children: React.ReactNode;
  position: "left" | "right";
}>) {
  return (
    <aside className={`sidebar-${position} bg-amber-200`}>{children}</aside>
  );
}
