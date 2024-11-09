import '../index.css';
import FeatureButton from '../components/FeatureButton';
import Navbar from '../components/Navbar';

const pages = [["resume-builder", "Resume Builder"],
["cover-letter-builder", "Cover Letter Builder"], ["most-likely-to-get-hired", "Most Likely To Get Hired"], ["tips-for-the-interview", "Tips For The Interview"], ["strengths-and-weaknesses", "Strengths And Weaknesses"]]

export default function HomePage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-purple-900 mb-8">AI Career Coach</h1>
      <h2 className="text-xl font-bold mb-4">Features:</h2>
        <ul>
          {pages.map((page, index) =>
            (
              <li key={index} className='mb-4'>
                <FeatureButton link={page[0]} value={page[1]} />
              </li>)
          )}
        </ul>
      </div>
    </>
  )
}
