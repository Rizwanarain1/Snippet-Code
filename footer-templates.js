// Template code data for footer templates
const templateCodes = {
    footer1: {
        html: `<footer class="modern-footer">
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
        js: `// No JavaScript required for this footer`,
        preview: `<div class="preview-footer">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h4 style="color: white; margin-bottom: 1rem;">Company</h4>
                <ul style="list-style: none;">
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">About Us</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Careers</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Blog</a></li>
                </ul>
            </div>
            <div>
                <h4 style="color: white; margin-bottom: 1rem;">Product</h4>
                <ul style="list-style: none;">
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Features</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Pricing</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Integrations</a></li>
                </ul>
            </div>
            <div>
                <h4 style="color: white; margin-bottom: 1rem;">Support</h4>
                <ul style="list-style: none;">
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Help Center</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">Contact Us</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">API Docs</a></li>
                </ul>
            </div>
            <div>
                <h4 style="color: white; margin-bottom: 1rem;">Subscribe</h4>
                <p style="color: #cbd5e1; margin-bottom: 1rem;">Get the latest updates</p>
                <div style="display: flex;">
                    <input type="email" placeholder="Enter email" style="flex: 1; padding: 0.5rem; border: none; border-radius: 4px 0 0 4px;">
                    <button style="background: #7c3aed; color: white; border: none; padding: 0 1rem; border-radius: 0 4px 4px 0;">Go</button>
                </div>
            </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; border-top: 1px solid #374151;">
            <p style="color: #94a3b8;">&copy; 2023 Company Name. All rights reserved.</p>
            <div style="display: flex; gap: 1rem;">
                <a href="#" style="color: #cbd5e1; text-decoration: none;"><i class="fab fa-twitter"></i></a>
                <a href="#" style="color: #cbd5e1; text-decoration: none;"><i class="fab fa-facebook"></i></a>
                <a href="#" style="color: #cbd5e1; text-decoration: none;"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
</div>`
    },
    footer2: {
        html: `<footer class="minimal-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-logo">
                <a href="#">
                    <i class="fas fa-cube"></i>
                    BrandName
                </a>
                <p>Building beautiful digital experiences</p>
            </div>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 BrandName. All rights reserved.</p>
        </div>
    </div>
</footer>`,
        css: `.minimal-footer {
    background: white;
    border-top: 1px solid #e2e8f0;
    padding: 2rem 0 1rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.footer-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.footer-logo i {
    margin-right: 8px;
}

.footer-logo p {
    margin-top: 0.5rem;
    color: #64748b;
    font-size: 0.9rem;
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: #64748b;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #7c3aed;
}

.footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid #f1f5f9;
    color: #94a3b8;
    font-size: 0.9rem;
}`,
        js: `// No JavaScript required for this footer`,
        preview: `<div style="background: white; border-top: 1px solid #e2e8f0; padding: 2rem 0 1rem; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <div>
                <a href="#" style="font-size: 1.5rem; font-weight: 700; color: #7c3aed; text-decoration: none; display: flex; align-items: center;">
                    <i class="fas fa-cube" style="margin-right: 8px;"></i>
                    BrandName
                </a>
                <p style="margin-top: 0.5rem; color: #64748b; font-size: 0.9rem;">Building beautiful digital experiences</p>
            </div>
            <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: #64748b; text-decoration: none;">Privacy Policy</a>
                <a href="#" style="color: #64748b; text-decoration: none;">Terms of Service</a>
                <a href="#" style="color: #64748b; text-decoration: none;">Cookie Policy</a>
            </div>
        </div>
        <div style="text-align: center; padding-top: 1.5rem; border-top: 1px solid #f1f5f9; color: #94a3b8; font-size: 0.9rem;">
            <p>&copy; 2023 BrandName. All rights reserved.</p>
        </div>
    </div>
</div>`
    },
    footer3: {
        html: `<footer class="dark-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Consulting</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> 123 Street, City</li>
                    <li><i class="fas fa-phone"></i> +1 234 567 8900</li>
                    <li><i class="fas fa-envelope"></i> info@example.com</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Company Name. All Rights Reserved.</p>
        </div>
    </div>
</footer>`,
        css: `.dark-footer {
    background: #0f172a;
    color: #cbd5e1;
    padding: 3rem 0 1.5rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.footer-section h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: #7c3aed;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
}

.footer-section ul li a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #7c3aed;
}

.footer-section ul li i {
    margin-right: 8px;
    width: 16px;
    text-align: center;
}

.footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid #1e293b;
    color: #64748b;
    font-size: 0.9rem;
}`,
        js: `// No JavaScript required for this footer`,
        preview: `<div style="background: #0f172a; color: #cbd5e1; padding: 3rem 0 1.5rem; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-bottom: 2rem;">
            <div>
                <h3 style="color: white; margin-bottom: 1.5rem; font-size: 1.2rem; position: relative; padding-bottom: 0.5rem;">Quick Links</h3>
                <ul style="list-style: none;">
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Home</a></li>
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">About</a></li>
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Services</a></li>
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Portfolio</a></li>
                </ul>
            </div>
            <div>
                <h3 style="color: white; margin-bottom: 1.5rem; font-size: 1.2rem; position: relative; padding-bottom: 0.5rem;">Services</h3>
                <ul style="list-style: none;">
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Web Design</a></li>
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Development</a></li>
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Marketing</a></li>
                    <li><a href="#" style="color: #94a3b8; text-decoration: none;">Consulting</a></li>
                </ul>
            </div>
            <div>
                <h3 style="color: white; margin-bottom: 1.5rem; font-size: 1.2rem; position: relative; padding-bottom: 0.5rem;">Contact Info</h3>
                <ul style="list-style: none;">
                    <li><i class="fas fa-map-marker-alt" style="margin-right: 8px;"></i> 123 Street, City</li>
                    <li><i class="fas fa-phone" style="margin-right: 8px;"></i> +1 234 567 8900</li>
                    <li><i class="fas fa-envelope" style="margin-right: 8px;"></i> info@example.com</li>
                </ul>
            </div>
        </div>
        <div style="text-align: center; padding-top: 1.5rem; border-top: 1px solid #1e293b; color: #64748b; font-size: 0.9rem;">
            <p>&copy; 2023 Company Name. All Rights Reserved.</p>
        </div>
    </div>
</div>`
    }
};

// Initialize footer templates functionality
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
    const footerPreview = document.getElementById('footer-preview');

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
                footerPreview.innerHTML = templateCodes[templateId].preview;
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
            footerPreview.innerHTML = `<p>Filtering by: ${btn.textContent}</p>`;
        });
    });
});