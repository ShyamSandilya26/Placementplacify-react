import React, { useEffect, useState } from 'react';
import { Mail, Phone, User } from 'lucide-react'; // Import icons

export default function StudentProfile() {
  const [studentDetails, setStudentDetails] = useState(null); // State to store student details
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const storedDetails = sessionStorage.getItem('studentDetails');
    if (storedDetails) {
      setStudentDetails(JSON.parse(storedDetails)); // Parse and set student details
    } else {
      setError('No student details found in session storage.');
    }
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!studentDetails) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center">
            <User size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Student Profile
          </h2>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <User size={20} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Name</h3>
              <p className="text-gray-800">{studentDetails.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <Mail size={20} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Email</h3>
              <p className="text-gray-800">{studentDetails.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <Phone size={20} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Contact</h3>
              <p className="text-gray-800">{studentDetails.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
