export default function Hero() {
  return (
    <section
      id="hero"
      className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Shiloh Egwuatu</span>
            <br />
            I build things for the web.
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
            Aspiring full-stack developer exploring React, Python, and AI. Building in public and learning every day.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </div>

        {/* Right Image/Animation Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://placehold.co/400x300?text=Dev+Illustration"
            alt="Hero illustration"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
