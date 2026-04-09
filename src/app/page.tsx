import Link from "next/link";
import { MODULES } from "@/types";
import PricingSection from "@/components/pricing-section";

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            ResearchDeck
          </Link>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <Link
              href="/login"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">
          Professional Research Decks,{" "}
          <span className="text-accent">Instantly</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Describe your product. Get a presentation-ready research deck with
          competitor analysis, user segments, growth channels, interview scripts,
          and more — powered by AI and real-time web research.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-colors"
          >
            Start Free — 3 Decks Included
          </Link>
          <a
            href="#modules"
            className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
          >
            See what&apos;s inside &darr;
          </a>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary">
            7 Research Modules in Every Deck
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Each module is backed by real-time web search and structured
            frameworks used by top consulting firms.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div
                key={m.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{m.icon}</span>
                <h3 className="mt-3 font-semibold text-primary">{m.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-primary">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Describe Your Product",
                desc: "Enter a short description of your product or idea and pick the modules you need.",
              },
              {
                step: "2",
                title: "AI Researches & Builds",
                desc: "Our AI searches the web, analyzes competitors, identifies segments, and generates your deck.",
              },
              {
                step: "3",
                title: "Present or Export",
                desc: "View your interactive deck in the browser, navigate with arrow keys, or export to PDF.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <PricingSection />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold">
            Stop Paying $5,000+ for Research Decks
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get the same depth of analysis in minutes, not weeks. Start with 3
            free decks — no credit card required.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-light transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ResearchDeck. All rights reserved.
        </div>
      </footer>
    </>
  );
}
