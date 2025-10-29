import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { customersApi } from '../../services/api';
import { Customer } from '../../types';

const CustomersListPage = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState<Customer[]>([]);
    
    useEffect(() => {
        customersApi.getAll().then(setCustomers);
    }, []);

    const columns = [
        { header: 'Name', accessor: 'name' as keyof Customer, sortable: true },
        { header: 'Type', accessor: 'type' as keyof Customer, sortable: true },
        { header: 'Contact Person', accessor: 'contactPerson' as keyof Customer, sortable: true },
        { header: 'Phone', accessor: 'phone' as keyof Customer, sortable: false },
        { header: 'Email', accessor: 'email' as keyof Customer, sortable: false },
    ];

    const handleView = (c: Customer) => navigate(`/customers/view/${c.id}`);
    const handleEdit = (c: Customer) => navigate(`/customers/edit/${c.id}`);
    const handleDelete = (c: Customer) => alert(`Delete ${c.name}?`);

    return (
        <div>
            <PageHeader
                title="Customers"
                breadcrumbs={[{ name: 'Personnel', href: '/employees' }, { name: 'Customers', href: '/customers' }]}
                actionButtonText="Add New Customer"
                actionButtonLink="/customers/new"
            />
            <DataTable columns={columns} data={customers} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default CustomersListPage;
