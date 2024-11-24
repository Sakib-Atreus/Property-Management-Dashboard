import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Dashboard from '../pages/Dashboard/Dashboard';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Get the current path

  const isHomePage = location.pathname === '/';

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Dashboard />
        {/* Only show Footer if it's not the home page */}
        {!isHomePage && <Footer />}
      </div>
    </div>
  );
};

export default Main;
