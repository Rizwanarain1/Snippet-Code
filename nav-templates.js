// Extended template code data with 9 navigation templates
const templateCodes = {
    nav1: {
        name: "Glassmorphism Navigation",
        category: "glassmorphism",
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
        js: `// Mobile menu functionality can be added here`
    },
    nav2: {
        name: "Minimal Navigation",
        category: "minimal",
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
        js: `// No JavaScript required for this navigation`
    },
    nav3: {
        name: "Dark Sidebar",
        category: "sidebar",
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
        js: `// No JavaScript required for this sidebar`
    },
    nav4: {
        name: "Modern Navigation",
        category: "modern",
        html: `<nav class="modern-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-rocket"></i>
                ModernApp
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <div class="nav-actions">
            <button class="btn-outline">Login</button>
            <button class="btn-primary">Sign Up</button>
        </div>
    </div>
</nav>`,
        css: `.modern-navbar {
    background: #1e293b;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #fbbf24;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #fbbf24;
}

.nav-actions {
    display: flex;
    gap: 1rem;
}

.btn-outline {
    background: transparent;
    border: 1px solid #cbd5e1;
    color: #cbd5e1;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-outline:hover {
    border-color: #fbbf24;
    color: #fbbf24;
}

.btn-primary {
    background: #fbbf24;
    color: #1e293b;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #f59e0b;
    transform: translateY(-2px);
}`,
        js: `// No JavaScript required for this navigation`
    },
    nav5: {
        name: "Dark Navigation",
        category: "dark",
        html: `<nav class="dark-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-moon"></i>
                DarkApp
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
        </ul>
        <button class="nav-btn">Get Started</button>
    </div>
</nav>`,
        css: `.dark-navbar {
    background: #0f172a;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #8b5cf6;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #8b5cf6;
}

.nav-btn {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
}

.nav-btn:hover {
    transform: translateY(-2px);
}`,
        js: `// No JavaScript required for this navigation`
    },
    nav6: {
        name: "Gradient Navigation",
        category: "modern",
        html: `<nav class="gradient-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-palette"></i>
                Gradient
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
                <a href="#" class="nav-link">Solutions</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.gradient-navbar {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
    color: white;
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
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: white;
}`,
        js: `// No JavaScript required for this navigation`
    },
    nav7: {
        name: "Centered Navigation",
        category: "minimal",
        html: `<nav class="centered-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Centered</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.centered-navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 1rem 0;
}

.nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #7c3aed;
}`,
        js: `// No JavaScript required for this navigation`
    },
    nav8: {
        name: "Transparent Navigation",
        category: "modern",
        html: `<nav class="transparent-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Transparent</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.transparent-navbar {
    background: transparent;
    padding: 1.5rem 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
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
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: white;
}`,
        js: `// No JavaScript required for this navigation`
    },
    nav9: {
        name: "Mobile Navigation",
        category: "modern",
        html: `<nav class="mobile-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Mobile</a>
        </div>
        <button class="nav-hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.mobile-navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
}

.nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.nav-hamburger span {
    width: 20px;
    height: 2px;
    background: #1e293b;
    transition: all 0.3s;
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
    color: #7c3aed;
}

@media (max-width: 768px) {
    .nav-hamburger {
        display: flex;
    }
    
    .nav-menu {
        display: none;
    }
}`,
        js: `// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});`
    }
};

// Fixed navigation templates functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('codeModal');
    const codeBtns = document.querySelectorAll('.code-btn');
    const closeModal = document.querySelector('.close-modal');
    const codeTabs = document.querySelectorAll('.code-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const copyBtn = document.getElementById('copyButton');
    const copyNotification = document.getElementById('copyNotification');
    const categoryBtns = document.querySelectorAll('.category-btn');

    let currentTemplate = null;
    let currentTab = 'html';

    // Open modal with template code
    codeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (templateCodes[templateId]) {
                currentTemplate = templateCodes[templateId];
                
                // Update code content
                htmlCode.querySelector('code').textContent = currentTemplate.html;
                cssCode.querySelector('code').textContent = currentTemplate.css;
                jsCode.querySelector('code').textContent = currentTemplate.js;
                
                // Reset to HTML tab
                showTab('html');
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Switch between code tabs
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    function showTab(tabId) {
        // Remove active class from all tabs
        codeTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked tab
        document.querySelector(`.code-tab[data-tab="${tabId}"]`).classList.add('active');
        
        // Hide all code content
        document.querySelectorAll('.code-content pre').forEach(pre => {
            pre.style.display = 'none';
        });
        
        // Show selected code content
        document.getElementById(`${tabId}-code`).style.display = 'block';
        currentTab = tabId;
    }

    // Copy code to clipboard - FIXED VERSION
    copyBtn.addEventListener('click', async () => {
        if (!currentTemplate) return;
        
        let textToCopy = '';
        switch(currentTab) {
            case 'html':
                textToCopy = currentTemplate.html;
                break;
            case 'css':
                textToCopy = currentTemplate.css;
                break;
            case 'js':
                textToCopy = currentTemplate.js;
                break;
        }
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            showCopyNotification();
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopyNotification();
        }
    });

    function showCopyNotification() {
        copyNotification.style.display = 'block';
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000);
    }

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            filterTemplates(category);
        });
    });

    function filterTemplates(category) {
        const templateCards = document.querySelectorAll('.template-card');
        
        templateCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
// COMPLETELY FIXED Navigation Templates Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('codeModal');
    const codeBtns = document.querySelectorAll('.code-btn');
    const closeModal = document.querySelector('.close-modal');
    const codeTabs = document.querySelectorAll('.code-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const copyBtn = document.getElementById('copyButton');
    const copyNotification = document.getElementById('copyNotification');
    const categoryBtns = document.querySelectorAll('.category-btn');

    let currentTemplate = null;
    let currentTab = 'html';

    // Open modal with template code
    codeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const templateId = btn.getAttribute('data-template');
            if (templateCodes[templateId]) {
                currentTemplate = templateCodes[templateId];
                
                // Update code content
                htmlCode.querySelector('code').textContent = currentTemplate.html;
                cssCode.querySelector('code').textContent = currentTemplate.css;
                jsCode.querySelector('code').textContent = currentTemplate.js;
                
                // Reset to HTML tab
                showTab('html');
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Switch between code tabs
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    function showTab(tabId) {
        // Remove active class from all tabs
        codeTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked tab
        document.querySelector(`.code-tab[data-tab="${tabId}"]`).classList.add('active');
        
        // Hide all code content
        document.querySelectorAll('.code-content pre').forEach(pre => {
            pre.style.display = 'none';
        });
        
        // Show selected code content
        document.getElementById(`${tabId}-code`).style.display = 'block';
        currentTab = tabId;
    }

    // COPY CODE FUNCTION - COMPLETELY FIXED
    copyBtn.addEventListener('click', function() {
        if (!currentTemplate) {
            alert('Please select a template first!');
            return;
        }
        
        let textToCopy = '';
        
        // Get the correct code based on current tab
        if (currentTab === 'html') {
            textToCopy = currentTemplate.html;
        } else if (currentTab === 'css') {
            textToCopy = currentTemplate.css;
        } else if (currentTab === 'js') {
            textToCopy = currentTemplate.js;
        }
        
        // Create a temporary textarea element
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        
        // Select and copy the text
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showCopyNotification();
            } else {
                alert('Failed to copy code. Please try again.');
            }
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Copy failed: ' + err);
        }
        
        // Clean up
        document.body.removeChild(textArea);
    });

    function showCopyNotification() {
        copyNotification.style.display = 'block';
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000);
    }

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            filterTemplates(category);
        });
    });

    function filterTemplates(category) {
        const templateCards = document.querySelectorAll('.template-card');
        
        templateCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// COPY CODE FUNCTION - WITH BEAUTIFUL FEEDBACK
copyBtn.addEventListener('click', function() {
    if (!currentTemplate) {
        alert('Please select a template first!');
        return;
    }
    
    let textToCopy = '';
    
    // Get the correct code based on current tab
    if (currentTab === 'html') {
        textToCopy = currentTemplate.html;
    } else if (currentTab === 'css') {
        textToCopy = currentTemplate.css;
    } else if (currentTab === 'js') {
        textToCopy = currentTemplate.js;
    }
    
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    // Select and copy the text
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            // Add beautiful feedback
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = '<span>✅ Copied!</span>';
            
            // Show beautiful notification
            showCopyNotification();
            
            // Reset button after 2 seconds
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = '<span>📋 Copy Code</span>';
            }, 2000);
            
        } else {
            alert('Failed to copy code. Please try again.');
        }
    } catch (err) {
        console.error('Copy failed:', err);
        alert('Copy failed: ' + err);
    }
    
    // Clean up
    document.body.removeChild(textArea);
});

function showCopyNotification() {
    const notification = document.getElementById('copyNotification');
    notification.style.display = 'flex';
    
    // Reset animation by re-adding it
    notification.style.animation = 'none';
    setTimeout(() => {
        notification.style.animation = 'notificationSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), notificationSlideOut 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 2s forwards';
    }, 10);
}