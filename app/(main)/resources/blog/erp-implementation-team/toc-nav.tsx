"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = {
  id: string;
  label: string;
};

type TocNavProps = {
  items: TocItem[];
};

export function TocNav({ items }: TocNavProps) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const hashId = window.location.hash.replace("#", "");
    if (hashId && ids.includes(hashId)) {
      setActiveId(hashId);
    }
  }, [ids]);

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <ul className="mt-3 space-y-2 border-l border-[#4EB3E8]/35 pl-3">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id} className={isActive ? "relative" : ""}>
            {isActive && <span className="absolute -left-[13px] top-0 h-full w-[2px] rounded-full bg-[#4EB3E8]" />}
            <a
              href={`#${item.id}`}
              onClick={handleScroll(item.id)}
              className={`block text-[12.5px] leading-[1.55] tracking-[0.001em] transition-colors ${
                isActive
                  ? "font-semibold text-[#4EB3E8]"
                  : "text-black/72 hover:text-[#4EB3E8] dark:text-white/72"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
