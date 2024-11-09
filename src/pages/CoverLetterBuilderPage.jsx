import { useState } from 'react';
import CoverLetterForm from '../components/CoverLetterForm';
import CoverLetterResult from '../components/CoverLetterResult';
import '../index.css';

export default function CoverLetterBuilder() {
    const [pdfUrl, setPdfUrl] = useState(null);
  
    const handlePdfUrl = (url) => {
      setPdfUrl(url);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <CoverLetterForm onSubmit={handlePdfUrl} />
        {pdfUrl && <CoverLetterResult pdfUrl={pdfUrl} />}
      </div>
    );
}