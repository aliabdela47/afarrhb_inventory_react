import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { PlusIcon, TrashIcon } from '../../components/icons/Icons';

const IssuanceFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/issuances');
  };

  const breadcrumbs = [
    { name: 'Operations', href: '/requests' },
    { name: 'Issuances', href: '/issuances' },
    { name: isEditing ? 'Edit Issuance' : 'New Issuance', href: isEditing ? `/issuances/edit/${id}` : '/issuances/new' },
  ];

  return (
    <div>
      <PageHeader title={isEditing ? 'Edit Issuance' : 'Create New Issuance'} breadcrumbs={breadcrumbs} />
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="requestId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Related Request (Optional)</label>
              <select id="requestId" name="requestId" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm">
                <option>None</option>
                <option>Request #1</option>
                <option>Request #2</option>
              </select>
            </div>
            <div>
              <label htmlFor="issuedTo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Issued To (Employee/Customer)</label>
              <input type="text" name="issuedTo" id="issuedTo" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Issued Items</h3>
              <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-4">
                      <select className="flex-grow rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-3 shadow-sm sm:text-sm"><option>Laptop Model 1</option></select>
                      <input type="number" placeholder="Qty Issued" className="w-32 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm sm:text-sm" defaultValue="1" />
                      <button type="button" className="text-red-500 hover:text-red-700"><TrashIcon className="h-5 w-5"/></button>
                  </div>
              </div>
              <button type="button" className="mt-4 inline-flex items-center px-3 py-2 border border-dashed border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-transparent">
                  <PlusIcon className="h-5 w-5 mr-2" /> Add Item
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={() => navigate('/issuances')} className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Cancel
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Save Issuance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssuanceFormPage;
