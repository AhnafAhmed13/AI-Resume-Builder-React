import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function JobPostingForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/job-posting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobUrl: data.jobUrl }),
      });

      if (!response.ok) throw new Error('Failed to submit job posting URL');

      console.log('Job Posting URL sent to the backend');
      reset(); // Reset the form after submission
      navigate('/job-tools');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl mb-4">Submit a Job Posting Link</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label>Job Posting URL</label>
        <input
          type="url"
          placeholder="https://example.com/job-posting"
          {...register('jobUrl', { required: true })}
          className="block w-full p-2 border rounded-md"
        />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
