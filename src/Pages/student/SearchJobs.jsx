import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/config/apis'; // Import the Axios instance with the base URL

export default function SearchJobs() {
  const navigate = useNavigate();

  // State to hold jobs and search term
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get('/student/jobs'); // Use the `api` instance
        setJobs(response.data); // Assuming the API returns an array of jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Search Jobs</h1>

      {/* Search Field */}
      <form
        onSubmit={(e) => e.preventDefault()} // Prevent page refresh on form submit
        className="bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto flex items-center space-x-2"
      >
        <div className="relative w-full">
          <input
            id="search"
            type="text"
            placeholder="Search jobs by role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            className="w-full border rounded-lg p-3 pl-10 text-gray-700 bg-white"
          />
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm6.5-3.5L21 21"
            />
          </svg>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Jobs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{job.companyname}</h2>
              <p className="text-gray-700 font-medium">{job.title}</p>
              <p className="text-sm text-gray-600 mt-2">{job.description}</p>
              <p className="text-sm text-gray-600 mt-2 font-bold">
                Salary: {job.salary}
              </p>
              <button
                onClick={() =>
                  navigate('/student/submit-application', { state: job })
                }
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No jobs found matching your search criteria.
          </p>
        )}
      </div>
    </div>
  );
}
