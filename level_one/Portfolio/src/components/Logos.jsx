const logos = [
  { src: "https://placehold.co/100x40?text=Logo+1", alt: "Logo 1" },
  { src: "https://placehold.co/100x40?text=Logo+2", alt: "Logo 2" },
  { src: "https://placehold.co/100x40?text=Logo+3", alt: "Logo 3" },
  { src: "https://placehold.co/100x40?text=Logo+4", alt: "Logo 4" },
  { src: "https://placehold.co/100x40?text=Logo+5", alt: "Logo 5" },
  { src: "https://placehold.co/100x40?text=Logo+6", alt: "Logo 6" },
];

export default function Logos() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400 mb-6">
          Trusted by developers and communities around the web
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
