// Checkbox templates data
const templateCodes = {
    // ====================================================================
    // TEMPLATE 1:  Modern Checkbox 
    // ====================================================================
    checkbox1: {
        name: "Modern Checkbox",
        category: "modern",
        html: `<div class="checkbox-container">
    <label class="checkbox-modern">
        <input type="checkbox">
        <span class="checkmark"></span>
        Option 1
    </label>
    <label class="checkbox-modern">
        <input type="checkbox" checked>
        <span class="checkmark"></span>
        Option 2
    </label>
    <label class="checkbox-modern">
        <input type="checkbox">
        <span class="checkmark"></span>
        Option 3
    </label>
</div>`,
        css: `.checkbox-modern {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 10px;
}

.checkbox-modern input {
    display: none;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: white;
}

.checkbox-modern input:checked + .checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
    animation: checkmarkPop 0.3s ease;
}

.checkbox-modern input:checked + .checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
}

@keyframes checkmarkPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`,
        js: `// Modern checkbox functionality
document.querySelectorAll('.checkbox-modern input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add your custom functionality here
        console.log('Checkbox changed:', this.checked);
    });
});`
    },
    // ====================================================================
    // TEMPLATE 2: Gradient Checkbox
    // ====================================================================
    checkbox2: {
        name: "Gradient Checkbox",
        category: "modern",
        html: `<div class="checkbox-container">
    <label class="checkbox-gradient">
        <input type="checkbox">
        <span class="gradient-checkmark"></span>
        Gradient Option 1
    </label>
    <label class="checkbox-gradient">
        <input type="checkbox" checked>
        <span class="gradient-checkmark"></span>
        Gradient Option 2
    </label>
</div>`,
        css: `.checkbox-gradient {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 10px;
}

.checkbox-gradient input {
    display: none;
}

.gradient-checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}

.checkbox-gradient input:checked + .gradient-checkmark {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-color: transparent;
}

.checkbox-gradient input:checked + .gradient-checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
}`,
        js: `// Gradient checkbox functionality
document.querySelectorAll('.checkbox-gradient input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add gradient specific functionality
        console.log('Gradient checkbox changed:', this.checked);
    });
});`
    }
};

// Main functionality for checkbox templates
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
            if (templateCodes[templateId]) {
                currentTemplate = templateCodes[templateId];
                
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
        copyNotification.style.display = 'none';
        void copyNotification.offsetWidth;
        copyNotification.style.display = 'block';
        
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000);
    }

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
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