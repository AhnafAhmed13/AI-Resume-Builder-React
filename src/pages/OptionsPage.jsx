import { Link } from 'react-router-dom';

export default function OptionsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h2 className="text-2xl mb-4">What would you like to do next?</h2>
      <Link to="/job-posting-form">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">See tools for a specific job</button>
      </Link>
      <Link to="/job-matches">
        <button className="px-6 py-3 bg-green-600 text-white rounded-md">Find jobs you are most likely to get hired</button>
      </Link>
    </div>
  );
}
