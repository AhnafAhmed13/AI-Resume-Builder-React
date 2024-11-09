import { useForm } from 'react-hook-form';

export default function ResumeForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append('github', data.github);
    formData.append('job', data.job);
    formData.append('resume', data.resume[0]);

    try {
      const response = await fetch('http://localhost:3000/get_cover_letter', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }

      const blob = await response.blob();
      const pdfBlobUrl = URL.createObjectURL(blob);
      onSubmit(pdfBlobUrl); // Pass the PDF URL to the parent component

    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <label htmlFor="github" className="block text-gray-700 font-bold">
        GitHub Profile Link:
      </label>
      <input
        type="text"
        placeholder="github.com/username"
        name="github"
        {...register("github")}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
      
      <label htmlFor="linkedin" className="block text-gray-700 font-bold">
        LinkedIn Profile Link:
      </label>
      <input
        type="text"
        placeholder="linkedin.com/in/username"
        name="linkedin"
        {...register("linkedin")}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />

      <label htmlFor="job" className="block text-gray-700 font-bold">
        Job Posting Link:
      </label>
      <input
        type="text"
        placeholder="www.example.com/job"
        name="job"
        {...register("job")}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
      
      <label htmlFor="resume" className="block text-gray-700 font-bold">
        Upload your resume:
      </label>
      <input
        type="file"
        name="resume"
        {...register("resume")}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      />
      
      <input type="submit" value="Generate Cover Letter" className="w-full mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer" />
    </form>
  );
}
