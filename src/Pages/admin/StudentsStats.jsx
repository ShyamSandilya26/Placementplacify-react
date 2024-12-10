import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { UserCheck, UserX } from 'lucide-react';

export default function StudentsStats() {
  const stats = [
    {
      title: 'Active Students',
      value: 1100,
      icon: <UserCheck className="h-10 w-10 text-green-500" />,
      description: 'Students actively using the platform.',
    },
    {
      title: 'Inactive Students',
      value: 100,
      icon: <UserX className="h-10 w-10 text-red-500" />,
      description: 'Students who are currently inactive.',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Students Stats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
              <CardTitle className="text-lg font-bold text-gray-700">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="mt-2 text-gray-500 text-sm">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Insights
        </h2>
        <div className="p-6 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700">Platform Engagement</h3>
          <p className="mt-4 text-gray-600">
            Out of <span className="font-bold">1200 students</span>,{' '}
            <span className="text-green-600 font-bold">{stats[0].value}</span> are
            actively engaged, while{' '}
            <span className="text-red-600 font-bold">{stats[1].value}</span> have
            been inactive for a while. Encourage inactive students to explore the
            platform!
          </p>
        </div>
      </div>
    </div>
  );
}
