import { Shield, Clock, Heart, Star } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "Every profile is manually verified with LinkedIn to ensure you're meeting genuine professionals."
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that understands busy calendars and suggests optimal meeting times."
    },
    {
      icon: Heart,
      title: "Quality Matches",
      description: "Advanced algorithm that considers career goals, interests, and lifestyle compatibility."
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Exclusive events and personalized matchmaking services for our members."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Designed for <span className="text-rose-500">Busy Professionals</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
              <feature.icon className="h-12 w-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}