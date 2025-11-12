// Template code data for table templates
const templateCodes = {
    
    // ====================================================================
    // TEMPLATE 1: MODERN BUSINESS TABLE (Already exists)
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
    animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
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
    transition: all 0.3s ease;
}

.modern-table tr:hover {
    background: #f9fafb;
    transform: translateX(5px);
}

.modern-table tr:hover td {
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
    transition: transform 0.3s ease;
}

.user-info:hover .avatar {
    transform: scale(1.1);
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
    transition: all 0.3s ease;
}

.status.active {
    background: #d1fae5;
    color: #065f46;
}

.status.inactive {
    background: #fee2e2;
    color: #991b1b;
}

.status.pending {
    background: #fef3c7;
    color: #92400e;
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
    transform: translateY(-2px);
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
    transform: translateY(-2px);
}`,
        js: `// Table row hover animations
document.querySelectorAll('.modern-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});`
    },

    // ====================================================================
    // TEMPLATE 2: FINANCIAL DATA TABLE
    // ====================================================================
    table2: {
        html: `<div class="financial-table-container">
    <table class="financial-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Q1 Sales</th>
                <th>Q2 Sales</th>
                <th>Growth</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Laptop Pro</td>
                <td>$125,430</td>
                <td>$148,920</td>
                <td><span class="growth positive">+18.7%</span></td>
                <td>
                    <div class="trend-chart">
                        <div class="bar" style="height: 60%; background: #10b981;"></div>
                        <div class="bar" style="height: 80%; background: #10b981;"></div>
                        <div class="bar" style="height: 45%; background: #ef4444;"></div>
                        <div class="bar" style="height: 90%; background: #10b981;"></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Smartphone X</td>
                <td>$89,560</td>
                <td>$95,320</td>
                <td><span class="growth positive">+6.4%</span></td>
                <td>
                    <div class="trend-chart">
                        <div class="bar" style="height: 70%; background: #10b981;"></div>
                        <div class="bar" style="height: 65%; background: #f59e0b;"></div>
                        <div class="bar" style="height: 75%; background: #10b981;"></div>
                        <div class="bar" style="height: 80%; background: #10b981;"></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Tablet Mini</td>
                <td>$45,780</td>
                <td>$42,150</td>
                <td><span class="growth negative">-7.9%</span></td>
                <td>
                    <div class="trend-chart">
                        <div class="bar" style="height: 80%; background: #10b981;"></div>
                        <div class="bar" style="height: 60%; background: #ef4444;"></div>
                        <div class="bar" style="height: 55%; background: #ef4444;"></div>
                        <div class="bar" style="height: 50%; background: #ef4444;"></div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.financial-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: fadeInScale 0.6s ease-out;
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.financial-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.financial-table th {
    background: linear-gradient(135deg, #1e293b, #374151);
    color: white;
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 2px solid #4b5563;
}

.financial-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    font-weight: 500;
}

.financial-table tr:hover td {
    background: #f8fafc;
    transform: translateX(8px);
}

.financial-table tr {
    transition: all 0.3s ease;
}

.growth {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.growth.positive {
    background: #d1fae5;
    color: #065f46;
    animation: pulseGreen 2s infinite;
}

.growth.negative {
    background: #fee2e2;
    color: #dc2626;
}

@keyframes pulseGreen {
    0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
    50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
}

.trend-chart {
    display: flex;
    align-items: end;
    gap: 4px;
    height: 30px;
    width: 80px;
}

.bar {
    width: 12px;
    border-radius: 2px 2px 0 0;
    transition: all 0.3s ease;
    animation: barGrow 1s ease-out;
}

@keyframes barGrow {
    from { height: 0%; opacity: 0; }
    to { height: var(--target-height); opacity: 1; }
}

.financial-table tr:hover .bar {
    transform: scaleY(1.1);
}`,
        js: `// Animate bars on load
document.querySelectorAll('.bar').forEach(bar => {
    const height = bar.style.height;
    bar.style.setProperty('--target-height', height);
    bar.style.height = '0%';
    
    setTimeout(() => {
        bar.style.height = height;
    }, 300);
});`
    },

    // ====================================================================
    // TEMPLATE 3: PROJECT MANAGEMENT TABLE
    // ====================================================================
    table3: {
        html: `<div class="project-table-container">
    <table class="project-table">
        <thead>
            <tr>
                <th>Project</th>
                <th>Team</th>
                <th>Deadline</th>
                <th>Progress</th>
                <th>Priority</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">🚀</div>
                        <div class="project-details">
                            <div class="project-name">Website Redesign</div>
                            <div class="project-desc">Company portfolio update</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-avatars">
                        <div class="team-avatar" style="background: #7c3aed;">JD</div>
                        <div class="team-avatar" style="background: #ec4899;">AS</div>
                        <div class="team-avatar" style="background: #10b981;">+2</div>
                    </div>
                </td>
                <td>Dec 15, 2024</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 75%; background: #10b981;"></div>
                        </div>
                        <span class="progress-text">75%</span>
                    </div>
                </td>
                <td><span class="priority high">High</span></td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">📱</div>
                        <div class="project-details">
                            <div class="project-name">Mobile App</div>
                            <div class="project-desc">Customer engagement platform</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-avatars">
                        <div class="team-avatar" style="background: #3b82f6;">MS</div>
                        <div class="team-avatar" style="background: #f59e0b;">RJ</div>
                    </div>
                </td>
                <td>Jan 30, 2024</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 45%; background: #f59e0b;"></div>
                        </div>
                        <span class="progress-text">45%</span>
                    </div>
                </td>
                <td><span class="priority medium">Medium</span></td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">🛒</div>
                        <div class="project-details">
                            <div class="project-name">E-commerce</div>
                            <div class="project-desc">Online store development</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-avatars">
                        <div class="team-avatar" style="background: #ef4444;">TK</div>
                        <div class="team-avatar" style="background: #8b5cf6;">LM</div>
                        <div class="team-avatar" style="background: #06b6d4;">+3</div>
                    </div>
                </td>
                <td>Nov 20, 2024</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 90%; background: #ef4444;"></div>
                        </div>
                        <span class="progress-text">90%</span>
                    </div>
                </td>
                <td><span class="priority urgent">Urgent</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.project-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideInRight 0.6s ease-out;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.project-table {
    width: 100%;
    border-collapse: collapse;
}

.project-table th {
    background: #f8fafc;
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.9rem;
}

.project-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

.project-table tr:hover td {
    background: #f0f9ff;
    transform: translateX(5px);
}

.project-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.project-table tr:hover .project-icon {
    transform: scale(1.2) rotate(10deg);
}

.project-details .project-name {
    font-weight: 600;
    color: #1f2937;
}

.project-details .project-desc {
    font-size: 0.8rem;
    color: #6b7280;
}

.team-avatars {
    display: flex;
    gap: 0.3rem;
}

.team-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.project-table tr:hover .team-avatar {
    transform: translateY(-3px) scale(1.1);
}

.progress-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.progress-bar {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1.5s ease-in-out;
    animation: progressAnimation 1.5s ease-out;
}

@keyframes progressAnimation {
    from { width: 0%; }
    to { width: var(--target-width); }
}

.progress-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
    min-width: 35px;
}

.priority {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.priority.high {
    background: #fef3c7;
    color: #92400e;
}

.priority.medium {
    background: #e0e7ff;
    color: #3730a3;
}

.priority.urgent {
    background: #fee2e2;
    color: #dc2626;
    animation: pulseRed 2s infinite;
}

@keyframes pulseRed {
    0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
    50% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
}`,
        js: `// Animate progress bars on load
document.querySelectorAll('.progress-fill').forEach(progress => {
    const width = progress.style.width;
    progress.style.setProperty('--target-width', width);
    progress.style.width = '0%';
    
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});`
    },

    // ====================================================================
    // TEMPLATE 4: SALES PERFORMANCE TABLE
    // ====================================================================
    table4: {
        html: `<div class="sales-table-container">
    <table class="sales-table">
        <thead>
            <tr>
                <th>Sales Rep</th>
                <th>Region</th>
                <th>Deals</th>
                <th>Revenue</th>
                <th>Target</th>
                <th>Performance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="sales-rep">
                        <div class="rep-avatar" style="background: #7c3aed;">SR</div>
                        <div class="rep-info">
                            <div class="rep-name">Sarah Johnson</div>
                            <div class="rep-title">Senior Rep</div>
                        </div>
                    </div>
                </td>
                <td>North America</td>
                <td>24</td>
                <td>$284,500</td>
                <td>$250,000</td>
                <td>
                    <div class="performance-indicator">
                        <div class="performance-bar">
                            <div class="performance-fill exceeded"></div>
                        </div>
                        <span class="performance-text">+13.8%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="sales-rep">
                        <div class="rep-avatar" style="background: #10b981;">MR</div>
                        <div class="rep-info">
                            <div class="rep-name">Mike Rodriguez</div>
                            <div class="rep-title">Account Exec</div>
                        </div>
                    </div>
                </td>
                <td>Europe</td>
                <td>18</td>
                <td>$198,200</td>
                <td>$200,000</td>
                <td>
                    <div class="performance-indicator">
                        <div class="performance-bar">
                            <div class="performance-fill on-track"></div>
                        </div>
                        <span class="performance-text">-0.9%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="sales-rep">
                        <div class="rep-avatar" style="background: #f59e0b;">ED</div>
                        <div class="rep-info">
                            <div class="rep-name">Emily Davis</div>
                            <div class="rep-title">Sales Manager</div>
                        </div>
                    </div>
                </td>
                <td>Asia Pacific</td>
                <td>31</td>
                <td>$412,800</td>
                <td>$350,000</td>
                <td>
                    <div class="performance-indicator">
                        <div class="performance-bar">
                            <div class="performance-fill exceeded"></div>
                        </div>
                        <span class="performance-text">+17.9%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.sales-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: bounceIn 0.8s ease-out;
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.sales-table {
    width: 100%;
    border-collapse: collapse;
}

.sales-table th {
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 2px solid #047857;
}

.sales-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
    font-weight: 500;
}

.sales-table tr:hover td {
    background: #f0fdf4;
    transform: scale(1.02);
}

.sales-rep {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.rep-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.sales-table tr:hover .rep-avatar {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.rep-info .rep-name {
    font-weight: 600;
    color: #1f2937;
}

.rep-info .rep-title {
    font-size: 0.8rem;
    color: #6b7280;
}

.performance-indicator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.performance-bar {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.performance-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1.5s ease-in-out;
    animation: performanceAnimation 1.5s ease-out;
    position: relative;
}

.performance-fill.exceeded {
    background: linear-gradient(90deg, #10b981, #34d399);
    width: 113%;
}

.performance-fill.on-track {
    background: linear-gradient(90deg, #f59e0b, #fbbf24);
    width: 99%;
}

@keyframes performanceAnimation {
    from { width: 0%; }
    to { width: var(--target-width); }
}

.performance-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.4), 
        transparent
    );
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.performance-text {
    font-size: 0.8rem;
    font-weight: 600;
    min-width: 50px;
    text-align: right;
}

.performance-fill.exceeded + .performance-text {
    color: #065f46;
}

.performance-fill.on-track + .performance-text {
    color: #92400e;
}

.sales-table tr:nth-child(1) .performance-fill {
    animation-delay: 0.1s;
}

.sales-table tr:nth-child(2) .performance-fill {
    animation-delay: 0.3s;
}

.sales-table tr:nth-child(3) .performance-fill {
    animation-delay: 0.5s;
}`,
        js: `// Animate performance bars with delays
document.querySelectorAll('.performance-fill').forEach((fill, index) => {
    const width = fill.style.width || fill.classList.contains('exceeded') ? '113%' : '99%';
    fill.style.setProperty('--target-width', width);
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 300 + (index * 200));
});`
    },

    // ====================================================================
    // TEMPLATE 5: EMPLOYEE DIRECTORY TABLE
    // ====================================================================
    table5: {
        html: `<div class="employee-table-container">
    <table class="employee-table">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Department</th>
                <th>Join Date</th>
                <th>Salary</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="John Doe">
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">John Doe</div>
                            <div class="employee-id">EMP-001</div>
                        </div>
                    </div>
                </td>
                <td>Senior Developer</td>
                <td>Engineering</td>
                <td>Jan 15, 2020</td>
                <td>$95,000</td>
                <td>
                    <div class="rating">
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star">⭐</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Jane Smith">
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Jane Smith</div>
                            <div class="employee-id">EMP-002</div>
                        </div>
                    </div>
                </td>
                <td>UX Designer</td>
                <td>Design</td>
                <td>Mar 22, 2021</td>
                <td>$85,000</td>
                <td>
                    <div class="rating">
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Robert Kim">
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Robert Kim</div>
                            <div class="employee-id">EMP-003</div>
                        </div>
                    </div>
                </td>
                <td>Product Manager</td>
                <td>Product</td>
                <td>Aug 10, 2019</td>
                <td>$110,000</td>
                <td>
                    <div class="rating">
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.employee-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: flipInX 0.8s ease-out;
}

@keyframes flipInX {
    from {
        opacity: 0;
        transform: perspective(400px) rotateX(90deg);
    }
    to {
        opacity: 1;
        transform: perspective(400px) rotateX(0);
    }
}

.employee-table {
    width: 100%;
    border-collapse: collapse;
}

.employee-table th {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 2px solid #4f46e5;
}

.employee-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

.employee-table tr {
    transition: all 0.3s ease;
}

.employee-table tr:hover {
    background: #faf5ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
}

.employee-table tr:hover td {
    background: transparent;
}

.employee-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.employee-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
}

.employee-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.employee-table tr:hover .employee-avatar {
    border-color: #8b5cf6;
    transform: scale(1.1);
}

.employee-details .employee-name {
    font-weight: 600;
    color: #1f2937;
}

.employee-details .employee-id {
    font-size: 0.75rem;
    color: #6b7280;
    font-family: 'Courier New', monospace;
}

.rating {
    display: flex;
    gap: 2px;
}

.star {
    font-size: 1rem;
    opacity: 0.3;
    transition: all 0.3s ease;
    animation: starTwinkle 2s infinite;
}

.star.filled {
    opacity: 1;
    color: #f59e0b;
    animation: starPulse 1.5s infinite;
}

@keyframes starPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

@keyframes starTwinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
}

.employee-table tr:hover .star.filled {
    animation: starBounce 0.6s ease;
}

@keyframes starBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-8px); }
    60% { transform: translateY(-4px); }
}

/* Staggered animation for stars */
.rating .star:nth-child(1) { animation-delay: 0.1s; }
.rating .star:nth-child(2) { animation-delay: 0.2s; }
.rating .star:nth-child(3) { animation-delay: 0.3s; }
.rating .star:nth-child(4) { animation-delay: 0.4s; }
.rating .star:nth-child(5) { animation-delay: 0.5s; }`,
        js: `// Add hover effects for employee rows
document.querySelectorAll('.employee-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.15)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Animate stars on load
document.querySelectorAll('.star.filled').forEach((star, index) => {
    star.style.animationDelay = `
},
    // ====================================================================
    // TEMPLATE 6: BUSINESS METRICS DASHBOARD TABLE
    // ====================================================================
    table6: {
        html: `<div class="metrics-table-container">
    <table class="metrics-table">
        <thead>
            <tr>
                <th>KPI</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Trend</th>
                <th>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="kpi-info">
                        <div class="kpi-icon">📈</div>
                        <div class="kpi-details">
                            <div class="kpi-name">Revenue Growth</div>
                            <div class="kpi-desc">Monthly recurring</div>
                        </div>
                    </div>
                </td>
                <td>$125K</td>
                <td>$98K</td>
                <td><span class="change positive">+27.5%</span></td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline-bar" style="height: 40%"></div>
                        <div class="sparkline-bar" style="height: 60%"></div>
                        <div class="sparkline-bar" style="height: 55%"></div>
                        <div class="sparkline-bar" style="height: 80%"></div>
                        <div class="sparkline-bar" style="height: 95%"></div>
                    </div>
                </td>
                <td>
                    <div class="target-indicator">
                        <div class="target-progress" style="width: 125%"></div>
                        <span class="target-text">125%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-info">
                        <div class="kpi-icon">👥</div>
                        <div class="kpi-details">
                            <div class="kpi-name">Customer Acquisition</div>
                            <div class="kpi-desc">New customers</div>
                        </div>
                    </div>
                </td>
                <td>1,248</td>
                <td>956</td>
                <td><span class="change positive">+30.5%</span></td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline-bar" style="height: 35%"></div>
                        <div class="sparkline-bar" style="height: 45%"></div>
                        <div class="sparkline-bar" style="height: 65%"></div>
                        <div class="sparkline-bar" style="height: 75%"></div>
                        <div class="sparkline-bar" style="height: 100%"></div>
                    </div>
                </td>
                <td>
                    <div class="target-indicator">
                        <div class="target-progress" style="width: 104%"></div>
                        <span class="target-text">104%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-info">
                        <div class="kpi-icon">💬</div>
                        <div class="kpi-details">
                            <div class="kpi-name">Customer Satisfaction</div>
                            <div class="kpi-desc">CSAT Score</div>
                        </div>
                    </div>
                </td>
                <td>4.8/5</td>
                <td>4.6/5</td>
                <td><span class="change positive">+4.3%</span></td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline-bar" style="height: 80%"></div>
                        <div class="sparkline-bar" style="height: 85%"></div>
                        <div class="sparkline-bar" style="height: 82%"></div>
                        <div class="sparkline-bar" style="height: 88%"></div>
                        <div class="sparkline-bar" style="height: 96%"></div>
                    </div>
                </td>
                <td>
                    <div class="target-indicator">
                        <div class="target-progress" style="width: 96%"></div>
                        <span class="target-text">96%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.metrics-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideInUp 0.6s ease-out;
}

.metrics-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
}

.metrics-table th {
    background: linear-gradient(135deg, #1a56db, #1e40af);
    color: white;
    padding: 1.3rem 1.2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 3px solid #1e3a8a;
    position: relative;
    overflow: hidden;
}

.metrics-table th::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.metrics-table td {
    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.metrics-table tr {
    transition: all 0.3s ease;
}

.metrics-table tr:hover {
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    transform: translateX(8px);
}

.metrics-table tr:hover td {
    background: transparent;
}

.metrics-table tr:hover td::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(135deg, #1a56db, #06b6d4);
    animation: slideInLeft 0.3s ease-out;
}

@keyframes slideInLeft {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.kpi-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.kpi-icon {
    font-size: 1.4rem;
    transition: all 0.3s ease;
}

.metrics-table tr:hover .kpi-icon {
    transform: scale(1.2) rotate(5deg);
}

.kpi-details .kpi-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.95rem;
}

.kpi-details .kpi-desc {
    font-size: 0.8rem;
    color: #64748b;
}

.change {
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    transition: all 0.3s ease;
    display: inline-block;
    animation: bounceIn 0.6s ease-out;
}

.change.positive {
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.trend-sparkline {
    display: flex;
    align-items: end;
    gap: 3px;
    height: 35px;
    width: 80px;
}

.sparkline-bar {
    width: 8px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    transition: all 0.4s ease;
    animation: sparklineGrow 1s ease-out;
}

@keyframes sparklineGrow {
    from { 
        height: 0%; 
        opacity: 0; 
        transform: translateY(10px);
    }
    to { 
        height: var(--target-height); 
        opacity: 1;
        transform: translateY(0);
    }
}

.metrics-table tr:hover .sparkline-bar {
    transform: scaleY(1.2);
    background: linear-gradient(135deg, #1d4ed8, #0891b2);
}

.target-indicator {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: #f8fafc;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
}

.target-progress {
    height: 6px;
    background: linear-gradient(135deg, #10b981, #34d399);
    border-radius: 10px;
    transition: width 1.5s ease-in-out;
    animation: targetProgress 1.5s ease-out;
    position: relative;
}

@keyframes targetProgress {
    from { width: 0%; }
    to { width: var(--target-width); }
}

.target-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: progressShimmer 2s infinite;
}

@keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.target-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: #1e293b;
    min-width: 40px;
    text-align: center;
}

/* Staggered animations */
.metrics-table tr:nth-child(1) .sparkline-bar { animation-delay: 0.1s; }
.metrics-table tr:nth-child(2) .sparkline-bar { animation-delay: 0.2s; }
.metrics-table tr:nth-child(3) .sparkline-bar { animation-delay: 0.3s; }

.metrics-table tr:nth-child(1) .target-progress { animation-delay: 0.4s; }
.metrics-table tr:nth-child(2) .target-progress { animation-delay: 0.5s; }
.metrics-table tr:nth-child(3) .target-progress { animation-delay: 0.6s; }`,
        js: `// Animate sparkline bars
document.querySelectorAll('.sparkline-bar').forEach(bar => {
    const height = bar.style.height;
    bar.style.setProperty('--target-height', height);
    bar.style.height = '0%';
    
    setTimeout(() => {
        bar.style.height = height;
    }, 300);
});

// Animate target progress
document.querySelectorAll('.target-progress').forEach(progress => {
    const width = progress.style.width;
    progress.style.setProperty('--target-width', width);
    progress.style.width = '0%';
    
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});`
    },

    // ====================================================================
    // TEMPLATE 7: REAL-TIME ANALYTICS TABLE
    // ====================================================================
    table7: {
        html: `<div class="analytics-table-container">
    <div class="table-header">
        <h3>Real-Time Analytics</h3>
        <div class="live-indicator">
            <span class="live-dot"></span>
            LIVE
        </div>
    </div>
    <table class="analytics-table">
        <thead>
            <tr>
                <th>Page</th>
                <th>Visitors</th>
                <th>Bounce Rate</th>
                <th>Avg. Time</th>
                <th>Conversions</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
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
                    <div class="metric-with-change">
                        <span class="metric-value">12,458</span>
                        <span class="metric-change positive">+12%</span>
                    </div>
                </td>
                <td>32%</td>
                <td>3m 24s</td>
                <td>8.2%</td>
                <td>
                    <div class="analytics-trend up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+15%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="page-info">
                        <div class="page-icon">🛒</div>
                        <div class="page-details">
                            <div class="page-name">Product Page</div>
                            <div class="page-url">/products</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="metric-with-change">
                        <span class="metric-value">8,742</span>
                        <span class="metric-change positive">+8%</span>
                    </div>
                </td>
                <td>28%</td>
                <td>4m 12s</td>
                <td>12.5%</td>
                <td>
                    <div class="analytics-trend up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+22%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="page-info">
                        <div class="page-icon">📱</div>
                        <div class="page-details">
                            <div class="page-name">Mobile App</div>
                            <div class="page-url">/mobile</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="metric-with-change">
                        <span class="metric-value">6,321</span>
                        <span class="metric-change negative">-3%</span>
                    </div>
                </td>
                <td>45%</td>
                <td>2m 18s</td>
                <td>5.8%</td>
                <td>
                    <div class="analytics-trend down">
                        <span class="trend-arrow">↘</span>
                        <span class="trend-value">-8%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.analytics-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: fadeIn 0.8s ease-out;
    border: 1px solid #e2e8f0;
}

@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: translateY(20px) scale(0.95);
    }
    to { 
        opacity: 1; 
        transform: translateY(0) scale(1);
    }
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-bottom: 1px solid #334155;
}

.table-header h3 {
    color: white;
    margin: 0;
    font-weight: 600;
    font-size: 1.3rem;
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: pulseLive 2s infinite;
}

.live-dot {
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    animation: blink 1.5s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
}

@keyframes pulseLive {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
    }
    50% { 
        box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
    }
}

.analytics-table {
    width: 100%;
    border-collapse: collapse;
}

.analytics-table th {
    background: #f8fafc;
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #475569;
    font-size: 0.85rem;
    border-bottom: 2px solid #e2e8f0;
    position: relative;
}

.analytics-table th::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    animation: headerSlide 3s infinite;
}

@keyframes headerSlide {
    0% { width: 0; left: 0; }
    50% { width: 100%; left: 0; }
    100% { width: 0; left: 100%; }
}

.analytics-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.3s ease;
    position: relative;
}

.analytics-table tr {
    transition: all 0.3s ease;
}

.analytics-table tr:hover {
    background: #f8fafc;
    transform: translateX(5px);
}

.analytics-table tr:hover td {
    background: transparent;
}

.analytics-table tr:hover td::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
}

.page-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.page-icon {
    font-size: 1.3rem;
    transition: all 0.3s ease;
}

.analytics-table tr:hover .page-icon {
    transform: scale(1.2) rotate(10deg);
}

.page-details .page-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.9rem;
}

.page-details .page-url {
    font-size: 0.75rem;
    color: #64748b;
    font-family: 'Courier New', monospace;
}

.metric-with-change {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.metric-value {
    font-weight: 700;
    color: #1e293b;
    font-size: 1rem;
}

.metric-change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.4rem;
    border-radius: 8px;
    width: fit-content;
}

.metric-change.positive {
    background: #d1fae5;
    color: #065f46;
}

.metric-change.negative {
    background: #fee2e2;
    color: #dc2626;
}

.analytics-trend {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: trendPulse 2s infinite;
}

@keyframes trendPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.analytics-trend.up {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.analytics-trend.down {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
}

.trend-arrow {
    font-size: 1rem;
    animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-2px); }
}

/* Real-time data simulation */
@keyframes dataUpdate {
    0% { background: transparent; }
    50% { background: rgba(34, 197, 94, 0.1); }
    100% { background: transparent; }
}

.data-updating {
    animation: dataUpdate 1s ease-in-out;
}`,
        js: `// Simulate real-time data updates
function simulateDataUpdates() {
    const rows = document.querySelectorAll('.analytics-table tbody tr');
    
    setInterval(() => {
        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        randomRow.classList.add('data-updating');
        
        setTimeout(() => {
            randomRow.classList.remove('data-updating');
        }, 1000);
    }, 3000);
}

// Initialize real-time simulation
simulateDataUpdates();

// Add hover effects for trend indicators
document.querySelectorAll('.analytics-trend').forEach(trend => {
    trend.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    trend.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`
    },

    // ====================================================================
    // TEMPLATE 8: INVESTMENT PORTFOLIO TABLE
    // ====================================================================
    table8: {
        html: `<div class="portfolio-table-container">
    <table class="portfolio-table">
        <thead>
            <tr>
                <th>Asset</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Holdings</th>
                <th>Value</th>
                <th>Allocation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🔵</div>
                        <div class="asset-details">
                            <div class="asset-name">Apple Inc.</div>
                            <div class="asset-type">Technology</div>
                        </div>
                    </div>
                </td>
                <td>AAPL</td>
                <td>$182.63</td>
                <td>
                    <div class="price-change positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+2.34%</span>
                    </div>
                </td>
                <td>50 shares</td>
                <td>$9,131.50</td>
                <td>
                    <div class="allocation-container">
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 35%"></div>
                        </div>
                        <span class="allocation-text">35%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🟢</div>
                        <div class="asset-details">
                            <div class="asset-name">Microsoft</div>
                            <div class="asset-type">Technology</div>
                        </div>
                    </div>
                </td>
                <td>MSFT</td>
                <td>$378.85</td>
                <td>
                    <div class="price-change positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+1.87%</span>
                    </div>
                </td>
                <td>20 shares</td>
                <td>$7,577.00</td>
                <td>
                    <div class="allocation-container">
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 28%"></div>
                        </div>
                        <span class="allocation-text">28%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🟡</div>
                        <div class="asset-details">
                            <div class="asset-name">Amazon</div>
                            <div class="asset-type">E-commerce</div>
                        </div>
                    </div>
                </td>
                <td>AMZN</td>
                <td>$145.18</td>
                <td>
                    <div class="price-change negative">
                        <span class="change-arrow">↓</span>
                        <span class="change-value">-0.92%</span>
                    </div>
                </td>
                <td>35 shares</td>
                <td>$5,081.30</td>
                <td>
                    <div class="allocation-container">
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 20%"></div>
                        </div>
                        <span class="allocation-text">20%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.portfolio-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;
    animation: slideInRight 0.7s ease-out;
    border: 1px solid #f1f5f9;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px) rotateY(10deg);
    }
    to {
        opacity: 1;
        transform: translateX(0) rotateY(0);
    }
}

.portfolio-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'SF Pro Display', -apple-system, sans-serif;
}

.portfolio-table th {
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
    padding: 1.3rem 1.2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 3px solid #047857;
    position: relative;
    overflow: hidden;
}

.portfolio-table th::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent
    );
    animation: headerShimmer 4s infinite;
}

@keyframes headerShimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.portfolio-table td {
    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid #f8fafc;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.portfolio-table tr {
    transition: all 0.3s ease;
}

.portfolio-table tr:hover {
    background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15);
}

.portfolio-table tr:hover td {
    background: transparent;
}

.asset-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.asset-icon {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f5f9;
    transition: all 0.4s ease;
}

.portfolio-table tr:hover .asset-icon {
    transform: scale(1.1) rotate(15deg);
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
}

.asset-details .asset-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.95rem;
}

.asset-details .asset-type {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.price-change {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 700;
    transition: all 0.3s ease;
    animation: pricePulse 2s infinite;
}

@keyframes pricePulse {
    0%, 100% { 
        transform: scale(1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    50% { 
        transform: scale(1.05);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
}

.price-change.positive {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.price-change.negative {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
}

.change-arrow {
    font-size: 0.9rem;
    animation: arrowBounce 0.8s infinite alternate;
}

@keyframes arrowBounce {
    from { transform: translateY(0); }
    to { transform: translateY(-2px); }
}

.allocation-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.allocation-bar {
    flex: 1;
    height: 8px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.allocation-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    transition: width 1.5s ease-in-out;
    animation: allocationGrow 1.5s ease-out;
    position: relative;
}

@keyframes allocationGrow {
    from { 
        width: 0%; 
        opacity: 0;
    }
    to { 
        width: var(--target-width); 
        opacity: 1;
    }
}

.allocation-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: allocationShimmer 3s infinite;
}

@keyframes allocationShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.allocation-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: #1e293b;
    min-width: 35px;
    text-align: center;
}

/* Staggered animations for better visual effect */
.portfolio-table tr:nth-child(1) .allocation-fill { animation-delay: 0.1s; }
.portfolio-table tr:nth-child(2) .allocation-fill { animation-delay: 0.3s; }
.portfolio-table tr:nth-child(3) .allocation-fill { animation-delay: 0.5s; }

.portfolio-table tr:nth-child(1) .price-change { animation-delay: 0.2s; }
.portfolio-table tr:nth-child(2) .price-change { animation-delay: 0.4s; }
.portfolio-table tr:nth-child(3) .price-change { animation-delay: 0.6s; }`,
        js: `// Animate allocation bars
document.querySelectorAll('.allocation-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.setProperty('--target-width', width);
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 300);
});

// Add interactive price change effects
document.querySelectorAll('.price-change').forEach(change => {
    change.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
    });
    
    change.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Simulate price updates
function simulatePriceUpdates() {
    const priceChanges = document.querySelectorAll('.price-change');
    
    setInterval(() => {
        const randomChange = priceChanges[Math.floor(Math.random() * priceChanges.length)];
        randomChange.style.animation = 'none';
        setTimeout(() => {
            randomChange.style.animation = 'pricePulse 2s infinite';
        }, 10);
    }, 5000);
}

simulatePriceUpdates();`
    },

    // ====================================================================
    // TEMPLATE 9: TEAM PERFORMANCE SCOREBOARD
    // ====================================================================
    table9: {
        html: `<div class="scoreboard-table-container">
    <table class="scoreboard-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Team Member</th>
                <th>Department</th>
                <th>Tasks Completed</th>
                <th>Quality Score</th>
                <th>Productivity</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr class="first-place">
                <td>
                    <div class="rank-badge gold">1</div>
                </td>
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #f59e0b, #d97706);">SJ</div>
                        <div class="member-details">
                            <div class="member-name">Sarah Johnson</div>
                            <div class="member-role">Lead Developer</div>
                        </div>
                    </div>
                </td>
                <td>Engineering</td>
                <td>42</td>
                <td>
                    <div class="quality-score excellent">98%</div>
                </td>
                <td>
                    <div class="productivity-meter">
                        <div class="productivity-fill" style="width: 95%"></div>
                    </div>
                </td>
                <td>
                    <div class="points-display">
                        <span class="points-value">1,250</span>
                        <span class="points-change positive">+125</span>
                    </div>
                </td>
            </tr>
            <tr class="second-place">
                <td>
                    <div class="rank-badge silver">2</div>
                </td>
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #94a3b8, #64748b);">MR</div>
                        <div class="member-details">
                            <div class="member-name">Mike Rodriguez</div>
                            <div class="member-role">UX Designer</div>
                        </div>
                    </div>
                </td>
                <td>Design</td>
                <td>38</td>
                <td>
                    <div class="quality-score great">92%</div>
                </td>
                <td>
                    <div class="productivity-meter">
                        <div class="productivity-fill" style="width: 88%"></div>
                    </div>
                </td>
                <td>
                    <div class="points-display">
                        <span class="points-value">1,125</span>
                        <span class="points-change positive">+88</span>
                    </div>
                </td>
            </tr>
            <tr class="third-place">
                <td>
                    <div class="rank-badge bronze">3</div>
                </td>
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #b45309, #92400e);">ED</div>
                        <div class="member-details">
                            <div class="member-name">Emily Davis</div>
                            <div class="member-role">Product Manager</div>
                        </div>
                    </div>
                </td>
                <td>Product</td>
                <td>35</td>
                <td>
                    <div class="quality-score good">87%</div>
                </td>
                <td>
                    <div class="productivity-meter">
                        <div class="productivity-fill" style="width: 82%"></div>
                    </div>
                </td>
                <td>
                    <div class="points-display">
                        <span class="points-value">980</span>
                        <span class="points-change positive">+45</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.scoreboard-table-container {
    background: white;
    border-radius: 20px;
    box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;
    animation: zoomIn 0.8s ease-out;
    border: 1px solid #f1f5f9;
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8) rotateX(10deg);
    }
    to {
        opacity: 1;
        transform: scale(1) rotateX(0);
    }
}

.scoreboard-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
}

.scoreboard-table th {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    padding: 1.4rem 1.3rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 3px solid #334155;
    position: relative;
    overflow: hidden;
}

.scoreboard-table th::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, 
        #f59e0b, 
        #eab308, 
        #f59e0b
    );
    animation: goldShimmer 3s infinite;
}

@keyframes goldShimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
}

.scoreboard-table td {
    padding: 1.4rem 1.3rem;
    border-bottom: 1px solid #f8fafc;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.scoreboard-table tr {
    transition: all 0.4s ease;
}

.scoreboard-table tr:hover {
    transform: translateX(10px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.scoreboard-table tr.first-place:hover {
    background: linear-gradient(135deg, #fefce8, #fef3c7);
}

.scoreboard-table tr.second-place:hover {
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}

.scoreboard-table tr.third-place:hover {
    background: linear-gradient(135deg, #fef7ed, #fed7aa);
}

.rank-badge {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.1rem;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
    animation: badgePulse 2s infinite;
}

@keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.rank-badge.gold {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
}

.rank-badge.silver {
    background: linear-gradient(135deg, #94a3b8, #64748b);
    box-shadow: 0 4px 15px rgba(148, 163, 184, 0.4);
}

.rank-badge.bronze {
    background: linear-gradient(135deg, #b45309, #92400e);
    box-shadow: 0 4px 15px rgba(180, 83, 9, 0.4);
}

.scoreboard-table tr:hover .rank-badge {
    transform: scale(1.2) rotate(15deg);
    animation: badgeSpin 0.6s ease;
}

@keyframes badgeSpin {
    from { transform: scale(1) rotate(0); }
    to { transform: scale(1.2) rotate(15deg); }
}

.member-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.member-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    border: 3px solid white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
}

.scoreboard-table tr:hover .member-avatar {
    transform: scale(1.1);
    border-color: #f1f5f9;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.member-details .member-name {
    font-weight: 700;
    color: #1e293b;
    font-size: 1rem;
}

.member-details .member-role {
    font-size: 0.8rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.quality-score {
    padding: 0.6rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    text-align: center;
    transition: all 0.3s ease;
    animation: scoreGlow 2s infinite;
}

@keyframes scoreGlow {
    0%, 100% { 
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    50% { 
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
}

.quality-score.excellent {
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
}

.quality-score.great {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    color: white;
}

.quality-score.good {
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    color: white;
}

.productivity-meter {
    height: 10px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.productivity-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    transition: width 1.5s ease-in-out;
    animation: productivityGrow 1.5s ease-out;
    position: relative;
}

@keyframes productivityGrow {
    from { 
        width: 0%; 
        opacity: 0;
    }
    to { 
        width: var(--target-width); 
        opacity: 1;
    }
}

.productivity-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: meterShimmer 2s infinite;
}

@keyframes meterShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.points-display {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    align-items: center;
}

.points-value {
    font-weight: 800;
    color: #1e293b;
    font-size: 1.1rem;
}

.points-change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
}

.points-change.positive {
    background: #d1fae5;
    color: #065f46;
    animation: pointsBounce 0.6s ease;
}

@keyframes pointsBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-5px); }
    60% { transform: translateY(-3px); }
}

/* Medal animation for top performers */
@keyframes medalGlow {
    0%, 100% { 
        filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.6));
    }
    50% { 
        filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.9));
    }
}

.first-place .rank-badge {
    animation: medalGlow 2s infinite, badgePulse 2s infinite;
}`,
        js: `// Animate productivity meters
document.querySelectorAll('.productivity-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.setProperty('--target-width', width);
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 400);
});

// Add celebration effect for top performers
document.querySelectorAll('.first-place, .second-place, .third-place').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
        this.style.position = 'relative';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Simulate points updates
function simulatePointsUpdates() {
    const pointsChanges = document.querySelectorAll('.points-change');
    
    setInterval(() => {
        pointsChanges.forEach(change => {
            change.style.animation = 'none';
            setTimeout(() => {
                change.style.animation = 'pointsBounce 0.6s ease';
            }, 10);
        });
    }, 8000);
}

simulatePointsUpdates();`
    },

    // ====================================================================
    // TEMPLATE 10: CUSTOMER SUPPORT DASHBOARD
    // ====================================================================
    table10: {
        html: `<div class="support-table-container">
    <table class="support-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Customer</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Response Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="ticket-id">#CS-2845</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">AB</div>
                        <div class="customer-details">
                            <div class="customer-name">Alex Bennett</div>
                            <div class="customer-company">TechCorp Inc.</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="subject-line">
                        Payment gateway integration issue
                    </div>
                </td>
                <td>
                    <div class="priority-indicator urgent">
                        <span class="priority-dot"></span>
                        Urgent
                    </div>
                </td>
                <td>
                    <div class="status-badge in-progress">
                        In Progress
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-avatar">SJ</div>
                        <span class="assignee-name">Sarah J.</span>
                    </div>
                </td>
                <td>
                    <div class="response-timer critical">
                        <span class="timer-icon">⏰</span>
                        <span class="timer-value">2h 15m</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#CS-2844</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">MC</div>
                        <div class="customer-details">
                            <div class="customer-name">Maria Chen</div>
                            <div class="customer-company">StartUp Labs</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="subject-line">
                        Account verification problem
                    </div>
                </td>
                <td>
                    <div class="priority-indicator high">
                        <span class="priority-dot"></span>
                        High
                    </div>
                </td>
                <td>
                    <div class="status-badge open">
                        Open
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-avatar">MR</div>
                        <span class="assignee-name">Mike R.</span>
                    </div>
                </td>
                <td>
                    <div class="response-timer warning">
                        <span class="timer-icon">⏰</span>
                        <span class="timer-value">1h 30m</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#CS-2843</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">DJ</div>
                        <div class="customer-details">
                            <div class="customer-name">David Johnson</div>
                            <div class="customer-company">Enterprise Co.</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="subject-line">
                        Feature request: API limits
                    </div>
                </td>
                <td>
                    <div class="priority-indicator medium">
                        <span class="priority-dot"></span>
                        Medium
                    </div>
                </td>
                <td>
                    <div class="status-badge resolved">
                        Resolved
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-avatar">ED</div>
                        <span class="assignee-name">Emily D.</span>
                    </div>
                </td>
                <td>
                    <div class="response-timer good">
                        <span class="timer-icon">✅</span>
                        <span class="timer-value">45m</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.support-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 
        0 10px 35px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;
    animation: slideInUp 0.7s ease-out;
    border: 1px solid #f1f5f9;
}

.support-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
}

.support-table th {
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    color: white;
    padding: 1.3rem 1.2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 3px solid #6d28d9;
    position: relative;
}

.support-table th::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.1), 
        transparent
    );
    animation: supportShimmer 4s infinite;
}

@keyframes supportShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.support-table td {
    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid #f8fafc;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.support-table tr {
    transition: all 0.3s ease;
}

.support-table tr:hover {
    background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    transform: translateX(5px);
}

.support-table tr:hover td {
    background: transparent;
}

.support-table tr:hover td::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
}

.ticket-id {
    font-family: 'Courier New', monospace;
    font-weight: 700;
    color: #7c3aed;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.support-table tr:hover .ticket-id {
    transform: scale(1.1);
    color: #6d28d9;
}

.customer-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.customer-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.4s ease;
}

.support-table tr:hover .customer-avatar {
    transform: scale(1.1) rotate(10deg);
}

.customer-details .customer-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.9rem;
}

.customer-details .customer-company {
    font-size: 0.75rem;
    color: #64748b;
}

.subject-line {
    font-weight: 500;
    color: #374151;
    font-size: 0.9rem;
    line-height: 1.4;
    transition: all 0.3s ease;
}

.support-table tr:hover .subject-line {
    color: #7c3aed;
}

.priority-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: priorityPulse 2s infinite;
}

@keyframes priorityPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.priority-indicator.urgent {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
}

.priority-indicator.high {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #d97706;
}

.priority-indicator.medium {
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
    color: #3730a3;
}

.priority-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: dotPulse 1.5s infinite;
}

.priority-indicator.urgent .priority-dot {
    background: #dc2626;
    animation: urgentPulse 1s infinite;
}

@keyframes urgentPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
    }
    50% { 
        box-shadow: 0 0 0 6px rgba(220, 38, 38, 0);
    }
}

.priority-indicator.high .priority-dot {
    background: #d97706;
}

.priority-indicator.medium .priority-dot {
    background: #3730a3;
}

.status-badge {
    padding: 0.6rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    animation: statusGlow 2s infinite;
}

@keyframes statusGlow {
    0%, 100% { 
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    50% { 
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
}

.status-badge.in-progress {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #92400e;
}

.status-badge.open {
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
    color: #3730a3;
}

.status-badge.resolved {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.assignee-info {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.assignee-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    transition: all 0.3s ease;
}

.support-table tr:hover .assignee-avatar {
    transform: scale(1.1);
}

.assignee-name {
    font-size: 0.85rem;
    font-weight: 500;
    color: #374151;
}

.response-timer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: timerPulse 2s infinite;
}

@keyframes timerPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.response-timer.critical {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
    animation: criticalPulse 1s infinite;
}

@keyframes criticalPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);
    }
    50% { 
        box-shadow: 0 0 0 8px rgba(220, 38, 38, 0);
    }
}

.response-timer.warning {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #d97706;
}

.response-timer.good {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.timer-icon {
    font-size: 1rem;
    animation: timerShake 0.6s infinite alternate;
}

@keyframes timerShake {
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }
}

/* Staggered animations for better visual hierarchy */
.support-table tr:nth-child(1) { animation-delay: 0.1s; }
.support-table tr:nth-child(2) { animation-delay: 0.2s; }
.support-table tr:nth-child(3) { animation-delay: 0.3s; }`,
        js: `// Add interactive effects for support tickets
document.querySelectorAll('.support-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Simulate real-time ticket updates
function simulateTicketUpdates() {
    const statusBadges = document.querySelectorAll('.status-badge');
    const timers = document.querySelectorAll('.response-timer');
    
    setInterval(() => {
        // Random status update
        const randomStatus = statusBadges[Math.floor(Math.random() * statusBadges.length)];
        randomStatus.style.animation = 'none';
        setTimeout(() => {
            randomStatus.style.animation = 'statusGlow 2s infinite';
        }, 10);
        
        // Timer updates
        timers.forEach(timer => {
            if (timer.classList.contains('critical')) {
                timer.style.animation = 'none';
                setTimeout(() => {
                    timer.style.animation = 'criticalPulse 1s infinite, timerPulse 2s infinite';
                }, 10);
            }
        });
    }, 5000);
}

simulateTicketUpdates();

// Add click effects for assignee avatars
document.querySelectorAll('.assignee-avatar').forEach(avatar => {
    avatar.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});`
    },
    // ====================================================================
// BUSINESS TEMPLATE 11: INVENTORY MANAGEMENT
// ====================================================================
business11: {
    html: `<div class="inventory-table-container">
    <div class="inventory-header">
        <h3>Inventory Management System</h3>
        <div class="inventory-stats">
            <div class="stat-item">
                <span class="stat-value">28</span>
                <span class="stat-label">In Stock</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">5</span>
                <span class="stat-label">Low Stock</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">3</span>
                <span class="stat-label">Out of Stock</span>
            </div>
        </div>
    </div>
    <table class="inventory-table">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Status</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">MacBook Pro 16"</div>
                        <div class="product-brand">Apple</div>
                    </div>
                </td>
                <td>MBP16-2024</td>
                <td>Electronics</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">45</span>
                        <div class="stock-bar">
                            <div class="stock-level high"></div>
                        </div>
                    </div>
                </td>
                <td>10</td>
                <td><span class="stock-status in-stock">In Stock</span></td>
                <td>$72,000</td>
            </tr>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">Wireless Mouse X</div>
                        <div class="product-brand">TechGear</div>
                    </div>
                </td>
                <td>WM-X2024</td>
                <td>Accessories</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">0</span>
                        <div class="stock-bar">
                            <div class="stock-level out"></div>
                        </div>
                    </div>
                </td>
                <td>25</td>
                <td><span class="stock-status out-of-stock">Out of Stock</span></td>
                <td>$0</td>
            </tr>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">Mechanical Keyboard</div>
                        <div class="product-brand">KeyMaster</div>
                    </div>
                </td>
                <td>MK-PRO2024</td>
                <td>Accessories</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">8</span>
                        <div class="stock-bar">
                            <div class="stock-level low"></div>
                        </div>
                    </div>
                </td>
                <td>15</td>
                <td><span class="stock-status low-stock">Low Stock</span></td>
                <td>$1,200</td>
            </tr>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">4K Monitor 27"</div>
                        <div class="product-brand">ViewPlus</div>
                    </div>
                </td>
                <td>MON27-4K</td>
                <td>Electronics</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">22</span>
                        <div class="stock-bar">
                            <div class="stock-level medium"></div>
                        </div>
                    </div>
                </td>
                <td>8</td>
                <td><span class="stock-status in-stock">In Stock</span></td>
                <td>$33,000</td>
            </tr>
        </tbody>
    </table>
    <div class="table-footer">
        <button class="btn-generate-report">Generate Stock Report</button>
        <button class="btn-reorder">Create Reorder List</button>
    </div>
</div>`,
    css: `.inventory-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.inventory-header {
    padding: 1.5rem;
    background: linear-gradient(135deg, #059669, #047857);
    color: white;
}

.inventory-header h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.inventory-stats {
    display: flex;
    gap: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-value {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.inventory-table {
    width: 100%;
    border-collapse: collapse;
}

.inventory-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.inventory-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.inventory-table tr:hover {
    background: #f9fafb;
}

.product-display .product-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.product-display .product-brand {
    font-size: 0.75rem;
    color: #9ca3af;
    background: #f3f4f6;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
}

.stock-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.stock-quantity {
    font-weight: 600;
    color: #1f2937;
    min-width: 30px;
}

.stock-bar {
    width: 80px;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
}

.stock-level {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
}

.stock-level.high {
    background: #10b981;
    width: 90%;
}

.stock-level.medium {
    background: #f59e0b;
    width: 60%;
}

.stock-level.low {
    background: #ef4444;
    width: 30%;
}

.stock-level.out {
    background: #6b7280;
    width: 0%;
}

.stock-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
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
    color: #991b1b;
}

.table-footer {
    padding: 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.btn-generate-report {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-generate-report:hover {
    background: #2563eb;
}

.btn-reorder {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-reorder:hover {
    background: #6d28d9;
}`,
    js: `// Inventory management functionality
document.querySelector('.btn-generate-report').addEventListener('click', function() {
    alert('Generating stock report...');
    // In real implementation, this would generate a PDF report
});

document.querySelector('.btn-reorder').addEventListener('click', function() {
    const lowStockItems = document.querySelectorAll('.stock-status.low-stock, .stock-status.out-of-stock');
    alert(\`Creating reorder list for \${lowStockItems.length} items\`);
});`
},

// ====================================================================
// BUSINESS TEMPLATE 12: HR ATTENDANCE
// ====================================================================
business12: {
    html: `<div class="attendance-table-container">
    <div class="attendance-header">
        <h3>Employee Attendance Tracker</h3>
        <div class="date-filter">
            <input type="date" class="date-picker" value="2024-01-15">
            <button class="btn-today">Today</button>
        </div>
    </div>
    <div class="attendance-summary">
        <div class="summary-card present">
            <div class="summary-count">42</div>
            <div class="summary-label">Present</div>
        </div>
        <div class="summary-card absent">
            <div class="summary-count">3</div>
            <div class="summary-label">Absent</div>
        </div>
        <div class="summary-card late">
            <div class="summary-count">5</div>
            <div class="summary-label">Late</div>
        </div>
        <div class="summary-card leave">
            <div class="summary-count">2</div>
            <div class="summary-label">On Leave</div>
        </div>
    </div>
    <table class="attendance-table">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Working Hours</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EMP-001</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">John Smith</div>
                        <div class="employee-position">Sales Manager</div>
                    </div>
                </td>
                <td>Sales</td>
                <td>
                    <div class="time-slot on-time">09:05 AM</div>
                </td>
                <td>06:15 PM</td>
                <td>9h 10m</td>
                <td><span class="attendance-status present">Present</span></td>
            </tr>
            <tr>
                <td>EMP-002</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Sarah Johnson</div>
                        <div class="employee-position">HR Specialist</div>
                    </div>
                </td>
                <td>Human Resources</td>
                <td>
                    <div class="time-slot late">10:30 AM</div>
                </td>
                <td>07:00 PM</td>
                <td>8h 30m</td>
                <td><span class="attendance-status late">Late</span></td>
            </tr>
            <tr>
                <td>EMP-003</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Mike Chen</div>
                        <div class="employee-position">Developer</div>
                    </div>
                </td>
                <td>IT</td>
                <td>
                    <div class="time-slot">-</div>
                </td>
                <td>-</td>
                <td>0h 0m</td>
                <td><span class="attendance-status absent">Absent</span></td>
            </tr>
            <tr>
                <td>EMP-004</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Emily Davis</div>
                        <div class="employee-position">Designer</div>
                    </div>
                </td>
                <td>Design</td>
                <td>
                    <div class="time-slot on-time">08:55 AM</div>
                </td>
                <td>05:45 PM</td>
                <td>8h 50m</td>
                <td><span class="attendance-status present">Present</span></td>
            </tr>
            <tr>
                <td>EMP-005</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Robert Brown</div>
                        <div class="employee-position">Analyst</div>
                    </div>
                </td>
                <td>Finance</td>
                <td>
                    <div class="time-slot">-</div>
                </td>
                <td>-</td>
                <td>0h 0m</td>
                <td><span class="attendance-status leave">On Leave</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.attendance-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.attendance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.attendance-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
}

.date-filter {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.date-picker {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 0.875rem;
}

.btn-today {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
}

.attendance-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.summary-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e5e7eb;
}

.summary-card.present {
    border-left: 4px solid #10b981;
}

.summary-card.absent {
    border-left: 4px solid #ef4444;
}

.summary-card.late {
    border-left: 4px solid #f59e0b;
}

.summary-card.leave {
    border-left: 4px solid #8b5cf6;
}

.summary-count {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.summary-card.present .summary-count {
    color: #10b981;
}

.summary-card.absent .summary-count {
    color: #ef4444;
}

.summary-card.late .summary-count {
    color: #f59e0b;
}

.summary-card.leave .summary-count {
    color: #8b5cf6;
}

.summary-label {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
}

.attendance-table {
    width: 100%;
    border-collapse: collapse;
}

.attendance-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.attendance-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.attendance-table tr:hover {
    background: #f9fafb;
}

.employee-info .employee-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.employee-info .employee-position {
    font-size: 0.75rem;
    color: #9ca3af;
}

.time-slot {
    font-weight: 600;
    font-size: 0.875rem;
}

.time-slot.on-time {
    color: #10b981;
}

.time-slot.late {
    color: #f59e0b;
}

.attendance-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.attendance-status.present {
    background: #d1fae5;
    color: #065f46;
}

.attendance-status.absent {
    background: #fee2e2;
    color: #991b1b;
}

.attendance-status.late {
    background: #fef3c7;
    color: #92400e;
}

.attendance-status.leave {
    background: #e0e7ff;
    color: #3730a3;
}`,
    js: `// Attendance system functionality
document.querySelector('.date-picker').addEventListener('change', function(e) {
    const selectedDate = e.target.value;
    alert(\`Loading attendance data for: \${selectedDate}\`);
});

document.querySelector('.btn-today').addEventListener('click', function() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('.date-picker').value = today;
    alert('Loading today\\'s attendance data');
});`
},

// ====================================================================
// BUSINESS TEMPLATE 13: CUSTOMER SUPPORT
// ====================================================================
business13: {
    html: `<div class="support-table-container">
    <div class="support-header">
        <h3>Customer Support Tickets</h3>
        <div class="support-actions">
            <button class="btn-new-ticket">+ New Ticket</button>
            <button class="btn-export-tickets">Export</button>
        </div>
    </div>
    <div class="support-filters">
        <div class="filter-group">
            <label>Status:</label>
            <select class="filter-select">
                <option>All Tickets</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Closed</option>
            </select>
        </div>
        <div class="filter-group">
            <label>Priority:</label>
            <select class="filter-select">
                <option>All Priorities</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
        </div>
        <div class="filter-group">
            <label>Agent:</label>
            <select class="filter-select">
                <option>All Agents</option>
                <option>John Smith</option>
                <option>Sarah Chen</option>
                <option>Mike Johnson</option>
            </select>
        </div>
    </div>
    <table class="support-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Customer</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Agent</th>
                <th>Created</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-001</div>
                    <div class="ticket-category">Technical</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Alex Johnson</div>
                        <div class="customer-email">alex@company.com</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Login issues after update</div>
                    <div class="ticket-excerpt">Unable to access account since last update...</div>
                </td>
                <td><span class="priority critical">Critical</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">John Smith</div>
                        <div class="agent-status online">Online</div>
                    </div>
                </td>
                <td>2024-01-15</td>
                <td><span class="ticket-status open">Open</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action assign" title="Assign">👤</button>
                        <button class="btn-action close" title="Close">✅</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-002</div>
                    <div class="ticket-category">Billing</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Maria Garcia</div>
                        <div class="customer-email">maria@business.com</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Invoice discrepancy</div>
                    <div class="ticket-excerpt">Charged twice for monthly subscription...</div>
                </td>
                <td><span class="priority high">High</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">Sarah Chen</div>
                        <div class="agent-status online">Online</div>
                    </div>
                </td>
                <td>2024-01-14</td>
                <td><span class="ticket-status progress">In Progress</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action assign" title="Assign">👤</button>
                        <button class="btn-action close" title="Close">✅</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-003</div>
                    <div class="ticket-category">Feature Request</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">David Kim</div>
                        <div class="customer-email">david@startup.io</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Export to PDF feature</div>
                    <div class="ticket-excerpt">Requesting PDF export for reports...</div>
                </td>
                <td><span class="priority medium">Medium</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">-</div>
                        <div class="agent-status">Unassigned</div>
                    </div>
                </td>
                <td>2024-01-13</td>
                <td><span class="ticket-status open">Open</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action assign" title="Assign">👤</button>
                        <button class="btn-action close" title="Close">✅</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-004</div>
                    <div class="ticket-category">General</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Lisa Wong</div>
                        <div class="customer-email">lisa@consulting.com</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Documentation update</div>
                    <div class="ticket-excerpt">API documentation needs updating...</div>
                </td>
                <td><span class="priority low">Low</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">Mike Johnson</div>
                        <div class="agent-status away">Away</div>
                    </div>
                </td>
                <td>2024-01-12</td>
                <td><span class="ticket-status resolved">Resolved</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action reopen" title="Reopen">↩️</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.support-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.support-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.support-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
}

.support-actions {
    display: flex;
    gap: 0.75rem;
}

.btn-new-ticket {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.btn-export-tickets {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.support-filters {
    display: flex;
    gap: 2rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}

.filter-select {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    font-size: 0.875rem;
    min-width: 150px;
}

.support-table {
    width: 100%;
    border-collapse: collapse;
}

.support-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.support-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.support-table tr:hover {
    background: #f9fafb;
}

.ticket-id {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.ticket-category {
    font-size: 0.75rem;
    color: #9ca3af;
    background: #f3f4f6;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
}

.customer-info .customer-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.customer-info .customer-email {
    font-size: 0.75rem;
    color: #6b7280;
}

.ticket-subject {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.ticket-excerpt {
    font-size: 0.75rem;
    color: #9ca3af;
}

.priority {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.priority.critical {
    background: #fee2e2;
    color: #991b1b;
}

.priority.high {
    background: #fef3c7;
    color: #92400e;
}

.priority.medium {
    background: #dbeafe;
    color: #1e40af;
}

.priority.low {
    background: #f3f4f6;
    color: #6b7280;
}

.agent-info .agent-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.agent-info .agent-status {
    font-size: 0.75rem;
    padding: 0.1rem 0.4rem;
    border-radius: 10px;
    display: inline-block;
}

.agent-status.online {
    background: #d1fae5;
    color: #065f46;
}

.agent-status.away {
    background: #fef3c7;
    color: #92400e;
}

.ticket-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.ticket-status.open {
    background: #dbeafe;
    color: #1e40af;
}

.ticket-status.progress {
    background: #fef3c7;
    color: #92400e;
}

.ticket-status.resolved {
    background: #d1fae5;
    color: #065f46;
}

.ticket-actions {
    display: flex;
    gap: 0.25rem;
}

.btn-action {
    background: none;
    border: 1px solid #e5e7eb;
    padding: 0.4rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.75rem;
    transition: all 0.3s;
}

.btn-action:hover {
    background: #f3f4f6;
    transform: scale(1.1);
}`,
    js: `// Support ticket system functionality
document.querySelector('.btn-new-ticket').addEventListener('click', function() {
    alert('Opening new ticket form...');
});

document.querySelector('.btn-export-tickets').addEventListener('click', function() {
    alert('Exporting tickets to CSV...');
});

document.querySelectorAll('.filter-select').forEach(select => {
    select.addEventListener('change', function() {
        alert('Filtering tickets...');
    });
});

document.querySelectorAll('.btn-action.view').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Opening ticket details...');
    });
});`
},

// ====================================================================
// BUSINESS TEMPLATE 14: EXPENSE REPORT
// ====================================================================
business14: {
    html: `<div class="expense-table-container">
    <div class="expense-header">
        <h3>Expense Report - January 2024</h3>
        <div class="expense-total">
            <span class="total-label">Total Expenses:</span>
            <span class="total-amount">$8,745.50</span>
        </div>
    </div>
    <div class="expense-actions">
        <button class="btn-add-expense">+ Add Expense</button>
        <button class="btn-submit-report">Submit for Approval</button>
        <button class="btn-export-expenses">Export to Excel</button>
    </div>
    <table class="expense-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Receipt</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-01-15</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">✈️</span>
                        <span class="category-name">Travel</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Flight to Client Meeting</div>
                        <div class="expense-details">New York to San Francisco</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$450.00</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status approved">Approved</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-14</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🍽️</span>
                        <span class="category-name">Meals</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Client Dinner</div>
                        <div class="expense-details">Restaurant - 4 people</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$320.00</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status pending">Pending</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-12</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🛏️</span>
                        <span class="category-name">Accommodation</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Hotel Stay</div>
                        <div class="expense-details">3 nights - Business trip</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$680.00</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status approved">Approved</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-10</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🖥️</span>
                        <span class="category-name">Software</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Design Tool Subscription</div>
                        <div class="expense-details">Annual license renewal</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$299.00</div>
                </td>
                <td>Bank Transfer</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status rejected">Rejected</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-08</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🚗</span>
                        <span class="category-name">Transportation</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Car Rental</div>
                        <div class="expense-details">5 days - Client visits</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$425.50</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status pending">Pending</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="expense-summary">
        <div class="summary-row">
            <div class="summary-item">
                <span class="summary-label">Total Submitted:</span>
                <span class="summary-value">$8,745.50</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Approved:</span>
                <span class="summary-value approved">$1,130.00</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Pending:</span>
                <span class="summary-value pending">$745.50</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Rejected:</span>
                <span class="summary-value rejected">$299.00</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.expense-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.expense-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
}

.expense-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.expense-total {
    text-align: right;
}

.total-label {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
}

.total-amount {
    display: block;
    font-size: 1.75rem;
    font-weight: 700;
}

.expense-actions {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.btn-add-expense {
    background: #10b981;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.btn-submit-report {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.btn-export-expenses {
    background: #6b7280;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.expense-table {
    width: 100%;
    border-collapse: collapse;
}

.expense-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.expense-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.expense-table tr:hover {
    background: #f9fafb;
}

.expense-category {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.category-icon {
    font-size: 1.1rem;
}

.category-name {
    font-weight: 500;
    color: #374151;
}

.expense-description .expense-title {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.expense-description .expense-details {
    font-size: 0.75rem;
    color: #9ca3af;
}

.expense-amount {
    font-weight: 600;
    color: #1f2937;
    font-size: 1.1rem;
}

.btn-receipt {
    background: #e0e7ff;
    color: #3730a3;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-receipt:hover {
    background: #c7d2fe;
}

.expense-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.expense-status.approved {
    background: #d1fae5;
    color: #065f46;
}

.expense-status.pending {
    background: #fef3c7;
    color: #92400e;
}

.expense-status.rejected {
    background: #fee2e2;
    color: #991b1b;
}

.expense-actions {
    display: flex;
    gap: 0.25rem;
}

.btn-action {
    background: none;
    border: 1px solid #e5e7eb;
    padding: 0.4rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.75rem;
    transition: all 0.3s;
}

.btn-action:hover {
    background: #f3f4f6;
    transform: scale(1.1);
}

.expense-summary {
    padding: 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
}

.summary-row {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}

.summary-item {
    text-align: center;
}

.summary-label {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
}

.summary-value {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
}

.summary-value.approved {
    color: #10b981;
}

.summary-value.pending {
    color: #f59e0b;
}

.summary-value.rejected {
    color: #ef4444;
}`,
    js: `// Expense report functionality
document.querySelector('.btn-add-expense').addEventListener('click', function() {
    alert('Opening add expense form...');
});

document.querySelector('.btn-submit-report').addEventListener('click', function() {
    const pendingExpenses = document.querySelectorAll('.expense-status.pending').length;
    alert(\`Submitting \${pendingExpenses} expenses for approval...\`);
});

document.querySelector('.btn-export-expenses').addEventListener('click', function() {
    alert('Exporting expense report to Excel...');
});

document.querySelectorAll('.btn-receipt').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Opening receipt document...');
    });
});`
},

// ====================================================================
// BUSINESS TEMPLATE 15: KPI DASHBOARD
// ====================================================================
business15: {
    html: `<div class="kpi-table-container">
    <div class="kpi-header">
        <h3>Key Performance Indicators</h3>
        <div class="kpi-period">
            <span class="period-label">Reporting Period:</span>
            <span class="period-value">Q1 2024</span>
        </div>
    </div>
    <table class="kpi-table">
        <thead>
            <tr>
                <th>KPI Metric</th>
                <th>Current Value</th>
                <th>Target</th>
                <th>Previous Period</th>
                <th>Performance</th>
                <th>Trend</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Monthly Revenue</div>
                        <div class="metric-description">Total monthly sales revenue</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">$85,250</div>
                </td>
                <td>
                    <div class="target-value">$100,000</div>
                </td>
                <td>
                    <div class="previous-value">$78,500</div>
                    <div class="change positive">+8.6%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 85%"></div>
                        <span class="performance-text">85%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status on-track">On Track</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Customer Acquisition</div>
                        <div class="metric-description">New customers per month</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">145</div>
                </td>
                <td>
                    <div class="target-value">200</div>
                </td>
                <td>
                    <div class="previous-value">128</div>
                    <div class="change positive">+13.3%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 72%"></div>
                        <span class="performance-text">72%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status needs-attention">Needs Attention</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Conversion Rate</div>
                        <div class="metric-description">Lead to customer conversion</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">12.5%</div>
                </td>
                <td>
                    <div class="target-value">15%</div>
                </td>
                <td>
                    <div class="previous-value">11.2%</div>
                    <div class="change positive">+11.6%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 83%"></div>
                        <span class="performance-text">83%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status on-track">On Track</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Customer Retention</div>
                        <div class="metric-description">Monthly customer retention rate</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">88.2%</div>
                </td>
                <td>
                    <div class="target-value">90%</div>
                </td>
                <td>
                    <div class="previous-value">89.5%</div>
                    <div class="change negative">-1.5%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 98%"></div>
                        <span class="performance-text">98%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator negative">📉</div>
                </td>
                <td><span class="kpi-status at-risk">At Risk</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Average Order Value</div>
                        <div class="metric-description">Average revenue per order</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">$245</div>
                </td>
                <td>
                    <div class="target-value">$220</div>
                </td>
                <td>
                    <div class="previous-value">$235</div>
                    <div class="change positive">+4.3%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 111%"></div>
                        <span class="performance-text">111%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status exceeding">Exceeding</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Website Traffic</div>
                        <div class="metric-description">Monthly unique visitors</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">45,820</div>
                </td>
                <td>
                    <div class="target-value">50,000</div>
                </td>
                <td>
                    <div class="previous-value">42,150</div>
                    <div class="change positive">+8.7%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 92%"></div>
                        <span class="performance-text">92%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status on-track">On Track</span></td>
            </tr>
        </tbody>
    </table>
    <div class="kpi-summary">
        <div class="summary-card">
            <div class="summary-icon">🎯</div>
            <div class="summary-content">
                <div class="summary-value">4/6</div>
                <div class="summary-label">KPIs On Track</div>
            </div>
        </div>
        <div class="summary-card">
            <div class="summary-icon">📈</div>
            <div class="summary-content">
                <div class="summary-value">5</div>
                <div class="summary-label">Positive Trends</div>
            </div>
        </div>
        <div class="summary-card">
            <div class="summary-icon">📊</div>
            <div class="summary-content">
                <div class="summary-value">89%</div>
                <div class="summary-label">Avg. Performance</div>
            </div>
        </div>
    </div>
</div>`,
    css: `.kpi-table-container {
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
    background: linear-gradient(135deg, #1e293b, #374151);
    color: white;
}

.kpi-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.kpi-period {
    text-align: right;
}

.period-label {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
}

.period-value {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
}

.kpi-table {
    width: 100%;
    border-collapse: collapse;
}

.kpi-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.kpi-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.kpi-table tr:hover {
    background: #f9fafb;
}

.kpi-metric .metric-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.kpi-metric .metric-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.current-value {
    font-weight: 700;
    color: #1f2937;
    font-size: 1.1rem;
}

.target-value {
    color: #6b7280;
    font-size: 0.9rem;
}

.previous-value {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.25rem;
}

.change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    display: inline-block;
}

.change.positive {
    background: #d1fae5;
    color: #065f46;
}

.change.negative {
    background: #fee2e2;
    color: #991b1b;
}

.performance-bar {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    position: relative;
    margin: 0.5rem 0;
}

.performance-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease;
}

.performance-bar:nth-child(1) .performance-fill {
    background: linear-gradient(90deg, #10b981, #059669);
}

.performance-bar:nth-child(2) .performance-fill {
    background: linear-gradient(90deg, #f59e0b, #d97706);
}

.performance-bar:nth-child(3) .performance-fill {
    background: linear-gradient(90deg, #3b82f6, #2563eb);
}

.performance-text {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
}

.trend-indicator {
    font-size: 1.2rem;
    text-align: center;
}

.trend-indicator.positive {
    color: #10b981;
}

.trend-indicator.negative {
    color: #ef4444;
}

.kpi-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.kpi-status.on-track {
    background: #d1fae5;
    color: #065f46;
}

.kpi-status.needs-attention {
    background: #fef3c7;
    color: #92400e;
}

.kpi-status.at-risk {
    background: #fee2e2;
    color: #991b1b;
}

.kpi-status.exceeding {
    background: #dbeafe;
    color: #1e40af;
}

.kpi-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
}

.summary-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid #e5e7eb;
}

.summary-icon {
    font-size: 2rem;
}

.summary-content {
    flex: 1;
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
    font-weight: 500;
}`,
    js: `// KPI dashboard functionality
console.log('KPI dashboard loaded');

// Animate performance bars on load
document.addEventListener('DOMContentLoaded', function() {
    const performanceBars = document.querySelectorAll('.performance-fill');
    performanceBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Add click handlers for KPI metrics
document.querySelectorAll('.kpi-metric').forEach(metric => {
    metric.addEventListener('click', function() {
        const metricName = this.querySelector('.metric-name').textContent;
        alert(\`Showing detailed analysis for: \${metricName}\`);
    });
});`
},
// ====================================================================
// MINIMAL TEMPLATE 16: CLEAN DATA GRID
// ====================================================================
minimal16: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table clean-grid">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wireless Bluetooth Mouse</td>
                <td>Electronics</td>
                <td>$29.99</td>
                <td>45</td>
                <td>2024-01-15</td>
            </tr>
            <tr>
                <td>Mechanical Gaming Keyboard</td>
                <td>Electronics</td>
                <td>$89.99</td>
                <td>23</td>
                <td>2024-01-14</td>
            </tr>
            <tr>
                <td>USB-C Hub Adapter</td>
                <td>Accessories</td>
                <td>$39.99</td>
                <td>67</td>
                <td>2024-01-16</td>
            </tr>
            <tr>
                <td>Noise Cancelling Headphones</td>
                <td>Audio</td>
                <td>$199.99</td>
                <td>12</td>
                <td>2024-01-13</td>
            </tr>
            <tr>
                <td>Laptop Stand Aluminum</td>
                <td>Accessories</td>
                <td>$49.99</td>
                <td>34</td>
                <td>2024-01-15</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table-container {
    background: white;
    border-radius: 8px;
    overflow: hidden;
}

.minimal-table.clean-grid {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.clean-grid th {
    background: #fafafa;
    padding: 1rem 1.25rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.875rem;
    border-bottom: 1px solid #eaeaea;
    letter-spacing: 0.5px;
}

.minimal-table.clean-grid td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #f5f5f5;
    color: #333;
    font-size: 0.9rem;
    transition: background 0.2s ease;
}

.minimal-table.clean-grid tr:last-child td {
    border-bottom: none;
}

.minimal-table.clean-grid tr:hover td {
    background: #f8f9fa;
}

/* Minimal color variations for categories */
.minimal-table.clean-grid td:nth-child(2) {
    color: #666;
    font-size: 0.85rem;
}

.minimal-table.clean-grid td:nth-child(3) {
    font-weight: 500;
    color: #000;
}

.minimal-table.clean-grid td:nth-child(4) {
    font-weight: 500;
}

.minimal-table.clean-grid td:nth-child(5) {
    color: #999;
    font-size: 0.85rem;
}`,
    js: `// No JavaScript required - pure CSS minimal table`
},

// ====================================================================
// MINIMAL TEMPLATE 17: BORDERLESS DESIGN
// ====================================================================
minimal17: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table borderless">
        <thead>
            <tr>
                <th>Task Description</th>
                <th>Assigned To</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Complete design system documentation</td>
                <td>Sarah Chen</td>
                <td>Jan 15, 2024</td>
                <td><span class="priority-high">High</span></td>
                <td><span class="status-in-progress">In Progress</span></td>
            </tr>
            <tr>
                <td>Deploy new authentication service</td>
                <td>Mike Rodriguez</td>
                <td>Jan 18, 2024</td>
                <td><span class="priority-medium">Medium</span></td>
                <td><span class="status-pending">Pending</span></td>
            </tr>
            <tr>
                <td>Update user onboarding flow</td>
                <td>Jessica Wang</td>
                <td>Jan 20, 2024</td>
                <td><span class="priority-low">Low</span></td>
                <td><span class="status-completed">Completed</span></td>
            </tr>
            <tr>
                <td>Conduct user research interviews</td>
                <td>David Kim</td>
                <td>Jan 22, 2024</td>
                <td><span class="priority-medium">Medium</span></td>
                <td><span class="status-not-started">Not Started</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.borderless {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.borderless th {
    padding: 1.25rem 1rem 0.75rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #999;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #f0f0f0;
}

.minimal-table.borderless td {
    padding: 1rem;
    color: #333;
    font-size: 0.9rem;
    transition: all 0.2s ease;
}

.minimal-table.borderless tr:hover td {
    background: #fafafa;
    transform: translateX(4px);
}

/* Priority and Status Styles */
.priority-high, .priority-medium, .priority-low {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.priority-high {
    background: #fff0f0;
    color: #d63031;
}

.priority-medium {
    background: #fff9e6;
    color: #f39c12;
}

.priority-low {
    background: #f0fff4;
    color: #27ae60;
}

.status-in-progress, .status-pending, .status-completed, .status-not-started {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.status-in-progress {
    background: #e3f2fd;
    color: #1976d2;
}

.status-pending {
    background: #fff3e0;
    color: #f57c00;
}

.status-completed {
    background: #e8f5e8;
    color: #388e3c;
}

.status-not-started {
    background: #f5f5f5;
    color: #757575;
}`,
    js: `// Add smooth hover animations
document.querySelectorAll('.minimal-table.borderless tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.2s ease';
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 18: LIGHT ZEBRA STRIPES
// ====================================================================
minimal18: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table zebra-stripes">
        <thead>
            <tr>
                <th>Team Member</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Role</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">AJ</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Alex Johnson</div>
                            <div class="user-title">Senior Developer</div>
                        </div>
                    </div>
                </td>
                <td>alex.johnson@company.com</td>
                <td>Engineering</td>
                <td>Backend</td>
                <td><span class="status-badge active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">MG</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Maria Garcia</div>
                            <div class="user-title">UI/UX Designer</div>
                        </div>
                    </div>
                </td>
                <td>maria.garcia@company.com</td>
                <td>Design</td>
                <td>Product Design</td>
                <td><span class="status-badge active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">TK</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Tom Wilson</div>
                            <div class="user-title">Product Manager</div>
                        </div>
                    </div>
                </td>
                <td>tom.wilson@company.com</td>
                <td>Product</td>
                <td>Lead PM</td>
                <td><span class="status-badge active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">SL</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Sarah Lee</div>
                            <div class="user-title">Data Analyst</div>
                        </div>
                    </div>
                </td>
                <td>sarah.lee@company.com</td>
                <td>Analytics</td>
                <td>Senior Analyst</td>
                <td><span class="status-badge away">Away</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.zebra-stripes {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.zebra-stripes th {
    padding: 1rem 1.25rem;
    text-align: left;
    font-weight: 500;
    color: #555;
    font-size: 0.85rem;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.zebra-stripes td {
    padding: 1.25rem 1.25rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
}

/* Zebra Striping */
.minimal-table.zebra-stripes tbody tr:nth-child(odd) {
    background: #fafafa;
}

.minimal-table.zebra-stripes tbody tr:nth-child(even) {
    background: white;
}

.minimal-table.zebra-stripes tbody tr:hover {
    background: #f0f8ff;
}

/* User Minimal Styles */
.user-minimal {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar-minimal {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.user-details-minimal .user-name {
    font-weight: 500;
    color: #333;
    margin-bottom: 0.1rem;
}

.user-details-minimal .user-title {
    font-size: 0.8rem;
    color: #888;
}

/* Status Badges */
.status-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.active {
    background: #e8f5e8;
    color: #2e7d32;
}

.status-badge.away {
    background: #fff3e0;
    color: #ef6c00;
}`,
    js: `// Simple user interaction
document.querySelectorAll('.user-minimal').forEach(user => {
    user.addEventListener('click', function() {
        const userName = this.querySelector('.user-name').textContent;
        console.log('Selected user:', userName);
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 19: COMPACT LAYOUT
// ====================================================================
minimal19: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table compact">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#ORD-001</td>
                <td>John Smith</td>
                <td>Wireless Mouse</td>
                <td>2</td>
                <td>$29.99</td>
                <td>$59.98</td>
                <td><span class="order-status shipped">Shipped</span></td>
            </tr>
            <tr>
                <td>#ORD-002</td>
                <td>Sarah Johnson</td>
                <td>Mechanical Keyboard</td>
                <td>1</td>
                <td>$89.99</td>
                <td>$89.99</td>
                <td><span class="order-status delivered">Delivered</span></td>
            </tr>
            <tr>
                <td>#ORD-003</td>
                <td>Mike Chen</td>
                <td>USB-C Hub</td>
                <td>3</td>
                <td>$39.99</td>
                <td>$119.97</td>
                <td><span class="order-status processing">Processing</span></td>
            </tr>
            <tr>
                <td>#ORD-004</td>
                <td>Emily Davis</td>
                <td>Laptop Stand</td>
                <td>1</td>
                <td>$49.99</td>
                <td>$49.99</td>
                <td><span class="order-status cancelled">Cancelled</span></td>
            </tr>
            <tr>
                <td>#ORD-005</td>
                <td>David Wilson</td>
                <td>Headphones</td>
                <td>1</td>
                <td>$199.99</td>
                <td>$199.99</td>
                <td><span class="order-status shipped">Shipped</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.compact {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.8rem;
}

.minimal-table.compact th {
    padding: 0.75rem 0.8rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #e0e0e0;
    background: #fcfcfc;
}

.minimal-table.compact td {
    padding: 0.7rem 0.8rem;
    color: #444;
    border-bottom: 1px solid #f5f5f5;
    line-height: 1.3;
}

.minimal-table.compact tr:hover td {
    background: #f8f9fa;
}

/* Order Status Styles */
.order-status {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.order-status.shipped {
    background: #e3f2fd;
    color: #1565c0;
}

.order-status.delivered {
    background: #e8f5e8;
    color: #2e7d32;
}

.order-status.processing {
    background: #fff3e0;
    color: #ef6c00;
}

.order-status.cancelled {
    background: #ffebee;
    color: #c62828;
}

/* Compact specific styles */
.minimal-table.compact td:nth-child(1) {
    font-weight: 500;
    color: #333;
    font-family: 'Monaco', 'Consolas', monospace;
}

.minimal-table.compact td:nth-child(4),
.minimal-table.compact td:nth-child(5),
.minimal-table.compact td:nth-child(6) {
    text-align: right;
    font-family: 'Monaco', 'Consolas', monospace;
}

.minimal-table.compact td:nth-child(6) {
    font-weight: 500;
    color: #000;
}`,
    js: `// Compact table interactions
document.querySelectorAll('.minimal-table.compact tr').forEach(row => {
    row.addEventListener('click', function() {
        const orderId = this.cells[0].textContent;
        console.log('Order details for:', orderId);
        
        // Remove any existing active states
        document.querySelectorAll('.minimal-table.compact tr').forEach(r => {
            r.style.background = '';
        });
        
        // Highlight clicked row
        this.style.background = '#f0f7ff';
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 20: MINIMAL HEADER
// ====================================================================
minimal20: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table minimal-header">
        <thead>
            <tr>
                <th>Transaction Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-01-12</td>
                <td>Web Hosting - Annual Plan</td>
                <td>Infrastructure</td>
                <td class="amount-negative">-$19.99</td>
                <td><span class="type-expense">Expense</span></td>
            </tr>
            <tr>
                <td>2024-01-15</td>
                <td>Client Payment - Project Alpha</td>
                <td>Services</td>
                <td class="amount-positive">+$2,500.00</td>
                <td><span class="type-income">Income</span></td>
            </tr>
            <tr>
                <td>2024-01-16</td>
                <td>Software Subscription - Adobe Creative</td>
                <td>Tools</td>
                <td class="amount-negative">-$59.99</td>
                <td><span class="type-expense">Expense</span></td>
            </tr>
            <tr>
                <td>2024-01-18</td>
                <td>Consulting Services - Tech Corp</td>
                <td>Services</td>
                <td class="amount-positive">+$1,200.00</td>
                <td><span class="type-income">Income</span></td>
            </tr>
            <tr>
                <td>2024-01-20</td>
                <td>Office Supplies Purchase</td>
                <td>Operations</td>
                <td class="amount-negative">-$145.50</td>
                <td><span class="type-expense">Expense</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.minimal-header {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.minimal-header th {
    padding: 1rem 1.25rem 0.5rem 1.25rem;
    text-align: left;
    font-weight: 400;
    color: #888;
    font-size: 0.8rem;
    border-bottom: 2px solid #e8e8e8;
    background: white;
}

.minimal-table.minimal-header td {
    padding: 1rem 1.25rem;
    color: #444;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.2s ease;
}

.minimal-table.minimal-header tr:hover td {
    background: #fafafa;
}

/* Amount Styles */
.amount-positive {
    color: #27ae60;
    font-weight: 500;
    font-family: 'Monaco', 'Consolas', monospace;
}

.amount-negative {
    color: #e74c3c;
    font-weight: 500;
    font-family: 'Monaco', 'Consolas', monospace;
}

/* Type Styles */
.type-income, .type-expense {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.type-income {
    background: #e8f5e8;
    color: #27ae60;
    border: 1px solid #c8e6c9;
}

.type-expense {
    background: #ffebee;
    color: #e74c3c;
    border: 1px solid #ffcdd2;
}

/* Minimal header specific styles */
.minimal-table.minimal-header td:nth-child(1) {
    color: #666;
    font-size: 0.85rem;
    font-family: 'Monaco', 'Consolas', monospace;
}

.minimal-table.minimal-header td:nth-child(3) {
    color: #888;
    font-size: 0.85rem;
}

.minimal-table.minimal-header td:nth-child(4) {
    text-align: right;
    font-weight: 500;
}`,
    js: `// Financial table formatting
document.querySelectorAll('.amount-positive, .amount-negative').forEach(amount => {
    amount.addEventListener('click', function() {
        const value = this.textContent;
        console.log('Transaction amount:', value);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        // Add keyboard navigation logic here
    }
});`
},
// ====================================================================
// MINIMAL TEMPLATE 21: FADE IN ANIMATION
// ====================================================================
minimal21: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table fade-in-animation">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Team</th>
                <th>Progress</th>
                <th>Timeline</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">🚀</span>
                        Website Redesign
                    </div>
                </td>
                <td>Design Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 75%"></div>
                        </div>
                        <span class="progress-text">75%</span>
                    </div>
                </td>
                <td>2 weeks</td>
                <td><span class="status-on-track">On Track</span></td>
            </tr>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">📱</span>
                        Mobile App Development
                    </div>
                </td>
                <td>Dev Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 45%"></div>
                        </div>
                        <span class="progress-text">45%</span>
                    </div>
                </td>
                <td>4 weeks</td>
                <td><span class="status-delayed">Delayed</span></td>
            </tr>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">🔐</span>
                        Security Audit
                    </div>
                </td>
                <td>Security Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 90%"></div>
                        </div>
                        <span class="progress-text">90%</span>
                    </div>
                </td>
                <td>1 week</td>
                <td><span class="status-completed">Completed</span></td>
            </tr>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">📊</span>
                        Analytics Dashboard
                    </div>
                </td>
                <td>Data Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 30%"></div>
                        </div>
                        <span class="progress-text">30%</span>
                    </div>
                </td>
                <td>3 weeks</td>
                <td><span class="status-on-track">On Track</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.fade-in-animation {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.fade-in-animation th {
    padding: 1.25rem 1rem 0.75rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.fade-in-animation td {
    padding: 1.25rem 1rem;
    color: #444;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
}

/* Fade In Animation */
.fade-row {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.6s ease forwards;
}

.fade-row:nth-child(1) { animation-delay: 0.1s; }
.fade-row:nth-child(2) { animation-delay: 0.2s; }
.fade-row:nth-child(3) { animation-delay: 0.3s; }
.fade-row:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Project Styles */
.project-with-icon {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    font-size: 1.1rem;
    opacity: 0.8;
}

/* Progress Bar */
.progress-minimal {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.progress-track {
    flex: 1;
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 3px;
    transition: width 1s ease-in-out;
    animation: progressFill 1.5s ease-out;
}

@keyframes progressFill {
    from { width: 0% !important; }
}

.progress-text {
    font-size: 0.8rem;
    font-weight: 500;
    color: #666;
    min-width: 2.5rem;
}

/* Status Styles */
.status-on-track, .status-delayed, .status-completed {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: statusPulse 2s infinite;
}

.status-on-track {
    background: #e8f5e8;
    color: #27ae60;
}

.status-delayed {
    background: #fff3e0;
    color: #f39c12;
}

.status-completed {
    background: #e3f2fd;
    color: #2980b9;
}

@keyframes statusPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}`,
    js: `// Add interactive progress animations
document.querySelectorAll('.progress-fill').forEach(progress => {
    // Reset and re-animate on hover
    progress.parentElement.addEventListener('mouseenter', function() {
        const currentWidth = progress.style.width;
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.width = currentWidth;
        }, 50);
    });
});

// Re-initialize animations when table comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'none';
            setTimeout(() => {
                entry.target.style.animation = '';
            }, 10);
        }
    });
});

document.querySelectorAll('.fade-row').forEach(row => {
    observer.observe(row);
});`
},

// ====================================================================
// MINIMAL TEMPLATE 22: SLIDE IN ANIMATION
// ====================================================================
minimal22: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table slide-in-animation">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Status</th>
                <th>Release Version</th>
                <th>User Impact</th>
                <th>Confidence</th>
            </tr>
        </thead>
        <tbody>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge new">NEW</span>
                        Dark Mode
                    </div>
                </td>
                <td><span class="status-live">Live</span></td>
                <td>v2.1.0</td>
                <td><span class="impact-high">High</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 95%"></div>
                        <span class="confidence-text">95%</span>
                    </div>
                </td>
            </tr>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge beta">BETA</span>
                        AI Assistant
                    </div>
                </td>
                <td><span class="status-beta">Beta</span></td>
                <td>v2.2.0</td>
                <td><span class="impact-medium">Medium</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 75%"></div>
                        <span class="confidence-text">75%</span>
                    </div>
                </td>
            </tr>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge upcoming">UPCOMING</span>
                        Voice Commands
                    </div>
                </td>
                <td><span class="status-planned">Planned</span></td>
                <td>v2.3.0</td>
                <td><span class="impact-high">High</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 60%"></div>
                        <span class="confidence-text">60%</span>
                    </div>
                </td>
            </tr>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge experimental">EXPERIMENTAL</span>
                        AR Preview
                    </div>
                </td>
                <td><span class="status-research">Research</span></td>
                <td>v2.4.0</td>
                <td><span class="impact-low">Low</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 40%"></div>
                        <span class="confidence-text">40%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.slide-in-animation {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow: hidden;
}

.minimal-table.slide-in-animation th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #555;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: white;
}

.minimal-table.slide-in-animation td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f5f5f5;
}

/* Slide In Animation */
.slide-row {
    opacity: 0;
    transform: translateX(-50px);
    animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.slide-row:nth-child(1) { animation-delay: 0.1s; }
.slide-row:nth-child(2) { animation-delay: 0.2s; }
.slide-row:nth-child(3) { animation-delay: 0.3s; }
.slide-row:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Feature Item Styles */
.feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
}

.feature-badge {
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.feature-badge.new {
    background: #e8f5e8;
    color: #27ae60;
    animation: badgePulse 2s infinite;
}

.feature-badge.beta {
    background: #fff3e0;
    color: #f39c12;
}

.feature-badge.upcoming {
    background: #e3f2fd;
    color: #2980b9;
}

.feature-badge.experimental {
    background: #f3e5f5;
    color: #9b59b6;
}

@keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Status Styles */
.status-live, .status-beta, .status-planned, .status-research {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-live {
    background: #e8f5e8;
    color: #27ae60;
    animation: livePulse 3s infinite;
}

.status-beta {
    background: #fff3e0;
    color: #f39c12;
}

.status-planned {
    background: #e3f2fd;
    color: #2980b9;
}

.status-research {
    background: #f5f5f5;
    color: #7f8c8d;
}

@keyframes livePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(39, 174, 96, 0.4); }
    50% { box-shadow: 0 0 0 4px rgba(39, 174, 96, 0); }
}

/* Impact Styles */
.impact-high, .impact-medium, .impact-low {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 600;
}

.impact-high {
    background: #ffebee;
    color: #e74c3c;
}

.impact-medium {
    background: #fff3e0;
    color: #f39c12;
}

.impact-low {
    background: #e8f5e8;
    color: #27ae60;
}

/* Confidence Meter */
.confidence-meter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.confidence-fill {
    flex: 1;
    height: 6px;
    background: linear-gradient(90deg, #ff6b6b, #ffa726);
    border-radius: 3px;
    transition: width 1s ease;
    animation: confidenceFill 2s ease-out;
}

@keyframes confidenceFill {
    from { width: 0% !important; }
}

.confidence-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
    min-width: 2.5rem;
}`,
    js: `// Interactive slide animations
document.querySelectorAll('.slide-row').forEach((row, index) => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Confidence meter interactions
document.querySelectorAll('.confidence-meter').forEach(meter => {
    meter.addEventListener('click', function() {
        const fill = this.querySelector('.confidence-fill');
        const currentWidth = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = currentWidth;
        }, 100);
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 23: HOVER GLOW EFFECT
// ====================================================================
minimal23: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table hover-glow">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Trend</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">🎧</div>
                        <div class="product-info">
                            <div class="product-name">Wireless Earbuds Pro</div>
                            <div class="product-brand">SoundMax</div>
                        </div>
                    </div>
                </td>
                <td>Audio</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star half">★</span>
                        <span class="rating-value">4.8</span>
                    </div>
                </td>
                <td>128</td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↑</span>
                        <span class="trend-text">Rising</span>
                    </div>
                </td>
                <td>$129.99</td>
            </tr>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">⌚</div>
                        <div class="product-info">
                            <div class="product-name">Smart Watch Series 5</div>
                            <div class="product-brand">TechFit</div>
                        </div>
                    </div>
                </td>
                <td>Wearables</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">☆</span>
                        <span class="rating-value">4.6</span>
                    </div>
                </td>
                <td>89</td>
                <td>
                    <div class="trend-indicator stable">
                        <span class="trend-arrow">→</span>
                        <span class="trend-text">Stable</span>
                    </div>
                </td>
                <td>$199.99</td>
            </tr>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">📱</div>
                        <div class="product-info">
                            <div class="product-name">Phone Case Ultra</div>
                            <div class="product-brand">Guardian</div>
                        </div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="rating-value">5.0</span>
                    </div>
                </td>
                <td>256</td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↑</span>
                        <span class="trend-text">Rising</span>
                    </div>
                </td>
                <td>$29.99</td>
            </tr>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">💻</div>
                        <div class="product-info">
                            <div class="product-name">Laptop Stand Pro</div>
                            <div class="product-brand">ErgoTech</div>
                        </div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">☆</span>
                        <span class="star">☆</span>
                        <span class="rating-value">3.4</span>
                    </div>
                </td>
                <td>34</td>
                <td>
                    <div class="trend-indicator down">
                        <span class="trend-arrow">↓</span>
                        <span class="trend-text">Falling</span>
                    </div>
                </td>
                <td>$49.99</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.hover-glow {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.hover-glow th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.hover-glow td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Glow Hover Effect */
.glow-row {
    position: relative;
    transition: all 0.4s ease;
}

.glow-row::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    right: -10px;
    bottom: 0;
    background: linear-gradient(90deg, 
        rgba(102, 126, 234, 0.1) 0%, 
        rgba(118, 75, 162, 0.1) 50%, 
        rgba(102, 126, 234, 0.1) 100%);
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transform: scaleX(0.95);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.glow-row:hover::before {
    opacity: 1;
    transform: scaleX(1);
}

.glow-row:hover td {
    transform: translateY(-2px);
    color: #2c3e50;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 
        0 4px 20px rgba(102, 126, 234, 0.15),
        0 0 0 1px rgba(102, 126, 234, 0.1);
    border-radius: 8px;
    margin: 4px 0;
}

/* Product Card */
.product-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.product-emoji {
    font-size: 1.5rem;
    opacity: 0.8;
    transition: transform 0.3s ease;
}

.glow-row:hover .product-emoji {
    transform: scale(1.2) rotate(5deg);
}

.product-info .product-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.product-info .product-brand {
    font-size: 0.75rem;
    color: #7f8c8d;
}

/* Rating Stars */
.rating-stars {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.star {
    color: #ffd700;
    font-size: 0.9rem;
}

.star.half {
    background: linear-gradient(90deg, #ffd700 50%, #ddd 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.rating-value {
    margin-left: 0.5rem;
    font-weight: 600;
    color: #333;
    font-size: 0.8rem;
}

/* Trend Indicator */
.trend-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.trend-indicator.up {
    background: #e8f5e8;
    color: #27ae60;
}

.trend-indicator.stable {
    background: #f0f0f0;
    color: #7f8c8d;
}

.trend-indicator.down {
    background: #ffebee;
    color: #e74c3c;
}

.trend-arrow {
    font-size: 1rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(-1px); }
}

.glow-row:hover .trend-indicator {
    transform: scale(1.05);
}`,
    js: `// Enhanced glow effects
document.querySelectorAll('.glow-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Star rating interactions
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.3)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    star.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 24: PULSE LOADING
// ====================================================================
minimal24: {
    html: `<div class="minimal-table-container">
    <div class="table-header-pulse">
        <h3>System Health Dashboard</h3>
        <div class="last-updated" id="lastUpdated">Updated just now</div>
    </div>
    <table class="minimal-table pulse-loading">
        <thead>
            <tr>
                <th>Service</th>
                <th>Status</th>
                <th>Uptime</th>
                <th>Response Time</th>
                <th>Health Score</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">🌐</div>
                        <div class="service-details">
                            <div class="service-name">API Gateway</div>
                            <div class="service-endpoint">api.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator online">
                        <div class="status-dot"></div>
                        <span>Online</span>
                    </div>
                </td>
                <td>99.9%</td>
                <td>
                    <div class="response-time fast">45ms</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="95">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 113.097"></circle>
                            </svg>
                            <span class="score-text">95</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">💾</div>
                        <div class="service-details">
                            <div class="service-name">Database Cluster</div>
                            <div class="service-endpoint">db-primary.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator online">
                        <div class="status-dot"></div>
                        <span>Online</span>
                    </div>
                </td>
                <td>99.8%</td>
                <td>
                    <div class="response-time fast">12ms</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="88">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 135.717"></circle>
                            </svg>
                            <span class="score-text">88</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">📧</div>
                        <div class="service-details">
                            <div class="service-name">Email Service</div>
                            <div class="service-endpoint">smtp.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator warning">
                        <div class="status-dot"></div>
                        <span>Degraded</span>
                    </div>
                </td>
                <td>98.5%</td>
                <td>
                    <div class="response-time slow">250ms</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="72">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 158.336"></circle>
                            </svg>
                            <span class="score-text">72</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">📊</div>
                        <div class="service-details">
                            <div class="service-name">Analytics API</div>
                            <div class="service-endpoint">analytics.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator offline">
                        <div class="status-dot"></div>
                        <span>Offline</span>
                    </div>
                </td>
                <td>95.2%</td>
                <td>
                    <div class="response-time timeout">Timeout</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="45">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 203.575"></circle>
                            </svg>
                            <span class="score-text">45</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.pulse-loading {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.table-header-pulse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e8e8e8;
}

.table-header-pulse h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.25rem;
    font-weight: 600;
}

.last-updated {
    font-size: 0.8rem;
    color: #7f8c8d;
    animation: textPulse 2s infinite;
}

@keyframes textPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.minimal-table.pulse-loading th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.pulse-loading td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.3s ease;
}

/* Pulse Animation */
.pulse-row {
    animation: rowPulse 3s ease-in-out infinite;
}

.pulse-row:nth-child(1) { animation-delay: 0.1s; }
.pulse-row:nth-child(2) { animation-delay: 0.3s; }
.pulse-row:nth-child(3) { animation-delay: 0.5s; }
.pulse-row:nth-child(4) { animation-delay: 0.7s; }

@keyframes rowPulse {
    0%, 100% { 
        background: white;
        transform: scale(1);
    }
    50% { 
        background: #f8f9fa;
        transform: scale(1.002);
    }
}

/* Service Info */
.service-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.service-icon {
    font-size: 1.3rem;
    opacity: 0.8;
}

.service-details .service-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.service-details .service-endpoint {
    font-size: 0.75rem;
    color: #7f8c8d;
    font-family: 'Monaco', 'Consolas', monospace;
}

/* Status Indicator */
.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: statusPulse 2s infinite;
}

.status-indicator.online .status-dot {
    background: #27ae60;
    animation: onlinePulse 2s infinite;
}

.status-indicator.warning .status-dot {
    background: #f39c12;
    animation: warningPulse 1.5s infinite;
}

.status-indicator.offline .status-dot {
    background: #e74c3c;
    animation: offlinePulse 1s infinite;
}

@keyframes onlinePulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(39, 174, 96, 0.7);
        transform: scale(1);
    }
    50% { 
        box-shadow: 0 0 0 4px rgba(39, 174, 96, 0);
        transform: scale(1.2);
    }
}

@keyframes warningPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(243, 156, 18, 0.7);
        transform: scale(1);
    }
    50% { 
        box-shadow: 0 0 0 4px rgba(243, 156, 18, 0);
        transform: scale(1.2);
    }
}

@keyframes offlinePulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
        transform: scale(1);
    }
    50% { 
        box-shadow: 0 0 0 4px rgba(231, 76, 60, 0);
        transform: scale(1.1);
    }
}

/* Response Time */
.response-time {
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
}

.response-time.fast {
    background: #e8f5e8;
    color: #27ae60;
}

.response-time.slow {
    background: #fff3e0;
    color: #f39c12;
}

.response-time.timeout {
    background: #ffebee;
    color: #e74c3c;
}

/* Health Score */
.health-score {
    display: flex;
    justify-content: center;
}

.score-circle {
    position: relative;
    width: 40px;
    height: 40px;
}

.score-svg {
    transform: rotate(-90deg);
}

.score-bg {
    fill: none;
    stroke: #f0f0f0;
    stroke-width: 3;
}

.score-fill {
    fill: none;
    stroke: #27ae60;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 113.097;
    transition: stroke-dashoffset 1s ease;
    animation: scoreFill 2s ease-out;
}

@keyframes scoreFill {
    from { stroke-dashoffset: 113.097; }
}

.score-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: 700;
    color: #333;
}

/* Action Button */
.btn-action.refresh {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.btn-action.refresh:hover {
    background: #667eea;
    color: white;
    transform: rotate(180deg);
}`,
    js: `// Update last updated time
function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('lastUpdated').textContent = \`Updated at \${timeString}\`;
}

// Update every 30 seconds
setInterval(updateLastUpdated, 30000);

// Refresh button functionality
document.querySelectorAll('.btn-action.refresh').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        const serviceName = row.querySelector('.service-name').textContent;
        
        // Add loading state
        this.textContent = '⏳';
        this.style.animation = 'spin 1s linear infinite';
        
        setTimeout(() => {
            this.textContent = '🔄';
            this.style.animation = '';
            updateLastUpdated();
            console.log(\`Refreshed data for: \${serviceName}\`);
        }, 1000);
    });
});

// Initialize score animations
document.querySelectorAll('.score-circle').forEach(circle => {
    const score = parseInt(circle.getAttribute('data-score'));
    const fill = circle.querySelector('.score-fill');
    const circumference = 2 * Math.PI * 18;
    const offset = circumference - (score / 100) * circumference;
    
    fill.style.strokeDashoffset = offset;
    
    // Color based on score
    if (score >= 80) {
        fill.style.stroke = '#27ae60';
    } else if (score >= 60) {
        fill.style.stroke = '#f39c12';
    } else {
        fill.style.stroke = '#e74c3c';
    }
});`
},

// ====================================================================
// MINIMAL TEMPLATE 25: MORPHING CELLS
// ====================================================================
minimal25: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table morphing-cells">
        <thead>
            <tr>
                <th>Performance Metric</th>
                <th>Current Value</th>
                <th>Previous Value</th>
                <th>Change</th>
                <th>Trend (7d)</th>
                <th>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">👥</div>
                        <div class="metric-details">
                            <div class="metric-name">Active Users</div>
                            <div class="metric-description">Daily active users</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="1284">1,284</div>
                </td>
                <td>
                    <div class="previous-value">1,150</div>
                </td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+134</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="900,1050,1100,1150,1200,1250,1284"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 85.6%"></div>
                        </div>
                        <span class="target-text">1,500</span>
                    </div>
                </td>
            </tr>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">💰</div>
                        <div class="metric-details">
                            <div class="metric-name">Monthly Revenue</div>
                            <div class="metric-description">Total monthly revenue</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="12500">$12,500</div>
                </td>
                <td>
                    <div class="previous-value">$11,200</div>
                </td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+11.6%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="8000,9500,10200,10800,11200,11800,12500"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 62.5%"></div>
                        </div>
                        <span class="target-text">$20,000</span>
                    </div>
                </td>
            </tr>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">📈</div>
                        <div class="metric-details">
                            <div class="metric-name">Conversion Rate</div>
                            <div class="metric-description">Visitor to customer rate</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="3.2">3.2%</div>
                </td>
                <td>
                    <div class="previous-value">2.8%</div>
                </td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+0.4%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="2.5,2.6,2.7,2.8,2.9,3.0,3.2"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 64%"></div>
                        </div>
                        <span class="target-text">5%</span>
                    </div>
                </td>
            </tr>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">⏱️</div>
                        <div class="metric-details">
                            <div class="metric-name">Avg. Session</div>
                            <div class="metric-description">Average session duration</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="4.8">4.8m</div>
                </td>
                <td>
                    <div class="previous-value">5.2m</div>
                </td>
                <td>
                    <div class="change-indicator negative">
                        <span class="change-arrow">↓</span>
                        <span class="change-value">-0.4m</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="5.5,5.3,5.2,5.1,5.0,4.9,4.8"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 80%"></div>
                        </div>
                        <span class="target-text">6m</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.morphing-cells {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.morphing-cells th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.morphing-cells td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Morph Row Animation */
.morph-row {
    opacity: 0;
    animation: morphIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.morph-row:nth-child(1) { animation-delay: 0.1s; }
.morph-row:nth-child(2) { animation-delay: 0.2s; }
.morph-row:nth-child(3) { animation-delay: 0.3s; }
.morph-row:nth-child(4) { animation-delay: 0.4s; }

@keyframes morphIn {
    0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }
    50% {
        transform: translateY(-5px) scale(1.02);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.morph-row:hover td {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
}

/* Metric Info */
.metric-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.metric-icon {
    font-size: 1.3rem;
    opacity: 0.8;
}

.metric-details .metric-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.metric-details .metric-description {
    font-size: 0.75rem;
    color: #7f8c8d;
}

/* Current Value Morphing */
.current-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
}

.current-value::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.4s ease;
    z-index: -1;
}

.current-value.morphing {
    color: white;
    transform: scale(1.1);
}

.current-value.morphing::before {
    opacity: 1;
    transform: scale(1);
}

/* Change Indicator */
.change-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.change-indicator.positive {
    background: #e8f5e8;
    color: #27ae60;
}

.change-indicator.negative {
    background: #ffebee;
    color: #e74c3c;
}

.change-arrow {
    font-size: 1rem;
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-2px); }
    60% { transform: translateY(-1px); }
}

/* Trend Sparkline */
.trend-sparkline {
    width: 80px;
    height: 30px;
}

.sparkline {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #f8f9fa, #fff);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}

.sparkline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        rgba(102, 126, 234, 0.3) 0%, 
        rgba(118, 75, 162, 0.3) 100%);
    clip-path: polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%);
    animation: drawSparkline 2s ease-out forwards;
}

@keyframes drawSparkline {
    to {
        clip-path: polygon(
            0% 100%,
            14.28% var(--y1),
            28.57% var(--y2),
            42.85% var(--y3),
            57.14% var(--y4),
            71.42% var(--y5),
            85.71% var(--y6),
            100% var(--y7),
            100% 100%
        );
    }
}

/* Target Progress */
.target-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.target-bar {
    flex: 1;
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
}

.target-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 3px;
    transition: width 1s ease;
    animation: targetFill 2s ease-out;
}

@keyframes targetFill {
    from { width: 0% !important; }
}

.target-text {
    font-size: 0.8rem;
    font-weight: 500;
    color: #666;
    min-width: 3rem;
}`,
    js: `// Value morphing animation
function animateValueChange(element, newValue) {
    element.classList.add('morphing');
    
    setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('morphing');
    }, 400);
}

// Initialize sparklines
document.querySelectorAll('.sparkline').forEach(sparkline => {
    const values = sparkline.getAttribute('data-values').split(',').map(Number);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue;
    
    // Calculate Y positions (inverted for SVG coordinate system)
    const yPositions = values.map(value => {
        const normalized = (value - minValue) / range;
        return 100 - (normalized * 80 + 10); // 10% padding top and bottom
    });
    
    // Set CSS custom properties for animation
    sparkline.style.setProperty('--y1', \`\${yPositions[0]}%\`);
    sparkline.style.setProperty('--y2', \`\${yPositions[1]}%\`);
    sparkline.style.setProperty('--y3', \`\${yPositions[2]}%\`);
    sparkline.style.setProperty('--y4', \`\${yPositions[3]}%\`);
    sparkline.style.setProperty('--y5', \`\${yPositions[4]}%\`);
    sparkline.style.setProperty('--y6', \`\${yPositions[5]}%\`);
    sparkline.style.setProperty('--y7', \`\${yPositions[6]}%\`);
});

// Interactive value updates
document.querySelectorAll('.current-value').forEach(valueElement => {
    valueElement.addEventListener('click', function() {
        const currentValue = this.getAttribute('data-value');
        const randomChange = (Math.random() - 0.5) * 100;
        const newValue = Math.max(0, parseFloat(currentValue) + randomChange);
        const formattedValue = newValue.toLocaleString();
        
        animateValueChange(this, formattedValue);
        this.setAttribute('data-value', newValue);
    });
});

// Auto-refresh simulation
setInterval(() => {
    document.querySelectorAll('.morph-row').forEach(row => {
        row.style.animation = 'none';
        setTimeout(() => {
            row.style.animation = 'morphIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }, 10);
    });
}, 10000);`
},
// ====================================================================
// MINIMAL TEMPLATE 26: UNIVERSAL DATA TABLE
// ====================================================================
minimal26: {
    html: `<div class="universal-table-container">
    <div class="table-actions">
        <div class="search-box">
            <input type="text" placeholder="Search..." class="search-input">
            <span class="search-icon">🔍</span>
        </div>
        <div class="table-controls">
            <select class="rows-select">
                <option>10 rows</option>
                <option>25 rows</option>
                <option>50 rows</option>
                <option>100 rows</option>
            </select>
            <button class="btn-export">Export</button>
        </div>
    </div>
    
    <table class="universal-table">
        <thead>
            <tr>
                <th>
                    <div class="th-content">
                        Name
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>
                    <div class="th-content">
                        Email
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>
                    <div class="th-content">
                        Role
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>
                    <div class="th-content">
                        Status
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">JD</div>
                        <div class="user-info">
                            <div class="user-name">John Doe</div>
                            <div class="user-id">ID: USR-001</div>
                        </div>
                    </div>
                </td>
                <td>john.doe@company.com</td>
                <td>
                    <span class="role-tag admin">Admin</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot active"></div>
                        <span>Active</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">JS</div>
                        <div class="user-info">
                            <div class="user-name">Jane Smith</div>
                            <div class="user-id">ID: USR-002</div>
                        </div>
                    </div>
                </td>
                <td>jane.smith@company.com</td>
                <td>
                    <span class="role-tag user">User</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot pending"></div>
                        <span>Pending</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">MJ</div>
                        <div class="user-info">
                            <div class="user-name">Mike Johnson</div>
                            <div class="user-id">ID: USR-003</div>
                        </div>
                    </div>
                </td>
                <td>mike.johnson@company.com</td>
                <td>
                    <span class="role-tag editor">Editor</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot active"></div>
                        <span>Active</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">SC</div>
                        <div class="user-info">
                            <div class="user-name">Sarah Chen</div>
                            <div class="user-id">ID: USR-004</div>
                        </div>
                    </div>
                </td>
                <td>sarah.chen@company.com</td>
                <td>
                    <span class="role-tag user">User</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot inactive"></div>
                        <span>Inactive</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="table-footer">
        <div class="pagination-info">
            Showing 1 to 4 of 100 entries
        </div>
        <div class="pagination">
            <button class="page-btn prev" disabled>‹ Previous</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-btn">10</button>
            <button class="page-btn next">Next ›</button>
        </div>
    </div>
</div>`,
    css: `.universal-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.table-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #fafafa;
    border-bottom: 1px solid #e8e8e8;
}

.search-box {
    position: relative;
    width: 300px;
}

.search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
}

.table-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.rows-select {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
}

.btn-export {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-export:hover {
    background: #5a6fd8;
}

.universal-table {
    width: 100%;
    border-collapse: collapse;
}

.universal-table th {
    padding: 1rem 1.25rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #f8f9fa;
    cursor: pointer;
    transition: background 0.3s ease;
}

.universal-table th:hover {
    background: #e9ecef;
}

.th-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sort-indicator {
    font-size: 0.8rem;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.universal-table th:hover .sort-indicator {
    opacity: 1;
}

.universal-table td {
    padding: 1.25rem 1.25rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f5f5f5;
    transition: background 0.3s ease;
}

.universal-table tr:hover td {
    background: #f8f9fa;
}

/* User Cell */
.user-cell {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar-sm {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.user-info .user-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.user-info .user-id {
    font-size: 0.75rem;
    color: #7f8c8d;
}

/* Role Tags */
.role-tag {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.role-tag.admin {
    background: #fff0f0;
    color: #e74c3c;
}

.role-tag.editor {
    background: #fff3e0;
    color: #f39c12;
}

.role-tag.user {
    background: #e8f5e8;
    color: #27ae60;
}

/* Status Cell */
.status-cell {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.status-dot.active {
    background: #27ae60;
    animation: pulse 2s infinite;
}

.status-dot.pending {
    background: #f39c12;
}

.status-dot.inactive {
    background: #95a5a6;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn-icon {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.btn-icon:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.btn-icon.edit:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.btn-icon.delete:hover {
    background: #ffebee;
    border-color: #f44336;
}

/* Table Footer */
.table-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.pagination-info {
    font-size: 0.9rem;
    color: #666;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.page-ellipsis {
    padding: 0.5rem;
    color: #666;
}`,
    js: `// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('.universal-table tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Sort functionality
document.querySelectorAll('.universal-table th').forEach(header => {
    header.addEventListener('click', function() {
        const table = this.closest('table');
        const headerIndex = Array.from(this.parentElement.children).indexOf(this);
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        
        const isAscending = !this.classList.contains('asc');
        this.classList.toggle('asc', isAscending);
        this.classList.toggle('desc', !isAscending);
        
        rows.sort((a, b) => {
            const aText = a.children[headerIndex].textContent.trim();
            const bText = b.children[headerIndex].textContent.trim();
            
            if (isAscending) {
                return aText.localeCompare(bText);
            } else {
                return bText.localeCompare(aText);
            }
        });
        
        // Re-append sorted rows
        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    });
});

// Pagination
document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.disabled) return;
        
        document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // In real implementation, this would load the corresponding page data
        console.log('Page changed');
    });
});

// Export functionality
document.querySelector('.btn-export').addEventListener('click', function() {
    alert('Exporting data...');
    // In real implementation, this would trigger CSV/Excel download
});`
},

// ====================================================================
// MINIMAL TEMPLATE 27: PRICING COMPARISON
// ====================================================================
minimal27: {
    html: `<div class="pricing-table-container">
    <div class="pricing-header">
        <h2>Choose Your Plan</h2>
        <p>Select the perfect plan for your needs</p>
        <div class="billing-toggle">
            <span class="billing-option active">Monthly</span>
            <label class="toggle-switch">
                <input type="checkbox" id="billingToggle">
                <span class="toggle-slider"></span>
            </label>
            <span class="billing-option">Yearly <span class="discount-badge">Save 20%</span></span>
        </div>
    </div>
    
    <table class="pricing-table">
        <thead>
            <tr>
                <th class="feature-column">Features</th>
                <th class="plan-column">
                    <div class="plan-card basic">
                        <div class="plan-name">Basic</div>
                        <div class="plan-price">
                            <span class="currency">$</span>
                            <span class="amount">19</span>
                            <span class="period">/month</span>
                        </div>
                        <button class="btn-plan">Get Started</button>
                    </div>
                </th>
                <th class="plan-column popular">
                    <div class="plan-card pro">
                        <div class="popular-badge">Most Popular</div>
                        <div class="plan-name">Professional</div>
                        <div class="plan-price">
                            <span class="currency">$</span>
                            <span class="amount">49</span>
                            <span class="period">/month</span>
                        </div>
                        <button class="btn-plan primary">Try Free</button>
                    </div>
                </th>
                <th class="plan-column">
                    <div class="plan-card enterprise">
                        <div class="plan-name">Enterprise</div>
                        <div class="plan-price">
                            <span class="currency">$</span>
                            <span class="amount">99</span>
                            <span class="period">/month</span>
                        </div>
                        <button class="btn-plan">Contact Sales</button>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="feature-category">
                <td colspan="4">Core Features</td>
            </tr>
            <tr>
                <td>Number of Users</td>
                <td>1 user</td>
                <td>5 users</td>
                <td>Unlimited users</td>
            </tr>
            <tr>
                <td>Storage Space</td>
                <td>5 GB</td>
                <td>50 GB</td>
                <td>1 TB</td>
            </tr>
            <tr>
                <td>API Access</td>
                <td>❌</td>
                <td>✅ Limited</td>
                <td>✅ Full access</td>
            </tr>
            
            <tr class="feature-category">
                <td colspan="4">Support</td>
            </tr>
            <tr>
                <td>Email Support</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>Phone Support</td>
                <td>❌</td>
                <td>✅ Business hours</td>
                <td>✅ 24/7</td>
            </tr>
            <tr>
                <td>Dedicated Account Manager</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
            </tr>
            
            <tr class="feature-category">
                <td colspan="4">Security</td>
            </tr>
            <tr>
                <td>SSL Certificate</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>Two-Factor Authentication</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>SAML SSO</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
            </tr>
        </tbody>
    </table>
    
    <div class="pricing-footer">
        <p>All plans include 30-day money-back guarantee</p>
    </div>
</div>`,
    css: `.pricing-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-header {
    text-align: center;
    padding: 3rem 2rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.pricing-header h2 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
}

.pricing-header p {
    margin: 0 0 2rem 0;
    opacity: 0.9;
    font-size: 1.1rem;
}

.billing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 500;
}

.billing-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.billing-option.active {
    color: #ffd700;
}

.discount-badge {
    background: #ffd700;
    color: #333;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 34px;
    transition: .4s;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: .4s;
}

input:checked + .toggle-slider {
    background: #ffd700;
}

input:checked + .toggle-slider:before {
    transform: translateX(30px);
}

.pricing-table {
    width: 100%;
    border-collapse: collapse;
}

.pricing-table th {
    padding: 0;
    vertical-align: top;
}

.feature-column {
    width: 30%;
    padding: 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.plan-column {
    width: 23.33%;
    padding: 0;
    border-left: 1px solid #e8e8e8;
}

.plan-column.popular {
    position: relative;
    background: #f8f9fa;
}

.plan-column.popular::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.popular-badge {
    background: linear-gradient(90deg, #667eea, #764ba2);
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.plan-card {
    padding: 2rem 1.5rem;
    text-align: center;
}

.plan-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.plan-price {
    margin-bottom: 1.5rem;
}

.plan-price .currency {
    font-size: 1.5rem;
    font-weight: 600;
    color: #667eea;
    vertical-align: top;
}

.plan-price .amount {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    line-height: 1;
}

.plan-price .period {
    font-size: 0.9rem;
    color: #7f8c8d;
}

.btn-plan {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 2px solid #667eea;
    background: white;
    color: #667eea;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-plan:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-plan.primary {
    background: #667eea;
    color: white;
}

.btn-plan.primary:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.pricing-table td {
    padding: 1.25rem 1.5rem;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    color: #555;
    font-size: 0.95rem;
}

.pricing-table td:first-child {
    text-align: left;
    font-weight: 500;
    color: #333;
    background: #f8f9fa;
}

.feature-category td {
    background: #2c3e50;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
}

.pricing-table tr:hover td:not(.feature-category td) {
    background: #f8f9fa;
}

.pricing-footer {
    text-align: center;
    padding: 2rem;
    background: #f8f9fa;
    border-top: 1px solid #e8e8e8;
    color: #666;
    font-size: 0.9rem;
}`,
    js: `// Billing toggle functionality
const billingToggle = document.getElementById('billingToggle');
const monthlyPrices = { basic: 19, pro: 49, enterprise: 99 };
const yearlyPrices = { basic: 15, pro: 39, enterprise: 79 };

billingToggle.addEventListener('change', function() {
    const isYearly = this.checked;
    const prices = isYearly ? yearlyPrices : monthlyPrices;
    
    // Update prices
    document.querySelectorAll('.plan-price .amount').forEach((element, index) => {
        const plan = ['basic', 'pro', 'enterprise'][index];
        element.textContent = prices[plan];
    });
    
    // Update period text
    document.querySelectorAll('.plan-price .period').forEach(element => {
        element.textContent = isYearly ? '/month' : '/month';
    });
    
    // Update billing option active states
    document.querySelectorAll('.billing-option').forEach((option, index) => {
        option.classList.toggle('active', index === (isYearly ? 1 : 0));
    });
});

// Plan selection
document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', function() {
        const planName = this.closest('.plan-card').querySelector('.plan-name').textContent;
        alert(\`Selected plan: \${planName}\`);
        // In real implementation, this would redirect to signup/payment
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 28: BLOG/CONTENT MANAGER
// ====================================================================
minimal28: {
    html: `<div class="content-table-container">
    <div class="content-header">
        <h2>Content Management</h2>
        <div class="content-actions">
            <button class="btn-new-post">+ New Post</button>
            <div class="view-options">
                <button class="view-option active" data-view="all">All Posts</button>
                <button class="view-option" data-view="published">Published</button>
                <button class="view-option" data-view="drafts">Drafts</button>
                <button class="view-option" data-view="scheduled">Scheduled</button>
            </div>
        </div>
    </div>
    
    <table class="content-table">
        <thead>
            <tr>
                <th class="title-column">Title</th>
                <th class="author-column">Author</th>
                <th class="date-column">Date</th>
                <th class="status-column">Status</th>
                <th class="stats-column">Stats</th>
                <th class="actions-column">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/667eea/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">Getting Started with Web Development</div>
                            <div class="post-category">Web Development • 5 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">JD</div>
                        <div class="author-name">John Doe</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 15, 2024</div>
                        <div class="publish-time">10:30 AM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge published">Published</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">1.2K</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">45</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">89</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn view" title="View">👁️</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/764ba2/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">Advanced CSS Techniques for 2024</div>
                            <div class="post-category">CSS • 8 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">JS</div>
                        <div class="author-name">Jane Smith</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 18, 2024</div>
                        <div class="publish-time">02:15 PM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge draft">Draft</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">-</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn preview" title="Preview">👁️</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/f39c12/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">JavaScript Performance Optimization</div>
                            <div class="post-category">JavaScript • 6 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">MJ</div>
                        <div class="author-name">Mike Johnson</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 20, 2024</div>
                        <div class="publish-time">09:00 AM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge scheduled">Scheduled</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">-</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn schedule" title="Reschedule">⏰</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/27ae60/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">Building Responsive Layouts with Flexbox</div>
                            <div class="post-category">CSS • 4 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">SC</div>
                        <div class="author-name">Sarah Chen</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 22, 2024</div>
                        <div class="publish-time">11:45 AM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge published">Published</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">856</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">23</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">67</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn view" title="View">👁️</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="content-footer">
        <div class="content-summary">
            Showing 4 of 128 posts
        </div>
        <div class="content-pagination">
            <button class="page-btn prev">‹</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-btn">12</button>
            <button class="page-btn next">›</button>
        </div>
    </div>
</div>`,
    css: `.content-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.content-header h2 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
}

.content-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.btn-new-post {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-new-post:hover {
    background: #5a6fd8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.view-options {
    display: flex;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}

.view-option {
    padding: 0.5rem 1rem;
    border: none;
    background: white;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.view-option.active {
    background: #667eea;
    color: white;
}

.view-option:hover:not(.active) {
    background: #f5f5f5;
}

.content-table {
    width: 100%;
    border-collapse: collapse;
}

.content-table th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #fafafa;
}

.title-column { width: 35%; }
.author-column { width: 15%; }
.date-column { width: 15%; }
.status-column { width: 12%; }
.stats-column { width: 15%; }
.actions-column { width: 8%; }

.content-table td {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #f5f5f5;
    vertical-align: middle;
}

.content-row:hover td {
    background: #f8f9fa;
}

/* Post Title */
.post-title {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.post-thumbnail {
    width: 60px;
    height: 40px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
}

.post-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.post-info .post-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.post-info .post-category {
    font-size: 0.8rem;
    color: #7f8c8d;
}

/* Author Info */
.author-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.author-avatar {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.author-name {
    font-weight: 500;
    color: #333;
}

/* Date Info */
.date-info .publish-date {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.date-info .publish-time {
    font-size: 0.8rem;
    color: #7f8c8d;
}

/* Status Badges */
.status-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.status-badge.published {
    background: #e8f5e8;
    color: #27ae60;
}

.status-badge.draft {
    background: #fff3e0;
    color: #f39c12;
}

.status-badge.scheduled {
    background: #e3f2fd;
    color: #2980b9;
}

/* Post Stats */
.post-stats {
    display: flex;
    gap: 1rem;
}

.stat {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
}

.stat-icon {
    opacity: 0.7;
}

.stat-value {
    font-weight: 600;
    color: #333;
}

/* Content Actions */
.content-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.action-btn:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.action-btn.edit:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.action-btn.view:hover {
    background: #e8f5e8;
    border-color: #4caf50;
}

/* Content Footer */
.content-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.content-summary {
    font-size: 0.9rem;
    color: #666;
}

.content-pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.page-btn:hover:not(.active) {
    background: #f5f5f5;
}

.page-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-ellipsis {
    padding: 0.5rem;
    color: #666;
}`,
    js: `// View filtering
document.querySelectorAll('.view-option').forEach(option => {
    option.addEventListener('click', function() {
        const view = this.getAttribute('data-view');
        
        // Update active state
        document.querySelectorAll('.view-option').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter rows based on view
        document.querySelectorAll('.content-row').forEach(row => {
            const status = row.querySelector('.status-badge').classList[1];
            
            if (view === 'all') {
                row.style.display = '';
            } else {
                row.style.display = status === view ? '' : 'none';
            }
        });
        
        // Update summary
        const visibleRows = document.querySelectorAll('.content-row[style=""]').length;
        document.querySelector('.content-summary').textContent = \`Showing \${visibleRows} of 128 posts\`;
    });
});

// New post button
document.querySelector('.btn-new-post').addEventListener('click', function() {
    alert('Opening new post editor...');
    // In real implementation, this would open a post editor
});

// Action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title;
        const postTitle = this.closest('.content-row').querySelector('.post-name').textContent;
        
        switch(action) {
            case 'Edit':
                alert(\`Editing: "\${postTitle}"\`);
                break;
            case 'View':
                alert(\`Viewing: "\${postTitle}"\`);
                break;
            case 'Preview':
                alert(\`Previewing: "\${postTitle}"\`);
                break;
            case 'Reschedule':
                alert(\`Rescheduling: "\${postTitle}"\`);
                break;
        }
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 29: E-COMMERCE PRODUCTS
// ====================================================================
minimal29: {
    html: `<div class="ecommerce-table-container">
    <div class="ecommerce-header">
        <h2>Product Inventory</h2>
        <div class="product-actions">
            <div class="search-products">
                <input type="text" placeholder="Search products..." class="search-input">
                <span class="search-icon">🔍</span>
            </div>
            <button class="btn-add-product">+ Add Product</button>
        </div>
    </div>
    
    <table class="ecommerce-table">
        <thead>
            <tr>
                <th class="product-column">Product</th>
                <th class="price-column">Price</th>
                <th class="stock-column">Stock</th>
                <th class="category-column">Category</th>
                <th class="status-column">Status</th>
                <th class="sales-column">Sales</th>
                <th class="actions-column">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/667eea/white?text=P1" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">Wireless Bluetooth Earbuds</div>
                            <div class="product-sku">SKU: WB-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$129.99</div>
                        <div class="original-price">$149.99</div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level high">45 in stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 90%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag electronics">Electronics</span>
                </td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">128 sold</div>
                        <div class="sales-trend up">+15%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/764ba2/white?text=P2" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">Smart Fitness Watch</div>
                            <div class="product-sku">SKU: SF-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$199.99</div>
                        <div class="original-price"></div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level medium">12 in stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 24%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag wearables">Wearables</span>
                </td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">89 sold</div>
                        <div class="sales-trend up">+8%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/f39c12/white?text=P3" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">USB-C Hub Adapter</div>
                            <div class="product-sku">SKU: UC-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$39.99</div>
                        <div class="original-price">$49.99</div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level low">3 in stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 6%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag accessories">Accessories</span>
                </td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">256 sold</div>
                        <div class="sales-trend up">+22%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/e74c3c/white?text=P4" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">Gaming Mechanical Keyboard</div>
                            <div class="product-sku">SKU: GM-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$89.99</div>
                        <div class="original-price"></div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level out">Out of stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag electronics">Electronics</span>
                </td>
                <td>
                    <span class="status-badge inactive">Inactive</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">67 sold</div>
                        <div class="sales-trend down">-5%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="ecommerce-footer">
        <div class="inventory-summary">
            <div class="summary-item">
                <span class="summary-label">Total Products:</span>
                <span class="summary-value">48</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Low Stock:</span>
                <span class="summary-value">3</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Out of Stock:</span>
                <span class="summary-value">1</span>
            </div>
        </div>
        <div class="ecommerce-pagination">
            <button class="page-btn prev">‹</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-btn">5</button>
            <button class="page-btn next">›</button>
        </div>
    </div>
</div>`,
    css: `.ecommerce-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.ecommerce-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.ecommerce-header h2 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
}

.product-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.search-products {
    position: relative;
    width: 250px;
}

.search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
}

.btn-add-product {
    background: #27ae60;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-add-product:hover {
    background: #219a52;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
}

.ecommerce-table {
    width: 100%;
    border-collapse: collapse;
}

.ecommerce-table th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #fafafa;
}

.product-column { width: 25%; }
.price-column { width: 12%; }
.stock-column { width: 15%; }
.category-column { width: 12%; }
.status-column { width: 10%; }
.sales-column { width: 12%; }
.actions-column { width: 8%; }

.ecommerce-table td {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #f5f5f5;
    vertical-align: middle;
}

.product-row:hover td {
    background: #f8f9fa;
}

/* Product Cell */
.product-cell {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.product-image {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background: #f5f5f5;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-details .product-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.product-details .product-sku {
    font-size: 0.8rem;
    color: #7f8c8d;
}

/* Price Info */
.price-info .current-price {
    font-weight: 700;
    color: #2c3e50;
    font-size: 1rem;
}

.price-info .original-price {
    font-size: 0.8rem;
    color: #95a5a6;
    text-decoration: line-through;
}

/* Stock Info */
.stock-level {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.stock-level.high {
    color: #27ae60;
}

.stock-level.medium {
    color: #f39c12;
}

.stock-level.low {
    color: #e74c3c;
}

.stock-level.out {
    color: #95a5a6;
}

.stock-progress {
    width: 80px;
}

.progress-bar {
    width: 100%;
    height: 4px;
    background: #ecf0f1;
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 0.3s ease;
}

.stock-level.high ~ .stock-progress .progress-fill {
    background: #27ae60;
}

.stock-level.medium ~ .stock-progress .progress-fill {
    background: #f39c12;
}

.stock-level.low ~ .stock-progress .progress-fill {
    background: #e74c3c;
}

/* Category Tags */
.category-tag {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.category-tag.electronics {
    background: #e3f2fd;
    color: #1976d2;
}

.category-tag.wearables {
    background: #f3e5f5;
    color: #7b1fa2;
}

.category-tag.accessories {
    background: #fff3e0;
    color: #f57c00;
}

/* Status Badges */
.status-badge.active {
    background: #e8f5e8;
    color: #27ae60;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-badge.inactive {
    background: #f5f5f5;
    color: #95a5a6;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

/* Sales Info */
.sales-info {
    text-align: center;
}

.sales-count {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
}

.sales-trend {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
}

.sales-trend.up {
    background: #e8f5e8;
    color: #27ae60;
}

.sales-trend.down {
    background: #ffebee;
    color: #e74c3c;
}

/* Product Actions */
.product-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.action-btn:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.action-btn.edit:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.action-btn.duplicate:hover {
    background: #fff3e0;
    border-color: #ff9800;
}

/* E-commerce Footer */
.ecommerce-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.inventory-summary {
    display: flex;
    gap: 2rem;
}

.summary-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.summary-label {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.25rem;
}

.summary-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
}

.ecommerce-pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.page-btn:hover:not(.active) {
    background: #f5f5f5;
}

.page-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-ellipsis {
    padding: 0.5rem;
    color: #666;
}`,
    js: `// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('.product-row');
    
    rows.forEach(row => {
        const productName = row.querySelector('.product-name').textContent.toLowerCase();
        const productSku = row.querySelector('.product-sku').textContent.toLowerCase();
        const text = productName + ' ' + productSku;
        
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Add product button
document.querySelector('.btn-add-product').addEventListener('click', function() {
    alert('Opening product creation form...');
    // In real implementation, this would open a product form
});

// Stock level warnings
document.querySelectorAll('.stock-level').forEach(level => {
    if (level.classList.contains('low') || level.classList.contains('out')) {
        level.closest('.product-row').style.background = '#fff9e6';
        
        // Add warning icon
        const warningIcon = document.createElement('span');
        warningIcon.textContent = '⚠️';
        warningIcon.style.marginLeft = '0.5rem';
        level.appendChild(warningIcon);
    }
});

// Action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title;
        const productName = this.closest('.product-row').querySelector('.product-name').textContent;
        
        switch(action) {
            case 'Edit':
                alert(\`Editing product: "\${productName}"\`);
                break;
            case 'Duplicate':
                alert(\`Duplicating product: "\${productName}"\`);
                break;
        }
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 30: CONTACT DIRECTORY
// ====================================================================
minimal30: {
    html: `<div class="contact-table-container">
    <div class="contact-header">
        <h2>Team Directory</h2>
        <div class="contact-filters">
            <div class="filter-group">
                <label>Department:</label>
                <select class="department-filter">
                    <option value="all">All Departments</option>
                    <option value="engineering">Engineering</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Location:</label>
                <select class="location-filter">
                    <option value="all">All Locations</option>
                    <option value="new-york">New York</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="london">London</option>
                    <option value="tokyo">Tokyo</option>
                </select>
            </div>
        </div>
    </div>
    
    <table class="contact-table">
        <thead>
            <tr>
                <th class="contact-column">Contact</th>
                <th class="role-column">Role</th>
                <th class="department-column">Department</th>
                <th class="location-column">Location</th>
                <th class="contact-info-column">Contact Info</th>
                <th class="availability-column">Availability</th>
                <th class="quick-actions-column">Quick Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/667eea/white?text=JS" alt="John Smith">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">John Smith</div>
                            <div class="contact-title">Senior Developer</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag senior">Senior Dev</span>
                </td>
                <td>
                    <span class="department engineering">Engineering</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇺🇸</span>
                        <span class="location-name">New York</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">john.smith@company.com</div>
                        <div class="contact-phone">+1 (555) 123-4567</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status available">
                        <div class="status-indicator"></div>
                        <span>Available</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/764ba2/white?text=SC" alt="Sarah Chen">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">Sarah Chen</div>
                            <div class="contact-title">Product Designer</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag designer">Designer</span>
                </td>
                <td>
                    <span class="department design">Design</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇺🇸</span>
                        <span class="location-name">San Francisco</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">sarah.chen@company.com</div>
                        <div class="contact-phone">+1 (555) 987-6543</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status away">
                        <div class="status-indicator"></div>
                        <span>Away</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/f39c12/white?text=MJ" alt="Mike Johnson">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">Mike Johnson</div>
                            <div class="contact-title">Sales Manager</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag manager">Manager</span>
                </td>
                <td>
                    <span class="department sales">Sales</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇬🇧</span>
                        <span class="location-name">London</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">mike.johnson@company.com</div>
                        <div class="contact-phone">+44 20 7946 0958</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status busy">
                        <div class="status-indicator"></div>
                        <span>In a Meeting</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/27ae60/white?text=ED" alt="Emily Davis">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">Emily Davis</div>
                            <div class="contact-title">Support Specialist</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag specialist">Specialist</span>
                </td>
                <td>
                    <span class="department support">Support</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇯🇵</span>
                        <span class="location-name">Tokyo</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">emily.davis@company.com</div>
                        <div class="contact-phone">+81 3 1234 5678</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status available">
                        <div class="status-indicator"></div>
                        <span>Available</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="contact-footer">
        <div class="contact-stats">
            <div class="stat-item">
                <span class="stat-label">Total Contacts:</span>
                <span class="stat-value">48</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Online Now:</span>
                <span class="stat-value">12</span>
            </div>
        </div>
        <div class="contact-export">
            <button class="btn-export-contacts">Export Contacts</button>
        </div>
    </div>
</div>`,
    css: `.contact-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.contact-header {
    padding: 2rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.contact-header h2 {
    margin: 0 0 1.5rem 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
}

.contact-filters {
    display: flex;
    gap: 2rem;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.filter-group label {
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
}

.department-filter,
.location-filter {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
    min-width: 150px;
}

.contact-table {
    width: 100%;
    border-collapse: collapse;
}

.contact-table th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #fafafa;
}

.contact-column { width: 22%; }
.role-column { width: 12%; }
.department-column { width: 12%; }
.location-column { width: 12%; }
.contact-info-column { width: 20%; }
.availability-column { width: 12%; }
.quick-actions-column { width: 10%; }

.contact-table td {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #f5f5f5;
    vertical-align: middle;
}

.contact-row:hover td {
    background: #f8f9fa;
}

/* Contact Card */
.contact-card {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: #f5f5f5;
}

.contact-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contact-details .contact-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.contact-details .contact-title {
    font-size: 0.85rem;
    color: #7f8c8d;
}

/* Role Tags */
.role-tag {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.role-tag.senior {
    background: #e3f2fd;
    color: #1976d2;
}

.role-tag.designer {
    background: #f3e5f5;
    color: #7b1fa2;
}

.role-tag.manager {
    background: #fff3e0;
    color: #f57c00;
}

.role-tag.specialist {
    background: #e8f5e8;
    color: #388e3c;
}

/* Department */
.department {
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
}

.department.engineering {
    background: #e3f2fd;
    color: #1976d2;
}

.department.design {
    background: #f3e5f5;
    color: #7b1fa2;
}

.department.sales {
    background: #fff3e0;
    color: #f57c00;
}

.department.support {
    background: #e8f5e8;
    color: #388e3c;
}

/* Location Info */
.location-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.location-flag {
    font-size: 1.2rem;
}

.location-name {
    font-weight: 500;
    color: #333;
}

/* Contact Info */
.contact-info .contact-email {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.25rem;
}

.contact-info .contact-phone {
    font-size: 0.85rem;
    color: #7f8c8d;
}

/* Availability Status */
.availability-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.availability-status.available {
    background: #e8f5e8;
    color: #27ae60;
}

.availability-status.away {
    background: #fff3e0;
    color: #f39c12;
}

.availability-status.busy {
    background: #ffebee;
    color: #e74c3c;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: statusPulse 2s infinite;
}

.availability-status.available .status-indicator {
    background: #27ae60;
}

.availability-status.away .status-indicator {
    background: #f39c12;
}

.availability-status.busy .status-indicator {
    background: #e74c3c;
}

@keyframes statusPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Quick Actions */
.quick-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.action-btn:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.action-btn.email:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.action-btn.call:hover {
    background: #e8f5e8;
    border-color: #4caf50;
}

.action-btn.message:hover {
    background: #fff3e0;
    border-color: #ff9800;
}

/* Contact Footer */
.contact-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.contact-stats {
    display: flex;
    gap: 2rem;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-label {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.25rem;
}

.stat-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
}

.btn-export-contacts {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-export-contacts:hover {
    background: #5a6fd8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}`,
    js: `// Filter functionality
const departmentFilter = document.querySelector('.department-filter');
const locationFilter = document.querySelector('.location-filter');

function filterContacts() {
    const department = departmentFilter.value;
    const location = locationFilter.value;
    const rows = document.querySelectorAll('.contact-row');
    
    rows.forEach(row => {
        const rowDepartment = row.querySelector('.department').textContent.toLowerCase();
        const rowLocation = row.querySelector('.location-name').textContent.toLowerCase().replace(' ', '-');
        
        const departmentMatch = department === 'all' || rowDepartment === department;
        const locationMatch = location === 'all' || rowLocation === location;
        
        row.style.display = departmentMatch && locationMatch ? '' : 'none';
    });
}

departmentFilter.addEventListener('change', filterContacts);
locationFilter.addEventListener('change', filterContacts);

// Quick actions
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title;
        const contactName = this.closest('.contact-row').querySelector('.contact-name').textContent;
        
        switch(action) {
            case 'Send Email':
                alert(\`Composing email to \${contactName}\`);
                break;
            case 'Call':
                alert(\`Calling \${contactName}\`);
                break;
            case 'Message':
                alert(\`Messaging \${contactName}\`);
                break;
        }
    });
});

// Export contacts
document.querySelector('.btn-export-contacts').addEventListener('click', function() {
    alert('Exporting contact list...');
    // In real implementation, this would export contacts as CSV/vCard
});

// Update online status randomly (for demo)
setInterval(() => {
    document.querySelectorAll('.availability-status').forEach(status => {
        if (Math.random() > 0.7) {
            const states = ['available', 'away', 'busy'];
            const currentState = status.classList[1];
            let newState;
            
            do {
                newState = states[Math.floor(Math.random() * states.length)];
            } while (newState === currentState);
            
            status.classList.remove(currentState);
            status.classList.add(newState);
            
            const statusText = status.querySelector('span:last-child');
            switch(newState) {
                case 'available':
                    statusText.textContent = 'Available';
                    break;
                case 'away':
                    statusText.textContent = 'Away';
                    break;
                case 'busy':
                    statusText.textContent = 'In a Meeting';
                    break;
            }
        }
    });
}, 10000);`
},
    // ====================================================================
    // ANALYTICS TEMPLATE 1: WEBSITE TRAFFIC
    // ====================================================================
    analytics1: {
        html: `<div class="analytics-table-container">
    <div class="analytics-header">
        <h3>Website Traffic Analytics</h3>
        <div class="date-range">Last 30 Days</div>
    </div>
    <div class="metrics-summary">
        <div class="metric-card">
            <div class="metric-value">124,580</div>
            <div class="metric-label">Total Visits</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">2:45</div>
            <div class="metric-label">Avg. Duration</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">41.2%</div>
            <div class="metric-label">Bounce Rate</div>
        </div>
    </div>
    <table class="analytics-table traffic-table">
        <thead>
            <tr>
                <th>Page URL</th>
                <th>Pageviews</th>
                <th>Unique Visitors</th>
                <th>Bounce Rate</th>
                <th>Avg. Time</th>
                <th>Conversion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">Homepage</span>
                        <span class="full-url">/index.html</span>
                    </div>
                </td>
                <td>45,230</td>
                <td>32,150</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">38.5%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 38.5%"></div>
                        </div>
                    </div>
                </td>
                <td>2:15</td>
                <td>4.2%</td>
            </tr>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">Product Catalog</span>
                        <span class="full-url">/products</span>
                    </div>
                </td>
                <td>32,890</td>
                <td>24,670</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">42.1%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 42.1%"></div>
                        </div>
                    </div>
                </td>
                <td>3:45</td>
                <td>6.8%</td>
            </tr>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">About Us</span>
                        <span class="full-url">/about</span>
                    </div>
                </td>
                <td>18,450</td>
                <td>15,230</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">51.3%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 51.3%"></div>
                        </div>
                    </div>
                </td>
                <td>1:30</td>
                <td>1.2%</td>
            </tr>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">Contact Page</span>
                        <span class="full-url">/contact</span>
                    </div>
                </td>
                <td>12,560</td>
                <td>10,890</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">28.9%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 28.9%"></div>
                        </div>
                    </div>
                </td>
                <td>4:20</td>
                <td>8.5%</td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.analytics-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.analytics-header {
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.analytics-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.date-range {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
}

.metrics-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.metric-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metric-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.metric-label {
    font-size: 0.875rem;
    color: #6b7280;
}

.analytics-table {
    width: 100%;
    border-collapse: collapse;
}

.analytics-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.analytics-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.analytics-table tr:hover {
    background: #f9fafb;
}

.page-url .url-info {
    display: flex;
    flex-direction: column;
}

.page-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.full-url {
    font-size: 0.75rem;
    color: #9ca3af;
    font-family: monospace;
}

.metric-with-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
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
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    border-radius: 3px;
    transition: width 0.3s ease;
}`,
        js: `// Animate metric bars on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 2: USER ACQUISITION
    // ====================================================================
    analytics2: {
        html: `<div class="acquisition-table-container">
    <div class="acquisition-header">
        <h3>User Acquisition Channels</h3>
        <div class="time-filter">
            <select class="period-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option selected>Last 90 Days</option>
                <option>Year to Date</option>
            </select>
        </div>
    </div>
    <table class="acquisition-table">
        <thead>
            <tr>
                <th>Traffic Source</th>
                <th>Users</th>
                <th>New Users</th>
                <th>Sessions</th>
                <th>Bounce Rate</th>
                <th>Conversion</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">🔍</div>
                        <div class="source-details">
                            <div class="source-name">Organic Search</div>
                            <div class="source-description">Google, Bing, etc.</div>
                        </div>
                    </div>
                </td>
                <td>45,230</td>
                <td>32,150</td>
                <td>67,890</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">38.5%</span>
                        <div class="rate-indicator low">Low</div>
                    </div>
                </td>
                <td>4.2%</td>
                <td class="trend-cell">
                    <div class="trend positive">+12% ↗</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">📱</div>
                        <div class="source-details">
                            <div class="source-name">Social Media</div>
                            <div class="source-description">Facebook, Twitter, Instagram</div>
                        </div>
                    </div>
                </td>
                <td>28,450</td>
                <td>18,230</td>
                <td>42,670</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">52.1%</span>
                        <div class="rate-indicator medium">Medium</div>
                    </div>
                </td>
                <td>2.8%</td>
                <td class="trend-cell">
                    <div class="trend positive">+8% ↗</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">📧</div>
                        <div class="source-details">
                            <div class="source-name">Email Marketing</div>
                            <div class="source-description">Newsletter campaigns</div>
                        </div>
                    </div>
                </td>
                <td>15,670</td>
                <td>2,340</td>
                <td>18,920</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">28.9%</span>
                        <div class="rate-indicator low">Low</div>
                    </div>
                </td>
                <td>6.5%</td>
                <td class="trend-cell">
                    <div class="trend positive">+15% ↗</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">💼</div>
                        <div class="source-details">
                            <div class="source-name">Direct Traffic</div>
                            <div class="source-description">Direct URL entry</div>
                        </div>
                    </div>
                </td>
                <td>12,340</td>
                <td>8,450</td>
                <td>15,670</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">45.6%</span>
                        <div class="rate-indicator medium">Medium</div>
                    </div>
                </td>
                <td>3.2%</td>
                <td class="trend-cell">
                    <div class="trend negative">-5% ↘</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">🛒</div>
                        <div class="source-details">
                            <div class="source-name">Referral</div>
                            <div class="source-description">Other websites</div>
                        </div>
                    </div>
                </td>
                <td>8,920</td>
                <td>6,780</td>
                <td>12,450</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">61.2%</span>
                        <div class="rate-indicator high">High</div>
                    </div>
                </td>
                <td>1.8%</td>
                <td class="trend-cell">
                    <div class="trend positive">+3% ↗</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.acquisition-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.acquisition-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.acquisition-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 600;
}

.period-select {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    font-size: 0.875rem;
}

.acquisition-table {
    width: 100%;
    border-collapse: collapse;
}

.acquisition-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.acquisition-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.acquisition-table tr:hover {
    background: #f9fafb;
}

.source-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.source-icon {
    font-size: 1.25rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
    border-radius: 8px;
}

.source-details .source-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.source-details .source-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.rate-display {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.rate-indicator {
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
}

.rate-indicator.low {
    background: #d1fae5;
    color: #065f46;
}

.rate-indicator.medium {
    background: #fef3c7;
    color: #92400e;
}

.rate-indicator.high {
    background: #fee2e2;
    color: #991b1b;
}

.trend {
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.trend.positive {
    background: #d1fae5;
    color: #065f46;
}

.trend.negative {
    background: #fee2e2;
    color: #991b1b;
}`,
        js: `// Time period filtering for acquisition data
document.querySelector('.period-select').addEventListener('change', function(e) {
    const selectedPeriod = e.target.value;
    console.log(\`Loading acquisition data for: \${selectedPeriod}\`);
    // In real implementation, this would fetch new data
});`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 3: REAL-TIME ANALYTICS
    // ====================================================================
    analytics3: {
        html: `<div class="realtime-table-container">
    <div class="realtime-header">
        <div class="realtime-title">
            <h3>Real-time Analytics Dashboard</h3>
            <div class="live-indicator">
                <span class="pulse"></span>
                LIVE
            </div>
        </div>
        <div class="realtime-stats">
            <div class="stat">
                <div class="stat-value">1,245</div>
                <div class="stat-label">Active Now</div>
            </div>
        </div>
    </div>
    <table class="realtime-table">
        <thead>
            <tr>
                <th>Country</th>
                <th>Active Users</th>
                <th>Pageviews</th>
                <th>Avg. Session</th>
                <th>Current Activity</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇺🇸</span>
                        <span class="country-name">United States</span>
                    </div>
                </td>
                <td>456</td>
                <td>2,345</td>
                <td>3:45</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Viewing products</span>
                        <span class="activity">Added to cart</span>
                        <span class="activity">Checking out</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 12%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇬🇧</span>
                        <span class="country-name">United Kingdom</span>
                    </div>
                </td>
                <td>234</td>
                <td>1,567</td>
                <td>4:12</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Reading blog</span>
                        <span class="activity">Contact form</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 8%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇨🇦</span>
                        <span class="country-name">Canada</span>
                    </div>
                </td>
                <td>189</td>
                <td>987</td>
                <td>2:56</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Product search</span>
                        <span class="activity">Price comparison</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend negative">↘ 5%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇦🇺</span>
                        <span class="country-name">Australia</span>
                    </div>
                </td>
                <td>156</td>
                <td>845</td>
                <td>3:23</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Account login</span>
                        <span class="activity">Order history</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 15%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇩🇪</span>
                        <span class="country-name">Germany</span>
                    </div>
                </td>
                <td>134</td>
                <td>723</td>
                <td>5:12</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Technical specs</span>
                        <span class="activity">Support page</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 22%</div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="realtime-footer">
        <div class="update-time">Last updated: <span class="time">Just now</span></div>
        <button class="btn-refresh">Refresh Data</button>
    </div>
</div>`,
        css: `.realtime-table-container {
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
    background: linear-gradient(135deg, #1e40af, #3730a3);
    color: white;
}

.realtime-title {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.realtime-title h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.pulse {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

.realtime-stats {
    text-align: right;
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.realtime-table {
    width: 100%;
    border-collapse: collapse;
}

.realtime-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.realtime-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.realtime-table tr:hover {
    background: #f9fafb;
}

.country-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.flag {
    font-size: 1.25rem;
}

.country-name {
    font-weight: 600;
    color: #1f2937;
}

.activity-stream {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.activity {
    background: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #6b7280;
}

.trend {
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.trend.positive {
    background: #d1fae5;
    color: #065f46;
}

.trend.negative {
    background: #fee2e2;
    color: #991b1b;
}

.realtime-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
}

.update-time {
    font-size: 0.875rem;
    color: #6b7280;
}

.update-time .time {
    font-weight: 600;
    color: #1f2937;
}

.btn-refresh {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-refresh:hover {
    background: #6d28d9;
}`,
        js: `// Real-time data simulation
function updateRealTimeData() {
    const timeElement = document.querySelector('.update-time .time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
    
    // Simulate data updates
    const activeUsers = Math.floor(Math.random() * 100) + 1200;
    document.querySelector('.stat-value').textContent = activeUsers.toLocaleString();
}

// Update every 10 seconds
setInterval(updateRealTimeData, 10000);

// Manual refresh
document.querySelector('.btn-refresh').addEventListener('click', updateRealTimeData);

// Initial update
updateRealTimeData();`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 4: E-COMMERCE ANALYTICS
    // ====================================================================
    analytics4: {
        html: `<div class="ecommerce-table-container">
    <div class="ecommerce-header">
        <h3>E-commerce Performance Dashboard</h3>
        <div class="revenue-summary">
            <div class="revenue-figure">$284,560</div>
            <div class="revenue-label">Total Revenue</div>
        </div>
    </div>
    <table class="ecommerce-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Units Sold</th>
                <th>Revenue</th>
                <th>Profit Margin</th>
                <th>Inventory</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">MacBook Pro 16"</div>
                        <div class="product-sku">SKU: MBP-16-2024</div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>$2,399</td>
                <td>89</td>
                <td>$213,511</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">32%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 32%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">45</span>
                        <div class="inventory-indicator high">In Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">iPhone 15 Pro</div>
                        <div class="product-sku">SKU: IP15-PRO-256</div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>$1,199</td>
                <td>156</td>
                <td>$187,044</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">28%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 28%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">23</span>
                        <div class="inventory-indicator medium">Low Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">AirPods Pro</div>
                        <div class="product-sku">SKU: AP-PRO-2</div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>$249</td>
                <td>289</td>
                <td>$71,961</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">35%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 35%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">67</span>
                        <div class="inventory-indicator high">In Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">iPad Air</div>
                        <div class="product-sku">SKU: IPA-5TH-GEN</div>
                    </div>
                </td>
                <td>Tablets</td>
                <td>$599</td>
                <td>78</td>
                <td>$46,722</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">30%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 30%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">0</span>
                        <div class="inventory-indicator out">Out of Stock</div>
                    </div>
                </td>
                <td><span class="product-status inactive">Inactive</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">Apple Watch</div>
                        <div class="product-sku">SKU: AW-SE-2</div>
                    </div>
                </td>
                <td>Wearables</td>
                <td>$249</td>
                <td>134</td>
                <td>$33,366</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">25%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 25%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">12</span>
                        <div class="inventory-indicator medium">Low Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.ecommerce-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.ecommerce-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
}

.ecommerce-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.revenue-summary {
    text-align: right;
}

.revenue-figure {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.revenue-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.ecommerce-table {
    width: 100%;
    border-collapse: collapse;
}

.ecommerce-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.ecommerce-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.ecommerce-table tr:hover {
    background: #f9fafb;
}

.product-info .product-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.product-info .product-sku {
    font-size: 0.75rem;
    color: #9ca3af;
    font-family: monospace;
}

.margin-display {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.margin-bar {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
}

.margin-fill {
    height: 100%;
    background: linear-gradient(90deg, #10b981, #059669);
    border-radius: 3px;
}

.inventory-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.inventory-count {
    font-weight: 600;
    color: #1f2937;
}

.inventory-indicator {
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
}

.inventory-indicator.high {
    background: #d1fae5;
    color: #065f46;
}

.inventory-indicator.medium {
    background: #fef3c7;
    color: #92400e;
}

.inventory-indicator.out {
    background: #fee2e2;
    color: #991b1b;
}

.product-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.product-status.active {
    background: #d1fae5;
    color: #065f46;
}

.product-status.inactive {
    background: #f3f4f6;
    color: #6b7280;
}`,
        js: `// Animate margin bars on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.margin-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 5: PERFORMANCE METRICS
    // ====================================================================
    analytics5: {
        html: `<div class="performance-table-container">
    <div class="performance-header">
        <h3>Website Performance Metrics</h3>
        <div class="performance-score">
            <div class="score-value">87</div>
            <div class="score-label">Performance Score</div>
        </div>
    </div>
    <table class="performance-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Target</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Page Load Time</div>
                        <div class="metric-description">Time to first contentful paint</div>
                    </div>
                </td>
                <td>1.2s</td>
                <td>1.8s</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-33%</span>
                    </div>
                </td>
                <td>&lt; 2.0s</td>
                <td><span class="status-badge excellent">Excellent</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">First Input Delay</div>
                        <div class="metric-description">Time to first user interaction</div>
                    </div>
                </td>
                <td>85ms</td>
                <td>120ms</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-29%</span>
                    </div>
                </td>
                <td>&lt; 100ms</td>
                <td><span class="status-badge good">Good</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Largest Contentful Paint</div>
                        <div class="metric-description">Time to render main content</div>
                    </div>
                </td>
                <td>2.1s</td>
                <td>2.8s</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-25%</span>
                    </div>
                </td>
                <td>&lt; 2.5s</td>
                <td><span class="status-badge good">Good</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Cumulative Layout Shift</div>
                        <div class="metric-description">Visual stability score</div>
                    </div>
                </td>
                <td>0.08</td>
                <td>0.12</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-33%</span>
                    </div>
                </td>
                <td>&lt; 0.1</td>
                <td><span class="status-badge excellent">Excellent</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Conversion Rate</div>
                        <div class="metric-description">Percentage of converting visitors</div>
                    </div>
                </td>
                <td>4.5%</td>
                <td>3.8%</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">+18%</span>
                    </div>
                </td>
                <td>&gt; 4.0%</td>
                <td><span class="status-badge excellent">Excellent</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Bounce Rate</div>
                        <div class="metric-description">Percentage of single-page sessions</div>
                    </div>
                </td>
                <td>42.3%</td>
                <td>38.5%</td>
                <td>
                    <div class="change-display negative">
                        <span class="change-icon">↘</span>
                        <span class="change-value">+9.8%</span>
                    </div>
                </td>
                <td>&lt; 40%</td>
                <td><span class="status-badge needs-improvement">Needs Improvement</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Mobile Responsiveness</div>
                        <div class="metric-description">Mobile usability score</div>
                    </div>
                </td>
                <td>94%</td>
                <td>92%</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">+2.2%</span>
                    </div>
                </td>
                <td>&gt; 95%</td>
                <td><span class="status-badge good">Good</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.performance-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.performance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
}

.performance-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.performance-score {
    text-align: center;
}

.score-value {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.score-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.performance-table {
    width: 100%;
    border-collapse: collapse;
}

.performance-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.performance-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.performance-table tr:hover {
    background: #f9fafb;
}

.metric-info .metric-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.metric-info .metric-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.change-display {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
}

.change-display.positive {
    background: #d1fae5;
    color: #065f46;
}

.change-display.negative {
    background: #fee2e2;
    color: #991b1b;
}

.change-icon {
    font-size: 1rem;
}

.status-badge {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-badge.excellent {
    background: #d1fae5;
    color: #065f46;
}

.status-badge.good {
    background: #dbeafe;
    color: #1e40af;
}

.status-badge.needs-improvement {
    background: #fef3c7;
    color: #92400e;
}`,
        js: `// Performance metrics calculations
console.log('Performance metrics table loaded');
// Additional performance tracking can be added here`
    },
    // ====================================================================
    // TEMPLATE 36: DARK MODERN DATA TABLE
    // Features: Clean dark design with status indicators and actions
    // Category: dark-theme
    // ====================================================================
    table36: {
        html: `<div class="dark-modern-container">
    <table class="dark-modern-table">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="avatar">JD</div>
                        <div class="employee-details">
                            <div class="name">John Doe</div>
                            <div class="email">john@company.com</div>
                        </div>
                    </div>
                </td>
                <td>Frontend Developer</td>
                <td>Engineering</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="avatar">SM</div>
                        <div class="employee-details">
                            <div class="name">Sarah Miller</div>
                            <div class="email">sarah@company.com</div>
                        </div>
                    </div>
                </td>
                <td>UI Designer</td>
                <td>Design</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="avatar">RJ</div>
                        <div class="employee-details">
                            <div class="name">Robert Johnson</div>
                            <div class="email">robert@company.com</div>
                        </div>
                    </div>
                </td>
                <td>Backend Developer</td>
                <td>Engineering</td>
                <td><span class="status inactive">Inactive</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Modern Table Styles */
.dark-modern-container {
    background: #1a1f35;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #2d3748;
}

.dark-modern-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-modern-table th {
    background: #2d3748;
    padding: 1rem 1.2rem;
    text-align: left;
    font-weight: 600;
    color: #cbd5e1;
    border-bottom: 2px solid #4a5568;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-modern-table td {
    padding: 1rem 1.2rem;
    border-bottom: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.dark-modern-table tr {
    transition: all 0.3s ease;
}

.dark-modern-table tr:hover {
    background: #2d3748;
    transform: translateX(5px);
}

.dark-modern-table tr:hover td {
    color: #ffffff;
}

/* Employee Info Styles */
.employee-info {
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
    flex-shrink: 0;
}

.employee-details {
    display: flex;
    flex-direction: column;
}

.employee-details .name {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.employee-details .email {
    font-size: 0.85rem;
    color: #94a3b8;
}

/* Status Styles */
.status {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status.active {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.status.inactive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn-edit {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.btn-edit:hover {
    background: rgba(59, 130, 246, 0.3);
    transform: translateY(-1px);
}

.btn-delete {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.btn-delete:hover {
    background: rgba(239, 68, 68, 0.3);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .dark-modern-container {
        padding: 1rem;
    }
    
    .dark-modern-table th,
    .dark-modern-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .action-buttons {
        flex-direction: column;
        gap: 0.3rem;
    }
    
    .btn-edit,
    .btn-delete {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
}`,
        js: `// Dark Modern Table Interactions
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.dark-modern-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Action button functionality
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const name = row.querySelector('.name').textContent;
            console.log('Edit clicked for:', name);
            // Add your edit logic here
        });
    });
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const name = row.querySelector('.name').textContent;
            console.log('Delete clicked for:', name);
            // Add your delete logic here
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 37: DARK ANALYTICS DASHBOARD TABLE
    // Features: Analytics data with progress bars and metrics
    // Category: dark-theme, analytics
    // ====================================================================
    table37: {
        html: `<div class="dark-analytics-container">
    <div class="analytics-header">
        <h3>Performance Metrics</h3>
        <div class="time-filter">
            <select class="filter-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
            </select>
        </div>
    </div>
    
    <table class="dark-analytics-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Target</th>
                <th>Progress</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="metric-info">
                        <i class="fas fa-users"></i>
                        <span>User Growth</span>
                    </div>
                </td>
                <td class="metric-value">12,458</td>
                <td class="metric-target">15,000</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 83%"></div>
                        </div>
                        <span class="progress-text">83%</span>
                    </div>
                </td>
                <td>
                    <div class="trend up">
                        <i class="fas fa-arrow-up"></i>
                        <span>12%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Revenue</span>
                    </div>
                </td>
                <td class="metric-value">$48,250</td>
                <td class="metric-target">$60,000</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 80%"></div>
                        </div>
                        <span class="progress-text">80%</span>
                    </div>
                </td>
                <td>
                    <div class="trend up">
                        <i class="fas fa-arrow-up"></i>
                        <span>8%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <i class="fas fa-chart-line"></i>
                        <span>Conversion Rate</span>
                    </div>
                </td>
                <td class="metric-value">3.2%</td>
                <td class="metric-target">4.0%</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%"></div>
                        </div>
                        <span class="progress-text">65%</span>
                    </div>
                </td>
                <td>
                    <div class="trend down">
                        <i class="fas fa-arrow-down"></i>
                        <span>2%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Analytics Table Styles */
.dark-analytics-container {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid #334155;
}

.analytics-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #334155;
}

.analytics-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.time-filter {
    display: flex;
    align-items: center;
}

.filter-select {
    background: #1e293b;
    border: 1px solid #475569;
    color: #e2e8f0;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-select:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
}

.dark-analytics-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-analytics-table th {
    background: #1e293b;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #94a3b8;
    border-bottom: 2px solid #475569;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-analytics-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #334155;
    transition: all 0.3s ease;
}

.dark-analytics-table tr {
    transition: all 0.3s ease;
}

.dark-analytics-table tr:hover {
    background: #1e293b;
}

.dark-analytics-table tr:hover td {
    color: #ffffff;
}

/* Metric Info Styles */
.metric-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
}

.metric-info i {
    color: #7c3aed;
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
}

/* Metric Values */
.metric-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
}

.metric-target {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Progress Bar Styles */
.progress-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: #334155;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    border-radius: 10px;
    transition: width 1s ease;
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.progress-text {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.9rem;
    min-width: 40px;
}

/* Trend Styles */
.trend {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.trend.up {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
}

.trend.down {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.trend i {
    font-size: 0.8rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .analytics-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .time-filter {
        width: 100%;
    }
    
    .filter-select {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .dark-analytics-container {
        padding: 1.5rem;
    }
    
    .dark-analytics-table {
        font-size: 0.9rem;
    }
    
    .dark-analytics-table th,
    .dark-analytics-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .progress-container {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
}`,
        js: `// Analytics Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Time filter functionality
    const filterSelect = document.querySelector('.filter-select');
    
    filterSelect.addEventListener('change', function() {
        console.log('Time filter changed to:', this.value);
        // Add your filter logic here
    });
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
    
    // Add hover effects
    const tableRows = document.querySelectorAll('.dark-analytics-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            const progressFill = this.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.transform = 'scaleY(1.2)';
            }
        });
        
        row.addEventListener('mouseleave', function() {
            const progressFill = this.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.transform = 'scaleY(1)';
            }
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 38: DARK E-COMMERCE PRODUCTS TABLE
    // Features: Product management with inventory and pricing
    // Category: dark-theme, business
    // ====================================================================
    table38: {
        html: `<div class="dark-ecommerce-container">
    <div class="ecommerce-header">
        <h3>Product Inventory</h3>
        <div class="header-actions">
            <button class="btn-add">
                <i class="fas fa-plus"></i>
                Add Product
            </button>
        </div>
    </div>
    
    <table class="dark-ecommerce-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Sales</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <div class="product-details">
                            <div class="product-name">MacBook Pro 16"</div>
                            <div class="product-sku">SKU: MBP16-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag">Electronics</span>
                </td>
                <td>
                    <div class="price">$2,499.00</div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level">
                            <div class="stock-bar">
                                <div class="stock-fill high"></div>
                            </div>
                            <span class="stock-text">45 units</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-badge active">In Stock</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">128 sold</div>
                        <div class="sales-trend up">+15%</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="product-details">
                            <div class="product-name">iPhone 15 Pro</div>
                            <div class="product-sku">SKU: IP15P-256</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag">Electronics</span>
                </td>
                <td>
                    <div class="price">$1,199.00</div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level">
                            <div class="stock-bar">
                                <div class="stock-fill medium"></div>
                            </div>
                            <span class="stock-text">12 units</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-badge active">In Stock</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">89 sold</div>
                        <div class="sales-trend up">+22%</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="product-details">
                            <div class="product-name">Wireless Headphones</div>
                            <div class="product-sku">SKU: WH-XB910</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag">Audio</span>
                </td>
                <td>
                    <div class="price">$299.00</div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level">
                            <div class="stock-bar">
                                <div class="stock-fill low"></div>
                            </div>
                            <span class="stock-text">3 units</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-badge warning">Low Stock</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">67 sold</div>
                        <div class="sales-trend down">-5%</div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark E-commerce Table Styles */
.dark-ecommerce-container {
    background: #1a1f35;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #2d3748;
}

.ecommerce-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #2d3748;
}

.ecommerce-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.btn-add {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-add:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
}

.dark-ecommerce-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-ecommerce-table th {
    background: #2d3748;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #cbd5e1;
    border-bottom: 2px solid #4a5568;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-ecommerce-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.dark-ecommerce-table tr {
    transition: all 0.3s ease;
}

.dark-ecommerce-table tr:hover {
    background: #2d3748;
}

.dark-ecommerce-table tr:hover td {
    color: #ffffff;
}

/* Product Info Styles */
.product-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.product-image {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.product-details {
    display: flex;
    flex-direction: column;
}

.product-name {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.product-sku {
    font-size: 0.8rem;
    color: #94a3b8;
}

/* Category Tag */
.category-tag {
    background: rgba(124, 58, 237, 0.2);
    color: #7c3aed;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(124, 58, 237, 0.3);
}

/* Price */
.price {
    font-weight: 700;
    color: #ffffff;
    font-size: 1rem;
}

/* Stock Info */
.stock-info {
    display: flex;
    align-items: center;
}

.stock-level {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.stock-bar {
    width: 60px;
    height: 6px;
    background: #4a5568;
    border-radius: 10px;
    overflow: hidden;
}

.stock-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
}

.stock-fill.high {
    background: #22c55e;
    width: 80%;
}

.stock-fill.medium {
    background: #f59e0b;
    width: 40%;
}

.stock-fill.low {
    background: #ef4444;
    width: 15%;
}

.stock-text {
    font-size: 0.85rem;
    color: #94a3b8;
    min-width: 60px;
}

/* Status Badge */
.status-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.active {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-badge.warning {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.status-badge.inactive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Sales Info */
.sales-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.sales-count {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.9rem;
}

.sales-trend {
    font-size: 0.8rem;
    font-weight: 600;
}

.sales-trend.up {
    color: #22c55e;
}

.sales-trend.down {
    color: #ef4444;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .ecommerce-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
}

@media (max-width: 768px) {
    .dark-ecommerce-container {
        padding: 1.5rem;
    }
    
    .dark-ecommerce-table {
        font-size: 0.9rem;
    }
    
    .dark-ecommerce-table th,
    .dark-ecommerce-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .product-info {
        gap: 0.5rem;
    }
    
    .product-image {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
}`,
        js: `// E-commerce Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add product button functionality
    const addButton = document.querySelector('.btn-add');
    
    addButton.addEventListener('click', function() {
        console.log('Add product clicked');
        // Add your add product logic here
    });
    
    // Stock level animations
    const stockBars = document.querySelectorAll('.stock-bar');
    
    stockBars.forEach(bar => {
        const fill = bar.querySelector('.stock-fill');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 500);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
    
    // Product row interactions
    const productRows = document.querySelectorAll('.dark-ecommerce-table tr');
    
    productRows.forEach(row => {
        row.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            console.log('Product selected:', productName);
            // Add your product selection logic here
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 39: DARK PROJECT MANAGEMENT TABLE
    // Features: Project tracking with progress and deadlines
    // Category: dark-theme, business
    // ====================================================================
    table39: {
        html: `<div class="dark-project-container">
    <div class="project-header">
        <h3>Project Dashboard</h3>
        <div class="project-stats">
            <div class="stat">
                <span class="stat-value">12</span>
                <span class="stat-label">Active</span>
            </div>
            <div class="stat">
                <span class="stat-value">5</span>
                <span class="stat-label">Completed</span>
            </div>
            <div class="stat">
                <span class="stat-value">3</span>
                <span class="stat-label">Delayed</span>
            </div>
        </div>
    </div>
    
    <table class="dark-project-table">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Team</th>
                <th>Deadline</th>
                <th>Progress</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <div class="project-details">
                            <div class="project-title">Website Redesign</div>
                            <div class="project-client">TechCorp Inc.</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-members">
                        <div class="member-avatar">JD</div>
                        <div class="member-avatar">SM</div>
                        <div class="member-avatar">+3</div>
                    </div>
                </td>
                <td>
                    <div class="deadline">
                        <div class="date">Dec 15, 2024</div>
                        <div class="days-left">15 days left</div>
                    </div>
                </td>
                <td>
                    <div class="progress-wrapper">
                        <div class="progress-circle" data-progress="75">
                            <svg width="40" height="40">
                                <circle cx="20" cy="20" r="16" stroke="#334155" stroke-width="3" fill="none"/>
                                <circle class="progress-circle-fill" cx="20" cy="20" r="16" stroke="#7c3aed" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="progress-percent">75%</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="priority high">High</span>
                </td>
                <td>
                    <span class="project-status active">In Progress</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="project-details">
                            <div class="project-title">Mobile App Development</div>
                            <div class="project-client">StartupXYZ</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-members">
                        <div class="member-avatar">RJ</div>
                        <div class="member-avatar">AK</div>
                        <div class="member-avatar">+2</div>
                    </div>
                </td>
                <td>
                    <div class="deadline">
                        <div class="date">Jan 20, 2025</div>
                        <div class="days-left">51 days left</div>
                    </div>
                </td>
                <td>
                    <div class="progress-wrapper">
                        <div class="progress-circle" data-progress="45">
                            <svg width="40" height="40">
                                <circle cx="20" cy="20" r="16" stroke="#334155" stroke-width="3" fill="none"/>
                                <circle class="progress-circle-fill" cx="20" cy="20" r="16" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="progress-percent">45%</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="priority medium">Medium</span>
                </td>
                <td>
                    <span class="project-status active">In Progress</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="project-details">
                            <div class="project-title">E-commerce Platform</div>
                            <div class="project-client">RetailGlobal</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-members">
                        <div class="member-avatar">TM</div>
                        <div class="member-avatar">LP</div>
                        <div class="member-avatar">+4</div>
                    </div>
                </td>
                <td>
                    <div class="deadline overdue">
                        <div class="date">Nov 30, 2024</div>
                        <div class="days-left">Overdue</div>
                    </div>
                </td>
                <td>
                    <div class="progress-wrapper">
                        <div class="progress-circle" data-progress="90">
                            <svg width="40" height="40">
                                <circle cx="20" cy="20" r="16" stroke="#334155" stroke-width="3" fill="none"/>
                                <circle class="progress-circle-fill" cx="20" cy="20" r="16" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="progress-percent">90%</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="priority high">High</span>
                </td>
                <td>
                    <span class="project-status delayed">Delayed</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Project Management Table Styles */
.dark-project-container {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid #334155;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #334155;
}

.project-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.project-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: #7c3aed;
}

.stat-label {
    font-size: 0.85rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-project-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-project-table th {
    background: #1e293b;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #94a3b8;
    border-bottom: 2px solid #475569;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-project-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #334155;
    transition: all 0.3s ease;
}

.dark-project-table tr {
    transition: all 0.3s ease;
}

.dark-project-table tr:hover {
    background: #1e293b;
}

.dark-project-table tr:hover td {
    color: #ffffff;
}

/* Project Info Styles */
.project-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.project-details {
    display: flex;
    flex-direction: column;
}

.project-title {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.project-client {
    font-size: 0.8rem;
    color: #94a3b8;
}

/* Team Members */
.team-members {
    display: flex;
    gap: 0.3rem;
}

.member-avatar {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #475569;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    border: 2px solid #1e293b;
}

.member-avatar:hover {
    transform: translateY(-2px);
    z-index: 1;
}

/* Deadline */
.deadline {
    display: flex;
    flex-direction: column;
}

.date {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.9rem;
}

.days-left {
    font-size: 0.8rem;
    color: #94a3b8;
}

.deadline.overdue .days-left {
    color: #ef4444;
    font-weight: 600;
}

/* Progress Circle */
.progress-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-circle {
    position: relative;
    width: 40px;
    height: 40px;
}

.progress-circle-fill {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 1s ease;
}

.progress-percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: 600;
    color: #ffffff;
}

/* Priority */
.priority {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.priority.high {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.priority.medium {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.priority.low {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

/* Project Status */
.project-status {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.project-status.active {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.project-status.delayed {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.project-status.completed {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .project-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .project-stats {
        width: 100%;
        justify-content: space-around;
    }
}

@media (max-width: 768px) {
    .dark-project-container {
        padding: 1.5rem;
    }
    
    .dark-project-table {
        font-size: 0.9rem;
    }
    
    .dark-project-table th,
    .dark-project-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .project-info {
        gap: 0.5rem;
    }
    
    .project-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
}`,
        js: `// Project Management Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const circleElement = circle.querySelector('.progress-circle-fill');
        const radius = 16;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;
        
        circleElement.style.strokeDasharray = circumference + ' ' + circumference;
        circleElement.style.strokeDashoffset = offset;
    });
    
    // Team member hover effects
    const teamMembers = document.querySelectorAll('.member-avatar');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.1)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project row interactions
    const projectRows = document.querySelectorAll('.dark-project-table tr');
    
    projectRows.forEach(row => {
        row.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            console.log('Project selected:', projectTitle);
            // Add your project selection logic here
        });
    });
    
    // Update stats (example functionality)
    function updateProjectStats() {
        const activeProjects = document.querySelectorAll('.project-status.active').length;
        const delayedProjects = document.querySelectorAll('.project-status.delayed').length;
        
        // Update stat values
        document.querySelector('.stat:nth-child(1) .stat-value').textContent = activeProjects;
        document.querySelector('.stat:nth-child(3) .stat-value').textContent = delayedProjects;
    }
    
    // Initial stats update
    updateProjectStats();
});`
    },

    // ====================================================================
    // TEMPLATE 40: DARK FINANCIAL DATA TABLE
    // Features: Financial data with charts and trends
    // Category: dark-theme, business
    // ====================================================================
    table40: {
        html: `<div class="dark-financial-container">
    <div class="financial-header">
        <h3>Financial Overview</h3>
        <div class="period-selector">
            <button class="period-btn active">Q4 2024</button>
            <button class="period-btn">Q1 2025</button>
            <button class="period-btn">Q2 2025</button>
        </div>
    </div>
    
    <table class="dark-financial-table">
        <thead>
            <tr>
                <th>Account</th>
                <th>Balance</th>
                <th>Transactions</th>
                <th>Growth</th>
                <th>Trend</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="account-info">
                        <div class="account-icon">
                            <i class="fas fa-wallet"></i>
                        </div>
                        <div class="account-details">
                            <div class="account-name">Business Account</div>
                            <div class="account-number">**** 4832</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="balance-amount">$45,678.90</div>
                </td>
                <td>
                    <div class="transaction-count">128 transactions</div>
                </td>
                <td>
                    <div class="growth-indicator positive">
                        <i class="fas fa-arrow-up"></i>
                        <span>12.5%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-bar" style="height: 30%"></div>
                        <div class="chart-bar" style="height: 45%"></div>
                        <div class="chart-bar" style="height: 60%"></div>
                        <div class="chart-bar" style="height: 75%"></div>
                        <div class="chart-bar" style="height: 85%"></div>
                        <div class="chart-bar" style="height: 90%"></div>
                        <div class="chart-bar" style="height: 100%"></div>
                    </div>
                </td>
                <td>
                    <button class="action-btn view-details">
                        <i class="fas fa-chart-line"></i>
                        Details
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="account-info">
                        <div class="account-icon">
                            <i class="fas fa-piggy-bank"></i>
                        </div>
                        <div class="account-details">
                            <div class="account-name">Savings Account</div>
                            <div class="account-number">**** 7192</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="balance-amount">$23,450.00</div>
                </td>
                <td>
                    <div class="transaction-count">45 transactions</div>
                </td>
                <td>
                    <div class="growth-indicator positive">
                        <i class="fas fa-arrow-up"></i>
                        <span>8.2%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-bar" style="height: 20%"></div>
                        <div class="chart-bar" style="height: 35%"></div>
                        <div class="chart-bar" style="height: 50%"></div>
                        <div class="chart-bar" style="height: 65%"></div>
                        <div class="chart-bar" style="height: 75%"></div>
                        <div class="chart-bar" style="height: 85%"></div>
                        <div class="chart-bar" style="height: 95%"></div>
                    </div>
                </td>
                <td>
                    <button class="action-btn view-details">
                        <i class="fas fa-chart-line"></i>
                        Details
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="account-info">
                        <div class="account-icon">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <div class="account-details">
                            <div class="account-name">Credit Card</div>
                            <div class="account-number">**** 2647</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="balance-amount negative">-$2,345.67</div>
                </td>
                <td>
                    <div class="transaction-count">67 transactions</div>
                </td>
                <td>
                    <div class="growth-indicator negative">
                        <i class="fas fa-arrow-down"></i>
                        <span>5.1%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-bar" style="height: 100%"></div>
                        <div class="chart-bar" style="height: 95%"></div>
                        <div class="chart-bar" style="height: 90%"></div>
                        <div class="chart-bar" style="height: 85%"></div>
                        <div class="chart-bar" style="height: 80%"></div>
                        <div class="chart-bar" style="height: 75%"></div>
                        <div class="chart-bar" style="height: 70%"></div>
                    </div>
                </td>
                <td>
                    <button class="action-btn view-details">
                        <i class="fas fa-chart-line"></i>
                        Details
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Financial Table Styles */
.dark-financial-container {
    background: #1a1f35;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #2d3748;
}

.financial-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #2d3748;
}

.financial-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.period-selector {
    display: flex;
    gap: 0.5rem;
}

.period-btn {
    background: #2d3748;
    border: 1px solid #4a5568;
    color: #94a3b8;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.period-btn.active,
.period-btn:hover {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border-color: transparent;
}

.dark-financial-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-financial-table th {
    background: #2d3748;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #cbd5e1;
    border-bottom: 2px solid #4a5568;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-financial-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.dark-financial-table tr {
    transition: all 0.3s ease;
}

.dark-financial-table tr:hover {
    background: #2d3748;
}

.dark-financial-table tr:hover td {
    color: #ffffff;
}

/* Account Info Styles */
.account-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.account-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.account-details {
    display: flex;
    flex-direction: column;
}

.account-name {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.account-number {
    font-size: 0.8rem;
    color: #94a3b8;
}

/* Balance Amount */
.balance-amount {
    font-weight: 700;
    color: #22c55e;
    font-size: 1.1rem;
}

.balance-amount.negative {
    color: #ef4444;
}

/* Transaction Count */
.transaction-count {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Growth Indicator */
.growth-indicator {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    width: fit-content;
}

.growth-indicator.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
}

.growth-indicator.negative {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.growth-indicator i {
    font-size: 0.8rem;
}

/* Trend Chart */
.trend-chart {
    display: flex;
    align-items: end;
    gap: 2px;
    height: 40px;
    padding: 0.5rem 0;
}

.chart-bar {
    width: 6px;
    background: linear-gradient(to top, #7c3aed, #ec4899);
    border-radius: 2px 2px 0 0;
    transition: all 0.5s ease;
    animation: chartGrow 1s ease-out;
}

@keyframes chartGrow {
    from { height: 0%; }
    to { height: var(--target-height); }
}

.trend-chart:hover .chart-bar {
    opacity: 0.8;
    transform: scaleY(1.1);
}

/* Action Button */
.action-btn {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}

.action-btn:hover {
    background: rgba(59, 130, 246, 0.3);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .financial-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .period-selector {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .dark-financial-container {
        padding: 1.5rem;
    }
    
    .dark-financial-table {
        font-size: 0.9rem;
    }
    
    .dark-financial-table th,
    .dark-financial-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .account-info {
        gap: 0.5rem;
    }
    
    .account-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
    
    .trend-chart {
        height: 30px;
    }
    
    .chart-bar {
        width: 4px;
    }
}`,
        js: `// Financial Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Period selector functionality
    const periodBtns = document.querySelectorAll('.period-btn');
    
    periodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            periodBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            console.log('Period selected:', this.textContent);
            // Add your period filter logic here
        });
    });
    
    // Animate chart bars on scroll
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const height = entry.target.style.height;
                entry.target.style.height = '0%';
                setTimeout(() => {
                    entry.target.style.height = height;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => chartObserver.observe(bar));
    
    // View details button functionality
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const accountName = row.querySelector('.account-name').textContent;
            console.log('View details for:', accountName);
            // Add your view details logic here
        });
    });
    
    // Financial data interactions
    const financialRows = document.querySelectorAll('.dark-financial-table tr');
    
    financialRows.forEach(row => {
        row.addEventListener('click', function() {
            const accountName = this.querySelector('.account-name').textContent;
            const balance = this.querySelector('.balance-amount').textContent;
            console.log('Account selected:', accountName, 'Balance:', balance);
            // Add your account selection logic here
        });
    });
});`
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
