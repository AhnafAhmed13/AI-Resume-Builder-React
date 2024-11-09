import { useEffect, useState } from 'react';

export default function StrengthsWeaknessesPage() {
  const [data, setData] = useState({ strengths: [], weaknesses: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch strengths and weaknesses from the backend
    const fetchStrengthsWeaknesses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/get-strengths-weaknesses');

        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        setData({ strengths: data.strengths, weaknesses: data.weaknesses });
      } catch (error) {
        console.error('Error fetching strengths and weaknesses:', error);
        setError('Failed to load strengths and weaknesses.');
      }
    };

    fetchStrengthsWeaknesses();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Strengths and Weaknesses</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data.strengths.length > 0 && data.weaknesses.length > 0 ? (
        <div className="flex space-x-8 max-w-3xl w-full">
          {/* Strengths Column */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Strengths</h3>
            <ul className="list-disc list-inside space-y-2">
              {data.strengths.map((strength, index) => (
                <li key={index} className="text-lg">{strength}</li>
              ))}
            </ul>
          </div>
          
          {/* Weaknesses Column */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Weaknesses</h3>
            <ul className="list-disc list-inside space-y-2">
              {data.weaknesses.map((weakness, index) => (
                <li key={index} className="text-lg">{weakness}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading strengths and weaknesses...</p>
      )}
    </div>
  );
}
