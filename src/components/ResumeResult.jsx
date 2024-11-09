// ResumeResult.js
export default function ResumeResult({ pdfUrl }) {
  return (
    <div className="p-6 mt-6 bg-gray-50 shadow-md rounded-lg max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Generated Resume</h2>
      
      {/* Display the PDF in an iframe */}
      <iframe
        src={pdfUrl}
        width="100%"
        height="400px"
        title="Resume PDF"
        className="border border-gray-200 rounded-md"
      />
      
      {/* Download Button */}
      <a href={pdfUrl} download="custom_resume.pdf" className="inline-block mt-4">
        <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
          Download Resume
        </button>
      </a>
    </div>
  );
}
