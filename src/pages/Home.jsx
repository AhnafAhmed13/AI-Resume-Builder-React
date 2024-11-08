import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumeResult from '../components/ResumeResult';

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePdfUrl = (url) => {
    setPdfUrl(url);
  };

  return (
    <div>
      <ResumeForm onSubmit={handlePdfUrl} />
      {pdfUrl && <ResumeResult pdfUrl={pdfUrl} />}
    </div>
  );
}
