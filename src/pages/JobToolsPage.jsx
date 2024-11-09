import { useNavigate } from 'react-router-dom';

export default function JobToolsPage() {
  const navigate = useNavigate();

  // Function to handle button clicks
  const handleToolClick = (tool) => {
    switch (tool) {
      case 'resume':
        navigate('/resume');
        break;
      case 'cover-letter':
        navigate('/cover-letter');
        break;
      case 'interview-tips':
        navigate('/interview-tips');
        break;
      case 'strengths-weaknesses':
        navigate('/strengths-weaknesses');
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 space-y-4">
      <h2 className="text-3xl font-bold mb-6">Tools for This Job</h2>
      <button
        onClick={() => handleToolClick('resume')}
        className="px-6 py-3 bg-blue-600 text-white rounded-md w-60"
      >
        Generate Resume
      </button>
      <button
        onClick={() => handleToolClick('cover-letter')}
        className="px-6 py-3 bg-green-600 text-white rounded-md w-60"
      >
        Generate Cover Letter
      </button>
      <button
        onClick={() => handleToolClick('interview-tips')}
        className="px-6 py-3 bg-orange-600 text-white rounded-md w-60"
      >
        Tips for the Interview
      </button>
      <button
        onClick={() => handleToolClick('strengths-weaknesses')}
        className="px-6 py-3 bg-red-600 text-white rounded-md w-60"
      >
        Strengths and Weaknesses
      </button>
    </div>
  );
}
