export default function LoadingPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl mb-4">Analyzing your profile...</h2>
        <div className="loader"></div>
      </div>
    );
  }
  