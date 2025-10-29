
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/auth/LoginPage';

// Module Pages
import ItemsListPage from './pages/items/ItemsListPage';
import ItemFormPage from './pages/items/ItemFormPage';
import ItemViewPage from './pages/items/ItemViewPage';
import CategoriesListPage from './pages/categories/CategoriesListPage';
import CategoryFormPage from './pages/categories/CategoryFormPage';
import WarehousesListPage from './pages/warehouses/WarehousesListPage';
import WarehouseFormPage from './pages/warehouses/WarehouseFormPage';
import EmployeesListPage from './pages/employees/EmployeesListPage';
import EmployeeFormPage from './pages/employees/EmployeeFormPage';
import DirectoratesListPage from './pages/directorates/DirectoratesListPage';
import DirectorateFormPage from './pages/directorates/DirectorateFormPage';
import CustomersListPage from './pages/customers/CustomersListPage';
import CustomerFormPage from './pages/customers/CustomerFormPage';
import RequestsListPage from './pages/requests/RequestsListPage';
import RequestFormPage from './pages/requests/RequestFormPage';
import IssuancesListPage from './pages/issuances/IssuancesListPage';
import IssuanceFormPage from './pages/issuances/IssuanceFormPage';
import VehiclesListPage from './pages/vehicles/VehiclesListPage';
import VehicleFormPage from './pages/vehicles/VehicleFormPage';
import VehicleAssignmentsPage from './pages/vehicles/VehicleAssignmentsPage';
import VehicleServicesPage from './pages/vehicles/VehicleServicesPage';
import VehicleGaragesPage from './pages/vehicles/VehicleGaragesPage';
import VehicleCheckinPage from './pages/tracking/VehicleCheckinPage';
import VehicleTrackingPage from './pages/tracking/VehicleTrackingPage';
import AuditLogsPage from './pages/auditlogs/AuditLogsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default to true for dev

  if (!isAuthenticated) {
    return (
      <HashRouter>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </HashRouter>
    );
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* Item Management */}
          <Route path="/items" element={<ItemsListPage />} />
          <Route path="/items/new" element={<ItemFormPage />} />
          <Route path="/items/edit/:id" element={<ItemFormPage />} />
          <Route path="/items/view/:id" element={<ItemViewPage />} />

          {/* Categories */}
          <Route path="/categories" element={<CategoriesListPage />} />
          <Route path="/categories/new" element={<CategoryFormPage />} />
          <Route path="/categories/edit/:id" element={<CategoryFormPage />} />

          {/* Warehouses */}
          <Route path="/warehouses" element={<WarehousesListPage />} />
          <Route path="/warehouses/new" element={<WarehouseFormPage />} />
          <Route path="/warehouses/edit/:id" element={<WarehouseFormPage />} />

          {/* HR */}
          <Route path="/employees" element={<EmployeesListPage />} />
          <Route path="/employees/new" element={<EmployeeFormPage />} />
          <Route path="/employees/edit/:id" element={<EmployeeFormPage />} />

          <Route path="/directorates" element={<DirectoratesListPage />} />
          <Route path="/directorates/new" element={<DirectorateFormPage />} />
          <Route path="/directorates/edit/:id" element={<DirectorateFormPage />} />

          <Route path="/customers" element={<CustomersListPage />} />
          <Route path="/customers/new" element={<CustomerFormPage />} />
          <Route path="/customers/edit/:id" element={<CustomerFormPage />} />

          {/* Operations */}
          <Route path="/requests" element={<RequestsListPage />} />
          <Route path="/requests/new" element={<RequestFormPage />} />
          <Route path="/requests/edit/:id" element={<RequestFormPage />} />

          <Route path="/issuances" element={<IssuancesListPage />} />
          <Route path="/issuances/new" element={<IssuanceFormPage />} />
          <Route path="/issuances/edit/:id" element={<IssuanceFormPage />} />

          {/* Vehicle Management */}
          <Route path="/vehicles" element={<VehiclesListPage />} />
          <Route path="/vehicles/new" element={<VehicleFormPage />} />
          <Route path="/vehicles/edit/:id" element={<VehicleFormPage />} />
          <Route path="/vehicles/assignments" element={<VehicleAssignmentsPage />} />
          <Route path="/vehicles/services" element={<VehicleServicesPage />} />
          <Route path="/vehicles/garages" element={<VehicleGaragesPage />} />

          {/* Vehicle Tracking */}
          <Route path="/tracking/checkin" element={<VehicleCheckinPage />} />
          <Route path="/tracking/map" element={<VehicleTrackingPage />} />

          {/* Admin */}
          <Route path="/audit-logs" element={<AuditLogsPage />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
