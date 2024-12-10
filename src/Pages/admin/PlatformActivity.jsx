import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Users, Briefcase, Activity } from 'lucide-react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

export default function PlatformActivity() {
  console.log('Rendering PlatformActivity');
  const stats = [
    {
      title: 'Total Students',
      value: 1200,
      icon: <Users className="h-10 w-10 text-blue-500" />,
      description: 'Number of students registered on the platform.',
    },
    {
      title: 'Total Employers',
      value: 350,
      icon: <Briefcase className="h-10 w-10 text-green-500" />,
      description: 'Number of employers actively posting jobs.',
    },
    {
      title: 'Active Job Listings',
      value: 85,
      icon: <BarChart className="h-10 w-10 text-yellow-500" />,
      description: 'Job listings currently open for applications.',
    },
  ];

  // Line Chart Data (Growth Over Time)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Student Registrations',
        data: [100, 200, 300, 400, 600, 700, 800, 900, 1100, 1200, 1300, 1400],
        borderColor: 'rgba(59, 130, 246, 0.8)', // Blue
        backgroundColor: 'rgba(59, 130, 246, 0.3)', // Light Blue
        fill: true,
      },
      {
        label: 'Employer Registrations',
        data: [50, 70, 100, 130, 180, 220, 280, 300, 320, 350, 370, 400],
        borderColor: 'rgba(34, 197, 94, 0.8)', // Green
        backgroundColor: 'rgba(34, 197, 94, 0.3)', // Light Green
        fill: true,
      },
    ],
  };

  // Pie Chart Data (Job Listings by Category)
  const pieChartData = {
    labels: ['Software', 'Data Science', 'Marketing', 'Design', 'Other'],
    datasets: [
      {
        data: [30, 20, 15, 10, 10], // Example data
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)', // Blue
          'rgba(34, 197, 94, 0.8)', // Green
          'rgba(234, 179, 8, 0.8)', // Yellow
          'rgba(249, 115, 22, 0.8)', // Orange
          'rgba(139, 92, 246, 0.8)', // Purple
        ],
        hoverBackgroundColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(139, 92, 246, 1)',
        ],
      },
    ],
  };

  // Line Chart Options for Compactness
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend for compactness
      },
      tooltip: {
        bodyFont: { size: 10 }, // Smaller tooltip text
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 10 } }, // Smaller x-axis labels
      },
      y: {
        ticks: { font: { size: 10 } }, // Smaller y-axis labels
      },
    },
  };

  // Pie Chart Options for Compactness
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Compact legend placement
        labels: { font: { size: 10 } }, // Smaller legend text
      },
      tooltip: {
        bodyFont: { size: 10 }, // Smaller tooltip text
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Platform Activity</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white shadow rounded-lg p-6">
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

      {/* Data Visualizations */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow h-64">
          <h2 className="text-md font-bold mb-2 text-gray-700">Growth Over Time</h2>
          <div className="h-48">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow h-64">
          <h2 className="text-md font-bold mb-2 text-gray-700">Job Listings by Category</h2>
          <div className="h-48">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
