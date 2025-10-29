import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { vehicleServicesApi } from '../../services/api';
import { VehicleService } from '../../types';

const VehicleServicesListPage = () => {
    const navigate = useNavigate();
    const [services, setServices] = useState<VehicleService[]>([]);
    
    useEffect(() => {
        vehicleServicesApi.getAll().then(setServices);
    }, []);

    const columns = [
        { header: 'Vehicle Plate', accessor: 'vehiclePlate' as keyof VehicleService, sortable: true },
        { header: 'Garage', accessor: 'garage' as keyof VehicleService, sortable: true },
        { header: 'Service Date', accessor: (s: VehicleService) => new Date(s.serviceDate).toLocaleDateString(), sortable: true },
        { header: 'Cost', accessor: (s: VehicleService) => `$${s.cost.toFixed(2)}`, sortable: true },
        { header: 'Next Service', accessor: (s: VehicleService) => new Date(s.nextServiceDate).toLocaleDateString(), sortable: true },
    ];

    const handleView = (s: VehicleService) => navigate(`/vehicles/services/view/${s.id}`);
    const handleEdit = (s: VehicleService) => navigate(`/vehicles/services/edit/${s.id}`);
    const handleDelete = (s: VehicleService) => alert(`Delete service record for ${s.vehiclePlate}?`);

    return (
        <div>
            <PageHeader
                title="Vehicle Services"
                breadcrumbs={[{ name: 'Vehicles', href: '/vehicles' }, { name: 'Services', href: '/vehicles/services' }]}
                actionButtonText="New Service Record"
                actionButtonLink="/vehicles/services/new"
            />
            <DataTable columns={columns} data={services} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default VehicleServicesListPage;
