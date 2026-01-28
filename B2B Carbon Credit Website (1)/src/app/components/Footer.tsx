import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg mb-4">Carable Group</h3>
            <p className="text-sm">
              Carbon credit consulting and trading solutions for Indian industries.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-teal-400 transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/industries" className="hover:text-teal-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-teal-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>India</li>
              <li>info@carablegroup.com</li>
              <li>+91 XXX XXX XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-400 mb-4">
            <strong>Disclaimer:</strong> Carbon credit issuance and pricing depend on third-party
            verification, regulatory frameworks, and market conditions. Results may vary based on
            project specifics and compliance requirements.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Carable Group. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-teal-400 transition-colors">
                Terms & Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
