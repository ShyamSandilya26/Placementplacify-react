import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ReviewApplication() {
  const location = useLocation();
  const navigate = useNavigate();
  const application = location.state; // Access the passed application details
  const [isUpdated, setIsUpdated] = useState(false); // Track update status

  const handleUpdate = (e) => {
    e.preventDefault();

    // Simulate update and show success message
    setIsUpdated(true);

    // Redirect to Track Applications page after 2 seconds
    setTimeout(() => {
      navigate('/student/track-applications');
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Review Application</h1>
      {application ? (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4">{application.jobTitle}</h2>
          <p className="text-gray-700 font-medium mb-2">
            Company: {application.companyName}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Current Status: <span className="font-bold">{application.status}</span>
          </p>

          {/* Success Message */}
          {isUpdated && (
            <p className="mt-4 text-green-600 text-center font-semibold">
              Application Updated Successfully! Redirecting...
            </p>
          )}

          {/* Application Update Form */}
          {!isUpdated && (
            <form onSubmit={handleUpdate} className="space-y-4">
              {/* Resume Upload Field */}
              <div>
                <label
                  htmlFor="updatedResume"
                  className="block text-sm font-semibold mb-2"
                >
                  Update Resume
                </label>
                <input
                  id="updatedResume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                  required
                />
              </div>

              {/* Update Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Update Application
              </button>
            </form>
          )}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          No application details available. Please navigate back and select an application.
        </p>
      )}
    </div>
  );
}
