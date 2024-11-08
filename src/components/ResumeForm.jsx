import { useForm } from 'react-hook-form';

export default function ResumeForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append('github', data.github);
    formData.append('job', data.job);
    formData.append('resume', data.resume[0]);

    try {
      const response = await fetch('http://localhost:3000/get_resume', {
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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="github">GitHub Profile Link:</label>
      <input
        type="text"
        placeholder="github.com/username"
        name="github"
        {...register("github")}
        required
      />
      
      <label htmlFor="job">Job Posting Link:</label>
      <input
        type="text"
        placeholder="www.example.com/job"
        name="job"
        {...register("job")}
        required
      />
      
      <label htmlFor="resume">Upload your resume:</label>
      <input
        type="file"
        name="resume"
        {...register("resume")}
        required
      />
      
      <input type="submit" value="Generate Resume" />
    </form>
  );
}
