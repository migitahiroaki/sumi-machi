"use client";

import { SidebarType } from "@/lib/constant";
import React, { useRef } from "react";
import { useEffect } from "react";
import tocbot from "tocbot";

const Toc = ({
  targetId,
  pageId,
}: {
  targetId: SidebarType;
  pageId: string;
}) => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    console.log(targetElement);
    if (!targetElement) {
      return;
    }
    const nav = document.createElement("nav");
    navRef.current = nav;
    nav.className = "bg-gray-100";
    const h2 = document.createElement("h2");
    h2.textContent = "目次";
    h2.className = "text-sm p-4";
    nav.appendChild(h2);
    const divToc = document.createElement("div");
    divToc.className = "toc";
    nav.appendChild(divToc);
    targetElement.appendChild(nav);

    tocbot.init({
      // 目次を表示させる先のクラス名
      tocSelector: ".toc",
      // 目次を抽出したい要素のクラス名
      contentSelector: ".main",
      // 目次として抽出する見出しタグ
      headingSelector: "h2, h3",
      headingsOffset: 150,
    });

    // 不要になったインスタンスを削除
    return () => {
      tocbot.destroy();
      if (navRef.current) navRef.current.innerHTML = "";
    };
  }, [targetId, pageId]);

  return <></>;
};

export default Toc;
