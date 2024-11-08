import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit } = useForm()
  
  const onSubmit = async (data) => {
    await fetch(`http://localhost:3000/get_resume`, {
      body: JSON.stringify({
        github: data.github,
        job: data.job,
        resume: data.resume,
      }),
      headers: { 'content-type': 'application/json' },
      method: 'GET',
    });
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