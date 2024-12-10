import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrackApplications() {
  const navigate = useNavigate();

  // Sample applications data
  const applications = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      companyName: 'TCS',
      status: 'Under Review',
    },
    {
      id: 2,
      jobTitle: 'Data Analyst',
      companyName: 'Netflix',
      status: 'Interview Scheduled',
    },
  ];

  const handleReview = (application) => {
    // Navigate to the review page and pass application details
    navigate('/student/review-application', { state: application });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Track Applications</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-semibold">Job Title</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Company Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
              <th className="px-4 py-2 text-center text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">{app.jobTitle}</td>
                <td className="px-4 py-2 text-sm">{app.companyName}</td>
                <td
                  className={`px-4 py-2 text-sm font-bold ${
                    app.status === 'Under Review'
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }`}
                >
                  {app.status}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleReview(app)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
