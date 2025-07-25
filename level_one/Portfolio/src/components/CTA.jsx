export default function CTA() {
  return (
    <section
      id="cta"
      className="py-16 bg-blue-600 dark:bg-blue-500 text-white transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Like what you see? Let’s build something together.
        </h3>
        <p className="text-white/90 mb-8">
          Whether you need a dev for your startup, freelance help, or just want to connect - I’m here for it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/Bulwark-Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
