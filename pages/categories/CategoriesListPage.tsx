import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DataTable from '../../components/DataTable';
import { categoriesApi } from '../../services/api';
import { Category } from '../../types';

const CategoriesListPage = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    
    useEffect(() => {
        categoriesApi.getAll().then(setCategories);
    }, []);

    const columns = [
        { header: 'Name', accessor: 'name' as keyof Category, sortable: true },
        { header: 'Description', accessor: 'description' as keyof Category, sortable: false },
    ];

    const handleView = (category: Category) => navigate(`/categories/view/${category.id}`);
    const handleEdit = (category: Category) => navigate(`/categories/edit/${category.id}`);
    const handleDelete = (category: Category) => alert(`Delete ${category.name}?`);

    return (
        <div>
            <PageHeader
                title="Categories"
                breadcrumbs={[{ name: 'Inventory', href: '/items' }, { name: 'Categories', href: '/categories' }]}
                actionButtonText="Add New Category"
                actionButtonLink="/categories/new"
            />
            <DataTable columns={columns} data={categories} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default CategoriesListPage;
