import React, { useState } from "react";
import {
  Home,
  Laptop,
  LayoutDashboard,
  Building2,
  ShoppingBag,
  GraduationCap,
  Wallet,
} from "lucide-react";

export default function PortfolioSection() {
  const [showModal, setShowModal] = useState(false);

  const portfolio = [
    {
      title: "MopMe (Sheffield, UK)",
      description:
        "On-demand cleaning & housekeeping for homes, short-lets and student housing—instant booking, vetted pros, simple pricing.",
      meta: "Category: Home Services / Marketplace · Status: Launching (pilot) · Areas: Sheffield → South Yorkshire",
      Icon: Home,
    },
    {
      title: "SME Digital Builds (UK)",
      description:
        "Websites, booking systems and online payments so small businesses can sell and schedule easily.",
      meta: "Category: Digital Solutions · Status: Live (rolling projects) · Offer: Fixed scopes, fast delivery",
      Icon: Laptop,
    },
    {
      title: "ServiceOps Dashboard (UK)",
      description:
        "Lightweight SaaS for local service businesses—jobs, schedules, payments, reviews—all in one place.",
      meta: "Category: SaaS / Ops · Status: Private beta · Invite: Join waitlist",
      Icon: LayoutDashboard,
    },
    {
      title: "Property Maintenance Network (UK)",
      description:
        "Connect landlords/letting agents with vetted cleaners, handymen and trades—SLA-driven, digital-first workflows.",
      meta: "Category: PropTech / Marketplace · Status: Pilot recruiting · Ideal partners: Landlords, student lets, co-living",
      Icon: Building2,
    },
    {
      title: "Local Commerce Integrations (UK)",
      description:
        "Click-to-buy/Book-now components for independent retailers and salons—plug into existing sites.",
      meta: "Category: Commerce · Status: In development · Invite: Early adopters welcome",
      Icon: ShoppingBag,
    },
    {
      title: "Digital Skills & Internship Hub (Sheffield)",
      description:
        "Structured placements and short courses to upskill local talent while supporting our UK pilots.",
      meta: "Category: Skills / Community · Status: Ongoing · Seeking: Education and community partners",
      Icon: GraduationCap,
    },
    {
      title: "CommunaPay (UK)",
      description:
        "Group payments for UK communities—shared pots for clubs, tenants, faith groups and friends. Create a pot, invite members, collect contributions on a schedule, and payout transparently. Powered by Open Banking bank-to-bank payments with instant ledgers and role-based controls.",
      meta: "Category: Fintech / Payments · Status: Private beta · Invite: Join waitlist",
      Icon: Wallet,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      {/* Glow orbs background */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
          <span>Our Portfolio</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          OUR PORTFOLIO
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Built in Sheffield. Scaling across the UK.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
          Real products we’re launching and piloting with UK partners.
        </p>

        {/* Portfolio grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map(({ title, description, meta, Icon }, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl"
            >
              {/* Glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-indigo-400/30 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-indigo-500/20 p-3 backdrop-blur">
                  <Icon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/80">
                {description}
              </p>
              <p className="mt-4 text-xs text-white/60">
                {meta}
                {meta.includes("Join waitlist") && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="ml-2 inline-block rounded-lg bg-indigo-600 px-2 py-1 text-xs font-medium text-white hover:bg-indigo-500"
                  >
                    Join
                  </button>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Join the Waitlist
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("You’ve successfully joined the waitlist. We’ll notify you as soon as we’re ready to onboard new members.");
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 p-2"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-gray-300 p-2"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
