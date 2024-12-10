import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/config/apis'; // Import the Axios instance with the base URL

export default function ReviewApplications() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  // Fetch applications from the API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await api.get('/employer/viewallapplications'); // Use the `api` instance
        setApplications(response.data); // Assuming the API returns an array of applications
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  // Handle shortlist action
  const handleShortlist = (candidate) => {
    // Navigate to ShortlistCandidates page with candidate details
    navigate('/employer/shortlist-candidates', { state: { shortlistedCandidate: candidate } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Review Applications</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Candidate Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                Resume
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">{app.name}</td>
                <td className="px-4 py-2 text-sm">{app.email}</td>
                <td className="px-4 py-2 text-center">
                  <a
                    href={`${api.defaults.baseURL}/employer/viewResume?id=${app.id}`} // Use the base URL for constructing the link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Resume
                  </a>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleShortlist(app)}
                    className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                  >
                    Shortlist
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
