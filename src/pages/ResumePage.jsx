import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    // Fetch resume from the backend
    const fetchResume = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/get-resume');

        if (!response.ok) throw new Error('Failed to fetch resume');

        const blob = await response.blob();
        const url = URL.createObjectURL(blob); // Create a URL for the blob data
        setResumeUrl(url);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, []);

  // Download handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'custom_resume.pdf'; // Default file name for download
    link.click();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Your Resume</h2>
      {resumeUrl ? (
        <>
          <iframe
            src={resumeUrl}
            className="w-full h-screen mb-4"
            title="Resume Preview"
          ></iframe>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Download Resume
          </button>
        </>
      ) : (
        <p>Loading your resume...</p>
      )}
    </div>
  );
}
