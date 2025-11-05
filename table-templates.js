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