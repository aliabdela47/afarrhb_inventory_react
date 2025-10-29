import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { requestsApi } from '../../services/api';
import { Request } from '../../types';

const RequestsListPage = () => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState<Request[]>([]);
    
    useEffect(() => {
        requestsApi.getAll().then(setRequests);
    }, []);
    
    const statusColorMap = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Approved: 'bg-green-100 text-green-800',
      Rejected: 'bg-red-100 text-red-800',
    }

    const columns = [
        { header: 'ID', accessor: 'id' as keyof Request, sortable: true },
        { header: 'Requester', accessor: 'requester' as keyof Request, sortable: true },
        { header: 'Directorate', accessor: 'directorate' as keyof Request, sortable: true },
        { header: 'Created At', accessor: (req: Request) => new Date(req.createdAt).toLocaleDateString(), sortable: true },
        {
            header: 'Status',
            accessor: (req: Request) => (
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColorMap[req.status]}`}>
                    {req.status}
                </span>
            ),
            sortable: true
        },
    ];

    const handleView = (r: Request) => navigate(`/requests/view/${r.id}`);
    const handleEdit = (r: Request) => navigate(`/requests/edit/${r.id}`);
    const handleDelete = (r: Request) => alert(`Delete Request #${r.id}?`);

    return (
        <div>
            <PageHeader
                title="Requests"
                breadcrumbs={[{ name: 'Operations', href: '/requests' }, { name: 'Requests', href: '/requests' }]}
                actionButtonText="New Request"
                actionButtonLink="/requests/new"
            />
            <DataTable columns={columns} data={requests} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default RequestsListPage;
