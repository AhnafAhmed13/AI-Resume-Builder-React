import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './LoadingPage';

export default function FormPage() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form submitted!");
    const formData = new FormData();
    formData.append('resume', data.resume[0]);
    formData.append('github', data.github || '');
    formData.append('linkedin', data.linkedin || '');
    formData.append('portfolio', data.portfolio || '');

    try {
      // Start loading
      setIsLoading(true);

      const response = await fetch('http://127.0.0.1:3000/api/submit-form', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Error submitting form');

      // Wait for backend response with completion status
      const result = await response.json();
      console.log("Backend analysis result:", result);

      // Navigate to options page after successful backend processing
      navigate('/options');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Stop loading and reset form regardless of success or failure
      setIsLoading(false);
      reset();
    }
  };

  // If loading, show loading screen content
  if (isLoading) {
    console.log("Loading");
    return <LoadingPage />;
  }

  // Default form display if not loading
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl mb-4">Complete Your Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="resume">Upload Resume (PDF):</label>
        <input
          type="file"
          name="resume"
          id="resume"
          {...register('resume', { required: true })}
          className="block w-full p-2 border rounded-md"
        />
        <label htmlFor="github">GitHub URL:</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="https://github.com/username"
          {...register('github')}
          className="block w-full p-2 border rounded-md"
        />
        <label htmlFor="linkedin">LinkedIn URL:</label>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="https://linkedin/in/username"
          {...register('linkedin')}
          className="block w-full p-2 border rounded-md"
        />
        <label htmlFor="portfolio">Portfolio:</label>
        <input
          type="text"
          name="portfolio"
          id="portfolio"
          placeholder="https://portfolio.com"
          {...register('portfolio')}
          className="block w-full p-2 border rounded-md"
        />
        <input type="submit" value="Submit" className="w-full mt-4 p-2 bg-purple-800 text-white rounded-md hover:bg-blue-700 cursor-pointer" />
      </form>
    </div>
  );
}
