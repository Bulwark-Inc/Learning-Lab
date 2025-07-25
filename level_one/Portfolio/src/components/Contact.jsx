export default function Contact() {
  return (
    <section className="px-6 py-16 text-center">
      <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Want to collaborate or just say hi? Reach out!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:your@email.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          className="text-blue-600 dark:text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="text-blue-600 dark:text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
