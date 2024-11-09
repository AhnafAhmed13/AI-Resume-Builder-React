import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 space-y-4">
      <Link to="/resume">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">Generate Resume</button>
      </Link>
      <Link to="/cover-letter">
        <button className="px-6 py-3 bg-green-600 text-white rounded-md">Generate Cover Letter</button>
      </Link>
      <Link to="/interview-tips">
        <button className="px-6 py-3 bg-orange-600 text-white rounded-md">Tips for the Interview</button>
      </Link>
      <Link to="/strengths-weaknesses">
        <button className="px-6 py-3 bg-red-600 text-white rounded-md">Strengths and Weaknesses</button>
      </Link>
    </div>
  );
}
