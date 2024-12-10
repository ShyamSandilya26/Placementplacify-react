import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to PlacementPortal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting students with opportunities and employers with talent
        </p>
        <Button size="lg">
          <Link to="/register">Get Started</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>For Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Explore job opportunities, apply for positions, and track your
              application status all in one place.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Post job listings, review applications, and connect with qualified
              candidates efficiently.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>For Institutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Manage placement records, generate reports, and facilitate
              employer-student interactions seamlessly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
