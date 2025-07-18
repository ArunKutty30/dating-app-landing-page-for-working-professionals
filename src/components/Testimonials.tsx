export default function Testimonials() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sarah Chen",
      role: "Product Manager at Google",
      quote: "Found my perfect match who understands the demands of a tech career. The verification process gave me peace of mind."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "James Wilson",
      role: "Investment Banker",
      quote: "The smart scheduling feature made dating possible despite my hectic schedule. Met my fiancée here!"
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      name: "Emily Rodriguez",
      role: "Senior Attorney",
      quote: "Finally, a dating app that understands professionals. The quality of matches exceeded my expectations."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="text-center">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-rose-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}