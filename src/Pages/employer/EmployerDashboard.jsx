import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployerSidebar from './EmployersSidebar';
import PostJobs from './PostJobs';
import ReviewApplications from './ReviewApplications';
import ShortlistCandidates from './ShortlistCandidates';
import EmployerProfile from './EmployerProfile';

export default function EmployerDashboard() {
  const [shortlisted, setShortlisted] = useState([]);

  // Function to add a candidate to the shortlist
  const addToShortlist = (candidate) => {
    setShortlisted((prev) => [...prev, candidate]);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <EmployerSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Routes>
          <Route path="post-jobs" element={<PostJobs />} />
          <Route
            path="review-applications"
            element={<ReviewApplications onShortlist={addToShortlist} />}
          />
          <Route
            path="shortlist-candidates"
            element={<ShortlistCandidates shortlisted={shortlisted} />}
          />
          <Route
            path="profile"
            element={<EmployerProfile />}
          />
        </Routes>
      </main>
    </div>
  );
}
