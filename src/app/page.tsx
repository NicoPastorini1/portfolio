"use client";

import Image from "next/image";
import { Mail, Github, Linkedin, Database, Code2, ExternalLink, Briefcase } from "lucide-react";

const projects = [
  {
    title: "better-ganttV2",
    description: "Gantt custom para Power BI con DAX y visualización avanzada.",
    tags: ["Power BI", "DAX", "Visualización"],
    github: "https://github.com/NicoPastorini1/better-ganttV2",
  },
  {
    title: "Advanced-Gantt",
    description: "Gantt avanzado para Power BI con lógica compleja y foco en performance.",
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

const experience = [
  {
    company: "COREBI Data & Analytics (NowVertical)",
    role: "Data Engineer SSR",
    period: "Mar 2024 – Actualidad",
    logo: "/corebi-image.jpg",
    description: "Desarrollo y mantenimiento de soluciones de analítica y visualización orientadas a negocio. Diseño modelos de datos y tableros en Power BI para análisis de grandes volúmenes de información. Desarrollo flujos de datos y catálogos de datos, automatizando procesos mediante Power Automate. También implemento visualizaciones personalizadas con D3.js y pbiviz. Complemento el análisis con Python (Pandas, NumPy) para procesamiento y exploración de datos a gran escala.",
  },
  {
    company: "COREBI Data & Analytics (NowVertical)",
    role: "Data Engineer JR",
    period: "Ene 2023 – Mar 2024",
    logo: "/corebi-image.jpg",
    description: "Diseño e implementación de procesos ETL utilizando SSIS y SQL Server, incluyendo validaciones y control de calidad de datos mediante stored procedures. Automatización de pipelines y procesos de datos con Python y Airflow. Desarrollo de tableros analíticos y gerenciales en Power BI y Tableau para grandes volúmenes de información.",
  },
  {
    company: "Frubis",
    role: "Reporting Specialist",
    period: "Julio 2022 – Enero 2023",
    logo: "/frubis-image.jpg",
    description: "Soporte analítico para múltiples cuentas de marketing digital. Mantenimiento y desarrollo de dashboards en Looker Studio, administración de fuentes de datos y automatización de ingesta mediante Google Apps Script, Google Sheets y servicios de Google Cloud Platform.",
  },
  {
    company: "Decréditos",
    role: "Data Analyst & Planning",
    period: "Octubre 2021 – Julio 2022",
    logo: "/decreditos-image.jpg",
    description: "Análisis de datos y planificación financiera. Diseño de productos financieros basados en tasas del BCRA y desarrollo de los primeros tableros gerenciales de la empresa en Power BI. Automatización de reportes y consolidación de datos integrando SQL Server, Google Analytics y CRM (HubSpot) mediante Looker Studio.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-blue-600 dark:bg-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/me-image.png"
            alt="Nicolás Pastorini"
            width={180}
            height={180}
            className="rounded-full border-4 border-white/30"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4">Nicolás Pastorini</h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-6">Ingeniero de Datos | Python · BI · Backend</p>
            <p className="text-blue-200 dark:text-blue-300 max-w-2xl">
              Ingeniero de Datos con <strong>4 años de experiencia</strong> en soluciones analíticas 
              orientadas a BI, planificación y toma de decisiones. Especializado en Data Visualization 
              & Data Engineering para energía, finanzas y marketing digital. Actualmente en transición 
              hacia <strong>AI Engineering</strong>.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          Tech Stack
        </h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Lenguajes</h3>
          <div className="flex flex-wrap gap-3">
            {["Python", "JavaScript", "SQL"].map((tech) => (
              <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Backend & Data</h3>
          <div className="flex flex-wrap gap-3">
            {["Node.js", "PostgreSQL", "SQL Server"].map((tech) => (
              <span key={tech} className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">BI & Visualización</h3>
          <div className="flex flex-wrap gap-3">
            {["Power BI", "Tableau", "Looker Studio", "D3.js"].map((tech) => (
              <span key={tech} className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Certificaciones</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
              Power BI PL-300
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          Experiencia
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.company + exp.period} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-600 dark:border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={60}
                  height={60}
                  className="rounded-lg object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">{exp.role}</h3>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{exp.company}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
            <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Ver código
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-800 dark:bg-black text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
          <p className="text-slate-300 dark:text-slate-400 mb-8">
            ¿Interesado en trabajar juntos? Contáctame para discutir proyectos de datos.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:nicolaspastorini14@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              nicolaspastorini14@gmail.com
            </a>
            <a
              href="https://github.com/NicoPastorini1"
              target="_blank"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nicolas-pastorini"
              target="_blank"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 dark:bg-black text-slate-400 dark:text-slate-500 py-6 text-center text-sm">
        <p>© 2026 Nicolás Pastorini. Built with Next.js</p>
      </footer>
    </div>
  );
}
