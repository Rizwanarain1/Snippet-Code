// Template code data for navigation templates
const templateCodes = {
    nav1: {
        html: `<nav class="glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-cube"></i>
                BrandName
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <div class="nav-actions">
            <button class="btn-primary">Get Started</button>
        </div>
    </div>
</nav>`,
        css: `.glass-navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #7c3aed;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-primary {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
}

.btn-primary:hover {
    transform: translateY(-2px);
}`,
        js: `// No JavaScript required for this navigation`,
        preview: `<div class="preview-nav">
    <div class="preview-nav-container">
        <div class="preview-nav-logo">BrandName</div>
        <ul class="preview-nav-menu">
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Home</a></li>
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Features</a></li>
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Pricing</a></li>
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">About</a></li>
        </ul>
        <button style="background: linear-gradient(135deg, #7c3aed, #ec4899); color: white; border: none; padding: 0.7rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Get Started</button>
    </div>
</div>`
    },
    nav2: {
        html: `<nav class="minimal-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-leaf"></i>
                Minimal
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.minimal-navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 1rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #10b981;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #10b981;
}`,
        js: `// No JavaScript required for this navigation`,
        preview: `<div class="preview-nav">
    <div class="preview-nav-container">
        <div class="preview-nav-logo">Minimal</div>
        <ul class="preview-nav-menu">
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Home</a></li>
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Products</a></li>
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Blog</a></li>
            <li class="preview-nav-item"><a href="#" class="preview-nav-link">Contact</a></li>
        </ul>
    </div>
</div>`
    },
    nav3: {
        html: `<div class="dark-sidebar">
    <div class="sidebar-header">
        <h2>Dashboard</h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-users"></i>
                <span>Users</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li>
    </ul>
</div>`,
        css: `.dark-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    padding: 25px 0;
    border-radius: 16px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.2);
    color: white;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
        js: `// No JavaScript required for this sidebar`,
        preview: `<div class="preview-sidebar">
    <div style="padding: 0 25px 25px; border-bottom: 1px solid #334155;">
        <h2 style="font-size: 1.5rem; font-weight: 600; color: white;">Dashboard</h2>
    </div>
    <ul style="list-style: none; margin-top: 25px;">
        <li style="margin-bottom: 5px;">
            <a href="#" style="display: flex; align-items: center; padding: 12px 25px; color: white; text-decoration: none; background: rgba(124, 58, 237, 0.2); border-right: 3px solid #7c3aed;">
                <i class="fas fa-home" style="margin-right: 12px;"></i>
                <span>Home</span>
            </a>
        </li>
        <li style="margin-bottom: 5px;">
            <a href="#" style="display: flex; align-items: center; padding: 12px 25px; color: #cbd5e1; text-decoration: none;">
                <i class="fas fa-chart-bar" style="margin-right: 12px;"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li style="margin-bottom: 5px;">
            <a href="#" style="display: flex; align-items: center; padding: 12px 25px; color: #cbd5e1; text-decoration: none;">
                <i class="fas fa-users" style="margin-right: 12px;"></i>
                <span>Users</span>
            </a>
        </li>
    </ul>
</div>`
    }
};

// Initialize navigation templates functionality
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
    const navPreview = document.getElementById('nav-preview');

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
                navPreview.innerHTML = templateCodes[templateId].preview;
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
            navPreview.innerHTML = `<p>Filtering by: ${btn.textContent}</p>`;
        });
    });
});