export type PlanType = 'free' | 'starter' | 'pro' | 'unlimited';

export interface Plan {
  name: string;
  type: PlanType;
  price: number;
  decksPerMonth: number;
  stripePriceId: string | null;
  features: string[];
}

export const PLANS: Record<PlanType, Plan> = {
  free: {
    name: 'Free',
    type: 'free',
    price: 0,
    decksPerMonth: 3,
    stripePriceId: null,
    features: [
      '3 research decks (one-time)',
      'All 7 research modules',
      'PDF export',
      'Web search powered research',
    ],
  },
  starter: {
    name: 'Starter',
    type: 'starter',
    price: 19,
    decksPerMonth: 5,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || '',
    features: [
      '5 decks per month',
      'All 7 research modules',
      'PDF export',
      'Web search powered research',
      'Priority generation',
    ],
  },
  pro: {
    name: 'Pro',
    type: 'pro',
    price: 49,
    decksPerMonth: 15,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || '',
    features: [
      '15 decks per month',
      'All 7 research modules',
      'PDF export',
      'Web search powered research',
      'Priority generation',
      'Custom branding',
    ],
  },
  unlimited: {
    name: 'Unlimited',
    type: 'unlimited',
    price: 99,
    decksPerMonth: 50,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_UNLIMITED_PRICE_ID || '',
    features: [
      '50 decks per month',
      'All 7 research modules',
      'PDF export',
      'Web search powered research',
      'Priority generation',
      'Custom branding',
      'API access',
    ],
  },
};

export interface DeckModule {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const MODULES: DeckModule[] = [
  { id: 'competitors', name: 'Competitor Analysis', description: 'Profiles, comparison matrix, SWOT, strategic gaps', icon: '🔍' },
  { id: 'personas', name: 'User Segments & Growth', description: 'Data-driven segments with acquisition channels', icon: '👥' },
  { id: 'market', name: 'Market Sizing', description: 'TAM / SAM / SOM with methodology', icon: '📊' },
  { id: 'journey', name: 'Customer Journey', description: 'Awareness to advocacy with touchpoints', icon: '🗺️' },
  { id: 'jtbd', name: 'Jobs-to-be-Done', description: 'Functional, emotional, social jobs + hiring/firing', icon: '💪' },
  { id: 'interview', name: 'Interview Script', description: 'Screener, discussion guide, probing questions', icon: '🎙️' },
  { id: 'survey', name: 'Survey Design', description: 'Question flow, scales, skip logic, sample size', icon: '📋' },
];

export interface Deck {
  id: string;
  user_id: string;
  title: string;
  product_description: string;
  modules: string[];
  html_content: string | null;
  status: 'pending' | 'generating' | 'completed' | 'failed';
  created_at: string;
}
