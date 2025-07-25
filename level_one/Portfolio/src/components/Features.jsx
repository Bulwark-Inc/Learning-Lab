import { FaCode, FaServer, FaRobot, FaTools, FaReact, FaPython } from "react-icons/fa";

const features = [
  {
    icon: <FaReact className="text-blue-500 text-3xl" />,
    title: "Frontend with React",
    desc: "Build responsive, component-based UIs using React and TailwindCSS.",
  },
  {
    icon: <FaPython className="text-yellow-500 text-3xl" />,
    title: "Python & Automation",
    desc: "Write scripts, scrapers, and data tools to automate and analyze.",
  },
  {
    icon: <FaServer className="text-purple-500 text-3xl" />,
    title: "Backend with Django",
    desc: "Build fast, secure APIs and full-stack apps with Django or Flask.",
  },
  {
    icon: <FaRobot className="text-pink-500 text-3xl" />,
    title: "AI Integration",
    desc: "Experiment with OpenAI, LangChain, and LLM scripting tools.",
  },
  {
    icon: <FaTools className="text-gray-600 dark:text-gray-300 text-3xl" />,
    title: "Tooling & DevOps",
    desc: "Master GitHub, Postman, VS Code, and deployment platforms.",
  },
  {
    icon: <FaCode className="text-green-500 text-3xl" />,
    title: "Learning in Public",
    desc: "Build in public on Reddit, GitHub, and blog your dev journey.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          What I’m Building & Learning
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
