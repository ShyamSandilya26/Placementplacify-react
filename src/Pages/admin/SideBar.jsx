import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Dashboard
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="platform-activity"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                Platform Activity
              </NavLink>
            </li>

            <li>
              <NavLink
                to="students-stats"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                Students Stats
              </NavLink>
            </li>

            <li>
              <NavLink
                to="employers-stats"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                Employers Stats
              </NavLink>
            </li>

            <li>
              <NavLink
                to="system-settings"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                System Settings
              </NavLink>
            </li>

            <li>
              {/* Logout Button Styled as a Sidebar Link */}
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-3 rounded hover:bg-gray-700 bg-transparent text-white focus:outline-none"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <Outlet /> {/* This renders the nested route components */}
      </main>
    </div>
  );
}
