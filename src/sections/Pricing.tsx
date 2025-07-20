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
      className="w-full flex flex-col  items-center justify-center spacing-section"
    >
      <span className="chip">Pricing</span>
      <h2>{header}</h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mt-6">
        <div className="border border-border p-4 rounded-lg w-full">
          <h3>{plans.free.label}</h3>
          <p>{plans.free.yearly}</p>
          <ul className="mt-2  list-inside ">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`my-3 ${
                  feature.free ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {feature.free ? (
                  <LucideCircleCheck className="inline mr-2 text-green-500" />
                ) : (
                  <LucideCircleX className="inline mr-2 text-sk-red" />
                )}
                {feature.feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full  items-center justify-center relative ">
          <div
            className="mx-auto z-10 w-full p-4 transition-all duration-300 backdrop-blur-xl bg-background/30 inset-6 border-6 rounded-xl md:scale-105 shadow-lg"
            style={{
              borderColor: "var(--color-sk-yellow)",
            }}
          >
            <div className="inline-flex items-center justify-between w-full">
              <Button
                variant="ghost"
                className="border-border border cursor-pointer absolute top-4 right-4 hover:bg-secondary"
                onClick={() => setMonthly(!monthly)}
              >
                {monthly ? "Yearly" : "Monthly"}
              </Button>
              <div>
                <h3>{plans.pro.label}</h3>
                <h4 style={{ color: "var(--color-sk-yellow)" }}>
                  ${monthly ? plans.pro.monthly : plans.pro.yearly}
                  {monthly ? "/month" : "/year"}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
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
                    feature.pro ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {feature.pro ? (
                    <LucideCircleCheck className="inline mr-2 text-green-500" />
                  ) : (
                    <LucideCircleX className="inline mr-2 text-sk-red" />
                  )}
                  {feature.feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Button className="mt-8 z-[5]" asChild>
        <a href="/coming-soon">{cta}</a>
      </Button>
      <p className="mt-2 text-sm">{note}</p>
    </section>
  );
}
