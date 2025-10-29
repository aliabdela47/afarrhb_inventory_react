
// This is a mock API. In a real application, you would use fetch or a library like axios to make real API calls.
import { Item, Employee, Category, Warehouse, Directorate, Customer, Request, Issuance, Vehicle, VehicleAssignment, VehicleService, VehicleGarage, AuditLog } from '../types';

const MOCK_ITEMS: Item[] = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Laptop Model ${i + 1}`,
    category: i % 2 === 0 ? 'Electronics' : 'Office Supplies',
    code: `ITM-00${i + 1}`,
    currentStock: 10 + i * 2,
    unit: 'pcs',
    description: 'A high-performance laptop for office use.',
    warehouse: 'Main Warehouse',
    lowStockThreshold: 5,
    createdAt: new Date().toISOString(),
}));

const MOCK_EMPLOYEES: Employee[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    salary: 50000 + i * 1000,
    name_am: `ሰራተኛ ${i + 1}`,
    taamagoli: `Title ${i + 1}`,
    directorate: i % 3 === 0 ? 'IT' : 'HR',
    photo: `https://picsum.photos/seed/${i+1}/100`,
    employee_code: `EMP-00${i+1}`,
    department: 'Operations',
    position: 'Specialist',
    phone: `555-010${i}`,
    email: `employee${i+1}@example.com`,
    is_active: i % 5 !== 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
}));

// Simulate network delay
const delay = <T,>(data: T, ms = 500): Promise<T> => new Promise(resolve => setTimeout(() => resolve(data), ms));

// Items API
export const getItems = () => delay([...MOCK_ITEMS]);
export const getItemById = (id: number) => delay(MOCK_ITEMS.find(item => item.id === id) || null);

// Employees API
export const getEmployees = () => delay([...MOCK_EMPLOYEES]);
export const getEmployeeById = (id: number) => delay(MOCK_EMPLOYEES.find(e => e.id === id) || null);

// A generic function for other modules until they have specific mock data
const createMockData = <T,>(creator: (index: number) => T, count = 10): T[] => Array.from({ length: count }, (_, i) => creator(i));

export const getCategories = (): Promise<Category[]> => delay(createMockData(i => ({ id: i + 1, name: `Category ${i + 1}`, description: `Description for Category ${i + 1}` })));
export const getWarehouses = (): Promise<Warehouse[]> => delay(createMockData(i => ({ id: i + 1, name: `Warehouse ${String.fromCharCode(65 + i)}`, location: `City ${i+1}`, manager: `Manager ${i+1}` })));
export const getDirectorates = (): Promise<Directorate[]> => delay(createMockData(i => ({ id: i + 1, name: `Directorate ${i + 1}`, manager: `Director ${i+1}` })));
export const getCustomers = (): Promise<Customer[]> => delay(createMockData(i => ({ id: i + 1, name: `Customer ${i + 1}`, type: i % 2 === 0 ? 'Internal' : 'External', contactPerson: `Contact ${i+1}`, phone: `555-020${i}`, email: `customer${i+1}@example.com` })));
export const getRequests = (): Promise<Request[]> => delay(createMockData(i => ({ id: i + 1, requester: `Employee ${i+1}`, directorate: `Directorate ${i+1}`, status: i % 3 === 0 ? 'Pending' : (i % 3 === 1 ? 'Approved' : 'Rejected'), items: [{itemId: 1, itemName: 'Laptop', quantity: 2}], createdAt: new Date().toISOString() })));
export const getIssuances = (): Promise<Issuance[]> => delay(createMockData(i => ({ id: i + 1, requestId: i+1, issuedTo: `Employee ${i+1}`, status: 'Completed', items: [{itemId: 1, itemName: 'Laptop', quantityIssued: 2}], issuedAt: new Date().toISOString() })));
export const getVehicles = (): Promise<Vehicle[]> => delay(createMockData(i => ({ id: i + 1, plateNumber: `AA ${1000+i}`, model: 'Toyota Corolla', type: 'Sedan', status: i % 3 === 0 ? 'Available' : (i % 3 === 1 ? 'In-Use' : 'Maintenance'), currentDriver: i%3 === 1 ? `Driver ${i}`: null, lastServiceDate: '2023-10-01', nextServiceDate: '2024-04-01' })));
export const getVehicleAssignments = (): Promise<VehicleAssignment[]> => delay(createMockData(i => ({ id: i + 1, vehicleId: i+1, vehiclePlate: `AA ${1000+i}`, driverId: i+1, driverName: `Driver ${i+1}`, origin: 'Addis Ababa', destination: 'Adama', startTime: new Date().toISOString(), endTime: null, status: 'Ongoing' })));
export const getVehicleServices = (): Promise<VehicleService[]> => delay(createMockData(i => ({ id: i + 1, vehicleId: i+1, vehiclePlate: `AA ${1000+i}`, garage: `Garage ${i+1}`, serviceDate: new Date().toISOString(), cost: 5000, description: 'Routine maintenance', nextServiceDate: '2024-10-01' })));
export const getVehicleGarages = (): Promise<VehicleGarage[]> => delay(createMockData(i => ({ id: i + 1, name: `Garage ${i+1}`, location: 'Mekanisa', contactPerson: `Contact ${i+1}`, phone: `555-030${i}` })));
export const getAuditLogs = (): Promise<AuditLog[]> => delay(createMockData(i => ({ id: i + 1, user: 'Admin', action: 'CREATE', entity: 'Item', entityId: i+1, timestamp: new Date().toISOString(), details: 'Created new item: Laptop' })));
