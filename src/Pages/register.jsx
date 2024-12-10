import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { Button } from '../components/ui/button'; // Adjust path
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'; // Adjust path
import { Input } from '../components/ui/input'; // Adjust path
import { Label } from '../components/ui/label'; // Adjust path
import { Eye, EyeOff } from 'lucide-react'; // Icons for password visibility
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'; // Adjust path
import { api } from '@/config/apis'; // Import the Axios instance with the base URL

export default function RegisterPage() {
  const [userType, setUserType] = useState('student'); // User type (student/employer)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [isRegistered, setIsRegistered] = useState(false); // Registration success state
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const navigate = useNavigate(); // Navigation hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors

    const apiEndpoint =
      userType === 'student' ? '/student/register' : '/employer/register'; // Relative paths

    const payload = {
      ...formData,
      contact: formData.phone, // Ensure 'contact' matches backend expectation
    };

    try {
      const response = await api.post(apiEndpoint, payload); // Use the `api` instance
      if (response.status === 201) {
        setIsRegistered(true); // Registration success
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage(
        error.response?.data?.message ||
          'An error occurred during registration. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Register for PlacementPortal
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!isRegistered ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userType">I am a</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger id="userType">
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="employer">Employer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2/3 right-3 transform -translate-y-2/3 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500" />
                  ) : (
                    <Eye size={20} className="text-gray-500" />
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-600">
                Registered Successfully!
              </h3>
              <Button
                className="w-full mt-4"
                onClick={() => navigate('/login')}
              >
                Go to Login
              </Button>
            </div>
          )}

          {errorMessage && (
            <p className="text-center text-sm text-red-600 mt-2">
              {errorMessage}
            </p>
          )}

          <p className="text-center mt-4">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-primary hover:underline"
            >
              Login here
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
