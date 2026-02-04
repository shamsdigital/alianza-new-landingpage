
export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  cost: string;
  objective: string;
  mission: string;
  specs: string[];
  cta: string;
}
