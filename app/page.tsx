import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Layers,
  Mail,
  MapPin,
  Rocket,
  ServerCog,
  ShieldCheck,
  SquareUserRound,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { ContactForm } from "./contact-form";

const navItems = [
  ["Services", "#services"],
  ["Industries", "#industries"],
  ["About Us", "#about"],
  ["Portfolio", "#portfolio"],
  ["Career", "#career"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: Code2,
    title: "Application Engineering",
    body: "Design and delivery of secure web platforms, portals, SaaS products, internal tools, and workflow systems.",
    points: ["Product strategy", "Full-stack builds", "Release support"],
  },
  {
    icon: Cloud,
    title: "Cloud and DevOps",
    body: "Cloud architecture, CI/CD, monitoring, observability, environment setup, and practical infrastructure modernization.",
    points: ["AWS-ready patterns", "Deployment pipelines", "Operational visibility"],
  },
  {
    icon: Database,
    title: "Data and AI Enablement",
    body: "Data pipelines, reporting layers, AI-assisted operations, automation workflows, and decision-support dashboards.",
    points: ["Dashboards", "Automation", "Data quality"],
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance Support",
    body: "Application hardening, identity and access reviews, secure delivery practices, audit preparation, and risk remediation.",
    points: ["Access control", "Secure SDLC", "Risk review"],
  },
  {
    icon: Workflow,
    title: "Systems Integration",
    body: "Reliable integrations between CRMs, ERPs, payments, data stores, support platforms, and third-party APIs.",
    points: ["API design", "Sync workflows", "Error handling"],
  },
  {
    icon: ServerCog,
    title: "Managed Technical Support",
    body: "Post-launch triage, performance checks, documentation, roadmap planning, and continuous improvement for live systems.",
    points: ["Issue triage", "Monitoring", "Roadmaps"],
  },
];

const proofPoints = [
  ["Business aligned", "Technology decisions tied to scope, cost, timeline, and measurable outcomes."],
  ["Production minded", "Architecture, release discipline, monitoring, and support planned from the beginning."],
  ["Security aware", "Identity, access, data handling, and operational risk are reviewed throughout delivery."],
  ["Clear ownership", "Structured communication, accountable delivery leads, and documented next steps."],
];

const industries = [
  {
    title: "Technology and SaaS",
    body: "Product teams that need additional engineering capacity, platform modernization, or production support.",
    outcomes: "Faster release cycles and clearer technical roadmaps.",
  },
  {
    title: "Professional Services",
    body: "Client portals, reporting workflows, billing integrations, document automation, and secure collaboration systems.",
    outcomes: "Less manual coordination and better client visibility.",
  },
  {
    title: "Healthcare Operations",
    body: "Operational dashboards, scheduling workflows, integrations, and internal tools built with careful data handling.",
    outcomes: "More reliable process execution and cleaner reporting.",
  },
  {
    title: "Staffing and Recruiting",
    body: "Talent platforms, CRM integrations, candidate workflows, matching tools, and analytics for distributed teams.",
    outcomes: "Improved workflow speed and candidate tracking.",
  },
  {
    title: "Finance and Back Office",
    body: "Approval systems, secure reporting, data reconciliation, audit workflows, and operational automation.",
    outcomes: "Better controls and reduced spreadsheet dependency.",
  },
  {
    title: "Enterprise Operations",
    body: "Legacy modernization, API programs, cloud migration, observability, and support models for internal systems.",
    outcomes: "Lower operational risk and stronger system visibility.",
  },
];

const portfolioItems = [
  {
    image: "/office-collaboration.jpg",
    label: "Client Portal",
    title: "Secure service portal for distributed operations",
    body: "A role-based portal for request intake, approvals, document exchange, and status visibility across client teams.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Auth"],
    impact: "Reduced manual handoffs and gave leadership a reliable operational view.",
  },
  {
    image: "/data-dashboard.jpg",
    label: "Data Platform",
    title: "Executive reporting and KPI dashboard",
    body: "Data pipelines and dashboards that replaced spreadsheet reporting with consistent metrics and audit-ready exports.",
    tech: ["ETL", "SQL", "BI", "APIs"],
    impact: "Improved reporting speed and helped teams review performance from one source of truth.",
  },
  {
    image: "/cloud-servers.jpg",
    label: "Cloud Modernization",
    title: "Production cloud environment and release pipeline",
    body: "Cloud infrastructure, deployment workflows, monitoring, backups, and rollback practices for a growing product team.",
    tech: ["AWS", "Docker", "CI/CD", "Observability"],
    impact: "Stabilized releases and improved incident response readiness.",
  },
  {
    image: "/software-workspace.jpg",
    label: "Workflow Automation",
    title: "Back-office automation for service teams",
    body: "Automated intake, routing, notifications, task tracking, and integration points for operational support teams.",
    tech: ["React", "REST APIs", "Queues", "CRM"],
    impact: "Reduced repetitive work and improved SLA visibility.",
  },
  {
    image: "/code-monitor.jpg",
    label: "Application Recovery",
    title: "Legacy codebase review and modernization roadmap",
    body: "Technical assessment, risk mapping, documentation, architecture recommendations, and staged delivery planning.",
    tech: ["Architecture", "Security", "Testing", "Roadmap"],
    impact: "Created a practical modernization path without interrupting active users.",
  },
  {
    image: "/hero-infrastructure.jpg",
    label: "IT Reliability",
    title: "Monitoring and support model for critical systems",
    body: "Incident workflows, monitoring standards, runbooks, and support escalation processes for production applications.",
    tech: ["Runbooks", "Alerts", "SLOs", "Support"],
    impact: "Improved operational clarity and support handoffs.",
  },
];

const deliverySteps = [
  {
    title: "Assess and align",
    body: "We review goals, users, systems, dependencies, risk, and success measures before implementation begins.",
  },
  {
    title: "Design and build",
    body: "We deliver interfaces, APIs, workflows, integrations, environments, and documentation with regular stakeholder checkpoints.",
  },
  {
    title: "Launch and operate",
    body: "We support release, production monitoring, issue triage, improvement planning, and future roadmap decisions.",
  },
];

const leadershipModel = [
  {
    title: "Executive Leadership",
    body: "Business goals, client governance, strategic partnerships, and engagement accountability.",
  },
  {
    title: "Technology Leadership",
    body: "Architecture, cloud strategy, engineering standards, security posture, and delivery quality.",
  },
  {
    title: "Delivery Leadership",
    body: "Roadmaps, staffing, communication cadence, release planning, and measurable outcomes.",
  },
  {
    title: "Engineering Leadership",
    body: "Technical execution, code quality, reviews, implementation support, and production readiness.",
  },
];

const careerTracks = [
  {
    title: "Software Engineering",
    body: "Frontend, backend, full-stack, mobile, quality engineering, and platform delivery roles.",
  },
  {
    title: "Cloud and Security",
    body: "Infrastructure, DevOps, observability, identity, security review, and reliability engineering roles.",
  },
  {
    title: "Data and AI",
    body: "Data engineering, analytics, automation, AI workflow design, and operational intelligence roles.",
  },
  {
    title: "Client Delivery",
    body: "Business analysis, technical project management, solution consulting, and support leadership roles.",
  },
];

const members = [
  {
    name: "Kelvin Lee",
    role: "Software Development Consultant",
    note: "Supports product engineering and technology delivery across Reco Universal client projects.",
    initials: "KL",
    href: "https://www.linkedin.com/in/kelvin-lee-232919396/",
  },
  {
    name: "Francisco Lopez",
    role: "Software Consultant",
    note: "Works across client delivery, implementation support, and software consulting engagements.",
    initials: "FL",
    href: "https://www.linkedin.com/in/francisco-lopez8/",
  },
  {
    name: "Benjamin W.",
    role: "Technology Consultant",
    note: "Supports technical planning, project coordination, and implementation for consulting clients.",
    initials: "BW",
    href: "https://www.linkedin.com/in/benjamin-w-1768a8b2/",
  },
  {
    name: "Brandon Jackson",
    role: "Senior AI/ML Software Engineer",
    note: "Supports AI/ML and software engineering initiatives for Reco Universal clients.",
    initials: "BJ",
    href: "https://www.linkedin.com/in/brandon-jackson-a61627bb/",
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "General inquiries",
    value: "contact@recouniversal.com",
    href: "mailto:contact@recouniversal.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "33 Irving Pl, New York, NY 10003",
  },
  {
    icon: Clock,
    label: "Business hours",
    value: "Monday-Friday, 9:00 AM-6:00 PM ET",
  },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 overflow-hidden rounded-md border border-blue-300/20 bg-[#0b2a5b]">
        <img src="/icon.png" alt="" className="h-full w-full scale-[1.72] object-cover object-[50%_28%]" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="text-sm font-black uppercase tracking-normal text-white">Reco Universal</div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            Global Talent
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050A13] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06101E]/88 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" aria-label="Reco Universal home">
            <Brand />
          </a>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:text-blue-200"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/20"
          >
            Contact
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[100svh] pt-20">
        <img
          src="/office-collaboration.jpg"
          alt="Software professionals collaborating around computers in a modern office"
          className="absolute inset-0 h-full w-full object-cover animate-pan-slow"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,14,0.96)_0%,rgba(4,10,22,0.82)_46%,rgba(4,12,26,0.46)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#03070E] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#050A13] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,179,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(125,179,255,0.07)_1px,transparent_1px)] bg-[size:88px_88px] opacity-28 animate-dot-flow" />
        <div className="absolute left-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-500/16 blur-3xl animate-glow-pulse" />
        <div className="absolute right-0 top-20 h-[36rem] w-[36rem] rounded-full bg-cyan-300/12 blur-3xl animate-glow-pulse animation-delay-300" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-center px-5 py-16 sm:px-8">
          <div className="max-w-4xl animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.8)]" />
              Software development and IT consulting
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Engineering teams for software that needs to work in the real world.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Reco Universal helps organizations plan, build, modernize, and support software,
              cloud, data, and operational technology systems.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-6 text-sm font-bold text-white shadow-xl shadow-blue-950/40 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/25"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/18 bg-white/8 px-5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:bg-blue-200/10"
              >
                View portfolio
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["2020", "Founded"],
                ["New York", "Base"],
                ["11-50", "Team"],
                ["Global", "Delivery reach"],
              ].map(([value, label]) => (
                <div key={label} className="motion-card rounded-lg border border-white/10 bg-[#06101E]/72 p-5 shadow-xl shadow-blue-950/20 backdrop-blur">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="flow-grid border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Services</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Consulting and engineering across the technology lifecycle.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              We combine advisory, implementation, integration, and managed support so clients can
              move from business need to reliable production system with one accountable partner.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, body, points }) => (
              <article key={title} className="motion-card flow-card rounded-lg border border-white/10 bg-white/[0.045] p-7">
                <Icon className="h-7 w-7 text-blue-200" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {points.map((point) => (
                    <span key={point} className="rounded-full border border-blue-200/15 bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-100">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flow-grid bg-[#050A13] py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Why teams choose us</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Delivery discipline clients can evaluate quickly.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map(([title, body]) => (
              <article key={title} className="motion-card flow-card rounded-lg border border-blue-300/15 bg-blue-500/[0.07] p-6">
                <CheckCircle2 className="h-6 w-6 text-blue-200" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="relative border-y border-white/10 py-24">
        <img src="/cloud-servers.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-[#050A13]/88" />
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Industries</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Technology support for teams with real operational pressure.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              Our work is strongest where software, cloud systems, data, security, and support need
              to fit into day-to-day business operations.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="motion-card flow-card rounded-lg border border-white/10 bg-white/[0.055] p-6">
                <Building2 className="h-6 w-6 text-blue-200" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{industry.body}</p>
                <p className="mt-5 border-l border-blue-300/40 pl-4 text-sm font-semibold leading-6 text-blue-100">
                  {industry.outcomes}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">About Us</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              A software and IT consulting partner built for accountable delivery.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Reco Universal supports clients that need practical engineering judgment, reliable
              execution, and clear communication across strategy, development, cloud, data, and support.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [Target, "Business-first planning"],
                [Layers, "Architecture with delivery context"],
                [Users, "Flexible teams for client needs"],
                [Rocket, "Launch and post-launch ownership"],
              ].map(([Icon, label]) => (
                <div key={label as string} className="motion-card rounded-lg border border-white/10 bg-white/[0.045] p-4">
                  <Icon className="h-5 w-5 text-blue-200" aria-hidden="true" />
                  <div className="mt-3 text-sm font-bold text-white">{label as string}</div>
                </div>
              ))}
            </div>
          </div>
          <figure className="motion-card flow-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-950/30">
            <div className="h-[460px] overflow-hidden">
              <img
                src="/software-workspace.jpg"
                alt="Software engineering workspace with multiple monitors"
                className="h-full w-full object-cover animate-image-drift"
              />
            </div>
            <figcaption className="grid gap-4 border-t border-white/10 p-6 md:grid-cols-3">
              {[
                ["Advisory", "Scope, roadmap, risk"],
                ["Engineering", "Build, integrate, test"],
                ["Operations", "Launch, support, improve"],
              ].map(([title, body]) => (
                <div key={title}>
                  <div className="text-lg font-black text-white">{title}</div>
                  <div className="mt-1 text-sm text-slate-400">{body}</div>
                </div>
              ))}
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="portfolio" className="flow-grid border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Portfolio</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Representative work with clear business outcomes.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Example engagements show how Reco Universal supports software delivery, data, cloud,
              modernization, and production operations.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((card) => (
              <article key={card.title} className="motion-card flow-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <div className="h-58 overflow-hidden">
                  <img src={card.image} alt="" className="h-full w-full object-cover animate-image-drift" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">{card.label}</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tech.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 border-l border-blue-300/40 pl-4 text-sm font-semibold leading-6 text-blue-100">
                    {card.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Delivery model</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              From strategy to production support.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Mature delivery requires more than writing code. We align stakeholders, manage risk,
              document decisions, and support the systems after they launch.
            </p>
          </div>
          <div className="grid gap-4">
            {deliverySteps.map((step, index) => (
              <article key={step.title} className="motion-card flow-card rounded-lg border border-white/10 bg-[#071322] p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue-500 text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1500px] gap-4 px-5 sm:px-8 lg:grid-cols-3">
          {[
            ["/office-collaboration.jpg", "Software professionals collaborating in an office", "Collaborative planning"],
            ["/network-rack.jpg", "Network server rack with blue lighting", "Infrastructure and IT"],
            ["/data-dashboard.jpg", "Data visualization dashboard", "Data and reporting"],
          ].map(([src, alt, label]) => (
            <figure key={src} className="motion-card flow-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <div className="h-56 overflow-hidden">
                <img src={src} alt={alt} className="h-full w-full object-cover animate-image-drift" />
              </div>
              <figcaption className="flex items-center gap-2 p-4 text-sm font-bold text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-blue-200" aria-hidden="true" />
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Leadership model</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Clear roles behind every engagement.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Client work is organized around executive oversight, technology direction, delivery
                management, and hands-on engineering ownership.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {leadershipModel.map((item) => (
                <article key={item.title} className="motion-card flow-card rounded-lg border border-white/10 bg-white/[0.045] p-6">
                  <Briefcase className="h-6 w-6 text-blue-200" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Company members</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Professionals focused on client delivery.
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/company/recouniversal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-200 transition hover:text-white"
            >
              Company LinkedIn
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {members.map((member) => (
              <article key={member.href} className="motion-card flow-card rounded-lg border border-white/10 bg-white/[0.045] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-blue-500 text-lg font-black text-white">
                    {member.initials}
                  </div>
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                    className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/50 hover:text-blue-100"
                  >
                    <SquareUserRound className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-200">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{member.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="flow-grid border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Career</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Build technology that clients depend on.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Reco Universal works with engineers, consultants, delivery leads, and technical
              specialists who care about practical systems, direct communication, and dependable outcomes.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Contact recruiting
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {careerTracks.map((item) => (
              <article key={item.title} className="motion-card flow-card rounded-lg border border-white/10 bg-white/[0.045] p-6">
                <Users className="h-6 w-6 text-blue-200" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <img src="/network-rack.jpg" alt="" className="h-full w-full object-cover opacity-28" />
          <div className="absolute inset-0 bg-[#050A13]/88" />
        </div>
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Contact</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Tell us what you need to build or improve.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Send a short request and we will route it to the right consulting, engineering, or support lead.
            </p>
            <div className="mt-8 grid gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="motion-card flow-card rounded-lg border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-blue-500/15 text-blue-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{label}</div>
                      {href ? (
                        <a href={href} className="mt-1 block text-sm text-slate-300 transition hover:text-blue-200">
                          {value}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm text-slate-300">{value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#03070E]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
            <div>
              <Brand />
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Software development, IT consulting, cloud, security, data, and production support
                for organizations that need reliable technical execution.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-500 px-5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400">
                Start a project
              </a>
              <a href="#portfolio" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/50">
                View portfolio
              </a>
            </div>
          </div>
          <div className="grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr]">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Navigation</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-400">
                {navItems.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="transition hover:text-blue-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-400">
                <li>Application engineering</li>
                <li>Cloud and DevOps</li>
                <li>Data and AI enablement</li>
                <li>Security consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Company</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-400">
                <li>Reco Universal Global Talent</li>
                <li>33 Irving Pl, New York, NY 10003</li>
                <li>Monday-Friday, 9:00 AM-6:00 PM ET</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-400">
                <li>
                  <a href="mailto:contact@recouniversal.com" className="transition hover:text-blue-200">
                    contact@recouniversal.com
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-blue-200">
                    Submit contact form
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/recouniversal"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-blue-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500">
          Reco Universal Global Talent. Copyright 2026. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
