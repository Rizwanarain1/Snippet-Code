// Button Templates Code Data
const buttonCodes = {
    // ====================================================================
    // TEMPLATE 1: PRIMARY BUTTON
    // ====================================================================
    btn1: {
        name: "Primary Button",
        category: "primary",
        html: `<button class="btn-primary">
    Primary Button
</button>`,
        css: `.btn-primary {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-primary:hover {
    background: #6d28d9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
}`,
        js: `// No JavaScript required for basic functionality
// Add click event listeners as needed

document.querySelector('.btn-primary').addEventListener('click', function() {
    console.log('Primary button clicked!');
});`
    },

    // ====================================================================
    // TEMPLATE 2: GRADIENT BUTTON
    // ====================================================================
    btn2: {
        name: "Gradient Button",
        category: "gradient",
        html: `<button class="btn-gradient">
    Gradient Button
</button>`,
        css: `.btn-gradient {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-gradient::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn-gradient:hover::before {
    left: 100%;
}

.btn-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}`,
        js: `// Gradient button with shine effect
const gradientBtn = document.querySelector('.btn-gradient');

gradientBtn.addEventListener('mouseenter', function() {
    this.style.background = 'linear-gradient(135deg, #6d28d9, #db2777)';
});

gradientBtn.addEventListener('mouseleave', function() {
    this.style.background = 'linear-gradient(135deg, #7c3aed, #ec4899)';
});`
    },

    // ====================================================================
    // TEMPLATE 3: OUTLINE BUTTON
    // ====================================================================
    btn3: {
        name: "Outline Button",
        category: "outline",
        html: `<button class="btn-outline">
    Outline Button
</button>`,
        css: `.btn-outline {
    background: transparent;
    color: #7c3aed;
    border: 2px solid #7c3aed;
    padding: 10px 22px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-outline::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #7c3aed;
    transition: left 0.3s ease;
    z-index: -1;
}

.btn-outline:hover::before {
    left: 0;
}

.btn-outline:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
}`,
        js: `// Outline button with fill effect
const outlineBtn = document.querySelector('.btn-outline');

outlineBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});`
    },

    // ====================================================================
    // TEMPLATE 4: ANIMATED BUTTON
    // ====================================================================
    btn4: {
        name: "Animated Button",
        category: "animated",
        html: `<button class="btn-animated">
    Animated Button
</button>`,
        css: `.btn-animated {
    background: #10b981;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-animated:hover {
    background: #059669;
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.btn-animated:active {
    transform: scale(0.95);
}

.btn-animated::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-animated:active::after {
    width: 300px;
    height: 300px;
}`,
        js: `// Animated button with ripple effect
const animatedBtn = document.querySelector('.btn-animated');

animatedBtn.addEventListener('click', function(e) {
    // Ripple effect is handled in CSS
    console.log('Animated button clicked!');
});`
    },

    // ====================================================================
    // TEMPLATE 5: GLASSMORPHISM BUTTON
    // ====================================================================
    btn5: {
        name: "Glassmorphism Button",
        category: "glassmorphism",
        html: `<button class="btn-glass">
    Glass Button
</button>`,
        css: `.btn-glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: #7c3aed;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-glass::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s;
}

.btn-glass:hover::before {
    left: 100%;
}

.btn-glass:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
        js: `// Glassmorphism button with shine effect
const glassBtn = document.querySelector('.btn-glass');

glassBtn.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(255, 255, 255, 0.25)';
});

glassBtn.addEventListener('mouseleave', function() {
    this.style.background = 'rgba(255, 255, 255, 0.2)';
});`
    },

    // ====================================================================
    // TEMPLATE 6: ICON BUTTON
    // ====================================================================
    btn6: {
        name: "Icon Button",
        category: "primary",
        html: `<button class="btn-icon">
    <i class="fas fa-rocket"></i>
    Icon Button
</button>`,
        css: `.btn-icon {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-icon:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.btn-icon i {
    font-size: 14px;
    transition: transform 0.3s ease;
}

.btn-icon:hover i {
    transform: translateX(2px);
}`,
        js: `// Icon button with icon animation
const iconBtn = document.querySelector('.btn-icon');

iconBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        icon.style.transform = '';
    }, 300);
});`
    },

    // ====================================================================
    // TEMPLATE 7: DARK MODE BUTTON
    // ====================================================================
    btn7: {
        name: "Dark Mode Button",
        category: "dark",
        html: `<button class="btn-dark">
    Dark Button
</button>`,
        css: `.btn-dark {
    background: #1e293b;
    color: #f1f5f9;
    border: 2px solid #475569;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-dark::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(100, 116, 139, 0.4), transparent);
    transition: left 0.5s;
}

.btn-dark:hover::before {
    left: 100%;
}

.btn-dark:hover {
    background: #475569;
    border-color: #64748b;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(100, 116, 139, 0.3);
}`,
        js: `// Dark mode button with glow effect
const darkBtn = document.querySelector('.btn-dark');

darkBtn.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 8px 25px rgba(100, 116, 139, 0.4)';
});

darkBtn.addEventListener('mouseleave', function() {
    this.style.boxShadow = '0 8px 25px rgba(100, 116, 139, 0.3)';
});`
    },

    // ====================================================================
    // TEMPLATE 8: LOADING BUTTON
    // ====================================================================
    btn8: {
        name: "Loading Button",
        category: "animated",
        html: `<button class="btn-loading">
    <span class="btn-text">Loading</span>
    <div class="btn-spinner"></div>
</button>`,
        css: `.btn-loading {
    background: #f59e0b;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
}

.btn-loading:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
}

.btn-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    display: none;
}

.btn-loading.loading .btn-text {
    opacity: 0.7;
}

.btn-loading.loading .btn-spinner {
    display: block;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`,
        js: `// Loading button functionality
const loadingBtn = document.querySelector('.btn-loading');
const btnText = loadingBtn.querySelector('.btn-text');
const spinner = loadingBtn.querySelector('.btn-spinner');

loadingBtn.addEventListener('click', function() {
    // Show loading state
    this.classList.add('loading');
    btnText.textContent = 'Loading...';
    
    // Simulate async operation
    setTimeout(() => {
        this.classList.remove('loading');
        btnText.textContent = 'Success!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            btnText.textContent = 'Loading';
        }, 2000);
    }, 2000);
});`
    },
    // Add this to your buttonCodes object

// ====================================================================
// TEMPLATE 9: ANIMATED BORDER BUTTON
// ====================================================================
btn9: {
    name: "Animated Border Button",
    category: "animated",
    html: `<!-- From Uiverse.io by Nawsome --> 
<div class="buttons">
   <button class="btn"><span></span><p data-start="good luck!" data-text="start!" data-title="new game"></p></button>
</div>`,
    css: `/* From Uiverse.io by Nawsome */ 
.buttons {
  display: flex;
  justify-content: space-around;
}

.buttons button {
  width: 150px;
  height: 50px;
  background-color: white;
  margin: 20px;
  color: #568fa6;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.buttons button:before, .buttons button:after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #44d8a4;
  transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button:before {
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button:after {
  left: 0;
  bottom: 0;
}

.buttons button span {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.buttons button span:before, .buttons button span:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 0;
  background-color: #44d8a4;
  transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button span:before {
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button span:after {
  left: 0;
  bottom: 0;
}

.buttons button p {
  padding: 0;
  margin: 0;
  transition: all 0.4s cubic-bezier(0.35, 0.1, 0.25, 1);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons button p:before, .buttons button p:after {
  position: absolute;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.35, 0.1, 0.25, 1);
  z-index: 1;
  left: 0;
  text-align: center;
}

.buttons button p:before {
  content: attr(data-title);
  top: 50%;
  transform: translateY(-50%);
}

.buttons button p:after {
  content: attr(data-text);
  top: 150%;
  color: #44d8a4;
}

.buttons button:hover:before, .buttons button:hover:after {
  width: 100%;
}

.buttons button:hover span {
  z-index: 1;
}

.buttons button:hover span:before, .buttons button:hover span:after {
  height: 100%;
}

.buttons button:hover p:before {
  top: -50%;
  transform: rotate(5deg);
}

.buttons button:hover p:after {
  top: 50%;
  transform: translateY(-50%);
}

.buttons button.start {
  background-color: #44d8a4;
  box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.buttons button.start p:before {
  top: -50%;
  transform: rotate(5deg);
}

.buttons button.start p:after {
  color: white;
  transition: all 0s ease;
  content: attr(data-start);
  top: 50%;
  transform: translateY(-50%);
  animation: start 0.3s ease;
  animation-fill-mode: forwards;
}

@keyframes start {
  from {
    top: -50%;
  }
}

.buttons button.start:hover:before, .buttons button.start:hover:after {
  display: none;
}

.buttons button.start:hover span {
  display: none;
}

.buttons button:active {
  outline: none;
  border: none;
}

.buttons button:focus {
  outline: 0;
}`,
    js: `// Animated border button functionality
const animatedBtn = document.querySelector('.buttons .btn');

animatedBtn.addEventListener('click', function() {
    // Add start class for click animation
    this.classList.add('start');
    
    // Remove start class after animation completes
    setTimeout(() => {
        this.classList.remove('start');
    }, 1000);
    
    console.log('Animated border button clicked!');
});`
},
};

// ====================================================================
// MAIN FUNCTIONALITY - BUTTON TEMPLATES GALLERY
// ====================================================================

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
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (buttonCodes[templateId]) {
                currentTemplate = buttonCodes[templateId];
                
                // Update code content
                htmlCode.querySelector('code').textContent = currentTemplate.html;
                cssCode.querySelector('code').textContent = currentTemplate.css;
                jsCode.querySelector('code').textContent = currentTemplate.js;
                
                // Reset to HTML tab and hide notification
                showTab('html');
                copyNotification.style.display = 'none';
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        copyNotification.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            copyNotification.style.display = 'none';
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

    // Copy code to clipboard
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
});