import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllPosts from './pages/Posts';

import AddProblem from './pages/AddProblem';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    < Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/add" element={<AddProblem />} />
    </Routes>
    </>
  );
}

export default App;
