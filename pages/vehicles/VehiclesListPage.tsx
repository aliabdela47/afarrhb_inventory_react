import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { vehiclesApi } from '../../services/api';
import { Vehicle } from '../../types';
import { useConfirmation } from '../../contexts/ConfirmationContext';

const VehiclesListPage = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const { confirm } = useConfirmation();
    
    useEffect(() => {
        vehiclesApi.getAll().then(setVehicles);
    }, []);
    
    const statusColorMap = {
      Available: 'bg-green-100 text-green-800',
      'In-Use': 'bg-yellow-100 text-yellow-800',
      Maintenance: 'bg-red-100 text-red-800',
    };

    const columns = [
        { header: 'Plate Number', accessor: 'plateNumber' as keyof Vehicle, sortable: true },
        { header: 'Model', accessor: 'model' as keyof Vehicle, sortable: true },
        { header: 'Type', accessor: 'type' as keyof Vehicle, sortable: true },
        { header: 'Current Driver', accessor: (v: Vehicle) => v.currentDriver || 'N/A', sortable: true },
        {
            header: 'Status',
            accessor: (v: Vehicle) => (
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColorMap[v.status]}`}>
                    {v.status}
                </span>
            ),
            sortable: true
        },
    ];

    const handleView = (v: Vehicle) => navigate(`/vehicles/view/${v.id}`);
    const handleEdit = (v: Vehicle) => navigate(`/vehicles/edit/${v.id}`);
    const handleDelete = async (v: Vehicle) => {
        const confirmed = await confirm({
            title: 'Delete Vehicle',
            message: <>Are you sure you want to delete vehicle <strong>{v.plateNumber}</strong>? This action cannot be undone.</>
        });
        if (confirmed) {
            console.log(`Deleting ${v.plateNumber}...`);
            setVehicles(prev => prev.filter(veh => veh.id !== v.id));
        }
    };

    return (
        <div>
            <PageHeader
                title="Vehicle Fleet"
                breadcrumbs={[{ name: 'Vehicles', href: '/vehicles' }, { name: 'Fleet', href: '/vehicles' }]}
                actionButtonText="Add New Vehicle"
                actionButtonLink="/vehicles/new"
            />
            <DataTable columns={columns} data={vehicles} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default VehiclesListPage;
