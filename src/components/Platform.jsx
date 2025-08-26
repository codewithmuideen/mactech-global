import React from "react";
import { Code2, Rocket, Briefcase, ShieldCheck } from "lucide-react";

export default function Platform() {
  const features = [
    {
      title: "IT & Digital Engineering",
      text: "Websites, mobile apps, secure payments, integrations.",
      Icon: Code2,
    },
    {
      title: "On-Demand & Marketplace",
      text: "Booking, dispatch, verification, reviews, payouts.",
      Icon: Rocket,
    },
    {
      title: "SaaS for Services",
      text: "Scheduling, job management, invoicing and analytics.",
      Icon: Briefcase,
    },
    {
      title: "Compliance & Data",
      text: "GDPR-ready workflows and actionable dashboards.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Gradient background overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Neon Purple + Blue glow */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-20%,rgba(168,85,247,0.25),rgba(0,0,0,0.9)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_90%,rgba(59,130,246,0.2),transparent_80%)]" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 mix-blend-overlay opacity-20 [background:linear-gradient(90deg,transparent_0,rgba(255,255,255,.06)_1px,transparent_0)_0_0/60px_100%,linear-gradient(0deg,transparent_0,rgba(255,255,255,.06)_1px,transparent_0)_0_0/100%_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Eyebrow tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          <span>Our Platform</span>
        </div>

        {/* Heading & Subheading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Our Platform
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Practical digital services for the UK.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-400">
          We design and scale products that make life easier for UK households, landlords and SMEs—
          built in Sheffield with nationwide ambition.
        </p>

        {/* Feature grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, Icon }, idx) => (
            <article
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black p-6 shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              {/* Neon border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-purple-500/50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-purple-400/30 bg-purple-500/20 p-3 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-purple-300" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-14 rounded-xl border border-white/10 bg-gradient-to-r from-purple-900/40 to-blue-900/30 p-4 text-center text-sm text-gray-300 backdrop-blur">
          IT & Digital Engineering: Websites, mobile apps, secure payments, integrations. On-Demand & Marketplace: Booking, dispatch, verification, reviews, payouts. SaaS for Services: Scheduling, job management, invoicing and analytics. Compliance & Data: GDPR-ready workflows and actionable dashboards.
        </div>
      </div>
    </section>
  );
}
