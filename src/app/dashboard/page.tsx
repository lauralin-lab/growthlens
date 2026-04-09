"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { PLANS } from "@/types";
import type { Deck, PlanType } from "@/types";
import type { User } from "@supabase/supabase-js";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [decks, setDecks] = useState<Deck[]>([]);
  const [loading, setLoading] = useState(true);
  const [userPlan, setUserPlan] = useState<PlanType>("free");
  const [decksUsed, setDecksUsed] = useState(0);

  useEffect(() => {
    async function load() {
      const supabase = createSupabaseBrowser();
      const { data: { user: u } } = await supabase.auth.getUser();

      if (!u) {
        router.push("/login");
        return;
      }

      setUser(u);

      // Get user profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("plan, decks_used")
        .eq("id", u.id)
        .single();

      if (profile) {
        setUserPlan(profile.plan as PlanType);
        setDecksUsed(profile.decks_used);
      }

      // Get decks
      const { data: userDecks } = await supabase
        .from("decks")
        .select("*")
        .eq("user_id", u.id)
        .order("created_at", { ascending: false });

      if (userDecks) setDecks(userDecks);
      setLoading(false);
    }
    load();
  }, [router]);

  async function handleSignOut() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  const plan = PLANS[userPlan];
  const canCreate = decksUsed < plan.decksPerMonth;

  return (
    <>
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            ResearchDeck
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Plan status */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
          <div>
            <span className="text-sm text-gray-500">
              {plan.name} Plan — {decksUsed} / {plan.decksPerMonth} decks used
            </span>
            <div className="mt-1 h-2 w-48 rounded-full bg-gray-100">
              <div
                className="h-2 rounded-full bg-accent transition-all"
                style={{
                  width: `${Math.min(100, (decksUsed / plan.decksPerMonth) * 100)}%`,
                }}
              />
            </div>
          </div>
          {userPlan === "free" && (
            <Link
              href="/pricing"
              className="text-sm font-medium text-accent hover:text-accent-light"
            >
              Upgrade
            </Link>
          )}
        </div>

        {/* New deck */}
        <div className="mt-8">
          {canCreate ? (
            <Link
              href="/dashboard/new"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
            >
              + New Research Deck
            </Link>
          ) : (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              You&apos;ve used all your decks this month.{" "}
              <Link href="/pricing" className="font-semibold underline">
                Upgrade your plan
              </Link>{" "}
              for more.
            </div>
          )}
        </div>

        {/* Deck list */}
        <div className="mt-8 space-y-3">
          {decks.length === 0 ? (
            <p className="py-12 text-center text-gray-400">
              No decks yet. Create your first research deck!
            </p>
          ) : (
            decks.map((deck) => (
              <Link
                key={deck.id}
                href={`/deck/${deck.id}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:border-accent/30 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-primary">{deck.title}</h3>
                  <p className="mt-0.5 text-sm text-gray-400">
                    {new Date(deck.created_at).toLocaleDateString()} — {deck.modules.length} modules
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    deck.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : deck.status === "generating"
                        ? "bg-blue-100 text-blue-700"
                        : deck.status === "failed"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {deck.status}
                </span>
              </Link>
            ))
          )}
        </div>
      </main>
    </>
  );
}
