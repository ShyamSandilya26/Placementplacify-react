import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Import routes
import Footer from './components/Footer'; // Import Footer
import Navbar from './components/Navbar';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useLocation to determine the current route
  const location = useLocation();

  // Check if the current route is for the admin, employer, or student dashboard
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isEmployerRoute = location.pathname.startsWith('/employer');
  const isStudentRoute = location.pathname.startsWith('/student');

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      {/* Render Navbar only if not on Admin, Employer, or Student Route */}
      {!isAdminRoute && !isEmployerRoute && !isStudentRoute && (
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Render Footer only if not on Admin, Employer, or Student Route */}
      {!isAdminRoute && !isEmployerRoute && !isStudentRoute && <Footer />}
    </div>
  );
}
