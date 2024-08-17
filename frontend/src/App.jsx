import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';

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
