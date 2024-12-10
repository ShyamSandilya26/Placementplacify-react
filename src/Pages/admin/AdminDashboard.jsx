import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import PlatformActivity from './PlatformActivity';
import StudentsStats from './StudentsStats';
import EmployersStats from './EmployersStats';
import SystemSettings from './SystemSettings';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route path="platform-activity" element={<PlatformActivity />} />
          <Route path="students-stats" element={<StudentsStats />} />
          <Route path="employers-stats" element={<EmployersStats />} />
          <Route path="system-settings" element={<SystemSettings />} />
        </Routes>
      </main>
    </div>
  );
}



