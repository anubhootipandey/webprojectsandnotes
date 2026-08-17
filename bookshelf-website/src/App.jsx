import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import Blog from './pages/Blog';
import PersonalBookshelf from './pages/PersonalBookshelf';
import About from './pages/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/personal-bookshelf' element={<PersonalBookshelf />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;