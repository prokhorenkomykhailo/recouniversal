import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Cloud,
  Database,
  ExternalLink,
  Layers,
  Mail,
  MapPin,
  MessageSquareCode,
  Rocket,
  ShieldCheck,
  SquareUserRound,
  Target,
  Users,
  Verified,
  Workflow,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import { VerificationBadge } from "./verification-badge";

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
    icon: BrainCircuit,
    title: "AI Application Engineering",
    body: "AI-enabled portals, copilots, workflow tools, and internal platforms designed for secure business adoption.",
    points: ["AI copilots", "Full-stack builds", "Human review"],
  },
  {
    icon: MessageSquareCode,
    title: "AI Agents and Automation",
    body: "Agent workflows, document intelligence, support automation, and operational assistants connected to real systems.",
    points: ["Agent design", "Workflow automation", "Knowledge retrieval"],
  },
  {
    icon: Cloud,
    title: "Cloud AI Platforms",
    body: "Cloud architecture, model integration, deployment pipelines, observability, and environments for AI products.",
    points: ["Cloud AI", "CI/CD", "Observability"],
  },
  {
    icon: Database,
    title: "Data and Retrieval Systems",
    body: "Data pipelines, vector search, reporting layers, retrieval-augmented generation, and decision-support dashboards.",
    points: ["RAG", "Data quality", "Dashboards"],
  },
  {
    icon: ShieldCheck,
    title: "AI Governance and Security",
    body: "Access control, prompt/data risk review, secure SDLC practices, model usage policies, and audit preparation.",
    points: ["AI risk", "Access control", "Policy review"],
  },
  {
    icon: Workflow,
    title: "AI Systems Integration",
    body: "Reliable integration between AI tools, CRMs, ERPs, data stores, support platforms, and third-party APIs.",
    points: ["API design", "Model routing", "Error handling"],
  },
];

const proofPoints = [
  ["AI business alignment", "Use cases are tied to workflow value, cost, user adoption, and measurable outcomes."],
  ["Production AI delivery", "Model integrations, release discipline, monitoring, and support are planned from the beginning."],
  ["Responsible adoption", "Identity, data handling, human review, and AI risk controls are reviewed throughout delivery."],
  ["Clear ownership", "Structured communication, accountable AI delivery leads, and documented next steps."],
];

const industries = [
  {
    title: "Technology and SaaS",
    body: "Product teams adding copilots, agent workflows, AI search, analytics, or automated customer operations.",
    outcomes: "Faster AI feature delivery and clearer technical roadmaps.",
  },
  {
    title: "Professional Services",
    body: "AI-assisted research, document automation, client portals, knowledge search, and reporting workflows.",
    outcomes: "Less manual coordination and faster client delivery.",
  },
  {
    title: "Healthcare Operations",
    body: "Operational dashboards, scheduling workflows, document processing, and internal tools with careful data controls.",
    outcomes: "Cleaner reporting and safer AI-assisted operations.",
  },
  {
    title: "Staffing and Recruiting",
    body: "Candidate matching, resume intelligence, CRM integrations, recruiter copilots, and analytics for distributed teams.",
    outcomes: "Improved workflow speed and candidate insight.",
  },
  {
    title: "Finance and Back Office",
    body: "Approval automation, secure reporting, reconciliation support, audit workflows, and AI-assisted operations.",
    outcomes: "Better controls and reduced repetitive work.",
  },
  {
    title: "Enterprise Operations",
    body: "Legacy modernization, AI integration programs, cloud migration, observability, and support for internal systems.",
    outcomes: "Lower AI adoption risk and stronger system visibility.",
  },
];

const portfolioItems = [
  {
    image: "/office-collaboration.jpg",
    label: "AI Client Portal",
    title: "Secure portal with AI-assisted service workflows",
    body: "A role-based portal for request intake, document exchange, AI summaries, approvals, and status visibility.",
    tech: ["Next.js", "RAG", "PostgreSQL", "Auth"],
    impact: "Reduced manual handoffs and helped teams review client activity faster.",
  },
  {
    image: "/data-dashboard.jpg",
    label: "AI Data Platform",
    title: "Executive reporting with predictive insights",
    body: "Data pipelines, dashboards, and AI-assisted analysis that replaced spreadsheet reporting with consistent metrics.",
    tech: ["ETL", "SQL", "BI", "ML"],
    impact: "Improved reporting speed and surfaced decision signals from operational data.",
  },
  {
    image: "/cloud-servers.jpg",
    label: "Cloud AI",
    title: "Production environment for AI-enabled products",
    body: "Cloud infrastructure, model integration workflows, monitoring, backups, and rollback practices for AI products.",
    tech: ["AWS", "Docker", "CI/CD", "LLM Ops"],
    impact: "Stabilized AI releases and improved operational readiness.",
  },
  {
    image: "/software-workspace.jpg",
    label: "AI Automation",
    title: "Agent workflows for back-office teams",
    body: "Automated intake, routing, notifications, task tracking, and AI-assisted handoffs across operational systems.",
    tech: ["React", "Agents", "Queues", "CRM"],
    impact: "Reduced repetitive work and improved SLA visibility.",
  },
  {
    image: "/code-monitor.jpg",
    label: "AI Modernization",
    title: "Legacy system review for AI readiness",
    body: "Technical assessment, data readiness review, integration planning, architecture recommendations, and staged delivery.",
    tech: ["Architecture", "Security", "Data", "Roadmap"],
    impact: "Created a practical AI adoption path without interrupting active users.",
  },
  {
    image: "/hero-infrastructure.jpg",
    label: "AI Operations",
    title: "Monitoring and support model for AI systems",
    body: "Incident workflows, model usage monitoring, runbooks, and escalation processes for AI-enabled applications.",
    tech: ["Runbooks", "Alerts", "SLOs", "Support"],
    impact: "Improved operational clarity and support handoffs.",
  },
];

const deliverySteps = [
  {
    title: "Assess and align",
    body: "We review AI use cases, users, data, systems, risk, and success measures before implementation begins.",
  },
  {
    title: "Design and build",
    body: "We deliver AI interfaces, APIs, agents, retrieval workflows, integrations, environments, and documentation.",
  },
  {
    title: "Launch and operate",
    body: "We support release, model monitoring, issue triage, improvement planning, and future roadmap decisions.",
  },
];

const leadershipModel = [
  {
    title: "Executive Leadership",
    body: "AI business goals, client governance, strategic adoption planning, and engagement accountability.",
  },
  {
    title: "Technology Leadership",
    body: "AI architecture, cloud strategy, engineering standards, security posture, and delivery quality.",
  },
  {
    title: "Delivery Leadership",
    body: "AI roadmaps, staffing, communication cadence, release planning, and measurable outcomes.",
  },
  {
    title: "Engineering Leadership",
    body: "Agent implementation, code quality, reviews, integration support, and production readiness.",
  },
];

const careerTracks = [
  {
    title: "AI Software Engineering",
    body: "Frontend, backend, full-stack, model integration, evaluation, and platform delivery roles.",
  },
  {
    title: "AI Cloud and Security",
    body: "Infrastructure, LLM operations, observability, identity, security review, and reliability engineering roles.",
  },
  {
    title: "Data and AI",
    body: "Data engineering, retrieval systems, analytics, automation, AI workflow design, and operational intelligence roles.",
  },
  {
    title: "Client Delivery",
    body: "AI business analysis, technical project management, solution consulting, and support leadership roles.",
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

const verificationBadges = [
  {
    icon: BadgeCheck,
    title: "AI Readiness Review",
    body: "Use-case, data, integration, and rollout review before build.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Controls",
    body: "Human review, access control, risk checks, and audit planning.",
  },
  {
    icon: Cloud,
    title: "Cloud AI Delivery",
    body: "Deployment, monitoring, CI/CD, and operating procedures.",
  },
  {
    icon: Verified,
    title: "Production Support",
    body: "Runbooks, triage, improvement planning, and release support.",
  },
];

const platformRows = [
  {
    direction: "left",
    items: ["OpenAI", "Anthropic", "Azure AI", "AWS Bedrock", "Google Vertex AI", "NVIDIA"],
  },
  {
    direction: "right",
    items: ["Hugging Face", "LangChain", "Pinecone", "Weaviate", "Databricks", "Snowflake"],
  },
  {
    direction: "left",
    items: ["GitHub", "Vercel", "Docker", "Kubernetes", "Terraform", "MongoDB", "PostgreSQL"],
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
              AI technology consulting and engineering
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-6xl">
              AI solutions engineered for real business operations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Reco Universal helps organizations design, build, integrate, and support AI
              applications, agent workflows, data platforms, and production-ready automation.
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
                AI consulting and engineering across the full adoption lifecycle.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              We combine AI strategy, implementation, integration, governance, and managed support
              so clients can move from idea to reliable production system with one accountable partner.
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
              AI delivery discipline clients can evaluate quickly.
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
                AI technology support for teams with real operational pressure.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              Our work is strongest where AI applications, cloud systems, data, security, and support
              need to fit into day-to-day business operations.
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
              An AI technology consulting partner built for accountable delivery.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Reco Universal supports clients that need practical AI judgment, reliable execution,
              and clear communication across strategy, engineering, data, cloud, governance, and support.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [Target, "AI use-case planning"],
                [Layers, "Architecture with data context"],
                [Users, "Human review by design"],
                [Rocket, "Launch and AI operations"],
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
                ["Advisory", "Use cases, roadmap, risk"],
                ["Engineering", "Build, integrate, evaluate"],
                ["Operations", "Launch, monitor, improve"],
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
                AI work with clear business outcomes.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Example engagements show how Reco Universal supports AI applications, automation,
              data platforms, cloud delivery, modernization, and production operations.
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
              From AI strategy to production support.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Mature AI delivery requires more than connecting a model. We align stakeholders,
              manage risk, document decisions, evaluate behavior, and support systems after launch.
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
            ["/network-rack.jpg", "Network server rack with blue lighting", "AI cloud infrastructure"],
            ["/data-dashboard.jpg", "Data visualization dashboard", "AI data and reporting"],
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
                Clear AI roles behind every engagement.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                AI client work is organized around executive oversight, technology direction, delivery
                management, governance, and hands-on engineering ownership.
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
                Professionals focused on AI-enabled client delivery.
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
              Build AI technology that clients depend on.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Reco Universal works with engineers, AI consultants, delivery leads, and technical
              specialists who care about practical automation, direct communication, and dependable outcomes.
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
              Tell us what AI workflow you need to build or improve.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Send a short request and we will route it to the right AI consulting, engineering, or support lead.
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

      <section className="border-y border-white/10 bg-[#07111E] py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Verification badges</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                AI delivery signals clients can trust.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              These delivery checks help teams evaluate AI projects with clearer risk controls,
              stronger production readiness, and better operating discipline.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <VerificationBadge />
            <div className="grid gap-4 sm:grid-cols-2">
              {verificationBadges.map(({ icon: Icon, title, body }) => (
                <article key={title} className="motion-card flow-card rounded-lg border border-blue-300/15 bg-blue-500/[0.07] p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-md border border-blue-200/20 bg-blue-400/10 text-blue-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] py-8 shadow-2xl shadow-blue-950/20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">AI and software ecosystem</p>
              <h3 className="mt-3 text-2xl font-black text-white">
                Platforms our AI delivery work commonly connects with.
              </h3>
            </div>
            <div className="mt-9 grid gap-4">
              {platformRows.map((row, rowIndex) => (
                <div key={rowIndex} className="marquee-row marquee-mask overflow-hidden">
                  <div className="marquee-track" data-direction={row.direction}>
                    {[...row.items, ...row.items].map((partner, index) => (
                      <div
                        key={`${partner}-${index}`}
                        className="mx-2 grid min-w-44 place-items-center rounded-lg border border-white/10 bg-[#050A13]/82 px-6 py-5 text-center text-lg font-black text-slate-100 shadow-lg shadow-black/20 transition duration-300 hover:border-blue-200/45 hover:bg-blue-500/10 hover:text-blue-100"
                      >
                        {partner}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#03070E]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
            <div>
              <Brand />
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                AI application development, agent automation, data platforms, cloud delivery,
                governance, and production support for organizations adopting AI responsibly.
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
                {[
                  "AI application engineering",
                  "AI agents and automation",
                  "Data and retrieval systems",
                  "AI governance and security",
                ].map((item) => (
                  <li key={item}>
                    <a href="#portfolio" className="inline-flex items-center gap-2 transition hover:text-blue-200">
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      {item}
                    </a>
                  </li>
                ))}
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
              <div className="mt-4 grid gap-3">
                <a
                  href="mailto:contact@recouniversal.com"
                  aria-label="Email Reco Universal"
                  className="motion-card inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-200/50 hover:text-blue-100"
                >
                  <Mail className="h-4 w-4 text-blue-200" aria-hidden="true" />
                  Email
                </a>
                <a
                  href="#contact"
                  aria-label="Open contact form"
                  className="motion-card inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-200/50 hover:text-blue-100"
                >
                  <MessageSquareCode className="h-4 w-4 text-blue-200" aria-hidden="true" />
                  Contact form
                </a>
                <a
                  href="https://www.linkedin.com/company/recouniversal"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Reco Universal LinkedIn"
                  className="motion-card inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-200/50 hover:text-blue-100"
                >
                  <SquareUserRound className="h-4 w-4 text-blue-200" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
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
