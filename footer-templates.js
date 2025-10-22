// Extended template code data with 9 footer templates
const templateCodes = {
    footer1: {
        name: "Modern Footer",
        category: "modern",
        html: `<!-- Modern Footer with Gradient -->
<footer class="modern-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Product</h3>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Integrations</a></li>
                    <li><a href="#">Updates</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">API Docs</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Subscribe</h3>
                <p>Get the latest news and updates</p>
                <div class="newsletter-form">
                    <input type="email" placeholder="Enter your email">
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</footer>`,
        css: `.modern-footer {
    background: linear-gradient(135deg, #1e293b, #334155);
    color: #f8fafc;
    padding: 4rem 0 2rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-section h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
}

.footer-section ul li a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #7c3aed;
}

.newsletter-form {
    display: flex;
    margin-top: 1rem;
}

.newsletter-form input {
    flex: 1;
    padding: 0.8rem;
    border: none;
    border-radius: 6px 0 0 6px;
    background: #374151;
    color: white;
}

.newsletter-form button {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0 1.5rem;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
    font-weight: 600;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #374151;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
}

.social-links a:hover {
    background: #7c3aed;
    transform: translateY(-2px);
}`,
        js: `// No JavaScript required for this footer`
    },
    // ... (other templates remain the same as before)
    footer9: {
        name: "Creative Footer",
        category: "gradient",
        html: `<!-- Creative Footer -->
<footer class="creative-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="creative-logo">
                <i class="fas fa-palette"></i>
                <span>CreativeStudio</span>
            </div>
            <div class="creative-tagline">
                <p>We create beautiful digital experiences that inspire and engage.</p>
            </div>
            <div class="creative-links">
                <a href="#">Work</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div class="creative-social">
                <a href="#"><i class="fab fa-dribbble"></i></a>
                <a href="#"><i class="fab fa-behance"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2023 CreativeStudio. Crafted with <i class="fas fa-heart"></i> and creativity.</p>
        </div>
    </div>
</footer>`,
        css: `.creative-footer {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 4rem 0 2rem;
    text-align: center;
}

.footer-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.creative-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.creative-tagline {
    margin-bottom: 2rem;
}

.creative-tagline p {
    font-size: 1.2rem;
    opacity: 0.9;
    line-height: 1.6;
}

.creative-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.creative-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.creative-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #fbbf24;
    transition: width 0.3s ease;
}

.creative-links a:hover::after {
    width: 100%;
}

.creative-links a:hover {
    color: #fbbf24;
}

.creative-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.creative-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.creative-social a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 2rem;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.footer-bottom .fa-heart {
    color: #f56565;
}`,
        js: `// No JavaScript required for this footer`
    }
};

// Fixed footer templates functionality
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