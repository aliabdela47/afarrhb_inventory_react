import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

const DirectorateFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/directorates');
  };

  const breadcrumbs = [
    { name: 'Personnel', href: '/employees' },
    { name: 'Directorates', href: '/directorates' },
    { name: isEditing ? 'Edit Directorate' : 'New Directorate', href: isEditing ? `/directorates/edit/${id}` : '/directorates/new' },
  ];

  return (
    <div>
      <PageHeader title={isEditing ? 'Edit Directorate' : 'Create New Directorate'} breadcrumbs={breadcrumbs} />
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Directorate Name</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="manager" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Manager</label>
              <input type="text" name="manager" id="manager" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={() => navigate('/directorates')} className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Cancel
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Save Directorate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DirectorateFormPage;
