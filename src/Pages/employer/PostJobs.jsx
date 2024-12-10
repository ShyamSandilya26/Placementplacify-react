import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { api } from '@/config/apis'; // Import the Axios instance with base URL

export default function PostJobs() {
  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to track form data
  const [formData, setFormData] = useState({
    companyName: '',
    title: '',
    description: '',
    salary: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await api.post('/employer/post-job', {
        companyname: formData.companyName,
        title: formData.title,
        description: formData.description,
        salary: formData.salary,
      });

      if (response.status === 201) {
        setIsSubmitted(true); // Set the submission status to true
        setFormData({ companyName: '', title: '', description: '', salary: '' }); // Reset form
      } else {
        console.error('Failed to post job:', response.data);
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Post a New Job
      </h1>

      {/* Success Message */}
      {isSubmitted && (
        <div className="mb-6 text-green-600 text-lg font-semibold">
          Job Posted Successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            placeholder="Enter job title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Job Description</Label>
          <textarea
            id="description"
            placeholder="Enter job description"
            className="w-full border rounded-lg p-3 text-gray-700 bg-white"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="salary">Salary Range</Label>
          <Input
            id="salary"
            placeholder="Enter salary range"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Post Job
        </Button>
      </form>
    </div>
  );
}
