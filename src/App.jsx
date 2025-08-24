import GlobalStyle from "./GlobalStyles.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// Import your pages
import HomePage from './pages/HomePage';
import Partners from "./pages/Partners.jsx";
import Footer from "./components/Footer.jsx";
// ... other page imports

function App() {
  return (
    <Router>
        <GlobalStyle />  
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partners" element={<Partners />} />
          {/* Define all your other routes here */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;