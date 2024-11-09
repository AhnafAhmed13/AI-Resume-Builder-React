import { useEffect, useState } from 'react';

export default function TipsPage() {
  const [tips, setTips] = useState([]); // Initialize as an empty array to avoid null issues
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tips from the backend
    const fetchTips = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/get-tips');

        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        setTips(data);
      } catch (error) {
        console.error('Error fetching tips:', error);
        setError('Failed to load tips. Please try again later.');
      }
    };

    fetchTips();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Tips For The Interview</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : tips.length > 0 ? (
        <ul className="list-disc list-inside space-y-2 max-w-lg text-left">
          {tips.map((tip, index) => (
            <li key={index} className="text-lg">{tip}</li>
          ))}
        </ul>
      ) : (
        <p>Loading tips for the interview...</p>
      )}
    </div>
  );
}
