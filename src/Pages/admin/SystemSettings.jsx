import React from 'react';
import { Button } from '../../components/ui/button';
import { Settings, UserCircle2 } from 'lucide-react';

export default function SystemSettings() {
  const settings = [
    { name: 'Job Listing Duration', value: '30 Days' },
    { name: 'Approval Workflow', value: 'Enabled' },
  ];

  const adminProfile = {
    name: 'Admin',
    email: 'admin@placementportal.com',
    role: 'Administrator',
  };

  return (
    <div>
      {/* Admin Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center space-x-4">
        <div className="bg-gray-100 p-4 rounded-full">
          <UserCircle2 className="h-12 w-12 text-gray-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{adminProfile.name}</h2>
          <p className="text-gray-600">{adminProfile.email}</p>
          <p className="text-gray-500 text-sm">{adminProfile.role}</p>
        </div>
      </div>

      <div className="space-y-4">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition duration-300"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{setting.name}</h2>
              <p className="text-gray-600">{setting.value}</p>
            </div>
            <Button variant="outline">Edit</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
