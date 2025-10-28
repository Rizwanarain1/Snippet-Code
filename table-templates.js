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
    // TEMPLATE 2: STRIPED TABLE
    // Features: Alternating row colors, star ratings
    // Category: Striped
    // ====================================================================
    table2: {
        html: `<div class="table-container">
    <table class="striped-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MacBook Pro</td>
                <td>Laptop</td>
                <td>$2,499</td>
                <td>In Stock</td>
                <td>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </td>
            </tr>
            <tr>
                <td>iPhone 14</td>
                <td>Smartphone</td>
                <td>$999</td>
                <td>In Stock</td>
                <td>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.striped-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
}

.striped-table th {
    background: #7c3aed;
    color: white;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
}

.striped-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
}

.striped-table tr:nth-child(even) {
    background: #f8fafc;
}

.striped-table tr:hover {
    background: #f1f5f9;
}

.rating {
    color: #fbbf24;
}

.rating .far {
    color: #d1d5db;
}`,
        js: `// No JavaScript required for this table`
    },

    // ====================================================================
    // TEMPLATE 3: DARK TABLE
    // Features: Dark theme, progress bars, priority indicators
    // Category: Dark
    // ====================================================================
    table3: {
        html: `<div class="table-container">
    <table class="dark-table">
        <thead>
            <tr>
                <th>Project</th>
                <th>Team</th>
                <th>Progress</th>
                <th>Deadline</th>
                <th>Priority</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Website Redesign</td>
                <td>Design Team</td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%"></div>
                    </div>
                    <span>75%</span>
                </td>
                <td>Dec 15, 2023</td>
                <td><span class="priority high">High</span></td>
            </tr>
            <tr>
                <td>Mobile App</td>
                <td>Dev Team</td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 45%"></div>
                    </div>
                    <span>45%</span>
                </td>
                <td>Jan 30, 2024</td>
                <td><span class="priority medium">Medium</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.dark-table {
    width: 100%;
    border-collapse: collapse;
    background: #1e293b;
    color: #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.dark-table th {
    background: #0f172a;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #f8fafc;
    border-bottom: 1px solid #334155;
}

.dark-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #334155;
}

.dark-table tr:hover {
    background: #334155;
}

.progress-bar {
    width: 100px;
    height: 8px;
    background: #334155;
    border-radius: 4px;
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    border-radius: 4px;
}

.priority {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
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
}`,
        js: `// No JavaScript required for this table`
    },

    // ====================================================================
    // TEMPLATE 4: MINIMAL TABLE
    // Features: Clean design, priority badges, subtle borders
    // Category: Minimal
    // ====================================================================
    table4: {
        html: `<div class="minimal-table-container">
    <table class="minimal-table">
        <thead>
            <tr>
                <th>Task</th>
                <th>Assignee</th>
                <th>Due Date</th>
                <th>Priority</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Design Homepage</td>
                <td>Sarah Wilson</td>
                <td>Nov 30, 2023</td>
                <td><span class="priority high">High</span></td>
            </tr>
            <tr>
                <td>Fix Login Bug</td>
                <td>Mike Chen</td>
                <td>Nov 25, 2023</td>
                <td><span class="priority medium">Medium</span></td>
            </tr>
            <tr>
                <td>Write Documentation</td>
                <td>Emily Davis</td>
                <td>Dec 10, 2023</td>
                <td><span class="priority low">Low</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.minimal-table-container {
    padding: 1rem;
}

.minimal-table {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.minimal-table th {
    background: white;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.minimal-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f8fafc;
    color: #6b7280;
}

.minimal-table tr:last-child td {
    border-bottom: none;
}

.minimal-table tr:hover {
    background: #fafafa;
}

.priority {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

.priority.high {
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
}

.priority.medium {
    background: #fffbeb;
    color: #d97706;
    border: 1px solid #fed7aa;
}

.priority.low {
    background: #f0fdf4;
    color: #16a34a;
    border: 1px solid #bbf7d0;
}`,
        js: `// No JavaScript required for this table`
    },

    // ====================================================================
    // TEMPLATE 5: COLORFUL TABLE
    // Features: Gradient header, growth indicators, trend arrows
    // Category: Colorful
    // ====================================================================
    table5: {
        html: `<div class="colorful-table-container">
    <table class="colorful-table">
        <thead>
            <tr>
                <th>Category</th>
                <th>Sales</th>
                <th>Growth</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Electronics</td>
                <td>$12,430</td>
                <td><span class="growth positive">+15%</span></td>
                <td><i class="fas fa-arrow-up trend-up"></i></td>
            </tr>
            <tr>
                <td>Fashion</td>
                <td>$8,920</td>
                <td><span class="growth positive">+8%</span></td>
                <td><i class="fas fa-arrow-up trend-up"></i></td>
            </tr>
            <tr>
                <td>Home & Garden</td>
                <td>$5,670</td>
                <td><span class="growth negative">-3%</span></td>
                <td><i class="fas fa-arrow-down trend-down"></i></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.colorful-table-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    padding: 1px;
}

.colorful-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.colorful-table th {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: white;
    font-size: 0.95rem;
}

.colorful-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
    font-weight: 500;
}

.colorful-table tr:last-child td {
    border-bottom: none;
}

.colorful-table tr:hover {
    background: #f8fafc;
}

.growth {
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.growth.positive {
    background: #d1fae5;
    color: #065f46;
}

.growth.negative {
    background: #fee2e2;
    color: #991b1b;
}

.trend-up {
    color: #10b981;
    font-size: 1.1rem;
}

.trend-down {
    color: #ef4444;
    font-size: 1.1rem;
}`,
        js: `// No JavaScript required for this table`
    },

    // ====================================================================
    // TEMPLATE 6: ELEGANT TABLE
    // Features: Sophisticated design, smooth hover animations
    // Category: Elegant
    // ====================================================================
    table6: {
        html: `<div class="elegant-table-container">
    <table class="elegant-table">
        <thead>
            <tr>
                <th>Client</th>
                <th>Project</th>
                <th>Budget</th>
                <th>Timeline</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>TechCorp Inc.</td>
                <td>E-commerce Platform</td>
                <td>$50,000</td>
                <td>6 months</td>
            </tr>
            <tr>
                <td>Global Bank</td>
                <td>Mobile Banking App</td>
                <td>$75,000</td>
                <td>8 months</td>
            </tr>
            <tr>
                <td>HealthPlus</td>
                <td>Patient Portal</td>
                <td>$35,000</td>
                <td>4 months</td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.elegant-table-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.elegant-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.elegant-table th {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: white;
    font-size: 1rem;
    position: relative;
}

.elegant-table th::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
}

.elegant-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #f8fafc;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
}

.elegant-table tr:last-child td {
    border-bottom: none;
}

.elegant-table tr:hover td {
    background: #f8fafc;
    transform: translateX(8px);
}

.elegant-table tr:hover td:first-child {
    border-radius: 8px 0 0 8px;
}

.elegant-table tr:hover td:last-child {
    border-radius: 0 8px 8px 0;
}`,
        js: `// No JavaScript required for this table`
    },

    // ====================================================================
    // TEMPLATE 7: CARD TABLE
    // Features: Card-based rows, performance indicators
    // Category: Card
    // ====================================================================
    table7: {
        html: `<div class="card-table-container">
    <table class="card-table">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Hours</th>
                <th>Performance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alex Thompson</td>
                <td>Developer</td>
                <td>40h</td>
                <td><div class="performance excellent">Excellent</div></td>
            </tr>
            <tr>
                <td>Maria Garcia</td>
                <td>Designer</td>
                <td>38h</td>
                <td><div class="performance good">Good</div></td>
            </tr>
            <tr>
                <td>David Kim</td>
                <td>Manager</td>
                <td>42h</td>
                <td><div class="performance excellent">Excellent</div></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.card-table-container {
    padding: 1rem;
}

.card-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 12px;
}

.card-table thead th {
    background: transparent;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
}

.card-table tbody tr {
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.card-table tbody tr:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.card-table td {
    padding: 1.2rem 1.5rem;
    border: none;
    color: #4b5563;
}

.card-table td:first-child {
    border-radius: 12px 0 0 12px;
}

.card-table td:last-child {
    border-radius: 0 12px 12px 0;
}

.performance {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    min-width: 80px;
}

.performance.excellent {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
}

.performance.good {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
}

.performance.average {
    background: linear-gradient(135deg, #6b7280, #4b5563);
    color: white;
}`,
        js: `// No JavaScript required for this table`
    },

    // ====================================================================
    // TEMPLATE 8: GRADIENT TABLE
    // Features: Gradient badges, star ratings, status indicators
    // Category: Gradient
    // ====================================================================
    table8: {
        html: `<div class="gradient-table-container">
    <table class="gradient-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Status</th>
                <th>Users</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dark Mode</td>
                <td><span class="badge live">Live</span></td>
                <td>15,432</td>
                <td>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </td>
            </tr>
            <tr>
                <td>AI Assistant</td>
                <td><span class="badge beta">Beta</span></td>
                <td>8,765</td>
                <td>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Mobile App</td>
                <td><span class="badge development">In Development</span></td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.gradient-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.gradient-table {
    width: 100%;
    border-collapse: collapse;
}

.gradient-table th {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: white;
    font-size: 0.95rem;
    position: relative;
}

.gradient-table th::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24, #ff6b6b);
}

.gradient-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
    font-weight: 500;
}

.gradient-table tr:last-child td {
    border-bottom: none;
}

.gradient-table tr:hover {
    background: linear-gradient(90deg, rgba(255, 107, 107, 0.05), rgba(238, 90, 36, 0.05));
}

.badge {
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    display: inline-block;
}

.badge.live {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
}

.badge.beta {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
}

.badge.development {
    background: linear-gradient(135deg, #6b7280, #4b5563);
    color: white;
}

.stars {
    color: #fbbf24;
}

.stars .far {
    color: #d1d5db;
}`,
        js: `// No JavaScript required for this table`
    }
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