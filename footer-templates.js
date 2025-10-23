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
    }
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