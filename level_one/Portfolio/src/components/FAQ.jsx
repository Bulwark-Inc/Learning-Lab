import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What tech stack are you focusing on?",
    answer:
      "I'm building full-stack projects using React, TailwindCSS, Django, and Python for automation and AI integration.",
  },
  {
    question: "Are your projects open-source?",
    answer:
      "Yes! All my learning and side projects are public on GitHub - feel free to fork, star, or contribute.",
  },
  {
    question: "Can I hire you for freelance work?",
    answer:
      "Absolutely. I'm actively looking to grow through freelance work and collaboration. DM me on Reddit or via my contact form.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-700 dark:text-gray-200"
              >
                {faq.question}
                <FaChevronDown
                  className={`ml-2 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
