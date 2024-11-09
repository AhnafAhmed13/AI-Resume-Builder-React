import { useEffect, useState } from 'react';

export default function JobMatchPage() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    // Fetch matching jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/get-jobs');

        if (!response.ok) throw new Error('Failed to fetch matching jobs');

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Best Matches Based On Your Profile</h2>
      {jobs ? (
        <ul className="list-disc list-inside space-y-2 max-w-lg text-left">
          {jobs.map((job, index) => (
            <li key={index} className="text-lg">{job}</li>
          ))}
        </ul>
      ) : (
        <p>Loading best matching jobs...</p>
      )}
    </div>
  );
}
