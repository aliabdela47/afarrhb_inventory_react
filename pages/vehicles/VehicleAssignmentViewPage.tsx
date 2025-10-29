import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { vehicleAssignmentsApi } from '../../services/api';
import { VehicleAssignment } from '../../types';

const VehicleAssignmentViewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [assignment, setAssignment] = useState<VehicleAssignment | null>(null);

    useEffect(() => {
        if (id) {
            vehicleAssignmentsApi.getById(Number(id)).then(setAssignment);
        }
    }, [id]);

    if (!assignment) {
        return <div className="p-6">Loading...</div>;
    }

    const breadcrumbs = [
        { name: 'Vehicles', href: '/vehicles' },
        { name: 'Assignments', href: '/vehicles/assignments' },
        { name: `Assignment #${assignment.id}`, href: `/vehicles/assignments/view/${id}` },
    ];
    
    return (
        <div>
            <PageHeader
                title={`Assignment for ${assignment.vehiclePlate}`}
                breadcrumbs={breadcrumbs}
                actionButtonText="Edit Assignment"
                onActionButtonClick={() => navigate(`/vehicles/assignments/edit/${id}`)}
            />
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DetailItem label="Vehicle Plate" value={assignment.vehiclePlate} />
                    <DetailItem label="Driver" value={assignment.driverName} />
                    <DetailItem label="Origin" value={assignment.origin} />
                    <DetailItem label="Destination" value={assignment.destination} />
                    <DetailItem label="Start Time" value={new Date(assignment.startTime).toLocaleString()} />
                    <DetailItem label="End Time" value={assignment.endTime ? new Date(assignment.endTime).toLocaleString() : 'N/A'} />
                    <DetailItem label="Status" value={assignment.status} />
                </div>
            </div>
        </div>
    );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <p className="mt-1 text-lg text-gray-900 dark:text-white">{value}</p>
    </div>
);

export default VehicleAssignmentViewPage;
