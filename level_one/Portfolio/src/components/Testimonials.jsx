const testimonials = [
  {
    name: "Alex Johnson",
    title: "Open Source Mentor",
    quote:
      "Watching this dev grow in public has been awesome - clear communication, real curiosity, and solid shipping speed.",
    avatar: "https://placehold.co/64x64?text=A",
  },
  {
    name: "Rina Patel",
    title: "Product Designer",
    quote:
      "Their ability to quickly mock ideas and implement UI feedback makes them a great frontend collaborator.",
    avatar: "https://placehold.co/64x64?text=R",
  },
  {
    name: "Tariq Bell",
    title: "Freelance Client",
    quote:
      "Delivered the project on time, clean code, and handled API integration better than expected.",
    avatar: "https://placehold.co/64x64?text=T",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">What People Are Saying</h3>
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
