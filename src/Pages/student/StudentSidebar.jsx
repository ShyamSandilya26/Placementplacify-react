import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function StudentSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Student Dashboard
      </div>

      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="search-jobs"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Search Jobs
            </Link>
          </li>
          <li>
            <Link
              to="submit-application"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Submit Application
            </Link>
          </li>
          <li>
            <Link
              to="track-applications"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Track Applications
            </Link>
          </li>
          <li>
            <Link
              to="student-profile"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="block w-full text-left py-2 px-3 rounded hover:bg-gray-700 bg-transparent text-white focus:outline-none"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
