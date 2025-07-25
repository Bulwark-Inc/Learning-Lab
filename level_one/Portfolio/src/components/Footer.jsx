const footerLinks = {
  Projects: ["Mini Projects", "Live Demos", "Open Source"],
  Resources: ["Blog", "Tools", "Reddit Posts"],
  Connect: ["GitHub", "LinkedIn", "Email"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-6 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-lg mb-4">{section}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} NonWare. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/Bulwark-Inc" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shiloh-egwuatu" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:shilohe.ai@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
