import { useState } from 'react';
import { Link } from 'react-router-dom'; // use react-router-dom Link
import { Button } from '../components/ui/button'; // Adjust path
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'; // Adjust path
import { MenuIcon, XIcon } from 'lucide-react'; // Adjust path

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About PlacementPortal</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>PlacementPortal is dedicated to bridging the gap between talented students and leading employers. Our mission is to facilitate seamless connections, empowering students to launch their careers and helping companies find their next generation of innovators.</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access to a wide range of job opportunities from top companies</li>
                <li>Easy-to-use application process</li>
                <li>Real-time application status tracking</li>
                <li>Resources for interview preparation and career development</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access to a pool of qualified and motivated candidates</li>
                <li>Streamlined recruitment process</li>
                <li>Tools for efficient application review and candidate communication</li>
                <li>Analytics to improve your hiring strategies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p>PlacementPortal is run by a dedicated team of professionals with backgrounds in education, technology, and human resources. We're committed to continuously improving our platform to meet the evolving needs of students and employers in the digital age.</p>
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  );
}
