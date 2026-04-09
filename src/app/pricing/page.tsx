import Link from "next/link";
import PricingSection from "@/components/pricing-section";

export default function PricingPage() {
  return (
    <>
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            ResearchDeck
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <PricingSection />
      </main>
    </>
  );
}
