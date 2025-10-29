import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { vehicleGaragesApi } from '../../services/api';
import { VehicleGarage } from '../../types';

const VehicleGaragesListPage = () => {
    const navigate = useNavigate();
    const [garages, setGarages] = useState<VehicleGarage[]>([]);
    
    useEffect(() => {
        vehicleGaragesApi.getAll().then(setGarages);
    }, []);

    const columns = [
        { header: 'Name', accessor: 'name' as keyof VehicleGarage, sortable: true },
        { header: 'Location', accessor: 'location' as keyof VehicleGarage, sortable: true },
        { header: 'Contact Person', accessor: 'contactPerson' as keyof VehicleGarage, sortable: true },
        { header: 'Phone', accessor: 'phone' as keyof VehicleGarage, sortable: false },
    ];

    const handleView = (g: VehicleGarage) => navigate(`/vehicles/garages/view/${g.id}`);
    const handleEdit = (g: VehicleGarage) => navigate(`/vehicles/garages/edit/${g.id}`);
    const handleDelete = (g: VehicleGarage) => alert(`Delete ${g.name}?`);

    return (
        <div>
            <PageHeader
                title="Vehicle Garages"
                breadcrumbs={[{ name: 'Vehicles', href: '/vehicles' }, { name: 'Garages', href: '/vehicles/garages' }]}
                actionButtonText="Add New Garage"
                actionButtonLink="/vehicles/garages/new"
            />
            <DataTable columns={columns} data={garages} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default VehicleGaragesListPage;
