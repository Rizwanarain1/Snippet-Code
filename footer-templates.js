// Extended template code data with 9 footer templates
const templateCodes = {
    
    // ====================================================================
    // TEMPLATE 1: MODERN FOOTER
    // Features: Gradient background, newsletter form, social links
    // Category: Modern
    // ====================================================================
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

    // ====================================================================
    // TEMPLATE 2: MINIMAL FOOTER
    // Features: Clean design, simple layout, border top
    // Category: Minimal
    // ====================================================================
    footer2: {
        name: "Minimal Footer",
        category: "minimal",
        html: `<!-- Minimal Footer -->
<footer class="minimal-footer">
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
        js: `// No JavaScript required for this footer`
    },

    // ====================================================================
    // TEMPLATE 3: DARK FOOTER
    // Features: Dark theme, contact info, decorative underline
    // Category: Dark
    // ====================================================================
    footer3: {
        name: "Dark Footer",
        category: "dark",
        html: `<!-- Dark Footer -->
<footer class="dark-footer">
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
        js: `// No JavaScript required for this footer`
    },

    // ====================================================================
    // TEMPLATE 4: GRADIENT FOOTER
    // Features: Purple gradient background, simple layout
    // Category: Gradient
    // ====================================================================
    footer4: {
        name: "Gradient Footer",
        category: "gradient",
        html: `<!-- Gradient Footer -->
<footer class="gradient-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">GDPR</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </div>
</footer>`,
        css: `.gradient-footer {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 3rem 0 1.5rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
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
    color: #e2e8f0;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #fbbf24;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: #e2e8f0;
    font-size: 0.9rem;
}`,
        js: `// No JavaScript required for this footer`
    },

    // ====================================================================
    // TEMPLATE 5: SOCIAL MEDIA FOOTER
    // Features: Centered design, large social icons, hover animations
    // Category: Social
    // ====================================================================
    footer5: {
        name: "Social Media Footer",
        category: "social",
        html: `<!-- Social Media Footer -->
<footer class="social-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-logo">
                <i class="fas fa-rocket"></i>
                <span>SocialApp</span>
            </div>
            <div class="social-links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Connect with us on social media for the latest updates and news.</p>
            <p>&copy; 2023 SocialApp. All rights reserved.</p>
        </div>
    </div>
</footer>`,
        css: `.social-footer {
    background: #1a202c;
    color: white;
    padding: 3rem 0 2rem;
    text-align: center;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    margin-bottom: 2rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: #f56565;
}

.footer-logo i {
    font-size: 2.5rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #2d3748;
    border-radius: 50%;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: #f56565;
    transform: translateY(-5px) scale(1.1);
}

.footer-bottom {
    border-top: 1px solid #2d3748;
    padding-top: 2rem;
}

.footer-bottom p {
    margin-bottom: 0.5rem;
    color: #a0aec0;
}

.footer-bottom p:last-child {
    margin-bottom: 0;
    font-size: 0.9rem;
}`,
        js: `// No JavaScript required for this footer`
    },

    // ====================================================================
    // TEMPLATE 6: CONTACT FOOTER
    // Features: Contact information, business hours, icon support
    // Category: Modern
    // ====================================================================
    footer6: {
        name: "Contact Footer",
        category: "modern",
        html: `<!-- Contact Footer -->
<footer class="contact-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="contact-info">
                <h3>Get In Touch</h3>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h4>Email</h4>
                        <p>hello@company.com</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h4>Address</h4>
                        <p>123 Business Street, Suite 100<br>San Francisco, CA 94107</p>
                    </div>
                </div>
            </div>
            <div class="business-hours">
                <h3>Business Hours</h3>
                <div class="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                </div>
                <div class="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                </div>
                <div class="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
    </div>
</footer>`,
        css: `.contact-footer {
    background: #2d3748;
    color: white;
    padding: 3rem 0 1.5rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
}

.contact-info h3,
.business-hours h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-item i {
    color: #f56565;
    font-size: 1.2rem;
    margin-top: 0.2rem;
}

.contact-item h4 {
    color: white;
    margin-bottom: 0.3rem;
    font-size: 1rem;
}

.contact-item p {
    color: #a0aec0;
    margin: 0;
    line-height: 1.5;
}

.hours-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #4a5568;
}

.hours-item span:first-child {
    color: #a0aec0;
}

.hours-item span:last-child {
    color: white;
    font-weight: 500;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #4a5568;
    color: #a0aec0;
    font-size: 0.9rem;
}`,
        js: `// No JavaScript required for this footer`
    },

    // ====================================================================
    // TEMPLATE 7: NEWSLETTER FOOTER
    // Features: Email subscription form, gradient background
    // Category: Modern
    // ====================================================================
    footer7: {
        name: "Newsletter Footer",
        category: "modern",
        html: `<!-- Newsletter Footer -->
<footer class="newsletter-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="newsletter-section">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter and never miss an update</p>
                <form class="newsletter-form">
                    <div class="input-group">
                        <input type="email" placeholder="Enter your email address" required>
                        <button type="submit">
                            <i class="fas fa-paper-plane"></i>
                            Subscribe
                        </button>
                    </div>
                    <p class="newsletter-note">By subscribing, you agree to our Privacy Policy</p>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Newsletter Co. All rights reserved.</p>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Unsubscribe</a>
            </div>
        </div>
    </div>
</footer>`,
        css: `.newsletter-footer {
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
    padding: 4rem 0 2rem;
}

.footer-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.newsletter-section {
    text-align: center;
    margin-bottom: 3rem;
}

.newsletter-section h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.newsletter-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.input-group {
    display: flex;
    max-width: 500px;
    margin: 0 auto 1rem;
}

.input-group input {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
}

.input-group button {
    background: #1a202c;
    color: white;
    border: none;
    padding: 0 2rem;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.3s;
}

.input-group button:hover {
    background: #2d3748;
}

.newsletter-note {
    font-size: 0.8rem;
    opacity: 0.7;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-links a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 1;
}`,
        js: `// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing with: ' + email);
            this.reset();
        });
    }
});`
    },

    // ====================================================================
    // TEMPLATE 8: MULTI-COLUMN FOOTER
    // Features: 4-column layout, comprehensive link sections
    // Category: Modern
    // ====================================================================
    footer8: {
        name: "Multi-column Footer",
        category: "modern",
        html: `<!-- Multi-column Footer -->
<footer class="multicolumn-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Product</h4>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Integrations</a></li>
                    <li><a href="#">Changelog</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Brand</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Status</a></li>
                    <li><a href="#">System Status</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Download</h4>
                <ul>
                    <li><a href="#">iOS App</a></li>
                    <li><a href="#">Android App</a></li>
                    <li><a href="#">Mac App</a></li>
                    <li><a href="#">Windows App</a></li>
                    <li><a href="#">Chrome Extension</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-logo">
                <i class="fas fa-shield-alt"></i>
                <span>SecureApp</span>
            </div>
            <div class="footer-copyright">
                <p>&copy; 2023 SecureApp. All rights reserved.</p>
            </div>
            <div class="footer-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
</footer>`,
        css: `.multicolumn-footer {
    background: #4a5568;
    color: white;
    padding: 3rem 0 1.5rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.footer-section ul li a:hover {
    color: #fbbf24;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #718096;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: #fbbf24;
}

.footer-copyright p {
    color: #a0aec0;
    font-size: 0.9rem;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.footer-social a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;
}

.footer-social a:hover {
    color: #fbbf24;
}`,
        js: `// No JavaScript required for this footer`
    },

    // ====================================================================
    // TEMPLATE 9: CREATIVE FOOTER
    // Features: Creative design, gradient background, artistic elements
    // Category: Gradient
    // ====================================================================
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
    },
// ====================================================================
// TEMPLATE 10: FLOATING ELEMENTS FOOTER
// Features: Floating animations, cloud-inspired design
// Category: Modern
// ====================================================================
footer10: {
    name: "Floating Elements Footer",
    category: "modern",
    html: `<!-- Floating Elements Footer -->
<footer class="floating-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="floating-brand">
                <div class="logo">
                    <i class="fas fa-cloud"></i>
                    <span>CloudTech</span>
                </div>
                <p class="tagline">Elevating your digital experience to new heights</p>
            </div>
            <div class="floating-links">
                <div class="links-group">
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
                <div class="links-group">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div class="links-group">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 CloudTech. Soaring above the competition.</p>
            <div class="floating-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    
    <!-- Floating Animation Elements -->
    <div class="floating-element el-1"></div>
    <div class="floating-element el-2"></div>
    <div class="floating-element el-3"></div>
    <div class="floating-element el-4"></div>
</footer>`,
    css: `.floating-footer {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
}

.floating-element {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.floating-element.el-1 {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.floating-element.el-2 {
    width: 60px;
    height: 60px;
    top: 60%;
    left: 80%;
    animation-delay: 2s;
}

.floating-element.el-3 {
    width: 40px;
    height: 40px;
    top: 30%;
    left: 90%;
    animation-delay: 4s;
}

.floating-element.el-4 {
    width: 100px;
    height: 100px;
    top: 70%;
    left: 10%;
    animation-delay: 1s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    33% {
        transform: translateY(-20px) translateX(10px) rotate(120deg);
    }
    66% {
        transform: translateY(10px) translateX(-10px) rotate(240deg);
    }
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.floating-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

.floating-brand .tagline {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
}

.floating-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.links-group h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.links-group ul {
    list-style: none;
}

.links-group ul li {
    margin-bottom: 0.5rem;
    animation: listItemFloat 0.5s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
}

.links-group ul li:nth-child(1) { animation-delay: 0.1s; }
.links-group ul li:nth-child(2) { animation-delay: 0.2s; }
.links-group ul li:nth-child(3) { animation-delay: 0.3s; }
.links-group ul li:nth-child(4) { animation-delay: 0.4s; }

@keyframes listItemFloat {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.links-group ul li a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.links-group ul li a:hover {
    color: white;
    transform: translateX(5px);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.floating-social {
    display: flex;
    gap: 1rem;
}

.floating-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    animation: socialFloat 2s ease-in-out infinite;
}

.floating-social a:nth-child(1) { animation-delay: 0s; }
.floating-social a:nth-child(2) { animation-delay: 0.5s; }
.floating-social a:nth-child(3) { animation-delay: 1s; }

@keyframes socialFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

.floating-social a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px) scale(1.1);
}`,
    js: `// Additional floating animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    function handleScroll() {
        floatingElements.forEach((el, index) => {
            const speed = (index + 1) * 0.5;
            const yPos = -(window.pageYOffset * speed);
            el.style.transform = \`translateY(\${yPos}px)\`;
        });
    }
    
    window.addEventListener('scroll', handleScroll);
});`
},

// ====================================================================
// TEMPLATE 11: GRADIENT WAVE FOOTER
// Features: Animated gradient waves, floating text
// Category: Modern
// ====================================================================
footer11: {
    name: "Gradient Wave Footer",
    category: "modern",
    html: `<!-- Gradient Wave Footer -->
<footer class="wave-footer">
    <div class="wave-container">
        <!-- Animated Waves -->
        <div class="wave wave-1"></div>
        <div class="wave wave-2"></div>
        <div class="wave wave-3"></div>
        
        <div class="footer-content">
            <div class="wave-brand">
                <div class="logo">
                    <i class="fas fa-wave-square"></i>
                    <span>WaveTech</span>
                </div>
                <p class="slogan">Ride the wave of innovation with cutting-edge solutions</p>
            </div>
            
            <div class="wave-sections">
                <div class="wave-section">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">Wave Analytics</a></li>
                        <li><a href="#">Flow Builder</a></li>
                        <li><a href="#">Tide Manager</a></li>
                        <li><a href="#">Current AI</a></li>
                    </ul>
                </div>
                
                <div class="wave-section">
                    <h4>Solutions</h4>
                    <ul>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Startups</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Government</a></li>
                    </ul>
                </div>
                
                <div class="wave-section">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="wave-cta">
                <p>Ready to catch the next wave?</p>
                <button class="cta-button">Start Your Journey</button>
            </div>
            <div class="wave-copyright">
                <p>&copy; 2023 WaveTech. Making waves in technology.</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.wave-footer {
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
    background-size: 400% 400%;
    color: white;
    padding: 6rem 0 2rem;
    position: relative;
    overflow: hidden;
    animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.wave-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"/></svg>');
    animation: waveAnimation 10s linear infinite;
}

.wave-1 {
    opacity: 0.7;
    animation-delay: 0s;
    bottom: 0;
}

.wave-2 {
    opacity: 0.5;
    animation-delay: -2.5s;
    bottom: 10px;
}

.wave-3 {
    opacity: 0.3;
    animation-delay: -5s;
    bottom: 20px;
}

@keyframes waveAnimation {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100px); }
}

.wave-brand {
    text-align: center;
    margin-bottom: 3rem;
}

.wave-brand .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: waveGlow 3s ease-in-out infinite alternate;
}

@keyframes waveGlow {
    from {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    to {
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
                     0 0 40px rgba(255, 255, 255, 0.6);
    }
}

.wave-brand .slogan {
    font-size: 1.2rem;
    opacity: 0.9;
    animation: textFloat 4s ease-in-out infinite;
}

@keyframes textFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

.wave-sections {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
}

.wave-section h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.wave-section h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: white;
    animation: lineExtend 2s ease-in-out infinite;
}

@keyframes lineExtend {
    0%, 100% { width: 30px; }
    50% { width: 60px; }
}

.wave-section ul {
    list-style: none;
}

.wave-section ul li {
    margin-bottom: 0.5rem;
    animation: slideIn 0.5s ease-out forwards;
    opacity: 0;
    transform: translateX(-20px);
}

.wave-section ul li:nth-child(1) { animation-delay: 0.1s; }
.wave-section ul li:nth-child(2) { animation-delay: 0.2s; }
.wave-section ul li:nth-child(3) { animation-delay: 0.3s; }
.wave-section ul li:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.wave-section ul li a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.wave-section ul li a:hover {
    color: white;
    transform: translateX(5px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.wave-cta {
    margin-bottom: 1rem;
}

.wave-cta p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

.cta-button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    animation: buttonGlow 3s ease-in-out infinite;
}

@keyframes buttonGlow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    50% {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
                    0 0 40px rgba(255, 255, 255, 0.4);
    }
}

.cta-button:hover {
    background: white;
    color: #667eea;
    transform: translateY(-3px);
}

.wave-copyright p {
    opacity: 0.7;
    font-size: 0.9rem;
}`,
    js: `// Enhanced wave animations
document.addEventListener('DOMContentLoaded', function() {
    const waves = document.querySelectorAll('.wave');
    
    function createRipple() {
        waves.forEach((wave, index) => {
            wave.style.animation = \`waveAnimation \${10 + index * 2}s linear infinite\`;
        });
    }
    
    createRipple();
    
    // Add click effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'buttonGlow 3s ease-in-out infinite';
            }, 10);
        });
    }
});`
},

// ====================================================================
// TEMPLATE 12: PARTICLE BACKGROUND FOOTER
// Features: Floating particles, sci-fi aesthetic
// Category: Modern
// ====================================================================
footer12: {
    name: "Particle Background Footer",
    category: "modern",
    html: `<!-- Particle Background Footer -->
<footer class="particle-footer">
    <canvas id="particleCanvas"></canvas>
    
    <div class="footer-container">
        <div class="footer-content">
            <div class="particle-brand">
                <div class="logo">
                    <i class="fas fa-atom"></i>
                    <span>Nexus</span>
                </div>
                <p class="vision">Connecting the digital universe through innovative technology</p>
            </div>
            
            <div class="particle-grid">
                <div class="grid-section">
                    <h4>Technology</h4>
                    <ul>
                        <li><a href="#">AI & Machine Learning</a></li>
                        <li><a href="#">Blockchain</a></li>
                        <li><a href="#">Quantum Computing</a></li>
                        <li><a href="#">IoT Solutions</a></li>
                    </ul>
                </div>
                
                <div class="grid-section">
                    <h4>Innovation</h4>
                    <ul>
                        <li><a href="#">Research Labs</a></li>
                        <li><a href="#">Developer Tools</a></li>
                        <li><a href="#">API Ecosystem</a></li>
                        <li><a href="#">Open Source</a></li>
                    </ul>
                </div>
                
                <div class="grid-section">
                    <h4>Future</h4>
                    <ul>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Beta Programs</a></li>
                        <li><a href="#">Partnerships</a></li>
                        <li><a href="#">Vision 2030</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="particle-social">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            
            <div class="particle-copyright">
                <p>&copy; 2023 Nexus Technologies. Exploring the boundaries of possibility.</p>
            </div>
            
            <div class="particle-cta">
                <button class="quantum-button">Join the Revolution</button>
            </div>
        </div>
    </div>
</footer>`,
    css: `.particle-footer {
    background: #0a0f1a;
    color: #e2e8f0;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
}

#particleCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.particle-brand {
    text-align: center;
    margin-bottom: 3rem;
}

.particle-brand .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color: #7c3aed;
    margin-bottom: 1rem;
    animation: atomSpin 4s linear infinite;
}

@keyframes atomSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.particle-brand .vision {
    font-size: 1.2rem;
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto;
    animation: textGlow 3s ease-in-out infinite alternate;
}

@keyframes textGlow {
    from {
        text-shadow: 0 0 5px rgba(124, 58, 237, 0.5);
    }
    to {
        text-shadow: 0 0 15px rgba(124, 58, 237, 0.8),
                     0 0 25px rgba(124, 58, 237, 0.6);
    }
}

.particle-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
}

.grid-section h4 {
    color: #7c3aed;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    position: relative;
}

.grid-section h4::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #7c3aed;
    animation: pulseLine 2s ease-in-out infinite;
}

@keyframes pulseLine {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.grid-section ul {
    list-style: none;
}

.grid-section ul li {
    margin-bottom: 0.8rem;
    position: relative;
    padding-left: 1rem;
}

.grid-section ul li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #7c3aed;
    animation: pointPulse 1.5s ease-in-out infinite;
}

@keyframes pointPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.grid-section ul li a {
    color: #94a3b8;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.grid-section ul li a:hover {
    color: #7c3aed;
    transform: translateX(5px);
    text-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
}

.footer-bottom {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #1e293b;
}

.particle-social {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
}

.particle-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(124, 58, 237, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 50%;
    color: #7c3aed;
    text-decoration: none;
    transition: all 0.3s ease;
    animation: socialOrbit 3s ease-in-out infinite;
}

.particle-social a:nth-child(1) { animation-delay: 0s; }
.particle-social a:nth-child(2) { animation-delay: 0.5s; }
.particle-social a:nth-child(3) { animation-delay: 1s; }
.particle-social a:nth-child(4) { animation-delay: 1.5s; }

@keyframes socialOrbit {
    0%, 100% { transform: rotate(0deg) translateX(0px) rotate(0deg); }
    25% { transform: rotate(90deg) translateX(5px) rotate(-90deg); }
    50% { transform: rotate(180deg) translateX(0px) rotate(-180deg); }
    75% { transform: rotate(270deg) translateX(-5px) rotate(-270deg); }
}

.particle-social a:hover {
    background: rgba(124, 58, 237, 0.2);
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

.particle-copyright {
    text-align: center;
}

.particle-copyright p {
    color: #64748b;
    font-size: 0.9rem;
}

.quantum-button {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: quantumPulse 2s ease-in-out infinite;
    position: relative;
    overflow: hidden;
}

@keyframes quantumPulse {
    0%, 100% {
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
    }
    50% {
        box-shadow: 0 0 30px rgba(124, 58, 237, 0.8),
                    0 0 40px rgba(124, 58, 237, 0.6);
    }
}

.quantum-button::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.quantum-button:hover {
    transform: translateY(-2px);
    animation: none;
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.6);
}`,
    js: `// Particle animation system
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = \`hsl(\${Math.random() * 60 + 240}, 70%, 60%)\`;
            this.alpha = Math.random() * 0.5 + 0.2;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulseOffset = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around edges
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
            
            // Pulsing effect
            this.alpha = 0.3 + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.2;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Add glow effect
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Create particles
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections between nearby particles
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.1)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Quantum button interaction
    const quantumButton = document.querySelector('.quantum-button');
    if (quantumButton) {
        quantumButton.addEventListener('click', function() {
            // Create burst effect
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const burstParticle = new Particle();
                    burstParticle.x = quantumButton.offsetLeft + quantumButton.offsetWidth / 2;
                    burstParticle.y = quantumButton.offsetTop + quantumButton.offsetHeight / 2;
                    burstParticle.speedX = (Math.random() - 0.5) * 4;
                    burstParticle.speedY = (Math.random() - 0.5) * 4;
                    burstParticle.size = Math.random() * 3 + 1;
                    burstParticle.alpha = 1;
                    
                    particles.push(burstParticle);
                    
                    // Remove burst particles after animation
                    setTimeout(() => {
                        const index = particles.indexOf(burstParticle);
                        if (index > -1) {
                            particles.splice(index, 1);
                        }
                    }, 1000);
                }, i * 100);
            }
        });
    }
});`
},

// ====================================================================
// TEMPLATE 13: NEON GLOW FOOTER
// Features: Cyberpunk neon effects, pulsating animations
// Category: Modern
// ====================================================================
footer13: {
    name: "Neon Glow Footer",
    category: "modern",
    html: `<!-- Neon Glow Footer -->
<footer class="neon-footer">
    <div class="neon-container">
        <div class="neon-content">
            <div class="neon-brand">
                <div class="logo">
                    <i class="fas fa-bolt"></i>
                    <span class="neon-text">NEON</span>
                </div>
                <p class="tagline">Lighting up the digital landscape with cutting-edge innovation</p>
            </div>
            
            <div class="neon-grid">
                <div class="neon-column">
                    <h4 class="neon-heading">Products</h4>
                    <ul>
                        <li><a href="#" class="neon-link">Neon Core</a></li>
                        <li><a href="#" class="neon-link">Spark Suite</a></li>
                        <li><a href="#" class="neon-link">Volt AI</a></li>
                        <li><a href="#" class="neon-link">Pulse Analytics</a></li>
                    </ul>
                </div>
                
                <div class="neon-column">
                    <h4 class="neon-heading">Developers</h4>
                    <ul>
                        <li><a href="#" class="neon-link">API Docs</a></li>
                        <li><a href="#" class="neon-link">SDK</a></li>
                        <li><a href="#" class="neon-link">Tutorials</a></li>
                        <li><a href="#" class="neon-link">Community</a></li>
                    </ul>
                </div>
                
                <div class="neon-column">
                    <h4 class="neon-heading">Company</h4>
                    <ul>
                        <li><a href="#" class="neon-link">About</a></li>
                        <li><a href="#" class="neon-link">Careers</a></li>
                        <li><a href="#" class="neon-link">Press</a></li>
                        <li><a href="#" class="neon-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="neon-bottom">
            <div class="neon-social">
                <a href="#" class="social-link instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-link twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link github">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="social-link discord">
                    <i class="fab fa-discord"></i>
                </a>
            </div>
            
            <div class="neon-copyright">
                <p>&copy; 2023 NEON Digital. Electrifying the web.</p>
            </div>
            
            <div class="neon-newsletter">
                <input type="email" placeholder="Get electrifying updates..." class="neon-input">
                <button class="neon-button">Subscribe</button>
            </div>
        </div>
    </div>
    
    <!-- Animated neon lines -->
    <div class="neon-line line-1"></div>
    <div class="neon-line line-2"></div>
    <div class="neon-line line-3"></div>
</footer>`,
    css: `.neon-footer {
    background: #0a0a0a;
    color: #00ffff;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
    border-top: 1px solid #00ffff;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.neon-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.neon-brand {
    text-align: center;
    margin-bottom: 3rem;
}

.neon-brand .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.neon-text {
    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: neonGradient 3s ease infinite;
}

@keyframes neonGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.neon-brand .tagline {
    color: #ff00ff;
    font-size: 1.2rem;
    animation: taglinePulse 2s ease-in-out infinite;
}

@keyframes taglinePulse {
    0%, 100% { 
        text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
    }
    50% { 
        text-shadow: 0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff;
    }
}

.neon-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
}

.neon-heading {
    color: #00ffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;
    animation: headingGlow 2s ease-in-out infinite alternate;
}

@keyframes headingGlow {
    from {
        text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    }
    to {
        text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
    }
}

.neon-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00ffff, #ff00ff);
    animation: lineScan 2s linear infinite;
}

@keyframes lineScan {
    0% { transform: scaleX(0); opacity: 0; }
    50% { transform: scaleX(1); opacity: 1; }
    100% { transform: scaleX(0); opacity: 0; }
}

.neon-column ul {
    list-style: none;
}

.neon-column ul li {
    margin-bottom: 0.8rem;
}

.neon-link {
    color: #ff00ff;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    padding-left: 1rem;
}

.neon-link::before {
    content: '⟩';
    position: absolute;
    left: 0;
    color: #00ffff;
    animation: arrowBlink 1.5s ease-in-out infinite;
}

@keyframes arrowBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.neon-link:hover {
    color: #00ffff;
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
    transform: translateX(5px);
}

.neon-bottom {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 255, 255, 0.3);
}

.neon-social {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border: 2px solid;
    border-radius: 50%;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.social-link::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: socialShine 3s ease-in-out infinite;
}

@keyframes socialShine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.social-link.instagram {
    border-color: #e4405f;
    color: #e4405f;
    animation: instagramPulse 2s ease-in-out infinite;
}

.social-link.twitter {
    border-color: #1da1f2;
    color: #1da1f2;
    animation: twitterPulse 2s ease-in-out infinite 0.5s;
}

.social-link.github {
    border-color: #333;
    color: #333;
    animation: githubPulse 2s ease-in-out infinite 1s;
}

.social-link.discord {
    border-color: #5865f2;
    color: #5865f2;
    animation: discordPulse 2s ease-in-out infinite 1.5s;
}

@keyframes instagramPulse {
    0%, 100% { 
        box-shadow: 0 0 10px rgba(228, 64, 95, 0.5);
    }
    50% { 
        box-shadow: 0 0 20px rgba(228, 64, 95, 0.8),
                    0 0 30px rgba(228, 64, 95, 0.6);
    }
}

@keyframes twitterPulse {
    0%, 100% { 
        box-shadow: 0 0 10px rgba(29, 161, 242, 0.5);
    }
    50% { 
        box-shadow: 0 0 20px rgba(29, 161, 242, 0.8),
                    0 0 30px rgba(29, 161, 242, 0.6);
    }
}

@keyframes githubPulse {
    0%, 100% { 
        box-shadow: 0 0 10px rgba(51, 51, 51, 0.5);
    }
    50% { 
        box-shadow: 0 0 20px rgba(51, 51, 51, 0.8),
                    0 0 30px rgba(51, 51, 51, 0.6);
    }
}

@keyframes discordPulse {
    0%, 100% { 
        box-shadow: 0 0 10px rgba(88, 101, 242, 0.5);
    }
    50% { 
        box-shadow: 0 0 20px rgba(88, 101, 242, 0.8),
                    0 0 30px rgba(88, 101, 242, 0.6);
    }
}

.social-link:hover {
    transform: scale(1.2) translateY(-3px);
    animation: none;
}

.neon-copyright {
    text-align: center;
}

.neon-copyright p {
    color: #ff00ff;
    font-size: 0.9rem;
    animation: copyrightGlow 3s ease-in-out infinite;
}

@keyframes copyrightGlow {
    0%, 100% { 
        text-shadow: 0 0 5px #ff00ff;
    }
    50% { 
        text-shadow: 0 0 10px #ff00ff, 0 0 15px #ff00ff;
    }
}

.neon-newsletter {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
}

.neon-input {
    background: rgba(0, 255, 255, 0.1);
    border: 1px solid #00ffff;
    color: #00ffff;
    padding: 0.8rem 1rem;
    border-radius: 4px;
    font-size: 0.9rem;
    width: 200px;
    animation: inputGlow 2s ease-in-out infinite alternate;
}

@keyframes inputGlow {
    from {
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
    }
    to {
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.6),
                    0 0 15px rgba(0, 255, 255, 0.4);
    }
}

.neon-input::placeholder {
    color: rgba(0, 255, 255, 0.6);
}

.neon-button {
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    color: #0a0a0a;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: buttonPulse 1.5s ease-in-out infinite;
}

@keyframes buttonPulse {
    0%, 100% { 
        transform: scale(1);
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    50% { 
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.8),
                    0 0 30px rgba(255, 0, 255, 0.6);
    }
}

.neon-button:hover {
    animation: none;
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.8),
                0 0 35px rgba(255, 0, 255, 0.6);
}

/* Animated neon lines */
.neon-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
    animation: lineMove 3s linear infinite;
}

.line-1 {
    top: 20%;
    left: 0;
    width: 100px;
    animation-delay: 0s;
}

.line-2 {
    top: 50%;
    right: 0;
    width: 150px;
    animation-delay: 1s;
}

.line-3 {
    bottom: 30%;
    left: 10%;
    width: 80px;
    animation-delay: 2s;
}

@keyframes lineMove {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateX(calc(100vw + 100px));
        opacity: 0;
    }
}`,
    js: `// Enhanced neon animations
document.addEventListener('DOMContentLoaded', function() {
    // Create additional dynamic neon lines
    function createNeonLines() {
        const footer = document.querySelector('.neon-footer');
        const linesCount = 5;
        
        for (let i = 0; i < linesCount; i++) {
            const line = document.createElement('div');
            line.className = 'neon-line';
            line.style.top = \`\${Math.random() * 100}%\`;
            line.style.left = \`\${Math.random() * 100}%\`;
            line.style.width = \`\${Math.random() * 100 + 50}px\`;
            line.style.animationDelay = \`\${Math.random() * 3}s\`;
            line.style.animationDuration = \`\${Math.random() * 2 + 2}s\`;
            footer.appendChild(line);
        }
    }
    
    createNeonLines();
    
    // Interactive neon effects
    const neonLinks = document.querySelectorAll('.neon-link');
    neonLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
    
    // Newsletter form handling
    const neonButton = document.querySelector('.neon-button');
    const neonInput = document.querySelector('.neon-input');
    
    if (neonButton && neonInput) {
        neonButton.addEventListener('click', function() {
            if (neonInput.value) {
                // Create success effect
                this.textContent = '⚡';
                this.style.animation = 'buttonPulse 0.5s ease-in-out';
                
                setTimeout(() => {
                    this.textContent = 'Subscribed!';
                    this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                }, 500);
                
                setTimeout(() => {
                    this.textContent = 'Subscribe';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff00ff)';
                    this.style.animation = 'buttonPulse 1.5s ease-in-out infinite';
                    neonInput.value = '';
                }, 2000);
            } else {
                // Error effect
                this.style.animation = 'none';
                this.style.background = 'linear-gradient(45deg, #ff0000, #ff00ff)';
                setTimeout(() => {
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff00ff)';
                    this.style.animation = 'buttonPulse 1.5s ease-in-out infinite';
                }, 1000);
            }
        });
    }
});`
},

// ====================================================================
// TEMPLATE 14: MORPHING GRADIENT FOOTER
// Features: Continuously morphing gradients, smooth transitions
// Category: Modern
// ====================================================================
footer14: {
    name: "Morphing Gradient Footer",
    category: "modern",
    html: `<!-- Morphing Gradient Footer -->
<footer class="morphing-footer">
    <div class="morph-container">
        <div class="morph-content">
            <div class="morph-brand">
                <div class="logo">
                    <i class="fas fa-infinity"></i>
                    <span>Morph</span>
                </div>
                <p class="vision">Where design and technology blend seamlessly into endless possibilities</p>
            </div>
            
            <div class="morph-grid">
                <div class="morph-card">
                    <div class="card-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h4>Design</h4>
                    <ul>
                        <li><a href="#">UI/UX</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Motion</a></li>
                        <li><a href="#">3D</a></li>
                    </ul>
                </div>
                
                <div class="morph-card">
                    <div class="card-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h4>Development</h4>
                    <ul>
                        <li><a href="#">Web Apps</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">DevOps</a></li>
                    </ul>
                </div>
                
                <div class="morph-card">
                    <div class="card-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h4>Innovation</h4>
                    <ul>
                        <li><a href="#">AI/ML</a></li>
                        <li><a href="#">Blockchain</a></li>
                        <li><a href="#">IoT</a></li>
                        <li><a href="#">AR/VR</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="morph-bottom">
            <div class="morph-cta">
                <h3>Ready to transform your vision?</h3>
                <p>Let's create something extraordinary together</p>
                <button class="morph-button">
                    <span>Start Your Journey</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            
            <div class="morph-info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Global Presence</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-users"></i>
                    <span>50+ Team Members</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-project-diagram"></i>
                    <span>200+ Projects</span>
                </div>
            </div>
            
            <div class="morph-copyright">
                <p>&copy; 2023 Morph Studios. Continuously evolving.</p>
                <div class="morph-social">
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                    <a href="#"><i class="fab fa-behance"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Animated background elements -->
    <div class="morph-bg-element el-1"></div>
    <div class="morph-bg-element el-2"></div>
    <div class="morph-bg-element el-3"></div>
</footer>`,
    css: `.morphing-footer {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    color: white;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
    animation: gradientMorph 15s ease infinite;
}

@keyframes gradientMorph {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.morph-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.morph-brand {
    text-align: center;
    margin-bottom: 3rem;
}

.morph-brand .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: logoMorph 4s ease-in-out infinite;
}

@keyframes logoMorph {
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    50% { 
        transform: scale(1.1) rotate(5deg);
        text-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }
}

.morph-brand .vision {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    animation: visionFloat 6s ease-in-out infinite;
}

@keyframes visionFloat {
    0%, 100% { 
        transform: translateY(0px);
        opacity: 0.9;
    }
    50% { 
        transform: translateY(-5px);
        opacity: 1;
    }
}

.morph-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
}

.morph-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    animation: cardFloat 3s ease-in-out infinite;
}

.morph-card:nth-child(1) { animation-delay: 0s; }
.morph-card:nth-child(2) { animation-delay: 1s; }
.morph-card:nth-child(3) { animation-delay: 2s; }

@keyframes cardFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.morph-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
}

.morph-card:hover::before {
    left: 100%;
}

.morph-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: iconSpin 6s linear infinite;
}

@keyframes iconSpin {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
}

.morph-card h4 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.morph-card h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: white;
    animation: linePulse 2s ease-in-out infinite;
}

@keyframes linePulse {
    0%, 100% { width: 30px; opacity: 1; }
    50% { width: 50px; opacity: 0.7; }
}

.morph-card ul {
    list-style: none;
}

.morph-card ul li {
    margin-bottom: 0.5rem;
    animation: listReveal 0.5s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
}

.morph-card ul li:nth-child(1) { animation-delay: 0.1s; }
.morph-card ul li:nth-child(2) { animation-delay: 0.2s; }
.morph-card ul li:nth-child(3) { animation-delay: 0.3s; }
.morph-card ul li:nth-child(4) { animation-delay: 0.4s; }

@keyframes listReveal {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.morph-card ul li a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
}

.morph-card ul li a:hover {
    color: white;
    transform: translateX(5px);
}

.morph-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 2rem;
}

.morph-cta {
    text-align: center;
    margin-bottom: 2rem;
}

.morph-cta h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    animation: titleGlow 4s ease-in-out infinite;
}

@keyframes titleGlow {
    0%, 100% { 
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    50% { 
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
                     0 0 40px rgba(255, 255, 255, 0.6);
    }
}

.morph-cta p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 1.5rem;
    animation: subtitleFloat 3s ease-in-out infinite;
}

.morph-button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s ease;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    backdrop-filter: blur(10px);
    animation: buttonMorph 3s ease-in-out infinite;
    position: relative;
    overflow: hidden;
}

@keyframes buttonMorph {
    0%, 100% { 
        transform: scale(1);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    50% { 
        transform: scale(1.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
}

.morph-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.morph-button:hover::before {
    left: 100%;
}

.morph-button:hover {
    background: white;
    color: #e73c7e;
    transform: translateY(-3px) scale(1.05);
    animation: none;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.morph-button i {
    transition: transform 0.3s ease;
}

.morph-button:hover i {
    transform: translateX(5px);
}

.morph-info {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: infoPulse 2s ease-in-out infinite;
}

.info-item:nth-child(1) { animation-delay: 0s; }
.info-item:nth-child(2) { animation-delay: 0.5s; }
.info-item:nth-child(3) { animation-delay: 1s; }

@keyframes infoPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.05); opacity: 1; }
}

.morph-copyright {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.morph-copyright p {
    opacity: 0.8;
    font-size: 0.9rem;
}

.morph-social {
    display: flex;
    gap: 1rem;
}

.morph-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    animation: socialMorph 4s ease-in-out infinite;
}

.morph-social a:nth-child(1) { animation-delay: 0s; }
.morph-social a:nth-child(2) { animation-delay: 1s; }
.morph-social a:nth-child(3) { animation-delay: 2s; }

@keyframes socialMorph {
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        background: rgba(255, 255, 255, 0.1);
    }
    50% { 
        transform: scale(1.2) rotate(180deg);
        background: rgba(255, 255, 255, 0.2);
    }
}

.morph-social a:hover {
    animation: none;
    transform: scale(1.3) rotate(360deg);
    background: rgba(255, 255, 255, 0.3);
}

/* Animated background elements */
.morph-bg-element {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: bgElementFloat 8s ease-in-out infinite;
    z-index: 1;
}

.el-1 {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
    animation-delay: 0s;
}

.el-2 {
    width: 150px;
    height: 150px;
    bottom: -75px;
    right: 10%;
    animation-delay: 2s;
}

.el-3 {
    width: 100px;
    height: 100px;
    top: 20%;
    right: -50px;
    animation-delay: 4s;
}

@keyframes bgElementFloat {
    0%, 100% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.3;
    }
    33% {
        transform: translateY(-20px) translateX(10px) scale(1.1);
        opacity: 0.5;
    }
    66% {
        transform: translateY(10px) translateX(-10px) scale(0.9);
        opacity: 0.4;
    }
}`,
    js: `// Enhanced morphing animations
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic gradient colors
    const gradients = [
        ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'],
        ['#ff6b6b', '#ffa726', '#66bb6a', '#42a5f5'],
        ['#ab47bc', '#7e57c2', '#5c6bc0', '#26c6da'],
        ['#f44336', '#e91e63', '#9c27b0', '#673ab7']
    ];
    
    let currentGradient = 0;
    const footer = document.querySelector('.morphing-footer');
    
    function changeGradient() {
        currentGradient = (currentGradient + 1) % gradients.length;
        const gradient = gradients[currentGradient];
        footer.style.background = \`linear-gradient(-45deg, \${gradient[0]}, \${gradient[1]}, \${gradient[2]}, \${gradient[3]})\`;
    }
    
    // Change gradient every 15 seconds
    setInterval(changeGradient, 15000);
    
    // Interactive card effects
    const morphCards = document.querySelectorAll('.morph-card');
    morphCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'cardFloat 3s ease-in-out infinite';
            }, 10);
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    \`;
    document.head.appendChild(style);
    
    // Morph button interaction
    const morphButton = document.querySelector('.morph-button');
    if (morphButton) {
        morphButton.addEventListener('click', function() {
            // Create transformation effect
            this.style.animation = 'none';
            this.style.transform = 'scale(0.95)';
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Transforming...</span>';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i><span>Transformed!</span>';
                this.style.background = 'rgba(255, 255, 255, 0.9)';
                this.style.color = '#23d5ab';
                
                setTimeout(() => {
                    this.innerHTML = '<span>Start Your Journey</span><i class="fas fa-arrow-right"></i>';
                    this.style.background = 'rgba(255, 255, 255, 0.2)';
                    this.style.color = 'white';
                    this.style.animation = 'buttonMorph 3s ease-in-out infinite';
                }, 1500);
            }, 1000);
        });
    }
    
    // Create additional background elements
    function createBgElements() {
        const elementsCount = 3;
        for (let i = 0; i < elementsCount; i++) {
            const element = document.createElement('div');
            element.className = 'morph-bg-element';
            element.style.width = \`\${Math.random() * 100 + 50}px\`;
            element.style.height = element.style.width;
            element.style.top = \`\${Math.random() * 100}%\`;
            element.style.left = \`\${Math.random() * 100}%\`;
            element.style.animationDelay = \`\${Math.random() * 8}s\`;
            element.style.animationDuration = \`\${Math.random() * 4 + 6}s\`;
            footer.appendChild(element);
        }
    }
    
    createBgElements();
});`
},
// ====================================================================
// TEMPLATE 15: GLASS MORPHISM FOOTER
// Features: Glass effect, blur background, modern design
// Category: Modern
// ====================================================================
footer15: {
    name: "Glass Morphism Footer",
    category: "modern",
    html: `<!-- Glass Morphism Footer -->
<footer class="glass-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="logo">
                    <i class="fas fa-gem"></i>
                    <span>LuxuryBrand</span>
                </div>
                <p class="tagline">Elevating digital experiences with premium design</p>
            </div>
            <div class="footer-links">
                <div class="links-column">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="links-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>
                <div class="links-column">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Dribbble</a></li>
                        <li><a href="#">Behance</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-newsletter">
                <h4>Stay Updated</h4>
                <p>Get the latest insights and updates</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email" required>
                    <button type="submit">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 LuxuryBrand. All rights reserved.</p>
            <div class="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>`,
    css: `.glass-footer {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 4rem 0 2rem;
    position: relative;
}

.glass-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1));
    z-index: -1;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fbbf24;
}

.footer-brand .tagline {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 1.1rem;
}

.links-column h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.links-column ul {
    list-style: none;
}

.links-column ul li {
    margin-bottom: 0.5rem;
}

.links-column ul li a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.links-column ul li a:hover {
    color: #fbbf24;
}

.footer-newsletter h4 {
    color: white;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.footer-newsletter p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.newsletter-form {
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.newsletter-form input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.8rem 1rem;
    color: white;
    font-size: 0.9rem;
}

.newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.newsletter-form button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 0 1.2rem;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
}

.newsletter-form button:hover {
    background: rgba(255, 255, 255, 0.3);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.legal-links {
    display: flex;
    gap: 1.5rem;
}

.legal-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.legal-links a:hover {
    color: #fbbf24;
}`,
    js: `// Newsletter form for glass footer
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.glass-footer .newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing: ' + email);
            this.reset();
        });
    }
});`
},

// ====================================================================
// TEMPLATE 16: ANIMATED GRADIENT FOOTER
// Features: Animated gradient background, modern typography
// Category: Modern
// ====================================================================
footer16: {
    name: "Animated Gradient Footer",
    category: "modern",
    html: `<!-- Animated Gradient Footer -->
<footer class="animated-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-main">
                <div class="animated-logo">
                    <i class="fas fa-star"></i>
                    <span>InnovateCo</span>
                </div>
                <p class="mission">Pushing boundaries and creating the future through innovation and technology.</p>
                <div class="cta-section">
                    <button class="cta-button">Start Your Journey</button>
                </div>
            </div>
            <div class="footer-info">
                <div class="info-item">
                    <i class="fas fa-rocket"></i>
                    <div>
                        <h4>Fast Delivery</h4>
                        <p>Lightning fast solutions</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                        <h4>Secure & Safe</h4>
                        <p>Enterprise-grade security</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-headset"></i>
                    <div>
                        <h4>24/7 Support</h4>
                        <p>Always here to help</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="social-links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-discord"></i></a>
            </div>
            <p>&copy; 2023 InnovateCo. Building the future, today.</p>
        </div>
    </div>
</footer>`,
    css: `.animated-footer {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    color: white;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animated-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.animated-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fbbf24;
}

.mission {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 500px;
}

.cta-button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.cta-button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.info-item i {
    font-size: 1.5rem;
    color: #fbbf24;
}

.info-item h4 {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
}

.info-item p {
    opacity: 0.8;
    font-size: 0.9rem;
    margin: 0;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
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

.social-links a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
}

.footer-bottom p {
    opacity: 0.8;
    font-size: 0.9rem;
}`,
    js: `// CTA button for animated footer
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.animated-footer .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Starting your innovation journey!');
            // In real implementation: window.location.href = '/get-started';
        });
    }
});`
},

// ====================================================================
// TEMPLATE 17: SPLIT LAYOUT FOOTER
// Features: Asymmetric design, bold CTA, minimalist
// Category: Modern
// ====================================================================
footer17: {
    name: "Split Layout Footer",
    category: "modern",
    html: `<!-- Split Layout Footer -->
<footer class="split-footer">
    <div class="footer-container">
        <div class="footer-split">
            <div class="split-left">
                <div class="split-content">
                    <h3>Ready to Transform Your Business?</h3>
                    <p>Join thousands of companies using our platform to drive growth and innovation.</p>
                    <div class="split-actions">
                        <button class="primary-btn">Get Started Free</button>
                        <button class="secondary-btn">Schedule Demo</button>
                    </div>
                </div>
            </div>
            <div class="split-right">
                <div class="split-links">
                    <div class="links-group">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Solutions</a>
                        <a href="#">Pricing</a>
                        <a href="#">API</a>
                    </div>
                    <div class="links-group">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Press</a>
                    </div>
                    <div class="links-group">
                        <h4>Resources</h4>
                        <a href="#">Documentation</a>
                        <a href="#">Help Center</a>
                        <a href="#">Community</a>
                        <a href="#">Partners</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-base">
            <div class="base-left">
                <div class="logo">
                    <i class="fas fa-cube"></i>
                    <span>SplitTech</span>
                </div>
                <p>Innovating the future, one split at a time</p>
            </div>
            <div class="base-right">
                <div class="legal-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Security</a>
                    <a href="#">Cookies</a>
                </div>
                <p>&copy; 2023 SplitTech. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.split-footer {
    background: #0f172a;
    color: white;
    padding: 4rem 0 2rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-split {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid #334155;
}

.split-content h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.split-content p {
    font-size: 1.1rem;
    color: #cbd5e1;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.split-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.primary-btn {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
}

.secondary-btn {
    background: transparent;
    color: white;
    border: 2px solid #334155;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.secondary-btn:hover {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.1);
}

.split-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.links-group h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.links-group a {
    display: block;
    color: #94a3b8;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.links-group a:hover {
    color: #7c3aed;
}

.footer-base {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-left .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #7c3aed;
}

.base-left p {
    color: #64748b;
    font-size: 0.9rem;
}

.base-right {
    text-align: right;
}

.legal-links {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
    justify-content: flex-end;
}

.legal-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.legal-links a:hover {
    color: #7c3aed;
}

.base-right p {
    color: #64748b;
    font-size: 0.9rem;
}`,
    js: `// Button functionality for split footer
document.addEventListener('DOMContentLoaded', function() {
    const primaryBtn = document.querySelector('.split-footer .primary-btn');
    const secondaryBtn = document.querySelector('.split-footer .secondary-btn');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', function() {
            alert('Starting your free trial!');
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
            alert('Scheduling your demo!');
        });
    }
});`
},

// ====================================================================
// TEMPLATE 18: NEON GLOW FOOTER
// Features: Neon effects, cyberpunk style, dark theme
// Category: Modern
// ====================================================================
footer18: {
    name: "Neon Glow Footer",
    category: "modern",
    html: `<!-- Neon Glow Footer -->
<footer class="neon-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="neon-brand">
                <div class="neon-logo">
                    <i class="fas fa-bolt"></i>
                    <span>NEO-TECH</span>
                </div>
                <p class="neon-tagline">Where innovation meets the future</p>
            </div>
            <div class="neon-grid">
                <div class="neon-column">
                    <h4>Cyber Links</h4>
                    <a href="#" class="neon-link">Matrix</a>
                    <a href="#" class="neon-link">Grid</a>
                    <a href="#" class="neon-link">Network</a>
                    <a href="#" class="neon-link">System</a>
                </div>
                <div class="neon-column">
                    <h4>Digital Realm</h4>
                    <a href="#" class="neon-link">Virtual</a>
                    <a href="#" class="neon-link">Augmented</a>
                    <a href="#" class="neon-link">Mixed</a>
                    <a href="#" class="neon-link">Extended</a>
                </div>
                <div class="neon-column">
                    <h4>Future Tech</h4>
                    <a href="#" class="neon-link">AI</a>
                    <a href="#" class="neon-link">Blockchain</a>
                    <a href="#" class="neon-link">Quantum</a>
                    <a href="#" class="neon-link">Neural</a>
                </div>
            </div>
            <div class="neon-cta">
                <h4>Join the Revolution</h4>
                <button class="neon-button">Access Future</button>
                <div class="neon-social">
                    <a href="#" class="neon-social-link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="neon-social-link">
                        <i class="fab fa-discord"></i>
                    </a>
                    <a href="#" class="neon-social-link">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="cyber-text">
                <span>SYSTEM_ACTIVE</span>
                <span>PROTOCOL_ENABLED</span>
                <span>FUTURE_READY</span>
            </div>
            <p>&copy; 2023 NEO-TECH CYBERNETICS</p>
        </div>
    </div>
</footer>`,
    css: `.neon-footer {
    background: #0a0a0a;
    color: #00ff88;
    padding: 4rem 0 2rem;
    border-top: 1px solid #7c3aed;
    box-shadow: 0 -5px 30px rgba(124, 58, 237, 0.3);
    font-family: 'Courier New', monospace;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.neon-brand {
    text-align: center;
    margin-bottom: 3rem;
}

.neon-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 
        0 0 10px #7c3aed,
        0 0 20px #7c3aed,
        0 0 30px #7c3aed;
    animation: neonPulse 2s infinite;
}

@keyframes neonPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

.neon-tagline {
    color: #00ff88;
    font-size: 1.1rem;
    text-shadow: 0 0 10px #00ff88;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.neon-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.neon-column h4 {
    color: #7c3aed;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-shadow: 0 0 5px #7c3aed;
}

.neon-link {
    display: block;
    color: #00ff88;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    position: relative;
}

.neon-link:hover {
    text-shadow: 0 0 10px #00ff88;
    transform: translateX(5px);
}

.neon-cta {
    text-align: center;
}

.neon-cta h4 {
    color: #7c3aed;
    margin-bottom: 1rem;
    text-shadow: 0 0 5px #7c3aed;
}

.neon-button {
    background: transparent;
    color: #00ff88;
    border: 2px solid #00ff88;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px #00ff88;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
    margin-bottom: 1.5rem;
    font-family: 'Courier New', monospace;
}

.neon-button:hover {
    background: rgba(0, 255, 136, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
    transform: translateY(-2px);
}

.neon-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.neon-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid #7c3aed;
    border-radius: 4px;
    color: #7c3aed;
    text-decoration: none;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px #7c3aed;
}

.neon-social-link:hover {
    background: rgba(124, 58, 237, 0.1);
    box-shadow: 0 0 15px rgba(124, 58, 237, 0.6);
    transform: translateY(-2px);
}

.footer-bottom {
    border-top: 1px solid #7c3aed;
    padding-top: 2rem;
    text-align: center;
}

.cyber-text {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    color: #00ff88;
    text-shadow: 0 0 5px #00ff88;
}

.footer-bottom p {
    color: #7c3aed;
    font-size: 0.9rem;
    text-shadow: 0 0 5px #7c3aed;
}`,
    js: `// Neon button functionality
document.addEventListener('DOMContentLoaded', function() {
    const neonButton = document.querySelector('.neon-footer .neon-button');
    if (neonButton) {
        neonButton.addEventListener('click', function() {
            alert('ACCESSING FUTURE PROTOCOLS...');
            // Add cyber sound effect in real implementation
        });
    }
    
    // Add hover effects for neon links
    const neonLinks = document.querySelectorAll('.neon-link');
    neonLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px #00ff88, 0 0 20px #00ff88';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 5px #00ff88';
        });
    });
});`
},

// ====================================================================
// TEMPLATE 19: GEOMETRIC FOOTER
// Features: Abstract shapes, modern design, clean layout
// Category: Modern
// ====================================================================
footer19: {
    name: "Geometric Footer",
    category: "modern",
    html: `<!-- Geometric Footer -->
<footer class="geometric-footer">
    <div class="footer-container">
        <div class="geometric-background">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
        <div class="footer-content">
            <div class="footer-main">
                <div class="geometric-brand">
                    <div class="logo">
                        <div class="logo-shape"></div>
                        <span>Geometry</span>
                    </div>
                    <p class="description">Where art meets mathematics in digital design. Creating harmonious experiences through geometric precision.</p>
                </div>
                <div class="geometric-stats">
                    <div class="stat">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Countries</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">99%</div>
                        <div class="stat-label">Satisfaction</div>
                    </div>
                </div>
            </div>
            <div class="footer-grid">
                <div class="grid-column">
                    <h4>Design</h4>
                    <a href="#">UI/UX</a>
                    <a href="#">Branding</a>
                    <a href="#">Motion</a>
                    <a href="#">3D</a>
                </div>
                <div class="grid-column">
                    <h4>Development</h4>
                    <a href="#">Web</a>
                    <a href="#">Mobile</a>
                    <a href="#">Backend</a>
                    <a href="#">AI/ML</a>
                </div>
                <div class="grid-column">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Team</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact</a>
                </div>
                <div class="grid-column">
                    <h4>Connect</h4>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Dribbble</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="copyright">
                <p>&copy; 2023 Geometry Design Studio. All patterns reserved.</p>
            </div>
            <div class="geometric-pattern">
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
            </div>
        </div>
    </div>
</footer>`,
    css: `.geometric-footer {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: white;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
}

.geometric-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.shape {
    position: absolute;
    background: rgba(124, 58, 237, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.3);
}

.shape-1 {
    width: 100px;
    height: 100px;
    top: 10%;
    right: 10%;
    transform: rotate(45deg);
    border-radius: 20px;
}

.shape-2 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 5%;
    transform: rotate(30deg);
    border-radius: 15px;
}

.shape-3 {
    width: 60px;
    height: 60px;
    top: 50%;
    right: 20%;
    transform: rotate(60deg);
    border-radius: 10px;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.footer-content {
    margin-bottom: 3rem;
}

.footer-main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.geometric-brand .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.logo-shape {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transform: rotate(45deg);
    border-radius: 8px;
    position: relative;
}

.logo-shape::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 4px;
}

.geometric-brand .logo span {
    font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #cbd5e1;
    max-width: 400px;
}

.geometric-stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.3rem;
}

.stat-label {
    color: #94a3b8;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.grid-column h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    position: relative;
}

.grid-column h4::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
}

.grid-column a {
    display: block;
    color: #94a3b8;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.grid-column a:hover {
    color: #7c3aed;
    transform: translateX(5px);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright p {
    color: #64748b;
    font-size: 0.9rem;
}

.geometric-pattern {
    display: flex;
    gap: 0.5rem;
}

.pattern-dot {
    width: 8px;
    height: 8px;
    background: #7c3aed;
    border-radius: 50%;
    animation: dotPulse 2s infinite;
}

.pattern-dot:nth-child(2) { animation-delay: 0.2s; }
.pattern-dot:nth-child(3) { animation-delay: 0.4s; }
.pattern-dot:nth-child(4) { animation-delay: 0.6s; }

@keyframes dotPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
}`,
    js: `// No JavaScript required for geometric footer
// The animations are handled by CSS`
},
// ====================================================================
// TEMPLATE 20: ULTRA MINIMAL FOOTER
// Features: Extremely clean, just copyright and essential links
// Category: Minimal
// ====================================================================
footer20: {
    name: "Ultra Minimal Footer",
    category: "minimal",
    html: `<!-- Ultra Minimal Footer -->
<footer class="ultra-minimal-footer">
    <div class="footer-container">
        <div class="footer-content">
            <p>&copy; 2023 BrandName. All rights reserved.</p>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>`,
    css: `.ultra-minimal-footer {
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
    padding: 1.5rem 0;
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
}

.footer-content p {
    color: #64748b;
    font-size: 0.9rem;
    margin: 0;
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #1e293b;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .footer-links {
        gap: 1.5rem;
    }
}`,
    js: `// No JavaScript required for ultra minimal footer`
},

// ====================================================================
// TEMPLATE 21: CENTERED MINIMAL FOOTER
// Features: Perfectly centered, elegant typography, social links
// Category: Minimal
// ====================================================================
footer21: {
    name: "Centered Minimal Footer",
    category: "minimal",
    html: `<!-- Centered Minimal Footer -->
<footer class="centered-minimal-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-logo">
                <i class="fas fa-feather"></i>
            </div>
            <p class="footer-tagline">Creating beautiful digital experiences that inspire and delight.</p>
            <div class="social-links">
                <a href="#" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Dribbble">
                    <i class="fab fa-dribbble"></i>
                </a>
            </div>
            <p class="copyright">&copy; 2023 Studio Name. All rights reserved.</p>
        </div>
    </div>
</footer>`,
    css: `.centered-minimal-footer {
    background: #f8fafc;
    padding: 3rem 0 2rem;
    text-align: center;
}

.footer-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-logo {
    margin-bottom: 1rem;
}

.footer-logo i {
    font-size: 2rem;
    color: #7c3aed;
}

.footer-tagline {
    color: #64748b;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    color: #475569;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: #7c3aed;
    color: #ffffff;
    border-color: #7c3aed;
    transform: translateY(-2px);
}

.copyright {
    color: #94a3b8;
    font-size: 0.9rem;
    margin: 0;
}`,
    js: `// No JavaScript required for centered minimal footer`
},

// ====================================================================
// TEMPLATE 22: SPLIT LINE FOOTER
// Features: Clean split layout, brand left, links right
// Category: Minimal
// ====================================================================
footer22: {
    name: "Split Line Footer",
    category: "minimal",
    html: `<!-- Split Line Footer -->
<footer class="split-line-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-left">
                <span class="brand-name">BrandName</span>
            </div>
            <div class="footer-right">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
                <span class="copyright">&copy; 2023</span>
            </div>
        </div>
    </div>
</footer>`,
    css: `.split-line-footer {
    background: #ffffff;
    border-top: 1px solid #e2e8f0;
    padding: 1.5rem 0;
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
}

.brand-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1e293b;
}

.footer-right {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.footer-right a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-right a:hover {
    color: #1e293b;
}

.copyright {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .footer-right {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }
}`,
    js: `// No JavaScript required for split line footer`
},

// ====================================================================
// TEMPLATE 23: BORDER TOP FOOTER
// Features: Elegant border top, sophisticated typography
// Category: Minimal
// ====================================================================
footer23: {
    name: "Border Top Footer",
    category: "minimal",
    html: `<!-- Border Top Footer -->
<footer class="border-top-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-main">
                <span class="brand">MinimalCo</span>
                <span class="tagline">Simple by design, beautiful by nature</span>
            </div>
            <div class="footer-secondary">
                <span class="copyright">&copy; 2023 MinimalCo. All rights reserved.</span>
                <span class="location">Based in San Francisco</span>
            </div>
        </div>
    </div>
</footer>`,
    css: `.border-top-footer {
    background: #ffffff;
    border-top: 2px solid #7c3aed;
    padding: 2rem 0;
}

.footer-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    text-align: center;
}

.footer-main {
    margin-bottom: 1rem;
}

.brand {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.5rem;
}

.tagline {
    font-size: 1rem;
    color: #64748b;
    font-style: italic;
}

.footer-secondary {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.copyright,
.location {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-secondary {
        flex-direction: column;
        gap: 0.5rem;
    }
}`,
    js: `// No JavaScript required for border top footer`
},

// ====================================================================
// TEMPLATE 24: ICON ONLY FOOTER
// Features: Minimal icons only, clean spacing, dark theme
// Category: Minimal
// ====================================================================
footer24: {
    name: "Icon Only Footer",
    category: "minimal",
    html: `<!-- Icon Only Footer -->
<footer class="icon-only-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="icon-links">
                <a href="#" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="Dribbble">
                    <i class="fab fa-dribbble"></i>
                </a>
                <a href="#" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" aria-label="Email">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
            <p class="connect-text">Let's create something amazing together</p>
            <div class="footer-meta">
                <span class="copyright">&copy; 2023 Creative Studio</span>
                <span class="location">Worldwide</span>
            </div>
        </div>
    </div>
</footer>`,
    css: `.icon-only-footer {
    background: #1e293b;
    color: #ffffff;
    padding: 3rem 0 2rem;
    text-align: center;
}

.footer-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
}

.icon-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.icon-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.icon-links a:hover {
    background: #7c3aed;
    color: #ffffff;
    transform: translateY(-3px);
}

.connect-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

.footer-meta {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.copyright,
.location {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .icon-links {
        gap: 1rem;
    }
    
    .icon-links a {
        width: 40px;
        height: 40px;
        font-size: 1.1rem;
    }
    
    .footer-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
}`,
    js: `// No JavaScript required for icon only footer`
},
// ====================================================================
// TEMPLATE 25: ULTRA MINIMAL FOOTER
// Features: Extremely clean, subtle divider, purpose statement
// Category: Minimal
// ====================================================================
footer25: {
    name: "Ultra Minimal",
    category: "minimal",
    html: `<!-- Ultra Minimal Footer -->
<footer class="ultra-minimal-footer">
    <div class="footer-container">
        <div class="footer-content">
            <p>&copy; 2023 Brand Name</p>
            <div class="divider"></div>
            <p>Made with purpose and precision</p>
        </div>
    </div>
</footer>`,
    css: `.ultra-minimal-footer {
    background: #f8fafc;
    padding: 2rem 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    text-align: center;
}

.ultra-minimal-footer p {
    color: #64748b;
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.5;
}

.divider {
    width: 30px;
    height: 1px;
    background: #cbd5e1;
    margin: 0.8rem auto;
}`,
    js: `// No JavaScript required for ultra minimal footer`
},

// ====================================================================
// TEMPLATE 26: TYPOGRAPHY FOCUS FOOTER
// Features: Clean typographic hierarchy, brand statement
// Category: Minimal
// ====================================================================
footer26: {
    name: "Typography Focus",
    category: "minimal",
    html: `<!-- Typography Focus Footer -->
<footer class="typography-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="brand-section">
                <h3>Studio Name</h3>
                <p class="brand-tagline">Digital Craft & Design</p>
            </div>
            <div class="copyright-section">
                <p class="copyright">&copy; 2023 Studio Name. All rights reserved.</p>
                <p class="location">Based in Copenhagen • Working worldwide</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.typography-footer {
    background: white;
    padding: 3rem 0 2rem;
    border-top: 1px solid #f1f5f9;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.footer-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.brand-section h3 {
    color: #1e293b;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 0.3rem 0;
    letter-spacing: -0.02em;
}

.brand-tagline {
    color: #64748b;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 2rem 0;
    font-weight: 500;
}

.copyright-section {
    border-top: 1px solid #f1f5f9;
    padding-top: 1.5rem;
}

.copyright {
    color: #475569;
    font-size: 0.9rem;
    margin: 0 0 0.3rem 0;
}

.location {
    color: #94a3b8;
    font-size: 0.8rem;
    margin: 0;
    font-style: italic;
}`,
    js: `// No JavaScript required for typography footer`
},

// ====================================================================
// TEMPLATE 27: LINE DIVIDER FOOTER
// Features: Horizontal divider, balanced layout, elegant spacing
// Category: Minimal
// ====================================================================
footer27: {
    name: "Line Divider",
    category: "minimal",
    html: `<!-- Line Divider Footer -->
<footer class="line-divider-footer">
    <div class="footer-container">
        <div class="footer-main">
            <div class="footer-left">
                <span class="brand">SimpleBrand</span>
            </div>
            <div class="footer-right">
                <span class="established">Est. 2023</span>
            </div>
        </div>
        <div class="divider-line"></div>
        <div class="footer-bottom">
            <p class="tagline">Simple, beautiful design for modern businesses</p>
        </div>
    </div>
</footer>`,
    css: `.line-divider-footer {
    background: white;
    padding: 2.5rem 0 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.footer-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.brand {
    color: #1e293b;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
}

.established {
    color: #64748b;
    font-size: 0.85rem;
    font-style: italic;
}

.divider-line {
    height: 1px;
    background: linear-gradient(90deg, 
        transparent 0%, 
        #e2e8f0 20%, 
        #e2e8f0 80%, 
        transparent 100%
    );
    margin: 1.5rem 0;
}

.tagline {
    color: #94a3b8;
    font-size: 0.85rem;
    text-align: center;
    margin: 0;
    font-weight: 400;
}`,
    js: `// No JavaScript required for line divider footer`
},

// ====================================================================
// TEMPLATE 28: CENTERED ELEGANCE FOOTER
// Features: Centered design, decorative dots, social links
// Category: Minimal
// ====================================================================
footer28: {
    name: "Centered Elegance",
    category: "minimal",
    html: `<!-- Centered Elegance Footer -->
<footer class="centered-elegance-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="logo-decoration">
                <div class="dot"></div>
                <span class="dot-separator">•</span>
                <div class="dot"></div>
                <span class="dot-separator">•</span>
                <div class="dot"></div>
            </div>
            <p class="mission">Crafting exceptional digital experiences with care and attention to detail</p>
            <div class="social-links">
                <a href="#" class="social-link">Twitter</a>
                <span class="separator">•</span>
                <a href="#" class="social-link">Instagram</a>
                <span class="separator">•</span>
                <a href="#" class="social-link">LinkedIn</a>
            </div>
            <p class="copyright">&copy; 2023 Design Studio. All rights reserved.</p>
        </div>
    </div>
</footer>`,
    css: `.centered-elegance-footer {
    background: #0f172a;
    color: white;
    padding: 3rem 0 2.5rem;
    text-align: center;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.footer-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
}

.logo-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
}

.dot {
    width: 4px;
    height: 4px;
    background: #475569;
    border-radius: 50%;
}

.dot-separator {
    color: #475569;
    font-size: 0.7rem;
}

.mission {
    color: #cbd5e1;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
}

.social-link {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #e2e8f0;
}

.separator {
    color: #475569;
    font-size: 0.7rem;
}

.copyright {
    color: #64748b;
    font-size: 0.8rem;
    margin: 0;
}`,
    js: `// No JavaScript required for centered elegance footer`
},

// ====================================================================
// TEMPLATE 29: BORDER TOP FOOTER
// Features: Top border accent, location info, clean legal links
// Category: Minimal
// ====================================================================
footer29: {
    name: "Border Top",
    category: "minimal",
    html: `<!-- Border Top Footer -->
<footer class="border-top-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-main">
                <div class="brand-info">
                    <span class="brand-name">Minimal Co.</span>
                    <span class="location">Based in Berlin, Germany</span>
                </div>
                <div class="footer-links">
                    <a href="#" class="footer-link">Privacy Policy</a>
                    <a href="#" class="footer-link">Terms of Service</a>
                    <a href="#" class="footer-link">Contact</a>
                </div>
            </div>
            <div class="footer-secondary">
                <p class="copyright">&copy; 2023 Minimal Co. All rights reserved.</p>
                <p class="additional-info">VAT ID: DE123456789</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.border-top-footer {
    background: white;
    padding: 2.5rem 0 2rem;
    border-top: 3px solid #7c3aed;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.brand-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.brand-name {
    color: #1e293b;
    font-size: 1.1rem;
    font-weight: 600;
}

.location {
    color: #64748b;
    font-size: 0.85rem;
    font-style: italic;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-link {
    color: #64748b;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: #7c3aed;
}

.footer-secondary {
    border-top: 1px solid #f1f5f9;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright {
    color: #475569;
    font-size: 0.85rem;
    margin: 0;
}

.additional-info {
    color: #94a3b8;
    font-size: 0.8rem;
    margin: 0;
}`,
    js: `// No JavaScript required for border top footer`
},
// ====================================================================
// TEMPLATE 30: CYBER DARK FOOTER
// Features: Cyberpunk theme, neon green, terminal style
// Category: Dark
// ====================================================================
footer30: {
    name: "Cyber Dark Footer",
    category: "dark",
    html: `<!-- Cyber Dark Footer -->
<footer class="cyber-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="cyber-brand">
                <div class="cyber-logo">
                    <i class="fas fa-terminal"></i>
                    <span>CYBER_SYSTEMS</span>
                </div>
                <p class="cyber-tagline">>_ Securing the digital frontier since 2023</p>
            </div>
            <div class="cyber-nav">
                <div class="nav-section">
                    <h4>>_ SYSTEMS</h4>
                    <ul>
                        <li><a href="#">Security Suite</a></li>
                        <li><a href="#">Network Core</a></li>
                        <li><a href="#">Data Matrix</a></li>
                        <li><a href="#">AI Protocol</a></li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h4>>_ SERVICES</h4>
                    <ul>
                        <li><a href="#">Penetration Testing</a></li>
                        <li><a href="#">Threat Analysis</a></li>
                        <li><a href="#">System Audit</a></li>
                        <li><a href="#">Incident Response</a></li>
                    </ul>
                </div>
            </div>
            <div class="cyber-status">
                <div class="status-indicator">
                    <span class="status-dot"></span>
                    <span>SYSTEM STATUS: ONLINE</span>
                </div>
                <div class="cyber-contact">
                    <p>>_ ACCESS_REQUEST: <a href="mailto:access@cyber.sys">access@cyber.sys</a></p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="cyber-copyright">
                <p>>_ © 2023 CYBER_SYSTEMS // ALL_RIGHTS_RESERVED</p>
            </div>
            <div class="cyber-warning">
                <p>>_ WARNING: UNAUTHORIZED_ACCESS_PROHIBITED</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.cyber-footer {
    background: #0a0a0a;
    color: #00ff41;
    padding: 3rem 0 1.5rem;
    border-top: 2px solid #00ff41;
    font-family: 'Courier New', monospace;
    position: relative;
    overflow: hidden;
}

.cyber-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00ff41, transparent);
    animation: scanLine 3s linear infinite;
}

@keyframes scanLine {
    0% { top: 0; }
    100% { top: 100%; }
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.cyber-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px #00ff41;
}

.cyber-tagline {
    color: #00ff41;
    opacity: 0.8;
    font-size: 0.9rem;
}

.nav-section h4 {
    color: #00ff41;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-shadow: 0 0 5px #00ff41;
}

.nav-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-section ul li {
    margin-bottom: 0.5rem;
}

.nav-section ul li a {
    color: #00ff41;
    text-decoration: none;
    transition: all 0.3s;
    font-size: 0.9rem;
    opacity: 0.7;
}

.nav-section ul li a:hover {
    opacity: 1;
    text-shadow: 0 0 5px #00ff41;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: #00ff41;
    border-radius: 50%;
    animation: statusPulse 2s infinite;
}

@keyframes statusPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.cyber-contact a {
    color: #00ff41;
    text-decoration: none;
    opacity: 0.8;
}

.cyber-contact a:hover {
    opacity: 1;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #003b00;
}

.cyber-copyright p,
.cyber-warning p {
    font-size: 0.8rem;
    opacity: 0.6;
    margin: 0;
}

.cyber-warning p {
    color: #ff4444;
}`,
    js: `// Cyber footer animations
document.addEventListener('DOMContentLoaded', function() {
    const cyberFooter = document.querySelector('.cyber-footer');
    if (cyberFooter) {
        // Add glitch effect on hover
        cyberFooter.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px #00ff41';
        });
        
        cyberFooter.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    }
});`
},

// ====================================================================
// TEMPLATE 31: LUXURY DARK FOOTER
// Features: Gold accents, premium design, sophisticated layout
// Category: Dark
// ====================================================================
footer31: {
    name: "Luxury Dark Footer",
    category: "dark",
    html: `<!-- Luxury Dark Footer -->
<footer class="luxury-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="luxury-brand">
                <div class="luxury-logo">
                    <i class="fas fa-crown"></i>
                    <span>ELEGANCE</span>
                </div>
                <p class="luxury-tagline">Where excellence meets sophistication</p>
            </div>
            <div class="luxury-nav">
                <div class="nav-column">
                    <h4>Collections</h4>
                    <ul>
                        <li><a href="#">Signature Series</a></li>
                        <li><a href="#">Limited Edition</a></li>
                        <li><a href="#">Heritage Pieces</a></li>
                        <li><a href="#">Future Classics</a></li>
                    </ul>
                </div>
                <div class="nav-column">
                    <h4>Experience</h4>
                    <ul>
                        <li><a href="#">Private Viewing</a></li>
                        <li><a href="#">Concierge Service</a></li>
                        <li><a href="#">Custom Commission</a></li>
                        <li><a href="#">VIP Events</a></li>
                    </ul>
                </div>
            </div>
            <div class="luxury-contact">
                <h4>By Appointment</h4>
                <div class="contact-info">
                    <p><i class="fas fa-phone"></i> +1 (888) 888-8888</p>
                    <p><i class="fas fa-envelope"></i> concierge@elegance.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> 888 Luxury Avenue</p>
                </div>
                <div class="appointment-cta">
                    <button class="luxury-btn">Request Appointment</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="luxury-copyright">
                <p>&copy; 2023 ELEGANCE. Exclusivity Defined.</p>
            </div>
            <div class="luxury-legal">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Discretion</a>
            </div>
        </div>
    </div>
</footer>`,
    css: `.luxury-footer {
    background: #1a1a1a;
    color: #d4af37;
    padding: 4rem 0 2rem;
    border-top: 3px solid #d4af37;
    font-family: Arial, sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.luxury-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.luxury-tagline {
    color: #b8860b;
    font-size: 1.1rem;
    font-style: italic;
}

.nav-column h4 {
    color: #d4af37;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.nav-column h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 1px;
    background: #d4af37;
}

.nav-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-column ul li {
    margin-bottom: 0.8rem;
}

.nav-column ul li a {
    color: #b8860b;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.nav-column ul li a:hover {
    color: #d4af37;
}

.luxury-contact h4 {
    color: #d4af37;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.contact-info p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    color: #b8860b;
    font-size: 0.9rem;
}

.contact-info i {
    width: 16px;
    text-align: center;
}

.luxury-btn {
    background: transparent;
    color: #d4af37;
    border: 1px solid #d4af37;
    padding: 0.8rem 1.5rem;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    width: 100%;
    font-family: Arial, sans-serif;
}

.luxury-btn:hover {
    background: #d4af37;
    color: #1a1a1a;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #333;
}

.luxury-copyright p {
    color: #b8860b;
    font-size: 0.9rem;
    margin: 0;
}

.luxury-legal {
    display: flex;
    gap: 1.5rem;
}

.luxury-legal a {
    color: #b8860b;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;
}

.luxury-legal a:hover {
    color: #d4af37;
}`,
    js: `// Luxury footer appointment button
document.addEventListener('DOMContentLoaded', function() {
    const luxuryBtn = document.querySelector('.luxury-btn');
    if (luxuryBtn) {
        luxuryBtn.addEventListener('click', function() {
            alert('Our concierge will contact you within 24 hours to schedule your private appointment.');
        });
    }
});`
},

// ====================================================================
// TEMPLATE 32: MATRIX DARK FOOTER
// Features: Matrix theme, binary code, digital rain effect
// Category: Dark
// ====================================================================
footer32: {
    name: "Matrix Dark Footer",
    category: "dark",
    html: `<!-- Matrix Dark Footer -->
<footer class="matrix-footer">
    <div class="footer-container">
        <div class="matrix-background">
            <div class="code-rain"></div>
        </div>
        <div class="footer-content">
            <div class="matrix-brand">
                <div class="matrix-logo">
                    <span class="binary">01001110 01000101 01001111</span>
                    <h3>THE_MATRIX</h3>
                    <span class="binary">01010011 01011001 01010011 01010100 01000101 01001101</span>
                </div>
            </div>
            <div class="matrix-nav">
                <div class="nav-terminal">
                    <h4>>_ SYSTEM_ACCESS</h4>
                    <ul>
                        <li><a href="#">>_ red_pill.exe</a></li>
                        <li><a href="#">>_ blue_pill.exe</a></li>
                        <li><a href="#">>_ construct.iso</a></li>
                        <li><a href="#">>_ zion.net</a></li>
                    </ul>
                </div>
                <div class="nav-terminal">
                    <h4>>_ DATA_STREAMS</h4>
                    <ul>
                        <li><a href="#">>_ source_code.zip</a></li>
                        <li><a href="#">>_ protocols.doc</a></li>
                        <li><a href="#">>_ encryption.key</a></li>
                        <li><a href="#">>_ backup.dat</a></li>
                    </ul>
                </div>
            </div>
            <div class="matrix-status">
                <div class="system-info">
                    <p>>_ SYSTEM: <span class="online">OPERATIONAL</span></p>
                    <p>>_ AGENTS: <span class="warning">DETECTED</span></p>
                    <p>>_ USER: <span class="user">NEO</span></p>
                </div>
                <div class="emergency-exit">
                    <button class="matrix-btn">>_ EXIT_MATRIX</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="matrix-copyright">
                <p>>_ © 2023 THE_MATRIX // REALITY_VERSION_6.9</p>
            </div>
            <div class="matrix-warning">
                <p>>_ FOLLOW_WHITE_RABBIT</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.matrix-footer {
    background: #000;
    color: #00ff00;
    padding: 3rem 0 1.5rem;
    font-family: 'Courier New', monospace;
    position: relative;
    overflow: hidden;
}

.matrix-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    pointer-events: none;
    overflow: hidden;
}

.code-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 8px;
    line-height: 1.2;
    opacity: 0.3;
    animation: codeScroll 20s linear infinite;
    white-space: pre-wrap;
}

@keyframes codeScroll {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.matrix-logo {
    text-align: center;
    margin-bottom: 2rem;
}

.binary {
    font-size: 0.7rem;
    opacity: 0.6;
    display: block;
    margin: 0.5rem 0;
}

.matrix-logo h3 {
    color: #00ff00;
    font-size: 1.5rem;
    margin: 1rem 0;
    text-shadow: 0 0 10px #00ff00;
}

.nav-terminal h4 {
    color: #00ff00;
    margin-bottom: 1rem;
    font-size: 1rem;
    animation: terminalBlink 2s infinite;
}

@keyframes terminalBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.nav-terminal ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-terminal ul li {
    margin-bottom: 0.5rem;
}

.nav-terminal ul li a {
    color: #00ff00;
    text-decoration: none;
    transition: all 0.3s;
    font-size: 0.9rem;
    opacity: 0.8;
}

.nav-terminal ul li a:hover {
    opacity: 1;
    text-shadow: 0 0 5px #00ff00;
}

.system-info p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.online {
    color: #00ff00;
}

.warning {
    color: #ffff00;
}

.user {
    color: #00ffff;
}

.matrix-btn {
    background: transparent;
    color: #00ff00;
    border: 1px solid #00ff00;
    padding: 0.8rem 1.5rem;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
    animation: matrixGlow 2s ease-in-out infinite alternate;
}

.matrix-btn:hover {
    background: #00ff00;
    color: #000;
}

@keyframes matrixGlow {
    from { box-shadow: 0 0 5px #00ff00; }
    to { box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #003300;
}

.matrix-copyright p,
.matrix-warning p {
    font-size: 0.8rem;
    opacity: 0.6;
    margin: 0;
}`,
    js: `// Matrix footer effects
document.addEventListener('DOMContentLoaded', function() {
    const matrixBtn = document.querySelector('.matrix-btn');
    if (matrixBtn) {
        matrixBtn.addEventListener('click', function() {
            alert('There is no spoon...');
        });
    }

    // Create code rain effect
    function createCodeRain() {
        const container = document.querySelector('.matrix-background');
        if (!container) return;
        
        const characters = '010101010110111001101001011101100110010101110010011100110110010100100000';
        const codeElement = document.createElement('div');
        codeElement.className = 'code-rain';
        codeElement.textContent = characters.repeat(10);
        container.appendChild(codeElement);
    }
    
    createCodeRain();
});`
},

// ====================================================================
// TEMPLATE 33: SPACE DARK FOOTER
// Features: Cosmic theme, purple/blue colors, infinity symbols
// Category: Dark
// ====================================================================
footer33: {
    name: "Space Dark Footer",
    category: "dark",
    html: `<!-- Space Dark Footer -->
<footer class="space-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="space-brand">
                <div class="space-logo">
                    <i class="fas fa-rocket"></i>
                    <span>GALAXY_EXPLORERS</span>
                </div>
                <p class="space-tagline">Pushing the boundaries of the known universe</p>
            </div>
            <div class="space-nav">
                <div class="nav-sector">
                    <h4>Missions</h4>
                    <ul>
                        <li><a href="#">Deep Space Probes</a></li>
                        <li><a href="#">Orbital Research</a></li>
                        <li><a href="#">Lunar Operations</a></li>
                        <li><a href="#">Mars Colonization</a></li>
                    </ul>
                </div>
                <div class="nav-sector">
                    <h4>Technology</h4>
                    <ul>
                        <li><a href="#">Propulsion Systems</a></li>
                        <li><a href="#">Life Support</a></li>
                        <li><a href="#">Communication Arrays</a></li>
                        <li><a href="#">Navigation Systems</a></li>
                    </ul>
                </div>
            </div>
            <div class="space-stats">
                <div class="stat-item">
                    <span class="stat-number">∞</span>
                    <span class="stat-label">Light Years Explored</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">42</span>
                    <span class="stat-label">Active Missions</span>
                </div>
                <div class="space-cta">
                    <button class="space-btn">Join Mission Control</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="space-copyright">
                <p>&copy; 2023 Galaxy Explorers. To Infinity and Beyond.</p>
            </div>
            <div class="space-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
</footer>`,
    css: `.space-footer {
    background: #00002b;
    color: #8a2be2;
    padding: 4rem 0 2rem;
    position: relative;
    overflow: hidden;
    font-family: Arial, sans-serif;
}

.space-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(106, 90, 205, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.space-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px #8a2be2;
}

.space-tagline {
    color: #9370db;
    font-size: 1.1rem;
    line-height: 1.6;
}

.nav-sector h4 {
    color: #8a2be2;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    position: relative;
}

.nav-sector h4::after {
    content: '✦';
    position: absolute;
    right: 0;
    color: #9370db;
}

.nav-sector ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-sector ul li {
    margin-bottom: 0.8rem;
}

.nav-sector ul li a {
    color: #9370db;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.nav-sector ul li a:hover {
    color: #8a2be2;
    text-shadow: 0 0 5px #8a2be2;
}

.space-stats {
    text-align: center;
}

.stat-item {
    margin-bottom: 1.5rem;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #8a2be2;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.8rem;
    color: #9370db;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.space-btn {
    background: transparent;
    color: #8a2be2;
    border: 1px solid #8a2be2;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    width: 100%;
    font-family: Arial, sans-serif;
}

.space-btn:hover {
    background: #8a2be2;
    color: #00002b;
    box-shadow: 0 0 20px #8a2be2;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #191970;
}

.space-copyright p {
    color: #9370db;
    font-size: 0.9rem;
    margin: 0;
}

.space-social {
    display: flex;
    gap: 1rem;
}

.space-social a {
    color: #9370db;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;
}

.space-social a:hover {
    color: #8a2be2;
}`,
    js: `// Space footer animations
document.addEventListener('DOMContentLoaded', function() {
    const spaceBtn = document.querySelector('.space-btn');
    if (spaceBtn) {
        spaceBtn.addEventListener('click', function() {
            alert('3... 2... 1... Launch! Preparing mission briefing...');
        });
    }

    // Add twinkling stars effect
    const spaceFooter = document.querySelector('.space-footer');
    if (spaceFooter) {
        // Create style for twinkle animation
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes twinkle {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }
        \`;
        document.head.appendChild(style);

        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '1px';
            star.style.height = '1px';
            star.style.background = '#8a2be2';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.opacity = '0';
            star.style.animation = \`twinkle \${2 + Math.random() * 3}s infinite\`;
            spaceFooter.appendChild(star);
        }
    }
});`
},

// ====================================================================
// TEMPLATE 34: NOIR DARK FOOTER
// Features: Film noir style, detective theme, dramatic elements
// Category: Dark
// ====================================================================
footer34: {
    name: "Noir Dark Footer",
    category: "dark",
    html: `<!-- Noir Dark Footer -->
<footer class="noir-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="noir-brand">
                <div class="noir-logo">
                    <i class="fas fa-user-secret"></i>
                    <span>RAINY_NIGHT_DETECTIVE_AGENCY</span>
                </div>
                <p class="noir-tagline">Sometimes the truth hurts. We deliver it anyway.</p>
            </div>
            <div class="noir-nav">
                <div class="nav-case">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Surveillance</a></li>
                        <li><a href="#">Background Checks</a></li>
                        <li><a href="#">Missing Persons</a></li>
                        <li><a href="#">Corporate Espionage</a></li>
                    </ul>
                </div>
                <div class="nav-case">
                    <h4>Case Files</h4>
                    <ul>
                        <li><a href="#">The Maltese Falcon</a></li>
                        <li><a href="#">The Big Sleep</a></li>
                        <li><a href="#">Double Indemnity</a></li>
                        <li><a href="#">Chinatown</a></li>
                    </ul>
                </div>
            </div>
            <div class="noir-contact">
                <div class="contact-card">
                    <h4>Office Hours</h4>
                    <p>When the rain falls and shadows grow long</p>
                    <div class="contact-info">
                        <p><i class="fas fa-phone"></i> 555-1940</p>
                        <p><i class="fas fa-envelope"></i> shamus@rainynight.com</p>
                        <p><i class="fas fa-map-marker-alt"></i> 123 Dark Alley</p>
                    </div>
                    <button class="noir-btn">Leave a Tip</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="noir-copyright">
                <p>© 2023 Rainy Night Detective Agency. All leads confidential.</p>
            </div>
            <div class="noir-warning">
                <p>Walk carefully. The night has eyes.</p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.noir-footer {
    background: #2a2a2a;
    color: #c0c0c0;
    padding: 3rem 0 1.5rem;
    font-family: 'Times New Roman', serif;
    position: relative;
    border-top: 2px solid #555;
}

.noir-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.03) 50%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, rgba(255,255,255,0.03) 50%, transparent 51%);
    background-size: 10px 10px;
    pointer-events: none;
    opacity: 0.3;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.noir-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.noir-tagline {
    color: #a0a0a0;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.6;
}

.nav-case h4 {
    color: #fff;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.nav-case h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 1px;
    background: #c0c0c0;
}

.nav-case ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-case ul li {
    margin-bottom: 0.8rem;
}

.nav-case ul li a {
    color: #a0a0a0;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.nav-case ul li a:hover {
    color: #fff;
}

.contact-card {
    background: #333;
    padding: 1.5rem;
    border: 1px solid #555;
    position: relative;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: -5px;
    bottom: -5px;
    background: #555;
    z-index: -1;
}

.contact-card h4 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.contact-card > p {
    color: #a0a0a0;
    font-style: italic;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.contact-info p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    color: #c0c0c0;
    font-size: 0.9rem;
}

.contact-info i {
    width: 16px;
    text-align: center;
}

.noir-btn {
    background: #555;
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    font-family: 'Times New Roman', serif;
    transition: all 0.3s;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.noir-btn:hover {
    background: #666;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #444;
}

.noir-copyright p {
    color: #a0a0a0;
    font-size: 0.9rem;
    margin: 0;
}

.noir-warning p {
    color: #a0a0a0;
    font-size: 0.8rem;
    font-style: italic;
    margin: 0;
}`,
    js: `// Noir footer detective theme
document.addEventListener('DOMContentLoaded', function() {
    const noirBtn = document.querySelector('.noir-btn');
    if (noirBtn) {
        noirBtn.addEventListener('click', function() {
            alert('Your tip has been received. We\\'ll be in touch when we have something.');
        });
    }

    // Add typewriter effect to tagline
    const tagline = document.querySelector('.noir-tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }
});`
},
// ====================================================================
// TEMPLATE 35: DARK PROFESSIONAL FOOTER
// Features: Corporate design, gradient background, professional layout
// Category: Dark
// ====================================================================
footer35: {
    name: "Dark Professional Footer",
    category: "dark",
    html: `<!-- Dark Professional Footer -->
<footer class="dark-professional-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="logo">
                    <i class="fas fa-crown"></i>
                    <span>DarkPro</span>
                </div>
                <p class="tagline">Professional solutions for modern businesses</p>
            </div>
            <div class="footer-sections">
                <div class="footer-section">
                    <h4>Solutions</h4>
                    <ul>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Startups</a></li>
                        <li><a href="#">Agencies</a></li>
                        <li><a href="#">Education</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Leadership</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Partnerships</a></li>
                        <li><a href="#">Media</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="copyright">
                <p>&copy; 2023 DarkPro. All rights reserved.</p>
            </div>
            <div class="footer-meta">
                <div class="social-links">
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                </div>
                <div class="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>`,
    css: `.dark-professional-footer {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: #f8fafc;
    padding: 4rem 0 2rem;
    border-top: 1px solid #374151;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;
}

.footer-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #7c3aed;
    margin-bottom: 1rem;
}

.footer-brand .tagline {
    color: #94a3b8;
    line-height: 1.6;
    font-size: 1rem;
}

.footer-sections {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.footer-section h4 {
    color: #7c3aed;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.footer-section ul li a:hover {
    color: #7c3aed;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
}

.copyright p {
    color: #64748b;
    font-size: 0.9rem;
}

.footer-meta {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #7c3aed;
}

.legal-links {
    display: flex;
    gap: 1.5rem;
}

.legal-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;
}

.legal-links a:hover {
    color: #7c3aed;
}`,
    js: `// No JavaScript required for this footer`
},

// ====================================================================
// TEMPLATE 36: DARK MINIMAL FOOTER
// Features: Ultra-minimal design, clean typography, subtle animations
// Category: Dark
// ====================================================================
footer36: {
    name: "Dark Minimal Footer",
    category: "dark",
    html: `<!-- Dark Minimal Footer -->
<footer class="dark-minimal-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="minimal-brand">
                <div class="logo">
                    <i class="fas fa-moon"></i>
                    <span>Noir</span>
                </div>
                <p class="philosophy">Simplicity is the ultimate sophistication</p>
            </div>
            <nav class="minimal-nav">
                <a href="#">Work</a>
                <a href="#">Studio</a>
                <a href="#">Contact</a>
                <a href="#">Journal</a>
            </nav>
        </div>
        <div class="footer-bottom">
            <div class="minimal-info">
                <p>Based in Berlin • Working worldwide</p>
            </div>
            <div class="minimal-legal">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">© 2023</a>
            </div>
        </div>
    </div>
</footer>`,
    css: `.dark-minimal-footer {
    background: #000000;
    color: #ffffff;
    padding: 3rem 0 1.5rem;
    font-family: 'Inter', sans-serif;
}

.footer-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #1f2937;
}

.minimal-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
}

.minimal-brand .philosophy {
    color: #6b7280;
    font-size: 0.9rem;
    font-style: italic;
    max-width: 200px;
}

.minimal-nav {
    display: flex;
    gap: 2rem;
}

.minimal-nav a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 400;
    transition: color 0.3s;
    position: relative;
}

.minimal-nav a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #ffffff;
    transition: width 0.3s ease;
}

.minimal-nav a:hover {
    color: #ffffff;
}

.minimal-nav a:hover::after {
    width: 100%;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.minimal-info p {
    color: #6b7280;
    font-size: 0.8rem;
}

.minimal-legal {
    display: flex;
    gap: 1.5rem;
}

.minimal-legal a {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;
}

.minimal-legal a:hover {
    color: #ffffff;
}`,
    js: `// No JavaScript required for this footer`
},

// ====================================================================
// TEMPLATE 37: DARK LUXURY FOOTER
// Features: Premium design, gold accents, luxury branding
// Category: Dark
// ====================================================================
footer37: {
    name: "Dark Luxury Footer",
    category: "dark",
    html: `<!-- Dark Luxury Footer -->
<footer class="dark-luxury-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="luxury-brand">
                <div class="logo">
                    <i class="fas fa-gem"></i>
                    <span>LUXE</span>
                </div>
                <p class="brand-statement">Exclusive experiences for the discerning few</p>
            </div>
            <div class="luxury-contact">
                <div class="contact-method">
                    <i class="fas fa-phone"></i>
                    <div>
                        <span class="label">By Appointment</span>
                        <span class="value">+1 234 567 8900</span>
                    </div>
                </div>
                <div class="contact-method">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <span class="label">Private Inquiries</span>
                        <span class="value">concierge@luxe.com</span>
                    </div>
                </div>
                <div class="contact-method">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <span class="label">Flagship Store</span>
                        <span class="value">5th Avenue, New York</span>
                    </div>
                </div>
            </div>
            <div class="luxury-social">
                <h4>Follow Our World</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="luxury-legal">
                <p>&copy; 2023 LUXE. All rights reserved. Unauthorized use prohibited.</p>
            </div>
            <div class="luxury-links">
                <a href="#">Privacy Charter</a>
                <a href="#">Terms of Excellence</a>
                <a href="#">Client Services</a>
            </div>
        </div>
    </div>
</footer>`,
    css: `.dark-luxury-footer {
    background: #111827;
    color: #f9fafb;
    padding: 4rem 0 2rem;
    border-top: 2px solid #fbbf24;
    font-family: 'Playfair Display', serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.luxury-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    font-weight: 300;
    color: #fbbf24;
    margin-bottom: 1rem;
}

.luxury-brand .brand-statement {
    color: #d1d5db;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.5;
}

.luxury-contact .contact-method {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.luxury-contact .contact-method i {
    color: #fbbf24;
    font-size: 1.1rem;
    margin-top: 0.2rem;
}

.contact-method .label {
    display: block;
    color: #9ca3af;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.contact-method .value {
    display: block;
    color: #f9fafb;
    font-size: 0.95rem;
}

.luxury-social h4 {
    color: #fbbf24;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 400;
}

.luxury-social .social-links {
    display: flex;
    gap: 1rem;
}

.luxury-social .social-links a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 1.3rem;
    transition: color 0.3s;
}

.luxury-social .social-links a:hover {
    color: #fbbf24;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
}

.luxury-legal p {
    color: #6b7280;
    font-size: 0.8rem;
    font-style: italic;
}

.luxury-links {
    display: flex;
    gap: 2rem;
}

.luxury-links a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.luxury-links a:hover {
    color: #fbbf24;
}`,
    js: `// No JavaScript required for this footer`
},

// ====================================================================
// TEMPLATE 38: DARK TECH FOOTER
// Features: Cyber-inspired design, tech elements, monospace font
// Category: Dark
// ====================================================================
footer38: {
    name: "Dark Tech Footer",
    category: "dark",
    html: `<!-- Dark Tech Footer -->
<footer class="dark-tech-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="tech-brand">
                <div class="logo">
                    <i class="fas fa-code"></i>
                    <span>TechDark</span>
                </div>
                <p class="mission">Pushing the boundaries of technology</p>
            </div>
            <div class="tech-stats">
                <div class="stat">
                    <span class="number">99.9%</span>
                    <span class="label">Uptime</span>
                </div>
                <div class="stat">
                    <span class="number">24/7</span>
                    <span class="label">Support</span>
                </div>
                <div class="stat">
                    <span class="number">10ms</span>
                    <span class="label">Response</span>
                </div>
            </div>
            <div class="tech-links">
                <div class="links-column">
                    <h4>Developers</h4>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">SDKs</a></li>
                        <li><a href="#">Examples</a></li>
                    </ul>
                </div>
                <div class="links-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="tech-social">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-stack-overflow"></i></a>
                <a href="#"><i class="fab fa-dev"></i></a>
                <a href="#"><i class="fab fa-discord"></i></a>
            </div>
            <div class="tech-legal">
                <p>&copy; 2023 TechDark Systems • <span class="glow">Innovating Tomorrow</span></p>
            </div>
        </div>
    </div>
</footer>`,
    css: `.dark-tech-footer {
    background: #030712;
    color: #10b981;
    padding: 3rem 0 1.5rem;
    border: 1px solid #10b981;
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.tech-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.tech-brand .mission {
    color: #6b7280;
    font-size: 0.9rem;
}

.tech-stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stat {
    text-align: center;
}

.stat .number {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #10b981;
    margin-bottom: 0.2rem;
}

.stat .label {
    display: block;
    color: #6b7280;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.tech-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.links-column h4 {
    color: #10b981;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
}

.links-column ul {
    list-style: none;
}

.links-column ul li {
    margin-bottom: 0.5rem;
}

.links-column ul li a {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.links-column ul li a:hover {
    color: #10b981;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #1f2937;
}

.tech-social {
    display: flex;
    gap: 1rem;
}

.tech-social a {
    color: #6b7280;
    text-decoration: none;
    font-size: 1.3rem;
    transition: color 0.3s;
}

.tech-social a:hover {
    color: #10b981;
}

.tech-legal p {
    color: #6b7280;
    font-size: 0.8rem;
}

.tech-legal .glow {
    color: #10b981;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}`,
    js: `// No JavaScript required for this footer`
},

// ====================================================================
// TEMPLATE 39: DARK CREATIVE FOOTER
// Features: Artistic design, creative elements, modern layout
// Category: Dark
// ====================================================================
footer39: {
    name: "Dark Creative Footer",
    category: "dark",
    html: `<!-- Dark Creative Footer -->
<footer class="dark-creative-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="creative-brand">
                <div class="logo">
                    <i class="fas fa-palette"></i>
                    <span>CreativeDark</span>
                </div>
                <p class="vision">Where imagination meets execution</p>
            </div>
            <div class="creative-work">
                <h4>Our Work</h4>
                <div class="work-links">
                    <a href="#">Branding</a>
                    <a href="#">Web Design</a>
                    <a href="#">Motion</a>
                    <a href="#">Illustration</a>
                    <a href="#">Photography</a>
                </div>
            </div>
            <div class="creative-studio">
                <h4>Studio</h4>
                <div class="studio-info">
                    <p>Berlin • London • Tokyo</p>
                    <p>Available for select projects</p>
                </div>
            </div>
            <div class="creative-cta">
                <h4>Start a Project</h4>
                <p>Let's create something amazing together</p>
                <button class="cta-button">Get in Touch</button>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="creative-social">
                <a href="#"><i class="fab fa-dribbble"></i></a>
                <a href="#"><i class="fab fa-behance"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="creative-meta">
                <p>&copy; 2023 CreativeDark Studio</p>
                <div class="meta-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </div>
    </div>
</footer>`,
    css: `.dark-creative-footer {
    background: #1f2937;
    color: #f9fafb;
    padding: 4rem 0 2rem;
    border-top: 2px solid #ec4899;
    font-family: 'Inter', sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.creative-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #ec4899;
    margin-bottom: 1rem;
}

.creative-brand .vision {
    color: #d1d5db;
    font-size: 1rem;
    line-height: 1.5;
}

.creative-work h4,
.creative-studio h4,
.creative-cta h4 {
    color: #ec4899;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.work-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.work-links a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.work-links a:hover {
    color: #ec4899;
}

.studio-info p {
    color: #9ca3af;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.creative-cta p {
    color: #d1d5db;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.cta-button {
    background: #ec4899;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.cta-button:hover {
    background: #db2777;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
}

.creative-social {
    display: flex;
    gap: 1rem;
}

.creative-social a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 1.3rem;
    transition: color 0.3s;
}

.creative-social a:hover {
    color: #ec4899;
}

.creative-meta {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.creative-meta p {
    color: #6b7280;
    font-size: 0.9rem;
}

.meta-links {
    display: flex;
    gap: 1.5rem;
}

.meta-links a {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s;
}

.meta-links a:hover {
    color: #ec4899;
}`,
    js: `// CTA button functionality for creative footer
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.dark-creative-footer .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Starting your creative project...');
            // In a real implementation, this would open a contact form
            // or redirect to contact page
        });
    }
});`
},



};




// ====================================================================
// MAIN FUNCTIONALITY - FOOTER TEMPLATES GALLERY
// Handles modal, code preview, copy functionality and filtering
// ====================================================================

// COMPLETELY FIXED Footer Templates Functionality
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

    // Ensure copy notification is hidden on page load
    copyNotification.style.display = 'none';

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
                
                // Reset to HTML tab and hide notification
                showTab('html');
                copyNotification.style.display = 'none'; // Hide notification when modal opens
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
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
            copyNotification.style.display = 'none'; // Hide notification when modal closes with escape key
        }
    });
});