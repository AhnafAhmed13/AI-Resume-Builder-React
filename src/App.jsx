import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();
 
  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append('github', data.github);
    formData.append('job', data.job);
    formData.append('resume', data.resume[0]);
    console.log(formData);
    try {
      const response = await fetch(`http://localhost:3000/get_resume`, {
        body: formData,
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }

      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);

      navigate('/result', { state: { pdfUrl } });

      // Open in new tab or download
      // const link = document.createElement('a');
      // link.href = pdfUrl;
      // link.download = 'custom_resume.pdf';
      // link.click();

      // // Clean up the object URL
      // URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="github">GitHub Profile Link:</label>
      <input type="text" placeholder="github.com/username" name="github" htmlFor="github" {...register("GitHub profile link")} />
      <label htmlFor="job">Job Posting Link:</label>
      <input type="text" placeholder="www.example.com/job" name="job" htmlFor="job" {...register("Job Posting link")} />
      <label htmlFor="resume">Upload your resume:</label>
      <input type="file" name="resume" htmlFor="resume" {...register("resume")}/>
      <input type="submit" />
    </form>
  )
}