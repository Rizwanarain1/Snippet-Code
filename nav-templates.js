// Extended template code data with 9 navigation templates
const templateCodes = {
    
    // ====================================================================
    // TEMPLATE 1: GLASSMORPHISM NAVIGATION
    // Features: Glass effect, gradient buttons, hover animations
    // Category: Glassmorphism
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 2: MINIMAL NAVIGATION  
    // Features: Clean design, green accent, simple hover effects
    // Category: Minimal
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 3: DARK SIDEBAR
    // Features: Dark theme, gradient background, active state indicator
    // Category: Sidebar
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 4: MODERN NAVIGATION
    // Features: Dark background, yellow accent, dual buttons
    // Category: Modern
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 5: DARK NAVIGATION
    // Features: Deep dark theme, purple gradient button
    // Category: Dark
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 6: GRADIENT NAVIGATION
    // Features: Purple to blue gradient background
    // Category: Modern
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 7: CENTERED NAVIGATION
    // Features: Centered layout, vertical arrangement
    // Category: Minimal
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 8: TRANSPARENT NAVIGATION
    // Features: Transparent background, absolute positioning
    // Category: Modern
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 9: MOBILE NAVIGATION
    // Features: Hamburger menu, responsive design
    // Category: Modern
    // ====================================================================
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
    },

    // ====================================================================
    // TEMPLATE 10: MEGA MENU NAVIGATION
    // Features: Advanced dropdown with multiple columns
    // Category: Modern
    // ====================================================================
    nav10: {
        name: "Mega Menu Navigation",
        category: "modern",
        html: `<nav class="mega-menu-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-th-large"></i>
                MegaMenu
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link">Products <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-menu">
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h4>Web Products</h4>
                            <a href="#">Web Templates</a>
                            <a href="#">UI Kits</a>
                            <a href="#">Dashboards</a>
                        </div>
                        <div class="dropdown-column">
                            <h4>Mobile</h4>
                            <a href="#">App Templates</a>
                            <a href="#">Icons</a>
                            <a href="#">UI Components</a>
                        </div>
                        <div class="dropdown-column">
                            <h4>Resources</h4>
                            <a href="#">Documentation</a>
                            <a href="#">Tutorials</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
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
        css: `.mega-menu-navbar {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
    color: #7c3aed;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-item {
    position: relative;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-link:hover {
    color: #7c3aed;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 600px;
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 1000;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
}

.dropdown-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
}

.dropdown-column h4 {
    margin-bottom: 1rem;
    color: #1e293b;
    font-size: 1rem;
}

.dropdown-column a {
    display: block;
    padding: 0.5rem 0;
    color: #64748b;
    text-decoration: none;
    transition: color 0.3s;
}

.dropdown-column a:hover {
    color: #7c3aed;
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
        js: `// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.opacity = '1';
            this.querySelector('.dropdown-menu').style.visibility = 'visible';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.opacity = '0';
            this.querySelector('.dropdown-menu').style.visibility = 'hidden';
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 11: STICKY NAVIGATION
    // Features: Sticks to top on scroll, background change
    // Category: Modern
    // ====================================================================
    nav11: {
        name: "Sticky Navigation",
        category: "modern",
        html: `<nav class="sticky-navbar" id="stickyNavbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-paperclip"></i>
                StickyNav
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
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.sticky-navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.sticky-navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    padding: 0.5rem 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
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
    background: #7c3aed;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
        js: `// Sticky navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('stickyNavbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});`
    },

    // ====================================================================
    // TEMPLATE 12: SOCIAL MEDIA NAVIGATION
    // Features: Social media icons, search bar
    // Category: Modern
    // ====================================================================
    nav12: {
        name: "Social Media Navigation",
        category: "modern",
        html: `<nav class="social-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-share-alt"></i>
                SocialApp
            </a>
        </div>
        <div class="nav-search">
            <input type="text" placeholder="Search...">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Feed</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Messages</a>
            </li>
        </ul>
        <div class="social-icons">
            <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
</nav>`,
        css: `.social-navbar {
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
    color: #ec4899;
}

.nav-search {
    display: flex;
    align-items: center;
    background: #374151;
    border-radius: 25px;
    padding: 0.5rem 1rem;
}

.nav-search input {
    background: transparent;
    border: none;
    color: white;
    outline: none;
    width: 200px;
}

.nav-search input::placeholder {
    color: #9ca3af;
}

.search-btn {
    background: transparent;
    border: none;
    color: #9ca3af;
    cursor: pointer;
}

.search-btn:hover {
    color: white;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #ec4899;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-link {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
}

.social-link:hover {
    color: #ec4899;
}`,
        js: `// Search functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.nav-search input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert('Searching for: ' + searchInput.value);
                searchInput.value = '';
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (searchInput.value.trim() !== '') {
                    alert('Searching for: ' + searchInput.value);
                    searchInput.value = '';
                }
            }
        });
    }
});`
    },

    // ====================================================================
// TEMPLATE 13: GLASSMORPHISM WITH SEARCH
// Features: Glass effect with integrated search bar
// Category: Glassmorphism
// ====================================================================
nav13: {
    name: "Glassmorphism with Search",
    category: "glassmorphism",
    html: `<nav class="glass-search-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-gem"></i>
                GlassSearch
            </a>
        </div>
        <div class="nav-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
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
    </div>
</nav>`,
    css: `.glass-search-navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
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

.nav-search {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 25px;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    transition: all 0.3s;
}

.nav-search:focus-within {
    background: rgba(255, 255, 255, 0.8);
    border-color: #7c3aed;
}

.nav-search i {
    color: #7c3aed;
    margin-right: 8px;
}

.nav-search input {
    background: transparent;
    border: none;
    outline: none;
    width: 200px;
    color: #4b5563;
}

.nav-search input::placeholder {
    color: #9ca3af;
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
}

.nav-link:hover {
    color: #7c3aed;
}`,
    js: `// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.nav-search input');
    
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.background = 'rgba(255, 255, 255, 0.9)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.background = 'rgba(255, 255, 255, 0.6)';
        });
    }
});`
},

// ====================================================================
// TEMPLATE 14: GLASSMORPHISM SIDEBAR
// Features: Glass effect sidebar with gradient accents
// Category: Glassmorphism
// ====================================================================
nav14: {
    name: "Glassmorphism Sidebar",
    category: "glassmorphism",
    html: `<div class="glass-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-palette"></i>
            GlassSide
        </h2>
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
                <span>Statistics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-user"></i>
                <span>Profile</span>
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
    css: `.glass-sidebar {
    width: 280px;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
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
    color: #4b5563;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.15);
    color: #7c3aed;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 15: GRADIENT GLASSMORPHISM
// Features: Glass effect with gradient background
// Category: Glassmorphism
// ====================================================================
nav15: {
    name: "Gradient Glassmorphism",
    category: "glassmorphism",
    html: `<nav class="gradient-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-gem"></i>
                GradientGlass
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
        <button class="btn-glass">Get Started</button>
    </div>
</nav>`,
    css: `.gradient-glass-navbar {
    background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.1), 
        rgba(236, 72, 153, 0.1)
    );
    backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
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

.btn-glass {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.btn-glass:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 16: GLASSMORPHISM WITH ICONS
// Features: Icon-based glass navigation
// Category: Glassmorphism
// ====================================================================
nav16: {
    name: "Glassmorphism with Icons",
    category: "glassmorphism",
    html: `<nav class="glass-icons-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">GlassIcons</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-envelope"></i>
                    <span>Messages</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.glass-icons-navbar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(25px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    border-radius: 20px;
    margin: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
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
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    border: 1px solid rgba(124, 58, 237, 0.1);
}

.nav-link:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
}

.nav-link i {
    font-size: 1.1rem;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 17: DARK GLASSMORPHISM
// Features: Dark theme glassmorphism with neon effects
// Category: Glassmorphism
// ====================================================================
nav17: {
    name: "Dark Glassmorphism",
    category: "glassmorphism",
    html: `<nav class="dark-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-moon"></i>
                DarkGlass
            </a>
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
        <button class="btn-dark-glass">Explore</button>
    </div>
</nav>`,
    css: `.dark-glass-navbar {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
    color: #8b5cf6;
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
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #8b5cf6;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #6366f1);
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-dark-glass {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

.btn-dark-glass:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
}`,
    js: `// No JavaScript required for this navigation`
},



// ====================================================================
// TEMPLATE 18: MINIMAL WITH BORDER
// Features: Clean design with subtle bottom border
// Category: Minimal
// ====================================================================
nav18: {
    name: "Minimal with Border",
    category: "minimal",
    html: `<nav class="minimal-border-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal</a>
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
    css: `.minimal-border-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 2px solid #f1f5f9;
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
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    letter-spacing: -0.5px;
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
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #1e293b;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 19: MINIMAL CENTERED LOGO
// Features: Logo centered with balanced menu distribution
// Category: Minimal
// ====================================================================
nav19: {
    name: "Minimal Centered Logo",
    category: "minimal",
    html: `<nav class="minimal-centered-navbar">
    <div class="nav-container">
        <div class="nav-menu-left">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Work</a>
        </div>
        <div class="nav-logo">
            <a href="#">Logo</a>
        </div>
        <div class="nav-menu-right">
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Contact</a>
        </div>
    </div>
</nav>`,
    css: `.minimal-centered-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
}

.nav-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu-left,
.nav-menu-right {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #1e293b;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 20: MINIMAL WITH BADGE
// Features: Clean design with notification badge
// Category: Minimal
// ====================================================================
nav20: {
    name: "Minimal with Badge",
    category: "minimal",
    html: `<nav class="minimal-badge-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                Brand
                <span class="badge">New</span>
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
    css: `.minimal-badge-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
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
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
}

.badge {
    background: #10b981;
    color: white;
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-weight: 700;
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
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #10b981;
    transition: width 0.3s;
}

.nav-link:hover::before {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 21: MINIMAL DARK
// Features: Dark theme with clean typography
// Category: Minimal
// ====================================================================
nav21: {
    name: "Minimal Dark",
    category: "minimal",
    html: `<nav class="minimal-dark-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal</a>
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
    css: `.minimal-dark-navbar {
    background: #1e293b;
    padding: 1.5rem 0;
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
    font-weight: 600;
    color: white;
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: white;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 22: MINIMAL WITH BUTTON
// Features: Clean design with subtle action button
// Category: Minimal
// ====================================================================
nav22: {
    name: "Minimal with Button",
    category: "minimal",
    html: `<nav class="minimal-button-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Simple</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
        </ul>
        <button class="nav-btn">Sign In</button>
    </div>
</nav>`,
    css: `.minimal-button-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
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
    font-weight: 600;
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
    color: #1e293b;
}

.nav-btn {
    background: transparent;
    border: 1px solid #1e293b;
    color: #1e293b;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.nav-btn:hover {
    background: #1e293b;
    color: white;
}`,
    js: `// No JavaScript required for this navigation`
},


// ====================================================================
// TEMPLATE 23: LIGHT GLASS SIDEBAR
// Features: Elegant glass effect with modern design
// Category: Sidebar
// ====================================================================
nav23: {
    name: "Light Glass Sidebar",
    category: "sidebar",
    html: `<div class="light-glass-sidebar">
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
    css: `.light-glass-sidebar {
    width: 280px;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
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
    color: #4b5563;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.15);
    color: #7c3aed;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 24: GRADIENT SIDEBAR
// Features: Beautiful gradient background
// Category: Sidebar
// ====================================================================
nav24: {
    name: "Gradient Sidebar",
    category: "sidebar",
    html: `<div class="gradient-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-palette"></i>
            Creative
        </h2>
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
                <i class="fas fa-image"></i>
                <span>Gallery</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-music"></i>
                <span>Music</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.gradient-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
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
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
}

.menu-item.active a {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-right: 3px solid white;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 25: MINIMAL WHITE SIDEBAR
// Features: Clean white design with subtle shadows
// Category: Sidebar
// ====================================================================
nav25: {
    name: "Minimal White Sidebar",
    category: "sidebar",
    html: `<div class="minimal-white-sidebar">
    <div class="sidebar-header">
        <h2>Workspace</h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-file"></i>
                <span>Projects</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-calendar"></i>
                <span>Calendar</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.minimal-white-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
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
    color: #64748b;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: #f8fafc;
    color: #1e293b;
}

.menu-item.active a {
    background: #f8fafc;
    color: #1e293b;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 26: DARK MODERN SIDEBAR
// Features: Modern dark theme with professional icons
// Category: Sidebar
// ====================================================================
nav26: {
    name: "Dark Modern Sidebar",
    category: "sidebar",
    html: `<div class="dark-modern-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-rocket"></i>
            Admin Panel
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-database"></i>
                <span>Data</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-line"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.dark-modern-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
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
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.menu-item.active a {
    background: rgba(59, 130, 246, 0.2);
    color: white;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 27: COLORFUL SIDEBAR
// Features: Vibrant colors for each menu item
// Category: Sidebar
// ====================================================================
nav27: {
    name: "Colorful Sidebar",
    category: "sidebar",
    html: `<div class="colorful-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-star"></i>
            Premium
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#" style="color: #7c3aed;">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #10b981;">
                <i class="fas fa-chart-line"></i>
                <span>Growth</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #f59e0b;">
                <i class="fas fa-users"></i>
                <span>Team</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #ef4444;">
                <i class="fas fa-bell"></i>
                <span>Alerts</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #3b82f6;">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.colorful-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
    color: #f59e0b;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 8px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
    background: #f8fafc;
    margin: 0 15px;
    border-radius: 8px;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.05);
    transform: translateX(5px);
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.1);
    border-right: 3px solid currentColor;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},
    

};

// ====================================================================
// MAIN FUNCTIONALITY - NAVIGATION TEMPLATES GALLERY
// Handles modal, code preview, copy functionality and filtering
// ====================================================================

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