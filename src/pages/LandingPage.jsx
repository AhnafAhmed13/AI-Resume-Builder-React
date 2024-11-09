import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">AI Career Coach</h1>
      <Link to="/get-started">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md">
          Get Started
        </button>
      </Link>
    </div>
  );
}
