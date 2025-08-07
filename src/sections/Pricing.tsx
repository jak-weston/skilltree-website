"use client";
import { Button } from "@/components/ui/button";
import { HomeCopy as copy } from "@/content";
import { LucideCircleCheck, LucideCircleX } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const { header, plans, cta, note, features } = copy.pricing;

  const [monthly, setMonthly] = useState(false);

  return (
    <section
      id="pricing"
      className="w-full flex flex-col items-center justify-center spacing-section"
    >
      <span className="chip">Pricing</span>
      <h2 className="text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        {header}
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mt-6">
        <div className="glass-card p-6 w-full">
          <h3 className="text-white text-2xl font-bold mb-2">{plans.free.label}</h3>
          <p className="text-blue-300 text-3xl font-bold mb-4">{plans.free.yearly}</p>
          <ul className="mt-2 list-inside">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`my-3 ${
                  feature.free ? "text-white" : "text-white/60"
                }`}
              >
                {feature.free ? (
                  <LucideCircleCheck className="inline mr-2 text-blue-300" />
                ) : (
                  <LucideCircleX className="inline mr-2 text-white/40" />
                )}
                {feature.feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full items-center justify-center relative">
          <div className="glass-card p-6 transition-all duration-300 md:scale-105 shadow-2xl border-2 border-blue-400/50">
            <div className="inline-flex items-center justify-between w-full">
              <Button
                variant="ghost"
                className="glass-button absolute top-4 right-4 hover:bg-white/20"
                onClick={() => setMonthly(!monthly)}
              >
                {monthly ? "Yearly" : "Monthly"}
              </Button>
              <div>
                <h3 className="text-white text-2xl font-bold">{plans.pro.label}</h3>
                <h4 className="text-blue-300 text-3xl font-bold">
                  ${monthly ? plans.pro.monthly : plans.pro.yearly}
                  {monthly ? "/month" : "/year"}
                </h4>
                <p className="text-sm text-white/60 mt-1">
                  {monthly
                    ? `Save $${Math.floor(plans.pro.monthly * 12 - plans.pro.yearly)} with yearly billing`
                    : ""}
                </p>
              </div>
            </div>
            <ul className="mt-2 flex-col gap-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`my-3 ${
                    feature.pro ? "text-white" : "text-white/60"
                  }`}
                >
                  {feature.pro ? (
                    <LucideCircleCheck className="inline mr-2 text-blue-300" />
                  ) : (
                    <LucideCircleX className="inline mr-2 text-white/40" />
                  )}
                  {feature.feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Button className="mt-8 glass-button text-white hover:text-white px-8 py-3 text-lg font-bold shadow-2xl hover:shadow-blue-500/25" asChild>
        <a href="/coming-soon">Get Started</a>
      </Button>
      <p className="mt-2 text-sm text-white/60">{note}</p>
    </section>
  );
}
