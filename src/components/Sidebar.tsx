import { SidebarPosition, SidebarType } from "@/lib/constant";
import React from "react";

export default function Sidebar({
  children,
  position,
  type,
}: Readonly<{
  children?: React.ReactNode;
  position: SidebarPosition;
  type: SidebarType;
}>) {
  return (
    <aside id={type} className={`${position}`}>
      {React.Children.count(children) > 0 && children}
    </aside>
  );
}
