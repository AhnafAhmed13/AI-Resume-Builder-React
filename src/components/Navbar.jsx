import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AI Career Coach</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/get-started" className="hover:underline">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
