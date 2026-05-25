export type PricingPlan = {
  name: string
  tagline: string
  monthlyPrice: number
  features: string[]
  cta: string
  popular: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    tagline: 'Perfect for individuals and small projects.',
    monthlyPrice: 99,
    features: [
      'All analytics features',
      'Up to 250,000 tracked visits',
      'Normal support',
      'Up to 3 team members',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    tagline:
      'Unlock enhanced AI capabilities, priority support, and weekly updates.',
    monthlyPrice: 199,
    features: [
      'All analytics features',
      'Up to 1,000,000 tracked visits',
      'Premium support',
      'Up to 10 team members',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Access the full suite of AI features, 24/7 dedicated support.',
    monthlyPrice: 399,
    features: [
      'All analytics features',
      'Up to 5,000,000 tracked visits',
      'Dedicated support',
      'Up to 50 team members',
    ],
    cta: 'Get Started',
    popular: false,
  },
]

export const planLabels = ['For individuals', 'For startups', 'For big companies']

// Yearly billing offers a 20% discount (industry-standard yearly incentive).
export const YEARLY_DISCOUNT = 0.2

export function getEffectiveMonthlyPrice(plan: PricingPlan, isYearly: boolean): number {
  if (!isYearly) return plan.monthlyPrice
  return Math.round(plan.monthlyPrice * (1 - YEARLY_DISCOUNT))
}
