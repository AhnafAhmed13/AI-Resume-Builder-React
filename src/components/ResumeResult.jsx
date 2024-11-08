export default function ResumeResult({ pdfUrl }) {
  return (
    <div>
      <h2>Your Generated Resume</h2>
      
      {/* Display the PDF in an iframe */}
      <iframe
        src={pdfUrl}
        width="100%"
        height="500px"
        title="Resume PDF"
      />
      
      {/* Download Button */}
      <a href={pdfUrl} download="custom_resume.pdf">
        <button>Download Resume</button>
      </a>
    </div>
  );
}
