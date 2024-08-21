import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import axios from 'axios';

if (import.meta.env.VITE_BACKEND_URL)
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
else
  console.error("No AXIOS Url for connection found!")

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );  
}

export default App
