import React, { useEffect, useState } from 'react';
import { api } from '@/config/apis'; // Import the Axios instance with the base URL

export default function EmployersStats() {
  const [employers, setEmployers] = useState([]); // State to store employers data
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState(''); // Error message state

  // Fetch employers from the API
  const fetchEmployers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/admin/employers'); // Use the `api` instance
      console.log('Fetched employers:', response.data); // Log the response to verify structure
      setEmployers(response.data);
    } catch (error) {
      setError('Failed to fetch employers. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Change the status of an employer
  const handleChangeStatus = async (EmployerId) => {
    try {
      const employerToUpdate = employers.find((employer) => employer.EmployerId === EmployerId);
      if (!employerToUpdate) {
        setError('Employer not found.');
        return;
      }

      const newStatus = employerToUpdate.status === 'Pending' ? 'Approved' : 'Pending';

      // API call to update status
      await api.patch(`/admin/employers/${EmployerId}/status`, {
        status: newStatus,
      });

      // Update local state
      const updatedEmployers = employers.map((employer) =>
        employer.EmployerId === EmployerId ? { ...employer, status: newStatus } : employer
      );
      setEmployers(updatedEmployers);
    } catch (error) {
      setError('Failed to change status. Please try again.');
      console.error(error);
    }
  };

  // Revoke permissions for an employer
  const handleRevokePermissions = async (EmployerId) => {
    try {
      const updatedEmployers = employers.filter((employer) => employer.EmployerId !== EmployerId);
      setEmployers(updatedEmployers);

      // API call to revoke permissions
      await api.delete(`/admin/employers/${EmployerId}`);
    } catch (error) {
      setError('Failed to revoke permissions. Please try again.');
      console.error(error);
    }
  };

  // Fetch employers on component mount
  useEffect(() => {
    fetchEmployers();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Employers Stats</h1>

      {loading ? (
        <p>Loading employers...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employers.map((employer) => (
                <tr
                  key={employer.EmployerId} // Use EmployerId as the unique key
                  className="border-b hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-4 py-2 text-sm text-gray-700">{employer.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{employer.email}</td>
                  <td
                    className={`px-4 py-2 text-sm font-bold ${
                      employer.status === 'Approved' ? 'text-green-600' : 'text-yellow-500'
                    }`}
                  >
                    {employer.status}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleChangeStatus(employer.EmployerId)} // Pass correct EmployerId
                      className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                    >
                      Change Status
                    </button>
                    <button
                      onClick={() => handleRevokePermissions(employer.EmployerId)} // Pass correct EmployerId
                      className="ml-2 px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
                    >
                      Revoke Permissions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
