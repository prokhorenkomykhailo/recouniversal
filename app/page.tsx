import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  ServerCog,
  ShieldCheck,
  SquareUserRound,
} from "lucide-react";
import { ContactForm } from "./contact-form";

const navItems = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Delivery", "#delivery"],
  ["Industries", "#industries"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    body: "Business applications, SaaS platforms, dashboards, and internal tools built with maintainable architecture and clear release paths.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    body: "Cloud setup, migrations, CI/CD, monitoring, and deployment practices for teams that need stable production systems.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Support",
    body: "Application hardening, access control, secure development practices, and risk reviews for growing organizations.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Enablement",
    body: "Practical AI workflows, reporting systems, data integrations, and automation that reduce manual operational work.",
  },
  {
    icon: Database,
    title: "Systems Integration",
    body: "Connect CRMs, ERPs, payment systems, data stores, and third-party platforms with clean APIs and reliable automation.",
  },
  {
    icon: ServerCog,
    title: "Managed Technical Support",
    body: "Post-launch maintenance, issue triage, performance checks, and roadmap support for applications already in production.",
  },
];

const deliverySteps = [
  {
    title: "Discovery and technical plan",
    body: "We clarify goals, users, constraints, systems, and risks before writing code so the build starts with a realistic path.",
  },
  {
    title: "Design, engineering, and integration",
    body: "Our team turns requirements into production-ready interfaces, APIs, cloud services, and integrations.",
  },
  {
    title: "Launch, support, and improvement",
    body: "After release, we help monitor performance, handle support, improve features, and keep the system secure.",
  },
];

const capabilities = [
  "Web applications",
  "Mobile applications",
  "Cloud migrations",
  "API integrations",
  "Data platforms",
  "AI automation",
  "Security reviews",
  "IT consulting",
];

const proofPoints = [
  ["Client-ready", "Executive-level communication and structured delivery updates"],
  ["Secure", "Security-minded architecture, access control, and release discipline"],
  ["Scalable", "Cloud, data, and application patterns designed for growth"],
  ["Practical", "Recommendations grounded in budget, timeline, and business context"],
];

const workCards = [
  {
    image: "/software-workspace.jpg",
    label: "Product Engineering",
    title: "Client portals and workflow platforms",
    body: "Secure web applications for approvals, account management, reporting, and operational collaboration.",
  },
  {
    image: "/data-dashboard.jpg",
    label: "Data Systems",
    title: "Dashboards, reporting, and decision support",
    body: "Data pipelines and visual interfaces that help teams understand performance and reduce manual spreadsheet work.",
  },
  {
    image: "/cloud-servers.jpg",
    label: "Infrastructure",
    title: "Cloud modernization and deployment reliability",
    body: "Production environments, deployment workflows, monitoring, and infrastructure patterns for growing software teams.",
  },
  {
    image: "/code-monitor.jpg",
    label: "Technical Consulting",
    title: "Legacy recovery and roadmap planning",
    body: "Codebase reviews, architecture planning, and staged modernization programs that reduce delivery risk.",
  },
];

const industries = [
  "Technology startups",
  "Professional services",
  "Healthcare operations",
  "Staffing and recruiting",
  "Financial workflows",
  "Education platforms",
  "Internal enterprise tools",
  "AI-enabled operations",
];

const testimonials = [
  {
    quote:
      "Reco Universal gives clients a direct path from idea to implementation, with the kind of technical ownership stakeholders expect from a serious delivery partner.",
    name: "Client Delivery",
    role: "Software consulting engagement",
  },
  {
    quote:
      "The team is structured around practical execution: clear scope, reliable communication, production awareness, and ongoing support after launch.",
    name: "Technical Leadership",
    role: "Application modernization program",
  },
  {
    quote:
      "For organizations without a full internal engineering department, Reco Universal can help fill the gap across planning, development, cloud, and support.",
    name: "Operations Partner",
    role: "IT consulting support",
  },
];

const insightCards = [
  {
    title: "Choosing the right development partner",
    body: "A reliable partner should clarify scope, surface risk early, communicate tradeoffs, and maintain the system after launch.",
  },
  {
    title: "Why modernization projects fail",
    body: "Most failures come from unclear ownership, undocumented systems, rushed migrations, and no staged rollout plan.",
  },
  {
    title: "What support should include",
    body: "Support should cover triage, monitoring, release hygiene, documentation, and a practical route for feature improvements.",
  },
];

const members = [
  {
    name: "Brandon Jackson",
    role: "Senior AI/ML Software Engineer",
    note: "Supports AI/ML and software engineering initiatives for Reco Universal clients.",
    initials: "BJ",
    href: "https://www.linkedin.com/in/brandon-jackson-a61627bb/",
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
    name: "Kelvin Lee",
    role: "Software Development Consultant",
    note: "Supports product engineering and technology delivery across Reco Universal client projects.",
    initials: "KL",
    href: "https://www.linkedin.com/in/kelvin-lee-232919396/",
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06101E]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" aria-label="Reco Universal home">
            <Brand />
          </a>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-300 transition hover:text-blue-200">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-bold text-white transition hover:bg-blue-400"
          >
            Contact
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[100svh] pt-20">
        <img
          src="/network-rack.jpg"
          alt="Dark network infrastructure with blue lighting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,14,0.98)_0%,rgba(4,10,22,0.92)_45%,rgba(4,12,26,0.72)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#03070E] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050A13] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,179,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(125,179,255,0.07)_1px,transparent_1px)] bg-[size:88px_88px] opacity-28" />
        <div className="absolute left-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-500/16 blur-3xl" />
        <div className="absolute right-0 top-20 h-[36rem] w-[36rem] rounded-full bg-sky-400/12 blur-3xl" />
        <div className="absolute bottom-20 right-[18%] h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1500px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.8)]" />
              Global software development and IT consulting
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Software, cloud, and IT teams for serious business systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Reco Universal helps organizations turn product ideas, IT needs, and operational
              bottlenecks into secure applications, cloud systems, data workflows, and long-term
              support programs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-6 text-sm font-bold text-white shadow-xl shadow-blue-950/40 transition hover:bg-blue-400"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/18 bg-white/8 px-5 text-sm font-bold text-white transition hover:border-blue-200/60 hover:bg-blue-200/10"
              >
                Explore services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["01", "Strategy and architecture"],
                ["02", "Product and cloud engineering"],
                ["03", "Support and optimization"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-xl shadow-blue-950/20 backdrop-blur">
                  <div className="text-lg font-black text-blue-200">{title}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-200">{body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-8 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-8 bottom-12 h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl" />
            <div className="relative grid gap-5">
              <div className="grid min-h-[520px] gap-5 md:grid-cols-[1.05fr_0.95fr]">
                <div className="grid gap-5">
                  <figure className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-2xl shadow-blue-950/30">
                    <img
                      src="/code-monitor.jpg"
                      alt="Software engineer working in a dark development environment"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02060E]/88 via-transparent to-transparent" />
                  </figure>
                  <div className="grid grid-cols-2 gap-5">
                    <figure className="group relative h-44 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-2xl shadow-blue-950/20">
                      <img
                        src="/data-dashboard.jpg"
                        alt="Data analytics dashboard"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02060E]/65 to-transparent" />
                    </figure>
                    <figure className="group relative h-44 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-2xl shadow-blue-950/20">
                      <img
                        src="/software-workspace.jpg"
                        alt="Software development workspace"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02060E]/65 to-transparent" />
                    </figure>
                  </div>
                </div>

                <div className="grid gap-5 md:pt-14">
                  <figure className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-2xl shadow-blue-950/30">
                    <img
                      src="/cloud-servers.jpg"
                      alt="Cloud infrastructure server racks"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02060E]/76 via-transparent to-transparent" />
                  </figure>
                  <figure className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-2xl shadow-blue-950/30">
                    <img
                      src="/hero-infrastructure.jpg"
                      alt="Enterprise infrastructure hardware"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02060E]/76 via-transparent to-transparent" />
                  </figure>
                </div>
              </div>

              <div className="grid gap-3 rounded-2xl border border-white/10 bg-[#050A13]/70 p-4 shadow-2xl shadow-blue-950/20 backdrop-blur sm:grid-cols-4">
                {[
                  ["2020", "Founded"],
                  ["NYC", "Base"],
                  ["11-50", "Team"],
                  ["Global", "Reach"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
                    <div className="text-2xl font-black text-white">{value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Core services</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Technology consulting with practical engineering ownership.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              Clients come to Reco Universal when they need a team that can understand the business
              problem, choose a realistic technical direction, and build software that survives
              production use.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.045] p-7">
                <Icon className="h-7 w-7 text-blue-200" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050A13] py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map(([title, body]) => (
              <article key={title} className="rounded-lg border border-blue-300/15 bg-blue-500/[0.07] p-6">
                <CheckCircle2 className="h-6 w-6 text-blue-200" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Representative work</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Realistic delivery areas for clients and recruiters to understand.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              These examples describe the kind of client-facing work Reco Universal is positioned
              to deliver across software, infrastructure, data, and support.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <img src={card.image} alt="" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">{card.label}</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.body}</p>
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
              We structure work around the needs of the client: discovery when the idea is early,
              implementation when the roadmap is clear, and support when the system is live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span key={capability} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200">
                  {capability}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {deliverySteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-white/10 bg-[#071322] p-6">
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
            ["/software-workspace.jpg", "Software engineering workspace", "Application engineering"],
            ["/network-rack.jpg", "Network server rack with blue lighting", "Infrastructure and IT"],
            ["/data-dashboard.jpg", "Data visualization dashboard", "Data and reporting"],
          ].map(([src, alt, label]) => (
            <figure key={src} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <img src={src} alt={alt} className="h-56 w-full object-cover" />
              <figcaption className="flex items-center gap-2 p-4 text-sm font-bold text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-blue-200" aria-hidden="true" />
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="industries" className="relative border-y border-white/10 py-24">
        <img src="/cloud-servers.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-[#050A13]/88" />
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Industries and use cases</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Software and IT help for teams with operational pressure.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Reco Universal is suited for organizations that need practical systems, dependable
              technical guidance, and a team that can support both business and engineering conversations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-200" aria-hidden="true" />
                  <span className="font-bold text-white">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Company members</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Experienced professionals supporting client delivery.
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
              <article key={member.href} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-blue-500 text-lg font-black text-white">
                    {member.initials}
                  </div>
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                    className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-200 transition hover:border-blue-200/50 hover:text-blue-100"
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

      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Client confidence</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Clear communication, realistic planning, and production awareness.
              </h2>
            </div>
            <div className="grid gap-4">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
                  <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                  <div className="mt-5 border-l border-blue-300/40 pl-4">
                    <div className="font-bold text-white">{item.name}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.role}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07111E] py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">What clients should know</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Helpful guidance before starting a software project.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {insightCards.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-200">
                  Discuss this with us
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
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
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">Contact and support</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Submit a project request or client support issue.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Use the form for project consultations, recruiting conversations, active client
              support, production questions, or account requests. The selected request type routes
              the message to the right Reco Universal inbox.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                [ServerCog, "Project consultation", "New builds, partnerships, recruiting, and general business requests"],
                [Database, "Client support", "Active delivery support, production questions, and account requests"],
              ].map(([Icon, label, detail]) => (
                <div key={label as string} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-blue-500/15 text-blue-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{label as string}</div>
                      <div className="mt-1 text-sm text-slate-300">{detail as string}</div>
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
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-500 px-5 text-sm font-bold text-white transition hover:bg-blue-400">
                Start a project
              </a>
              <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:border-blue-200/50">
                View services
              </a>
            </div>
          </div>
          <div className="grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-400">
              <li>Software development</li>
              <li>Cloud and DevOps</li>
              <li>Security consulting</li>
              <li>AI and data systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Solutions</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-400">
              <li>Client portals</li>
              <li>Cloud deployments</li>
              <li>Data dashboards</li>
              <li>API integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Company</h3>
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
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-400">
              <li>New York, United States</li>
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
