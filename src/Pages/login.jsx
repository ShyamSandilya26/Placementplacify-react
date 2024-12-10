import { useState } from 'react';
import { Button } from '../components/ui/button'; // Adjust path
import { Input } from '../components/ui/input'; // Adjust path
import { Label } from '../components/ui/label'; // Adjust path
import { useNavigate } from 'react-router-dom'; // For navigation
import { api } from '@/config/apis'; // Import the Axios instance with the base URL

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To show loading state
  const [errorMessage, setErrorMessage] = useState(''); // Error message
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Please fill in both username and password.');
      return;
    }

    try {
      setLoading(true); // Start loading
      setErrorMessage(''); // Clear previous errors

      // Define endpoints relative to the base URL
      const endpoints = [
        { role: 'Admin', url: '/admin/login' },
        { role: 'Student', url: '/student/login' },
        { role: 'Employer', url: '/employer/login' },
      ];

      let loggedInRole = null;

      for (const endpoint of endpoints) {
        try {
          const response = await api.post(endpoint.url, null, {
            params: { username, password },
          });

          if (response.status === 200) {
            loggedInRole = endpoint.role;

            // If the user is a Student, fetch and store their details in sessionStorage
            if (loggedInRole === 'Student') {
              const studentDetailsResponse = await api.get(`/student/studentdetails`, {
                params: { name: username },
              });

              if (studentDetailsResponse.status === 200) {
                // Store student details in sessionStorage
                sessionStorage.setItem(
                  'studentDetails',
                  JSON.stringify(studentDetailsResponse.data)
                );
              }
            }

            // If the user is an Employer, fetch and store their details in sessionStorage
            if (loggedInRole === 'Employer') {
              const employerDetailsResponse = await api.get(`/employer/employerDetails`, {
                params: { name: username },
              });

              if (employerDetailsResponse.status === 200) {
                // Store employer details in sessionStorage
                sessionStorage.setItem(
                  'employerDetails',
                  JSON.stringify(employerDetailsResponse.data)
                );
              }
            }

            break;
          }
        } catch (error) {
          // Continue trying other roles if the login fails
          if (error.response && error.response.status === 401) {
            continue;
          } else {
            throw error; // If it's a server error, stop trying
          }
        }
      }

      if (loggedInRole) {
        // Navigate to the appropriate dashboard
        if (loggedInRole === 'Admin') navigate('/admin');
        else if (loggedInRole === 'Student') navigate('/student'); // Navigate to StudentProfile.jsx
        else if (loggedInRole === 'Employer') navigate('/employer'); // Navigate to EmployerProfile.jsx
        else setErrorMessage('Unknown role. Please try again.');
      } else {
        setErrorMessage('Invalid username or password.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white-100">
      {/* Login form container */}
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Placement Portal Login
        </h1>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        {errorMessage && (
          <p className="text-center text-sm text-red-600 mt-4">{errorMessage}</p>
        )}

        <p className="text-center text-sm text-gray-500">
          Not registered?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
