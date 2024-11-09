import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import ResumeBuilder from './pages/ResumeBuilderPage.jsx';
import CoverLetterBuilder from './pages/CoverLetterBuilderPage';
import MostLikelyToGetHired from './pages/MostLikelyToGetHiredPage';
import TipsForTheInterview from './pages/TipsForTheInterviewPage';
import StrengthsAndWeaknesses from './pages/StrengthsAndWeaknessesPage';
import Layout from './layout.jsx';

export const router = createBrowserRouter([
  {
    element: <Layout />, // Wrap all routes in Layout
    children: [
      { path: '/', element: <Home /> },
      { path: '/resume-builder', element: <ResumeBuilder /> },
      { path: '/cover-letter-builder', element: <CoverLetterBuilder /> },
      { path: '/most-likely-to-get-hired', element: <MostLikelyToGetHired /> },
      { path: '/tips-for-the-interview', element: <TipsForTheInterview /> },
      { path: '/strengths-and-weaknesses', element: <StrengthsAndWeaknesses /> },
    ],
  },
]);