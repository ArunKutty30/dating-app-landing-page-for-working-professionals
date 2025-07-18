import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Basic Profile Creation",
        "Browse Profiles",
        "Limited Daily Matches",
        "Basic Messaging"
      ]
    },
    {
      name: "Premium",
      price: "$39/mo",
      popular: true,
      features: [
        "Advanced Profile Options",
        "Unlimited Matches",
        "Priority Messaging",
        "Smart Scheduling",
        "Video Chat",
        "Profile Boost"
      ]
    },
    {
      name: "Executive",
      price: "$99/mo",
      features: [
        "All Premium Features",
        "Personal Matchmaker",
        "Background Verification",
        "Exclusive Events Access",
        "Relationship Coach",
        "Private Mode"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.popular
                  ? 'bg-rose-500 text-white shadow-xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full transition ${
                  plan.popular
                    ? 'bg-white text-rose-500 hover:bg-gray-100'
                    : 'bg-rose-500 text-white hover:bg-rose-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}