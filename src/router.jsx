import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import LoadingPage from './pages/LoadingPage';
import OptionsPage from './pages/OptionsPage';
import JobMatchPage from './pages/JobMatchPage';
import JobPostingFormPage from './pages/JobPostingFormPage';
import JobToolsPage from './pages/JobToolsPage';
import FeaturesPage from './pages/FeaturesPage';
import ResumePage from './pages/ResumePage';
import CoverLetterPage from './pages/CoverLetterPage';
import TipsPage from './pages/TipsPage';
import StrengthsWeaknessesPage from './pages/StrengthsWeaknessesPage';

export const router = createBrowserRouter([
  {
    element: <Layout />, // Wrapping all routes in Layout to show Navbar
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/get-started', element: <FormPage /> },
      { path: '/loading', element: <LoadingPage /> },
      { path: '/options', element: <OptionsPage /> },
      { path: '/job-matches', element: <JobMatchPage /> },
      { path: '/job-posting-form', element: <JobPostingFormPage /> },
      { path: '/job-tools', element: <JobToolsPage /> },
      { path: '/features', element: <FeaturesPage /> },
      { path: '/resume', element: <ResumePage /> },
      { path: '/cover-letter', element: <CoverLetterPage /> },
      { path: '/interview-tips', element: <TipsPage /> },
      { path: '/strengths-weaknesses', element: <StrengthsWeaknessesPage /> },
    ],
  },
]);
