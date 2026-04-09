"use client";

import Link from "next/link";
import { PLANS, PlanType } from "@/types";

const planOrder: PlanType[] = ["free", "starter", "pro", "unlimited"];

export default function PricingSection() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-primary">
        Simple, Transparent Pricing
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
        Start free. Upgrade when you need more decks.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {planOrder.map((key) => {
          const plan = PLANS[key];
          const isPopular = key === "pro";

          return (
            <div
              key={key}
              className={`relative flex flex-col rounded-xl border p-6 ${
                isPopular
                  ? "border-accent shadow-lg shadow-accent/10"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-primary">{plan.name}</h3>

              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">
                  ${plan.price}
                </span>
                {plan.price > 0 && (
                  <span className="text-sm text-gray-500">/month</span>
                )}
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {key === "free"
                  ? "3 decks total, no expiry"
                  : `${plan.decksPerMonth} decks per month`}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  isPopular
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "border border-gray-300 text-primary hover:border-accent hover:text-accent"
                }`}
              >
                {key === "free" ? "Start Free" : `Get ${plan.name}`}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
