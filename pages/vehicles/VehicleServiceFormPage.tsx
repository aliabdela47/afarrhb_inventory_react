import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

const VehicleServiceFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/vehicles/services');
  };

  const breadcrumbs = [
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Services', href: '/vehicles/services' },
    { name: isEditing ? 'Edit Service Record' : 'New Service Record', href: isEditing ? `/vehicles/services/edit/${id}` : '/vehicles/services/new' },
  ];

  return (
    <div>
      <PageHeader title={isEditing ? 'Edit Service Record' : 'New Service Record'} breadcrumbs={breadcrumbs} />
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Vehicle</label>
              <select id="vehicle" name="vehicle" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm">
                <option>AA 1000</option>
                <option>AA 1001</option>
              </select>
            </div>
             <div>
              <label htmlFor="garage" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Garage</label>
              <select id="garage" name="garage" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm">
                <option>Garage 1</option>
                <option>Garage 2</option>
              </select>
            </div>
             <div>
              <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Service Date</label>
              <input type="date" name="serviceDate" id="serviceDate" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
            </div>
             <div>
              <label htmlFor="cost" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cost</label>
              <input type="number" name="cost" id="cost" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description of Service</label>
              <textarea id="description" name="description" rows={3} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="nextServiceDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Next Service Date</label>
              <input type="date" name="nextServiceDate" id="nextServiceDate" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={() => navigate('/vehicles/services')} className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Cancel
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Save Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleServiceFormPage;
