import React, { useState } from 'react';
import Navigation from './components/navigation';
import './App.css';
import Portfolio from './components/pages/profile';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Footer from './components/footer';
import Projects from './components/pages/projects'


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
   
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact'){
     return <Contact />; 
    }
    if (currentPage === 'Projects'){
      return <Projects/>; 
     }
    
  
  

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
