"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Layers,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";

export const navSections: {
  id: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { id: "perfil", label: "Perfil", icon: User },
  { id: "experiencia", label: "Experiencia", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "proyectos", label: "Proyectos", icon: FolderGit2 },
  { id: "educacion", label: "Educación", icon: GraduationCap },
  { id: "contacto", label: "Contacto", icon: Mail },
];

export function useActiveSection() {
  const [active, setActive] = useState("perfil");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return active;
}

export function FloatingNav() {
  const active = useActiveSection();
  const isHidden = active === "perfil";

  return (
    <nav
      aria-hidden={isHidden}
      aria-label="Secciones"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul
        className={`flex flex-col items-center gap-1 rounded-full border border-line/70 bg-panel/70 p-1.5 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 ${
          isHidden
            ? "invisible -translate-x-4 opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        {navSections.map(({ id, label, icon: Icon }) => (
          <li key={id} className="relative">
            <a
              href={`#${id}`}
              tabIndex={isHidden ? -1 : undefined}
              className={`group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                active === id
                  ? "bg-accent/15 text-accent"
                  : "text-muted hover:bg-panel2/70 hover:text-ink"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="pointer-events-none absolute left-full ml-2 flex -translate-x-1.5 items-center whitespace-nowrap rounded-full border border-line/70 bg-panel/95 px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
