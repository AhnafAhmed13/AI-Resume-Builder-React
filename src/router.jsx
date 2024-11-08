import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ResumeResult from './components/ResumeResult'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/result', element: <ResumeResult />}
]);
