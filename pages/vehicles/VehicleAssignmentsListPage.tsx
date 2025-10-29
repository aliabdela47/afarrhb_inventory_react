import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { vehicleAssignmentsApi } from '../../services/api';
import { VehicleAssignment } from '../../types';

const VehicleAssignmentsListPage = () => {
    const navigate = useNavigate();
    const [assignments, setAssignments] = useState<VehicleAssignment[]>([]);
    
    useEffect(() => {
        vehicleAssignmentsApi.getAll().then(setAssignments);
    }, []);

    const columns = [
        { header: 'Vehicle Plate', accessor: 'vehiclePlate' as keyof VehicleAssignment, sortable: true },
        { header: 'Driver', accessor: 'driverName' as keyof VehicleAssignment, sortable: true },
        { header: 'Destination', accessor: 'destination' as keyof VehicleAssignment, sortable: true },
        { header: 'Start Time', accessor: (a: VehicleAssignment) => new Date(a.startTime).toLocaleString(), sortable: true },
        { header: 'Status', accessor: 'status' as keyof VehicleAssignment, sortable: true },
    ];

    const handleView = (a: VehicleAssignment) => navigate(`/vehicles/assignments/view/${a.id}`);
    const handleEdit = (a: VehicleAssignment) => navigate(`/vehicles/assignments/edit/${a.id}`);
    const handleDelete = (a: VehicleAssignment) => alert(`Delete assignment for ${a.vehiclePlate}?`);

    return (
        <div>
            <PageHeader
                title="Vehicle Assignments"
                breadcrumbs={[{ name: 'Vehicles', href: '/vehicles' }, { name: 'Assignments', href: '/vehicles/assignments' }]}
                actionButtonText="New Assignment"
                actionButtonLink="/vehicles/assignments/new"
            />
            <DataTable columns={columns} data={assignments} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default VehicleAssignmentsListPage;
