import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { warehousesApi } from '../../services/api';
import { Warehouse } from '../../types';

const WarehousesListPage = () => {
    const navigate = useNavigate();
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
    
    useEffect(() => {
        warehousesApi.getAll().then(setWarehouses);
    }, []);

    const columns = [
        { header: 'Name', accessor: 'name' as keyof Warehouse, sortable: true },
        { header: 'Location', accessor: 'location' as keyof Warehouse, sortable: true },
        { header: 'Manager', accessor: 'manager' as keyof Warehouse, sortable: true },
    ];

    const handleView = (warehouse: Warehouse) => navigate(`/warehouses/view/${warehouse.id}`);
    const handleEdit = (warehouse: Warehouse) => navigate(`/warehouses/edit/${warehouse.id}`);
    const handleDelete = (warehouse: Warehouse) => alert(`Delete ${warehouse.name}?`);

    return (
        <div>
            <PageHeader
                title="Warehouses"
                breadcrumbs={[{ name: 'Inventory', href: '/items' }, { name: 'Warehouses', href: '/warehouses' }]}
                actionButtonText="Add New Warehouse"
                actionButtonLink="/warehouses/new"
            />
            <DataTable columns={columns} data={warehouses} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default WarehousesListPage;
