import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { issuancesApi } from '../../services/api';
import { Issuance } from '../../types';

const IssuancesListPage = () => {
    const navigate = useNavigate();
    const [issuances, setIssuances] = useState<Issuance[]>([]);
    
    useEffect(() => {
        issuancesApi.getAll().then(setIssuances);
    }, []);

    const columns = [
        { header: 'ID', accessor: 'id' as keyof Issuance, sortable: true },
        { header: 'Request ID', accessor: (iss: Issuance) => (iss.requestId ? `#${iss.requestId}`: 'N/A'), sortable: true },
        { header: 'Issued To', accessor: 'issuedTo' as keyof Issuance, sortable: true },
        { header: 'Issued At', accessor: (iss: Issuance) => new Date(iss.issuedAt).toLocaleDateString(), sortable: true },
        { header: 'Status', accessor: 'status' as keyof Issuance, sortable: true },
    ];

    const handleView = (i: Issuance) => navigate(`/issuances/view/${i.id}`);
    const handleEdit = (i: Issuance) => navigate(`/issuances/edit/${i.id}`);
    const handleDelete = (i: Issuance) => alert(`Delete Issuance #${i.id}?`);

    return (
        <div>
            <PageHeader
                title="Issuances"
                breadcrumbs={[{ name: 'Operations', href: '/requests' }, { name: 'Issuances', href: '/issuances' }]}
                actionButtonText="New Issuance"
                actionButtonLink="/issuances/new"
            />
            <DataTable columns={columns} data={issuances} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default IssuancesListPage;
