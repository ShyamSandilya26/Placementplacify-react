import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';
import AboutPage from './Pages/about';
import AdminDashboard from './Pages/admin/AdminDashboard';
import EmployerDashboard from './Pages/employer/EmployerDashboard';
import StudentDashboard from './Pages/student/StudentDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminDashboard />} />


      {/* Employer Routes */}
      <Route path="/employer/*" element={<EmployerDashboard />} />

      {/* Student Routes */}
      <Route path="/student/*" element={<StudentDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
