import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';
import SearchJobs from './SearchJobs';
import SubmitApplication from './SubmitApplication';
import TrackApplications from './TrackApplication';
import ReviewApplication from './ReviewApplication';
import StudentProfile from './StudentProfile';

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route path="search-jobs" element={<SearchJobs />} />
          <Route path="submit-application" element={<SubmitApplication />} />
          <Route path="track-applications" element={<TrackApplications />} />
          <Route path="review-application" element={<ReviewApplication />} />
          <Route path="student-profile" element={<StudentProfile />} />
        </Routes>
      </main>
    </div>
  );
}
