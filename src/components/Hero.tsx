import { Calendar, Coffee, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Find Your Perfect Match<br />
          <span className="text-rose-500">Among Ambitious Professionals</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with successful, like-minded individuals who understand the balance between career and love.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition text-lg">
            Start Your Journey
          </button>
          <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full hover:border-gray-300 transition text-lg">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Users, text: "50,000+ Professionals" },
            { icon: Briefcase, text: "Fortune 500 Network" },
            { icon: Calendar, text: "Smart Scheduling" },
            { icon: Coffee, text: "Quality Matches" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <item.icon className="h-8 w-8 text-rose-500" />
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[200%] aspect-[4/1] bg-gradient-to-b from-white to-rose-50 -z-10 rounded-[100%]" />
    </div>
  );
}