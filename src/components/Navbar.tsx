import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-semibold text-gray-900">Elevate</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Success Stories</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900">
              Log in
            </button>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}