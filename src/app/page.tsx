"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Cloud,
  Database,
  FolderGit2,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { id: "perfil", label: "Perfil" },
  { id: "experiencia", label: "Experiencia" },
  { id: "skills", label: "Skills" },
  { id: "proyectos", label: "Proyectos" },
  { id: "educacion", label: "Educación" },
  { id: "contacto", label: "Contacto" },
];

const stats = [
  { value: "5+", label: "años de experiencia" },
  { value: "4", label: "roles en datos" },
  { value: "PL-300", label: "certificación Microsoft" },
  { value: "Fabric", label: "arquitecturas Medallion" },
];

const techMarquee = [
  "Microsoft Fabric",
  "SQL",
  "Python",
  "Airflow",
  "SSIS",
  "Power BI",
  "DAX",
  "Power Query",
  "PostgreSQL",
  "BigQuery",
  "AWS",
  "GCP",
  "D3.js",
  "Tableau",
  "Looker Studio",
];

const experience = [
  {
    role: "Data Engineer Sr.",
    company: "COREBI Data & Analytics",
    location: "Buenos Aires · Remoto",
    period: "Mar 2024 – Actualidad",
    logo: "/corebi-image.jpg",
    current: true,
    points: [
      "Diseño de arquitecturas Medallion (Bronze/Silver/Gold), pipelines, flujos de datos y modelos semánticos en Microsoft Fabric.",
      "Integración, transformación y disponibilización de datos; desarrollo de soluciones de catálogo y automatización con Power Automate.",
      "Soluciones analíticas para YPF: modelos, datasets y visualizaciones Power BI; visuales personalizados con D3.js y pbiviz.",
    ],
  },
  {
    role: "Data Engineer Jr.",
    company: "COREBI Data & Analytics",
    location: "Buenos Aires",
    period: "Ene 2023 – Mar 2024",
    logo: "/corebi-image.jpg",
    current: false,
    points: [
      "Procesos ETL y validaciones con SSIS, SQL Server y stored procedures; automatización con Python y Airflow.",
      "Integración de datos para tableros gerenciales de alto volumen en Power BI y Tableau.",
    ],
  },
  {
    role: "Reporting Specialist",
    company: "Frubis",
    location: "Buenos Aires",
    period: "Jul 2022 – Ene 2023",
    logo: "/frubis-image.jpg",
    current: false,
    points: [
      "Reporting y fuentes de datos para 9 cuentas; automatización de ingestas y actualizaciones con Apps Script, Sheets y GCP.",
    ],
  },
  {
    role: "Data Analyst & Planning",
    company: "Decreditos",
    location: "Buenos Aires",
    period: "Oct 2021 – Jul 2022",
    logo: "/decreditos-image.jpg",
    current: false,
    points: [
      "Productos financieros basados en tasas BCRA y automatización de reportes con SQL Server, Google Analytics y HubSpot.",
      "Desarrollo de tableros gerenciales en Power BI y Looker Studio.",
    ],
  },
];

const skillGroups: {
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    title: "Data Engineering",
    icon: Layers,
    items: [
      "Microsoft Fabric",
      "Medallion",
      "ETL/ELT",
      "Pipelines",
      "Dataflows Gen2",
      "SSIS",
      "Airflow",
    ],
  },
  {
    title: "Lenguajes y datos",
    icon: Database,
    items: [
      "SQL",
      "Python",
      "Power Query (M)",
      "SQL Server",
      "PostgreSQL",
      "BigQuery",
      "Teradata",
      "Cloudera",
    ],
  },
  {
    title: "Cloud, modelado y BI",
    icon: Cloud,
    items: [
      "GCP",
      "AWS",
      "Modelos semánticos",
      "Power BI",
      "DAX",
      "Tableau",
      "Looker Studio",
    ],
  },
  {
    title: "Otras herramientas",
    icon: Wrench,
    items: ["Power Automate", "Google Apps Script", "D3.js", "pbiviz"],
  },
];

const projects = [
  {
    title: "better-ganttV2",
    description: "Gantt custom para Power BI con DAX y visualización avanzada.",
    tags: ["Power BI", "DAX", "Visualización"],
    github: "https://github.com/NicoPastorini1/better-ganttV2",
  },
  {
    title: "Advanced-Gantt",
    description:
      "Gantt avanzado para Power BI con lógica compleja y foco en performance.",
    tags: ["Power BI", "DAX", "Performance"],
    github: "https://github.com/NicoPastorini1/Advanced-Gantt",
  },
  {
    title: "button-toggle-pbiviz",
    description: "Custom Visual para Power BI con botón toggle interactivo.",
    tags: ["TypeScript", "pbiviz SDK", "Power BI"],
    github: "https://github.com/NicoPastorini1/button-toggle-pbiviz",
  },
  {
    title: "Web Scraping – Tienda DIA",
    description: "Scraping de e-commerce para análisis de precios y competencia.",
    tags: ["Python", "Web Scraping", "E-commerce"],
    github: "https://github.com/NicoPastorini1/dia-webscrapping",
  },
];

const education = [
  {
    institution: "Microsoft",
    major: "PL-300 – Power BI Data Analyst",
    date: "2024",
    location: "Online",
  },
  {
    institution: "Argentina Programa",
    major: "Full Stack Developer",
    date: "2022",
    location: "Argentina",
  },
];

const contacts: {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: "nicolaspastorini14@gmail.com",
    href: "mailto:nicolaspastorini14@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "nicolas-pastorini",
    href: "https://linkedin.com/in/nicolas-pastorini",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "NicoPastorini1",
    href: "https://github.com/NicoPastorini1",
    icon: Github,
    external: true,
  },
  {
    label: "Portfolio",
    value: "datascienceportfol.io",
    href: "https://www.datascienceportfol.io/nicolaspastorini14",
    icon: Globe,
    external: true,
  },
  {
    label: "Teléfono",
    value: "+54 11 6045-5669",
    href: "tel:+541160455669",
    icon: Phone,
  },
];

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-accent">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("perfil");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
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

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="orb orb-primary absolute -top-48 left-[12%] h-[34rem] w-[34rem]" />
        <div className="orb orb-secondary absolute right-[-6rem] top-1/3 h-[28rem] w-[28rem]" />
      </div>

      <nav className="sticky top-4 z-40 mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-line/70 bg-panel/70 px-4 py-3 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <a href="#perfil" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-sm font-semibold text-accent transition-colors group-hover:bg-accent/20">
              NP
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-ink sm:block">
              Nicolás Pastorini
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === item.id
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>

      <main>
        <section id="perfil" className="scroll-mt-28 mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                <span className="animate-pulse-glow h-1.5 w-1.5 rounded-full bg-accent" />
                Disponible para nuevos desafíos
              </span>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Nicolás
                <br />
                <span className="text-gradient">Pastorini</span>
              </h1>

              <p className="mt-5 text-lg text-ink/90">
                Ingeniero de Datos ·{" "}
                <span className="text-accent">Microsoft Fabric</span>
              </p>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Ingeniero de Datos con <strong className="text-ink">5 años de experiencia</strong>{" "}
                en energía, finanzas y marketing digital. Desarrollo de arquitecturas
                Medallion, pipelines y procesos ETL/ELT con Microsoft Fabric, SQL, Python,
                SSIS y Airflow. Enfoque en datos confiables, automatización y soluciones
                escalables para analítica y negocio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-canvas transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgb(var(--glow)/0.8)]"
                >
                  Hablemos
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://github.com/NicoPastorini1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/60 px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/nicolas-pastorini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/60 px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line/70 bg-panel/40 px-3 py-3 transition-colors hover:border-accent/30"
                  >
                    <p className="text-xl font-semibold text-accent">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160} className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-accent2/20 blur-2xl" />
              <div className="animate-spin-slow absolute -inset-6 -z-10 rounded-[3rem] border border-dashed border-line/60" />
              <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-panel/60 p-2 backdrop-blur">
                <Image
                  src="/me-image.png"
                  alt="Nicolás Pastorini"
                  width={420}
                  height={420}
                  priority
                  className="h-full w-full rounded-[1.6rem] object-cover"
                />
              </div>
              <div className="animate-float absolute -bottom-4 -left-4 rounded-2xl border border-line bg-panel/90 px-4 py-3 backdrop-blur">
                <p className="text-2xl font-semibold text-accent">5+</p>
                <p className="text-xs text-muted">años de experiencia</p>
              </div>
              <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-1.5 text-xs text-muted backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Data · BI · Cloud
              </div>
            </Reveal>
          </div>
        </section>

        <div className="marquee-mask relative overflow-hidden border-y border-line/60 bg-panel/30 py-3">
          <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
              >
                {tech}
                <span className="h-1 w-1 rounded-full bg-accent/50" />
              </span>
            ))}
          </div>
        </div>

        <section id="experiencia" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading icon={Briefcase} eyebrow="Trayectoria" title="Experiencia" />
          </Reveal>

          <div className="relative space-y-5 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-line before:to-transparent">
            {experience.map((exp, index) => (
              <Reveal key={`${exp.company}-${exp.period}`} delay={index * 80}>
                <div className="relative pl-10">
                  <span className="absolute left-0 top-6 grid h-6 w-6 place-items-center rounded-full border border-accent/30 bg-panel">
                    <span className="animate-pulse-glow h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <article className="group rounded-2xl border border-line/70 bg-panel/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel2/60 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-lg border border-line/60 bg-white object-contain p-1"
                        />
                        <div>
                          <h3 className="font-medium text-ink">{exp.role}</h3>
                          <p className="text-sm text-accent">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="flex items-center justify-end gap-2 text-xs font-medium text-muted">
                          {exp.current && (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          )}
                          {exp.period}
                        </p>
                        <p className="mt-1 text-xs text-muted/70">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading
              icon={Layers}
              eyebrow="Herramientas"
              title="Habilidades técnicas"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 70}>
                  <article className="group h-full rounded-2xl border border-line/70 bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel2/60">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-medium text-ink">{group.title}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-panel2/60 px-3 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-accent/25 group-hover:text-ink"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading icon={FolderGit2} eyebrow="Código" title="Proyectos" />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 70}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/70 bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel2/60 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium text-ink">{project.title}</h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-panel2/60 px-2.5 py-1 text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-accent">
                    <Github className="h-4 w-4" />
                    Ver código
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="educacion" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading
              icon={GraduationCap}
              eyebrow="Formación"
              title="Educación y certificaciones"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.major} delay={index * 80}>
                <article className="group flex h-full items-start gap-4 rounded-2xl border border-line/70 bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel2/60">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {item.institution}
                    </p>
                    <h3 className="mt-1 font-medium text-ink">{item.major}</h3>
                    <p className="mt-1 text-xs text-muted">
                      {item.date} · {item.location}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contacto" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line/70 bg-panel/50 p-8 text-center backdrop-blur sm:p-12">
              <div className="absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-accent2/15 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  <Mail className="h-4 w-4" />
                  Contacto
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Hablemos de datos.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                  ¿Tenés un desafío de ingeniería de datos, analítica o visualización?
                  Estoy abierto a nuevas oportunidades y colaboraciones.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        {...(contact.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group inline-flex items-center gap-2 rounded-xl border border-line bg-panel/60 px-4 py-2.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                      >
                        <Icon className="h-4 w-4 text-accent" />
                        <span className="hidden sm:inline text-muted transition-colors group-hover:text-ink">
                          {contact.label}
                        </span>
                        <span className="text-xs text-muted/80">{contact.value}</span>
                      </a>
                    );
                  })}
                </div>

                <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  Buenos Aires, Argentina · Trabajo remoto
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row">
          <p>© 2026 Nicolás Pastorini · Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            Construido con Next.js
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
