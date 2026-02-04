
import React from 'react';
import { FAQItem, Testimonial, PricingPlan } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Will this guarantee I show up in the AI Overview?",
    answer: "No. No one can guarantee that. If they say they can, they are lying. We guarantee your site will be eligible and optimized for it. We build the runway; Google lands the plane."
  },
  {
    question: "Why is this urgent?",
    answer: "Because user behavior has already changed. Users click less. They read summaries. If you are not part of the summary, you do not exist."
  },
  {
    question: "Can I just buy ads instead?",
    answer: "You can, but renting attention is expensive. Building an asset is equity. This is an equity play."
  },
  {
    question: "Is this writing for bots?",
    answer: "It is writing for clarity. Clarity works for humans. Clarity works for bots. Complexity fails both."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "15 new clients in one month. The most profitable month on record.",
    author: "Marissa A."
  },
  {
    quote: "They turned the store metrics around. Service is precise.",
    author: "Eric H."
  },
  {
    quote: "They don't guess. They execute.",
    author: "Julie B."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "foundations",
    name: "FOUNDATIONS (DEFENSE)",
    subtitle: "Survival and Stability",
    cost: "$1,500 / mo",
    objective: "The Mission: Stop the bleeding. Secure the perimeter. Ensure the site is indexable, fast, and accurate.",
    mission: "Foundations",
    specs: [
      "Site Health Refactor: Fix broken links, speed issues, and core vitals.",
      "Tracking Verification: Ensure every lead is counted (GA4 + Calls).",
      "Homepage Rebuild: Optimized for 'Answer-First' clarity.",
      "Priority Service Page: Re-engineered for conversion.",
      "Monthly Patching: Security, updates, and minor edits (5/mo).",
      "Monthly reports"
    ],
    cta: "Deploy Foundations"
  },
  {
    id: "growth",
    name: "GROWTH (VELOCITY)",
    subtitle: "Compounding Momentum",
    cost: "$2,500 / mo",
    objective: "The Mission: Aggressive expansion of your digital footprint. We ship new assets every month to widen the net.",
    mission: "Growth",
    specs: [
      "Everything in Foundations.",
      "Monthly Upgrades: We ship two meaningful improvements (New pages or major refactors) every 30 days.",
      "Service Hubs: Internal linking structures that force Google to recognize authority.",
      "Proof Injection: Adding trust signals (reviews, process steps) at friction points.",
      "Quarterly Refresh: We burn down stale content and rebuild it.",
      "Reporting: Output tied to revenue, not vanity metrics."
    ],
    cta: "Deploy Growth"
  }
];
