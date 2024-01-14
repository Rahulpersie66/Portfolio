import React, {useState} from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import PortfolioPage from "./components/PortfolioPage/portfoliopage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [worksVisible, setWorksVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleWorksVisibility = () => {
    setWorksVisible(!worksVisible);
  };

  return (
    <Router>  
      <div className="App">
        <Routes>
        <Route
            path="/Portfolio/"
            element={
              <>
                <Navbar/>
                <Intro />
                <Skills />
                {worksVisible && <Works />}
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/portfolioPage/" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
