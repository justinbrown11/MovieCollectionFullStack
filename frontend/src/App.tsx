import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Podcasts from './components/Podcasts';
import Movies from './components/Movies';

function App() {
  return (
    <div>
      <Router>
        <Header /> {/* Common header/navbar */}
        <Routes>
          <Route path="/*" element={<Home />} /> {/* Home page */}
          {/* Podcasts page */}
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movies" element={<Movies />} /> {/* Movies page */}
        </Routes>
        <Footer /> {/* Common footer */}
      </Router>
    </div>
  );
}

export default App;
