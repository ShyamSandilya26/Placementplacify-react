import React from 'react';

export default function ShortlistCandidates() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shortlisted Candidates</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Contact
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Company Name
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">Ramana</td>
              <td className="px-4 py-2 text-sm">Ramna@gmail.com</td>
              <td className="px-4 py-2 text-sm">9633852047</td>
              <td className="px-4 py-2 text-sm">TCS</td>
              <td className="px-4 py-2 text-center text-sm font-bold text-green-600">
                Shortlisted
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">Aaryan</td>
              <td className="px-4 py-2 text-sm">Aaryan@gmail.com</td>
              <td className="px-4 py-2 text-sm">9556187965</td>
              <td className="px-4 py-2 text-sm">Amazon</td>
              <td className="px-4 py-2 text-center text-sm font-bold text-green-600">
                Shortlisted
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">Priya</td>
              <td className="px-4 py-2 text-sm">priya@gmail.com</td>
              <td className="px-4 py-2 text-sm">879556123</td>
              <td className="px-4 py-2 text-sm">Siemens</td>
              <td className="px-4 py-2 text-center text-sm font-bold text-green-600">
                Shortlisted
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
