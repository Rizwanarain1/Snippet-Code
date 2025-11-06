// Template code data for table templates
const templateCodes = {
    
    // ====================================================================
    // TEMPLATE 1: MODERN TABLE
    // Features: User avatars, status badges, action buttons
    // Category: Modern
    // ====================================================================
    table1: {
        html: `<div class="table-container">
    <table class="modern-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-info">
                        <div class="avatar">JD</div>
                        <div class="user-details">
                            <div class="name">John Doe</div>
                            <div class="email">john@example.com</div>
                        </div>
                    </div>
                </td>
                <td>Frontend Developer</td>
                <td>Engineering</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="actions">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-info">
                        <div class="avatar">JS</div>
                        <div class="user-details">
                            <div class="name">Jane Smith</div>
                            <div class="email">jane@example.com</div>
                        </div>
                    </div>
                </td>
                <td>UX Designer</td>
                <td>Design</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="actions">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.modern-table {
    width: 100%;
    border-collapse: collapse;
}

.modern-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
}

.modern-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
}

.modern-table tr:hover {
    background: #f9fafb;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
}

.user-details .name {
    font-weight: 600;
    color: #1f2937;
}

.user-details .email {
    font-size: 0.875rem;
    color: #6b7280;
}

.status {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

.status.active {
    background: #d1fae5;
    color: #065f46;
}

.status.inactive {
    background: #fee2e2;
    color: #991b1b;
}

.actions {
    display: flex;
    gap: 0.5rem;
}

.btn-edit {
    background: #e0e7ff;
    color: #3730a3;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-edit:hover {
    background: #c7d2fe;
}

.btn-delete {
    background: #fef2f2;
    color: #dc2626;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-delete:hover {
    background: #fecaca;
}`,
        js: `// No JavaScript required for this table`
    },
// ====================================================================
// TEMPLATE 2: BUSINESS FINANCE TABLE
// ====================================================================
table2: {
    html: `<div class="business-finance-table">
    <div class="table-header">
        <h3>Financial Report Q4 2024</h3>
        <div class="table-actions">
            <button class="export-btn">Export CSV</button>
            <button class="print-btn">Print</button>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Department</th>
                <th>Budget</th>
                <th>Spent</th>
                <th>Remaining</th>
                <th>Utilization</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Marketing</td>
                <td>$50,000</td>
                <td>$42,500</td>
                <td>$7,500</td>
                <td>
                    <div class="utilization-bar">
                        <div class="progress" style="width: 85%"></div>
                        <span>85%</span>
                    </div>
                </td>
                <td><span class="status on-track">On Track</span></td>
            </tr>
            <tr>
                <td>Engineering</td>
                <td>$120,000</td>
                <td>$95,000</td>
                <td>$25,000</td>
                <td>
                    <div class="utilization-bar">
                        <div class="progress" style="width: 79%"></div>
                        <span>79%</span>
                    </div>
                </td>
                <td><span class="status on-track">On Track</span></td>
            </tr>
            <tr>
                <td>Sales</td>
                <td>$75,000</td>
                <td>$68,000</td>
                <td>$7,000</td>
                <td>
                    <div class="utilization-bar">
                        <div class="progress" style="width: 91%"></div>
                        <span>91%</span>
                    </div>
                </td>
                <td><span class="status warning">Watch</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.business-finance-table {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.business-finance-table .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.table-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
}

.table-actions {
    display: flex;
    gap: 0.5rem;
}

.export-btn, .print-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    color: #374151;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.3s;
}

.export-btn:hover, .print-btn:hover {
    background: #f9fafb;
    border-color: #9ca3af;
}

.business-finance-table table {
    width: 100%;
    border-collapse: collapse;
}

.business-finance-table th {
    background: #1f2937;
    color: white;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
}

.business-finance-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
}

.business-finance-table tr:hover {
    background: #f9fafb;
}

.utilization-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.utilization-bar .progress {
    height: 8px;
    background: linear-gradient(90deg, #10b981, #059669);
    border-radius: 4px;
    min-width: 60px;
}

.utilization-bar span {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    min-width: 35px;
}

.status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status.on-track {
    background: #d1fae5;
    color: #065f46;
}

.status.warning {
    background: #fef3c7;
    color: #92400e;
}`,
    js: `// Business finance table functionality
document.querySelectorAll('.export-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Exporting data to CSV...');
    });
});

document.querySelectorAll('.print-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.print();
    });
});`
},

// ====================================================================
// TEMPLATE 3: EMPLOYEE DIRECTORY
// ====================================================================
table3: {
    html: `<div class="employee-directory">
    <div class="directory-header">
        <h3>Employee Directory</h3>
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search employees...">
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="employee-card">
                        <div class="avatar">JD</div>
                        <div class="emp-info">
                            <div class="name">John Doe</div>
                            <div class="id">EMP-001</div>
                        </div>
                    </div>
                </td>
                <td>Senior Developer</td>
                <td>Engineering</td>
                <td>john.doe@company.com</td>
                <td>+1 (555) 123-4567</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>
                    <div class="employee-card">
                        <div class="avatar">JS</div>
                        <div class="emp-info">
                            <div class="name">Jane Smith</div>
                            <div class="id">EMP-002</div>
                        </div>
                    </div>
                </td>
                <td>Product Manager</td>
                <td>Product</td>
                <td>jane.smith@company.com</td>
                <td>+1 (555) 987-6543</td>
                <td>San Francisco</td>
            </tr>
            <tr>
                <td>
                    <div class="employee-card">
                        <div class="avatar">RJ</div>
                        <div class="emp-info">
                            <div class="name">Robert Johnson</div>
                            <div class="id">EMP-003</div>
                        </div>
                    </div>
                </td>
                <td>Sales Executive</td>
                <td>Sales</td>
                <td>robert.j@company.com</td>
                <td>+1 (555) 456-7890</td>
                <td>Chicago</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.employee-directory {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.directory-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.directory-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
}

.search-box {
    position: relative;
    width: 300px;
}

.search-box i {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
}

.search-box input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 0.875rem;
    transition: all 0.3s;
}

.search-box input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.employee-directory table {
    width: 100%;
    border-collapse: collapse;
}

.employee-directory th {
    background: #1f2937;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
}

.employee-directory td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
}

.employee-directory tr:hover {
    background: #f9fafb;
}

.employee-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.employee-card .avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.emp-info .name {
    font-weight: 600;
    color: #1f2937;
}

.emp-info .id {
    font-size: 0.75rem;
    color: #6b7280;
    margin-top: 2px;
}`,
    js: `// Employee directory search functionality
document.querySelectorAll('.search-box input').forEach(input => {
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = e.target.closest('.employee-directory').querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});`
},

// ====================================================================
// TEMPLATE 4: SALES PERFORMANCE DASHBOARD
// ====================================================================
table4: {
    html: `<div class="sales-dashboard">
    <div class="dashboard-header">
        <h3>Sales Performance Q4 2024</h3>
        <div class="filters">
            <select class="period-filter">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option selected>Quarter 4</option>
            </select>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Sales Rep</th>
                <th>Region</th>
                <th>Deals Closed</th>
                <th>Revenue</th>
                <th>Target</th>
                <th>Achievement</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sarah Wilson</td>
                <td>North America</td>
                <td>24</td>
                <td>$245,000</td>
                <td>$200,000</td>
                <td>
                    <div class="achievement">
                        <span class="percent">122%</span>
                        <div class="progress-bar">
                            <div class="progress" style="width: 122%"></div>
                        </div>
                    </div>
                </td>
                <td><span class="trend up">↗ 15%</span></td>
            </tr>
            <tr>
                <td>Mike Chen</td>
                <td>Europe</td>
                <td>18</td>
                <td>$189,500</td>
                <td>$180,000</td>
                <td>
                    <div class="achievement">
                        <span class="percent">105%</span>
                        <div class="progress-bar">
                            <div class="progress" style="width: 105%"></div>
                        </div>
                    </div>
                </td>
                <td><span class="trend up">↗ 8%</span></td>
            </tr>
            <tr>
                <td>Emma Davis</td>
                <td>Asia Pacific</td>
                <td>15</td>
                <td>$156,000</td>
                <td>$175,000</td>
                <td>
                    <div class="achievement">
                        <span class="percent">89%</span>
                        <div class="progress-bar">
                            <div class="progress" style="width: 89%"></div>
                        </div>
                    </div>
                </td>
                <td><span class="trend down">↘ 5%</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.sales-dashboard {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.dashboard-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
}

.period-filter {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    color: #374151;
    font-size: 0.875rem;
}

.sales-dashboard table {
    width: 100%;
    border-collapse: collapse;
}

.sales-dashboard th {
    background: #1f2937;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
}

.sales-dashboard td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
}

.sales-dashboard tr:hover {
    background: #f9fafb;
}

.achievement {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 120px;
}

.percent {
    font-weight: 600;
    font-size: 0.875rem;
    min-width: 40px;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    min-width: 80px;
}

.progress-bar .progress {
    height: 100%;
    border-radius: 4px;
}

.trend {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
}

.trend.up {
    background: #d1fae5;
    color: #065f46;
}

.trend.down {
    background: #fee2e2;
    color: #dc2626;
}

/* Color coding for achievement levels */
.sales-dashboard tr:nth-child(1) .progress { background: linear-gradient(90deg, #10b981, #059669); }
.sales-dashboard tr:nth-child(2) .progress { background: linear-gradient(90deg, #f59e0b, #d97706); }
.sales-dashboard tr:nth-child(3) .progress { background: linear-gradient(90deg, #ef4444, #dc2626); }`,
    js: `// Sales dashboard filter functionality
document.querySelectorAll('.period-filter').forEach(select => {
    select.addEventListener('change', (e) => {
        alert('Filtering data for: ' + e.target.value);
        // In real implementation, you would filter the table data here
    });
});`
},

// ====================================================================
// TEMPLATE 5: PROJECT MANAGEMENT BOARD
// ====================================================================
table5: {
    html: `<div class="project-management-board">
    <div class="board-header">
        <h3>Project Management</h3>
        <div class="board-stats">
            <div class="stat">
                <span class="number">12</span>
                <span class="label">Active</span>
            </div>
            <div class="stat">
                <span class="number">5</span>
                <span class="label">Completed</span>
            </div>
            <div class="stat">
                <span class="number">2</span>
                <span class="label">Delayed</span>
            </div>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Team Lead</th>
                <th>Priority</th>
                <th>Progress</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">🚀</div>
                        <div class="project-details">
                            <div class="project-name">Website Redesign</div>
                            <div class="project-id">PROJ-2024-001</div>
                        </div>
                    </div>
                </td>
                <td>John Doe</td>
                <td><span class="priority high">High</span></td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress" style="width: 75%"></div>
                        </div>
                        <span>75%</span>
                    </div>
                </td>
                <td>2024-12-15</td>
                <td><span class="status on-track">On Track</span></td>
                <td>
                    <div class="team-avatars">
                        <span class="avatar">JD</span>
                        <span class="avatar">JS</span>
                        <span class="avatar">+3</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">🛒</div>
                        <div class="project-details">
                            <div class="project-name">E-commerce Platform</div>
                            <div class="project-id">PROJ-2024-002</div>
                        </div>
                    </div>
                </td>
                <td>Jane Smith</td>
                <td><span class="priority critical">Critical</span></td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress" style="width: 90%"></div>
                        </div>
                        <span>90%</span>
                    </div>
                </td>
                <td>2024-11-30</td>
                <td><span class="status completed">Completed</span></td>
                <td>
                    <div class="team-avatars">
                        <span class="avatar">JS</span>
                        <span class="avatar">RJ</span>
                        <span class="avatar">+5</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.project-management-board {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.board-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.board-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
}

.board-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    text-align: center;
}

.stat .number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
}

.stat .label {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
}

.project-management-board table {
    width: 100%;
    border-collapse: collapse;
}

.project-management-board th {
    background: #1f2937;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
}

.project-management-board td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
}

.project-management-board tr:hover {
    background: #f9fafb;
}

.project-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    font-size: 1.25rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
    border-radius: 8px;
    flex-shrink: 0;
}

.project-details .project-name {
    font-weight: 600;
    color: #1f2937;
}

.project-details .project-id {
    font-size: 0.75rem;
    color: #6b7280;
    margin-top: 2px;
}

.priority {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.priority.high {
    background: #fef3c7;
    color: #92400e;
}

.priority.critical {
    background: #fee2e2;
    color: #dc2626;
}

.progress-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 120px;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    min-width: 80px;
}

.progress-bar .progress {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.team-avatars {
    display: flex;
    gap: 0.25rem;
}

.team-avatars .avatar {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
}

.status.completed {
    background: #d1fae5;
    color: #065f46;
}`,
    js: `// Project management board functionality
// Add any interactive features like sorting or filtering here`
},

// ====================================================================
// TEMPLATE 6: INVENTORY MANAGEMENT
// ====================================================================
table6: {
    html: `<div class="inventory-management">
    <div class="inventory-header">
        <h3>Inventory Management</h3>
        <div class="inventory-summary">
            <div class="summary-item">
                <span class="value">1,248</span>
                <span class="label">Total Items</span>
            </div>
            <div class="summary-item">
                <span class="value">$284,500</span>
                <span class="label">Total Value</span>
            </div>
            <div class="summary-item">
                <span class="value warning">42</span>
                <span class="label">Low Stock</span>
            </div>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Unit Price</th>
                <th>Total Value</th>
                <th>Stock Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>PROD-001</td>
                <td>MacBook Pro 16"</td>
                <td>Electronics</td>
                <td>48</td>
                <td>20</td>
                <td>$2,499</td>
                <td>$119,952</td>
                <td><span class="stock-status in-stock">In Stock</span></td>
            </tr>
            <tr>
                <td>PROD-002</td>
                <td>Wireless Mouse</td>
                <td>Accessories</td>
                <td>15</td>
                <td>25</td>
                <td>$79</td>
                <td>$1,185</td>
                <td><span class="stock-status low-stock">Low Stock</span></td>
            </tr>
            <tr>
                <td>PROD-003</td>
                <td>USB-C Hub</td>
                <td>Accessories</td>
                <td>0</td>
                <td>15</td>
                <td>$129</td>
                <td>$0</td>
                <td><span class="stock-status out-of-stock">Out of Stock</span></td>
            </tr>
            <tr>
                <td>PROD-004</td>
                <td>Monitor 27" 4K</td>
                <td>Electronics</td>
                <td>32</td>
                <td>10</td>
                <td>$699</td>
                <td>$22,368</td>
                <td><span class="stock-status in-stock">In Stock</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.inventory-management {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.inventory-header {
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.inventory-header h3 {
    margin: 0 0 1rem 0;
    color: #1f2937;
    font-weight: 600;
}

.inventory-summary {
    display: flex;
    gap: 2rem;
}

.summary-item {
    text-align: center;
}

.summary-item .value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
}

.summary-item .value.warning {
    color: #dc2626;
}

.summary-item .label {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
}

.inventory-management table {
    width: 100%;
    border-collapse: collapse;
}

.inventory-management th {
    background: #1f2937;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
}

.inventory-management td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
}

.inventory-management tr:hover {
    background: #f9fafb;
}

.stock-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.stock-status.in-stock {
    background: #d1fae5;
    color: #065f46;
}

.stock-status.low-stock {
    background: #fef3c7;
    color: #92400e;
}

.stock-status.out-of-stock {
    background: #fee2e2;
    color: #dc2626;
}

/* Highlight low stock rows */
.inventory-management tr:nth-child(2) {
    background: #fffbeb;
}

.inventory-management tr:nth-child(2):hover {
    background: #fef3c7;
}

.inventory-management tr:nth-child(3) {
    background: #fef2f2;
}

.inventory-management tr:nth-child(3):hover {
    background: #fecaca;
}`,
    js: `// Inventory management functionality
// Add features like stock alerts or reordering here`
},
// ====================================================================
// TEMPLATE 7: MINIMAL DATA TABLE
// ====================================================================
table7: {
    html: `<div class="minimal-data-table">
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sales</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wireless Earbuds</td>
                <td>Electronics</td>
                <td>$129.99</td>
                <td>156</td>
                <td>284</td>
            </tr>
            <tr>
                <td>Smart Watch</td>
                <td>Electronics</td>
                <td>$199.99</td>
                <td>89</td>
                <td>167</td>
            </tr>
            <tr>
                <td>Desk Lamp</td>
                <td>Home</td>
                <td>$49.99</td>
                <td>234</td>
                <td>189</td>
            </tr>
            <tr>
                <td>Notebook Set</td>
                <td>Stationery</td>
                <td>$24.99</td>
                <td>567</td>
                <td>432</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-data-table {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.minimal-data-table table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-data-table th {
    background: #f8fafc;
    color: #374151;
    padding: 0.875rem 1rem;
    text-align: left;
    font-weight: 500;
    font-size: 0.875rem;
    border-bottom: 1px solid #e5e7eb;
}

.minimal-data-table td {
    padding: 0.875rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 0.875rem;
}

.minimal-data-table tr:last-child td {
    border-bottom: none;
}

.minimal-data-table tr:hover {
    background: #f9fafb;
}`,
    js: `// No JavaScript required - pure minimal design`
},

// ====================================================================
// TEMPLATE 8: CLEAN USER LIST
// ====================================================================
table8: {
    html: `<div class="clean-user-list">
    <table>
        <thead>
            <tr>
                <th>User</th>
                <th>Role</th>
                <th>Last Active</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">JD</div>
                        <div class="user-details-minimal">
                            <div class="name">John Doe</div>
                            <div class="email">john@example.com</div>
                        </div>
                    </div>
                </td>
                <td>Administrator</td>
                <td>2 hours ago</td>
                <td>
                    <div class="status-dot online"></div>
                    Online
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">JS</div>
                        <div class="user-details-minimal">
                            <div class="name">Jane Smith</div>
                            <div class="email">jane@example.com</div>
                        </div>
                    </div>
                </td>
                <td>Editor</td>
                <td>1 day ago</td>
                <td>
                    <div class="status-dot away"></div>
                    Away
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">RJ</div>
                        <div class="user-details-minimal">
                            <div class="name">Robert Johnson</div>
                            <div class="email">robert@example.com</div>
                        </div>
                    </div>
                </td>
                <td>Viewer</td>
                <td>3 days ago</td>
                <td>
                    <div class="status-dot offline"></div>
                    Offline
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.clean-user-list {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.clean-user-list table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.clean-user-list th {
    background: #f8fafc;
    color: #374151;
    padding: 1rem;
    text-align: left;
    font-weight: 500;
    font-size: 0.875rem;
    border-bottom: 1px solid #e5e7eb;
}

.clean-user-list td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 0.875rem;
}

.clean-user-list tr:last-child td {
    border-bottom: none;
}

.clean-user-list tr:hover {
    background: #f9fafb;
}

.user-minimal {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar-minimal {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.user-details-minimal .name {
    font-weight: 500;
    color: #1f2937;
    font-size: 0.875rem;
}

.user-details-minimal .email {
    font-size: 0.75rem;
    color: #9ca3af;
    margin-top: 2px;
}

.status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 6px;
}

.status-dot.online {
    background: #10b981;
}

.status-dot.away {
    background: #f59e0b;
}

.status-dot.offline {
    background: #6b7280;
}`,
    js: `// No JavaScript required - clean and simple`
},

// ====================================================================
// TEMPLATE 9: SIMPLE PRICING TABLE
// ====================================================================
table9: {
    html: `<div class="simple-pricing-table">
    <table>
        <thead>
            <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Users</th>
                <th>Storage</th>
                <th>Support</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="plan-name">Basic</div>
                    <div class="plan-desc">For small teams</div>
                </td>
                <td>
                    <div class="price">$19<span>/month</span></div>
                </td>
                <td>5 users</td>
                <td>10 GB</td>
                <td>Email</td>
            </tr>
            <tr>
                <td>
                    <div class="plan-name">Pro</div>
                    <div class="plan-desc">For growing teams</div>
                </td>
                <td>
                    <div class="price">$49<span>/month</span></div>
                </td>
                <td>15 users</td>
                <td>50 GB</td>
                <td>Priority</td>
            </tr>
            <tr>
                <td>
                    <div class="plan-name">Enterprise</div>
                    <div class="plan-desc">For large organizations</div>
                </td>
                <td>
                    <div class="price">$99<span>/month</span></div>
                </td>
                <td>Unlimited</td>
                <td>100 GB</td>
                <td>24/7</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.simple-pricing-table {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.simple-pricing-table table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.simple-pricing-table th {
    background: #f8fafc;
    color: #374151;
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    font-size: 0.875rem;
    border-bottom: 1px solid #e5e7eb;
}

.simple-pricing-table td {
    padding: 1.25rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 0.875rem;
}

.simple-pricing-table tr:last-child td {
    border-bottom: none;
}

.simple-pricing-table tr:hover {
    background: #f9fafb;
}

.plan-name {
    font-weight: 600;
    color: #1f2937;
    font-size: 0.95rem;
}

.plan-desc {
    font-size: 0.75rem;
    color: #9ca3af;
    margin-top: 2px;
}

.price {
    font-weight: 700;
    color: #1f2937;
    font-size: 1.25rem;
}

.price span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #6b7280;
}`,
    js: `// No JavaScript required - simple pricing display`
},

// ====================================================================
// TEMPLATE 10: MINIMAL TASK LIST
// ====================================================================
table10: {
    html: `<div class="minimal-task-list">
    <table>
        <thead>
            <tr>
                <th style="width: 40px;"></th>
                <th>Task</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Assignee</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" class="task-checkbox">
                </td>
                <td>
                    <div class="task-title">Design homepage layout</div>
                    <div class="task-desc">Create responsive design for main page</div>
                </td>
                <td>
                    <span class="priority-tag high">High</span>
                </td>
                <td>Tomorrow</td>
                <td>
                    <div class="assignee-minimal">JD</div>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" class="task-checkbox" checked>
                </td>
                <td>
                    <div class="task-title">Write documentation</div>
                    <div class="task-desc">API documentation for new features</div>
                </td>
                <td>
                    <span class="priority-tag medium">Medium</span>
                </td>
                <td>Yesterday</td>
                <td>
                    <div class="assignee-minimal">JS</div>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" class="task-checkbox">
                </td>
                <td>
                    <div class="task-title">Team meeting</div>
                    <div class="task-desc">Weekly sprint planning</div>
                </td>
                <td>
                    <span class="priority-tag low">Low</span>
                </td>
                <td>Friday</td>
                <td>
                    <div class="assignee-minimal">RJ</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-task-list {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.minimal-task-list table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-task-list th {
    background: #f8fafc;
    color: #374151;
    padding: 1rem;
    text-align: left;
    font-weight: 500;
    font-size: 0.875rem;
    border-bottom: 1px solid #e5e7eb;
}

.minimal-task-list td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 0.875rem;
}

.minimal-task-list tr:last-child td {
    border-bottom: none;
}

.minimal-task-list tr:hover {
    background: #f9fafb;
}

.task-checkbox {
    width: 16px;
    height: 16px;
    border: 2px solid #d1d5db;
    border-radius: 3px;
    cursor: pointer;
}

.task-checkbox:checked {
    background: #10b981;
    border-color: #10b981;
}

.task-title {
    font-weight: 500;
    color: #1f2937;
    font-size: 0.875rem;
}

.task-desc {
    font-size: 0.75rem;
    color: #9ca3af;
    margin-top: 2px;
}

.priority-tag {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.priority-tag.high {
    background: #fee2e2;
    color: #dc2626;
}

.priority-tag.medium {
    background: #fef3c7;
    color: #d97706;
}

.priority-tag.low {
    background: #d1fae5;
    color: #059669;
}

.assignee-minimal {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 500;
}`,
    js: `// Task list functionality
document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const row = this.closest('tr');
        if (this.checked) {
            row.style.opacity = '0.6';
            row.querySelector('.task-title').style.textDecoration = 'line-through';
        } else {
            row.style.opacity = '1';
            row.querySelector('.task-title').style.textDecoration = 'none';
        }
    });
});`
},

// ====================================================================
// TEMPLATE 11: CLEAN METRICS TABLE
// ====================================================================
table11: {
    html: `<div class="clean-metrics-table">
    <table>
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Website Visitors</td>
                <td>12,489</td>
                <td>10,256</td>
                <td>
                    <span class="change positive">+21.8%</span>
                </td>
                <td>
                    <div class="trend-indicator up">↗</div>
                </td>
            </tr>
            <tr>
                <td>Conversion Rate</td>
                <td>3.2%</td>
                <td>3.5%</td>
                <td>
                    <span class="change negative">-8.6%</span>
                </td>
                <td>
                    <div class="trend-indicator down">↘</div>
                </td>
            </tr>
            <tr>
                <td>Average Order</td>
                <td>$124.50</td>
                <td>$118.75</td>
                <td>
                    <span class="change positive">+4.8%</span>
                </td>
                <td>
                    <div class="trend-indicator up">↗</div>
                </td>
            </tr>
            <tr>
                <td>Bounce Rate</td>
                <td>42.3%</td>
                <td>45.1%</td>
                <td>
                    <span class="change positive">-6.2%</span>
                </td>
                <td>
                    <div class="trend-indicator up">↗</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.clean-metrics-table {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.clean-metrics-table table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.clean-metrics-table th {
    background: #f8fafc;
    color: #374151;
    padding: 1rem;
    text-align: left;
    font-weight: 500;
    font-size: 0.875rem;
    border-bottom: 1px solid #e5e7eb;
}

.clean-metrics-table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 0.875rem;
}

.clean-metrics-table tr:last-child td {
    border-bottom: none;
}

.clean-metrics-table tr:hover {
    background: #f9fafb;
}

.change {
    font-weight: 600;
    font-size: 0.8rem;
}

.change.positive {
    color: #059669;
}

.change.negative {
    color: #dc2626;
}

.trend-indicator {
    font-size: 1rem;
    font-weight: 700;
}

.trend-indicator.up {
    color: #059669;
}

.trend-indicator.down {
    color: #dc2626;
}`,
    js: `// No JavaScript required - clean metrics display`
},
// ====================================================================
// TEMPLATE 12: ANALYTICS DASHBOARD TABLE
// ====================================================================
table12: {
    html: `<div class="analytics-dashboard-table">
    <div class="dashboard-header">
        <h3>Website Analytics Dashboard</h3>
        <div class="date-range">
            <span>Last 30 Days</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Channel</th>
                <th>Visitors</th>
                <th>Sessions</th>
                <th>Bounce Rate</th>
                <th>Conversion</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="channel-info">
                        <div class="channel-icon organic">🔍</div>
                        <span>Organic Search</span>
                    </div>
                </td>
                <td>12,489</td>
                <td>15,672</td>
                <td>
                    <div class="metric-with-bar">
                        <span>42.3%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 42.3%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-rate">
                        <span>3.8%</span>
                        <div class="trend-badge positive">+12%</div>
                    </div>
                </td>
                <td>
                    <div class="sparkline">📈</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="channel-info">
                        <div class="channel-icon social">💬</div>
                        <span>Social Media</span>
                    </div>
                </td>
                <td>8,456</td>
                <td>9,123</td>
                <td>
                    <div class="metric-with-bar">
                        <span>51.2%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 51.2%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-rate">
                        <span>2.1%</span>
                        <div class="trend-badge negative">-5%</div>
                    </div>
                </td>
                <td>
                    <div class="sparkline">📉</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="channel-info">
                        <div class="channel-icon direct">🔗</div>
                        <span>Direct Traffic</span>
                    </div>
                </td>
                <td>6,789</td>
                <td>7,234</td>
                <td>
                    <div class="metric-with-bar">
                        <span>38.7%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 38.7%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-rate">
                        <span>4.5%</span>
                        <div class="trend-badge positive">+8%</div>
                    </div>
                </td>
                <td>
                    <div class="sparkline">📈</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.analytics-dashboard-table {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.dashboard-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
    font-size: 1.1rem;
}

.date-range {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #374151;
    cursor: pointer;
}

.analytics-dashboard-table table {
    width: 100%;
    border-collapse: collapse;
}

.analytics-dashboard-table th {
    background: #1e293b;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
}

.analytics-dashboard-table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
    font-size: 0.875rem;
}

.analytics-dashboard-table tr:hover {
    background: #f9fafb;
}

.channel-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.channel-icon {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

.channel-icon.organic {
    background: #dbeafe;
    color: #1d4ed8;
}

.channel-icon.social {
    background: #fce7f3;
    color: #db2777;
}

.channel-icon.direct {
    background: #dcfce7;
    color: #16a34a;
}

.metric-with-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 100px;
}

.metric-bar {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
}

.bar-fill {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.conversion-rate {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.trend-badge {
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
}

.trend-badge.positive {
    background: #d1fae5;
    color: #065f46;
}

.trend-badge.negative {
    background: #fee2e2;
    color: #dc2626;
}

.sparkline {
    font-size: 1.2rem;
}`,
    js: `// Analytics dashboard interactions
document.querySelectorAll('.date-range').forEach(range => {
    range.addEventListener('click', () => {
        alert('Date range selector would open here');
    });
});`
},

// ====================================================================
// TEMPLATE 13: PERFORMANCE METRICS TABLE
// ====================================================================
table13: {
    html: `<div class="performance-metrics-table">
    <div class="metrics-header">
        <h3>Performance Metrics</h3>
        <div class="time-filters">
            <button class="time-filter active">7D</button>
            <button class="time-filter">30D</button>
            <button class="time-filter">90D</button>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Page</th>
                <th>Pageviews</th>
                <th>Avg. Time</th>
                <th>Exit Rate</th>
                <th>Goal Completions</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>/home</td>
                <td>24,589</td>
                <td>2m 34s</td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 32%"></div>
                        </div>
                        <span>32%</span>
                    </div>
                </td>
                <td>1,248</td>
                <td>
                    <div class="performance-score excellent">92</div>
                </td>
            </tr>
            <tr>
                <td>/products</td>
                <td>18,456</td>
                <td>3m 12s</td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 45%"></div>
                        </div>
                        <span>45%</span>
                    </div>
                </td>
                <td>856</td>
                <td>
                    <div class="performance-score good">78</div>
                </td>
            </tr>
            <tr>
                <td>/about</td>
                <td>8,923</td>
                <td>1m 48s</td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 61%"></div>
                        </div>
                        <span>61%</span>
                    </div>
                </td>
                <td>234</td>
                <td>
                    <div class="performance-score average">65</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.performance-metrics-table {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.metrics-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.metrics-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
    font-size: 1.1rem;
}

.time-filters {
    display: flex;
    gap: 0.5rem;
}

.time-filter {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    background: white;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #374151;
    cursor: pointer;
    transition: all 0.3s;
}

.time-filter.active,
.time-filter:hover {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.performance-metrics-table table {
    width: 100%;
    border-collapse: collapse;
}

.performance-metrics-table th {
    background: #1e293b;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
}

.performance-metrics-table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
    font-size: 0.875rem;
}

.performance-metrics-table tr:hover {
    background: #f9fafb;
}

.progress-metric {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 100px;
}

.progress-track {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
}

.progress-value {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #ef4444, #dc2626);
}

.performance-score {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
    color: white;
}

.performance-score.excellent {
    background: linear-gradient(135deg, #10b981, #059669);
}

.performance-score.good {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.performance-score.average {
    background: linear-gradient(135deg, #ef4444, #dc2626);
}`,
    js: `// Time filter functionality
document.querySelectorAll('.time-filter').forEach(filter => {
    filter.addEventListener('click', function() {
        // Remove active class from all filters
        document.querySelectorAll('.time-filter').forEach(f => f.classList.remove('active'));
        // Add active class to clicked filter
        this.classList.add('active');
        
        // In real implementation, you would filter the data here
        const period = this.textContent;
        alert('Showing data for: ' + period);
    });
});`
},

// ====================================================================
// TEMPLATE 14: REAL-TIME ANALYTICS TABLE
// ====================================================================
table14: {
    html: `<div class="realtime-analytics-table">
    <div class="realtime-header">
        <h3>Real-Time Analytics</h3>
        <div class="live-indicator">
            <div class="pulse-dot"></div>
            <span>LIVE</span>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Country</th>
                <th>Active Users</th>
                <th>Pageviews/min</th>
                <th>Avg. Session</th>
                <th>Bounce Rate</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇺🇸</span>
                        <span>United States</span>
                    </div>
                </td>
                <td>
                    <div class="active-users">
                        <span>1,248</span>
                        <div class="user-trend up">↗ 12%</div>
                    </div>
                </td>
                <td>45</td>
                <td>3m 24s</td>
                <td>38.2%</td>
                <td>
                    <div class="traffic-status high">High</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇬🇧</span>
                        <span>United Kingdom</span>
                    </div>
                </td>
                <td>
                    <div class="active-users">
                        <span>856</span>
                        <div class="user-trend up">↗ 8%</div>
                    </div>
                </td>
                <td>32</td>
                <td>2m 56s</td>
                <td>42.7%</td>
                <td>
                    <div class="traffic-status medium">Medium</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇩🇪</span>
                        <span>Germany</span>
                    </div>
                </td>
                <td>
                    <div class="active-users">
                        <span>623</span>
                        <div class="user-trend down">↘ 5%</div>
                    </div>
                </td>
                <td>28</td>
                <td>3m 12s</td>
                <td>45.3%</td>
                <td>
                    <div class="traffic-status medium">Medium</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇫🇷</span>
                        <span>France</span>
                    </div>
                </td>
                <td>
                    <div class="active-users">
                        <span>412</span>
                        <div class="user-trend stable">→ 0%</div>
                    </div>
                </td>
                <td>18</td>
                <td>2m 48s</td>
                <td>51.8%</td>
                <td>
                    <div class="traffic-status low">Low</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.realtime-analytics-table {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.realtime-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.realtime-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
    font-size: 1.1rem;
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #dc2626;
    color: white;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

.realtime-analytics-table table {
    width: 100%;
    border-collapse: collapse;
}

.realtime-analytics-table th {
    background: #1e293b;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
}

.realtime-analytics-table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
    font-size: 0.875rem;
}

.realtime-analytics-table tr:hover {
    background: #f9fafb;
}

.country-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.flag {
    font-size: 1.2rem;
}

.active-users {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.user-trend {
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
}

.user-trend.up {
    background: #d1fae5;
    color: #065f46;
}

.user-trend.down {
    background: #fee2e2;
    color: #dc2626;
}

.user-trend.stable {
    background: #f3f4f6;
    color: #6b7280;
}

.traffic-status {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.traffic-status.high {
    background: #fee2e2;
    color: #dc2626;
}

.traffic-status.medium {
    background: #fef3c7;
    color: #d97706;
}

.traffic-status.low {
    background: #d1fae5;
    color: #065f46;
}`,
    js: `// Real-time data simulation (in a real app, this would connect to a live data source)
function simulateRealTimeUpdates() {
    const userCounts = document.querySelectorAll('.active-users span:first-child');
    userCounts.forEach(element => {
        const current = parseInt(element.textContent.replace(',', ''));
        const change = Math.floor(Math.random() * 20) - 10; // Random change between -10 and +10
        const newCount = Math.max(100, current + change); // Ensure minimum 100 users
        element.textContent = newCount.toLocaleString();
    });
}

// Update every 10 seconds
setInterval(simulateRealTimeUpdates, 10000);`
},

// ====================================================================
// TEMPLATE 15: CONVERSION FUNNEL TABLE
// ====================================================================
table15: {
    html: `<div class="conversion-funnel-table">
    <div class="funnel-header">
        <h3>Conversion Funnel Analysis</h3>
        <div class="funnel-period">Last 7 Days</div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Stage</th>
                <th>Visitors</th>
                <th>Drop-off</th>
                <th>Conversion Rate</th>
                <th>Revenue</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="funnel-stage">
                        <div class="stage-number">1</div>
                        <div class="stage-info">
                            <div class="stage-name">Landing Page</div>
                            <div class="stage-desc">Initial visit</div>
                        </div>
                    </div>
                </td>
                <td>10,000</td>
                <td>-</td>
                <td>100%</td>
                <td>-</td>
                <td>
                    <div class="funnel-trend neutral">→</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="funnel-stage">
                        <div class="stage-number">2</div>
                        <div class="stage-info">
                            <div class="stage-name">Product View</div>
                            <div class="stage-desc">Viewed product</div>
                        </div>
                    </div>
                </td>
                <td>6,500</td>
                <td>
                    <div class="drop-off negative">-35%</div>
                </td>
                <td>65%</td>
                <td>-</td>
                <td>
                    <div class="funnel-trend down">↘</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="funnel-stage">
                        <div class="stage-number">3</div>
                        <div class="stage-info">
                            <div class="stage-name">Add to Cart</div>
                            <div class="stage-desc">Added item to cart</div>
                        </div>
                    </div>
                </td>
                <td>2,800</td>
                <td>
                    <div class="drop-off negative">-57%</div>
                </td>
                <td>28%</td>
                <td>-</td>
                <td>
                    <div class="funnel-trend down">↘</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="funnel-stage">
                        <div class="stage-number">4</div>
                        <div class="stage-info">
                            <div class="stage-name">Checkout</div>
                            <div class="stage-desc">Started checkout</div>
                        </div>
                    </div>
                </td>
                <td>1,200</td>
                <td>
                    <div class="drop-off negative">-57%</div>
                </td>
                <td>12%</td>
                <td>-</td>
                <td>
                    <div class="funnel-trend down">↘</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="funnel-stage">
                        <div class="stage-number">5</div>
                        <div class="stage-info">
                            <div class="stage-name">Purchase</div>
                            <div class="stage-desc">Completed order</div>
                        </div>
                    </div>
                </td>
                <td>800</td>
                <td>
                    <div class="drop-off negative">-33%</div>
                </td>
                <td>8%</td>
                <td>$24,000</td>
                <td>
                    <div class="funnel-trend up">↗</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.conversion-funnel-table {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.funnel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.funnel-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
    font-size: 1.1rem;
}

.funnel-period {
    padding: 0.5rem 1rem;
    background: #3b82f6;
    color: white;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
}

.conversion-funnel-table table {
    width: 100%;
    border-collapse: collapse;
}

.conversion-funnel-table th {
    background: #1e293b;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
}

.conversion-funnel-table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
    font-size: 0.875rem;
}

.conversion-funnel-table tr:hover {
    background: #f9fafb;
}

.funnel-stage {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.stage-number {
    width: 28px;
    height: 28px;
    background: #3b82f6;
    color: white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.875rem;
    flex-shrink: 0;
}

.stage-info .stage-name {
    font-weight: 600;
    color: #1f2937;
    font-size: 0.875rem;
}

.stage-info .stage-desc {
    font-size: 0.75rem;
    color: #6b7280;
    margin-top: 2px;
}

.drop-off {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
}

.drop-off.negative {
    background: #fee2e2;
    color: #dc2626;
}

.funnel-trend {
    font-size: 1.2rem;
    font-weight: 700;
}

.funnel-trend.up {
    color: #059669;
}

.funnel-trend.down {
    color: #dc2626;
}

.funnel-trend.neutral {
    color: #6b7280;
}`,
    js: `// Funnel analysis interactions
// Add any specific funnel analysis functionality here`
},

// ====================================================================
// TEMPLATE 16: KPI DASHBOARD TABLE
// ====================================================================
table16: {
    html: `<div class="kpi-dashboard-table">
    <div class="kpi-header">
        <h3>KPI Performance Dashboard</h3>
        <div class="kpi-filters">
            <select class="kpi-filter">
                <option>All Channels</option>
                <option>Organic</option>
                <option>Paid</option>
                <option>Social</option>
            </select>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>KPI</th>
                <th>Current</th>
                <th>Target</th>
                <th>Progress</th>
                <th>Variance</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monthly Revenue</td>
                <td>$124,580</td>
                <td>$120,000</td>
                <td>
                    <div class="kpi-progress">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 104%"></div>
                        </div>
                        <span>104%</span>
                    </div>
                </td>
                <td>
                    <div class="variance positive">+$4,580</div>
                </td>
                <td>
                    <div class="kpi-status achieved">Achieved</div>
                </td>
            </tr>
            <tr>
                <td>Customer Acquisition</td>
                <td>1,248</td>
                <td>1,500</td>
                <td>
                    <div class="kpi-progress">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 83%"></div>
                        </div>
                        <span>83%</span>
                    </div>
                </td>
                <td>
                    <div class="variance negative">-252</div>
                </td>
                <td>
                    <div class="kpi-status at-risk">At Risk</div>
                </td>
            </tr>
            <tr>
                <td>Conversion Rate</td>
                <td>3.8%</td>
                <td>4.0%</td>
                <td>
                    <div class="kpi-progress">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 95%"></div>
                        </div>
                        <span>95%</span>
                    </div>
                </td>
                <td>
                    <div class="variance negative">-0.2%</div>
                </td>
                <td>
                    <div class="kpi-status on-track">On Track</div>
                </td>
            </tr>
            <tr>
                <td>Customer Satisfaction</td>
                <td>4.7/5</td>
                <td>4.5/5</td>
                <td>
                    <div class="kpi-progress">
                        <div class="progress-track">
                            <div class="progress-value" style="width: 104%"></div>
                        </div>
                        <span>104%</span>
                    </div>
                </td>
                <td>
                    <div class="variance positive">+0.2</div>
                </td>
                <td>
                    <div class="kpi-status exceeded">Exceeded</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.kpi-dashboard-table {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.kpi-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.kpi-header h3 {
    margin: 0;
    color: #1f2937;
    font-weight: 600;
    font-size: 1.1rem;
}

.kpi-filter {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    color: #374151;
    font-size: 0.875rem;
}

.kpi-dashboard-table table {
    width: 100%;
    border-collapse: collapse;
}

.kpi-dashboard-table th {
    background: #1e293b;
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
}

.kpi-dashboard-table td {
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
    font-size: 0.875rem;
}

.kpi-dashboard-table tr:hover {
    background: #f9fafb;
}

.kpi-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 100px;
}

.progress-track {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    min-width: 60px;
}

.progress-value {
    height: 100%;
    border-radius: 4px;
}

/* Different colors for different progress levels */
.kpi-dashboard-table tr:nth-child(1) .progress-value { background: linear-gradient(90deg, #10b981, #059669); }
.kpi-dashboard-table tr:nth-child(2) .progress-value { background: linear-gradient(90deg, #f59e0b, #d97706); }
.kpi-dashboard-table tr:nth-child(3) .progress-value { background: linear-gradient(90deg, #f59e0b, #d97706); }
.kpi-dashboard-table tr:nth-child(4) .progress-value { background: linear-gradient(90deg, #10b981, #059669); }

.variance {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
}

.variance.positive {
    background: #d1fae5;
    color: #065f46;
}

.variance.negative {
    background: #fee2e2;
    color: #dc2626;
}

.kpi-status {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.kpi-status.achieved {
    background: #d1fae5;
    color: #065f46;
}

.kpi-status.exceeded {
    background: #a7f3d0;
    color: #047857;
}

.kpi-status.on-track {
    background: #fef3c7;
    color: #d97706;
}

.kpi-status.at-risk {
    background: #fecaca;
    color: #dc2626;
}`,
    js: `// KPI filter functionality
document.querySelectorAll('.kpi-filter').forEach(filter => {
    filter.addEventListener('change', function() {
        const selectedChannel = this.value;
        alert('Filtering KPIs for: ' + selectedChannel);
        // In real implementation, you would filter the KPI data here
    });
});`
},
// ====================================================================
// TEMPLATE 17: DARK MODERN DASHBOARD
// ====================================================================
table17: {
    html: `<div class="dark-modern-dashboard">
    <div class="dark-header">
        <h3>Performance Dashboard</h3>
        <div class="dark-actions">
            <button class="dark-btn refresh-btn">
                <i class="fas fa-sync-alt"></i>
            </button>
            <button class="dark-btn export-btn">
                <i class="fas fa-download"></i>
            </button>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Growth</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="dark-metric">
                        <div class="metric-icon revenue">💰</div>
                        <span>Monthly Revenue</span>
                    </div>
                </td>
                <td>$124,580</td>
                <td>$112,450</td>
                <td>
                    <div class="growth positive">+10.8%</div>
                </td>
                <td>
                    <div class="trend-chart">📈</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="dark-metric">
                        <div class="metric-icon users">👥</div>
                        <span>Active Users</span>
                    </div>
                </td>
                <td>12,489</td>
                <td>11,256</td>
                <td>
                    <div class="growth positive">+11.0%</div>
                </td>
                <td>
                    <div class="trend-chart">📈</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="dark-metric">
                        <div class="metric-icon conversion">🎯</div>
                        <span>Conversion Rate</span>
                    </div>
                </td>
                <td>3.8%</td>
                <td>3.5%</td>
                <td>
                    <div class="growth positive">+8.6%</div>
                </td>
                <td>
                    <div class="trend-chart">📈</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="dark-metric">
                        <div class="metric-icon bounce">↩️</div>
                        <span>Bounce Rate</span>
                    </div>
                </td>
                <td>42.3%</td>
                <td>45.1%</td>
                <td>
                    <div class="growth positive">-6.2%</div>
                </td>
                <td>
                    <div class="trend-chart">📉</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.dark-modern-dashboard {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #334155;
    color: #f1f5f9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dark-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #0f172a;
    border-bottom: 1px solid #334155;
}

.dark-header h3 {
    margin: 0;
    color: #f8fafc;
    font-weight: 600;
    font-size: 1.1rem;
}

.dark-actions {
    display: flex;
    gap: 0.5rem;
}

.dark-btn {
    width: 36px;
    height: 36px;
    border: 1px solid #475569;
    background: #334155;
    color: #cbd5e1;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.dark-btn:hover {
    background: #475569;
    border-color: #64748b;
    color: #f1f5f9;
}

.dark-modern-dashboard table {
    width: 100%;
    border-collapse: collapse;
}

.dark-modern-dashboard th {
    background: #334155;
    color: #e2e8f0;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    border-bottom: 1px solid #475569;
}

.dark-modern-dashboard td {
    padding: 1rem;
    border-bottom: 1px solid #334155;
    color: #cbd5e1;
    font-size: 0.875rem;
}

.dark-modern-dashboard tr:hover {
    background: #334155;
}

.dark-metric {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.metric-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
}

.metric-icon.revenue {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.metric-icon.users {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.metric-icon.conversion {
    background: linear-gradient(135deg, #10b981, #059669);
}

.metric-icon.bounce {
    background: linear-gradient(135deg, #6b7280, #4b5563);
}

.growth {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
}

.growth.positive {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.trend-chart {
    font-size: 1.2rem;
}`,
    js: `// Dark dashboard interactions
document.querySelectorAll('.refresh-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.animation = 'spin 1s linear';
        setTimeout(() => {
            this.style.animation = '';
            alert('Data refreshed!');
        }, 1000);
    });
});

document.querySelectorAll('.export-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Exporting dashboard data...');
    });
});`
},

// ====================================================================
// TEMPLATE 18: DARK USER MANAGEMENT
// ====================================================================
table18: {
    html: `<div class="dark-user-management">
    <div class="dark-user-header">
        <h3>User Management</h3>
        <div class="dark-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search users..." class="dark-input">
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="dark-user">
                        <div class="dark-avatar">JD</div>
                        <div class="dark-user-info">
                            <div class="dark-name">John Doe</div>
                            <div class="dark-email">john@company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="dark-role admin">Admin</span>
                </td>
                <td>
                    <div class="dark-status online">
                        <div class="status-dot"></div>
                        Online
                    </div>
                </td>
                <td>2 hours ago</td>
                <td>
                    <div class="dark-actions">
                        <button class="dark-action-btn edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="dark-action-btn delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="dark-user">
                        <div class="dark-avatar">JS</div>
                        <div class="dark-user-info">
                            <div class="dark-name">Jane Smith</div>
                            <div class="dark-email">jane@company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="dark-role editor">Editor</span>
                </td>
                <td>
                    <div class="dark-status away">
                        <div class="status-dot"></div>
                        Away
                    </div>
                </td>
                <td>1 day ago</td>
                <td>
                    <div class="dark-actions">
                        <button class="dark-action-btn edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="dark-action-btn delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="dark-user">
                        <div class="dark-avatar">RJ</div>
                        <div class="dark-user-info">
                            <div class="dark-name">Robert Johnson</div>
                            <div class="dark-email">robert@company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="dark-role viewer">Viewer</span>
                </td>
                <td>
                    <div class="dark-status offline">
                        <div class="status-dot"></div>
                        Offline
                    </div>
                </td>
                <td>3 days ago</td>
                <td>
                    <div class="dark-actions">
                        <button class="dark-action-btn edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="dark-action-btn delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.dark-user-management {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #334155;
    color: #f1f5f9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dark-user-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #0f172a;
    border-bottom: 1px solid #334155;
}

.dark-user-header h3 {
    margin: 0;
    color: #f8fafc;
    font-weight: 600;
    font-size: 1.1rem;
}

.dark-search {
    position: relative;
    width: 250px;
}

.dark-search i {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
}

.dark-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    background: #334155;
    border: 1px solid #475569;
    border-radius: 8px;
    color: #f1f5f9;
    font-size: 0.875rem;
    transition: all 0.3s;
}

.dark-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.dark-input::placeholder {
    color: #64748b;
}

.dark-user-management table {
    width: 100%;
    border-collapse: collapse;
}

.dark-user-management th {
    background: #334155;
    color: #e2e8f0;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    border-bottom: 1px solid #475569;
}

.dark-user-management td {
    padding: 1rem;
    border-bottom: 1px solid #334155;
    color: #cbd5e1;
    font-size: 0.875rem;
}

.dark-user-management tr:hover {
    background: #334155;
}

.dark-user {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.dark-avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.dark-user-info .dark-name {
    font-weight: 600;
    color: #f1f5f9;
    font-size: 0.875rem;
}

.dark-user-info .dark-email {
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 2px;
}

.dark-role {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
}

.dark-role.admin {
    background: rgba(239, 68, 68, 0.2);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.dark-role.editor {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.dark-role.viewer {
    background: rgba(16, 185, 129, 0.2);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.dark-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.dark-status.online .status-dot {
    background: #10b981;
    box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
}

.dark-status.away .status-dot {
    background: #f59e0b;
    box-shadow: 0 0 6px rgba(245, 158, 11, 0.5);
}

.dark-status.offline .status-dot {
    background: #6b7280;
}

.dark-actions {
    display: flex;
    gap: 0.5rem;
}

.dark-action-btn {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    transition: all 0.3s;
}

.dark-action-btn.edit {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
}

.dark-action-btn.edit:hover {
    background: rgba(59, 130, 246, 0.3);
}

.dark-action-btn.delete {
    background: rgba(239, 68, 68, 0.2);
    color: #f87171;
}

.dark-action-btn.delete:hover {
    background: rgba(239, 68, 68, 0.3);
}`,
    js: `// Dark user management functionality
document.querySelectorAll('.dark-input').forEach(input => {
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = e.target.closest('.dark-user-management').querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});

document.querySelectorAll('.dark-action-btn.edit').forEach(btn => {
    btn.addEventListener('click', function() {
        const userName = this.closest('tr').querySelector('.dark-name').textContent;
        alert('Editing user: ' + userName);
    });
});

document.querySelectorAll('.dark-action-btn.delete').forEach(btn => {
    btn.addEventListener('click', function() {
        const userName = this.closest('tr').querySelector('.dark-name').textContent;
        if (confirm('Are you sure you want to delete ' + userName + '?')) {
            alert('User ' + userName + ' deleted!');
        }
    });
});`
},

// ====================================================================
// TEMPLATE 19: DARK FINANCE TABLE
// ====================================================================
table19: {
    html: `<div class="dark-finance-table">
    <div class="dark-finance-header">
        <h3>Financial Overview</h3>
        <div class="dark-period">
            <span>Q4 2024</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Budget</th>
                <th>Spent</th>
                <th>Remaining</th>
                <th>Utilization</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Marketing</td>
                <td>$50,000</td>
                <td>$42,500</td>
                <td>$7,500</td>
                <td>
                    <div class="dark-progress">
                        <div class="dark-progress-track">
                            <div class="dark-progress-fill" style="width: 85%"></div>
                        </div>
                        <span>85%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-budget-status on-track">On Track</div>
                </td>
            </tr>
            <tr>
                <td>Engineering</td>
                <td>$120,000</td>
                <td>$95,000</td>
                <td>$25,000</td>
                <td>
                    <div class="dark-progress">
                        <div class="dark-progress-track">
                            <div class="dark-progress-fill" style="width: 79%"></div>
                        </div>
                        <span>79%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-budget-status on-track">On Track</div>
                </td>
            </tr>
            <tr>
                <td>Sales</td>
                <td>$75,000</td>
                <td>$68,000</td>
                <td>$7,000</td>
                <td>
                    <div class="dark-progress">
                        <div class="dark-progress-track">
                            <div class="dark-progress-fill" style="width: 91%"></div>
                        </div>
                        <span>91%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-budget-status warning">Warning</div>
                </td>
            </tr>
            <tr>
                <td>Operations</td>
                <td>$60,000</td>
                <td>$72,000</td>
                <td>-$12,000</td>
                <td>
                    <div class="dark-progress">
                        <div class="dark-progress-track">
                            <div class="dark-progress-fill over-budget" style="width: 120%"></div>
                        </div>
                        <span>120%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-budget-status over-budget">Over Budget</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.dark-finance-table {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #334155;
    color: #f1f5f9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dark-finance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #0f172a;
    border-bottom: 1px solid #334155;
}

.dark-finance-header h3 {
    margin: 0;
    color: #f8fafc;
    font-weight: 600;
    font-size: 1.1rem;
}

.dark-period {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #334155;
    border: 1px solid #475569;
    border-radius: 8px;
    font-size: 0.875rem;
    color: #cbd5e1;
    cursor: pointer;
    transition: all 0.3s;
}

.dark-period:hover {
    background: #475569;
    border-color: #64748b;
}

.dark-finance-table table {
    width: 100%;
    border-collapse: collapse;
}

.dark-finance-table th {
    background: #334155;
    color: #e2e8f0;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    border-bottom: 1px solid #475569;
}

.dark-finance-table td {
    padding: 1rem;
    border-bottom: 1px solid #334155;
    color: #cbd5e1;
    font-size: 0.875rem;
}

.dark-finance-table tr:hover {
    background: #334155;
}

.dark-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 100px;
}

.dark-progress-track {
    flex: 1;
    height: 6px;
    background: #475569;
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
}

.dark-progress-fill {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #10b981, #059669);
    transition: width 0.3s ease;
}

.dark-progress-fill.over-budget {
    background: linear-gradient(90deg, #ef4444, #dc2626);
}

.dark-budget-status {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.dark-budget-status.on-track {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.dark-budget-status.warning {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.dark-budget-status.over-budget {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Negative amount styling */
.dark-finance-table tr:nth-child(4) td:nth-child(4) {
    color: #ef4444;
    font-weight: 600;
}`,
    js: `// Dark finance table interactions
document.querySelectorAll('.dark-period').forEach(period => {
    period.addEventListener('click', function() {
        alert('Quarter selection dropdown would open here');
    });
});

// Add animation for progress bars
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.dark-progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});`
},

// ====================================================================
// TEMPLATE 20: DARK SERVER MONITORING
// ====================================================================
table20: {
    html: `<div class="dark-server-monitoring">
    <div class="dark-server-header">
        <h3>Server Monitoring</h3>
        <div class="dark-server-stats">
            <div class="dark-stat">
                <div class="stat-value">12</div>
                <div class="stat-label">Online</div>
            </div>
            <div class="dark-stat">
                <div class="stat-value">2</div>
                <div class="stat-label">Warning</div>
            </div>
            <div class="dark-stat">
                <div class="stat-value">1</div>
                <div class="stat-label">Critical</div>
            </div>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Server</th>
                <th>Status</th>
                <th>CPU</th>
                <th>Memory</th>
                <th>Disk</th>
                <th>Uptime</th>
                <th>Last Check</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="dark-server">
                        <div class="server-icon">🖥️</div>
                        <div class="server-info">
                            <div class="server-name">Web Server 01</div>
                            <div class="server-ip">192.168.1.101</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="dark-server-status online">
                        <div class="status-indicator"></div>
                        Online
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill" style="width: 45%"></div>
                        </div>
                        <span>45%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill" style="width: 62%"></div>
                        </div>
                        <span>62%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill" style="width: 28%"></div>
                        </div>
                        <span>28%</span>
                    </div>
                </td>
                <td>45 days</td>
                <td>2 min ago</td>
            </tr>
            <tr>
                <td>
                    <div class="dark-server">
                        <div class="server-icon">💾</div>
                        <div class="server-info">
                            <div class="server-name">Database 01</div>
                            <div class="server-ip">192.168.1.102</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="dark-server-status warning">
                        <div class="status-indicator"></div>
                        Warning
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill warning" style="width: 78%"></div>
                        </div>
                        <span>78%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill" style="width: 85%"></div>
                        </div>
                        <span>85%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill" style="width: 45%"></div>
                        </div>
                        <span>45%</span>
                    </div>
                </td>
                <td>32 days</td>
                <td>1 min ago</td>
            </tr>
            <tr>
                <td>
                    <div class="dark-server">
                        <div class="server-icon">🔧</div>
                        <div class="server-info">
                            <div class="server-name">Backup Server</div>
                            <div class="server-ip">192.168.1.103</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="dark-server-status critical">
                        <div class="status-indicator"></div>
                        Critical
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill critical" style="width: 92%"></div>
                        </div>
                        <span>92%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill critical" style="width: 95%"></div>
                        </div>
                        <span>95%</span>
                    </div>
                </td>
                <td>
                    <div class="dark-resource">
                        <div class="resource-bar">
                            <div class="resource-fill" style="width: 88%"></div>
                        </div>
                        <span>88%</span>
                    </div>
                </td>
                <td>15 days</td>
                <td>30 sec ago</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.dark-server-monitoring {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #334155;
    color: #f1f5f9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dark-server-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #0f172a;
    border-bottom: 1px solid #334155;
}

.dark-server-header h3 {
    margin: 0;
    color: #f8fafc;
    font-weight: 600;
    font-size: 1.1rem;
}

.dark-server-stats {
    display: flex;
    gap: 2rem;
}

.dark-stat {
    text-align: center;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f1f5f9;
}

.stat-label {
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 0.25rem;
}

.dark-server-stats .dark-stat:nth-child(1) .stat-value { color: #10b981; }
.dark-server-stats .dark-stat:nth-child(2) .stat-value { color: #f59e0b; }
.dark-server-stats .dark-stat:nth-child(3) .stat-value { color: #ef4444; }

.dark-server-monitoring table {
    width: 100%;
    border-collapse: collapse;
}

.dark-server-monitoring th {
    background: #334155;
    color: #e2e8f0;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    border-bottom: 1px solid #475569;
}

.dark-server-monitoring td {
    padding: 1rem;
    border-bottom: 1px solid #334155;
    color: #cbd5e1;
    font-size: 0.875rem;
}

.dark-server-monitoring tr:hover {
    background: #334155;
}

.dark-server {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.server-icon {
    font-size: 1.2rem;
    width: 32px;
    text-align: center;
}

.server-info .server-name {
    font-weight: 600;
    color: #f1f5f9;
    font-size: 0.875rem;
}

.server-info .server-ip {
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 2px;
}

.dark-server-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.dark-server-status.online .status-indicator {
    background: #10b981;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
    animation: pulse-green 2s infinite;
}

.dark-server-status.warning .status-indicator {
    background: #f59e0b;
    box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);
    animation: pulse-orange 2s infinite;
}

.dark-server-status.critical .status-indicator {
    background: #ef4444;
    box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);
    animation: pulse-red 1s infinite;
}

@keyframes pulse-green {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes pulse-orange {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes pulse-red {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.dark-resource {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 80px;
}

.resource-bar {
    flex: 1;
    height: 6px;
    background: #475569;
    border-radius: 3px;
    overflow: hidden;
    min-width: 50px;
}

.resource-fill {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #10b981, #059669);
    transition: width 0.3s ease;
}

.resource-fill.warning {
    background: linear-gradient(90deg, #f59e0b, #d97706);
}

.resource-fill.critical {
    background: linear-gradient(90deg, #ef4444, #dc2626);
}`,
    js: `// Server monitoring simulation
function updateServerStats() {
    const resources = document.querySelectorAll('.resource-fill');
    resources.forEach(resource => {
        const currentWidth = parseInt(resource.style.width);
        const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
        let newWidth = Math.max(10, Math.min(95, currentWidth + change));
        resource.style.width = newWidth + '%';
        resource.parentElement.nextElementSibling.textContent = newWidth + '%';
        
        // Update status based on resource usage
        if (newWidth > 90) {
            resource.classList.add('critical');
            resource.classList.remove('warning');
        } else if (newWidth > 75) {
            resource.classList.add('warning');
            resource.classList.remove('critical');
        } else {
            resource.classList.remove('warning', 'critical');
        }
    });
}

// Update every 5 seconds
setInterval(updateServerStats, 5000);`
},
// ====================================================================
// COLORFUL TEMPLATE 22: RAINBOW TASKS
// ====================================================================
colorful22: {
    html: `<div class="rainbow-table-container">
    <div class="rainbow-header">
        <h3>🌈 Task Rainbow Dashboard</h3>
        <div class="rainbow-stats">
            <span class="stat completed">Completed: 8</span>
            <span class="stat pending">Pending: 3</span>
            <span class="stat overdue">Overdue: 1</span>
        </div>
    </div>
    <table class="rainbow-table">
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="task-high">
                <td>
                    <div class="task-info">
                        <div class="task-icon">🎨</div>
                        <div class="task-details">
                            <div class="task-name">Design Homepage</div>
                            <div class="task-desc">Create new homepage layout</div>
                        </div>
                    </div>
                </td>
                <td><span class="category design">Design</span></td>
                <td><span class="priority high">🔥 High</span></td>
                <td>Today</td>
                <td><span class="status in-progress">In Progress</span></td>
            </tr>
            <tr class="task-medium">
                <td>
                    <div class="task-info">
                        <div class="task-icon">📊</div>
                        <div class="task-details">
                            <div class="task-name">Analytics Report</div>
                            <div class="task-desc">Monthly performance analysis</div>
                        </div>
                    </div>
                </td>
                <td><span class="category analytics">Analytics</span></td>
                <td><span class="priority medium">⚡ Medium</span></td>
                <td>Tomorrow</td>
                <td><span class="status pending">Pending</span></td>
            </tr>
            <tr class="task-low">
                <td>
                    <div class="task-info">
                        <div class="task-icon">📝</div>
                        <div class="task-details">
                            <div class="task-name">Documentation</div>
                            <div class="task-desc">Update API documentation</div>
                        </div>
                    </div>
                </td>
                <td><span class="category docs">Documentation</span></td>
                <td><span class="priority low">💤 Low</span></td>
                <td>Next Week</td>
                <td><span class="status completed">Completed</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.rainbow-table-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.rainbow-header {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.rainbow-header h3 {
    margin: 0 0 1rem 0;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.rainbow-stats {
    display: flex;
    gap: 1rem;
}

.stat {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.stat.completed { background: rgba(34, 197, 94, 0.8); }
.stat.pending { background: rgba(249, 115, 22, 0.8); }
.stat.overdue { background: rgba(239, 68, 68, 0.8); }

.rainbow-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.95);
}

.rainbow-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 700;
    color: #4b5563;
    border-bottom: 2px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.rainbow-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.task-high { background: linear-gradient(90deg, rgba(254, 202, 202, 0.3), transparent); }
.task-medium { background: linear-gradient(90deg, rgba(253, 230, 138, 0.3), transparent); }
.task-low { background: linear-gradient(90deg, rgba(187, 247, 208, 0.3), transparent); }

.rainbow-table tr:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: scale(1.02);
    transition: all 0.3s ease;
}

.task-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.task-icon {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 12px;
    color: white;
}

.task-details .task-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.task-details .task-desc {
    font-size: 0.875rem;
    color: #9ca3af;
}

.category, .priority, .status {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
}

.category.design { background: #c7d2fe; color: #3730a3; }
.category.analytics { background: #bae6fd; color: #0369a1; }
.category.docs { background: #bbf7d0; color: #166534; }

.priority.high { background: #fecaca; color: #dc2626; }
.priority.medium { background: #fed7aa; color: #ea580c; }
.priority.low { background: #bbf7d0; color: #16a34a; }

.status.in-progress { background: #dbeafe; color: #1e40af; }
.status.pending { background: #fef3c7; color: #92400e; }
.status.completed { background: #d1fae5; color: #065f46; }`,
    js: `// Rainbow table animations
document.querySelectorAll('.rainbow-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 23: GRADIENT ANALYTICS
// ====================================================================
colorful23: {
    html: `<div class="gradient-analytics-container">
    <div class="analytics-header">
        <h3>🚀 Performance Analytics</h3>
        <div class="time-period">Last 30 Days</div>
    </div>
    <table class="gradient-analytics-table">
        <thead>
            <tr>
                <th>Platform</th>
                <th>Visitors</th>
                <th>Growth</th>
                <th>Engagement</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr class="platform-web">
                <td>
                    <div class="platform-info">
                        <div class="platform-icon">🌐</div>
                        <div class="platform-details">
                            <div class="platform-name">Website</div>
                            <div class="platform-url">example.com</div>
                        </div>
                    </div>
                </td>
                <td class="metric-value">12,548</td>
                <td><span class="growth up">+25.3%</span></td>
                <td>
                    <div class="engagement-bar">
                        <div class="engagement-fill" style="width: 85%"></div>
                        <span>85%</span>
                    </div>
                </td>
                <td><span class="trend up">📈</span></td>
            </tr>
            <tr class="platform-mobile">
                <td>
                    <div class="platform-info">
                        <div class="platform-icon">📱</div>
                        <div class="platform-details">
                            <div class="platform-name">Mobile App</div>
                            <div class="platform-url">iOS & Android</div>
                        </div>
                    </div>
                </td>
                <td class="metric-value">8,742</td>
                <td><span class="growth up">+18.7%</span></td>
                <td>
                    <div class="engagement-bar">
                        <div class="engagement-fill" style="width: 78%"></div>
                        <span>78%</span>
                    </div>
                </td>
                <td><span class="trend up">📈</span></td>
            </tr>
            <tr class="platform-social">
                <td>
                    <div class="platform-info">
                        <div class="platform-icon">💬</div>
                        <div class="platform-details">
                            <div class="platform-name">Social Media</div>
                            <div class="platform-url">Twitter & FB</div>
                        </div>
                    </div>
                </td>
                <td class="metric-value">15,236</td>
                <td><span class="growth down">-5.2%</span></td>
                <td>
                    <div class="engagement-bar">
                        <div class="engagement-fill" style="width: 62%"></div>
                        <span>62%</span>
                    </div>
                </td>
                <td><span class="trend down">📉</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.gradient-analytics-container {
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 50%, #66bb6a 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.analytics-header {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
}

.analytics-header h3 {
    margin: 0 0 0.5rem 0;
    color: white;
    font-size: 1.75rem;
    font-weight: 800;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.time-period {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 600;
}

.gradient-analytics-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.gradient-analytics-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 700;
    color: #374151;
    border-bottom: 3px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.gradient-analytics-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(229, 231, 235, 0.8);
    color: #4b5563;
}

.platform-web { background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent); }
.platform-mobile { background: linear-gradient(90deg, rgba(168, 85, 247, 0.1), transparent); }
.platform-social { background: linear-gradient(90deg, rgba(236, 72, 153, 0.1), transparent); }

.gradient-analytics-table tr:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateX(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.platform-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.platform-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 15px;
    color: white;
}

.platform-details .platform-name {
    font-weight: 700;
    color: #1f2937;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.platform-details .platform-url {
    font-size: 0.875rem;
    color: #6b7280;
}

.metric-value {
    font-size: 1.25rem;
    font-weight: 800;
    color: #1f2937;
}

.growth {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
}

.growth.up {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

.growth.down {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
}

.engagement-bar {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 10px;
    position: relative;
    margin: 0.5rem 0;
}

.engagement-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    transition: width 1s ease-in-out;
}

.engagement-bar span {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
}

.trend {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}`,
    js: `// Animate engagement bars on load
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.engagement-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 24: NEON PRICING
// ====================================================================
colorful24: {
    html: `<div class="neon-pricing-container">
    <div class="neon-header">
        <h3>💎 Premium Pricing Plans</h3>
        <p class="neon-subtitle">Choose the perfect plan for your needs</p>
    </div>
    <table class="neon-pricing-table">
        <thead>
            <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Users</th>
                <th>Storage</th>
                <th>Features</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr class="plan-basic">
                <td>
                    <div class="plan-info">
                        <div class="plan-name">✨ Basic</div>
                        <div class="plan-desc">Perfect for starters</div>
                    </div>
                </td>
                <td class="price-cell">
                    <div class="price">$9.99</div>
                    <div class="price-period">per month</div>
                </td>
                <td>1 User</td>
                <td>10 GB</td>
                <td>
                    <ul class="features-list">
                        <li>✓ Basic Support</li>
                        <li>✓ 5 Projects</li>
                        <li>✗ Advanced Analytics</li>
                    </ul>
                </td>
                <td>
                    <button class="neon-btn basic">Get Started</button>
                </td>
            </tr>
            <tr class="plan-pro">
                <td>
                    <div class="plan-info">
                        <div class="plan-name">🚀 Pro</div>
                        <div class="plan-desc">Most popular choice</div>
                    </div>
                </td>
                <td class="price-cell">
                    <div class="price">$29.99</div>
                    <div class="price-period">per month</div>
                </td>
                <td>5 Users</td>
                <td>50 GB</td>
                <td>
                    <ul class="features-list">
                        <li>✓ Priority Support</li>
                        <li>✓ 50 Projects</li>
                        <li>✓ Advanced Analytics</li>
                    </ul>
                </td>
                <td>
                    <button class="neon-btn pro">Get Started</button>
                </td>
            </tr>
            <tr class="plan-enterprise">
                <td>
                    <div class="plan-info">
                        <div class="plan-name">🏢 Enterprise</div>
                        <div class="plan-desc">For large teams</div>
                    </div>
                </td>
                <td class="price-cell">
                    <div class="price">$99.99</div>
                    <div class="price-period">per month</div>
                </td>
                <td>Unlimited</td>
                <td>500 GB</td>
                <td>
                    <ul class="features-list">
                        <li>✓ 24/7 Support</li>
                        <li>✓ Unlimited Projects</li>
                        <li>✓ Custom Solutions</li>
                    </ul>
                </td>
                <td>
                    <button class="neon-btn enterprise">Contact Sales</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.neon-pricing-container {
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 
        0 0 50px rgba(139, 92, 246, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.neon-header {
    padding: 3rem 2rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.neon-header h3 {
    margin: 0 0 1rem 0;
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    text-shadow: 
        0 0 10px rgba(139, 92, 246, 0.8),
        0 0 20px rgba(139, 92, 246, 0.6);
}

.neon-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin: 0;
}

.neon-pricing-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
}

.neon-pricing-table th {
    padding: 2rem;
    text-align: center;
    font-weight: 700;
    color: #8b5cf6;
    border-bottom: 2px solid rgba(139, 92, 246, 0.3);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.neon-pricing-table td {
    padding: 2rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.plan-basic { 
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
    border-left: 4px solid #3b82f6;
}

.plan-pro { 
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.15), transparent);
    border-left: 4px solid #8b5cf6;
}

.plan-enterprise { 
    background: linear-gradient(90deg, rgba(236, 72, 153, 0.1), transparent);
    border-left: 4px solid #ec4899;
}

.neon-pricing-table tr:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.02);
    transition: all 0.3s ease;
}

.plan-info {
    text-align: left;
}

.plan-name {
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px currentColor;
}

.plan-desc {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

.price-cell {
    text-align: center;
}

.price {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 15px currentColor;
}

.price-period {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
}

.features-list li {
    padding: 0.25rem 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.neon-btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
}

.neon-btn.basic {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.neon-btn.pro {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
}

.neon-btn.enterprise {
    background: linear-gradient(135deg, #ec4899, #db2777);
    color: white;
    box-shadow: 0 0 25px rgba(236, 72, 153, 0.6);
}

.neon-btn:hover {
    transform: translateY(-3px);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 30px currentColor;
}`,
    js: `// Neon pricing table interactions
document.querySelectorAll('.neon-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const plan = this.classList[1];
        alert(\`Selected \${plan.toUpperCase()} plan! Redirecting to checkout...\`);
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 25: PASTEL TEAM
// ====================================================================
colorful25: {
    html: `<div class="pastel-team-container">
    <div class="pastel-header">
        <h3>👥 Team Members</h3>
        <div class="team-stats">
            <span class="stat online">Online: 8</span>
            <span class="stat away">Away: 2</span>
            <span class="stat offline">Offline: 1</span>
        </div>
    </div>
    <table class="pastel-team-table">
        <thead>
            <tr>
                <th>Member</th>
                <th>Role</th>
                <th>Department</th>
                <th>Projects</th>
                <th>Status</th>
                <th>Contact</th>
            </tr>
        </thead>
        <tbody>
            <tr class="member-online">
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #a5b4fc, #c4b5fd);">AS</div>
                        <div class="member-details">
                            <div class="member-name">Alex Smith</div>
                            <div class="member-title">Senior Designer</div>
                        </div>
                    </div>
                </td>
                <td><span class="role-tag design">UI/UX Design</span></td>
                <td>Creative</td>
                <td>
                    <div class="projects-count">8 Projects</div>
                    <div class="projects-bar">
                        <div class="projects-fill" style="width: 80%"></div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator online">
                        <div class="status-dot"></div>
                        <span>Online</span>
                    </div>
                </td>
                <td>
                    <div class="contact-actions">
                        <button class="contact-btn message">💬</button>
                        <button class="contact-btn call">📞</button>
                    </div>
                </td>
            </tr>
            <tr class="member-away">
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #fbcfe8, #f9a8d4);">SJ</div>
                        <div class="member-details">
                            <div class="member-name">Sarah Johnson</div>
                            <div class="member-title">Frontend Dev</div>
                        </div>
                    </div>
                </td>
                <td><span class="role-tag development">Frontend</span></td>
                <td>Engineering</td>
                <td>
                    <div class="projects-count">12 Projects</div>
                    <div class="projects-bar">
                        <div class="projects-fill" style="width: 60%"></div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator away">
                        <div class="status-dot"></div>
                        <span>Away</span>
                    </div>
                </td>
                <td>
                    <div class="contact-actions">
                        <button class="contact-btn message">💬</button>
                        <button class="contact-btn call">📞</button>
                    </div>
                </td>
            </tr>
            <tr class="member-offline">
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #bae6fd, #7dd3fc);">MC</div>
                        <div class="member-details">
                            <div class="member-name">Mike Chen</div>
                            <div class="member-title">Backend Lead</div>
                        </div>
                    </div>
                </td>
                <td><span class="role-tag backend">Backend</span></td>
                <td>Engineering</td>
                <td>
                    <div class="projects-count">6 Projects</div>
                    <div class="projects-bar">
                        <div class="projects-fill" style="width: 90%"></div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator offline">
                        <div class="status-dot"></div>
                        <span>Offline</span>
                    </div>
                </td>
                <td>
                    <div class="contact-actions">
                        <button class="contact-btn message">💬</button>
                        <button class="contact-btn call">📞</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.pastel-team-container {
    background: linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 50%, #f0fdf4 100%);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.pastel-header {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pastel-header h3 {
    margin: 0;
    color: #4f46e5;
    font-size: 1.75rem;
    font-weight: 700;
}

.team-stats {
    display: flex;
    gap: 1rem;
}

.stat {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
}

.stat.online { background: linear-gradient(135deg, #34d399, #10b981); }
.stat.away { background: linear-gradient(135deg, #fbbf24, #f59e0b); }
.stat.offline { background: linear-gradient(135deg, #9ca3af, #6b7280); }

.pastel-team-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.8);
}

.pastel-team-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #6b7280;
    border-bottom: 2px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.pastel-team-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(243, 244, 246, 0.8);
    color: #6b7280;
}

.member-online { background: linear-gradient(90deg, rgba(52, 211, 153, 0.1), transparent); }
.member-away { background: linear-gradient(90deg, rgba(251, 191, 36, 0.1), transparent); }
.member-offline { background: linear-gradient(90deg, rgba(156, 163, 175, 0.1), transparent); }

.pastel-team-table tr:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.member-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.member-avatar {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.member-details .member-name {
    font-weight: 700;
    color: #1f2937;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.member-details .member-title {
    font-size: 0.875rem;
    color: #9ca3af;
}

.role-tag {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.role-tag.design { background: #c7d2fe; color: #3730a3; }
.role-tag.development { background: #fbcfe8; color: #be185d; }
.role-tag.backend { background: #bae6fd; color: #0369a1; }

.projects-count {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.projects-bar {
    width: 100%;
    height: 6px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.projects-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    transition: width 1s ease-in-out;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.status-indicator.online .status-dot { background: #10b981; }
.status-indicator.away .status-dot { background: #f59e0b; }
.status-indicator.offline .status-dot { background: #6b7280; }

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.contact-actions {
    display: flex;
    gap: 0.5rem;
}

.contact-btn {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.contact-btn:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}`,
    js: `// Pastel team table interactions
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent;
        const memberName = this.closest('tr').querySelector('.member-name').textContent;
        alert(\`\${action} \${memberName}\`);
    });
});

// Animate project bars
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.projects-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 26: FESTIVAL EVENTS
// ====================================================================
colorful26: {
    html: `<div class="festival-events-container">
    <div class="festival-header">
        <h3>🎉 Upcoming Events & Festivals</h3>
        <div class="festival-controls">
            <button class="filter-btn active">All</button>
            <button class="filter-btn">Music</button>
            <button class="filter-btn">Food</button>
            <button class="filter-btn">Art</button>
        </div>
    </div>
    <table class="festival-events-table">
        <thead>
            <tr>
                <th>Event</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Type</th>
                <th>Tickets</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr class="event-music">
                <td>
                    <div class="event-info">
                        <div class="event-emoji">🎵</div>
                        <div class="event-details">
                            <div class="event-name">Summer Music Festival</div>
                            <div class="event-artist">Feat. Top Artists</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="event-date">
                        <div class="date">Mar 15, 2024</div>
                        <div class="time">6:00 PM - 11:00 PM</div>
                    </div>
                </td>
                <td>
                    <div class="event-location">
                        <div class="venue">Central Park</div>
                        <div class="city">New York, NY</div>
                    </div>
                </td>
                <td><span class="event-type music">Music</span></td>
                <td>
                    <div class="ticket-status available">
                        <span class="ticket-emoji">🎫</span>
                        Available
                    </div>
                </td>
                <td>
                    <button class="festival-btn buy-tickets">Get Tickets</button>
                </td>
            </tr>
            <tr class="event-food">
                <td>
                    <div class="event-info">
                        <div class="event-emoji">🍕</div>
                        <div class="event-details">
                            <div class="event-name">International Food Fair</div>
                            <div class="event-artist">50+ Food Stalls</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="event-date">
                        <div class="date">Apr 2, 2024</div>
                        <div class="time">12:00 PM - 8:00 PM</div>
                    </div>
                </td>
                <td>
                    <div class="event-location">
                        <div class="venue">Downtown Square</div>
                        <div class="city">Chicago, IL</div>
                    </div>
                </td>
                <td><span class="event-type food">Food</span></td>
                <td>
                    <div class="ticket-status sold-out">
                        <span class="ticket-emoji">😢</span>
                        Sold Out
                    </div>
                </td>
                <td>
                    <button class="festival-btn notify">Notify Me</button>
                </td>
            </tr>
            <tr class="event-art">
                <td>
                    <div class="event-info">
                        <div class="event-emoji">🎨</div>
                        <div class="event-details">
                            <div class="event-name">Modern Art Exhibition</div>
                            <div class="event-artist">Local Artists Showcase</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="event-date">
                        <div class="date">Apr 18, 2024</div>
                        <div class="time">10:00 AM - 6:00 PM</div>
                    </div>
                </td>
                <td>
                    <div class="event-location">
                        <div class="venue">Art Gallery</div>
                        <div class="city">San Francisco, CA</div>
                    </div>
                </td>
                <td><span class="event-type art">Art</span></td>
                <td>
                    <div class="ticket-status limited">
                        <span class="ticket-emoji">⚡</span>
                        Limited
                    </div>
                </td>
                <td>
                    <button class="festival-btn buy-tickets">Get Tickets</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.festival-events-container {
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.festival-header {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.festival-header h3 {
    margin: 0 0 1.5rem 0;
    color: white;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.festival-controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.filter-btn.active,
.filter-btn:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #ff6b6b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.festival-events-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.festival-events-table th {
    padding: 1.75rem 2rem;
    text-align: left;
    font-weight: 700;
    color: #374151;
    border-bottom: 3px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.festival-events-table td {
    padding: 1.75rem 2rem;
    border-bottom: 1px solid rgba(243, 244, 246, 0.8);
    color: #4b5563;
}

.event-music { 
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
    border-left: 5px solid #3b82f6;
}

.event-food { 
    background: linear-gradient(90deg, rgba(34, 197, 94, 0.1), transparent);
    border-left: 5px solid #22c55e;
}

.event-art { 
    background: linear-gradient(90deg, rgba(168, 85, 247, 0.1), transparent);
    border-left: 5px solid #a855f7;
}

.festival-events-table tr:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.01);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.event-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.event-emoji {
    font-size: 2.5rem;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 20px;
    color: white;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.event-details .event-name {
    font-weight: 800;
    color: #1f2937;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.event-details .event-artist {
    font-size: 0.9rem;
    color: #6b7280;
    font-weight: 500;
}

.event-date .date {
    font-weight: 700;
    color: #1f2937;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.event-date .time {
    font-size: 0.9rem;
    color: #6b7280;
}

.event-location .venue {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.event-location .city {
    font-size: 0.9rem;
    color: #6b7280;
}

.event-type {
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.event-type.music { background: #dbeafe; color: #1e40af; }
.event-type.food { background: #dcfce7; color: #166534; }
.event-type.art { background: #f3e8ff; color: #7c3aed; }

.ticket-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ticket-status.available { background: #d1fae5; color: #065f46; }
.ticket-status.sold-out { background: #fecaca; color: #dc2626; }
.ticket-status.limited { background: #fef3c7; color: #92400e; }

.ticket-emoji {
    font-size: 1.2rem;
}

.festival-btn {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.festival-btn.buy-tickets {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    box-shadow: 0 5px 15px rgba(16, 185, 129, 0.4);
}

.festival-btn.notify {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
    box-shadow: 0 5px 15px rgba(245, 158, 11, 0.4);
}

.festival-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}`,
    js: `// Festival events filtering and interactions
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.textContent.toLowerCase();
        alert(\`Filtering events by: \${filter}\`);
        // In real implementation, this would filter the table rows
    });
});

document.querySelectorAll('.festival-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const eventName = this.closest('tr').querySelector('.event-name').textContent;
        if (this.classList.contains('buy-tickets')) {
            alert(\`Buying tickets for: \${eventName}\`);
        } else {
            alert(\`You'll be notified about: \${eventName}\`);
        }
    });
});`
},
// ====================================================================
// PREMIUM TEMPLATE 27: LUXURY DASHBOARD
// ====================================================================
premium27: {
    html: `<div class="luxury-dashboard-container">
    <div class="luxury-header">
        <div class="header-content">
            <h3>💎 Elite Client Portfolio</h3>
            <p class="header-subtitle">Managing High-Net-Worth Relationships</p>
        </div>
        <div class="header-stats">
            <div class="stat">
                <div class="stat-value">$48.2M</div>
                <div class="stat-label">Total AUM</div>
            </div>
            <div class="stat">
                <div class="stat-value">+15.8%</div>
                <div class="stat-label">YTD Growth</div>
            </div>
        </div>
    </div>
    <table class="luxury-table">
        <thead>
            <tr>
                <th>Client</th>
                <th>Portfolio Value</th>
                <th>Investment Style</th>
                <th>YTD Growth</th>
                <th>Risk Profile</th>
                <th>Client Tier</th>
            </tr>
        </thead>
        <tbody>
            <tr class="client-vip">
                <td>
                    <div class="client-info">
                        <div class="client-avatar">
                            <div class="avatar-gold">JD</div>
                            <div class="online-indicator"></div>
                        </div>
                        <div class="client-details">
                            <div class="client-name">John Davidson</div>
                            <div class="client-company">Elite Corporation</div>
                        </div>
                    </div>
                </td>
                <td class="portfolio-value">
                    <div class="value-amount">$2,548,000</div>
                    <div class="value-change positive">+12.5%</div>
                </td>
                <td><span class="investment-style aggressive">Aggressive Growth</span></td>
                <td>
                    <div class="growth-chart">
                        <div class="chart-bar" style="width: 88%"></div>
                        <span class="chart-value">88%</span>
                    </div>
                </td>
                <td><span class="risk-level high">High</span></td>
                <td>
                    <div class="client-tier vip">
                        <span class="tier-icon">👑</span>
                        VIP
                    </div>
                </td>
            </tr>
            <tr class="client-premium">
                <td>
                    <div class="client-info">
                        <div class="client-avatar">
                            <div class="avatar-silver">SG</div>
                            <div class="online-indicator"></div>
                        </div>
                        <div class="client-details">
                            <div class="client-name">Sarah Goldberg</div>
                            <div class="client-company">Global Innovations Inc.</div>
                        </div>
                    </div>
                </td>
                <td class="portfolio-value">
                    <div class="value-amount">$1,825,000</div>
                    <div class="value-change positive">+8.3%</div>
                </td>
                <td><span class="investment-style balanced">Balanced</span></td>
                <td>
                    <div class="growth-chart">
                        <div class="chart-bar" style="width: 76%"></div>
                        <span class="chart-value">76%</span>
                    </div>
                </td>
                <td><span class="risk-level medium">Medium</span></td>
                <td>
                    <div class="client-tier premium">
                        <span class="tier-icon">💎</span>
                        Premium
                    </div>
                </td>
            </tr>
            <tr class="client-standard">
                <td>
                    <div class="client-info">
                        <div class="client-avatar">
                            <div class="avatar-bronze">MC</div>
                            <div class="online-indicator offline"></div>
                        </div>
                        <div class="client-details">
                            <div class="client-name">Michael Chen</div>
                            <div class="client-company">Tech Solutions Ltd.</div>
                        </div>
                    </div>
                </td>
                <td class="portfolio-value">
                    <div class="value-amount">$950,000</div>
                    <div class="value-change negative">-2.1%</div>
                </td>
                <td><span class="investment-style conservative">Conservative</span></td>
                <td>
                    <div class="growth-chart">
                        <div class="chart-bar" style="width: 45%"></div>
                        <span class="chart-value">45%</span>
                    </div>
                </td>
                <td><span class="risk-level low">Low</span></td>
                <td>
                    <div class="client-tier standard">
                        <span class="tier-icon">⭐</span>
                        Standard
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="luxury-footer">
        <div class="footer-actions">
            <button class="btn-luxury primary">Add New Client</button>
            <button class="btn-luxury secondary">Generate Report</button>
            <button class="btn-luxury outline">Export Data</button>
        </div>
    </div>
</div>`,
    css: `.luxury-dashboard-container {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.2);
    position: relative;
}

.luxury-dashboard-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 215, 0, 0.5), 
        rgba(255, 215, 0, 0.8),
        rgba(255, 215, 0, 0.5),
        transparent
    );
}

.luxury-header {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-content h3 {
    margin: 0 0 0.5rem 0;
    color: #fbbf24;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
}

.header-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    margin: 0;
}

.header-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    text-align: center;
}

.stat-value {
    font-size: 2rem;
    font-weight: 800;
    color: #fbbf24;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.luxury-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
}

.luxury-table th {
    padding: 1.75rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #fbbf24;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.03);
}

.luxury-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.client-vip { 
    background: linear-gradient(90deg, rgba(251, 191, 36, 0.1), transparent);
    border-left: 4px solid #fbbf24;
}

.client-premium { 
    background: linear-gradient(90deg, rgba(156, 163, 175, 0.1), transparent);
    border-left: 4px solid #9ca3af;
}

.client-standard { 
    background: linear-gradient(90deg, rgba(120, 53, 15, 0.1), transparent);
    border-left: 4px solid #78350f;
}

.luxury-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.client-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.client-avatar {
    position: relative;
}

.avatar-gold, .avatar-silver, .avatar-bronze {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: white;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.avatar-gold {
    background: linear-gradient(135deg, #fbbf24, #d97706);
    border: 2px solid #fbbf24;
}

.avatar-silver {
    background: linear-gradient(135deg, #9ca3af, #6b7280);
    border: 2px solid #9ca3af;
}

.avatar-bronze {
    background: linear-gradient(135deg, #b45309, #78350f);
    border: 2px solid #b45309;
}

.online-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #10b981;
    border: 2px solid #1e293b;
}

.online-indicator.offline {
    background: #6b7280;
}

.client-details .client-name {
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.client-details .client-company {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.portfolio-value .value-amount {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.value-change {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
}

.value-change.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #10b981;
}

.value-change.negative {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.investment-style {
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.investment-style.aggressive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.investment-style.balanced {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.investment-style.conservative {
    background: rgba(34, 197, 94, 0.2);
    color: #10b981;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.growth-chart {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    position: relative;
    margin: 0.5rem 0;
}

.chart-bar {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    transition: width 1s ease-in-out;
}

.chart-value {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: #fbbf24;
}

.risk-level {
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.risk-level.high {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.risk-level.medium {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.risk-level.low {
    background: rgba(34, 197, 94, 0.2);
    color: #10b981;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.client-tier {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.client-tier.vip {
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1));
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.3);
}

.client-tier.premium {
    background: linear-gradient(135deg, rgba(156, 163, 175, 0.2), rgba(156, 163, 175, 0.1));
    color: #9ca3af;
    border: 1px solid rgba(156, 163, 175, 0.3);
}

.client-tier.standard {
    background: linear-gradient(135deg, rgba(120, 53, 15, 0.2), rgba(120, 53, 15, 0.1));
    color: #b45309;
    border: 1px solid rgba(120, 53, 15, 0.3);
}

.luxury-footer {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.footer-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn-luxury {
    padding: 1rem 2rem;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-luxury.primary {
    background: linear-gradient(135deg, #fbbf24, #d97706);
    color: #1e293b;
    box-shadow: 0 5px 15px rgba(251, 191, 36, 0.4);
}

.btn-luxury.secondary {
    background: linear-gradient(135deg, #475569, #334155);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.btn-luxury.outline {
    background: transparent;
    color: #fbbf24;
    border: 2px solid #fbbf24;
}

.btn-luxury:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}`,
    js: `// Luxury dashboard interactions
document.querySelectorAll('.btn-luxury').forEach(btn => {
    btn.addEventListener('click', function() {
        const btnType = this.classList[1];
        const actions = {
            primary: 'Adding new VIP client...',
            secondary: 'Generating comprehensive report...',
            outline: 'Exporting client data...'
        };
        alert(actions[btnType]);
    });
});

// Animate growth charts
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 28: EXECUTIVE BOARD
// ====================================================================
premium28: {
    html: `<div class="executive-board-container">
    <div class="executive-header">
        <div class="header-main">
            <h3>🏢 Executive Leadership Board</h3>
            <p class="header-desc">C-Suite Performance & Governance</p>
        </div>
        <div class="header-badges">
            <div class="badge performance">
                <span class="badge-value">96.2%</span>
                <span class="badge-label">Avg. Performance</span>
            </div>
            <div class="badge satisfaction">
                <span class="badge-value">4.8/5</span>
                <span class="badge-label">Board Satisfaction</span>
            </div>
        </div>
    </div>
    <table class="executive-table">
        <thead>
            <tr>
                <th>Executive</th>
                <th>Position</th>
                <th>Department</th>
                <th>Tenure</th>
                <th>Performance</th>
                <th>Rating</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="executive-ceo">
                <td>
                    <div class="executive-info">
                        <div class="executive-avatar">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='40' r='20' fill='%23fbbf24'/%3E%3Ccircle cx='50' cy='100' r='40' fill='%23fbbf24'/%3E%3C/svg%3E" alt="CEO" class="avatar-img">
                            <div class="rank-badge">1</div>
                        </div>
                        <div class="executive-details">
                            <div class="executive-name">Robert Kingsley</div>
                            <div class="executive-title">Chief Executive Officer</div>
                        </div>
                    </div>
                </td>
                <td><span class="position-tag ceo">CEO</span></td>
                <td>Executive Leadership</td>
                <td>
                    <div class="tenure-info">
                        <div class="tenure-years">5.2 Years</div>
                        <div class="tenure-date">Since 2019</div>
                    </div>
                </td>
                <td>
                    <div class="performance-metric">
                        <div class="metric-value">98.5%</div>
                        <div class="metric-bar">
                            <div class="metric-fill" style="width: 98.5%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="star-rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                    </div>
                </td>
                <td>
                    <div class="executive-actions">
                        <button class="action-btn review">📊 Review</button>
                        <button class="action-btn message">✉️ Message</button>
                    </div>
                </td>
            </tr>
            <tr class="executive-cfo">
                <td>
                    <div class="executive-info">
                        <div class="executive-avatar">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='40' r='20' fill='%239ca3af'/%3E%3Ccircle cx='50' cy='100' r='40' fill='%239ca3af'/%3E%3C/svg%3E" alt="CFO" class="avatar-img">
                            <div class="rank-badge">2</div>
                        </div>
                        <div class="executive-details">
                            <div class="executive-name">Jennifer Martinez</div>
                            <div class="executive-title">Chief Financial Officer</div>
                        </div>
                    </div>
                </td>
                <td><span class="position-tag cfo">CFO</span></td>
                <td>Finance & Accounting</td>
                <td>
                    <div class="tenure-info">
                        <div class="tenure-years">3.8 Years</div>
                        <div class="tenure-date">Since 2020</div>
                    </div>
                </td>
                <td>
                    <div class="performance-metric">
                        <div class="metric-value">95.2%</div>
                        <div class="metric-bar">
                            <div class="metric-fill" style="width: 95.2%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="star-rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star half">★</span>
                    </div>
                </td>
                <td>
                    <div class="executive-actions">
                        <button class="action-btn review">📊 Review</button>
                        <button class="action-btn message">✉️ Message</button>
                    </div>
                </td>
            </tr>
            <tr class="executive-cto">
                <td>
                    <div class="executive-info">
                        <div class="executive-avatar">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='40' r='20' fill='%23b45309'/%3E%3Ccircle cx='50' cy='100' r='40' fill='%23b45309'/%3E%3C/svg%3E" alt="CTO" class="avatar-img">
                            <div class="rank-badge">3</div>
                        </div>
                        <div class="executive-details">
                            <div class="executive-name">David Chen</div>
                            <div class="executive-title">Chief Technology Officer</div>
                        </div>
                    </div>
                </td>
                <td><span class="position-tag cto">CTO</span></td>
                <td>Technology & Innovation</td>
                <td>
                    <div class="tenure-info">
                        <div class="tenure-years">2.5 Years</div>
                        <div class="tenure-date">Since 2021</div>
                    </div>
                </td>
                <td>
                    <div class="performance-metric">
                        <div class="metric-value">92.8%</div>
                        <div class="metric-bar">
                            <div class="metric-fill" style="width: 92.8%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="star-rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star">★</span>
                    </div>
                </td>
                <td>
                    <div class="executive-actions">
                        <button class="action-btn review">📊 Review</button>
                        <button class="action-btn message">✉️ Message</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.executive-board-container {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.executive-header {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-main h3 {
    margin: 0 0 0.5rem 0;
    color: #fbbf24;
    font-size: 1.75rem;
    font-weight: 700;
}

.header-desc {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    margin: 0;
}

.header-badges {
    display: flex;
    gap: 1.5rem;
}

.badge {
    text-align: center;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    color: #fbbf24;
    margin-bottom: 0.25rem;
}

.badge-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.executive-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.02);
}

.executive-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #fbbf24;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.03);
}

.executive-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.executive-ceo { 
    background: linear-gradient(90deg, rgba(251, 191, 36, 0.15), transparent);
    border-left: 4px solid #fbbf24;
}

.executive-cfo { 
    background: linear-gradient(90deg, rgba(156, 163, 175, 0.1), transparent);
    border-left: 4px solid #9ca3af;
}

.executive-cto { 
    background: linear-gradient(90deg, rgba(120, 53, 15, 0.1), transparent);
    border-left: 4px solid #78350f;
}

.executive-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: scale(1.01);
    transition: all 0.3s ease;
}

.executive-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.executive-avatar {
    position: relative;
}

.avatar-img {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    border: 3px solid;
}

.executive-ceo .avatar-img { border-color: #fbbf24; }
.executive-cfo .avatar-img { border-color: #9ca3af; }
.executive-cto .avatar-img { border-color: #b45309; }

.rank-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 25px;
    height: 25px;
    background: #fbbf24;
    color: #1e293b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    border: 2px solid #1e293b;
}

.executive-details .executive-name {
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.executive-details .executive-title {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.position-tag {
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.position-tag.ceo {
    background: rgba(251, 191, 36, 0.2);
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.3);
}

.position-tag.cfo {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
    border: 1px solid rgba(156, 163, 175, 0.3);
}

.position-tag.cto {
    background: rgba(180, 83, 9, 0.2);
    color: #b45309;
    border: 1px solid rgba(180, 83, 9, 0.3);
}

.tenure-info .tenure-years {
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.tenure-info .tenure-date {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.performance-metric .metric-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fbbf24;
    margin-bottom: 0.5rem;
}

.metric-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.metric-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    transition: width 1s ease-in-out;
}

.star-rating {
    display: flex;
    gap: 0.25rem;
}

.star {
    font-size: 1.2rem;
    color: #6b7280;
}

.star.filled {
    color: #fbbf24;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
}

.star.half {
    background: linear-gradient(90deg, #fbbf24 50%, #6b7280 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.executive-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.action-btn:hover {
    background: rgba(251, 191, 36, 0.2);
    color: #fbbf24;
    transform: translateY(-2px);
}`,
    js: `// Executive board interactions
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent;
        const executiveName = this.closest('tr').querySelector('.executive-name').textContent;
        
        if (action.includes('Review')) {
            alert(\`Opening performance review for \${executiveName}\`);
        } else {
            alert(\`Opening message composer for \${executiveName}\`);
        }
    });
});

// Animate performance metrics
document.addEventListener('DOMContentLoaded', function() {
    const metrics = document.querySelectorAll('.metric-fill');
    metrics.forEach(metric => {
        const width = metric.style.width;
        metric.style.width = '0';
        setTimeout(() => {
            metric.style.width = width;
        }, 600);
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 29: REAL ESTATE PORTFOLIO
// ====================================================================
premium29: {
    html: `<div class="real-estate-container">
    <div class="real-estate-header">
        <div class="header-content">
            <h3>🏡 Luxury Real Estate Portfolio</h3>
            <p class="header-subtitle">Premium Properties & Investment Assets</p>
        </div>
        <div class="portfolio-summary">
            <div class="summary-item">
                <div class="summary-value">$48.7M</div>
                <div class="summary-label">Total Portfolio Value</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">12.4%</div>
                <div class="summary-label">Average ROI</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">8</div>
                <div class="summary-label">Properties</div>
            </div>
        </div>
    </div>
    <table class="real-estate-table">
        <thead>
            <tr>
                <th>Property</th>
                <th>Location</th>
                <th>Type</th>
                <th>Purchase Price</th>
                <th>Current Value</th>
                <th>ROI</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="property-penthouse">
                <td>
                    <div class="property-info">
                        <div class="property-image">
                            <div class="image-placeholder">🏙️</div>
                            <div class="property-badge luxury">Luxury</div>
                        </div>
                        <div class="property-details">
                            <div class="property-name">Skyline Penthouse A</div>
                            <div class="property-address">432 Park Avenue, NYC</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="location-info">
                        <div class="location-name">Manhattan</div>
                        <div class="location-region">New York, NY</div>
                    </div>
                </td>
                <td><span class="property-type residential">Residential</span></td>
                <td>
                    <div class="price-info">
                        <div class="price-amount">$4,200,000</div>
                        <div class="price-date">2020</div>
                    </div>
                </td>
                <td>
                    <div class="value-info">
                        <div class="value-amount">$5,200,000</div>
                        <div class="value-appreciation positive">+$1,000,000</div>
                    </div>
                </td>
                <td>
                    <div class="roi-metric">
                        <div class="roi-value positive">+23.8%</div>
                        <div class="roi-chart">
                            <div class="roi-bar" style="width: 85%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="property-status rented">
                        <span class="status-dot"></span>
                        Rented
                    </div>
                </td>
            </tr>
            <tr class="property-villa">
                <td>
                    <div class="property-info">
                        <div class="property-image">
                            <div class="image-placeholder">🏡</div>
                            <div class="property-badge premium">Premium</div>
                        </div>
                        <div class="property-details">
                            <div class="property-name">Beverly Hills Villa</div>
                            <div class="property-address">123 Sunset Blvd, LA</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="location-info">
                        <div class="location-name">Beverly Hills</div>
                        <div class="location-region">Los Angeles, CA</div>
                    </div>
                </td>
                <td><span class="property-type villa">Villa</span></td>
                <td>
                    <div class="price-info">
                        <div class="price-amount">$7,500,000</div>
                        <div class="price-date">2019</div>
                    </div>
                </td>
                <td>
                    <div class="value-info">
                        <div class="value-amount">$8,700,000</div>
                        <div class="value-appreciation positive">+$1,200,000</div>
                    </div>
                </td>
                <td>
                    <div class="roi-metric">
                        <div class="roi-value positive">+16.0%</div>
                        <div class="roi-chart">
                            <div class="roi-bar" style="width: 70%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="property-status occupied">
                        <span class="status-dot"></span>
                        Owner Occupied
                    </div>
                </td>
            </tr>
            <tr class="property-commercial">
                <td>
                    <div class="property-info">
                        <div class="property-image">
                            <div class="image-placeholder">🏢</div>
                            <div class="property-badge commercial">Commercial</div>
                        </div>
                        <div class="property-details">
                            <div class="property-name">Tech Office Tower</div>
                            <div class="property-address">1 Market Street, SF</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="location-info">
                        <div class="location-name">Financial District</div>
                        <div class="location-region">San Francisco, CA</div>
                    </div>
                </td>
                <td><span class="property-type commercial">Commercial</span></td>
                <td>
                    <div class="price-info">
                        <div class="price-amount">$12,000,000</div>
                        <div class="price-date">2018</div>
                    </div>
                </td>
                <td>
                    <div class="value-info">
                        <div class="value-amount">$15,800,000</div>
                        <div class="value-appreciation positive">+$3,800,000</div>
                    </div>
                </td>
                <td>
                    <div class="roi-metric">
                        <div class="roi-value positive">+31.7%</div>
                        <div class="roi-chart">
                            <div class="roi-bar" style="width: 95%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="property-status leased">
                        <span class="status-dot"></span>
                        Leased
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.real-estate-container {
    background: linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(120, 113, 108, 0.3);
}

.real-estate-header {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(120, 113, 108, 0.3);
}

.header-content h3 {
    margin: 0 0 0.5rem 0;
    color: #f59e0b;
    font-size: 2rem;
    font-weight: 700;
}

.header-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    margin: 0 0 2rem 0;
}

.portfolio-summary {
    display: flex;
    gap: 3rem;
}

.summary-item {
    text-align: center;
}

.summary-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: #f59e0b;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
}

.summary-label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.real-estate-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.02);
}

.real-estate-table th {
    padding: 1.75rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #f59e0b;
    border-bottom: 2px solid rgba(245, 158, 11, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.03);
}

.real-estate-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.property-penthouse { 
    background: linear-gradient(90deg, rgba(245, 158, 11, 0.1), transparent);
    border-left: 4px solid #f59e0b;
}

.property-villa { 
    background: linear-gradient(90deg, rgba(180, 83, 9, 0.1), transparent);
    border-left: 4px solid #b45309;
}

.property-commercial { 
    background: linear-gradient(90deg, rgba(120, 53, 15, 0.1), transparent);
    border-left: 4px solid #78350f;
}

.real-estate-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
    transition: all 0.3s ease;
}

.property-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.property-image {
    position: relative;
}

.image-placeholder {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.property-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
}

.property-badge.luxury { background: #f59e0b; }
.property-badge.premium { background: #b45309; }
.property-badge.commercial { background: #78350f; }

.property-details .property-name {
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.property-details .property-address {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.location-info .location-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.location-info .location-region {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.property-type {
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.property-type.residential {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.property-type.villa {
    background: rgba(180, 83, 9, 0.2);
    color: #b45309;
    border: 1px solid rgba(180, 83, 9, 0.3);
}

.property-type.commercial {
    background: rgba(120, 53, 15, 0.2);
    color: #78350f;
    border: 1px solid rgba(120, 53, 15, 0.3);
}

.price-info .price-amount,
.value-info .value-amount {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.price-info .price-date,
.value-info .value-appreciation {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.value-appreciation.positive {
    color: #10b981;
}

.roi-metric .roi-value {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.roi-value.positive {
    color: #10b981;
}

.roi-chart {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.roi-bar {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #10b981, #059669);
    transition: width 1s ease-in-out;
}

.property-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.property-status.rented .status-dot { background: #10b981; }
.property-status.occupied .status-dot { background: #f59e0b; }
.property-status.leased .status-dot { background: #3b82f6; }

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}`,
    js: `// Real estate portfolio interactions
document.addEventListener('DOMContentLoaded', function() {
    // Animate ROI bars
    const bars = document.querySelectorAll('.roi-bar');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 800);
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 30: INVESTMENT PORTFOLIO
// ====================================================================
premium30: {
    html: `<div class="investment-portfolio-container">
    <div class="portfolio-header">
        <div class="header-main">
            <h3>📈 Strategic Investment Portfolio</h3>
            <p class="header-subtitle">Multi-Asset Class Allocation & Performance</p>
        </div>
        <div class="portfolio-metrics">
            <div class="metric">
                <div class="metric-value">+18.4%</div>
                <div class="metric-label">YTD Return</div>
            </div>
            <div class="metric">
                <div class="metric-value">$2.8M</div>
                <div class="metric-label">Total Value</div>
            </div>
            <div class="metric">
                <div class="metric-value">7.2%</div>
                <div class="metric-label">Dividend Yield</div>
            </div>
        </div>
    </div>
    <table class="investment-table">
        <thead>
            <tr>
                <th>Asset Class</th>
                <th>Allocation</th>
                <th>Holdings</th>
                <th>YTD Return</th>
                <th>Risk Level</th>
                <th>Performance</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="asset-equity">
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">📊</div>
                        <div class="asset-details">
                            <div class="asset-name">US Equities</div>
                            <div class="asset-category">Growth Stocks</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="allocation-info">
                        <div class="allocation-percent">35%</div>
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 35%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="holdings-list">
                        <div class="holding">AAPL, MSFT, GOOGL</div>
                        <div class="holding-count">12 Stocks</div>
                    </div>
                </td>
                <td>
                    <div class="return-metric positive">
                        <span class="return-value">+24.5%</span>
                        <span class="return-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="risk-indicator high">
                        <div class="risk-dots">
                            <span class="dot active"></span>
                            <span class="dot active"></span>
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <span class="risk-label">High</span>
                    </div>
                </td>
                <td>
                    <div class="performance-chart">
                        <div class="chart-line" style="height: 80%"></div>
                        <div class="chart-points">
                            <span class="point" style="left: 10%"></span>
                            <span class="point" style="left: 30%"></span>
                            <span class="point" style="left: 50%"></span>
                            <span class="point" style="left: 70%"></span>
                            <span class="point" style="left: 90%"></span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="investment-actions">
                        <button class="invest-btn rebalance">Rebalance</button>
                        <button class="invest-btn analyze">Analyze</button>
                    </div>
                </td>
            </tr>
            <tr class="asset-realestate">
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🏠</div>
                        <div class="asset-details">
                            <div class="asset-name">Real Estate</div>
                            <div class="asset-category">REITs & Properties</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="allocation-info">
                        <div class="allocation-percent">25%</div>
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 25%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="holdings-list">
                        <div class="holding">VNQ, PLD, AMT</div>
                        <div class="holding-count">8 REITs</div>
                    </div>
                </td>
                <td>
                    <div class="return-metric positive">
                        <span class="return-value">+12.3%</span>
                        <span class="return-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="risk-indicator medium">
                        <div class="risk-dots">
                            <span class="dot active"></span>
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <span class="risk-label">Medium</span>
                    </div>
                </td>
                <td>
                    <div class="performance-chart">
                        <div class="chart-line" style="height: 60%"></div>
                        <div class="chart-points">
                            <span class="point" style="left: 10%"></span>
                            <span class="point" style="left: 30%"></span>
                            <span class="point" style="left: 50%"></span>
                            <span class="point" style="left: 70%"></span>
                            <span class="point" style="left: 90%"></span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="investment-actions">
                        <button class="invest-btn rebalance">Rebalance</button>
                        <button class="invest-btn analyze">Analyze</button>
                    </div>
                </td>
            </tr>
            <tr class="asset-bonds">
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🏛️</div>
                        <div class="asset-details">
                            <div class="asset-name">Fixed Income</div>
                            <div class="asset-category">Bonds & Treasuries</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="allocation-info">
                        <div class="allocation-percent">20%</div>
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 20%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="holdings-list">
                        <div class="holding">BND, AGG, TLT</div>
                        <div class="holding-count">6 Bond ETFs</div>
                    </div>
                </td>
                <td>
                    <div class="return-metric negative">
                        <span class="return-value">-2.1%</span>
                        <span class="return-arrow">↘</span>
                    </div>
                </td>
                <td>
                    <div class="risk-indicator low">
                        <div class="risk-dots">
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <span class="risk-label">Low</span>
                    </div>
                </td>
                <td>
                    <div class="performance-chart">
                        <div class="chart-line" style="height: 30%"></div>
                        <div class="chart-points">
                            <span class="point" style="left: 10%"></span>
                            <span class="point" style="left: 30%"></span>
                            <span class="point" style="left: 50%"></span>
                            <span class="point" style="left: 70%"></span>
                            <span class="point" style="left: 90%"></span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="investment-actions">
                        <button class="invest-btn rebalance">Rebalance</button>
                        <button class="invest-btn analyze">Analyze</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.investment-portfolio-container {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.portfolio-header {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(59, 130, 246, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-main h3 {
    margin: 0 0 0.5rem 0;
    color: #3b82f6;
    font-size: 2rem;
    font-weight: 700;
}

.header-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    margin: 0;
}

.portfolio-metrics {
    display: flex;
    gap: 2rem;
}

.metric {
    text-align: center;
}

.metric-value {
    font-size: 2rem;
    font-weight: 800;
    color: #3b82f6;
    margin-bottom: 0.5rem;
}

.metric-label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.investment-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.02);
}

.investment-table th {
    padding: 1.75rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #3b82f6;
    border-bottom: 2px solid rgba(59, 130, 246, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.03);
}

.investment-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.asset-equity { 
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
    border-left: 4px solid #3b82f6;
}

.asset-realestate { 
    background: linear-gradient(90deg, rgba(34, 197, 94, 0.1), transparent);
    border-left: 4px solid #22c55e;
}

.asset-bonds { 
    background: linear-gradient(90deg, rgba(245, 158, 11, 0.1), transparent);
    border-left: 4px solid #f59e0b;
}

.investment-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: scale(1.01);
    transition: all 0.3s ease;
}

.asset-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.asset-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 15px;
    color: white;
}

.asset-details .asset-name {
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.asset-details .asset-category {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.allocation-info .allocation-percent {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.allocation-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.allocation-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1s ease-in-out;
}

.asset-equity .allocation-fill { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }
.asset-realestate .allocation-fill { background: linear-gradient(90deg, #22c55e, #16a34a); }
.asset-bonds .allocation-fill { background: linear-gradient(90deg, #f59e0b, #d97706); }

.holdings-list .holding {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.holdings-list .holding-count {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.return-metric {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.1rem;
}

.return-metric.positive {
    color: #10b981;
}

.return-metric.negative {
    color: #ef4444;
}

.return-arrow {
    font-size: 1.2rem;
}

.risk-indicator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.risk-dots {
    display: flex;
    gap: 0.25rem;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
}

.dot.active {
    background: currentColor;
}

.risk-indicator.high { color: #ef4444; }
.risk-indicator.medium { color: #f59e0b; }
.risk-indicator.low { color: #10b981; }

.risk-label {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.performance-chart {
    width: 100px;
    height: 40px;
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    overflow: hidden;
}

.chart-line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    border-radius: 5px 5px 0 0;
    transition: height 1s ease-in-out;
}

.asset-realestate .chart-line { background: linear-gradient(90deg, #22c55e, #16a34a); }
.asset-bonds .chart-line { background: linear-gradient(90deg, #f59e0b, #d97706); }

.chart-points {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.point {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: white;
    transform: translate(-50%, -50%);
}

.investment-actions {
    display: flex;
    gap: 0.5rem;
}

.invest-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.invest-btn.rebalance {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.invest-btn.analyze {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.invest-btn:hover {
    transform: translateY(-2px);
    background: rgba(59, 130, 246, 0.3);
}`,
    js: `// Investment portfolio interactions
document.querySelectorAll('.invest-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent;
        const assetName = this.closest('tr').querySelector('.asset-name').textContent;
        
        if (action === 'Rebalance') {
            alert(\`Rebalancing \${assetName} allocation...\`);
        } else {
            alert(\`Opening detailed analysis for \${assetName}...\`);
        }
    });
});

// Animate allocation bars and charts
document.addEventListener('DOMContentLoaded', function() {
    // Allocation bars
    const allocationBars = document.querySelectorAll('.allocation-fill');
    allocationBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
    
    // Performance charts
    const chartLines = document.querySelectorAll('.chart-line');
    chartLines.forEach(line => {
        const height = line.style.height;
        line.style.height = '0';
        setTimeout(() => {
            line.style.height = height;
        }, 800);
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 31: VIP MEMBERS
// ====================================================================
premium31: {
    html: `<div class="vip-members-container">
    <div class="vip-header">
        <div class="header-content">
            <h3>👑 Exclusive VIP Members</h3>
            <p class="header-subtitle">Premium Membership Tiers & Benefits</p>
        </div>
        <div class="vip-stats">
            <div class="vip-stat">
                <div class="stat-icon">💎</div>
                <div class="stat-info">
                    <div class="stat-value">42</div>
                    <div class="stat-label">Diamond Members</div>
                </div>
            </div>
            <div class="vip-stat">
                <div class="stat-icon">⭐</div>
                <div class="stat-info">
                    <div class="stat-value">128</div>
                    <div class="stat-label">Platinum Members</div>
                </div>
            </div>
            <div class="vip-stat">
                <div class="stat-icon">🔹</div>
                <div class="stat-info">
                    <div class="stat-value">256</div>
                    <div class="stat-label">Gold Members</div>
                </div>
            </div>
        </div>
    </div>
    <table class="vip-table">
        <thead>
            <tr>
                <th>Member</th>
                <th>Membership Tier</th>
                <th>Join Date</th>
                <th>Lifetime Value</th>
                <th>Benefits</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="member-diamond">
                <td>
                    <div class="member-info">
                        <div class="member-avatar">
                            <div class="avatar-diamond">JD</div>
                            <div class="vip-badge">👑</div>
                        </div>
                        <div class="member-details">
                            <div class="member-name">James Donovan</div>
                            <div class="member-email">james@donovan.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="tier-info diamond">
                        <span class="tier-icon">💎</span>
                        <span class="tier-name">Diamond</span>
                    </div>
                </td>
                <td>
                    <div class="join-date">
                        <div class="date">Jan 15, 2020</div>
                        <div class="duration">4.2 years</div>
                    </div>
                </td>
                <td>
                    <div class="lifetime-value">
                        <div class="value-amount">$250,000</div>
                        <div class="value-trend positive">+15% YoY</div>
                    </div>
                </td>
                <td>
                    <div class="benefits-list">
                        <span class="benefit">24/7 Support</span>
                        <span class="benefit">Personal Manager</span>
                        <span class="benefit">Exclusive Events</span>
                    </div>
                </td>
                <td>
                    <div class="member-status active">
                        <div class="status-indicator"></div>
                        Active
                    </div>
                </td>
                <td>
                    <div class="member-actions">
                        <button class="vip-btn contact">Contact</button>
                        <button class="vip-btn upgrade">Upgrade</button>
                    </div>
                </td>
            </tr>
            <tr class="member-platinum">
                <td>
                    <div class="member-info">
                        <div class="member-avatar">
                            <div class="avatar-platinum">SM</div>
                            <div class="vip-badge">⭐</div>
                        </div>
                        <div class="member-details">
                            <div class="member-name">Sarah Mitchell</div>
                            <div class="member-email">sarah@mitchell.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="tier-info platinum">
                        <span class="tier-icon">⭐</span>
                        <span class="tier-name">Platinum</span>
                    </div>
                </td>
                <td>
                    <div class="join-date">
                        <div class="date">Mar 22, 2021</div>
                        <div class="duration">2.8 years</div>
                    </div>
                </td>
                <td>
                    <div class="lifetime-value">
                        <div class="value-amount">$150,000</div>
                        <div class="value-trend positive">+22% YoY</div>
                    </div>
                </td>
                <td>
                    <div class="benefits-list">
                        <span class="benefit">Priority Support</span>
                        <span class="benefit">Event Access</span>
                        <span class="benefit">Early Access</span>
                    </div>
                </td>
                <td>
                    <div class="member-status active">
                        <div class="status-indicator"></div>
                        Active
                    </div>
                </td>
                <td>
                    <div class="member-actions">
                        <button class="vip-btn contact">Contact</button>
                        <button class="vip-btn upgrade">Upgrade</button>
                    </div>
                </td>
            </tr>
            <tr class="member-gold">
                <td>
                    <div class="member-info">
                        <div class="member-avatar">
                            <div class="avatar-gold">RC</div>
                            <div class="vip-badge">🔹</div>
                        </div>
                        <div class="member-details">
                            <div class="member-name">Robert Chen</div>
                            <div class="member-email">robert@chen.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="tier-info gold">
                        <span class="tier-icon">🔹</span>
                        <span class="tier-name">Gold</span>
                    </div>
                </td>
                <td>
                    <div class="join-date">
                        <div class="date">Aug 10, 2022</div>
                        <div class="duration">1.4 years</div>
                    </div>
                </td>
                <td>
                    <div class="lifetime-value">
                        <div class="value-amount">$75,000</div>
                        <div class="value-trend positive">+18% YoY</div>
                    </div>
                </td>
                <td>
                    <div class="benefits-list">
                        <span class="benefit">Standard Support</span>
                        <span class="benefit">Basic Events</span>
                        <span class="benefit">Member Discounts</span>
                    </div>
                </td>
                <td>
                    <div class="member-status pending">
                        <div class="status-indicator"></div>
                        Renewal Due
                    </div>
                </td>
                <td>
                    <div class="member-actions">
                        <button class="vip-btn contact">Contact</button>
                        <button class="vip-btn upgrade">Upgrade</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.vip-members-container {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.vip-header {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
}

.header-content h3 {
    margin: 0 0 0.5rem 0;
    color: #fbbf24;
    font-size: 2rem;
    font-weight: 700;
}

.header-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    margin: 0 0 2rem 0;
}

.vip-stats {
    display: flex;
    gap: 2rem;
}

.vip-stat {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-icon {
    font-size: 2rem;
}

.stat-info .stat-value {
    font-size: 1.5rem;
    font-weight: 800;
    color: #fbbf24;
    margin-bottom: 0.25rem;
}

.stat-info .stat-label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.vip-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.02);
}

.vip-table th {
    padding: 1.75rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #fbbf24;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.03);
}

.vip-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.member-diamond { 
    background: linear-gradient(90deg, rgba(251, 191, 36, 0.15), transparent);
    border-left: 4px solid #fbbf24;
}

.member-platinum { 
    background: linear-gradient(90deg, rgba(156, 163, 175, 0.1), transparent);
    border-left: 4px solid #9ca3af;
}

.member-gold { 
    background: linear-gradient(90deg, rgba(180, 83, 9, 0.1), transparent);
    border-left: 4px solid #b45309;
}

.vip-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
    transition: all 0.3s ease;
}

.member-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.member-avatar {
    position: relative;
}

.avatar-diamond, .avatar-platinum, .avatar-gold {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: white;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.avatar-diamond {
    background: linear-gradient(135deg, #fbbf24, #d97706);
    border: 2px solid #fbbf24;
}

.avatar-platinum {
    background: linear-gradient(135deg, #9ca3af, #6b7280);
    border: 2px solid #9ca3af;
}

.avatar-gold {
    background: linear-gradient(135deg, #b45309, #78350f);
    border: 2px solid #b45309;
}

.vip-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 25px;
    height: 25px;
    background: #fbbf24;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border: 2px solid #1e293b;
}

.member-platinum .vip-badge { background: #9ca3af; }
.member-gold .vip-badge { background: #b45309; }

.member-details .member-name {
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.member-details .member-email {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.tier-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tier-info.diamond {
    background: rgba(251, 191, 36, 0.2);
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.3);
}

.tier-info.platinum {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
    border: 1px solid rgba(156, 163, 175, 0.3);
}

.tier-info.gold {
    background: rgba(180, 83, 9, 0.2);
    color: #b45309;
    border: 1px solid rgba(180, 83, 9, 0.3);
}

.join-date .date {
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.join-date .duration {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
}

.lifetime-value .value-amount {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.value-trend {
    font-size: 0.875rem;
    font-weight: 600;
}

.value-trend.positive {
    color: #10b981;
}

.benefits-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.benefit {
    padding: 0.5rem 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
}

.member-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: rgba(255, 255, 255, 0.1);
}

.member-status.active {
    background: rgba(34, 197, 94, 0.2);
    color: #10b981;
}

.member-status.pending {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.member-status.active .status-indicator { background: #10b981; }
.member-status.pending .status-indicator { background: #f59e0b; }

.member-actions {
    display: flex;
    gap: 0.5rem;
}

.vip-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.vip-btn.contact {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.vip-btn.upgrade {
    background: rgba(251, 191, 36, 0.2);
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.3);
}

.vip-btn:hover {
    transform: translateY(-2px);
    background: rgba(251, 191, 36, 0.3);
}`,
    js: `// VIP members interactions
document.querySelectorAll('.vip-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent;
        const memberName = this.closest('tr').querySelector('.member-name').textContent;
        const memberTier = this.closest('tr').querySelector('.tier-name').textContent;
        
        if (action === 'Contact') {
            alert(\`Contacting \${memberName} (\${memberTier} Member)...\`);
        } else {
            alert(\`Initiating upgrade process for \${memberName}...\`);
        }
    });
});`
},
// ====================================================================
// BUSINESS TEMPLATE 32: SALES PIPELINE
// ====================================================================
business32: {
    html: `<div class="sales-pipeline-container">
    <div class="pipeline-header">
        <h3>📊 Sales Pipeline Dashboard</h3>
        <div class="pipeline-stats">
            <div class="stat">
                <div class="stat-value">$2.8M</div>
                <div class="stat-label">Total Pipeline</div>
            </div>
            <div class="stat">
                <div class="stat-value">42</div>
                <div class="stat-label">Active Deals</div>
            </div>
            <div class="stat">
                <div class="stat-value">28%</div>
                <div class="stat-label">Win Rate</div>
            </div>
        </div>
    </div>
    <table class="sales-pipeline-table">
        <thead>
            <tr>
                <th>Deal Name</th>
                <th>Company</th>
                <th>Deal Value</th>
                <th>Pipeline Stage</th>
                <th>Probability</th>
                <th>Close Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="deal-negotiation">
                <td>
                    <div class="deal-info">
                        <div class="deal-icon">💼</div>
                        <div class="deal-details">
                            <div class="deal-name">Enterprise Software License</div>
                            <div class="deal-id">#DEAL-2024-001</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="company-info">
                        <div class="company-name">TechCorp Global</div>
                        <div class="industry">Technology</div>
                    </div>
                </td>
                <td class="deal-value">
                    <div class="value-amount">$250,000</div>
                    <div class="value-currency">USD</div>
                </td>
                <td>
                    <div class="pipeline-stage negotiation">
                        <div class="stage-progress"></div>
                        <span class="stage-text">Negotiation</span>
                    </div>
                </td>
                <td>
                    <div class="probability-metric">
                        <div class="probability-value">75%</div>
                        <div class="probability-bar">
                            <div class="probability-fill" style="width: 75%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="close-date">
                        <div class="date">Mar 15, 2024</div>
                        <div class="timeline">In 30 days</div>
                    </div>
                </td>
                <td>
                    <div class="deal-actions">
                        <button class="action-btn update">Update</button>
                        <button class="action-btn contact">Contact</button>
                    </div>
                </td>
            </tr>
            <tr class="deal-proposal">
                <td>
                    <div class="deal-info">
                        <div class="deal-icon">📑</div>
                        <div class="deal-details">
                            <div class="deal-name">SMB Service Contract</div>
                            <div class="deal-id">#DEAL-2024-002</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="company-info">
                        <div class="company-name">Startup Innovations</div>
                        <div class="industry">Startup</div>
                    </div>
                </td>
                <td class="deal-value">
                    <div class="value-amount">$50,000</div>
                        <div class="value-currency">USD</div>
                    </td>
                    <td>
                        <div class="pipeline-stage proposal">
                            <div class="stage-progress"></div>
                            <span class="stage-text">Proposal</span>
                        </div>
                    </td>
                    <td>
                        <div class="probability-metric">
                            <div class="probability-value">40%</div>
                            <div class="probability-bar">
                                <div class="probability-fill" style="width: 40%"></div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="close-date">
                            <div class="date">Apr 30, 2024</div>
                            <div class="timeline">In 75 days</div>
                        </div>
                    </td>
                    <td>
                        <div class="deal-actions">
                            <button class="action-btn update">Update</button>
                            <button class="action-btn contact">Contact</button>
                        </div>
                    </td>
                </tr>
                <tr class="deal-qualification">
                    <td>
                        <div class="deal-info">
                            <div class="deal-icon">🔍</div>
                            <div class="deal-details">
                                <div class="deal-name">Enterprise Support Package</div>
                                <div class="deal-id">#DEAL-2024-003</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="company-info">
                            <div class="company-name">Enterprise Solutions Ltd</div>
                            <div class="industry">Consulting</div>
                        </div>
                    </td>
                    <td class="deal-value">
                        <div class="value-amount">$120,000</div>
                        <div class="value-currency">USD</div>
                    </td>
                    <td>
                        <div class="pipeline-stage qualification">
                            <div class="stage-progress"></div>
                            <span class="stage-text">Qualification</span>
                        </div>
                    </td>
                    <td>
                        <div class="probability-metric">
                            <div class="probability-value">25%</div>
                            <div class="probability-bar">
                                <div class="probability-fill" style="width: 25%"></div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="close-date">
                            <div class="date">May 15, 2024</div>
                            <div class="timeline">In 90 days</div>
                        </div>
                    </td>
                    <td>
                        <div class="deal-actions">
                            <button class="action-btn update">Update</button>
                            <button class="action-btn contact">Contact</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pipeline-footer">
            <div class="pipeline-legend">
                <div class="legend-item">
                    <span class="legend-color qualification"></span>
                    <span>Qualification (20%)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color proposal"></span>
                    <span>Proposal (40%)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color negotiation"></span>
                    <span>Negotiation (75%)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color closed"></span>
                    <span>Closed Won (100%)</span>
                </div>
            </div>
        </div>
    </div>`,
    css: `.sales-pipeline-container {
        background: white;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid #e5e7eb;
    }

    .pipeline-header {
        padding: 2rem;
        background: linear-gradient(135deg, #1e40af, #3730a3);
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pipeline-header h3 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 700;
    }

    .pipeline-stats {
        display: flex;
        gap: 2rem;
    }

    .stat {
        text-align: center;
    }

    .stat-value {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 0.25rem;
    }

    .stat-label {
        font-size: 0.875rem;
        opacity: 0.9;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .sales-pipeline-table {
        width: 100%;
        border-collapse: collapse;
    }

    .sales-pipeline-table th {
        padding: 1.5rem 2rem;
        text-align: left;
        font-weight: 600;
        color: #374151;
        border-bottom: 2px solid #e5e7eb;
        background: #f8fafc;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .sales-pipeline-table td {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #f3f4f6;
        color: #6b7280;
    }

    .deal-negotiation { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }
    .deal-proposal { background: linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent); }
    .deal-qualification { background: linear-gradient(90deg, rgba(239, 68, 68, 0.05), transparent); }

    .sales-pipeline-table tr:hover {
        background: #f9fafb;
        transform: translateX(5px);
        transition: all 0.3s ease;
    }

    .deal-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .deal-icon {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        color: white;
    }

    .deal-details .deal-name {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }

    .deal-details .deal-id {
        font-size: 0.875rem;
        color: #9ca3af;
    }

    .company-info .company-name {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }

    .company-info .industry {
        font-size: 0.875rem;
        color: #6b7280;
        background: #f3f4f6;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        display: inline-block;
    }

    .deal-value .value-amount {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }

    .deal-value .value-currency {
        font-size: 0.875rem;
        color: #6b7280;
    }

    .pipeline-stage {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.875rem;
        position: relative;
        overflow: hidden;
    }

    .stage-progress {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0%;
        transition: width 0.3s ease;
    }

    .pipeline-stage.qualification {
        background: rgba(239, 68, 68, 0.1);
        color: #dc2626;
    }
    .pipeline-stage.qualification .stage-progress {
        background: rgba(239, 68, 68, 0.2);
        width: 20%;
    }

    .pipeline-stage.proposal {
        background: rgba(245, 158, 11, 0.1);
        color: #d97706;
    }
    .pipeline-stage.proposal .stage-progress {
        background: rgba(245, 158, 11, 0.2);
        width: 40%;
    }

    .pipeline-stage.negotiation {
        background: rgba(34, 197, 94, 0.1);
        color: #16a34a;
    }
    .pipeline-stage.negotiation .stage-progress {
        background: rgba(34, 197, 94, 0.2);
        width: 75%;
    }

    .probability-metric .probability-value {
        font-size: 1.1rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }

    .probability-bar {
        width: 100%;
        height: 6px;
        background: #e5e7eb;
        border-radius: 10px;
        overflow: hidden;
    }

    .probability-fill {
        height: 100%;
        border-radius: 10px;
        background: linear-gradient(90deg, #ef4444, #f59e0b, #22c55e);
        transition: width 1s ease-in-out;
    }

    .close-date .date {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }

    .close-date .timeline {
        font-size: 0.875rem;
        color: #6b7280;
    }

    .deal-actions {
        display: flex;
        gap: 0.5rem;
    }

    .action-btn {
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .action-btn.update {
        background: #3b82f6;
        color: white;
    }

    .action-btn.contact {
        background: #f3f4f6;
        color: #374151;
        border: 1px solid #d1d5db;
    }

    .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .pipeline-footer {
        padding: 1.5rem 2rem;
        background: #f8fafc;
        border-top: 1px solid #e5e7eb;
    }

    .pipeline-legend {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: #6b7280;
    }

    .legend-color {
        width: 12px;
        height: 12px;
        border-radius: 3px;
    }

    .legend-color.qualification { background: #ef4444; }
    .legend-color.proposal { background: #f59e0b; }
    .legend-color.negotiation { background: #22c55e; }
    .legend-color.closed { background: #16a34a; }`,
    js: `// Sales pipeline interactions
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            const dealName = this.closest('tr').querySelector('.deal-name').textContent;
            
            if (action === 'Update') {
                alert(\`Updating deal: \${dealName}\`);
            } else {
                alert(\`Contacting client for: \${dealName}\`);
            }
        });
    });

    // Animate probability bars
    document.addEventListener('DOMContentLoaded', function() {
        const bars = document.querySelectorAll('.probability-fill');
        bars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    });`
},

// ====================================================================
// BUSINESS TEMPLATE 33: INVENTORY MANAGEMENT
// ====================================================================
business33: {
    html: `<div class="inventory-management-container">
    <div class="inventory-header">
        <h3>📦 Inventory Management System</h3>
        <div class="inventory-controls">
            <button class="control-btn add-product">+ Add Product</button>
            <button class="control-btn export">Export CSV</button>
        </div>
    </div>
    <table class="inventory-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="product-instock">
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <div class="image-placeholder">💻</div>
                        </div>
                        <div class="product-details">
                            <div class="product-name">MacBook Pro 16"</div>
                            <div class="product-brand">Apple</div>
                        </div>
                    </div>
                </td>
                <td class="sku-code">MBP16-2024</td>
                <td><span class="category-tag electronics">Electronics</span></td>
                <td>
                    <div class="stock-info">
                        <div class="stock-quantity">45 units</div>
                        <div class="stock-value">$67,500</div>
                    </div>
                </td>
                <td class="reorder-level">10 units</td>
                <td>
                    <div class="stock-status in-stock">
                        <span class="status-dot"></span>
                        In Stock
                    </div>
                </td>
                <td>
                    <div class="update-info">
                        <div class="update-date">2024-01-15</div>
                        <div class="update-time">14:30 PM</div>
                    </div>
                </td>
                <td>
                    <div class="inventory-actions">
                        <button class="inv-btn restock">Restock</button>
                        <button class="inv-btn edit">Edit</button>
                    </div>
                </td>
            </tr>
            <tr class="product-lowstock">
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <div class="image-placeholder">🖱️</div>
                        </div>
                        <div class="product-details">
                            <div class="product-name">Wireless Mouse X1</div>
                            <div class="product-brand">Logitech</div>
                        </div>
                    </div>
                </td>
                <td class="sku-code">WM-X1-2024</td>
                <td><span class="category-tag accessories">Accessories</span></td>
                <td>
                    <div class="stock-info">
                        <div class="stock-quantity">8 units</div>
                        <div class="stock-value">$400</div>
                    </div>
                </td>
                <td class="reorder-level">15 units</td>
                <td>
                    <div class="stock-status low-stock">
                        <span class="status-dot"></span>
                        Low Stock
                    </div>
                </td>
                <td>
                    <div class="update-info">
                        <div class="update-date">2024-01-14</div>
                        <div class="update-time">09:15 AM</div>
                    </div>
                </td>
                <td>
                    <div class="inventory-actions">
                        <button class="inv-btn restock urgent">Restock</button>
                        <button class="inv-btn edit">Edit</button>
                    </div>
                </td>
            </tr>
            <tr class="product-outofstock">
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <div class="image-placeholder">⌨️</div>
                        </div>
                        <div class="product-details">
                            <div class="product-name">Mechanical Keyboard Pro</div>
                            <div class="product-brand">Keychron</div>
                        </div>
                    </div>
                </td>
                <td class="sku-code">MK-PRO-2024</td>
                <td><span class="category-tag electronics">Electronics</span></td>
                <td>
                    <div class="stock-info">
                        <div class="stock-quantity">0 units</div>
                        <div class="stock-value">$0</div>
                    </div>
                </td>
                <td class="reorder-level">20 units</td>
                <td>
                    <div class="stock-status out-of-stock">
                        <span class="status-dot"></span>
                        Out of Stock
                    </div>
                </td>
                <td>
                    <div class="update-info">
                        <div class="update-date">2024-01-10</div>
                        <div class="update-time">16:45 PM</div>
                    </div>
                </td>
                <td>
                    <div class="inventory-actions">
                        <button class="inv-btn restock critical">Restock</button>
                        <button class="inv-btn edit">Edit</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.inventory-management-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.inventory-header {
    padding: 2rem;
    background: linear-gradient(135deg, #059669, #047857);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.inventory-header h3 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
}

.inventory-controls {
    display: flex;
    gap: 1rem;
}

.control-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.control-btn.add-product {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(10px);
}

.control-btn.export {
    background: white;
    color: #059669;
}

.control-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.inventory-table {
    width: 100%;
    border-collapse: collapse;
}

.inventory-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f8fafc;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.inventory-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.product-instock { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }
.product-lowstock { background: linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent); }
.product-outofstock { background: linear-gradient(90deg, rgba(239, 68, 68, 0.05), transparent); }

.inventory-table tr:hover {
    background: #f9fafb;
    transform: scale(1.01);
    transition: all 0.3s ease;
}

.product-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.product-image .image-placeholder {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
}

.product-details .product-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.product-details .product-brand {
    font-size: 0.875rem;
    color: #6b7280;
}

.sku-code {
    font-family: 'Courier New', monospace;
    font-weight: 600;
    color: #374151;
    background: #f3f4f6;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
}

.category-tag {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.category-tag.electronics {
    background: rgba(59, 130, 246, 0.1);
    color: #1d4ed8;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.category-tag.accessories {
    background: rgba(168, 85, 247, 0.1);
    color: #7c3aed;
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.stock-info .stock-quantity {
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.stock-info .stock-value {
    font-size: 0.875rem;
    color: #059669;
    font-weight: 600;
}

.reorder-level {
    font-weight: 600;
    color: #6b7280;
}

.stock-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stock-status.in-stock {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
}

.stock-status.low-stock {
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
}

.stock-status.out-of-stock {
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.stock-status.in-stock .status-dot { background: #16a34a; }
.stock-status.low-stock .status-dot { background: #d97706; }
.stock-status.out-of-stock .status-dot { background: #dc2626; }

.update-info .update-date {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.update-info .update-time {
    font-size: 0.875rem;
    color: #6b7280;
}

.inventory-actions {
    display: flex;
    gap: 0.5rem;
}

.inv-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.inv-btn.restock {
    background: #3b82f6;
    color: white;
}

.inv-btn.restock.urgent {
    background: #f59e0b;
    animation: pulse 1.5s infinite;
}

.inv-btn.restock.critical {
    background: #ef4444;
    animation: pulse 1s infinite;
}

.inv-btn.edit {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
}

.inv-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}`,
    js: `// Inventory management interactions
    document.querySelectorAll('.inv-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            const productName = this.closest('tr').querySelector('.product-name').textContent;
            
            if (action === 'Restock') {
                alert(\`Initiating restock for: \${productName}\`);
            } else {
                alert(\`Editing product: \${productName}\`);
            }
        });
    });

    document.querySelector('.control-btn.add-product').addEventListener('click', function() {
        alert('Opening add product form...');
    });

    document.querySelector('.control-btn.export').addEventListener('click', function() {
        alert('Exporting inventory data to CSV...');
    });`
},

// ====================================================================
// BUSINESS TEMPLATE 34: CUSTOMER SUPPORT
// ====================================================================
business34: {
    html: `<div class="customer-support-container">
    <div class="support-header">
        <h3>🎯 Customer Support Dashboard</h3>
        <div class="support-metrics">
            <div class="metric">
                <div class="metric-value">15</div>
                <div class="metric-label">Open Tickets</div>
            </div>
            <div class="metric">
                <div class="metric-value">4.2h</div>
                <div class="metric-label">Avg. Response</div>
            </div>
            <div class="metric">
                <div class="metric-value">92%</div>
                <div class="metric-label">Satisfaction</div>
            </div>
        </div>
    </div>
    <table class="support-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Customer</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="ticket-high">
                <td class="ticket-id">#TSK-2024-001</td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">John Corporation</div>
                        <div class="customer-tier">Enterprise</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">
                        <div class="subject-text">Server Downtime - Production Issue</div>
                        <div class="subject-category">Technical</div>
                    </div>
                </td>
                <td>
                    <div class="priority-level high">
                        <span class="priority-dot"></span>
                        High
                    </div>
                </td>
                <td>
                    <div class="ticket-status open">
                        <span class="status-indicator"></span>
                        Open
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-name">Sarah Tech</div>
                        <div class="assignee-role">Senior Support</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-date">
                        <div class="date">2024-01-15</div>
                        <div class="time">14:30 PM</div>
                    </div>
                </td>
                <td>
                    <div class="support-actions">
                        <button class="support-btn view">View</button>
                        <button class="support-btn assign">Assign</button>
                    </div>
                </td>
            </tr>
            <tr class="ticket-medium">
                <td class="ticket-id">#TSK-2024-002</td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Startup Innovations</div>
                        <div class="customer-tier">Business</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">
                        <div class="subject-text">Billing Inquiry - Invoice Discrepancy</div>
                        <div class="subject-category">Billing</div>
                    </div>
                </td>
                <td>
                    <div class="priority-level medium">
                        <span class="priority-dot"></span>
                        Medium
                    </div>
                </td>
                <td>
                    <div class="ticket-status in-progress">
                        <span class="status-indicator"></span>
                        In Progress
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-name">Mike Finance</div>
                        <div class="assignee-role">Billing Specialist</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-date">
                        <div class="date">2024-01-14</div>
                        <div class="time">09:15 AM</div>
                    </div>
                </td>
                <td>
                    <div class="support-actions">
                        <button class="support-btn view">View</button>
                        <button class="support-btn assign">Reassign</button>
                    </div>
                </td>
            </tr>
            <tr class="ticket-low">
                <td class="ticket-id">#TSK-2024-003</td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Small Business Ltd</div>
                        <div class="customer-tier">Standard</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">
                        <div class="subject-text">Feature Request - New Dashboard</div>
                        <div class="subject-category">Feature</div>
                    </div>
                </td>
                <td>
                    <div class="priority-level low">
                        <span class="priority-dot"></span>
                        Low
                    </div>
                </td>
                <td>
                    <div class="ticket-status pending">
                        <span class="status-indicator"></span>
                        Pending
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-name">Unassigned</div>
                        <div class="assignee-role">-</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-date">
                        <div class="date">2024-01-13</div>
                        <div class="time">16:45 PM</div>
                    </div>
                </td>
                <td>
                    <div class="support-actions">
                        <button class="support-btn view">View</button>
                        <button class="support-btn assign">Assign</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.customer-support-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.support-header {
    padding: 2rem;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.support-header h3 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
}

.support-metrics {
    display: flex;
    gap: 2rem;
}

.metric {
    text-align: center;
}

.metric-value {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
}

.metric-label {
    font-size: 0.875rem;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.support-table {
    width: 100%;
    border-collapse: collapse;
}

.support-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f8fafc;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.support-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.ticket-high { background: linear-gradient(90deg, rgba(239, 68, 68, 0.05), transparent); }
.ticket-medium { background: linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent); }
.ticket-low { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }

.support-table tr:hover {
    background: #f9fafb;
    transform: translateX(5px);
    transition: all 0.3s ease;
}

.ticket-id {
    font-family: 'Courier New', monospace;
    font-weight: 700;
    color: #7c3aed;
    background: rgba(124, 58, 237, 0.1);
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
}

.customer-info .customer-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.customer-info .customer-tier {
    font-size: 0.75rem;
    color: #6b7280;
    background: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 600;
}

.ticket-subject .subject-text {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.ticket-subject .subject-category {
    font-size: 0.75rem;
    color: #6b7280;
    background: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
}

.priority-level {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.priority-level.high {
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
}

.priority-level.medium {
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
}

.priority-level.low {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
}

.priority-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.priority-level.high .priority-dot { background: #dc2626; }
.priority-level.medium .priority-dot { background: #d97706; }
.priority-level.low .priority-dot { background: #16a34a; }

.ticket-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ticket-status.open {
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
}

.ticket-status.in-progress {
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
}

.ticket-status.pending {
    background: rgba(156, 163, 175, 0.1);
    color: #6b7280;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.ticket-status.open .status-indicator { background: #dc2626; }
.ticket-status.in-progress .status-indicator { background: #d97706; }
.ticket-status.pending .status-indicator { background: #6b7280; }

.assignee-info .assignee-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.assignee-info .assignee-role {
    font-size: 0.75rem;
    color: #6b7280;
}

.ticket-date .date {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.ticket-date .time {
    font-size: 0.875rem;
    color: #6b7280;
}

.support-actions {
    display: flex;
    gap: 0.5rem;
}

.support-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.support-btn.view {
    background: #7c3aed;
    color: white;
}

.support-btn.assign {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
}

.support-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`,
    js: `// Customer support interactions
    document.querySelectorAll('.support-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            const ticketId = this.closest('tr').querySelector('.ticket-id').textContent;
            const subject = this.closest('tr').querySelector('.subject-text').textContent;
            
            if (action === 'View') {
                alert(\`Viewing ticket \${ticketId}: \${subject}\`);
            } else {
                alert(\`Assigning ticket \${ticketId} to support agent...\`);
            }
        });
    });`
},

// ====================================================================
// BUSINESS TEMPLATE 35: HR MANAGEMENT
// ====================================================================
business35: {
    html: `<div class="hr-management-container">
    <div class="hr-header">
        <h3>👥 Human Resources Management</h3>
        <div class="hr-stats">
            <div class="stat">
                <div class="stat-value">142</div>
                <div class="stat-label">Total Employees</div>
            </div>
            <div class="stat">
                <div class="stat-value">15</div>
                <div class="stat-label">Departments</div>
            </div>
            <div class="stat">
                <div class="stat-value">8</div>
                <div class="stat-label">New Hires</div>
            </div>
        </div>
    </div>
    <table class="hr-table">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Position</th>
                <th>Join Date</th>
                <th>Status</th>
                <th>Manager</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="employee-active">
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <div class="avatar-initials">MJ</div>
                            <div class="availability online"></div>
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Mike Johnson</div>
                            <div class="employee-email">mike.johnson@company.com</div>
                        </div>
                    </div>
                </td>
                <td class="employee-id">EMP-2020-045</td>
                <td>
                    <div class="department-info">
                        <span class="department-tag engineering">Engineering</span>
                    </div>
                </td>
                <td>
                    <div class="position-info">
                        <div class="position-title">Senior Developer</div>
                        <div class="position-level">L3</div>
                    </div>
                </td>
                <td>
                    <div class="join-date">
                        <div class="date">2020-03-15</div>
                        <div class="tenure">3.8 years</div>
                    </div>
                </td>
                <td>
                    <div class="employment-status active">
                        <span class="status-dot"></span>
                        Active
                    </div>
                </td>
                <td>
                    <div class="manager-info">
                        <div class="manager-name">Sarah Chen</div>
                        <div class="manager-title">Tech Lead</div>
                    </div>
                </td>
                <td>
                    <div class="hr-actions">
                        <button class="hr-btn profile">Profile</button>
                        <button class="hr-btn review">Review</button>
                    </div>
                </td>
            </tr>
            <tr class="employee-leave">
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <div class="avatar-initials">LW</div>
                            <div class="availability away"></div>
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Lisa Wang</div>
                            <div class="employee-email">lisa.wang@company.com</div>
                        </div>
                    </div>
                </td>
                <td class="employee-id">EMP-2021-128</td>
                <td>
                    <div class="department-info">
                        <span class="department-tag marketing">Marketing</span>
                    </div>
                </td>
                <td>
                    <div class="position-info">
                        <div class="position-title">Marketing Manager</div>
                        <div class="position-level">L4</div>
                    </div>
                </td>
                <td>
                    <div class="join-date">
                        <div class="date">2021-08-22</div>
                        <div class="tenure">2.4 years</div>
                    </div>
                </td>
                <td>
                    <div class="employment-status on-leave">
                        <span class="status-dot"></span>
                        On Leave
                    </div>
                </td>
                <td>
                    <div class="manager-info">
                        <div class="manager-name">Robert Kim</div>
                        <div class="manager-title">Director</div>
                    </div>
                </td>
                <td>
                    <div class="hr-actions">
                        <button class="hr-btn profile">Profile</button>
                        <button class="hr-btn review">Review</button>
                    </div>
                </td>
            </tr>
            <tr class="employee-probation">
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <div class="avatar-initials">AS</div>
                            <div class="availability online"></div>
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Alex Smith</div>
                            <div class="employee-email">alex.smith@company.com</div>
                        </div>
                    </div>
                </td>
                <td class="employee-id">EMP-2023-256</td>
                <td>
                    <div class="department-info">
                        <span class="department-tag sales">Sales</span>
                    </div>
                </td>
                <td>
                    <div class="position-info">
                        <div class="position-title">Sales Associate</div>
                        <div class="position-level">L1</div>
                    </div>
                </td>
                <td>
                    <div class="join-date">
                        <div class="date">2023-11-10</div>
                        <div class="tenure">0.2 years</div>
                    </div>
                </td>
                <td>
                    <div class="employment-status probation">
                        <span class="status-dot"></span>
                        Probation
                    </div>
                </td>
                <td>
                    <div class="manager-info">
                        <div class="manager-name">David Wilson</div>
                        <div class="manager-title">Sales Manager</div>
                    </div>
                </td>
                <td>
                    <div class="hr-actions">
                        <button class="hr-btn profile">Profile</button>
                        <button class="hr-btn review">Review</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.hr-management-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.hr-header {
    padding: 2rem;
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hr-header h3 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
}

.hr-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    text-align: center;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.hr-table {
    width: 100%;
    border-collapse: collapse;
}

.hr-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f8fafc;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.hr-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.employee-active { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }
.employee-leave { background: linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent); }
.employee-probation { background: linear-gradient(90deg, rgba(59, 130, 246, 0.05), transparent); }

.hr-table tr:hover {
    background: #f9fafb;
    transform: scale(1.01);
    transition: all 0.3s ease;
}

.employee-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.employee-avatar {
    position: relative;
}

.avatar-initials {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: white;
}

.availability {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
}

.availability.online { background: #10b981; }
.availability.away { background: #f59e0b; }

.employee-details .employee-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.employee-details .employee-email {
    font-size: 0.875rem;
    color: #6b7280;
}

.employee-id {
    font-family: 'Courier New', monospace;
    font-weight: 600;
    color: #374151;
    background: #f3f4f6;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
}

.department-tag {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.department-tag.engineering {
    background: rgba(59, 130, 246, 0.1);
    color: #1d4ed8;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.department-tag.marketing {
    background: rgba(168, 85, 247, 0.1);
    color: #7c3aed;
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.department-tag.sales {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
    border: 1px solid rgba(34, 197, 94, 0.2);
}

.position-info .position-title {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.position-info .position-level {
    font-size: 0.75rem;
    color: #6b7280;
    background: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
    font-weight: 600;
}

.join-date .date {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.join-date .tenure {
    font-size: 0.875rem;
    color: #6b7280;
}

.employment-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.employment-status.active {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
}

.employment-status.on-leave {
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
}

.employment-status.probation {
    background: rgba(59, 130, 246, 0.1);
    color: #1d4ed8;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.employment-status.active .status-dot { background: #16a34a; }
.employment-status.on-leave .status-dot { background: #d97706; }
.employment-status.probation .status-dot { background: #1d4ed8; }

.manager-info .manager-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.manager-info .manager-title {
    font-size: 0.75rem;
    color: #6b7280;
}

.hr-actions {
    display: flex;
    gap: 0.5rem;
}

.hr-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.hr-btn.profile {
    background: #3b82f6;
    color: white;
}

.hr-btn.review {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
}

.hr-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`,
    js: `// HR management interactions
    document.querySelectorAll('.hr-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            const employeeName = this.closest('tr').querySelector('.employee-name').textContent;
            
            if (action === 'Profile') {
                alert(\`Opening profile for: \${employeeName}\`);
            } else {
                alert(\`Initiating performance review for: \${employeeName}\`);
            }
        });
    });`
},

// ====================================================================
// BUSINESS TEMPLATE 36: MARKETING CAMPAIGNS
// ====================================================================
business36: {
    html: `<div class="marketing-campaigns-container">
    <div class="marketing-header">
        <h3>📢 Marketing Campaigns Dashboard</h3>
        <div class="campaign-filters">
            <select class="filter-select">
                <option>All Channels</option>
                <option>Social Media</option>
                <option>Email Marketing</option>
                <option>PPC</option>
            </select>
            <select class="filter-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Completed</option>
                <option>Planning</option>
            </select>
        </div>
    </div>
    <table class="marketing-table">
        <thead>
            <tr>
                <th>Campaign</th>
                <th>Channel</th>
                <th>Budget</th>
                <th>Spent</th>
                <th>Impressions</th>
                <th>Conversions</th>
                <th>ROI</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="campaign-active">
                <td>
                    <div class="campaign-info">
                        <div class="campaign-icon">🔥</div>
                        <div class="campaign-details">
                            <div class="campaign-name">Summer Sale 2024</div>
                            <div class="campaign-period">Jun 1 - Jun 30, 2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="channel-info">
                        <span class="channel-tag social">Social Media</span>
                    </div>
                </td>
                <td>
                    <div class="budget-info">
                        <div class="budget-amount">$25,000</div>
                        <div class="budget-type">Total</div>
                    </div>
                </td>
                <td>
                    <div class="spent-info">
                        <div class="spent-amount">$18,500</div>
                        <div class="spent-percent">74% spent</div>
                    </div>
                </td>
                <td>
                    <div class="impressions-metric">
                        <div class="metric-value">2.5M</div>
                        <div class="metric-label">Impressions</div>
                    </div>
                </td>
                <td>
                    <div class="conversions-metric">
                        <div class="metric-value">15,842</div>
                        <div class="metric-label">Conversions</div>
                    </div>
                </td>
                <td>
                    <div class="roi-metric positive">
                        <div class="roi-value">185%</div>
                        <div class="roi-bar">
                            <div class="roi-fill" style="width: 85%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="campaign-status active">
                        <span class="status-dot"></span>
                        Active
                    </div>
                </td>
                <td>
                    <div class="marketing-actions">
                        <button class="marketing-btn analyze">Analyze</button>
                        <button class="marketing-btn optimize">Optimize</button>
                    </div>
                </td>
            </tr>
            <tr class="campaign-completed">
                <td>
                    <div class="campaign-info">
                        <div class="campaign-icon">🚀</div>
                        <div class="campaign-details">
                            <div class="campaign-name">Product Launch Q1</div>
                            <div class="campaign-period">Jan 15 - Feb 15, 2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="channel-info">
                        <span class="channel-tag email">Email Marketing</span>
                    </div>
                </td>
                <td>
                    <div class="budget-info">
                        <div class="budget-amount">$15,000</div>
                        <div class="budget-type">Total</div>
                    </div>
                </td>
                <td>
                    <div class="spent-info">
                        <div class="spent-amount">$15,000</div>
                        <div class="spent-percent">100% spent</div>
                    </div>
                </td>
                <td>
                    <div class="impressions-metric">
                        <div class="metric-value">1.2M</div>
                        <div class="metric-label">Impressions</div>
                    </div>
                </td>
                <td>
                    <div class="conversions-metric">
                        <div class="metric-value">8,456</div>
                        <div class="metric-label">Conversions</div>
                    </div>
                </td>
                <td>
                    <div class="roi-metric positive">
                        <div class="roi-value">220%</div>
                        <div class="roi-bar">
                            <div class="roi-fill" style="width: 95%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="campaign-status completed">
                        <span class="status-dot"></span>
                        Completed
                    </div>
                </td>
                <td>
                    <div class="marketing-actions">
                        <button class="marketing-btn analyze">Report</button>
                        <button class="marketing-btn optimize">Replicate</button>
                    </div>
                </td>
            </tr>
            <tr class="campaign-planning">
                <td>
                    <div class="campaign-info">
                        <div class="campaign-icon">🎯</div>
                        <div class="campaign-details">
                            <div class="campaign-name">Holiday Campaign 2024</div>
                            <div class="campaign-period">Nov 15 - Dec 31, 2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="channel-info">
                        <span class="channel-tag ppc">PPC</span>
                    </div>
                </td>
                <td>
                    <div class="budget-info">
                        <div class="budget-amount">$50,000</div>
                        <div class="budget-type">Total</div>
                    </div>
                </td>
                <td>
                    <div class="spent-info">
                        <div class="spent-amount">$0</div>
                        <div class="spent-percent">0% spent</div>
                    </div>
                </td>
                <td>
                    <div class="impressions-metric">
                        <div class="metric-value">-</div>
                        <div class="metric-label">Impressions</div>
                    </div>
                </td>
                <td>
                    <div class="conversions-metric">
                        <div class="metric-value">-</div>
                        <div class="metric-label">Conversions</div>
                    </div>
                </td>
                <td>
                    <div class="roi-metric planned">
                        <div class="roi-value">-</div>
                        <div class="roi-bar">
                            <div class="roi-fill" style="width: 0%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="campaign-status planning">
                        <span class="status-dot"></span>
                        Planning
                    </div>
                </td>
                <td>
                    <div class="marketing-actions">
                        <button class="marketing-btn analyze">Plan</button>
                        <button class="marketing-btn optimize">Setup</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.marketing-campaigns-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.marketing-header {
    padding: 2rem;
    background: linear-gradient(135deg, #ec4899, #db2777);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.marketing-header h3 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
}

.campaign-filters {
    display: flex;
    gap: 1rem;
}

.filter-select {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(10px);
    font-size: 0.9rem;
}

.filter-select option {
    color: #1f2937;
}

.marketing-table {
    width: 100%;
    border-collapse: collapse;
}

.marketing-table th {
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f8fafc;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.marketing-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.campaign-active { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }
.campaign-completed { background: linear-gradient(90deg, rgba(59, 130, 246, 0.05), transparent); }
.campaign-planning { background: linear-gradient(90deg, rgba(156, 163, 175, 0.05), transparent); }

.marketing-table tr:hover {
    background: #f9fafb;
    transform: translateX(5px);
    transition: all 0.3s ease;
}

.campaign-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.campaign-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ec4899, #db2777);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
}

.campaign-details .campaign-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.campaign-details .campaign-period {
    font-size: 0.875rem;
    color: #6b7280;
}

.channel-tag {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.channel-tag.social {
    background: rgba(59, 130, 246, 0.1);
    color: #1d4ed8;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.channel-tag.email {
    background: rgba(168, 85, 247, 0.1);
    color: #7c3aed;
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.channel-tag.ppc {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
    border: 1px solid rgba(34, 197, 94, 0.2);
}

.budget-info .budget-amount {
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.budget-info .budget-type {
    font-size: 0.875rem;
    color: #6b7280;
}

.spent-info .spent-amount {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.spent-info .spent-percent {
    font-size: 0.875rem;
    color: #6b7280;
}

.impressions-metric,
.conversions-metric {
    text-align: center;
}

.metric-value {
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.metric-label {
    font-size: 0.75rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.roi-metric .roi-value {
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.roi-metric.positive .roi-value {
    color: #16a34a;
}

.roi-metric.planned .roi-value {
    color: #6b7280;
}

.roi-bar {
    width: 100%;
    height: 6px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.roi-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1s ease-in-out;
}

.roi-metric.positive .roi-fill {
    background: linear-gradient(90deg, #16a34a, #22c55e);
}

.campaign-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.campaign-status.active {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
}

.campaign-status.completed {
    background: rgba(59, 130, 246, 0.1);
    color: #1d4ed8;
}

.campaign-status.planning {
    background: rgba(156, 163, 175, 0.1);
    color: #6b7280;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.campaign-status.active .status-dot { background: #16a34a; }
.campaign-status.completed .status-dot { background: #1d4ed8; }
.campaign-status.planning .status-dot { background: #6b7280; }

.marketing-actions {
    display: flex;
    gap: 0.5rem;
}

.marketing-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.marketing-btn.analyze {
    background: #ec4899;
    color: white;
}

.marketing-btn.optimize {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
}

.marketing-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`,
    js: `// Marketing campaigns interactions
    document.querySelectorAll('.marketing-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            const campaignName = this.closest('tr').querySelector('.campaign-name').textContent;
            
            if (action === 'Analyze' || action === 'Report' || action === 'Plan') {
                alert(\`\${action} campaign: \${campaignName}\`);
            } else {
                alert(\`\${action} campaign: \${campaignName}\`);
            }
        });
    });

    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', function() {
            alert(\`Filtering campaigns by: \${this.value}\`);
        });
    });

    // Animate ROI bars
    document.addEventListener('DOMContentLoaded', function() {
        const bars = document.querySelectorAll('.roi-fill');
        bars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 600);
        });
    });`
},
// ====================================================================
// MINIMAL TEMPLATE 37: CLEAN DATA TABLE
// ====================================================================
minimal37: {
    html: `<div class="clean-data-container">
    <table class="clean-data-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>john.doe@company.com</td>
                <td>Frontend Developer</td>
                <td>Engineering</td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
            </tr>
            <tr>
                <td>Sarah Johnson</td>
                <td>sarah.j@company.com</td>
                <td>UX Designer</td>
                <td>Design</td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
            </tr>
            <tr>
                <td>Michael Chen</td>
                <td>michael.chen@company.com</td>
                <td>Backend Developer</td>
                <td>Engineering</td>
                <td>
                    <span class="status-badge inactive">Inactive</span>
                </td>
            </tr>
            <tr>
                <td>Emily Davis</td>
                <td>emily.davis@company.com</td>
                <td>Product Manager</td>
                <td>Product</td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.clean-data-container {
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.clean-data-table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.clean-data-table th {
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.clean-data-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 0.875rem;
}

.clean-data-table tr:last-child td {
    border-bottom: none;
}

.clean-data-table tr:hover {
    background: #f9fafb;
}

.status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.active {
    background: #d1fae5;
    color: #065f46;
}

.status-badge.inactive {
    background: #f3f4f6;
    color: #6b7280;
}`,
    js: `// No JavaScript required for this minimal table`
},

// ====================================================================
// MINIMAL TEMPLATE 38: SIMPLE LIST TABLE
// ====================================================================
minimal38: {
    html: `<div class="simple-list-container">
    <table class="simple-list-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-item">
                        <div class="product-name">MacBook Pro 16"</div>
                        <div class="product-sku">MBP16-2024</div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>$2,499</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-count">45</span>
                        <span class="stock-label">in stock</span>
                    </div>
                </td>
                <td>2 hours ago</td>
            </tr>
            <tr>
                <td>
                    <div class="product-item">
                        <div class="product-name">Wireless Mouse</div>
                        <div class="product-sku">WM-X1-2024</div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>$79</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-count">128</span>
                        <span class="stock-label">in stock</span>
                    </div>
                </td>
                <td>1 day ago</td>
            </tr>
            <tr>
                <td>
                    <div class="product-item">
                        <div class="product-name">Mechanical Keyboard</div>
                        <div class="product-sku">MK-PRO-2024</div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>$149</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-count">23</span>
                        <span class="stock-label">in stock</span>
                    </div>
                </td>
                <td>3 days ago</td>
            </tr>
            <tr>
                <td>
                    <div class="product-item">
                        <div class="product-name">USB-C Hub</div>
                        <div class="product-sku">UCH-7IN1-2024</div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>$89</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-count">0</span>
                        <span class="stock-label out-of-stock">out of stock</span>
                    </div>
                </td>
                <td>1 week ago</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.simple-list-container {
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
}

.simple-list-table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.simple-list-table th {
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-weight: 500;
    color: #6b7280;
    border-bottom: 1px solid #f3f4f6;
    background: #ffffff;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
}

.simple-list-table td {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #f9fafb;
    color: #374151;
    font-size: 0.875rem;
}

.simple-list-table tr:last-child td {
    border-bottom: none;
}

.simple-list-table tr:hover {
    background: #fafafa;
}

.product-item .product-name {
    font-weight: 500;
    color: #111827;
    margin-bottom: 0.125rem;
}

.product-item .product-sku {
    font-size: 0.75rem;
    color: #9ca3af;
    font-family: 'Courier New', monospace;
}

.stock-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.stock-count {
    font-weight: 600;
    color: #111827;
}

.stock-label {
    font-size: 0.75rem;
    color: #6b7280;
}

.stock-label.out-of-stock {
    color: #ef4444;
}`,
    js: `// No JavaScript required for this simple list table`
},

// ====================================================================
// MINIMAL TEMPLATE 39: BORDERLESS TABLE
// ====================================================================
minimal39: {
    html: `<div class="borderless-container">
    <table class="borderless-table">
        <thead>
            <tr>
                <th>Task</th>
                <th>Project</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Assignee</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="task-info">
                        <div class="task-title">Design homepage layout</div>
                        <div class="task-description">Create new responsive design</div>
                    </div>
                </td>
                <td>Website Redesign</td>
                <td>
                    <span class="priority high">High</span>
                </td>
                <td>Mar 15, 2024</td>
                <td>
                    <div class="assignee">
                        <span class="assignee-avatar">JD</span>
                        <span class="assignee-name">John Doe</span>
                    </div>
                </td>
                <td>
                    <span class="status in-progress">In Progress</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="task-info">
                        <div class="task-title">Write API documentation</div>
                        <div class="task-description">Update endpoints documentation</div>
                    </div>
                </td>
                <td>API Development</td>
                <td>
                    <span class="priority medium">Medium</span>
                </td>
                <td>Mar 20, 2024</td>
                <td>
                    <div class="assignee">
                        <span class="assignee-avatar">SJ</span>
                        <span class="assignee-name">Sarah Johnson</span>
                    </div>
                </td>
                <td>
                    <span class="status pending">Pending</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="task-info">
                        <div class="task-title">Fix login bug</div>
                        <div class="task-description">Resolve authentication issue</div>
                    </div>
                </td>
                <td>Bug Fixing</td>
                <td>
                    <span class="priority high">High</span>
                </td>
                <td>Mar 12, 2024</td>
                <td>
                    <div class="assignee">
                        <span class="assignee-avatar">MC</span>
                        <span class="assignee-name">Mike Chen</span>
                    </div>
                </td>
                <td>
                    <span class="status completed">Completed</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="task-info">
                        <div class="task-title">User testing session</div>
                        <div class="task-description">Conduct usability testing</div>
                    </div>
                </td>
                <td>Product Research</td>
                <td>
                    <span class="priority low">Low</span>
                </td>
                <td>Mar 25, 2024</td>
                <td>
                    <div class="assignee">
                        <span class="assignee-avatar">ED</span>
                        <span class="assignee-name">Emily Davis</span>
                    </div>
                </td>
                <td>
                    <span class="status planning">Planning</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.borderless-container {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.borderless-table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.borderless-table th {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    text-align: left;
    font-weight: 500;
    color: #6b7280;
    background: #ffffff;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.borderless-table td {
    padding: 1.25rem 1.5rem;
    color: #374151;
    font-size: 0.875rem;
}

.borderless-table tr {
    border-bottom: 1px solid #f8fafc;
}

.borderless-table tr:last-child {
    border-bottom: none;
}

.borderless-table tr:hover {
    background: #fafafa;
}

.task-info .task-title {
    font-weight: 500;
    color: #111827;
    margin-bottom: 0.25rem;
}

.task-info .task-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.priority {
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.priority.high {
    background: #fef2f2;
    color: #dc2626;
}

.priority.medium {
    background: #fffbeb;
    color: #d97706;
}

.priority.low {
    background: #f0fdf4;
    color: #16a34a;
}

.assignee {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.assignee-avatar {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #3b82f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: white;
}

.assignee-name {
    font-weight: 500;
    color: #374151;
}

.status {
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status.in-progress {
    background: #dbeafe;
    color: #1d4ed8;
}

.status.pending {
    background: #fef3c7;
    color: #92400e;
}

.status.completed {
    background: #d1fae5;
    color: #065f46;
}

.status.planning {
    background: #f3f4f6;
    color: #6b7280;
}`,
    js: `// No JavaScript required for this borderless table`
},

// ====================================================================
// MINIMAL TEMPLATE 40: COMPACT TABLE
// ====================================================================
minimal40: {
    html: `<div class="compact-container">
    <table class="compact-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="metric-id">#001</td>
                <td class="metric-name">Monthly Revenue</td>
                <td class="metric-value">$12,548</td>
                <td class="metric-previous">$11,923</td>
                <td>
                    <span class="change positive">+5.2%</span>
                </td>
                <td>
                    <span class="trend up">↗</span>
                </td>
            </tr>
            <tr>
                <td class="metric-id">#002</td>
                <td class="metric-name">Active Users</td>
                <td class="metric-value">1,240</td>
                <td class="metric-previous">1,099</td>
                <td>
                    <span class="change positive">+12.8%</span>
                </td>
                <td>
                    <span class="trend up">↗</span>
                </td>
            </tr>
            <tr>
                <td class="metric-id">#003</td>
                <td class="metric-name">Bounce Rate</td>
                <td class="metric-value">32.5%</td>
                <td class="metric-previous">28.7%</td>
                <td>
                    <span class="change negative">+13.2%</span>
                </td>
                <td>
                    <span class="trend down">↘</span>
                </td>
            </tr>
            <tr>
                <td class="metric-id">#004</td>
                <td class="metric-name">Avg. Session</td>
                <td class="metric-value">4m 32s</td>
                <td class="metric-previous">4m 15s</td>
                <td>
                    <span class="change positive">+6.7%</span>
                </td>
                <td>
                    <span class="trend up">↗</span>
                </td>
            </tr>
            <tr>
                <td class="metric-id">#005</td>
                <td class="metric-name">Conversion Rate</td>
                <td class="metric-value">3.8%</td>
                <td class="metric-previous">3.5%</td>
                <td>
                    <span class="change positive">+8.6%</span>
                </td>
                <td>
                    <span class="trend up">↗</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.compact-container {
    background: #ffffff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
}

.compact-table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 0.8125rem;
}

.compact-table th {
    padding: 0.875rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #6b7280;
    border-bottom: 1px solid #f3f4f6;
    background: #fafafa;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.75rem;
}

.compact-table td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #f9fafb;
    color: #374151;
}

.compact-table tr:last-child td {
    border-bottom: none;
}

.compact-table tr:hover {
    background: #fafafa;
}

.metric-id {
    font-family: 'Courier New', monospace;
    font-weight: 600;
    color: #6b7280;
    font-size: 0.75rem;
}

.metric-name {
    font-weight: 500;
    color: #111827;
}

.metric-value {
    font-weight: 600;
    color: #111827;
}

.metric-previous {
    color: #9ca3af;
    font-size: 0.75rem;
}

.change {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.75rem;
}

.change.positive {
    background: #f0fdf4;
    color: #16a34a;
}

.change.negative {
    background: #fef2f2;
    color: #dc2626;
}

.trend {
    font-size: 0.875rem;
    font-weight: 600;
}

.trend.up {
    color: #16a34a;
}

.trend.down {
    color: #dc2626;
}`,
    js: `// No JavaScript required for this compact table`
},

// ====================================================================
// MINIMAL TEMPLATE 41: LIGHT THEME TABLE
// ====================================================================
minimal41: {
    html: `<div class="light-theme-container">
    <table class="light-theme-table">
        <thead>
            <tr>
                <th>Service</th>
                <th>Environment</th>
                <th>Uptime</th>
                <th>Response Time</th>
                <th>Status</th>
                <th>Last Check</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="service-info">
                        <div class="service-name">API Gateway</div>
                        <div class="service-version">v2.4.1</div>
                    </div>
                </td>
                <td>Production</td>
                <td>
                    <div class="uptime-metric">
                        <span class="uptime-value">99.98%</span>
                        <span class="uptime-perfect">Perfect</span>
                    </div>
                </td>
                <td>
                    <div class="response-metric">
                        <span class="response-value">45ms</span>
                        <span class="response-fast">Fast</span>
                    </div>
                </td>
                <td>
                    <span class="service-status online">Online</span>
                </td>
                <td>Just now</td>
            </tr>
            <tr>
                <td>
                    <div class="service-info">
                        <div class="service-name">Database Cluster</div>
                        <div class="service-version">v1.2.0</div>
                    </div>
                </td>
                <td>Production</td>
                <td>
                    <div class="uptime-metric">
                        <span class="uptime-value">99.95%</span>
                        <span class="uptime-excellent">Excellent</span>
                    </div>
                </td>
                <td>
                    <div class="response-metric">
                        <span class="response-value">12ms</span>
                        <span class="response-fast">Fast</span>
                    </div>
                </td>
                <td>
                    <span class="service-status online">Online</span>
                </td>
                <td>2 min ago</td>
            </tr>
            <tr>
                <td>
                    <div class="service-info">
                        <div class="service-name">Cache Service</div>
                        <div class="service-version">v3.1.2</div>
                    </div>
                </td>
                <td>Production</td>
                <td>
                    <div class="uptime-metric">
                        <span class="uptime-value">99.92%</span>
                        <span class="uptime-excellent">Excellent</span>
                    </div>
                </td>
                <td>
                    <div class="response-metric">
                        <span class="response-value">8ms</span>
                        <span class="response-fast">Fast</span>
                    </div>
                </td>
                <td>
                    <span class="service-status online">Online</span>
                </td>
                <td>5 min ago</td>
            </tr>
            <tr>
                <td>
                    <div class="service-info">
                        <div class="service-name">File Storage</div>
                        <div class="service-version">v1.0.3</div>
                    </div>
                </td>
                <td>Staging</td>
                <td>
                    <div class="uptime-metric">
                        <span class="uptime-value">99.85%</span>
                        <span class="uptime-good">Good</span>
                    </div>
                </td>
                <td>
                    <div class="response-metric">
                        <span class="response-value">89ms</span>
                        <span class="response-normal">Normal</span>
                    </div>
                </td>
                <td>
                    <span class="service-status maintenance">Maintenance</span>
                </td>
                <td>1 hour ago</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.light-theme-container {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    border: 1px solid #f1f5f9;
}

.light-theme-table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.light-theme-table th {
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-weight: 500;
    color: #64748b;
    border-bottom: 1px solid #f1f5f9;
    background: #f8fafc;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
}

.light-theme-table td {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #f8fafc;
    color: #475569;
    font-size: 0.875rem;
}

.light-theme-table tr:last-child td {
    border-bottom: none;
}

.light-theme-table tr:hover {
    background: #f8fafc;
}

.service-info .service-name {
    font-weight: 500;
    color: #0f172a;
    margin-bottom: 0.25rem;
}

.service-info .service-version {
    font-size: 0.75rem;
    color: #94a3b8;
    font-family: 'Courier New', monospace;
}

.uptime-metric,
.response-metric {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.uptime-value,
.response-value {
    font-weight: 600;
    color: #0f172a;
}

.uptime-perfect,
.uptime-excellent,
.uptime-good,
.response-fast,
.response-normal {
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
}

.uptime-perfect {
    background: #f0fdf4;
    color: #16a34a;
}

.uptime-excellent {
    background: #ecfdf5;
    color: #10b981;
}

.uptime-good {
    background: #f0f9ff;
    color: #0ea5e9;
}

.response-fast {
    background: #f0fdf4;
    color: #16a34a;
}

.response-normal {
    background: #fffbeb;
    color: #d97706;
}

.service-status {
    padding: 0.5rem 0.875rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.service-status.online {
    background: #f0fdf4;
    color: #16a34a;
    border: 1px solid #dcfce7;
}

.service-status.maintenance {
    background: #fffbeb;
    color: #d97706;
    border: 1px solid #fed7aa;
}`,
    js: `// No JavaScript required for this light theme table`
},
// ====================================================================
// ANALYTICS TEMPLATE 42: PERFORMANCE METRICS
// ====================================================================
analytics42: {
    html: `<div class="performance-metrics-container">
    <div class="metrics-header">
        <h3>📈 Key Performance Indicators</h3>
        <div class="time-filter">
            <select class="filter-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option selected>Last 90 Days</option>
                <option>Year to Date</option>
            </select>
        </div>
    </div>
    <table class="performance-metrics-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current Period</th>
                <th>Previous Period</th>
                <th>Change</th>
                <th>Trend</th>
                <th>Progress</th>
            </tr>
        </thead>
        <tbody>
            <tr class="metric-revenue">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">💰</div>
                        <div class="metric-details">
                            <div class="metric-name">Monthly Revenue</div>
                            <div class="metric-description">Total monthly income</div>
                        </div>
                    </div>
                </td>
                <td class="current-value">$12,548</td>
                <td class="previous-value">$10,845</td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-value">+15.7%</span>
                        <span class="change-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-line">
                            <div class="data-point" style="left: 10%"></div>
                            <div class="data-point" style="left: 30%"></div>
                            <div class="data-point" style="left: 50%"></div>
                            <div class="data-point" style="left: 70%"></div>
                            <div class="data-point" style="left: 90%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 85%"></div>
                        </div>
                        <span class="progress-text">85% of target</span>
                    </div>
                </td>
            </tr>
            <tr class="metric-users">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">👥</div>
                        <div class="metric-details">
                            <div class="metric-name">Active Users</div>
                            <div class="metric-description">Monthly active users</div>
                        </div>
                    </div>
                </td>
                <td class="current-value">2,458</td>
                <td class="previous-value">2,120</td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-value">+15.9%</span>
                        <span class="change-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-line">
                            <div class="data-point" style="left: 15%"></div>
                            <div class="data-point" style="left: 35%"></div>
                            <div class="data-point" style="left: 55%"></div>
                            <div class="data-point" style="left: 75%"></div>
                            <div class="data-point" style="left: 95%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 92%"></div>
                        </div>
                        <span class="progress-text">92% of target</span>
                    </div>
                </td>
            </tr>
            <tr class="metric-conversion">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">🎯</div>
                        <div class="metric-details">
                            <div class="metric-name">Conversion Rate</div>
                            <div class="metric-description">Visitor to customer rate</div>
                        </div>
                    </div>
                </td>
                <td class="current-value">4.2%</td>
                <td class="previous-value">3.8%</td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-value">+10.5%</span>
                        <span class="change-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-line">
                            <div class="data-point" style="left: 20%"></div>
                            <div class="data-point" style="left: 40%"></div>
                            <div class="data-point" style="left: 60%"></div>
                            <div class="data-point" style="left: 80%"></div>
                            <div class="data-point" style="left: 85%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 78%"></div>
                        </div>
                        <span class="progress-text">78% of target</span>
                    </div>
                </td>
            </tr>
            <tr class="metric-bounce">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">📉</div>
                        <div class="metric-details">
                            <div class="metric-name">Bounce Rate</div>
                            <div class="metric-description">Single-page sessions</div>
                        </div>
                    </div>
                </td>
                <td class="current-value">32.5%</td>
                <td class="previous-value">35.2%</td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-value">-7.7%</span>
                        <span class="change-arrow">↘</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-line">
                            <div class="data-point" style="left: 90%"></div>
                            <div class="data-point" style="left: 80%"></div>
                            <div class="data-point" style="left: 70%"></div>
                            <div class="data-point" style="left: 60%"></div>
                            <div class="data-point" style="left: 50%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="progress-metric">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%"></div>
                        </div>
                        <span class="progress-text">65% of target</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.performance-metrics-container {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
}

.metrics-header {
    padding: 1.5rem 2rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.metrics-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 600;
}

.time-filter .filter-select {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    font-size: 0.875rem;
    color: #374151;
}

.performance-metrics-table {
    width: 100%;
    border-collapse: collapse;
}

.performance-metrics-table th {
    padding: 1.25rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f9fafb;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.performance-metrics-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.metric-revenue { background: linear-gradient(90deg, rgba(34, 197, 94, 0.03), transparent); }
.metric-users { background: linear-gradient(90deg, rgba(59, 130, 246, 0.03), transparent); }
.metric-conversion { background: linear-gradient(90deg, rgba(168, 85, 247, 0.03), transparent); }
.metric-bounce { background: linear-gradient(90deg, rgba(239, 68, 68, 0.03), transparent); }

.performance-metrics-table tr:hover {
    background: #f9fafb;
}

.metric-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.metric-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(135deg, #10b981, #059669);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: white;
}

.metric-users .metric-icon { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
.metric-conversion .metric-icon { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
.metric-bounce .metric-icon { background: linear-gradient(135deg, #ef4444, #dc2626); }

.metric-details .metric-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.metric-details .metric-description {
    font-size: 0.875rem;
    color: #9ca3af;
}

.current-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
}

.previous-value {
    color: #9ca3af;
    font-size: 0.875rem;
}

.change-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
}

.change-indicator.positive {
    background: #f0fdf4;
    color: #16a34a;
}

.change-indicator.negative {
    background: #fef2f2;
    color: #dc2626;
}

.change-arrow {
    font-size: 1rem;
    font-weight: 700;
}

.trend-chart {
    width: 80px;
    height: 30px;
    position: relative;
    background: #f8fafc;
    border-radius: 4px;
    overflow: hidden;
}

.chart-line {
    width: 100%;
    height: 100%;
    position: relative;
}

.data-point {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #3b82f6;
    transform: translate(-50%, -50%);
    bottom: 0;
}

.metric-revenue .data-point { background: #10b981; }
.metric-users .data-point { background: #3b82f6; }
.metric-conversion .data-point { background: #8b5cf6; }
.metric-bounce .data-point { background: #ef4444; }

.progress-metric {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #10b981, #22c55e);
    transition: width 1s ease-in-out;
}

.metric-users .progress-fill { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
.metric-conversion .progress-fill { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }
.metric-bounce .progress-fill { background: linear-gradient(90deg, #ef4444, #f87171); }

.progress-text {
    font-size: 0.75rem;
    color: #6b7280;
    text-align: center;
}`,
    js: `// Performance metrics interactions
document.querySelector('.filter-select').addEventListener('change', function() {
    const period = this.value;
    alert(\`Loading data for: \${period}\`);
});

// Animate progress bars
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
},

// ====================================================================
// ANALYTICS TEMPLATE 43: TRAFFIC SOURCES
// ====================================================================
analytics43: {
    html: `<div class="traffic-sources-container">
    <div class="traffic-header">
        <h3>🌐 Traffic Sources Analysis</h3>
        <div class="traffic-summary">
            <div class="summary-item">
                <div class="summary-value">45.8K</div>
                <div class="summary-label">Total Visits</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">3.8%</div>
                <div class="summary-label">Avg. Conversion</div>
            </div>
        </div>
    </div>
    <table class="traffic-sources-table">
        <thead>
            <tr>
                <th>Source</th>
                <th>Visits</th>
                <th>% of Total</th>
                <th>Conversion Rate</th>
                <th>Trend (30d)</th>
                <th>Quality Score</th>
            </tr>
        </thead>
        <tbody>
            <tr class="source-organic">
                <td>
                    <div class="source-info">
                        <div class="source-icon">🔍</div>
                        <div class="source-details">
                            <div class="source-name">Organic Search</div>
                            <div class="source-description">Google, Bing, etc.</div>
                        </div>
                    </div>
                </td>
                <td class="visits-count">12,548</td>
                <td>
                    <div class="percentage-metric">
                        <div class="percentage-value">27.4%</div>
                        <div class="percentage-bar">
                            <div class="percentage-fill" style="width: 27.4%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-metric">
                        <div class="conversion-value">4.2%</div>
                        <div class="conversion-change positive">+0.8%</div>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <svg width="80" height="30" viewBox="0 0 80 30" class="sparkline">
                            <path d="M0,25 L10,18 L20,22 L30,15 L40,20 L50,12 L60,18 L70,10 L80,15" 
                                  fill="none" stroke="#10b981" stroke-width="2"/>
                        </svg>
                        <span class="trend-value positive">+12.5%</span>
                    </div>
                </td>
                <td>
                    <div class="quality-score excellent">
                        <div class="score-stars">
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star">★</span>
                        </div>
                        <span class="score-text">Excellent</span>
                    </div>
                </td>
            </tr>
            <tr class="source-social">
                <td>
                    <div class="source-info">
                        <div class="source-icon">💬</div>
                        <div class="source-details">
                            <div class="source-name">Social Media</div>
                            <div class="source-description">Facebook, Twitter, etc.</div>
                        </div>
                    </div>
                </td>
                <td class="visits-count">8,742</td>
                <td>
                    <div class="percentage-metric">
                        <div class="percentage-value">19.1%</div>
                        <div class="percentage-bar">
                            <div class="percentage-fill" style="width: 19.1%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-metric">
                        <div class="conversion-value">3.1%</div>
                        <div class="conversion-change positive">+0.4%</div>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <svg width="80" height="30" viewBox="0 0 80 30" class="sparkline">
                            <path d="M0,20 L10,15 L20,18 L30,12 L40,15 L50,10 L60,12 L70,8 L80,10" 
                                  fill="none" stroke="#3b82f6" stroke-width="2"/>
                        </svg>
                        <span class="trend-value positive">+8.3%</span>
                    </div>
                </td>
                <td>
                    <div class="quality-score good">
                        <div class="score-stars">
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                        </div>
                        <span class="score-text">Good</span>
                    </div>
                </td>
            </tr>
            <tr class="source-direct">
                <td>
                    <div class="source-info">
                        <div class="source-icon">📍</div>
                        <div class="source-details">
                            <div class="source-name">Direct Traffic</div>
                            <div class="source-description">Direct visits</div>
                        </div>
                    </div>
                </td>
                <td class="visits-count">7,856</td>
                <td>
                    <div class="percentage-metric">
                        <div class="percentage-value">17.2%</div>
                        <div class="percentage-bar">
                            <div class="percentage-fill" style="width: 17.2%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-metric">
                        <div class="conversion-value">5.8%</div>
                        <div class="conversion-change negative">-0.2%</div>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <svg width="80" height="30" viewBox="0 0 80 30" class="sparkline">
                            <path d="M0,15 L10,18 L20,12 L30,15 L40,10 L50,12 L60,8 L70,10 L80,12" 
                                  fill="none" stroke="#f59e0b" stroke-width="2"/>
                        </svg>
                        <span class="trend-value negative">-3.2%</span>
                    </div>
                </td>
                <td>
                    <div class="quality-score excellent">
                        <div class="score-stars">
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                        </div>
                        <span class="score-text">Excellent</span>
                    </div>
                </td>
            </tr>
            <tr class="source-referral">
                <td>
                    <div class="source-info">
                        <div class="source-icon">🔗</div>
                        <div class="source-details">
                            <div class="source-name">Referral</div>
                            <div class="source-description">Other websites</div>
                        </div>
                    </div>
                </td>
                <td class="visits-count">5,234</td>
                <td>
                    <div class="percentage-metric">
                        <div class="percentage-value">11.4%</div>
                        <div class="percentage-bar">
                            <div class="percentage-fill" style="width: 11.4%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="conversion-metric">
                        <div class="conversion-value">2.4%</div>
                        <div class="conversion-change positive">+1.1%</div>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <svg width="80" height="30" viewBox="0 0 80 30" class="sparkline">
                            <path d="M0,25 L10,20 L20,22 L30,18 L40,20 L50,15 L60,18 L70,12 L80,15" 
                                  fill="none" stroke="#8b5cf6" stroke-width="2"/>
                        </svg>
                        <span class="trend-value positive">+15.8%</span>
                    </div>
                </td>
                <td>
                    <div class="quality-score average">
                        <div class="score-stars">
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                        </div>
                        <span class="score-text">Average</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.traffic-sources-container {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
}

.traffic-header {
    padding: 1.5rem 2rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.traffic-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 600;
}

.traffic-summary {
    display: flex;
    gap: 2rem;
}

.summary-item {
    text-align: center;
}

.summary-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.summary-label {
    font-size: 0.875rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.traffic-sources-table {
    width: 100%;
    border-collapse: collapse;
}

.traffic-sources-table th {
    padding: 1.25rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f9fafb;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.traffic-sources-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.source-organic { background: linear-gradient(90deg, rgba(34, 197, 94, 0.03), transparent); }
.source-social { background: linear-gradient(90deg, rgba(59, 130, 246, 0.03), transparent); }
.source-direct { background: linear-gradient(90deg, rgba(245, 158, 11, 0.03), transparent); }
.source-referral { background: linear-gradient(90deg, rgba(168, 85, 247, 0.03), transparent); }

.traffic-sources-table tr:hover {
    background: #f9fafb;
}

.source-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.source-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #10b981, #059669);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
}

.source-social .source-icon { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
.source-direct .source-icon { background: linear-gradient(135deg, #f59e0b, #d97706); }
.source-referral .source-icon { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }

.source-details .source-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.source-details .source-description {
    font-size: 0.875rem;
    color: #9ca3af;
}

.visits-count {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1f2937;
}

.percentage-metric {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.percentage-value {
    font-weight: 600;
    color: #1f2937;
}

.percentage-bar {
    width: 100%;
    height: 4px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.percentage-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #10b981, #22c55e);
    transition: width 1s ease-in-out;
}

.source-social .percentage-fill { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
.source-direct .percentage-fill { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
.source-referral .percentage-fill { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }

.conversion-metric .conversion-value {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.conversion-change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
}

.conversion-change.positive {
    background: #f0fdf4;
    color: #16a34a;
}

.conversion-change.negative {
    background: #fef2f2;
    color: #dc2626;
}

.trend-sparkline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.sparkline {
    flex-shrink: 0;
}

.trend-value {
    font-size: 0.875rem;
    font-weight: 600;
}

.trend-value.positive {
    color: #16a34a;
}

.trend-value.negative {
    color: #dc2626;
}

.quality-score {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.score-stars {
    display: flex;
    gap: 0.125rem;
}

.star {
    font-size: 0.875rem;
    color: #d1d5db;
}

.star.filled {
    color: #fbbf24;
}

.quality-score.excellent .star.filled { color: #10b981; }
.quality-score.good .star.filled { color: #3b82f6; }
.quality-score.average .star.filled { color: #f59e0b; }

.score-text {
    font-size: 0.875rem;
    font-weight: 600;
}

.quality-score.excellent .score-text { color: #10b981; }
.quality-score.good .score-text { color: #3b82f6; }
.quality-score.average .score-text { color: #f59e0b; }`,
    js: `// Animate percentage bars
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.percentage-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 600);
    });
});`
},

// ====================================================================
// ANALYTICS TEMPLATE 44: USER BEHAVIOR
// ====================================================================
analytics44: {
    html: `<div class="user-behavior-container">
    <div class="behavior-header">
        <h3>👤 User Behavior Analytics</h3>
        <div class="behavior-filters">
            <button class="filter-btn active">All Pages</button>
            <button class="filter-btn">High Engagement</button>
            <button class="filter-btn">Low Bounce</button>
        </div>
    </div>
    <table class="user-behavior-table">
        <thead>
            <tr>
                <th>Page</th>
                <th>Page Views</th>
                <th>Unique Visitors</th>
                <th>Avg. Time</th>
                <th>Bounce Rate</th>
                <th>Engagement Score</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="page-high">
                <td>
                    <div class="page-info">
                        <div class="page-icon">🏠</div>
                        <div class="page-details">
                            <div class="page-name">Homepage</div>
                            <div class="page-url">example.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="views-metric">
                        <div class="views-count">45,248</div>
                        <div class="views-trend positive">+12.5%</div>
                    </div>
                </td>
                <td>
                    <div class="visitors-metric">
                        <div class="visitors-count">32,156</div>
                        <div class="visitors-change">71% of views</div>
                    </div>
                </td>
                <td>
                    <div class="time-metric">
                        <div class="time-value">2m 15s</div>
                        <div class="time-comparison positive">+25s</div>
                    </div>
                </td>
                <td>
                    <div class="bounce-metric">
                        <div class="bounce-value">32.5%</div>
                        <div class="bounce-bar">
                            <div class="bounce-fill" style="width: 32.5%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="engagement-score high">
                        <div class="score-circle">
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="18" stroke="#e5e7eb" stroke-width="4" fill="none"/>
                                <circle cx="20" cy="20" r="18" stroke="#10b981" stroke-width="4" fill="none" 
                                        stroke-dasharray="113" stroke-dashoffset="34" transform="rotate(-90 20 20)"/>
                            </svg>
                            <span class="score-value">85</span>
                        </div>
                        <span class="score-label">High</span>
                    </div>
                </td>
                <td>
                    <div class="behavior-actions">
                        <button class="action-btn analyze">Analyze</button>
                        <button class="action-btn optimize">Optimize</button>
                    </div>
                </td>
            </tr>
            <tr class="page-medium">
                <td>
                    <div class="page-info">
                        <div class="page-icon">🛍️</div>
                        <div class="page-details">
                            <div class="page-name">Product Catalog</div>
                            <div class="page-url">example.com/products</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="views-metric">
                        <div class="views-count">28,742</div>
                        <div class="views-trend positive">+8.3%</div>
                    </div>
                </td>
                <td>
                    <div class="visitors-metric">
                        <div class="visitors-count">18,945</div>
                        <div class="visitors-change">66% of views</div>
                    </div>
                </td>
                <td>
                    <div class="time-metric">
                        <div class="time-value">3m 45s</div>
                        <div class="time-comparison positive">+45s</div>
                    </div>
                </td>
                <td>
                    <div class="bounce-metric">
                        <div class="bounce-value">18.2%</div>
                        <div class="bounce-bar">
                            <div class="bounce-fill" style="width: 18.2%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="engagement-score high">
                        <div class="score-circle">
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="18" stroke="#e5e7eb" stroke-width="4" fill="none"/>
                                <circle cx="20" cy="20" r="18" stroke="#10b981" stroke-width="4" fill="none" 
                                        stroke-dasharray="113" stroke-dashoffset="23" transform="rotate(-90 20 20)"/>
                            </svg>
                            <span class="score-value">92</span>
                        </div>
                        <span class="score-label">High</span>
                    </div>
                </td>
                <td>
                    <div class="behavior-actions">
                        <button class="action-btn analyze">Analyze</button>
                        <button class="action-btn optimize">Optimize</button>
                    </div>
                </td>
            </tr>
            <tr class="page-low">
                <td>
                    <div class="page-info">
                        <div class="page-icon">📄</div>
                        <div class="page-details">
                            <div class="page-name">Blog Post</div>
                            <div class="page-url">example.com/blog/post-123</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="views-metric">
                        <div class="views-count">12,458</div>
                        <div class="views-trend negative">-5.2%</div>
                    </div>
                </td>
                <td>
                    <div class="visitors-metric">
                        <div class="visitors-count">8,742</div>
                        <div class="visitors-change">70% of views</div>
                    </div>
                </td>
                <td>
                    <div class="time-metric">
                        <div class="time-value">1m 08s</div>
                        <div class="time-comparison negative">-12s</div>
                    </div>
                </td>
                <td>
                    <div class="bounce-metric">
                        <div class="bounce-value">58.7%</div>
                        <div class="bounce-bar">
                            <div class="bounce-fill" style="width: 58.7%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="engagement-score low">
                        <div class="score-circle">
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="18" stroke="#e5e7eb" stroke-width="4" fill="none"/>
                                <circle cx="20" cy="20" r="18" stroke="#ef4444" stroke-width="4" fill="none" 
                                        stroke-dasharray="113" stroke-dashoffset="79" transform="rotate(-90 20 20)"/>
                            </svg>
                            <span class="score-value">42</span>
                        </div>
                        <span class="score-label">Low</span>
                    </div>
                </td>
                <td>
                    <div class="behavior-actions">
                        <button class="action-btn analyze">Analyze</button>
                        <button class="action-btn optimize">Optimize</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.user-behavior-container {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
}

.behavior-header {
    padding: 1.5rem 2rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.behavior-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 600;
}

.behavior-filters {
    display: flex;
    gap: 0.75rem;
}

.filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.user-behavior-table {
    width: 100%;
    border-collapse: collapse;
}

.user-behavior-table th {
    padding: 1.25rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f9fafb;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.user-behavior-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.page-high { background: linear-gradient(90deg, rgba(34, 197, 94, 0.03), transparent); }
.page-medium { background: linear-gradient(90deg, rgba(59, 130, 246, 0.03), transparent); }
.page-low { background: linear-gradient(90deg, rgba(239, 68, 68, 0.03), transparent); }

.user-behavior-table tr:hover {
    background: #f9fafb;
}

.page-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.page-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
}

.page-medium .page-icon { background: linear-gradient(135deg, #10b981, #059669); }
.page-low .page-icon { background: linear-gradient(135deg, #ef4444, #dc2626); }

.page-details .page-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.page-details .page-url {
    font-size: 0.875rem;
    color: #9ca3af;
    font-family: 'Courier New', monospace;
}

.views-metric .views-count {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.views-trend {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
}

.views-trend.positive {
    background: #f0fdf4;
    color: #16a34a;
}

.views-trend.negative {
    background: #fef2f2;
    color: #dc2626;
}

.visitors-metric .visitors-count {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.visitors-change {
    font-size: 0.75rem;
    color: #6b7280;
}

.time-metric .time-value {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.time-comparison {
    font-size: 0.75rem;
    font-weight: 600;
}

.time-comparison.positive {
    color: #16a34a;
}

.time-comparison.negative {
    color: #dc2626;
}

.bounce-metric .bounce-value {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.bounce-bar {
    width: 100%;
    height: 4px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.bounce-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #ef4444, #f87171);
    transition: width 1s ease-in-out;
}

.page-high .bounce-fill { background: linear-gradient(90deg, #10b981, #22c55e); }
.page-medium .bounce-fill { background: linear-gradient(90deg, #10b981, #22c55e); }

.engagement-score {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.score-circle {
    position: relative;
    width: 40px;
    height: 40px;
}

.score-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.75rem;
    font-weight: 700;
    color: #1f2937;
}

.engagement-score.high .score-value { color: #10b981; }
.engagement-score.low .score-value { color: #ef4444; }

.score-label {
    font-size: 0.875rem;
    font-weight: 600;
}

.engagement-score.high .score-label { color: #10b981; }
.engagement-score.low .score-label { color: #ef4444; }

.behavior-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.action-btn.analyze {
    background: #3b82f6;
    color: white;
}

.action-btn.optimize {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
}

.action-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`,
    js: `// User behavior interactions
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.textContent;
        alert(\`Filtering pages by: \${filter}\`);
    });
});

document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent;
        const pageName = this.closest('tr').querySelector('.page-name').textContent;
        alert(\`\${action} page: \${pageName}\`);
    });
});

// Animate bounce bars
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bounce-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 700);
    });
});`
},

// ====================================================================
// ANALYTICS TEMPLATE 45: REVENUE ANALYTICS
// ====================================================================
analytics45: {
    html: `<div class="revenue-analytics-container">
    <div class="revenue-header">
        <h3>💰 Revenue Analytics Dashboard</h3>
        <div class="revenue-summary">
            <div class="summary-card">
                <div class="card-value">$248.5K</div>
                <div class="card-label">Total Revenue</div>
                <div class="card-change positive">+18.4%</div>
            </div>
            <div class="summary-card">
                <div class="card-value">1,248</div>
                <div class="card-label">Total Orders</div>
                <div class="card-change positive">+12.7%</div>
            </div>
            <div class="summary-card">
                <div class="card-value">$199.20</div>
                <div class="card-label">Avg. Order Value</div>
                <div class="card-change positive">+5.1%</div>
            </div>
        </div>
    </div>
    <table class="revenue-analytics-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Units Sold</th>
                <th>Revenue</th>
                <th>Profit Margin</th>
                <th>Growth (MoM)</th>
                <th>Market Share</th>
            </tr>
        </thead>
        <tbody>
            <tr class="product-high">
                <td>
                    <div class="product-info">
                        <div class="product-avatar">💻</div>
                        <div class="product-details">
                            <div class="product-name">MacBook Pro 16"</div>
                            <div class="product-sku">MBP16-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag electronics">Electronics</span>
                </td>
                <td>
                    <div class="units-sold">
                        <div class="units-count">45</div>
                        <div class="units-trend positive">+25%</div>
                    </div>
                </td>
                <td>
                    <div class="revenue-metric">
                        <div class="revenue-amount">$85,245</div>
                        <div class="revenue-percent">34.3% of total</div>
                    </div>
                </td>
                <td>
                    <div class="margin-metric">
                        <div class="margin-value">42.5%</div>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 42.5%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="growth-metric high">
                        <span class="growth-value">+25.8%</span>
                        <span class="growth-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="marketshare-metric">
                        <div class="marketshare-value">18.4%</div>
                        <div class="marketshare-bar">
                            <div class="marketshare-fill" style="width: 18.4%"></div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="product-medium">
                <td>
                    <div class="product-info">
                        <div class="product-avatar">📱</div>
                        <div class="product-details">
                            <div class="product-name">iPhone 15 Pro</div>
                            <div class="product-sku">IP15P-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag electronics">Electronics</span>
                </td>
                <td>
                    <div class="units-sold">
                        <div class="units-count">120</div>
                        <div class="units-trend positive">+18.3%</div>
                    </div>
                </td>
                <td>
                    <div class="revenue-metric">
                        <div class="revenue-amount">$42,180</div>
                        <div class="revenue-percent">17.0% of total</div>
                    </div>
                </td>
                <td>
                    <div class="margin-metric">
                        <div class="margin-value">35.2%</div>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 35.2%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="growth-metric medium">
                        <span class="growth-value">+18.3%</span>
                        <span class="growth-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="marketshare-metric">
                        <div class="marketshare-value">12.7%</div>
                        <div class="marketshare-bar">
                            <div class="marketshare-fill" style="width: 12.7%"></div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="product-low">
                <td>
                    <div class="product-info">
                        <div class="product-avatar">🎧</div>
                        <div class="product-details">
                            <div class="product-name">Wireless Earbuds</div>
                            <div class="product-sku">WEB-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag accessories">Accessories</span>
                </td>
                <td>
                    <div class="units-sold">
                        <div class="units-count">285</div>
                        <div class="units-trend positive">+8.7%</div>
                    </div>
                </td>
                <td>
                    <div class="revenue-metric">
                        <div class="revenue-amount">$28,500</div>
                        <div class="revenue-percent">11.5% of total</div>
                    </div>
                </td>
                <td>
                    <div class="margin-metric">
                        <div class="margin-value">28.7%</div>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 28.7%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="growth-metric low">
                        <span class="growth-value">+8.7%</span>
                        <span class="growth-arrow">↗</span>
                    </div>
                </td>
                <td>
                    <div class="marketshare-metric">
                        <div class="marketshare-value">8.2%</div>
                        <div class="marketshare-bar">
                            <div class="marketshare-fill" style="width: 8.2%"></div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.revenue-analytics-container {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
}

.revenue-header {
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, #059669, #047857);
    color: white;
}

.revenue-header h3 {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.revenue-summary {
    display: flex;
    gap: 2rem;
}

.summary-card {
    flex: 1;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
}

.card-value {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.card-label {
    font-size: 0.875rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.card-change {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.2);
}

.card-change.positive {
    background: rgba(34, 197, 94, 0.3);
}

.revenue-analytics-table {
    width: 100%;
    border-collapse: collapse;
}

.revenue-analytics-table th {
    padding: 1.25rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    background: #f9fafb;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.revenue-analytics-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.product-high { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }
.product-medium { background: linear-gradient(90deg, rgba(59, 130, 246, 0.05), transparent); }
.product-low { background: linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent); }

.revenue-analytics-table tr:hover {
    background: #f9fafb;
}

.product-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.product-avatar {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: white;
}

.product-medium .product-avatar { background: linear-gradient(135deg, #10b981, #059669); }
.product-low .product-avatar { background: linear-gradient(135deg, #f59e0b, #d97706); }

.product-details .product-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.product-details .product-sku {
    font-size: 0.875rem;
    color: #9ca3af;
    font-family: 'Courier New', monospace;
}

.category-tag {
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.category-tag.electronics {
    background: rgba(59, 130, 246, 0.1);
    color: #1d4ed8;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.category-tag.accessories {
    background: rgba(168, 85, 247, 0.1);
    color: #7c3aed;
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.units-sold .units-count {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.units-trend {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
}

.units-trend.positive {
    background: #f0fdf4;
    color: #16a34a;
}

.revenue-metric .revenue-amount {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.revenue-percent {
    font-size: 0.875rem;
    color: #6b7280;
}

.margin-metric .margin-value {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.margin-bar {
    width: 100%;
    height: 6px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.margin-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #10b981, #22c55e);
    transition: width 1s ease-in-out;
}

.product-medium .margin-fill { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
.product-low .margin-fill { background: linear-gradient(90deg, #f59e0b, #fbbf24); }

.growth-metric {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-weight: 600;
}

.growth-metric.high {
    background: #f0fdf4;
    color: #16a34a;
}

.growth-metric.medium {
    background: #dbeafe;
    color: #1d4ed8;
}

.growth-metric.low {
    background: #fef3c7;
    color: #d97706;
}

.growth-arrow {
    font-size: 1rem;
    font-weight: 700;
}

.marketshare-metric .marketshare-value {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.marketshare-bar {
    width: 100%;
    height: 4px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.marketshare-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #8b5cf6, #a78bfa);
    transition: width 1s ease-in-out;
}`,
    js: `// Animate revenue analytics bars
document.addEventListener('DOMContentLoaded', function() {
    const marginBars = document.querySelectorAll('.margin-fill');
    const marketBars = document.querySelectorAll('.marketshare-fill');
    
    marginBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
    
    marketBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 800);
    });
});`
},

// ====================================================================
// ANALYTICS TEMPLATE 46: REAL-TIME DASHBOARD
// ====================================================================
analytics46: {
    html: `<div class="realtime-dashboard-container">
    <div class="dashboard-header">
        <h3>⚡ Real-time Analytics Dashboard</h3>
        <div class="dashboard-controls">
            <div class="last-updated">
                <span class="update-indicator"></span>
                Last updated: <span class="update-time">Just now</span>
            </div>
            <button class="refresh-btn">🔄 Refresh</button>
        </div>
    </div>
    <table class="realtime-dashboard-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current Value</th>
                <th>Target</th>
                <th>Status</th>
                <th>Trend</th>
                <th>Alert Level</th>
            </tr>
        </thead>
        <tbody>
            <tr class="metric-healthy">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">👥</div>
                        <div class="metric-details">
                            <div class="metric-name">Active Users</div>
                            <div class="metric-description">Currently online</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value">
                        <span class="value-number">1,245</span>
                        <span class="value-unit">users</span>
                    </div>
                </td>
                <td>
                    <div class="target-value">1,500 users</div>
                </td>
                <td>
                    <div class="status-indicator healthy">
                        <span class="status-dot"></span>
                        <span class="status-text">Healthy</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+12/min</span>
                    </div>
                </td>
                <td>
                    <div class="alert-level normal">
                        <span class="alert-icon">✅</span>
                        <span class="alert-text">Normal</span>
                    </div>
                </td>
            </tr>
            <tr class="metric-warning">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">⚡</div>
                        <div class="metric-details">
                            <div class="metric-name">Response Time</div>
                            <div class="metric-description">API latency</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value">
                        <span class="value-number">245</span>
                        <span class="value-unit">ms</span>
                    </div>
                </td>
                <td>
                    <div class="target-value">< 200ms</div>
                </td>
                <td>
                    <div class="status-indicator warning">
                        <span class="status-dot"></span>
                        <span class="status-text">Warning</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+15ms</span>
                    </div>
                </td>
                <td>
                    <div class="alert-level warning">
                        <span class="alert-icon">⚠️</span>
                        <span class="alert-text">Warning</span>
                    </div>
                </td>
            </tr>
            <tr class="metric-critical">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">🔄</div>
                        <div class="metric-details">
                            <div class="metric-name">Error Rate</div>
                            <div class="metric-description">Failed requests</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value">
                        <span class="value-number">5.2</span>
                        <span class="value-unit">%</span>
                    </div>
                </td>
                <td>
                    <div class="target-value">< 2%</div>
                </td>
                <td>
                    <div class="status-indicator critical">
                        <span class="status-dot"></span>
                        <span class="status-text">Critical</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+1.8%</span>
                    </div>
                </td>
                <td>
                    <div class="alert-level critical">
                        <span class="alert-icon">🚨</span>
                        <span class="alert-text">Critical</span>
                    </div>
                </td>
            </tr>
            <tr class="metric-healthy">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">💾</div>
                        <div class="metric-details">
                            <div class="metric-name">Server Load</div>
                            <div class="metric-description">CPU utilization</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value">
                        <span class="value-number">68</span>
                        <span class="value-unit">%</span>
                    </div>
                </td>
                <td>
                    <div class="target-value">< 80%</div>
                </td>
                <td>
                    <div class="status-indicator healthy">
                        <span class="status-dot"></span>
                        <span class="status-text">Healthy</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator down">
                        <span class="trend-arrow">↘</span>
                        <span class="trend-value">-5%</span>
                    </div>
                </td>
                <td>
                    <div class="alert-level normal">
                        <span class="alert-icon">✅</span>
                        <span class="alert-text">Normal</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.realtime-dashboard-container {
    background: #0f172a;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    border: 1px solid #1e293b;
}

.dashboard-header {
    padding: 1.5rem 2rem;
    background: #1e293b;
    border-bottom: 1px solid #334155;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dashboard-header h3 {
    margin: 0;
    color: #f1f5f9;
    font-size: 1.5rem;
    font-weight: 600;
}

.dashboard-controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.last-updated {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #94a3b8;
}

.update-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    animation: pulse 2s infinite;
}

.update-time {
    color: #e2e8f0;
    font-weight: 600;
}

.refresh-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #334155;
    border-radius: 6px;
    background: #1e293b;
    color: #e2e8f0;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.refresh-btn:hover {
    background: #334155;
    border-color: #475569;
}

.realtime-dashboard-table {
    width: 100%;
    border-collapse: collapse;
}

.realtime-dashboard-table th {
    padding: 1.25rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #94a3b8;
    border-bottom: 1px solid #334155;
    background: #1e293b;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.realtime-dashboard-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #1e293b;
    color: #cbd5e1;
}

.metric-healthy { background: linear-gradient(90deg, rgba(34, 197, 94, 0.05), transparent); }
.metric-warning { background: linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent); }
.metric-critical { background: linear-gradient(90deg, rgba(239, 68, 68, 0.05), transparent); }

.realtime-dashboard-table tr:hover {
    background: #1e293b;
}

.metric-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.metric-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #10b981, #059669);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
}

.metric-warning .metric-icon { background: linear-gradient(135deg, #f59e0b, #d97706); }
.metric-critical .metric-icon { background: linear-gradient(135deg, #ef4444, #dc2626); }

.metric-details .metric-name {
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 0.25rem;
}

.metric-details .metric-description {
    font-size: 0.875rem;
    color: #94a3b8;
}

.current-value {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
}

.value-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f1f5f9;
}

.value-unit {
    font-size: 0.875rem;
    color: #94a3b8;
}

.target-value {
    color: #94a3b8;
    font-size: 0.875rem;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-indicator.healthy {
    background: rgba(34, 197, 94, 0.1);
    color: #10b981;
    border: 1px solid rgba(34, 197, 94, 0.2);
}

.status-indicator.warning {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.2);
}

.status-indicator.critical {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.status-indicator.healthy .status-dot { background: #10b981; }
.status-indicator.warning .status-dot { background: #f59e0b; }
.status-indicator.critical .status-dot { background: #ef4444; }

.trend-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
}

.trend-indicator.up {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.trend-indicator.down {
    background: rgba(34, 197, 94, 0.1);
    color: #10b981;
}

.trend-arrow {
    font-size: 1rem;
    font-weight: 700;
}

.alert-level {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.alert-level.normal {
    background: rgba(34, 197, 94, 0.1);
    color: #10b981;
    border: 1px solid rgba(34, 197, 94, 0.2);
}

.alert-level.warning {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.2);
}

.alert-level.critical {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.2);
    animation: alertPulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes alertPulse {
    0%, 100% { 
        background: rgba(239, 68, 68, 0.1);
        border-color: rgba(239, 68, 68, 0.2);
    }
    50% { 
        background: rgba(239, 68, 68, 0.2);
        border-color: rgba(239, 68, 68, 0.3);
    }
}`,
    js: `// Real-time dashboard interactions
document.querySelector('.refresh-btn').addEventListener('click', function() {
    this.textContent = '🔄 Refreshing...';
    this.disabled = true;
    
    setTimeout(() => {
        this.textContent = '🔄 Refresh';
        this.disabled = false;
        document.querySelector('.update-time').textContent = 'Just now';
        alert('Dashboard data refreshed!');
    }, 1500);
});

// Simulate real-time updates
setInterval(() => {
    const time = new Date().toLocaleTimeString();
    document.querySelector('.update-time').textContent = time;
}, 30000);`
},
    
};

// ====================================================================
// MAIN FUNCTIONALITY - TABLE TEMPLATES GALLERY
// Handles modal, code preview, copy functionality and filtering
// ====================================================================

// Initialize table templates functionality
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('codeModal');
    const codeBtns = document.querySelectorAll('.code-btn');
    const closeModal = document.querySelector('.close-modal');
    const codeTabs = document.querySelectorAll('.code-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const copyNotification = document.getElementById('copyNotification');

    // Ensure copy notification is hidden on page load
    copyNotification.style.display = 'none';

    // Open modal with template code
    codeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (templateCodes[templateId]) {
                htmlCode.querySelector('code').textContent = templateCodes[templateId].html;
                cssCode.querySelector('code').textContent = templateCodes[templateId].css;
                jsCode.querySelector('code').textContent = templateCodes[templateId].js;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Hide notification when modal opens
                copyNotification.style.display = 'none';
                
                // Reset tabs to show HTML first
                codeTabs.forEach(tab => tab.classList.remove('active'));
                document.querySelector('.code-tab[data-tab="html"]').classList.add('active');
                document.querySelectorAll('.code-content pre').forEach(pre => {
                    pre.style.display = 'none';
                });
                document.getElementById('html-code').style.display = 'block';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        copyNotification.style.display = 'none'; // Hide notification when modal closes
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            copyNotification.style.display = 'none'; // Hide notification when modal closes
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            copyNotification.style.display = 'none'; // Hide notification when modal closes
        }
    });

    // Switch between code tabs
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            codeTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all code content
            document.querySelectorAll('.code-content pre').forEach(pre => {
                pre.style.display = 'none';
            });
            
            // Show selected code content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}-code`).style.display = 'block';
        });
    });

    // Copy code to clipboard
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('copy-btn')) {
            const targetId = e.target.getAttribute('data-target');
            const codeElement = document.getElementById(targetId).querySelector('code');
            const textToCopy = codeElement.textContent;
            
            // Use modern Clipboard API
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyNotification();
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyNotification();
            });
        }
    });

    function showCopyNotification() {
        // Hide any existing notification first
        copyNotification.style.display = 'none';
        
        // Force reflow
        void copyNotification.offsetWidth;
        
        // Show notification
        copyNotification.style.display = 'block';
        
        // Hide after 2 seconds
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000);
    }

    // Category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            const templateCards = document.querySelectorAll('.template-card');
            
            templateCards.forEach(card => {
                const categories = card.getAttribute('data-categories');
                if (category === 'all' || categories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Touch device improvements
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Load Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(faLink);
    }
});

// Handle resize events for better mobile experience
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any dynamic layouts if needed
        const templateCards = document.querySelectorAll('.template-card');
        templateCards.forEach(card => {
            card.style.display = 'block'; // Reset display on resize
        });
    }, 250);
});