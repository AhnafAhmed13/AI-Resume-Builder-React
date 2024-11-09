import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumeResult from '../components/ResumeResult';
import '../index.css';

export default function ResumeBuilder() {
    const [pdfUrl, setPdfUrl] = useState(null);
  
    const handlePdfUrl = (url) => {
      setPdfUrl(url);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <ResumeForm onSubmit={handlePdfUrl} />
        {pdfUrl && <ResumeResult pdfUrl={pdfUrl} />}
      </div>
    );
}