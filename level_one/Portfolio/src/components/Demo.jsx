export default function Demo() {
  return (
    <section
      id="demo"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Live Project Demo</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Here’s a quick look at one of the projects I’m building — a smart quote generator powered by a public API.
        </p>

        {/* Video/Image Container */}
        <div className="relative w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden group">
          <img
            src="https://placehold.co/800x450?text=Video+Thumbnail"
            alt="Project demo"
            className="w-full object-cover"
          />
          {/* Play Button Overlay */}
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
            aria-label="Play video"
          >
            <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform">
              ▶
            </div>
          </button>
        </div>

        {/* Caption below (optional) */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          * Click the play button to preview the app demo (video coming soon!)
        </p>
      </div>
    </section>
  );
}
