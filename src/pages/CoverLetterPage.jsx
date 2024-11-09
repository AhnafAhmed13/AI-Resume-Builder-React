import { useEffect, useState } from 'react';

export default function CoverLetterPage() {
  const [coverLetterUrl, setCoverLetterUrl] = useState(null);

  useEffect(() => {
    // Fetch resume from the backend
    const fetchCoverLetter = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/get-cover-letter');

        if (!response.ok) throw new Error('Failed to fetch cover letter');

        const blob = await response.blob();
        const url = URL.createObjectURL(blob); // Create a URL for the blob data
        setCoverLetterUrl(url);
      } catch (error) {
        console.error('Error fetching cover letter:', error);
      }
    };

    fetchCoverLetter();
  }, []);

  // Download handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = coverLetterUrl;
    link.download = 'custom_cover_letter.pdf'; // Default file name for download
    link.click();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cover Letter</h2>
      {coverLetterUrl ? (
        <>
          <iframe
            src={coverLetterUrl}
            className="w-full h-screen mb-4"
            title="Cover Letter Preview"
          ></iframe>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Download Cover Letter
          </button>
        </>
      ) : (
        <p>Loading your cover letter...</p>
      )}
    </div>
  );
}
