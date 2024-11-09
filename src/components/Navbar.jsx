import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-purple-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold hover:text-gray-200">
              AI Career Coach
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/resume-builder" className="hover:text-gray-200">
              Resume Builder
            </Link>
            <Link to="/cover-letter-builder" className="hover:text-gray-200">
              Cover Letter Builder
            </Link>
            <Link to="/most-likely-to-get-hired" className="hover:text-gray-200">
              Most Likely To Get Hired
            </Link>
            <Link to="/tips-for-the-interview" className="hover:text-gray-200">
              Tips For The Interview
            </Link>
            <Link to="/strengths-and-weaknesses" className="hover:text-gray-200">
              Strengths And Weaknesses
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button (for future mobile responsiveness) */}
          </div>
        </div>
      </div>
    </nav>
  );
}
