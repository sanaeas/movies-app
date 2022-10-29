import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieInfo from './pages/MovieInfo';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:keyword' element={<Search />} />
          <Route path='/:movieId' element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
