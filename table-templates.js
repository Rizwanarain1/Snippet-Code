// Template code data for table templates
const templateCodes = {
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
            <tr>
                <td>
                    <div class="user-info">
                        <div class="avatar">RJ</div>
                        <div class="user-details">
                            <div class="name">Robert Johnson</div>
                            <div class="email">robert@example.com</div>
                        </div>
                    </div>
                </td>
                <td>Backend Developer</td>
                <td>Engineering</td>
                <td><span class="status inactive">Inactive</span></td>
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
        js: `// No JavaScript required for this table`,
        preview: `<table class="preview-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>Frontend Developer</td>
            <td>Engineering</td>
            <td><span style="background: #d1fae5; color: #065f46; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">Active</span></td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>UX Designer</td>
            <td>Design</td>
            <td><span style="background: #d1fae5; color: #065f46; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">Active</span></td>
        </tr>
        <tr>
            <td>Robert Johnson</td>
            <td>Backend Developer</td>
            <td>Engineering</td>
            <td><span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">Inactive</span></td>
        </tr>
    </tbody>
</table>`
    },
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
            <tr>
                <td>iPad Air</td>
                <td>Tablet</td>
                <td>$749</td>
                <td>Low Stock</td>
                <td>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Apple Watch</td>
                <td>Wearable</td>
                <td>$399</td>
                <td>Out of Stock</td>
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
        js: `// No JavaScript required for this table`,
        preview: `<table class="preview-table">
    <thead>
        <tr>
            <th style="background: #7c3aed; color: white;">Product</th>
            <th style="background: #7c3aed; color: white;">Category</th>
            <th style="background: #7c3aed; color: white;">Price</th>
            <th style="background: #7c3aed; color: white;">Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background: #f8fafc;">
            <td>MacBook Pro</td>
            <td>Laptop</td>
            <td>$2,499</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td>iPhone 14</td>
            <td>Smartphone</td>
            <td>$999</td>
            <td>In Stock</td>
        </tr>
        <tr style="background: #f8fafc;">
            <td>iPad Air</td>
            <td>Tablet</td>
            <td>$749</td>
            <td>Low Stock</td>
        </tr>
        <tr>
            <td>Apple Watch</td>
            <td>Wearable</td>
            <td>$399</td>
            <td>Out of Stock</td>
        </tr>
    </tbody>
</table>`
    },
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
            <tr>
                <td>API Integration</td>
                <td>Backend Team</td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%"></div>
                    </div>
                    <span>90%</span>
                </td>
                <td>Nov 25, 2023</td>
                <td><span class="priority high">High</span></td>
            </tr>
            <tr>
                <td>Documentation</td>
                <td>Content Team</td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 30%"></div>
                    </div>
                    <span>30%</span>
                </td>
                <td>Feb 15, 2024</td>
                <td><span class="priority low">Low</span></td>
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
        js: `// No JavaScript required for this table`,
        preview: `<table style="width: 100%; border-collapse: collapse; background: #1e293b; color: #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
    <thead>
        <tr>
            <th style="background: #0f172a; padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #f8fafc; border-bottom: 1px solid #334155;">Project</th>
            <th style="background: #0f172a; padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #f8fafc; border-bottom: 1px solid #334155;">Team</th>
            <th style="background: #0f172a; padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #f8fafc; border-bottom: 1px solid #334155;">Progress</th>
            <th style="background: #0f172a; padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #f8fafc; border-bottom: 1px solid #334155;">Deadline</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">Website Redesign</td>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">Design Team</td>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">
                <div style="width: 100px; height: 8px; background: #334155; border-radius: 4px; display: inline-block; margin-right: 10px; vertical-align: middle;">
                    <div style="width: 75%; height: 100%; background: linear-gradient(90deg, #7c3aed, #ec4899); border-radius: 4px;"></div>
                </div>
                <span>75%</span>
            </td>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">Dec 15, 2023</td>
        </tr>
        <tr>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">Mobile App</td>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">Dev Team</td>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">
                <div style="width: 100px; height: 8px; background: #334155; border-radius: 4px; display: inline-block; margin-right: 10px; vertical-align: middle;">
                    <div style="width: 45%; height: 100%; background: linear-gradient(90deg, #7c3aed, #ec4899); border-radius: 4px;"></div>
                </div>
                <span>45%</span>
            </td>
            <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #334155;">Jan 30, 2024</td>
        </tr>
    </tbody>
</table>`
    }
};

// Initialize table templates functionality
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('codeModal');
    const codeBtns = document.querySelectorAll('.code-btn');
    const previewBtns = document.querySelectorAll('.preview-btn');
    const closeModal = document.querySelector('.close-modal');
    const codeTabs = document.querySelectorAll('.code-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const copyBtns = document.querySelectorAll('.copy-btn');
    const copyNotification = document.getElementById('copyNotification');
    const tablePreview = document.getElementById('table-preview');

    // Open modal with template code
    codeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (templateCodes[templateId]) {
                htmlCode.querySelector('code').textContent = templateCodes[templateId].html;
                cssCode.querySelector('code').textContent = templateCodes[templateId].css;
                jsCode.querySelector('code').textContent = templateCodes[templateId].js;
                modal.style.display = 'block';
                
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

    // Show preview of template
    previewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (templateCodes[templateId]) {
                tablePreview.innerHTML = templateCodes[templateId].preview;
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
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
            
            // Create a temporary textarea to copy from
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            // Show copy notification
            copyNotification.style.display = 'block';
            setTimeout(() => {
                copyNotification.style.display = 'none';
            }, 2000);
        }
    });

    // Category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // In a real implementation, you would filter templates here
            // For now, we'll just show a message
            tablePreview.innerHTML = `<p>Filtering by: ${btn.textContent}</p>`;
        });
    });
});