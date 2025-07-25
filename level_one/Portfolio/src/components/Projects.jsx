const projects = [
  {
    title: "Quote Generator",
    description: "A simple quote app using React + Tailwind with a public API.",
    link: "#",
  },
  {
    title: "Web Scraper",
    description: "Python script that scrapes quotes and saves them to CSV.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
      <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-shadow mx-12"
          >
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 dark:text-blue-400 underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
