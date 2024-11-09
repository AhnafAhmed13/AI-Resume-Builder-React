// App.js
import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumeResult from '../components/ResumeResult';
import '../index.css';

export default function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePdfUrl = (url) => {
    setPdfUrl(url); // Set the generated PDF URL to display the result
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <ResumeForm onSubmit={handlePdfUrl} />
      
      {/* Conditionally render ResumeResult if a PDF URL is available */}
      {pdfUrl && <ResumeResult pdfUrl={pdfUrl} />}
    </div>
  );
}
