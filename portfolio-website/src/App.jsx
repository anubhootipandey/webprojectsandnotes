import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" bgcolor="background.default" minHeight="100vh">
          <Sidebar />
          <Box flex={1} p={3} ml="220px" mt={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
