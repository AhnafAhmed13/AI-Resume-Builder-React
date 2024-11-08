import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ResumeResult from './pages/ResumeResultPage'

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/result', element: <ResumeResult />}
]);
