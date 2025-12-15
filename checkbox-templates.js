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
    },
    // ====================================================================
// TEMPLATE 3: 3D Flip Checkbox
// ====================================================================
checkbox3: {
    name: "3D Flip Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-flip">
        <input type="checkbox">
        <span class="flip-box">
            <span class="flip-front">✗</span>
            <span class="flip-back">✓</span>
        </span>
        3D Flip Option
    </label>
    <label class="checkbox-3d-flip">
        <input type="checkbox" checked>
        <span class="flip-box">
            <span class="flip-front">✗</span>
            <span class="flip-back">✓</span>
        </span>
        3D Flip Checked
    </label>
</div>`,
    css: `.checkbox-3d-flip {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-flip input {
    display: none;
}

.flip-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    perspective: 1000px;
}

.flip-front, .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
}

.flip-front {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    transform: rotateY(0deg);
}

.flip-back {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    transform: rotateY(180deg);
}

.checkbox-3d-flip input:checked + .flip-box {
    transform: rotateY(180deg);
}`,
    js: `// 3D Flip checkbox functionality
document.querySelectorAll('.checkbox-3d-flip input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Flip checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 4: 3D Swing Checkbox
// ====================================================================
checkbox4: {
    name: "3D Swing Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-swing">
        <input type="checkbox">
        <span class="swing-box">
            <span class="swing-icon">→</span>
        </span>
        Swing Animation
    </label>
    <label class="checkbox-3d-swing">
        <input type="checkbox" checked>
        <span class="swing-box">
            <span class="swing-icon">→</span>
        </span>
        Swing Checked
    </label>
</div>`,
    css: `.checkbox-3d-swing {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-swing input {
    display: none;
}

.swing-box {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 15px rgba(139, 92, 246, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.swing-icon {
    color: white;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(0deg);
}

.checkbox-3d-swing input:checked + .swing-box {
    transform: rotateY(180deg) rotateZ(10deg);
    background: linear-gradient(135deg, #10b981, #059669);
}

.checkbox-3d-swing input:checked + .swing-box .swing-icon {
    transform: rotate(-180deg);
    content: '✓';
}`,
    js: `// 3D Swing checkbox functionality
document.querySelectorAll('.checkbox-3d-swing input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Swing checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 5: 3D Bounce Checkbox
// ====================================================================
checkbox5: {
    name: "3D Bounce Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-bounce">
        <input type="checkbox">
        <span class="bounce-box">
            <span class="bounce-inner"></span>
        </span>
        Bounce Effect
    </label>
    <label class="checkbox-3d-bounce">
        <input type="checkbox" checked>
        <span class="bounce-box">
            <span class="bounce-inner"></span>
        </span>
        Bounce Checked
    </label>
</div>`,
    css: `.checkbox-3d-bounce {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-bounce input {
    display: none;
}

.bounce-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.4s ease;
    background: white;
}

.bounce-inner {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 4px;
    transform: scale(0) rotate(0deg);
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
}

.checkbox-3d-bounce input:checked + .bounce-box {
    border-color: #7c3aed;
    transform: rotateY(180deg) scale(1.1);
}

.checkbox-3d-bounce input:checked + .bounce-box .bounce-inner {
    transform: scale(1) rotate(180deg);
    animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes bounceIn {
    0% { transform: scale(0) rotate(0deg); }
    50% { transform: scale(1.2) rotate(90deg); }
    100% { transform: scale(1) rotate(180deg); }
}`,
    js: `// 3D Bounce checkbox functionality
document.querySelectorAll('.checkbox-3d-bounce input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Bounce checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 6: 3D Rotate Checkbox
// ====================================================================
checkbox6: {
    name: "3D Rotate Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-rotate">
        <input type="checkbox">
        <span class="rotate-box">
            <span class="rotate-icon">○</span>
        </span>
        Rotate 3D
    </label>
    <label class="checkbox-3d-rotate">
        <input type="checkbox" checked>
        <span class="rotate-box">
            <span class="rotate-icon">○</span>
        </span>
        Rotate Checked
    </label>
</div>`,
    css: `.checkbox-3d-rotate {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-rotate input {
    display: none;
}

.rotate-box {
    width: 28px;
    height: 28px;
    margin-right: 12px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 20px rgba(245, 158, 11, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.rotate-icon {
    color: white;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.8s ease;
}

.checkbox-3d-rotate input:checked + .rotate-box {
    transform: rotate3d(1, 1, 0, 360deg) scale(1.1);
    background: linear-gradient(135deg, #10b981, #059669);
}

.checkbox-3d-rotate input:checked + .rotate-box .rotate-icon {
    transform: scale(1.2);
    content: '●';
}`,
    js: `// 3D Rotate checkbox functionality
document.querySelectorAll('.checkbox-3d-rotate input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Rotate checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 7: 3D Cube Checkbox
// ====================================================================
checkbox7: {
    name: "3D Cube Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-cube">
        <input type="checkbox">
        <span class="cube">
            <span class="cube-face cube-front">+</span>
            <span class="cube-face cube-back">✓</span>
        </span>
        Cube 3D
    </label>
    <label class="checkbox-3d-cube">
        <input type="checkbox" checked>
        <span class="cube">
            <span class="cube-face cube-front">+</span>
            <span class="cube-face cube-back">✓</span>
        </span>
        Cube Checked
    </label>
</div>`,
    css: `.checkbox-3d-cube {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-cube input {
    display: none;
}

.cube {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotateX(0deg) rotateY(0deg);
}

.cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    backface-visibility: hidden;
    border-radius: 4px;
}

.cube-front {
    background: linear-gradient(135deg, #6b7280, #4b5563);
    color: white;
    transform: translateZ(12px);
}

.cube-back {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    transform: rotateY(180deg) translateZ(12px);
}

.checkbox-3d-cube input:checked + .cube {
    transform: rotateY(180deg);
    animation: cubeRotate 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes cubeRotate {
    0% { transform: rotateY(0deg) scale(1); }
    50% { transform: rotateY(90deg) scale(1.1); }
    100% { transform: rotateY(180deg) scale(1); }
}`,
    js: `// 3D Cube checkbox functionality
document.querySelectorAll('.checkbox-3d-cube input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Cube checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 8: Neumorphism Checkbox
// ====================================================================
checkbox8: {
    name: "Neumorphism Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-neumorphism">
        <input type="checkbox">
        <span class="neuo-box"></span>
        Neumorphism Style
    </label>
    <label class="checkbox-neumorphism">
        <input type="checkbox" checked>
        <span class="neuo-box"></span>
        Neumorphism Checked
    </label>
</div>`,
    css: `.checkbox-neumorphism {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-neumorphism input {
    display: none;
}

.neuo-box {
    width: 22px;
    height: 22px;
    margin-right: 12px;
    border-radius: 8px;
    background: #f0f0f0;
    box-shadow: 
        5px 5px 10px #d9d9d9,
        -5px -5px 10px #ffffff,
        inset 0 0 0 transparent;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
}

.checkbox-neumorphism input:checked + .neuo-box {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    box-shadow: 
        0 0 0 transparent,
        inset 3px 3px 5px rgba(0, 0, 0, 0.1),
        inset -3px -3px 5px rgba(255, 255, 255, 0.1);
    animation: neuoPress 0.4s ease;
}

.checkbox-neumorphism input:checked + .neuo-box::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
}

@keyframes neuoPress {
    0% { transform: scale(1); }
    50% { transform: scale(0.9); }
    100% { transform: scale(1); }
}`,
    js: `// Neumorphism checkbox functionality
document.querySelectorAll('.checkbox-neumorphism input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Neumorphism checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 9: Glow Pulse Checkbox
// ====================================================================
checkbox9: {
    name: "Glow Pulse Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-glow">
        <input type="checkbox">
        <span class="glow-box">
            <span class="glow-core"></span>
        </span>
        Glow Pulse Effect
    </label>
    <label class="checkbox-glow">
        <input type="checkbox" checked>
        <span class="glow-box">
            <span class="glow-core"></span>
        </span>
        Glow Checked
    </label>
</div>`,
    css: `.checkbox-glow {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-glow input {
    display: none;
}

.glow-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    position: relative;
    transition: all 0.4s ease;
    background: white;
    overflow: hidden;
}

.glow-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, #7c3aed, transparent);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
}

.checkbox-glow input:checked + .glow-box {
    border-color: #7c3aed;
    box-shadow: 
        0 0 20px rgba(124, 58, 237, 0.4),
        0 0 40px rgba(124, 58, 237, 0.2);
    animation: glowPulse 2s infinite;
}

.checkbox-glow input:checked + .glow-box .glow-core {
    width: 200%;
    height: 200%;
    opacity: 1;
    animation: coreGlow 2s infinite;
}

@keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2); }
    50% { box-shadow: 0 0 30px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.3); }
}

@keyframes coreGlow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}`,
    js: `// Glow Pulse checkbox functionality
document.querySelectorAll('.checkbox-glow input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Glow Pulse checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 10: Morphing Checkbox
// ====================================================================
checkbox10: {
    name: "Morphing Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-morph">
        <input type="checkbox">
        <span class="morph-box">
            <span class="morph-line-1"></span>
            <span class="morph-line-2"></span>
        </span>
        Morphing Animation
    </label>
    <label class="checkbox-morph">
        <input type="checkbox" checked>
        <span class="morph-box">
            <span class="morph-line-1"></span>
            <span class="morph-line-2"></span>
        </span>
        Morphing Checked
    </label>
</div>`,
    css: `.checkbox-morph {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-morph input {
    display: none;
}

.morph-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: white;
    overflow: hidden;
}

.morph-line-1, .morph-line-2 {
    position: absolute;
    background: #7c3aed;
    border-radius: 2px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.morph-line-1 {
    width: 0;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
}

.morph-line-2 {
    width: 0;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
}

.checkbox-morph input:checked + .morph-box {
    border-color: #7c3aed;
    background: #7c3aed;
    transform: rotate(180deg);
}

.checkbox-morph input:checked + .morph-box .morph-line-1 {
    width: 12px;
    transform: translate(-50%, -50%) rotate(45deg);
    background: white;
}

.checkbox-morph input:checked + .morph-box .morph-line-2 {
    width: 6px;
    transform: translate(-50%, -50%) rotate(-45deg);
    background: white;
}`,
    js: `// Morphing checkbox functionality
document.querySelectorAll('.checkbox-morph input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Morphing checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 11: Liquid Fill Checkbox
// ====================================================================
checkbox11: {
    name: "Liquid Fill Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-liquid">
        <input type="checkbox">
        <span class="liquid-box">
            <span class="liquid-fill"></span>
            <span class="liquid-icon">✓</span>
        </span>
        Liquid Fill Effect
    </label>
    <label class="checkbox-liquid">
        <input type="checkbox" checked>
        <span class="liquid-box">
            <span class="liquid-fill"></span>
            <span class="liquid-icon">✓</span>
        </span>
        Liquid Checked
    </label>
</div>`,
    css: `.checkbox-liquid {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-liquid input {
    display: none;
}

.liquid-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    background: white;
    transition: border-color 0.3s ease;
}

.liquid-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-radius: 4px;
}

.liquid-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease 0.2s;
    z-index: 2;
}

.checkbox-liquid input:checked + .liquid-box {
    border-color: #7c3aed;
}

.checkbox-liquid input:checked + .liquid-box .liquid-fill {
    height: 100%;
    animation: liquidWave 0.8s ease;
}

.checkbox-liquid input:checked + .liquid-box .liquid-icon {
    opacity: 1;
}

@keyframes liquidWave {
    0% { height: 0%; border-radius: 50%; }
    50% { border-radius: 30%; }
    100% { height: 100%; border-radius: 4px; }
}`,
    js: `// Liquid Fill checkbox functionality
document.querySelectorAll('.checkbox-liquid input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Liquid Fill checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 12: Particle Explosion Checkbox
// ====================================================================
checkbox12: {
    name: "Particle Explosion Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-particle">
        <input type="checkbox">
        <span class="particle-box">
            <span class="particle-core"></span>
            <span class="particles">
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
            </span>
        </span>
        Particle Explosion
    </label>
    <label class="checkbox-particle">
        <input type="checkbox" checked>
        <span class="particle-box">
            <span class="particle-core"></span>
            <span class="particles">
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
            </span>
        </span>
        Particle Checked
    </label>
</div>`,
    css: `.checkbox-particle {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-particle input {
    display: none;
}

.particle-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    background: white;
    transition: all 0.4s ease;
    overflow: visible;
}

.particle-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #7c3aed;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease;
}

.particles {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
}

.particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #7c3aed;
    border-radius: 50%;
    opacity: 0;
}

.checkbox-particle input:checked + .particle-box {
    border-color: #7c3aed;
    background: #7c3aed;
}

.checkbox-particle input:checked + .particle-box .particle-core {
    transform: translate(-50%, -50%) scale(1);
    background: white;
    animation: corePulse 0.6s ease;
}

.checkbox-particle input:checked + .particle-box .particle:nth-child(1) { animation: particleExplode 0.8s ease 0.1s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(2) { animation: particleExplode 0.8s ease 0.2s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(3) { animation: particleExplode 0.8s ease 0.3s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(4) { animation: particleExplode 0.8s ease 0.4s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(5) { animation: particleExplode 0.8s ease 0.1s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(6) { animation: particleExplode 0.8s ease 0.2s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(7) { animation: particleExplode 0.8s ease 0.3s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(8) { animation: particleExplode 0.8s ease 0.4s; }

@keyframes corePulse {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.5); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

@keyframes particleExplode {
    0% { 
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% { 
        transform: translate(
            calc(cos(var(--angle)) * 20px),
            calc(sin(var(--angle)) * 20px)
        ) scale(0);
        opacity: 0;
    }
}

.particle:nth-child(1) { --angle: 0deg; }
.particle:nth-child(2) { --angle: 45deg; }
.particle:nth-child(3) { --angle: 90deg; }
.particle:nth-child(4) { --angle: 135deg; }
.particle:nth-child(5) { --angle: 180deg; }
.particle:nth-child(6) { --angle: 225deg; }
.particle:nth-child(7) { --angle: 270deg; }
.particle:nth-child(8) { --angle: 315deg; }`,
    js: `// Particle Explosion checkbox functionality
document.querySelectorAll('.checkbox-particle input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Particle Explosion checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 13: Toggle Switch Group
// ====================================================================
checkbox13: {
    name: "Toggle Switch Group",
    category: "modern",
    html: `<div class="toggle-group">
    <h4>Notification Settings</h4>
    <label class="toggle-item">
        <span class="toggle-label">Email Notifications</span>
        <input type="checkbox">
        <span class="toggle-slider"></span>
    </label>
    <label class="toggle-item">
        <span class="toggle-label">Push Notifications</span>
        <input type="checkbox" checked>
        <span class="toggle-slider"></span>
    </label>
    <label class="toggle-item">
        <span class="toggle-label">SMS Alerts</span>
        <input type="checkbox">
        <span class="toggle-slider"></span>
    </label>
    <label class="toggle-item">
        <span class="toggle-label">Desktop Notifications</span>
        <input type="checkbox" checked>
        <span class="toggle-slider"></span>
    </label>
</div>`,
    css: `.toggle-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.toggle-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.toggle-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
    cursor: pointer;
}

.toggle-item:last-child {
    border-bottom: none;
}

.toggle-label {
    font-size: 14px;
    color: #475569;
    font-weight: 500;
}

.toggle-item input {
    display: none;
}

.toggle-slider {
    width: 44px;
    height: 24px;
    background: #cbd5e1;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s ease;
}

.toggle-slider::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-item input:checked + .toggle-slider {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
}

.toggle-item input:checked + .toggle-slider::before {
    transform: translateX(20px);
}`,
    js: `// Toggle switch functionality
document.querySelectorAll('.toggle-item input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        const label = this.closest('.toggle-item').querySelector('.toggle-label').textContent;
        console.log(\`\${label}: \${this.checked ? 'ON' : 'OFF'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 14: Radio Button Group
// ====================================================================
checkbox14: {
    name: "Radio Button Group",
    category: "modern",
    html: `<div class="radio-group">
    <h4>Select Payment Method</h4>
    <label class="radio-item">
        <input type="radio" name="payment" value="credit-card">
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">Credit Card</span>
            <span class="radio-desc">Pay with your credit card</span>
        </span>
    </label>
    <label class="radio-item">
        <input type="radio" name="payment" value="paypal" checked>
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">PayPal</span>
            <span class="radio-desc">Secure online payment</span>
        </span>
    </label>
    <label class="radio-item">
        <input type="radio" name="payment" value="bank-transfer">
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">Bank Transfer</span>
            <span class="radio-desc">Direct bank transfer</span>
        </span>
    </label>
    <label class="radio-item">
        <input type="radio" name="payment" value="crypto">
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">Cryptocurrency</span>
            <span class="radio-desc">Pay with Bitcoin/ETH</span>
        </span>
    </label>
</div>`,
    css: `.radio-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.radio-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.radio-item {
    display: flex;
    align-items: flex-start;
    padding: 15px;
    border: 2px solid #f1f5f9;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.radio-item:last-child {
    margin-bottom: 0;
}

.radio-item:hover {
    border-color: #cbd5e1;
}

.radio-item input {
    display: none;
}

.radio-custom {
    width: 20px;
    height: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    margin-right: 12px;
    margin-top: 2px;
    position: relative;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.radio-content {
    flex: 1;
}

.radio-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
}

.radio-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.radio-item input:checked + .radio-custom {
    border-color: #7c3aed;
    background: #7c3aed;
}

.radio-item input:checked + .radio-custom::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.radio-item input:checked ~ .radio-content .radio-title {
    color: #7c3aed;
}

.radio-item input:checked {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.05);
}`,
    js: `// Radio button functionality
document.querySelectorAll('.radio-item input').forEach(radio => {
    radio.addEventListener('change', function() {
        console.log(\`Selected payment method: \${this.value}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 15: Checkbox Card Group
// ====================================================================
checkbox15: {
    name: "Checkbox Card Group",
    category: "modern",
    html: `<div class="card-group">
    <h4>Select Features</h4>
    <label class="card-item">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">🚀</div>
            <div class="card-text">
                <span class="card-title">Premium Support</span>
                <span class="card-desc">24/7 priority support</span>
            </div>
        </div>
    </label>
    <label class="card-item">
        <input type="checkbox" checked>
        <div class="card-content">
            <div class="card-icon">🛡️</div>
            <div class="card-text">
                <span class="card-title">Advanced Security</span>
                <span class="card-desc">Enhanced protection</span>
            </div>
        </div>
    </label>
    <label class="card-item">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">📊</div>
            <div class="card-text">
                <span class="card-title">Analytics Dashboard</span>
                <span class="card-desc">Detailed insights</span>
            </div>
        </div>
    </label>
    <label class="card-item">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">🌐</div>
            <div class="card-text">
                <span class="card-title">Multi-language</span>
                <span class="card-desc">15+ languages</span>
            </div>
        </div>
    </label>
</div>`,
    css: `.card-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.card-item {
    display: block;
    border: 2px solid #f1f5f9;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
}

.card-item:last-child {
    margin-bottom: 0;
}

.card-item:hover {
    border-color: #cbd5e1;
    transform: translateY(-2px);
}

.card-item input {
    display: none;
}

.card-content {
    display: flex;
    align-items: center;
    padding: 15px;
}

.card-icon {
    font-size: 24px;
    margin-right: 15px;
    transition: all 0.3s ease;
}

.card-text {
    flex: 1;
}

.card-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
}

.card-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.card-item input:checked + .card-content {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
}

.card-item input:checked + .card-content .card-icon {
    transform: scale(1.1);
}

.card-item input:checked + .card-content .card-title,
.card-item input:checked + .card-content .card-desc {
    color: white;
}`,
    js: `// Card checkbox functionality
document.querySelectorAll('.card-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const title = this.closest('.card-item').querySelector('.card-title').textContent;
        console.log(\`\${title}: \${this.checked ? 'Selected' : 'Deselected'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 16: Multi-step Checkbox
// ====================================================================
checkbox16: {
    name: "Multi-step Checkbox",
    category: "animated",
    html: `<div class="multi-step-group">
    <h4>Setup Progress</h4>
    <label class="step-item">
        <input type="checkbox">
        <span class="step-number">1</span>
        <span class="step-content">
            <span class="step-title">Account Created</span>
            <span class="step-desc">Basic information setup</span>
        </span>
        <span class="step-check">✓</span>
    </label>
    <label class="step-item">
        <input type="checkbox" checked>
        <span class="step-number">2</span>
        <span class="step-content">
            <span class="step-title">Profile Completed</span>
            <span class="step-desc">Personal details added</span>
        </span>
        <span class="step-check">✓</span>
    </label>
    <label class="step-item">
        <input type="checkbox">
        <span class="step-number">3</span>
        <span class="step-content">
            <span class="step-title">Verification Done</span>
            <span class="step-desc">Email & phone verified</span>
        </span>
        <span class="step-check">✓</span>
    </label>
    <label class="step-item">
        <input type="checkbox">
        <span class="step-number">4</span>
        <span class="step-content">
            <span class="step-title">Preferences Set</span>
            <span class="step-desc">Custom settings applied</span>
        </span>
        <span class="step-check">✓</span>
    </label>
</div>`,
    css: `.multi-step-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.multi-step-group h4 {
    margin: 0 0 20px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.step-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border: 2px solid #f1f5f9;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.step-item:last-child {
    margin-bottom: 0;
}

.step-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transition: width 0.3s ease;
    z-index: 1;
}

.step-item input {
    display: none;
}

.step-number {
    width: 30px;
    height: 30px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    margin-right: 15px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.step-content {
    flex: 1;
    position: relative;
    z-index: 2;
}

.step-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
    transition: all 0.3s ease;
}

.step-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
    transition: all 0.3s ease;
}

.step-check {
    opacity: 0;
    color: white;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.step-item input:checked + .step-number {
    background: white;
    border-color: white;
    color: #7c3aed;
    transform: scale(1.1);
}

.step-item input:checked ~ .step-content .step-title,
.step-item input:checked ~ .step-content .step-desc {
    color: white;
}

.step-item input:checked ~ .step-check {
    opacity: 1;
    transform: scale(1.2);
}

.step-item input:checked::before {
    width: 100%;
}`,
    js: `// Multi-step checkbox functionality
document.querySelectorAll('.step-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const step = this.closest('.step-item').querySelector('.step-title').textContent;
        console.log(\`\${step}: \${this.checked ? 'Completed' : 'Incomplete'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 17: Filter Tag Group
// ====================================================================
checkbox17: {
    name: "Filter Tag Group",
    category: "modern",
    html: `<div class="filter-group">
    <h4>Filter by Category</h4>
    <div class="filter-tags">
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Technology</span>
                <span class="tag-count">12</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox" checked>
            <span class="tag-content">
                <span class="tag-text">Design</span>
                <span class="tag-count">8</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Marketing</span>
                <span class="tag-count">15</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Business</span>
                <span class="tag-count">6</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox" checked>
            <span class="tag-content">
                <span class="tag-text">Development</span>
                <span class="tag-count">20</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Finance</span>
                <span class="tag-count">9</span>
            </span>
        </label>
    </div>
</div>`,
    css: `.filter-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.filter-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.filter-tag {
    cursor: pointer;
}

.filter-tag input {
    display: none;
}

.tag-content {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 20px;
    background: #f8fafc;
    transition: all 0.3s ease;
    font-size: 13px;
    font-weight: 500;
}

.tag-text {
    color: #475569;
    margin-right: 8px;
    transition: all 0.3s ease;
}

.tag-count {
    background: #e2e8f0;
    color: #64748b;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.filter-tag input:checked + .tag-content {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-color: transparent;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.filter-tag input:checked + .tag-content .tag-text {
    color: white;
}

.filter-tag input:checked + .tag-content .tag-count {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

.filter-tag:hover .tag-content {
    border-color: #cbd5e1;
    transform: translateY(-1px);
}`,
    js: `// Filter tag functionality
document.querySelectorAll('.filter-tag input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const tag = this.closest('.filter-tag').querySelector('.tag-text').textContent;
        console.log(\`\${tag} filter: \${this.checked ? 'Applied' : 'Removed'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 18: Animated Lock Toggle
// ====================================================================
checkbox18: {
    name: "Animated Lock Toggle",
    category: "animated",
    html: `<div class="lock-container">
    <input id="lockToggle" type="checkbox">
    <label class="btn-lock" for="lockToggle">
        <svg width="36" height="40" viewBox="0 0 36 40">
            <path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
            <path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
            <path class="bling" d="M29 20L31 22"></path>
            <path class="bling" d="M31.5 15H34.5"></path>
            <path class="bling" d="M29 10L31 8"></path>
        </svg>
    </label>
    <span class="lock-status">Locked</span>
</div>`,
    css: `.lock-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.btn-lock {
    display: inline-block;
    background: #ff5b5b;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    padding: 12px 0 0 18px;
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.3s ease;
}

.btn-lock svg {
    fill: none;
    transform: translate3d(0, 0, 0);
}

.btn-lock svg .bling {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-dasharray: 3;
    stroke-dashoffset: 15;
    transition: all 0.3s ease;
}

.btn-lock svg .lock {
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 36;
    transition: all 0.4s ease;
}

.btn-lock svg .lockb {
    fill: #fff;
    fill-rule: evenodd;
    clip-rule: evenodd;
    transform: rotate(8deg);
    transform-origin: 14px 20px;
    transition: all 0.2s ease;
}

#lockToggle {
    display: none;
}

.lock-status {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    transition: all 0.3s ease;
}

#lockToggle:checked + .btn-lock {
    background: #20cca5;
}

#lockToggle:checked + .btn-lock svg {
    opacity: 1;
}

#lockToggle:checked + .btn-lock svg .bling {
    animation: bling6132 0.3s linear forwards;
    animation-delay: 0.2s;
}

#lockToggle:checked + .btn-lock svg .lock {
    stroke-dasharray: 48;
    animation: locked 0.3s linear forwards;
}

#lockToggle:checked + .btn-lock svg .lockb {
    transform: rotate(0);
    transform-origin: 14px 22px;
}

#lockToggle:checked ~ .lock-status {
    color: #20cca5;
    content: 'Unlocked';
}

@keyframes bling6132 {
    50% {
        stroke-dasharray: 3;
        stroke-dashoffset: 12;
    }
    100% {
        stroke-dasharray: 3;
        stroke-dashoffset: 9;
    }
}

@keyframes locked {
    50% {
        transform: translateY(1px);
    }
}`,
    js: `// Lock toggle functionality
document.getElementById('lockToggle')?.addEventListener('change', function() {
    const status = document.querySelector('.lock-status');
    if (status) {
        status.textContent = this.checked ? 'Unlocked' : 'Locked';
    }
    console.log('Lock status:', this.checked ? 'Unlocked' : 'Locked');
});`
},
// ====================================================================
// TEMPLATE 19: Heart Like Toggle
// ====================================================================
checkbox19: {
    name: "Heart Like Toggle",
    category: "animated",
    html: `<div class="heart-container">
    <input id="heartToggle" type="checkbox">
    <label class="heart-btn" for="heartToggle">
        <svg class="heart-svg" viewBox="0 0 24 24">
            <path class="heart-outline" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            <path class="heart-filled" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
        </svg>
    </label>
    <span class="heart-count">0</span>
</div>`,
    css: `.heart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.heart-btn {
    width: 60px;
    height: 60px;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.heart-svg {
    width: 32px;
    height: 32px;
}

.heart-outline {
    fill: #94a3b8;
    transition: all 0.3s ease;
}

.heart-filled {
    fill: #ef4444;
    transform: scale(0);
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.heart-count {
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
}

#heartToggle {
    display: none;
}

#heartToggle:checked + .heart-btn {
    background: rgba(239, 68, 68, 0.1);
}

#heartToggle:checked + .heart-btn .heart-outline {
    fill: transparent;
}

#heartToggle:checked + .heart-btn .heart-filled {
    transform: scale(1);
    animation: heartBeat 0.6s ease;
}

@keyframes heartBeat {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`,
    js: `// Heart like functionality
let likeCount = 0;
document.getElementById('heartToggle')?.addEventListener('change', function() {
    const countElement = document.querySelector('.heart-count');
    if (countElement) {
        likeCount = this.checked ? likeCount + 1 : Math.max(0, likeCount - 1);
        countElement.textContent = likeCount;
    }
    console.log('Liked:', this.checked);
});`
},
// ====================================================================
// TEMPLATE 20: Star Rating
// ====================================================================
checkbox20: {
    name: "Star Rating",
    category: "modern",
    html: `<div class="star-rating">
    <h4>Rate this product</h4>
    <div class="stars">
        <input type="radio" id="star5" name="rating" value="5">
        <label for="star5">★</label>
        <input type="radio" id="star4" name="rating" value="4">
        <label for="star4">★</label>
        <input type="radio" id="star3" name="rating" value="3">
        <label for="star3">★</label>
        <input type="radio" id="star2" name="rating" value="2">
        <label for="star2">★</label>
        <input type="radio" id="star1" name="rating" value="1">
        <label for="star1">★</label>
    </div>
    <div class="rating-text">Select rating</div>
</div>`,
    css: `.star-rating {
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.star-rating h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.stars {
    direction: rtl;
    display: inline-block;
}

.stars input {
    display: none;
}

.stars label {
    color: #cbd5e1;
    font-size: 40px;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.stars label:hover,
.stars label:hover ~ label {
    color: #fbbf24;
}

.stars input:checked ~ label {
    color: #fbbf24;
}

.rating-text {
    margin-top: 10px;
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
    transition: all 0.3s ease;
}

.stars input:checked + label ~ .rating-text {
    color: #f59e0b;
}`,
    js: `// Star rating functionality
document.querySelectorAll('.stars input').forEach(star => {
    star.addEventListener('change', function() {
        const ratingText = document.querySelector('.rating-text');
        const ratings = {
            '1': 'Poor',
            '2': 'Fair',
            '3': 'Good',
            '4': 'Very Good',
            '5': 'Excellent'
        };
        if (ratingText) {
            ratingText.textContent = ratings[this.value] || 'Select rating';
        }
        console.log('Rating:', this.value + ' stars');
    });
});`
},
// ====================================================================
// TEMPLATE 21: Slider Toggle
// ====================================================================
checkbox21: {
    name: "Slider Toggle",
    category: "animated",
    html: `<div class="slider-toggle">
    <input id="sliderSwitch" type="checkbox">
    <label class="slider-label" for="sliderSwitch">
        <span class="slider-track">
            <span class="slider-thumb"></span>
        </span>
        <span class="slider-icons">
            <span class="icon-off">🌙</span>
            <span class="icon-on">☀️</span>
        </span>
    </label>
    <span class="slider-text">Dark Mode</span>
</div>`,
    css: `.slider-toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.slider-label {
    position: relative;
    display: block;
    width: 80px;
    height: 40px;
    cursor: pointer;
}

.slider-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #475569, #1e293b);
    border-radius: 20px;
    transition: all 0.4s ease;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
}

.slider-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 2;
}

.slider-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    z-index: 1;
}

.icon-off, .icon-on {
    font-size: 18px;
    transition: all 0.3s ease;
}

.icon-off {
    opacity: 1;
}

.icon-on {
    opacity: 0.5;
}

.slider-text {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    transition: all 0.3s ease;
}

#sliderSwitch {
    display: none;
}

#sliderSwitch:checked + .slider-label .slider-track {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

#sliderSwitch:checked + .slider-label .slider-thumb {
    transform: translateX(40px);
    background: white;
}

#sliderSwitch:checked + .slider-label .icon-off {
    opacity: 0.5;
}

#sliderSwitch:checked + .slider-label .icon-on {
    opacity: 1;
}

#sliderSwitch:checked ~ .slider-text {
    color: #f59e0b;
    content: 'Light Mode';
}`,
    js: `// Slider toggle functionality
document.getElementById('sliderSwitch')?.addEventListener('change', function() {
    const text = document.querySelector('.slider-text');
    if (text) {
        text.textContent = this.checked ? 'Light Mode' : 'Dark Mode';
    }
    console.log('Mode:', this.checked ? 'Light' : 'Dark');
});`
},
// ====================================================================
// TEMPLATE 22: Circular Progress Toggle
// ====================================================================
checkbox22: {
    name: "Circular Progress Toggle",
    category: "animated",
    html: `<div class="circle-toggle">
    <input id="circleSwitch" type="checkbox">
    <label class="circle-label" for="circleSwitch">
        <svg class="circle-svg" width="80" height="80">
            <circle class="circle-bg" cx="40" cy="40" r="36"></circle>
            <circle class="circle-progress" cx="40" cy="40" r="36"></circle>
            <circle class="circle-indicator" cx="40" cy="40" r="30"></circle>
            <text class="circle-text" x="40" y="45" text-anchor="middle">OFF</text>
        </svg>
    </label>
</div>`,
    css: `.circle-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-label {
    cursor: pointer;
    transition: all 0.3s ease;
}

.circle-svg {
    transform: rotate(-90deg);
}

.circle-bg {
    fill: none;
    stroke: #e2e8f0;
    stroke-width: 4;
}

.circle-progress {
    fill: none;
    stroke: #7c3aed;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 226;
    stroke-dashoffset: 226;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.circle-indicator {
    fill: white;
    stroke: #7c3aed;
    stroke-width: 2;
    transition: all 0.4s ease;
}

.circle-text {
    fill: #64748b;
    font-size: 12px;
    font-weight: 600;
    text-anchor: middle;
    transform: rotate(90deg);
    transform-origin: 40px 40px;
    transition: all 0.3s ease;
}

#circleSwitch {
    display: none;
}

#circleSwitch:checked + .circle-label .circle-progress {
    stroke-dashoffset: 0;
    stroke: #10b981;
}

#circleSwitch:checked + .circle-label .circle-indicator {
    stroke: #10b981;
    fill: #10b981;
}

#circleSwitch:checked + .circle-label .circle-text {
    fill: #10b981;
    content: 'ON';
}`,
    js: `// Circular toggle functionality
document.getElementById('circleSwitch')?.addEventListener('change', function() {
    const text = document.querySelector('.circle-text');
    if (text) {
        text.textContent = this.checked ? 'ON' : 'OFF';
    }
    console.log('Circle toggle:', this.checked ? 'ON' : 'OFF');
});`
},
// ====================================================================
// TEMPLATE 23: Glassmorphism Checkbox
// ====================================================================
checkbox23: {
    name: "Glassmorphism Checkbox",
    category: "modern",
    html: `<div class="glass-checkbox-container">
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-checkmark">
            <span class="glass-icon">✓</span>
        </span>
        <span class="glass-label">Glass Effect Option</span>
    </label>
    <label class="checkbox-glass">
        <input type="checkbox" checked>
        <span class="glass-checkmark">
            <span class="glass-icon">✓</span>
        </span>
        <span class="glass-label">Glass Checked Option</span>
    </label>
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-checkmark">
            <span class="glass-icon">✓</span>
        </span>
        <span class="glass-label">Premium Feature</span>
    </label>
</div>`,
    css: `.glass-checkbox-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 25px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    max-width: 320px;
}

.checkbox-glass {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    padding: 12px 15px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.checkbox-glass:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(8px);
}

.checkbox-glass input {
    display: none;
}

.glass-checkmark {
    width: 26px;
    height: 26px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    margin-right: 15px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.glass-icon {
    color: transparent;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.glass-label {
    font-size: 14px;
    color: white;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.checkbox-glass input:checked + .glass-checkmark {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(236, 72, 153, 0.8));
    border-color: transparent;
    box-shadow: 
        0 4px 20px rgba(124, 58, 237, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: scale(1.1) rotate(5deg);
    animation: glassPulse 0.6s ease;
}

.checkbox-glass input:checked + .glass-checkmark .glass-icon {
    color: white;
    transform: scale(1.2);
}

@keyframes glassPulse {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1.1) rotate(5deg); }
}

/* Dark background for glass effect */
body .live-preview-mini {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,
    js: `// Glassmorphism checkbox functionality
document.querySelectorAll('.checkbox-glass input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-glass').querySelector('.glass-label').textContent;
        console.log(\`Glass checkbox "\${label}": \${this.checked ? 'Checked' : 'Unchecked'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 24: Cyberpunk Neon Checkbox
// ====================================================================
checkbox24: {
    name: "Cyberpunk Neon Checkbox",
    category: "animated",
    html: `<div class="cyberpunk-container">
    <label class="checkbox-cyberpunk">
        <input type="checkbox">
        <span class="cyber-checkmark"></span>
        <span class="cyber-label">SYSTEM ONLINE</span>
    </label>
    <label class="checkbox-cyberpunk">
        <input type="checkbox" checked>
        <span class="cyber-checkmark"></span>
        <span class="cyber-label">NEURAL LINK</span>
    </label>
    <label class="checkbox-cyberpunk">
        <input type="checkbox">
        <span class="cyber-checkmark"></span>
        <span class="cyber-label">AUGMENTATION</span>
    </label>
</div>`,
    css: `/* Cyberpunk Background */
.cyberpunk-container {
    background: #0a0a0a;
    padding: 25px;
    border: 1px solid #00ffff;
    position: relative;
    overflow: hidden;
}

.cyberpunk-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff00ff, transparent);
    animation: scanLine 2s linear infinite;
}

@keyframes scanLine {
    0% { left: -100%; }
    100% { left: 100%; }
}

.checkbox-cyberpunk {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #00ffff;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.checkbox-cyberpunk:hover {
    box-shadow: 0 0 20px #00ffff;
    transform: translateY(-3px);
}

.checkbox-cyberpunk input {
    display: none;
}

.cyber-checkmark {
    width: 22px;
    height: 22px;
    border: 2px solid #ff00ff;
    margin-right: 15px;
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
}

.cyber-checkmark::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: #00ffff;
    transition: transform 0.3s ease;
    box-shadow: 0 0 15px #00ffff;
}

.cyber-label {
    font-size: 13px;
    color: #00ffff;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 8px #00ffff;
}

.checkbox-cyberpunk input:checked + .cyber-checkmark {
    border-color: #00ffff;
    box-shadow: 0 0 15px #00ffff;
    animation: cyberPulse 0.5s ease;
}

.checkbox-cyberpunk input:checked + .cyber-checkmark::before {
    transform: translate(-50%, -50%) scale(1);
    animation: innerGlow 1s infinite alternate;
}

.checkbox-cyberpunk input:checked ~ .cyber-label {
    color: #ff00ff;
    text-shadow: 0 0 15px #ff00ff;
    animation: textGlitch 0.5s ease;
}

@keyframes cyberPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes innerGlow {
    0% { box-shadow: 0 0 10px #00ffff; }
    100% { box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff; }
}

@keyframes textGlitch {
    0% { transform: translateX(0); opacity: 1; }
    20% { transform: translateX(-3px); opacity: 0.8; }
    40% { transform: translateX(3px); opacity: 1; }
    60% { transform: translateX(-2px); opacity: 0.9; }
    80% { transform: translateX(2px); opacity: 1; }
    100% { transform: translateX(0); opacity: 1; }
}

/* Live preview background */
body .live-preview-mini.cyberpunk-bg {
    background: linear-gradient(45deg, #0a0a0a, #1a1a2e) !important;
}`,
    js: `// Cyberpunk checkbox functionality
document.querySelectorAll('.checkbox-cyberpunk input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-cyberpunk').querySelector('.cyber-label').textContent;
        console.log(\`[\${this.checked ? '✓' : '✗'}] CYBERPUNK: \${label} - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
        
        // Add cyberpunk sound effect simulation
        if(this.checked) {
            console.log('🔊 BEEP! System activated');
        }
    });
});`
},
// ====================================================================
// TEMPLATE 25: Minimalist Dot Checkbox
// ====================================================================
checkbox25: {
    name: "Minimalist Dot Checkbox",
    category: "modern",
    html: `<div class="minimalist-container">
    <label class="checkbox-minimalist">
        <input type="checkbox">
        <span class="dot-checkmark"></span>
        <span class="minimalist-label">Clean Design</span>
    </label>
    <label class="checkbox-minimalist">
        <input type="checkbox" checked>
        <span class="dot-checkmark"></span>
        <span class="minimalist-label">Minimal Aesthetic</span>
    </label>
    <label class="checkbox-minimalist">
        <input type="checkbox">
        <span class="dot-checkmark"></span>
        <span class="minimalist-label">Simple Interface</span>
    </label>
</div>`,
    css: `.minimalist-container {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    max-width: 320px;
    border: 1px solid #f3f4f6;
}

.checkbox-minimalist {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
}

.checkbox-minimalist:hover {
    background: #f9fafb;
    border-color: #e5e7eb;
    transform: translateX(8px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.checkbox-minimalist input {
    display: none;
}

.dot-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    margin-right: 18px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: white;
}

.dot-checkmark::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: #1f2937;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.minimalist-label {
    font-size: 15px;
    color: #6b7280;
    font-weight: 500;
    letter-spacing: -0.3px;
    transition: all 0.3s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.checkbox-minimalist input:checked + .dot-checkmark {
    border-color: #1f2937;
    background: #1f2937;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(31, 41, 55, 0.2);
}

.checkbox-minimalist input:checked + .dot-checkmark::before {
    transform: translate(-50%, -50%) scale(1);
    background: white;
    animation: minimalistPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-minimalist input:checked ~ .minimalist-label {
    color: #1f2937;
    font-weight: 600;
}

@keyframes minimalistPop {
    0% { 
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    50% { 
        transform: translate(-50%, -50%) scale(1.4);
        opacity: 1;
    }
    100% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}

/* Hover effect for dot */
.checkbox-minimalist:hover .dot-checkmark {
    border-color: #9ca3af;
}

.checkbox-minimalist:hover .minimalist-label {
    color: #4b5563;
}`,
    js: `// Minimalist checkbox functionality
document.querySelectorAll('.checkbox-minimalist input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-minimalist').querySelector('.minimalist-label').textContent;
        console.log(\`Minimalist: "\${label}" - \${this.checked ? 'Selected' : 'Deselected'}\`);
        
        // Add minimalist sound effect simulation
        if(this.checked) {
            console.log('🔘 Click! Option selected');
        }
    });
});`
},
// ====================================================================
// TEMPLATE 26: Gradient Border Checkbox
// ====================================================================
checkbox26: {
    name: "Gradient Border Checkbox",
    category: "animated",
    html: `<div class="gradient-border-container">
    <label class="checkbox-gradient-border">
        <input type="checkbox">
        <span class="gradient-border-checkmark"></span>
        <span class="gradient-border-label">Rainbow Border</span>
    </label>
    <label class="checkbox-gradient-border">
        <input type="checkbox" checked>
        <span class="gradient-border-checkmark"></span>
        <span class="gradient-border-label">Gradient Flow</span>
    </label>
    <label class="checkbox-gradient-border">
        <input type="checkbox">
        <span class="gradient-border-checkmark"></span>
        <span class="gradient-border-label">Color Spectrum</span>
    </label>
</div>`,
    css: `.gradient-border-container {
    background: #0f172a;
    padding: 30px;
    border-radius: 20px;
    max-width: 320px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.gradient-border-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    border-radius: 22px;
    z-index: 0;
    animation: borderRotate 3s linear infinite;
    filter: blur(2px);
    opacity: 0.5;
}

@keyframes borderRotate {
    0% { background-position: 0% 50%; transform: rotate(0deg); }
    50% { background-position: 100% 50%; transform: rotate(180deg); }
    100% { background-position: 0% 50%; transform: rotate(360deg); }
}

.checkbox-gradient-border {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 18px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 2;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.checkbox-gradient-border:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.checkbox-gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: gradientFlow 4s linear infinite;
}

@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.checkbox-gradient-border input {
    display: none;
}

.gradient-border-checkmark {
    width: 26px;
    height: 26px;
    border: 2px solid #475569;
    border-radius: 8px;
    margin-right: 18px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 2;
    backdrop-filter: blur(5px);
}

.gradient-border-checkmark::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.gradient-border-label {
    font-size: 15px;
    color: #e2e8f0;
    font-weight: 500;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.checkbox-gradient-border input:checked + .gradient-border-checkmark {
    border-color: transparent;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
    animation: checkmarkSpin 0.6s ease;
}

.checkbox-gradient-border input:checked + .gradient-border-checkmark::before {
    color: white;
    transform: translate(-50%, -50%) scale(1.2);
}

.checkbox-gradient-border input:checked ~ .gradient-border-label {
    color: white;
    text-shadow: 0 2px 10px rgba(124, 58, 237, 0.5);
    font-weight: 600;
}

.checkbox-gradient-border input:checked::before {
    opacity: 1;
}

@keyframes checkmarkSpin {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    100% { transform: scale(1.1) rotate(15deg); }
}`,
    js: `// Gradient Border checkbox functionality
document.querySelectorAll('.checkbox-gradient-border input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-gradient-border').querySelector('.gradient-border-label').textContent;
        console.log(\`Gradient Border: "\${label}" - \${this.checked ? 'ACTIVE' : 'INACTIVE'}\`);
        
        // Add visual feedback
        const container = this.closest('.checkbox-gradient-border');
        if(this.checked) {
            container.style.background = 'rgba(124, 58, 237, 0.1)';
            setTimeout(() => {
                container.style.background = '';
            }, 300);
        }
    });
});`
},
// ====================================================================
// TEMPLATE 27: Retro CRT Checkbox
// ====================================================================
checkbox27: {
    name: "Retro CRT Checkbox",
    category: "animated",
    html: `<div class="retro-crt-container">
    <div class="crt-header">
        <span class="crt-title">SYSTEM CONTROL v1.0</span>
        <span class="crt-status">[ONLINE]</span>
    </div>
    <div class="crt-body">
        <label class="checkbox-retro">
            <input type="checkbox">
            <span class="retro-checkmark">[ ]</span>
            <span class="retro-label">MAINFRAME BOOT</span>
            <span class="retro-status">READY</span>
        </label>
        <label class="checkbox-retro">
            <input type="checkbox" checked>
            <span class="retro-checkmark">[X]</span>
            <span class="retro-label">DISK DRIVE A:</span>
            <span class="retro-status">ACTIVE</span>
        </label>
        <label class="checkbox-retro">
            <input type="checkbox">
            <span class="retro-checkmark">[ ]</span>
            <span class="retro-label">NETWORK PROTOCOL</span>
            <span class="retro-status">OFFLINE</span>
        </label>
    </div>
    <div class="crt-footer">
        <span class="crt-prompt">&gt; SYSTEM READY</span>
    </div>
</div>`,
    css: `/* Retro CRT Container */
.retro-crt-container {
    background: rgba(0, 40, 0, 0.9);
    padding: 20px;
    border: 3px solid #00ff00;
    box-shadow: 
        inset 0 0 20px #00ff00,
        0 0 30px #00ff00;
    position: relative;
    overflow: hidden;
    max-width: 350px;
    font-family: 'Courier New', monospace;
}

.retro-crt-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 4px, 6px 100%;
    pointer-events: none;
    animation: crtScan 8s linear infinite;
}

@keyframes crtScan {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 0 200px, 0 0; }
}

/* CRT Header */
.crt-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #00aa00;
}

.crt-title {
    color: #00ff00;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff00;
    letter-spacing: 1px;
}

.crt-status {
    color: #00ff00;
    font-size: 12px;
    animation: statusBlink 2s infinite;
}

@keyframes statusBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* CRT Body */
.crt-body {
    margin-bottom: 20px;
}

.checkbox-retro {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    padding: 12px 15px;
    background: rgba(0, 20, 0, 0.8);
    border: 1px solid #00aa00;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.checkbox-retro:hover {
    background: rgba(0, 40, 0, 0.9);
    box-shadow: 0 0 15px #00ff00;
    transform: translateX(5px);
}

.checkbox-retro::before {
    content: '>';
    position: absolute;
    left: 5px;
    color: #00ff00;
    opacity: 0;
    animation: cursorBlink 1s infinite;
}

.checkbox-retro:hover::before {
    opacity: 1;
}

.checkbox-retro input {
    display: none;
}

.retro-checkmark {
    margin-right: 15px;
    color: #00ff00;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff00;
    transition: all 0.3s ease;
    min-width: 30px;
}

.retro-label {
    font-size: 13px;
    color: #00ff00;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 0 0 5px #00ff00;
    text-transform: uppercase;
    transition: all 0.3s ease;
    flex: 1;
}

.retro-status {
    font-size: 11px;
    color: #00aa00;
    padding: 2px 8px;
    background: rgba(0, 40, 0, 0.8);
    border: 1px solid #00aa00;
    transition: all 0.3s ease;
}

.checkbox-retro input:checked + .retro-checkmark {
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00;
    animation: retroGlitch 0.5s ease;
}

.checkbox-retro input:checked ~ .retro-label {
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00;
}

.checkbox-retro input:checked ~ .retro-status {
    color: #ffff00;
    border-color: #ffff00;
    background: rgba(255, 255, 0, 0.1);
    animation: statusPulse 1s infinite;
}

@keyframes cursorBlink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

@keyframes retroGlitch {
    0% { transform: translateX(0) scale(1); }
    25% { transform: translateX(-3px) scale(1.1); }
    50% { transform: translateX(3px) scale(1.2); }
    75% { transform: translateX(-2px) scale(1.1); }
    100% { transform: translateX(0) scale(1); }
}

@keyframes statusPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* CRT Footer */
.crt-footer {
    padding-top: 10px;
    border-top: 2px solid #00aa00;
}

.crt-prompt {
    color: #00ff00;
    font-size: 12px;
    animation: typing 3s steps(20, end) infinite;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #00ff00;
    width: 0;
    display: inline-block;
}

@keyframes typing {
    0% { width: 0; }
    50% { width: 100%; }
    100% { width: 0; }
}`,
    js: `// Retro CRT checkbox functionality
document.querySelectorAll('.checkbox-retro input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-retro').querySelector('.retro-label').textContent;
        const status = this.closest('.checkbox-retro').querySelector('.retro-status');
        
        console.log(\`CRT SYSTEM: \${label} - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
        
        // Update status text
        if(this.checked) {
            status.textContent = 'ACTIVE';
            status.style.color = '#ffff00';
            status.style.borderColor = '#ffff00';
            
            // Simulate CRT sound
            console.log('🔊 BEEP! System activated');
        } else {
            status.textContent = 'OFFLINE';
            status.style.color = '#00aa00';
            status.style.borderColor = '#00aa00';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 28: Smart Animated Checkbox
// ====================================================================
checkbox28: {
    name: "Smart Animated Checkbox",
    category: "animated",
    html: `<div class="smart-checkbox-container">
    <label class="smart-checkbox">
        <input type="checkbox">
        <span class="smart-track">
            <span class="smart-thumb"></span>
        </span>
        <span class="smart-label">Enable AI Features</span>
        <span class="smart-status">INACTIVE</span>
    </label>
    <label class="smart-checkbox">
        <input type="checkbox" checked>
        <span class="smart-track">
            <span class="smart-thumb"></span>
        </span>
        <span class="smart-label">Dark Mode</span>
        <span class="smart-status">ACTIVE</span>
    </label>
    <label class="smart-checkbox">
        <input type="checkbox">
        <span class="smart-track">
            <span class="smart-thumb"></span>
        </span>
        <span class="smart-label">Auto Updates</span>
        <span class="smart-status">OFF</span>
    </label>
</div>`,
    css: `.smart-checkbox-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px;
    border-radius: 25px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(102, 126, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.smart-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 25px 30px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    margin-bottom: 15px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.smart-checkbox:last-child {
    margin-bottom: 0;
}

.smart-checkbox:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.smart-checkbox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.smart-checkbox:hover::before {
    opacity: 1;
}

.smart-checkbox input {
    display: none;
}

.smart-track {
    width: 70px;
    height: 36px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 18px;
    margin-right: 25px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    overflow: hidden;
    flex-shrink: 0;
}

.smart-track::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.smart-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 28px;
    height: 28px;
    background: white;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 15px rgba(0, 0, 0, 0.3),
        inset 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

.smart-label {
    font-size: 18px;
    color: white;
    font-weight: 600;
    flex: 1;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.smart-status {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-weight: 500;
    transition: all 0.4s ease;
    min-width: 80px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.smart-checkbox input:checked + .smart-track {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
}

.smart-checkbox input:checked + .smart-track::before {
    opacity: 1;
}

.smart-checkbox input:checked + .smart-track .smart-thumb {
    transform: translateX(34px);
    background: white;
    animation: smartBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 20px rgba(255, 255, 255, 0.4),
        inset 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.smart-checkbox input:checked ~ .smart-status {
    background: rgba(255, 255, 255, 0.3);
    color: #ffd93d;
    text-shadow: 0 2px 4px rgba(255, 217, 61, 0.3);
    box-shadow: 0 4px 15px rgba(255, 217, 61, 0.2);
}

@keyframes smartBounce {
    0% { transform: translateX(34px) scale(1); }
    30% { transform: translateX(34px) scale(1.3); }
    50% { transform: translateX(34px) scale(0.9); }
    70% { transform: translateX(34px) scale(1.1); }
    100% { transform: translateX(34px) scale(1); }
}

/* Status color variations */
.smart-checkbox:nth-child(1) input:checked ~ .smart-status {
    color: #ff6b6b;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
}

.smart-checkbox:nth-child(2) input:checked ~ .smart-status {
    color: #6bcf7f;
    box-shadow: 0 4px 15px rgba(107, 207, 127, 0.2);
}

.smart-checkbox:nth-child(3) input:checked ~ .smart-status {
    color: #4d96ff;
    box-shadow: 0 4px 15px rgba(77, 150, 255, 0.2);
}`,
    js: `// Smart checkbox functionality
document.querySelectorAll('.smart-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.smart-checkbox').querySelector('.smart-label').textContent;
        const status = this.closest('.smart-checkbox').querySelector('.smart-status');
        
        // Update status text
        status.textContent = this.checked ? 'ACTIVE' : 'INACTIVE';
        
        // Add visual feedback
        const track = this.nextElementSibling;
        if(this.checked) {
            track.style.transform = 'scale(1.02)';
            setTimeout(() => {
                track.style.transform = '';
            }, 300);
        }
        
        console.log(\`Smart Feature: "\${label}" - \${this.checked ? 'Enabled' : 'Disabled'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 29: Floating Action Checkbox
// ====================================================================
checkbox29: {
    name: "Floating Action Checkbox",
    category: "animated",
    html: `<div class="floating-checkbox-container">
    <label class="floating-checkbox">
        <input type="checkbox">
        <span class="floating-circle">
            <span class="floating-icon">+</span>
        </span>
        <span class="floating-label">Add to Wishlist</span>
    </label>
    <label class="floating-checkbox">
        <input type="checkbox" checked>
        <span class="floating-circle">
            <span class="floating-icon">★</span>
        </span>
        <span class="floating-label">Premium Feature</span>
    </label>
    <label class="floating-checkbox">
        <input type="checkbox">
        <span class="floating-circle">
            <span class="floating-icon">🔔</span>
        </span>
        <span class="floating-label">Enable Notifications</span>
    </label>
</div>`,
    css: `.floating-checkbox-container {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(245, 87, 108, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.floating-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 25px 35px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 60px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
    min-width: 350px;
    max-width: 400px;
}

.floating-checkbox:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.floating-checkbox::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.floating-checkbox:hover::after {
    transform: translateX(100%);
}

.floating-checkbox input {
    display: none;
}

.floating-circle {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.5);
    overflow: hidden;
    flex-shrink: 0;
}

.floating-circle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.floating-circle::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: circlePulse 2s infinite;
}

@keyframes circlePulse {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.2); opacity: 0; }
}

.floating-icon {
    font-size: 28px;
    font-weight: bold;
    color: #f5576c;
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
}

.floating-label {
    font-size: 20px;
    color: white;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex: 1;
    transition: all 0.4s ease;
}

.floating-checkbox input:checked + .floating-circle {
    transform: rotate(360deg) scale(1.15);
    box-shadow: 
        0 20px 50px rgba(245, 87, 108, 0.6),
        inset 0 2px 0 rgba(255, 255, 255, 0.4);
    animation: circleBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.floating-checkbox input:checked + .floating-circle::before {
    opacity: 1;
}

.floating-checkbox input:checked + .floating-circle::after {
    opacity: 1;
    animation: circlePulseChecked 1s infinite;
}

@keyframes circlePulseChecked {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.3); opacity: 0; }
}

.floating-checkbox input:checked + .floating-circle .floating-icon {
    color: white;
    transform: scale(1.3);
    animation: iconPop 0.4s ease;
}

@keyframes iconPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1.3); }
}

.floating-checkbox input:checked ~ .floating-label {
    color: #ffeb3b;
    animation: labelGlow 1.5s ease infinite alternate;
    font-weight: 700;
}

@keyframes circleBounce {
    0% { transform: rotate(0deg) scale(1); }
    30% { transform: rotate(180deg) scale(1.3); }
    50% { transform: rotate(270deg) scale(0.9); }
    70% { transform: rotate(330deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1.15); }
}

@keyframes labelGlow {
    0% { 
        text-shadow: 0 0 5px rgba(255, 235, 59, 0.5);
        transform: translateX(0);
    }
    50% { 
        text-shadow: 0 0 20px rgba(255, 235, 59, 0.8);
        transform: translateX(5px);
    }
    100% { 
        text-shadow: 0 0 10px rgba(255, 235, 59, 0.6);
        transform: translateX(0);
    }
}

/* Different icons for different checkboxes */
.floating-checkbox:nth-child(1) .floating-icon {
    color: #f093fb;
}

.floating-checkbox:nth-child(2) .floating-icon {
    color: #ffd93d;
}

.floating-checkbox:nth-child(3) .floating-icon {
    color: #6bcf7f;
}

.floating-checkbox:nth-child(2) .floating-circle::before {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.floating-checkbox:nth-child(3) .floating-circle::before {
    background: linear-gradient(135deg, #43e97b, #38f9d7);
}`,
    js: `// Floating checkbox functionality
document.querySelectorAll('.floating-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.floating-checkbox').querySelector('.floating-label').textContent;
        const icon = this.nextElementSibling.querySelector('.floating-icon');
        
        // Change icon based on state
        if(this.checked) {
            if(icon.textContent === '+') icon.textContent = '✓';
            if(icon.textContent === '★') icon.textContent = '⭐';
            if(icon.textContent === '🔔') icon.textContent = '🔕';
            
            // Create ripple effect
            createRipple(this.nextElementSibling);
        } else {
            if(icon.textContent === '✓') icon.textContent = '+';
            if(icon.textContent === '⭐') icon.textContent = '★';
            if(icon.textContent === '🔕') icon.textContent = '🔔';
        }
        
        console.log(\`Floating Action: "\${label}" - \${this.checked ? 'Activated' : 'Deactivated'}\`);
    });
    
    function createRipple(element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = \`
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: \${size}px;
            height: \${size}px;
            top: \${(rect.height - size) / 2}px;
            left: \${(rect.width - size) / 2}px;
            pointer-events: none;
            z-index: 1;
        \`;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});`
},
// ====================================================================
// TEMPLATE 30: Gradient Wave Checkbox
// ====================================================================
checkbox30: {
    name: "Gradient Wave Checkbox",
    category: "animated",
    html: `<div class="gradient-wave-container">
    <label class="checkbox-gradient-wave">
        <input type="checkbox">
        <span class="wave-checkmark"></span>
        <span class="wave-label">Ocean Wave</span>
    </label>
    <label class="checkbox-gradient-wave">
        <input type="checkbox" checked>
        <span class="wave-checkmark"></span>
        <span class="wave-label">Sunset Glow</span>
    </label>
    <label class="checkbox-gradient-wave">
        <input type="checkbox">
        <span class="wave-checkmark"></span>
        <span class="wave-label">Aurora Effect</span>
    </label>
</div>`,
    css: `.gradient-wave-container {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(94, 231, 223, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-gradient-wave {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 300px;
    max-width: 350px;
    position: relative;
    overflow: hidden;
}

.checkbox-gradient-wave:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-8px);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.checkbox-gradient-wave::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

.checkbox-gradient-wave:hover::before {
    left: 100%;
}

.checkbox-gradient-wave input {
    display: none;
}

.wave-checkmark {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
}

.wave-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.checkbox-gradient-wave:nth-child(1) .wave-checkmark::before {
    background: linear-gradient(135deg, #5ee7df, #b490ca, #5ee7df);
}

.checkbox-gradient-wave:nth-child(2) .wave-checkmark::before {
    background: linear-gradient(135deg, #ff6b6b, #ffd93d, #ff6b6b);
}

.checkbox-gradient-wave:nth-child(3) .wave-checkmark::before {
    background: linear-gradient(135deg, #43e97b, #38f9d7, #43e97b);
}

.wave-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
    font-weight: bold;
    opacity: 0;
    transition: all 0.4s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 2;
}

.wave-label {
    font-size: 22px;
    color: white;
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex: 1;
    transition: all 0.4s ease;
    letter-spacing: 0.5px;
}

.checkbox-gradient-wave input:checked + .wave-checkmark {
    border-color: transparent;
    transform: scale(1.1) rotate(5deg);
    animation: wavePulse 2s ease infinite;
}

.checkbox-gradient-wave input:checked + .wave-checkmark::before {
    opacity: 1;
    animation: gradientWave 3s linear infinite;
}

.checkbox-gradient-wave input:checked + .wave-checkmark::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
    animation: checkFloat 1.5s ease infinite alternate;
}

.checkbox-gradient-wave input:checked ~ .wave-label {
    color: #ffeb3b;
    animation: labelFloat 2s ease infinite alternate;
    font-weight: 700;
}

@keyframes wavePulse {
    0%, 100% { 
        transform: scale(1.1) rotate(5deg);
        box-shadow: 
            0 10px 30px rgba(255, 255, 255, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
    }
    50% { 
        transform: scale(1.15) rotate(0deg);
        box-shadow: 
            0 20px 50px rgba(255, 255, 255, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
    }
}

@keyframes gradientWave {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes checkFloat {
    0% { transform: translate(-50%, -50%) scale(1.2); }
    100% { transform: translate(-50%, -55%) scale(1.2); }
}

@keyframes labelFloat {
    0% { 
        transform: translateY(0);
        text-shadow: 0 2px 8px rgba(255, 235, 59, 0.5);
    }
    100% { 
        transform: translateY(-5px);
        text-shadow: 0 5px 15px rgba(255, 235, 59, 0.8);
    }
}

/* Wave effect for each checkbox */
.checkbox-gradient-wave:nth-child(1) input:checked + .wave-checkmark {
    animation: oceanWave 3s ease infinite;
}

.checkbox-gradient-wave:nth-child(2) input:checked + .wave-checkmark {
    animation: sunsetWave 3s ease infinite;
}

.checkbox-gradient-wave:nth-child(3) input:checked + .wave-checkmark {
    animation: auroraWave 3s ease infinite;
}

@keyframes oceanWave {
    0%, 100% { transform: scale(1.1) rotate(5deg); }
    25% { transform: scale(1.15) rotate(-5deg); }
    50% { transform: scale(1.1) rotate(5deg); }
    75% { transform: scale(1.12) rotate(-2deg); }
}

@keyframes sunsetWave {
    0%, 100% { transform: scale(1.1) rotate(-5deg); }
    25% { transform: scale(1.15) rotate(5deg); }
    50% { transform: scale(1.1) rotate(-5deg); }
    75% { transform: scale(1.12) rotate(2deg); }
}

@keyframes auroraWave {
    0%, 100% { transform: scale(1.1) rotate(0deg); }
    33% { transform: scale(1.15) rotate(10deg); }
    66% { transform: scale(1.12) rotate(-10deg); }
}`,
    js: `// Gradient Wave checkbox functionality
document.querySelectorAll('.checkbox-gradient-wave input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-gradient-wave').querySelector('.wave-label').textContent;
        
        // Add wave animation effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            // Create wave particles
            createWaveParticles(checkmark);
        }
        
        console.log(\`Gradient Wave: "\${label}" - \${this.checked ? 'Activated' : 'Deactivated'}\`);
    });
    
    function createWaveParticles(element) {
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const rect = element.getBoundingClientRect();
                const angle = (i * 45) * Math.PI / 180;
                const distance = 30;
                
                particle.style.cssText = \`
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: particleWave 0.8s ease-out forwards;
                    z-index: 1;
                \`;
                
                element.appendChild(particle);
                
                // Animate particle
                const keyframes = [
                    { 
                        transform: \`translate(-50%, -50%) translate(0, 0) scale(1)\`,
                        opacity: 1 
                    },
                    { 
                        transform: \`translate(-50%, -50%) translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: 800,
                    easing: 'ease-out'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, 800);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 31: 3D Depth Checkbox
// ====================================================================
checkbox31: {
    name: "3D Depth Checkbox",
    category: "animated",
    html: `<div class="depth-checkbox-container">
    <label class="checkbox-depth">
        <input type="checkbox">
        <span class="depth-checkmark"></span>
        <span class="depth-label">Deep Press</span>
    </label>
    <label class="checkbox-depth">
        <input type="checkbox" checked>
        <span class="depth-checkmark"></span>
        <span class="depth-label">3D Shadow</span>
    </label>
    <label class="checkbox-depth">
        <input type="checkbox">
        <span class="depth-checkmark"></span>
        <span class="depth-label">Perspective</span>
    </label>
</div>`,
    css: `.depth-checkbox-container {
    background: linear-gradient(135deg, #434343 0%, #000000 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 20px 50px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
}

.depth-checkbox-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.1), transparent 50%);
    pointer-events: none;
}

.checkbox-depth {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: linear-gradient(145deg, #2d2d2d, #1d1d1d);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    min-width: 300px;
    max-width: 350px;
    border: none;
    box-shadow: 
        15px 15px 30px #1a1a1a,
        -10px -10px 20px #3a3a3a,
        inset 1px 1px 0 rgba(255, 255, 255, 0.1);
}

.checkbox-depth:hover {
    transform: translateY(-10px) translateZ(20px);
    box-shadow: 
        20px 20px 40px #151515,
        -15px -15px 30px #454545,
        inset 1px 1px 0 rgba(255, 255, 255, 0.2);
}

.checkbox-depth::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(145deg, #2a2a2a, #222222);
    border-radius: 23px;
    z-index: 1;
    transition: all 0.3s ease;
}

.checkbox-depth::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent, rgba(124, 58, 237, 0.1));
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-depth:hover::after {
    opacity: 1;
}

.checkbox-depth input {
    display: none;
}

.depth-checkmark {
    width: 50px;
    height: 50px;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        8px 8px 16px #1a1a1a,
        -6px -6px 12px #4a4a4a,
        inset 1px 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateZ(30px);
    z-index: 2;
    flex-shrink: 0;
}

.depth-checkmark::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 3;
}

.depth-label {
    font-size: 22px;
    color: #e0e0e0;
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 2;
}

.checkbox-depth input:checked + .depth-checkmark {
    background: linear-gradient(145deg, #7c3aed, #6d28d9);
    box-shadow: 
        inset 8px 8px 16px #5b21b6,
        inset -6px -6px 12px #9d7afc,
        0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateZ(15px) scale(0.95);
    animation: depthPress3D 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-depth input:checked + .depth-checkmark::before {
    color: white;
    transform: translate(-50%, -50%) scale(1.2);
    animation: checkGlow 1.5s ease infinite alternate;
}

.checkbox-depth input:checked ~ .depth-label {
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(124, 58, 237, 0.5);
    transform: translateX(10px);
}

@keyframes depthPress3D {
    0% { 
        transform: translateZ(30px) scale(1);
        box-shadow: 
            8px 8px 16px #1a1a1a,
            -6px -6px 12px #4a4a4a;
    }
    30% { 
        transform: translateZ(5px) scale(0.9);
        box-shadow: 
            inset 4px 4px 8px #1a1a1a,
            inset -3px -3px 6px #4a4a4a;
    }
    60% { 
        transform: translateZ(20px) scale(1.05);
        box-shadow: 
            12px 12px 24px #1a1a1a,
            -8px -8px 16px #4a4a4a;
    }
    100% { 
        transform: translateZ(15px) scale(0.95);
        box-shadow: 
            inset 8px 8px 16px #5b21b6,
            inset -6px -6px 12px #9d7afc;
    }
}

@keyframes checkGlow {
    0% { 
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% { 
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        transform: translate(-50%, -50%) scale(1.3);
    }
}

/* Different depths for each checkbox */
.checkbox-depth:nth-child(1) {
    transform: perspective(1000px) rotateX(5deg);
}

.checkbox-depth:nth-child(2) {
    transform: perspective(1000px) rotateX(0deg);
}

.checkbox-depth:nth-child(3) {
    transform: perspective(1000px) rotateX(-5deg);
}

.checkbox-depth:nth-child(1):hover {
    transform: perspective(1000px) rotateX(5deg) translateY(-10px) translateZ(20px);
}

.checkbox-depth:nth-child(2):hover {
    transform: perspective(1000px) rotateX(0deg) translateY(-10px) translateZ(20px);
}

.checkbox-depth:nth-child(3):hover {
    transform: perspective(1000px) rotateX(-5deg) translateY(-10px) translateZ(20px);
}`,
    js: `// 3D Depth checkbox functionality
document.querySelectorAll('.checkbox-depth input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-depth').querySelector('.depth-label').textContent;
        
        // Add 3D press effect
        const checkmark = this.nextElementSibling;
        const container = this.closest('.checkbox-depth');
        
        if(this.checked) {
            // Add shadow depth
            container.style.boxShadow = \`
                0 0 0 2px rgba(124, 58, 237, 0.3),
                15px 15px 30px #1a1a1a,
                -10px -10px 20px #3a3a3a
            \`;
            
            setTimeout(() => {
                container.style.boxShadow = \`
                    15px 15px 30px #1a1a1a,
                    -10px -10px 20px #3a3a3a,
                    inset 1px 1px 0 rgba(255, 255, 255, 0.1)
                \`;
            }, 300);
        }
        
        console.log(\`3D Depth: "\${label}" - \${this.checked ? 'Pressed' : 'Released'}\`);
    });
    
    // Add mouse down effect for realistic press
    checkbox.addEventListener('mousedown', function() {
        const checkmark = this.nextElementSibling;
        checkmark.style.transform = 'translateZ(5px) scale(0.9)';
    });
    
    checkbox.addEventListener('mouseup', function() {
        const checkmark = this.nextElementSibling;
        if(!this.checked) {
            checkmark.style.transform = 'translateZ(30px) scale(1)';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 32: Interactive Card Checkbox
// ====================================================================
checkbox32: {
    name: "Interactive Card Checkbox",
    category: "modern",
    html: `<div class="interactive-card-container">
    <label class="checkbox-interactive-card">
        <input type="checkbox">
        <div class="card-front">
            <div class="card-icon">💎</div>
            <div class="card-content">
                <div class="card-title">Premium Plan</div>
                <div class="card-features">
                    <span class="feature">✓ Unlimited Projects</span>
                    <span class="feature">✓ 24/7 Support</span>
                    <span class="feature">✓ Advanced Analytics</span>
                </div>
                <div class="card-price">$29<span>/month</span></div>
            </div>
            <div class="card-selector">
                <span class="selector-text">Select Plan</span>
                <span class="selector-icon">→</span>
            </div>
        </div>
    </label>
    <label class="checkbox-interactive-card">
        <input type="checkbox" checked>
        <div class="card-front">
            <div class="card-icon">🚀</div>
            <div class="card-content">
                <div class="card-title">Business Plan</div>
                <div class="card-features">
                    <span class="feature">✓ Team Collaboration</span>
                    <span class="feature">✓ API Access</span>
                    <span class="feature">✓ Custom Branding</span>
                </div>
                <div class="card-price">$99<span>/month</span></div>
            </div>
            <div class="card-selector">
                <span class="selector-text">Selected</span>
                <span class="selector-icon">✓</span>
            </div>
        </div>
    </label>
</div>`,
    css: `.interactive-card-container {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 
        0 30px 60px rgba(250, 112, 154, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-interactive-card {
    cursor: pointer;
    perspective: 1000px;
    width: 300px;
    height: 200px;
    position: relative;
}

.checkbox-interactive-card input {
    display: none;
}

.card-front {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    padding: 30px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.card-front::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #fa709a, #fee140);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card-front::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    transition: transform 0.6s ease;
    opacity: 0;
}

.card-icon {
    font-size: 48px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.card-content {
    flex: 1;
}

.card-title {
    font-size: 24px;
    color: #333;
    font-weight: 700;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.card-features {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.feature {
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.card-price {
    font-size: 42px;
    color: #fa709a;
    font-weight: 800;
    transition: all 0.3s ease;
    margin-top: auto;
}

.card-price span {
    font-size: 18px;
    color: #666;
    font-weight: 500;
    transition: all 0.3s ease;
}

.card-selector {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background: rgba(250, 112, 154, 0.1);
    border-radius: 15px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(10px);
}

.selector-text {
    font-size: 14px;
    color: #fa709a;
    font-weight: 600;
    transition: all 0.3s ease;
}

.selector-icon {
    font-size: 16px;
    color: #fa709a;
    font-weight: bold;
    transition: all 0.3s ease;
}

.checkbox-interactive-card:hover .card-front {
    transform: translateY(-15px) rotateX(10deg);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.25),
        0 0 0 2px rgba(255, 255, 255, 0.2);
}

.checkbox-interactive-card:hover .card-front::after {
    opacity: 1;
    transform: rotate(45deg) translate(20%, 20%);
    animation: shimmer 1.5s ease infinite;
}

@keyframes shimmer {
    0% { transform: rotate(45deg) translate(-30%, -30%); }
    100% { transform: rotate(45deg) translate(30%, 30%); }
}

.checkbox-interactive-card input:checked + .card-front {
    background: linear-gradient(135deg, #fa709a, #fee140);
    transform: scale(1.05);
    box-shadow: 
        0 30px 60px rgba(250, 112, 154, 0.4),
        0 0 0 3px rgba(255, 255, 255, 0.3);
    animation: cardSelected 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes cardSelected {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1.05); }
}

.checkbox-interactive-card input:checked + .card-front::before {
    opacity: 1;
    animation: borderGlow 2s ease infinite alternate;
}

@keyframes borderGlow {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
}

.checkbox-interactive-card input:checked + .card-front .card-icon,
.checkbox-interactive-card input:checked + .card-front .card-title,
.checkbox-interactive-card input:checked + .card-front .card-price,
.checkbox-interactive-card input:checked + .card-front .card-price span,
.checkbox-interactive-card input:checked + .card-front .feature {
    color: white;
}

.checkbox-interactive-card input:checked + .card-front .feature::before {
    content: '✓';
    color: white;
}

.checkbox-interactive-card input:checked + .card-front .card-selector {
    opacity: 1;
    transform: translateY(0);
    background: rgba(255, 255, 255, 0.2);
}

.checkbox-interactive-card input:checked + .card-front .selector-text,
.checkbox-interactive-card input:checked + .card-front .selector-icon {
    color: white;
}

/* Different card colors */
.checkbox-interactive-card:nth-child(2) .card-price {
    color: #4d96ff;
}

.checkbox-interactive-card:nth-child(2) input:checked + .card-front {
    background: linear-gradient(135deg, #4d96ff, #6bcf7f);
}

.checkbox-interactive-card:nth-child(2) .card-selector {
    background: rgba(77, 150, 255, 0.1);
}

.checkbox-interactive-card:nth-child(2) .selector-text,
.checkbox-interactive-card:nth-child(2) .selector-icon {
    color: #4d96ff;
}`,
    js: `// Interactive Card checkbox functionality
document.querySelectorAll('.checkbox-interactive-card input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const title = this.closest('.checkbox-interactive-card').querySelector('.card-title').textContent;
        const price = this.closest('.checkbox-interactive-card').querySelector('.card-price').textContent;
        
        // Update selector text
        const selectorText = this.closest('.checkbox-interactive-card').querySelector('.selector-text');
        const selectorIcon = this.closest('.checkbox-interactive-card').querySelector('.selector-icon');
        
        if(this.checked) {
            selectorText.textContent = 'Selected';
            selectorIcon.textContent = '✓';
            selectorIcon.style.transform = 'scale(1.2)';
            
            // Add celebration effect
            const card = this.nextElementSibling;
            createConfetti(card);
        } else {
            selectorText.textContent = 'Select Plan';
            selectorIcon.textContent = '→';
            selectorIcon.style.transform = 'scale(1)';
        }
        
        console.log(\`Plan Selected: "\${title}" - \${price}\`);
    });
    
    function createConfetti(element) {
        const colors = ['#fa709a', '#fee140', '#4d96ff', '#6bcf7f'];
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 20; i++) {
            setTimeout(() => {
                const confetti = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 10 + 5;
                
                confetti.style.cssText = \`
                    position: absolute;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                \`;
                
                document.body.appendChild(confetti);
                
                // Animate confetti
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const duration = Math.random() * 1000 + 500;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) rotate(0deg) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance - 50}px) rotate(\${Math.random() * 360}deg) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                confetti.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    confetti.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 33: Holographic Checkbox
// ====================================================================
checkbox33: {
    name: "Holographic Checkbox",
    category: "animated",
    html: `<div class="holographic-container">
    <label class="checkbox-holographic">
        <input type="checkbox">
        <span class="holographic-checkmark"></span>
        <span class="holographic-label">Holo Grid</span>
    </label>
    <label class="checkbox-holographic">
        <input type="checkbox" checked>
        <span class="holographic-checkmark"></span>
        <span class="holographic-label">Rainbow Shift</span>
    </label>
    <label class="checkbox-holographic">
        <input type="checkbox">
        <span class="holographic-checkmark"></span>
        <span class="holographic-label">Future Tech</span>
    </label>
</div>`,
    css: `.holographic-container {
    background: #000000;
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 100px rgba(120, 119, 198, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.holographic-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.4), transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.4), transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.4), transparent 50%);
    animation: holoFloat 15s ease infinite alternate;
    z-index: 1;
}

@keyframes holoFloat {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(20px);
    }
    25% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(25px);
    }
    50% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(15px);
    }
    75% { 
        transform: translate(20px, 20px) scale(1.05);
        filter: blur(22px);
    }
    100% { 
        transform: translate(-20px, -20px) scale(1);
        filter: blur(20px);
    }
}

.checkbox-holographic {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 300px;
    max-width: 350px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-holographic:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-8px);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.checkbox-holographic::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.checkbox-holographic:hover::before {
    left: 100%;
}

.checkbox-holographic input {
    display: none;
}

.holographic-checkmark {
    width: 50px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
    z-index: 2;
}

.holographic-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: holoRainbow 4s linear infinite;
    filter: brightness(1.2);
}

@keyframes holoRainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
}

.holographic-checkmark::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8);
    background-size: 400% 400%;
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: holoRainbow 3s linear infinite;
    filter: blur(10px);
}

.holographic-checkmark .check-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.4s ease;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    z-index: 3;
}

.holographic-label {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
    flex: 1;
    transition: all 0.4s ease;
    letter-spacing: 1px;
    position: relative;
    z-index: 2;
}

.checkbox-holographic input:checked + .holographic-checkmark {
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 
        0 0 40px rgba(255, 255, 255, 0.6),
        inset 0 0 30px rgba(255, 255, 255, 0.4);
    animation: holoGlow 2s ease infinite alternate;
}

@keyframes holoGlow {
    0% { 
        box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
    100% { 
        box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.8),
            inset 0 0 40px rgba(255, 255, 255, 0.5);
        transform: scale(1.15);
    }
}

.checkbox-holographic input:checked + .holographic-checkmark::before {
    opacity: 1;
    animation: holoRainbow 2s linear infinite;
}

.checkbox-holographic input:checked + .holographic-checkmark::after {
    opacity: 0.8;
    animation: holoRainbow 1.5s linear infinite;
}

.checkbox-holographic input:checked + .holographic-checkmark .check-icon {
    color: white;
    text-shadow: 
        0 0 20px white,
        0 0 40px rgba(255, 255, 255, 0.8);
    animation: iconHolo 1s ease infinite alternate;
}

@keyframes iconHolo {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.9;
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 1;
    }
}

.checkbox-holographic input:checked ~ .holographic-label {
    color: white;
    text-shadow: 
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(255, 255, 255, 0.4);
    animation: labelHolo 2s ease infinite alternate;
}

@keyframes labelHolo {
    0% { 
        text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.6),
            0 0 20px rgba(255, 255, 255, 0.3);
        transform: translateX(0);
    }
    50% { 
        text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.5);
        transform: translateX(5px);
    }
    100% { 
        text-shadow: 
            0 0 15px rgba(255, 255, 255, 0.7),
            0 0 30px rgba(255, 255, 255, 0.4);
        transform: translateX(0);
    }
}

/* Holographic grid effect */
.checkbox-holographic:nth-child(1)::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.checkbox-holographic:nth-child(1):hover::after {
    opacity: 0.5;
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; }
}`,
    js: `// Holographic checkbox functionality
document.querySelectorAll('.checkbox-holographic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-holographic').querySelector('.holographic-label').textContent;
        
        // Add holographic particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createHoloParticles(checkmark);
        }
        
        console.log(\`Holographic: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
    });
    
    function createHoloParticles(element) {
        const colors = ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8'];
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 12; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 8 + 4;
                const angle = Math.random() * Math.PI * 2;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                    filter: blur(2px);
                \`;
                
                document.body.appendChild(particle);
                
                // Animate particle
                const distance = Math.random() * 80 + 40;
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 100);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 34: Animated Progress Checkbox
// ====================================================================
checkbox34: {
    name: "Animated Progress Checkbox",
    category: "animated",
    html: `<div class="progress-checkbox-container">
    <label class="checkbox-progress">
        <input type="checkbox">
        <span class="progress-circle">
            <span class="progress-fill"></span>
            <span class="progress-icon">0%</span>
        </span>
        <span class="progress-label">Upload Complete</span>
    </label>
    <label class="checkbox-progress">
        <input type="checkbox" checked>
        <span class="progress-circle">
            <span class="progress-fill"></span>
            <span class="progress-icon">100%</span>
        </span>
        <span class="progress-label">Process Finished</span>
    </label>
    <label class="checkbox-progress">
        <input type="checkbox">
        <span class="progress-circle">
            <span class="progress-fill"></span>
            <span class="progress-icon">0%</span>
        </span>
        <span class="progress-label">Sync Progress</span>
    </label>
</div>`,
    css: `.progress-checkbox-container {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(168, 237, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-progress {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.checkbox-progress:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.3);
}

.checkbox-progress::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(168, 237, 234, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-progress:hover::before {
    opacity: 1;
    animation: shimmerMove 2s linear infinite;
}

@keyframes shimmerMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.checkbox-progress input {
    display: none;
}

.progress-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    background: conic-gradient(
        #a8edea 0deg,
        #fed6e3 0deg
    );
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        0 10px 20px rgba(168, 237, 234, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
}

/* Different progress colors */
.checkbox-progress:nth-child(1) .progress-circle {
    background: conic-gradient(#a8edea 0deg, #fed6e3 0deg);
}

.checkbox-progress:nth-child(2) .progress-circle {
    background: conic-gradient(#ff9a9e 0deg, #fad0c4 0deg);
}

.checkbox-progress:nth-child(3) .progress-circle {
    background: conic-gradient(#a1c4fd 0deg, #c2e9fb 0deg);
}

.progress-fill {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background: white;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.1),
        0 2px 0 rgba(255, 255, 255, 0.5);
}

.progress-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: bold;
    color: #666;
    z-index: 2;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

.progress-label {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.checkbox-progress input:checked + .progress-circle {
    transform: scale(1.1);
    animation: progressComplete 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-progress:nth-child(1) input:checked + .progress-circle {
    background: conic-gradient(#a8edea 0deg, #fed6e3 360deg);
}

.checkbox-progress:nth-child(2) input:checked + .progress-circle {
    background: conic-gradient(#ff9a9e 0deg, #fad0c4 360deg);
}

.checkbox-progress:nth-child(3) input:checked + .progress-circle {
    background: conic-gradient(#a1c4fd 0deg, #c2e9fb 360deg);
}

@keyframes progressComplete {
    0% { 
        transform: scale(1) rotate(0deg);
        background: conic-gradient(#a8edea 0deg, #fed6e3 0deg);
    }
    25% { 
        transform: scale(1.2) rotate(90deg);
    }
    50% { 
        transform: scale(1.1) rotate(180deg);
    }
    75% { 
        transform: scale(1.15) rotate(270deg);
    }
    100% { 
        transform: scale(1.1) rotate(360deg);
        background: conic-gradient(#a8edea 0deg, #fed6e3 360deg);
    }
}

.checkbox-progress input:checked + .progress-circle .progress-icon {
    color: #a8edea;
    font-size: 18px;
    font-weight: 800;
    animation: percentagePop 0.4s ease;
}

.checkbox-progress:nth-child(1) input:checked + .progress-circle .progress-icon {
    color: #a8edea;
}

.checkbox-progress:nth-child(2) input:checked + .progress-circle .progress-icon {
    color: #ff9a9e;
}

.checkbox-progress:nth-child(3) input:checked + .progress-circle .progress-icon {
    color: #a1c4fd;
}

@keyframes percentagePop {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox-progress input:checked ~ .progress-label {
    color: #a8edea;
    font-weight: 700;
    animation: labelComplete 0.6s ease;
}

.checkbox-progress:nth-child(1) input:checked ~ .progress-label {
    color: #a8edea;
}

.checkbox-progress:nth-child(2) input:checked ~ .progress-label {
    color: #ff9a9e;
}

.checkbox-progress:nth-child(3) input:checked ~ .progress-label {
    color: #a1c4fd;
}

@keyframes labelComplete {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
}

/* Progress animation for unchecked state */
.checkbox-progress:not(:has(input:checked)) .progress-circle {
    animation: progressPulse 2s ease infinite;
}

@keyframes progressPulse {
    0%, 100% { 
        box-shadow: 
            0 10px 20px rgba(168, 237, 234, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
    50% { 
        box-shadow: 
            0 15px 30px rgba(168, 237, 234, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
}`,
    js: `// Animated Progress checkbox functionality
document.querySelectorAll('.checkbox-progress input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-progress').querySelector('.progress-label').textContent;
        const progressIcon = this.nextElementSibling.querySelector('.progress-icon');
        const progressCircle = this.nextElementSibling;
        
        if(this.checked) {
            // Animate progress from 0% to 100%
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                progressIcon.textContent = \`\${progress}%\`;
                
                // Update conic gradient
                const deg = (progress / 100) * 360;
                if(progress <= 100) {
                    progressCircle.style.background = \`conic-gradient(#a8edea \${deg}deg, #fed6e3 \${deg}deg)\`;
                }
                
                if(progress >= 100) {
                    clearInterval(interval);
                    progressIcon.textContent = '✓';
                    progressIcon.style.fontSize = '24px';
                    
                    // Complete animation
                    progressCircle.style.animation = 'progressComplete 0.8s ease';
                }
            }, 30);
        } else {
            progressIcon.textContent = '0%';
            progressIcon.style.fontSize = '16px';
            progressCircle.style.background = 'conic-gradient(#a8edea 0deg, #fed6e3 0deg)';
            progressCircle.style.animation = 'progressPulse 2s ease infinite';
        }
        
        console.log(\`Progress: "\${label}" - \${this.checked ? 'Completed' : 'Reset'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 35: Magnetic Checkbox
// ====================================================================
checkbox35: {
    name: "Magnetic Checkbox",
    category: "animated",
    html: `<div class="magnetic-checkbox-container">
    <label class="checkbox-magnetic">
        <input type="checkbox">
        <span class="magnetic-checkmark">
            <span class="magnetic-dot"></span>
        </span>
        <span class="magnetic-label">Magnetic Field</span>
    </label>
    <label class="checkbox-magnetic">
        <input type="checkbox" checked>
        <span class="magnetic-checkmark">
            <span class="magnetic-dot"></span>
        </span>
        <span class="magnetic-label">Particle Attraction</span>
    </label>
    <label class="checkbox-magnetic">
        <input type="checkbox">
        <span class="magnetic-checkmark">
            <span class="magnetic-dot"></span>
        </span>
        <span class="magnetic-label">Force Pull</span>
    </label>
</div>`,
    css: `.magnetic-checkbox-container {
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(255, 154, 158, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.magnetic-checkbox-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 30%, rgba(255, 154, 158, 0.2), transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(250, 208, 196, 0.2), transparent 40%);
    animation: magneticField 10s ease infinite alternate;
}

@keyframes magneticField {
    0% { 
        transform: scale(1) rotate(0deg);
        filter: blur(20px);
    }
    50% { 
        transform: scale(1.1) rotate(180deg);
        filter: blur(25px);
    }
    100% { 
        transform: scale(1) rotate(360deg);
        filter: blur(20px);
    }
}

.checkbox-magnetic {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-magnetic:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.2),
        0 0 0 2px rgba(255, 255, 255, 0.3);
}

.checkbox-magnetic input {
    display: none;
}

.magnetic-checkmark {
    width: 60px;
    height: 60px;
    border: 3px solid #ff9a9e;
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    overflow: visible;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
}

.magnetic-checkmark::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid rgba(255, 154, 158, 0.3);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.magnetic-checkmark::after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 1px solid rgba(255, 154, 158, 0.2);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.magnetic-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background: #ff9a9e;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 15px rgba(255, 154, 158, 0.4);
    z-index: 2;
}

.magnetic-label {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 2;
}

/* Different magnetic colors */
.checkbox-magnetic:nth-child(1) .magnetic-checkmark {
    border-color: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) .magnetic-checkmark {
    border-color: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) .magnetic-checkmark {
    border-color: #c2e9fb;
}

.checkbox-magnetic:nth-child(1) .magnetic-dot {
    background: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) .magnetic-dot {
    background: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) .magnetic-dot {
    background: #c2e9fb;
}

.checkbox-magnetic input:checked + .magnetic-checkmark {
    border-color: transparent;
    background: #ff9a9e;
    transform: scale(1.1);
    animation: magneticGlow 2s ease infinite alternate;
    box-shadow: 
        0 0 40px rgba(255, 154, 158, 0.6),
        inset 0 2px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-magnetic:nth-child(1) input:checked + .magnetic-checkmark {
    background: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) input:checked + .magnetic-checkmark {
    background: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) input:checked + .magnetic-checkmark {
    background: #c2e9fb;
}

.checkbox-magnetic input:checked + .magnetic-checkmark::before {
    opacity: 1;
    animation: magneticRing 2s ease infinite;
}

.checkbox-magnetic input:checked + .magnetic-checkmark::after {
    opacity: 1;
    animation: magneticRing 2s ease infinite 0.5s;
}

@keyframes magneticGlow {
    0% { 
        box-shadow: 
            0 0 30px rgba(255, 154, 158, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
    }
    100% { 
        box-shadow: 
            0 0 60px rgba(255, 154, 158, 0.8),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
}

@keyframes magneticRing {
    0% { 
        transform: scale(1);
        opacity: 0.8;
    }
    100% { 
        transform: scale(1.2);
        opacity: 0;
    }
}

.checkbox-magnetic input:checked + .magnetic-checkmark .magnetic-dot {
    background: white;
    transform: translate(-50%, -50%) scale(1);
    animation: magneticOrbit 3s linear infinite;
    box-shadow: 
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(255, 255, 255, 0.4);
}

@keyframes magneticOrbit {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg) scale(1);
    }
    25% { 
        transform: translate(-50%, -50%) rotate(90deg) translateX(25px) rotate(-90deg) scale(1.2);
    }
    50% { 
        transform: translate(-50%, -50%) rotate(180deg) translateX(20px) rotate(-180deg) scale(1);
    }
    75% { 
        transform: translate(-50%, -50%) rotate(270deg) translateX(25px) rotate(-270deg) scale(1.2);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg) translateX(20px) rotate(-360deg) scale(1);
    }
}

.checkbox-magnetic input:checked ~ .magnetic-label {
    color: #ff9a9e;
    font-weight: 700;
    animation: magneticText 1s ease infinite alternate;
}

.checkbox-magnetic:nth-child(1) input:checked ~ .magnetic-label {
    color: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) input:checked ~ .magnetic-label {
    color: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) input:checked ~ .magnetic-label {
    color: #c2e9fb;
}

@keyframes magneticText {
    0% { 
        text-shadow: 0 0 5px rgba(255, 154, 158, 0.5);
        transform: translateX(0);
    }
    100% { 
        text-shadow: 0 0 15px rgba(255, 154, 158, 0.8);
        transform: translateX(5px);
    }
}`,
    js: `// Magnetic checkbox functionality
document.querySelectorAll('.checkbox-magnetic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-magnetic').querySelector('.magnetic-label').textContent;
        
        // Add magnetic particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createMagneticParticles(checkmark);
        }
        
        console.log(\`Magnetic Field: "\${label}" - \${this.checked ? 'ACTIVE' : 'INACTIVE'}\`);
    });
    
    // Add mouse move magnetic effect
    const container = document.querySelector('.magnetic-checkbox-container');
    const checkboxes = document.querySelectorAll('.checkbox-magnetic');
    
    container.addEventListener('mousemove', (e) => {
        checkboxes.forEach(checkbox => {
            const checkmark = checkbox.querySelector('.magnetic-checkmark');
            const rect = checkmark.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
            
            if(distance < 200) { // Magnetic radius
                const strength = (1 - distance / 200) * 0.2;
                const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
                
                checkmark.style.transform = \`translate(\${Math.cos(angle) * strength * 10}px, \${Math.sin(angle) * strength * 10}px)\`;
            } else {
                checkmark.style.transform = 'translate(0, 0)';
            }
        });
    });
    
    function createMagneticParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for(let i = 0; i < 16; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 150 + 50;
                const startX = centerX + Math.cos(angle) * distance;
                const startY = centerY + Math.sin(angle) * distance;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: 6px;
                    height: 6px;
                    background: #ff9a9e;
                    border-radius: 50%;
                    top: \${startY}px;
                    left: \${startX}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                    filter: blur(1px);
                \`;
                
                document.body.appendChild(particle);
                
                // Magnetic attraction animation
                const duration = Math.random() * 600 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`translate(\${centerX - startX}px, \${centerY - startY}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 36: Morphing Icon Checkbox
// ====================================================================
checkbox36: {
    name: "Morphing Icon Checkbox",
    category: "animated",
    html: `<div class="morphing-icon-container">
    <label class="checkbox-morphing-icon">
        <input type="checkbox">
        <span class="morphing-icon">❤️</span>
        <span class="morphing-label">Add to Favorites</span>
    </label>
    <label class="checkbox-morphing-icon">
        <input type="checkbox" checked>
        <span class="morphing-icon">🔔</span>
        <span class="morphing-label">Notifications</span>
    </label>
    <label class="checkbox-morphing-icon">
        <input type="checkbox">
        <span class="morphing-icon">★</span>
        <span class="morphing-label">Premium Feature</span>
    </label>
</div>`,
    css: `.morphing-icon-container {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(252, 182, 159, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-morphing-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.checkbox-morphing-icon:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.2),
        0 0 0 2px rgba(255, 255, 255, 0.3);
}

.checkbox-morphing-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(252, 182, 159, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-morphing-icon:hover::before {
    opacity: 1;
    animation: iconShimmer 2s linear infinite;
}

@keyframes iconShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.checkbox-morphing-icon input {
    display: none;
}

.morphing-icon {
    font-size: 48px;
    margin-right: 30px;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: inline-block;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
}

.morphing-label {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

/* Different icon colors and effects */
.checkbox-morphing-icon:nth-child(1) .morphing-icon {
    color: #ff6b6b;
}

.checkbox-morphing-icon:nth-child(2) .morphing-icon {
    color: #4d96ff;
}

.checkbox-morphing-icon:nth-child(3) .morphing-icon {
    color: #ffd93d;
}

.checkbox-morphing-icon input:checked + .morphing-icon {
    transform: scale(1.3) rotate(360deg);
    animation: iconMorphComplete 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
}

.checkbox-morphing-icon:nth-child(1) input:checked + .morphing-icon {
    animation: heartBeat 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-morphing-icon:nth-child(2) input:checked + .morphing-icon {
    animation: bellRing 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-morphing-icon:nth-child(3) input:checked + .morphing-icon {
    animation: starTwinkle 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes iconMorphComplete {
    0% { 
        transform: scale(1) rotate(0deg);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    }
    25% { 
        transform: scale(1.5) rotate(90deg);
        filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.3));
    }
    50% { 
        transform: scale(1.2) rotate(180deg);
        filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }
    75% { 
        transform: scale(1.4) rotate(270deg);
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));
    }
    100% { 
        transform: scale(1.3) rotate(360deg);
        filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }
}

@keyframes heartBeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.4); }
    28% { transform: scale(1); }
    42% { transform: scale(1.4); }
    70% { transform: scale(1); }
    100% { transform: scale(1.3); }
}

@keyframes bellRing {
    0%, 100% { transform: rotate(0deg) scale(1); }
    10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg) scale(1.4); }
    20%, 40%, 60%, 80% { transform: rotate(10deg) scale(1.4); }
}

@keyframes starTwinkle {
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
    25% { 
        transform: scale(1.5) rotate(90deg);
        opacity: 0.7;
    }
    50% { 
        transform: scale(1.2) rotate(180deg);
        opacity: 1;
    }
    75% { 
        transform: scale(1.4) rotate(270deg);
        opacity: 0.7;
    }
}

.checkbox-morphing-icon input:checked ~ .morphing-label {
    color: #fcb69f;
    font-weight: 700;
    animation: labelMorph 0.6s ease;
}

.checkbox-morphing-icon:nth-child(1) input:checked ~ .morphing-label {
    color: #ff6b6b;
}

.checkbox-morphing-icon:nth-child(2) input:checked ~ .morphing-label {
    color: #4d96ff;
}

.checkbox-morphing-icon:nth-child(3) input:checked ~ .morphing-label {
    color: #ffd93d;
}

@keyframes labelMorph {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
}

/* Icon change on hover for unchecked state */
.checkbox-morphing-icon:not(:has(input:checked)):hover .morphing-icon {
    transform: scale(1.1);
    animation: iconFloat 2s ease infinite;
}

@keyframes iconFloat {
    0%, 100% { transform: translateY(0) scale(1.1); }
    50% { transform: translateY(-5px) scale(1.1); }
}`,
    js: `// Morphing Icon checkbox functionality
document.querySelectorAll('.checkbox-morphing-icon input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-morphing-icon').querySelector('.morphing-label').textContent;
        const icon = this.nextElementSibling;
        
        // Store original icon
        const originalIcon = icon.textContent;
        
        if(this.checked) {
            // Change icon based on type
            if(originalIcon === '❤️') {
                icon.textContent = '💖';
                icon.style.color = '#ff6b6b';
                createHeartParticles(icon);
            } else if(originalIcon === '🔔') {
                icon.textContent = '🔕';
                icon.style.color = '#4d96ff';
                createBellParticles(icon);
            } else if(originalIcon === '★') {
                icon.textContent = '⭐';
                icon.style.color = '#ffd93d';
                createStarParticles(icon);
            }
        } else {
            // Restore original icon
            icon.textContent = originalIcon;
        }
        
        console.log(\`Icon: "\${label}" - \${this.checked ? 'Activated' : 'Deactivated'}\`);
    });
    
    function createHeartParticles(element) {
        createParticles(element, '❤️', '#ff6b6b', 12);
    }
    
    function createBellParticles(element) {
        createParticles(element, '🔔', '#4d96ff', 10);
    }
    
    function createStarParticles(element) {
        createParticles(element, '★', '#ffd93d', 15);
    }
    
    function createParticles(element, emoji, color, count) {
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < count; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const size = Math.random() * 24 + 16;
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 60 + 40;
                
                particle.style.cssText = \`
                    position: fixed;
                    font-size: \${size}px;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0;
                    transform: translate(0, 0) scale(0);
                    color: \${color};
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                \`;
                
                particle.textContent = emoji;
                document.body.appendChild(particle);
                
                // Animate particle
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(0)\`,
                        opacity: 0 
                    },
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 1 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 37: Floating Label Checkbox
// ====================================================================
checkbox37: {
    name: "Floating Label Checkbox",
    category: "modern",
    html: `<div class="floating-label-container">
    <label class="checkbox-floating-label">
        <input type="checkbox">
        <span class="floating-box"></span>
        <span class="floating-text">Username</span>
        <span class="floating-hint">Enter your username</span>
    </label>
    <label class="checkbox-floating-label">
        <input type="checkbox" checked>
        <span class="floating-box"></span>
        <span class="floating-text">Email Address</span>
        <span class="floating-hint">Your email will be verified</span>
    </label>
    <label class="checkbox-floating-label">
        <input type="checkbox">
        <span class="floating-box"></span>
        <span class="floating-text">Password</span>
        <span class="floating-hint">Minimum 8 characters</span>
    </label>
</div>`,
    css: `.floating-label-container {
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    padding: 50px;
    border-radius: 25px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        0 30px 60px rgba(161, 196, 253, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-floating-label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 0;
    background: transparent;
    border-radius: 0;
    transition: all 0.3s ease;
    position: relative;
    min-width: 300px;
    max-width: 350px;
    border-bottom: 2px solid rgba(161, 196, 253, 0.3);
    padding-bottom: 8px;
}

.checkbox-floating-label:hover {
    border-bottom-color: rgba(161, 196, 253, 0.6);
    transform: translateY(-5px);
}

.checkbox-floating-label::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #a1c4fd, #c2e9fb);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
}

.checkbox-floating-label:hover::before {
    transform: scaleX(1);
}

.checkbox-floating-label input {
    display: none;
}

.floating-box {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(161, 196, 253, 0.6);
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.9);
    z-index: 2;
}

.floating-box::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.floating-text {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding-left: 40px;
    padding-bottom: 5px;
    transform-origin: left;
}

.floating-hint {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    padding-left: 40px;
    padding-top: 5px;
    opacity: 0;
    transform: translateY(-10px);
}

.checkbox-floating-label input:checked + .floating-box {
    background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
    border-color: transparent;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 
        0 4px 15px rgba(161, 196, 253, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.3);
    animation: boxFloat 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes boxFloat {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1.1) rotate(5deg); }
}

.checkbox-floating-label input:checked + .floating-box::after {
    color: white;
    transform: translate(-50%, -50%) scale(1.2);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.checkbox-floating-label input:checked ~ .floating-text {
    color: #a1c4fd;
    font-weight: 600;
    transform: translateY(-5px);
    padding-left: 45px;
}

.checkbox-floating-label input:checked ~ .floating-hint {
    opacity: 1;
    transform: translateY(0);
    color: rgba(161, 196, 253, 0.8);
}

/* Focus effect */
.checkbox-floating-label:has(input:focus) .floating-box {
    border-color: #a1c4fd;
    box-shadow: 0 0 0 3px rgba(161, 196, 253, 0.2);
}

/* Different colors for each checkbox */
.checkbox-floating-label:nth-child(1) .floating-box {
    border-color: rgba(255, 107, 107, 0.6);
}

.checkbox-floating-label:nth-child(1) input:checked + .floating-box {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
}

.checkbox-floating-label:nth-child(1) input:checked ~ .floating-text {
    color: #ff6b6b;
}

.checkbox-floating-label:nth-child(1) input:checked ~ .floating-hint {
    color: rgba(255, 107, 107, 0.8);
}

.checkbox-floating-label:nth-child(2) .floating-box {
    border-color: rgba(107, 207, 127, 0.6);
}

.checkbox-floating-label:nth-child(2) input:checked + .floating-box {
    background: linear-gradient(135deg, #6bcf7f, #8de29d);
}

.checkbox-floating-label:nth-child(2) input:checked ~ .floating-text {
    color: #6bcf7f;
}

.checkbox-floating-label:nth-child(2) input:checked ~ .floating-hint {
    color: rgba(107, 207, 127, 0.8);
}

.checkbox-floating-label:nth-child(3) .floating-box {
    border-color: rgba(255, 217, 61, 0.6);
}

.checkbox-floating-label:nth-child(3) input:checked + .floating-box {
    background: linear-gradient(135deg, #ffd93d, #ffe57f);
}

.checkbox-floating-label:nth-child(3) input:checked ~ .floating-text {
    color: #ffd93d;
}

.checkbox-floating-label:nth-child(3) input:checked ~ .floating-hint {
    color: rgba(255, 217, 61, 0.8);
}

/* Hover effects for different checkboxes */
.checkbox-floating-label:nth-child(1):hover::before {
    background: linear-gradient(90deg, #ff6b6b, #ff8e8e);
}

.checkbox-floating-label:nth-child(2):hover::before {
    background: linear-gradient(90deg, #6bcf7f, #8de29d);
}

.checkbox-floating-label:nth-child(3):hover::before {
    background: linear-gradient(90deg, #ffd93d, #ffe57f);
}`,
    js: `// Floating Label checkbox functionality
document.querySelectorAll('.checkbox-floating-label input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-floating-label').querySelector('.floating-text').textContent;
        
        // Add ripple effect
        const box = this.nextElementSibling;
        createRippleEffect(box);
        
        // Update hint text based on state
        const hint = this.closest('.checkbox-floating-label').querySelector('.floating-hint');
        if(this.checked) {
            if(hint.textContent.includes('Enter')) {
                hint.textContent = 'Username will be saved';
            } else if(hint.textContent.includes('email')) {
                hint.textContent = 'Email verification sent';
            } else if(hint.textContent.includes('Password')) {
                hint.textContent = 'Password requirements met';
            }
        } else {
            if(hint.textContent.includes('saved')) {
                hint.textContent = 'Enter your username';
            } else if(hint.textContent.includes('verification')) {
                hint.textContent = 'Your email will be verified';
            } else if(hint.textContent.includes('requirements')) {
                hint.textContent = 'Minimum 8 characters';
            }
        }
        
        console.log(\`Field: "\${label}" - \${this.checked ? 'Completed' : 'Incomplete'}\`);
    });
    
    // Add focus effect
    checkbox.addEventListener('focus', function() {
        const label = this.closest('.checkbox-floating-label');
        label.style.borderBottomColor = '#a1c4fd';
        label.style.transform = 'translateY(-8px)';
    });
    
    checkbox.addEventListener('blur', function() {
        const label = this.closest('.checkbox-floating-label');
        if(!this.checked) {
            label.style.borderBottomColor = 'rgba(161, 196, 253, 0.3)';
            label.style.transform = 'translateY(0)';
        }
    });
    
    function createRippleEffect(element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        
        ripple.style.cssText = \`
            position: absolute;
            border-radius: 50%;
            background: rgba(161, 196, 253, 0.3);
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            width: \${size}px;
            height: \${size}px;
            top: \${(rect.height - size) / 2}px;
            left: \${(rect.width - size) / 2}px;
            pointer-events: none;
            z-index: 1;
        \`;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});`
},
// ====================================================================
// TEMPLATE 38: Liquid Metal Checkbox
// ====================================================================
checkbox38: {
    name: "Liquid Metal Checkbox",
    category: "animated",
    html: `<div class="liquid-metal-container">
    <label class="checkbox-liquid-metal">
        <input type="checkbox">
        <span class="metal-checkmark">
            <span class="metal-reflect"></span>
        </span>
        <span class="metal-label">Mercury Mode</span>
    </label>
    <label class="checkbox-liquid-metal">
        <input type="checkbox" checked>
        <span class="metal-checkmark">
            <span class="metal-reflect"></span>
        </span>
        <span class="metal-label">Chrome Finish</span>
    </label>
    <label class="checkbox-liquid-metal">
        <input type="checkbox">
        <span class="metal-checkmark">
            <span class="metal-reflect"></span>
        </span>
        <span class="metal-label">Steel Texture</span>
    </label>
</div>`,
    css: `.liquid-metal-container {
    background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        0 30px 60px rgba(44, 62, 80, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.liquid-metal-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(76, 161, 175, 0.3), transparent 40%),
        radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1), transparent 40%);
    animation: metalAmbient 10s ease infinite alternate;
}

@keyframes metalAmbient {
    0% { transform: translate(0, 0); }
    100% { transform: translate(20px, 20px); }
}

.checkbox-liquid-metal {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-liquid-metal:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.5);
}

.checkbox-liquid-metal::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.checkbox-liquid-metal:hover::before {
    left: 100%;
}

.checkbox-liquid-metal input {
    display: none;
}

.metal-checkmark {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, 
        #7d7d7d 0%, 
        #a3a3a3 25%, 
        #c9c9c9 50%, 
        #a3a3a3 75%, 
        #7d7d7d 100%);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        inset 0 3px 8px rgba(255, 255, 255, 0.4),
        0 8px 25px rgba(0, 0, 0, 0.6),
        0 2px 0 rgba(255, 255, 255, 0.1);
    flex-shrink: 0;
}

.metal-checkmark::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(145deg, 
        #6d6d6d 0%, 
        #939393 25%, 
        #b9b9b9 50%, 
        #939393 75%, 
        #6d6d6d 100%);
    border-radius: 10px;
    z-index: 1;
}

.metal-reflect {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent);
    transform: rotate(45deg);
    transition: all 0.5s ease;
    z-index: 2;
    filter: blur(2px);
}

.metal-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    z-index: 3;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.metal-label {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

/* Different metal types */
.checkbox-liquid-metal:nth-child(1) input:checked + .metal-checkmark {
    background: linear-gradient(145deg, 
        #4ca1af 0%, 
        #7dd3ea 25%, 
        #b5f7ff 50%, 
        #7dd3ea 75%, 
        #4ca1af 100%);
}

.checkbox-liquid-metal:nth-child(2) input:checked + .metal-checkmark {
    background: linear-gradient(145deg, 
        #bdc3c7 0%, 
        #ecf0f1 25%, 
        #ffffff 50%, 
        #ecf0f1 75%, 
        #bdc3c7 100%);
}

.checkbox-liquid-metal:nth-child(3) input:checked + .metal-checkmark {
    background: linear-gradient(145deg, 
        #7f8c8d 0%, 
        #95a5a6 25%, 
        #bdc3c7 50%, 
        #95a5a6 75%, 
        #7f8c8d 100%);
}

.checkbox-liquid-metal input:checked + .metal-checkmark {
    transform: scale(1.15);
    animation: liquidMetal 2s ease infinite alternate;
    box-shadow: 
        inset 0 3px 8px rgba(255, 255, 255, 0.5),
        0 15px 40px rgba(0, 0, 0, 0.8),
        0 0 20px currentColor,
        0 2px 0 rgba(255, 255, 255, 0.2);
}

@keyframes liquidMetal {
    0% { 
        transform: scale(1.15) rotate(0deg);
        filter: brightness(1);
    }
    50% { 
        transform: scale(1.2) rotate(2deg);
        filter: brightness(1.2);
    }
    100% { 
        transform: scale(1.15) rotate(-2deg);
        filter: brightness(1);
    }
}

.checkbox-liquid-metal input:checked + .metal-checkmark .metal-reflect {
    animation: metalReflect 3s linear infinite;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.8), 
        transparent);
}

@keyframes metalReflect {
    0% { transform: rotate(45deg) translateX(-100%); }
    100% { transform: rotate(45deg) translateX(100%); }
}

.checkbox-liquid-metal input:checked + .metal-checkmark::after {
    color: rgba(255, 255, 255, 0.9);
    animation: metalCheck 0.6s ease;
}

@keyframes metalCheck {
    0% { transform: translate(-50%, -50%) scale(0); }
    60% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox-liquid-metal input:checked ~ .metal-label {
    color: #ffffff;
    text-shadow: 
        0 0 20px currentColor,
        0 2px 8px rgba(0, 0, 0, 0.6);
    animation: metalText 1.5s ease infinite alternate;
}

.checkbox-liquid-metal:nth-child(1) input:checked ~ .metal-label {
    color: #b5f7ff;
}

.checkbox-liquid-metal:nth-child(2) input:checked ~ .metal-label {
    color: #ffffff;
}

.checkbox-liquid-metal:nth-child(3) input:checked ~ .metal-label {
    color: #bdc3c7;
}

@keyframes metalText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
    }
    100% { 
        letter-spacing: 2.5px;
        transform: translateX(5px);
    }
}

/* Liquid mercury effect */
.checkbox-liquid-metal:nth-child(1) .metal-checkmark {
    animation: mercuryFlow 3s ease infinite;
}

@keyframes mercuryFlow {
    0%, 100% { transform: scale(1) translateY(0); }
    25% { transform: scale(1.02) translateY(-2px); }
    50% { transform: scale(1) translateY(0); }
    75% { transform: scale(1.02) translateY(2px); }
}`,
    js: `// Liquid Metal checkbox functionality
document.querySelectorAll('.checkbox-liquid-metal input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-liquid-metal').querySelector('.metal-label').textContent;
        
        // Create mercury droplet effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createMercuryDroplets(checkmark);
        }
        
        console.log(\`Metal Mode: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
    });
    
    // Add hover metal sound effect simulation
    checkbox.addEventListener('mouseenter', function() {
        console.log('🔊 Metal clink sound');
    });
    
    function createMercuryDroplets(element) {
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const droplet = document.createElement('span');
                const size = Math.random() * 12 + 8;
                const angle = Math.random() * Math.PI * 2;
                
                droplet.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: linear-gradient(145deg, #4ca1af, #7dd3ea);
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 
                        0 0 10px rgba(76, 161, 175, 0.6),
                        inset 0 2px 0 rgba(255, 255, 255, 0.4);
                \`;
                
                document.body.appendChild(droplet);
                
                // Mercury-like movement
                const distance = Math.random() * 60 + 30;
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                droplet.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    droplet.remove();
                }, duration);
            }, i * 75);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 39: Space Galaxy Checkbox
// ====================================================================
checkbox39: {
    name: "Space Galaxy Checkbox",
    category: "animated",
    html: `<div class="space-galaxy-container">
    <label class="checkbox-space">
        <input type="checkbox">
        <span class="space-checkmark">
            <span class="space-star">★</span>
        </span>
        <span class="space-label">Nebula Mode</span>
    </label>
    <label class="checkbox-space">
        <input type="checkbox" checked>
        <span class="space-checkmark">
            <span class="space-star">🌌</span>
        </span>
        <span class="space-label">Black Hole</span>
    </label>
    <label class="checkbox-space">
        <input type="checkbox">
        <span class="space-checkmark">
            <span class="space-star">🌠</span>
        </span>
        <span class="space-label">Supernova</span>
    </label>
</div>`,
    css: `.space-galaxy-container {
    background: #000000;
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 100px rgba(138, 43, 226, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.space-galaxy-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.4), transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(0, 191, 255, 0.4), transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4), transparent 50%);
    animation: spaceNebula 20s ease infinite alternate;
    filter: blur(50px);
    z-index: 1;
}

@keyframes spaceNebula {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px);
    }
    33% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(60px);
    }
    66% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(40px);
    }
    100% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px);
    }
}

.space-galaxy-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(2px 2px at 20px 30px, #eee, transparent),
        radial-gradient(1px 1px at 40px 70px, #fff, transparent),
        radial-gradient(3px 3px at 90px 40px, #ff0, transparent),
        radial-gradient(2px 2px at 130px 80px, #0ff, transparent),
        radial-gradient(1px 1px at 160px 20px, #fff, transparent),
        radial-gradient(2px 2px at 200px 60px, #f0f, transparent),
        radial-gradient(1px 1px at 240px 90px, #fff, transparent),
        radial-gradient(3px 3px at 280px 30px, #0f0, transparent);
    background-repeat: repeat;
    animation: galaxyTwinkle 6s infinite alternate;
    z-index: 1;
}

@keyframes galaxyTwinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
}

.checkbox-space {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-space:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.8),
        0 0 0 2px rgba(138, 43, 226, 0.3);
    background: rgba(0, 0, 0, 0.8);
}

.checkbox-space::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.2), transparent);
    transition: left 0.8s ease;
}

.checkbox-space:hover::before {
    left: 100%;
}

.checkbox-space input {
    display: none;
}

.space-checkmark {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(138, 43, 226, 0.5);
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 
        inset 0 0 20px rgba(138, 43, 226, 0.3),
        0 8px 25px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
}

.space-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(138, 43, 226, 0.2), transparent 70%);
    border-radius: 50%;
}

.space-star {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.6);
    font-size: 28px;
    transition: all 0.3s ease;
    z-index: 2;
    text-shadow: 0 0 10px currentColor;
}

.space-label {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

/* Different space themes */
.checkbox-space:nth-child(1) .space-checkmark {
    border-color: rgba(138, 43, 226, 0.5);
}

.checkbox-space:nth-child(2) .space-checkmark {
    border-color: rgba(0, 191, 255, 0.5);
}

.checkbox-space:nth-child(3) .space-checkmark {
    border-color: rgba(255, 105, 180, 0.5);
}

.checkbox-space:nth-child(1) input:checked + .space-checkmark {
    background: radial-gradient(circle, #8a2be2, #4b0082, #000000);
}

.checkbox-space:nth-child(2) input:checked + .space-checkmark {
    background: radial-gradient(circle, #00bfff, #0080ff, #000000);
}

.checkbox-space:nth-child(3) input:checked + .space-checkmark {
    background: radial-gradient(circle, #ff69b4, #ff1493, #000000);
}

.checkbox-space input:checked + .space-checkmark {
    transform: scale(1.2);
    animation: spacePulse 2s ease infinite alternate;
    box-shadow: 
        0 0 50px currentColor,
        inset 0 0 30px rgba(255, 255, 255, 0.4),
        0 15px 40px rgba(0, 0, 0, 0.8);
}

@keyframes spacePulse {
    0% { 
        transform: scale(1.2);
        box-shadow: 
            0 0 40px currentColor,
            inset 0 0 20px rgba(255, 255, 255, 0.4);
    }
    100% { 
        transform: scale(1.3);
        box-shadow: 
            0 0 80px currentColor,
            inset 0 0 40px rgba(255, 255, 255, 0.6);
    }
}

.checkbox-space input:checked + .space-checkmark .space-star {
    color: white;
    text-shadow: 
        0 0 30px white,
        0 0 60px currentColor;
    animation: starGlow 1.5s ease infinite alternate;
}

@keyframes starGlow {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        filter: brightness(1);
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.3);
        filter: brightness(1.5);
    }
}

.checkbox-space input:checked ~ .space-label {
    color: white;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.5);
    animation: spaceText 2s ease infinite alternate;
}

.checkbox-space:nth-child(1) input:checked ~ .space-label {
    color: #8a2be2;
}

.checkbox-space:nth-child(2) input:checked ~ .space-label {
    color: #00bfff;
}

.checkbox-space:nth-child(3) input:checked ~ .space-label {
    color: #ff69b4;
}

@keyframes spaceText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
    }
    100% { 
        letter-spacing: 3px;
        transform: translateX(10px);
    }
}

/* Create orbiting planets */
.checkbox-space:nth-child(2) input:checked + .space-checkmark::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #00bfff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(40px);
    animation: orbitPlanet 3s linear infinite;
    box-shadow: 0 0 10px #00bfff;
}

@keyframes orbitPlanet {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg);
    }
}

/* Create shooting stars on hover */
.checkbox-space:hover .space-checkmark::before {
    animation: shootingStar 2s linear infinite;
}

@keyframes shootingStar {
    0% { 
        transform: translateX(-100%) translateY(-100%);
        opacity: 0;
    }
    50% { 
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
    100% { 
        transform: translateX(100%) translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Space Galaxy checkbox functionality
document.querySelectorAll('.checkbox-space input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-space').querySelector('.space-label').textContent;
        
        // Create space particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createSpaceParticles(checkmark);
        }
        
        console.log(\`Space System: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
    });
    
    // Create shooting stars on container
    const container = document.querySelector('.space-galaxy-container');
    setInterval(() => {
        createShootingStar(container);
    }, 3000);
    
    function createSpaceParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#8a2be2', '#00bfff', '#ff69b4', '#ff0', '#0ff', '#f0f'];
        
        for(let i = 0; i < 12; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 8 + 4;
                const angle = Math.random() * Math.PI * 2;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 0 0 20px \${color};
                \`;
                
                document.body.appendChild(particle);
                
                // Space-like movement
                const distance = Math.random() * 100 + 50;
                const duration = Math.random() * 1200 + 600;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 100);
        }
    }
    
    function createShootingStar(container) {
        const rect = container.getBoundingClientRect();
        const star = document.createElement('div');
        
        star.style.cssText = \`
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            top: \${Math.random() * rect.height}px;
            left: \${Math.random() * rect.width}px;
            pointer-events: none;
            z-index: 1;
            box-shadow: 0 0 10px white;
        \`;
        
        container.appendChild(star);
        
        const distance = 100;
        const angle = Math.random() * Math.PI * 2;
        
        const keyframes = [
            { 
                transform: \`translate(0, 0) scale(1)\`,
                opacity: 0 
            },
            { 
                transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(3)\`,
                opacity: 1 
            },
            { 
                transform: \`translate(\${Math.cos(angle) * distance * 2}px, \${Math.sin(angle) * distance * 2}px) scale(0)\`,
                opacity: 0 
            }
        ];
        
        star.animate(keyframes, {
            duration: 1000,
            easing: 'linear'
        });
        
        setTimeout(() => {
            star.remove();
        }, 1000);
    }
});`
},
// ====================================================================
// TEMPLATE 40: Crystal Glass Checkbox
// ====================================================================
checkbox40: {
    name: "Crystal Glass Checkbox",
    category: "modern",
    html: `<div class="crystal-glass-container">
    <label class="checkbox-crystal">
        <input type="checkbox">
        <span class="crystal-checkmark"></span>
        <span class="crystal-label">Clear Quartz</span>
    </label>
    <label class="checkbox-crystal">
        <input type="checkbox" checked>
        <span class="crystal-checkmark"></span>
        <span class="crystal-label">Sapphire Glass</span>
    </label>
    <label class="checkbox-crystal">
        <input type="checkbox">
        <span class="crystal-checkmark"></span>
        <span class="crystal-label">Diamond Cut</span>
    </label>
</div>`,
    css: `.crystal-glass-container {
    background: linear-gradient(135deg, #e0f7fa 0%, #80deea 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        0 30px 60px rgba(128, 222, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.crystal-glass-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.4), transparent 40%),
        radial-gradient(circle at 70% 80%, rgba(128, 222, 234, 0.3), transparent 40%);
    animation: crystalLight 10s ease infinite alternate;
}

@keyframes crystalLight {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: brightness(1);
    }
    100% { 
        transform: translate(20px, 20px) scale(1.1);
        filter: brightness(1.2);
    }
}

.checkbox-crystal {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    box-shadow: 
        0 20px 40px rgba(128, 222, 234, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.checkbox-crystal:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(128, 222, 234, 0.5),
        0 0 0 2px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.95);
}

.checkbox-crystal::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: left 0.6s ease;
}

.checkbox-crystal:hover::before {
    left: 100%;
}

.checkbox-crystal input {
    display: none;
}

.crystal-checkmark {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(128, 222, 234, 0.6);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 
        inset 0 0 20px rgba(255, 255, 255, 0.8),
        0 8px 25px rgba(128, 222, 234, 0.3);
    flex-shrink: 0;
}

.crystal-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.9) 0%, 
        rgba(128, 222, 234, 0.4) 50%, 
        rgba(255, 255, 255, 0.9) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.crystal-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    z-index: 2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.crystal-label {
    font-size: 22px;
    color: #006064;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    font-family: 'Arial', sans-serif;
}

/* Different crystal types */
.checkbox-crystal:nth-child(1) .crystal-checkmark {
    border-color: rgba(128, 222, 234, 0.6);
}

.checkbox-crystal:nth-child(2) .crystal-checkmark {
    border-color: rgba(77, 208, 225, 0.6);
}

.checkbox-crystal:nth-child(3) .crystal-checkmark {
    border-color: rgba(38, 198, 218, 0.6);
}

.checkbox-crystal:nth-child(1) input:checked + .crystal-checkmark {
    background: linear-gradient(135deg, #80deea, #4dd0e1);
}

.checkbox-crystal:nth-child(2) input:checked + .crystal-checkmark {
    background: linear-gradient(135deg, #4dd0e1, #26c6da);
}

.checkbox-crystal:nth-child(3) input:checked + .crystal-checkmark {
    background: linear-gradient(135deg, #26c6da, #00bcd4);
}

.checkbox-crystal input:checked + .crystal-checkmark {
    transform: scale(1.15);
    animation: crystalGlow 2s ease infinite alternate;
    box-shadow: 
        0 0 40px rgba(128, 222, 234, 0.6),
        inset 0 0 30px rgba(255, 255, 255, 0.8),
        0 15px 40px rgba(128, 222, 234, 0.4);
    border-color: transparent;
}

@keyframes crystalGlow {
    0% { 
        box-shadow: 
            0 0 30px rgba(128, 222, 234, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.7);
    }
    100% { 
        box-shadow: 
            0 0 60px rgba(128, 222, 234, 0.8),
            inset 0 0 40px rgba(255, 255, 255, 0.9);
    }
}

.checkbox-crystal input:checked + .crystal-checkmark::before {
    opacity: 1;
    animation: crystalRefract 3s linear infinite;
}

@keyframes crystalRefract {
    0% { 
        background-position: 0% 50%;
        transform: rotate(0deg);
    }
    50% { 
        background-position: 100% 50%;
        transform: rotate(180deg);
    }
    100% { 
        background-position: 0% 50%;
        transform: rotate(360deg);
    }
}

.checkbox-crystal input:checked + .crystal-checkmark::after {
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(255, 255, 255, 0.5);
    animation: crystalCheck 0.6s ease;
}

@keyframes crystalCheck {
    0% { transform: translate(-50%, -50%) scale(0); }
    60% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox-crystal input:checked ~ .crystal-label {
    color: #004d40;
    font-weight: 700;
    text-shadow: 
        0 2px 4px rgba(128, 222, 234, 0.3),
        0 0 10px rgba(128, 222, 234, 0.2);
    animation: crystalLabel 1.5s ease infinite alternate;
}

@keyframes crystalLabel {
    0% { 
        transform: translateX(0);
        letter-spacing: 0.5px;
    }
    100% { 
        transform: translateX(5px);
        letter-spacing: 1px;
    }
}

/* Crystal refraction lines */
.checkbox-crystal:nth-child(3) .crystal-checkmark {
    position: relative;
    overflow: visible;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8), transparent);
    animation: refractionScan 2s linear infinite;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line:nth-child(1) {
    left: 25%;
    animation-delay: 0s;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line:nth-child(2) {
    left: 50%;
    animation-delay: 0.5s;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line:nth-child(3) {
    left: 75%;
    animation-delay: 1s;
}

@keyframes refractionScan {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
}`,
    js: `// Crystal Glass checkbox functionality
document.querySelectorAll('.checkbox-crystal input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-crystal').querySelector('.crystal-label').textContent;
        
        // Create crystal shatter effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createCrystalShards(checkmark);
            
            // Add diamond refraction lines for third checkbox
            if(label.includes('Diamond')) {
                addRefractionLines(checkmark);
            }
        } else {
            // Remove refraction lines
            const lines = checkmark.querySelectorAll('.refraction-line');
            lines.forEach(line => line.remove());
        }
        
        console.log(\`Crystal: "\${label}" - \${this.checked ? 'SELECTED' : 'DESELECTED'}\`);
    });
    
    // Add crystal sound effect simulation
    checkbox.addEventListener('click', function() {
        console.log('🔊 Crystal chime sound');
    });
    
    function createCrystalShards(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#80deea', '#4dd0e1', '#26c6da', '#00bcd4'];
        
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                const shard = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 15 + 10;
                const rotation = Math.random() * 360;
                
                // Create triangle shape for shard
                shard.style.cssText = \`
                    position: fixed;
                    width: 0;
                    height: 0;
                    border-left: \${size/2}px solid transparent;
                    border-right: \${size/2}px solid transparent;
                    border-bottom: \${size}px solid \${color};
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                    transform: rotate(\${rotation}deg);
                    filter: drop-shadow(0 0 10px \${color});
                \`;
                
                document.body.appendChild(shard);
                
                // Crystal-like movement
                const distance = Math.random() * 80 + 40;
                const angle = Math.random() * Math.PI * 2;
                const duration = Math.random() * 1000 + 500;
                
                const keyframes = [
                    { 
                        transform: \`rotate(\${rotation}deg) translate(0, 0) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`rotate(\${rotation + 360}deg) translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                shard.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    shard.remove();
                }, duration);
            }, i * 60);
        }
    }
    
    function addRefractionLines(element) {
        for(let i = 1; i <= 3; i++) {
            const line = document.createElement('span');
            line.className = 'refraction-line';
            element.appendChild(line);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 41: Glitch Effect Checkbox
// ====================================================================
checkbox41: {
    name: "Glitch Effect Checkbox",
    category: "animated",
    html: `<div class="glitch-effect-container">
    <label class="checkbox-glitch">
        <input type="checkbox">
        <span class="glitch-checkmark"></span>
        <span class="glitch-label">SYSTEM CORRUPT</span>
    </label>
    <label class="checkbox-glitch">
        <input type="checkbox" checked>
        <span class="glitch-checkmark"></span>
        <span class="glitch-label">DATA BREACH</span>
    </label>
    <label class="checkbox-glitch">
        <input type="checkbox">
        <span class="glitch-checkmark"></span>
        <span class="glitch-label">HACK PROTOCOL</span>
    </label>
</div>`,
    css: `.glitch-effect-container {
    background: #000000;
    padding: 50px;
    border-radius: 20px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 50px rgba(0, 255, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 2px solid #00ff00;
}

.glitch-effect-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 6px, 8px 100%;
    pointer-events: none;
    animation: glitchScan 2s linear infinite;
    z-index: 1;
}

@keyframes glitchScan {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 0 200px, 0 0; }
}

.glitch-effect-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.1), transparent 10%),
        radial-gradient(circle at 80% 70%, rgba(0, 255, 0, 0.1), transparent 10%),
        radial-gradient(circle at 40% 80%, rgba(0, 0, 255, 0.1), transparent 10%);
    animation: glitchNoise 0.1s infinite;
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
}

@keyframes glitchNoise {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

.checkbox-glitch {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    border: 2px solid #00ff00;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: 'Courier New', monospace;
    position: relative;
    overflow: hidden;
    min-width: 350px;
    max-width: 400px;
    z-index: 2;
}

.checkbox-glitch:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 0 30px #00ff00,
        0 10px 40px rgba(0, 255, 0, 0.3);
    animation: containerGlitch 0.5s infinite;
}

@keyframes containerGlitch {
    0%, 100% { border-color: #00ff00; }
    33% { border-color: #ff0000; }
    66% { border-color: #0000ff; }
}

.checkbox-glitch::before {
    content: '>';
    position: absolute;
    left: 15px;
    color: #00ff00;
    opacity: 0;
    animation: cursorBlink 1s infinite;
    font-weight: bold;
}

.checkbox-glitch:hover::before {
    opacity: 1;
}

@keyframes cursorBlink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

.checkbox-glitch input {
    display: none;
}

.glitch-checkmark {
    width: 60px;
    height: 60px;
    border: 3px solid #00ff00;
    border-radius: 10px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 
        inset 0 0 20px rgba(0, 255, 0, 0.3),
        0 0 20px rgba(0, 255, 0, 0.2);
    flex-shrink: 0;
}

.glitch-checkmark::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 28px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
    text-shadow: 0 0 10px currentColor;
}

.glitch-checkmark::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.3), transparent);
    transition: left 0.5s ease;
}

.checkbox-glitch:hover .glitch-checkmark::after {
    left: 100%;
}

.glitch-label {
    font-size: 22px;
    color: #00ff00;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 15px #00ff00;
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
}

/* Different glitch colors */
.checkbox-glitch:nth-child(1) {
    border-color: #00ff00;
}

.checkbox-glitch:nth-child(2) {
    border-color: #ff0000;
}

.checkbox-glitch:nth-child(3) {
    border-color: #0000ff;
}

.checkbox-glitch:nth-child(1) .glitch-checkmark {
    border-color: #00ff00;
}

.checkbox-glitch:nth-child(2) .glitch-checkmark {
    border-color: #ff0000;
}

.checkbox-glitch:nth-child(3) .glitch-checkmark {
    border-color: #0000ff;
}

.checkbox-glitch:nth-child(1) .glitch-label {
    color: #00ff00;
    text-shadow: 0 0 15px #00ff00;
}

.checkbox-glitch:nth-child(2) .glitch-label {
    color: #ff0000;
    text-shadow: 0 0 15px #ff0000;
}

.checkbox-glitch:nth-child(3) .glitch-label {
    color: #0000ff;
    text-shadow: 0 0 15px #0000ff;
}

.checkbox-glitch input:checked + .glitch-checkmark {
    background: rgba(0, 0, 0, 0.95);
    animation: glitchEffect 0.5s infinite;
    box-shadow: 
        0 0 40px currentColor,
        inset 0 0 30px rgba(255, 255, 255, 0.2);
}

@keyframes glitchEffect {
    0% { 
        transform: translate(0, 0) scale(1);
        border-color: currentColor;
    }
    20% { 
        transform: translate(-4px, 4px) scale(1.05);
        border-color: #ff00ff;
    }
    40% { 
        transform: translate(4px, -4px) scale(0.95);
        border-color: #00ffff;
    }
    60% { 
        transform: translate(-4px, -4px) scale(1.1);
        border-color: #ffff00;
    }
    80% { 
        transform: translate(4px, 4px) scale(0.9);
        border-color: currentColor;
    }
    100% { 
        transform: translate(0, 0) scale(1);
        border-color: currentColor;
    }
}

.checkbox-glitch input:checked + .glitch-checkmark::before {
    color: currentColor;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.5);
    animation: glitchCheck 0.3s infinite;
}

@keyframes glitchCheck {
    0%, 100% { transform: translate(-50%, -50%); }
    25% { transform: translate(-52%, -48%); }
    50% { transform: translate(-48%, -52%); }
    75% { transform: translate(-52%, -52%); }
}

.checkbox-glitch input:checked ~ .glitch-label {
    animation: glitchText 0.5s infinite;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.3);
}

@keyframes glitchText {
    0%, 100% { 
        transform: translateX(0);
        opacity: 1;
        color: currentColor;
    }
    20% { 
        transform: translateX(-5px);
        opacity: 0.8;
        color: #ff00ff;
    }
    40% { 
        transform: translateX(5px);
        opacity: 1;
        color: #00ffff;
    }
    60% { 
        transform: translateX(-3px);
        opacity: 0.9;
        color: #ffff00;
    }
    80% { 
        transform: translateX(3px);
        opacity: 1;
        color: currentColor;
    }
}

/* Glitch distortion lines */
.glitch-distortion {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, currentColor, transparent);
    opacity: 0;
    animation: distortionLine 2s linear infinite;
}

.checkbox-glitch input:checked ~ .glitch-distortion {
    opacity: 0.5;
}

@keyframes distortionLine {
    0% { 
        transform: translateY(0);
        opacity: 0;
    }
    10% { 
        transform: translateY(0);
        opacity: 0.5;
    }
    90% { 
        transform: translateY(100%);
        opacity: 0.5;
    }
    100% { 
        transform: translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Glitch Effect checkbox functionality
document.querySelectorAll('.checkbox-glitch input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-glitch').querySelector('.glitch-label').textContent;
        
        // Create glitch distortion effect
        const container = this.closest('.checkbox-glitch');
        if(this.checked) {
            createGlitchDistortion(container);
            
            // Add distortion lines
            for(let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.className = 'glitch-distortion';
                    line.style.top = \`\${Math.random() * 100}%\`;
                    line.style.animationDelay = \`\${Math.random() * 2}s\`;
                    container.appendChild(line);
                    
                    setTimeout(() => {
                        line.remove();
                    }, 2000);
                }, i * 200);
            }
        }
        
        console.log(\`[GLITCH] "\${label}" - \${this.checked ? 'CORRUPTED' : 'RESTORED'}\`);
        
        // Simulate glitch sound
        if(this.checked) {
            console.log('🔊 *STATIC NOISE* System corrupted');
        }
    });
    
    // Random glitch effect on hover
    checkbox.addEventListener('mouseenter', function() {
        const label = this.nextElementSibling.nextElementSibling;
        const originalText = label.textContent;
        
        // Temporarily glitch the text
        const glitchInterval = setInterval(() => {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            let glitchedText = '';
            
            for(let i = 0; i < originalText.length; i++) {
                if(Math.random() > 0.7) {
                    glitchedText += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    glitchedText += originalText[i];
                }
            }
            
            label.textContent = glitchedText;
        }, 50);
        
        setTimeout(() => {
            clearInterval(glitchInterval);
            label.textContent = originalText;
        }, 300);
    });
    
    function createGlitchDistortion(element) {
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const distortion = document.createElement('span');
                const colors = ['#00ff00', '#ff0000', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const width = Math.random() * 20 + 10;
                const height = Math.random() * 10 + 5;
                
                distortion.style.cssText = \`
                    position: fixed;
                    width: \${width}px;
                    height: \${height}px;
                    background: \${color};
                    top: \${rect.top + Math.random() * rect.height}px;
                    left: \${rect.left + Math.random() * rect.width}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.7;
                    filter: blur(1px);
                    mix-blend-mode: screen;
                \`;
                
                document.body.appendChild(distortion);
                
                // Glitch movement
                const duration = Math.random() * 300 + 200;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.7 
                    },
                    { 
                        transform: \`translate(\${Math.random() * 40 - 20}px, \${Math.random() * 40 - 20}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                distortion.animate(keyframes, {
                    duration: duration,
                    easing: 'linear'
                });
                
                setTimeout(() => {
                    distortion.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 42: Fire & Flame Checkbox
// ====================================================================
checkbox42: {
    name: "Fire & Flame Checkbox",
    category: "animated",
    html: `<div class="fire-flame-container">
    <label class="checkbox-fire">
        <input type="checkbox">
        <span class="fire-checkmark">
            <span class="fire-flame">🔥</span>
        </span>
        <span class="fire-label">Wildfire</span>
    </label>
    <label class="checkbox-fire">
        <input type="checkbox" checked>
        <span class="fire-checkmark">
            <span class="fire-flame">🔥</span>
        </span>
        <span class="fire-label">Inferno</span>
    </label>
    <label class="checkbox-fire">
        <input type="checkbox">
        <span class="fire-checkmark">
            <span class="fire-flame">🔥</span>
        </span>
        <span class="fire-label">Blaze</span>
    </label>
</div>`,
    css: `.fire-flame-container {
    background: linear-gradient(135deg, #ff6b35 0%, #ffa500 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 30px 60px rgba(255, 107, 53, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.fire-flame-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.6), transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(255, 165, 0, 0.6), transparent 50%);
    animation: fireAmbient 5s ease infinite alternate;
    filter: blur(40px);
    z-index: 1;
}

@keyframes fireAmbient {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(40px) brightness(1);
    }
    50% { 
        transform: translate(10px, -10px) scale(1.1);
        filter: blur(50px) brightness(1.2);
    }
    100% { 
        transform: translate(-10px, 10px) scale(0.9);
        filter: blur(30px) brightness(0.9);
    }
}

.checkbox-fire {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 2px solid rgba(255, 107, 53, 0.6);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-fire:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(255, 107, 53, 0.7),
        0 0 0 3px rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.5);
}

.checkbox-fire::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.3), transparent);
    transition: left 0.6s ease;
}

.checkbox-fire:hover::before {
    left: 100%;
}

.checkbox-fire input {
    display: none;
}

.fire-checkmark {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(255, 107, 53, 0.7);
    border-radius: 15px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 
        inset 0 0 30px rgba(255, 107, 53, 0.4),
        0 10px 30px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
}

.fire-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(255, 107, 53, 0.3), transparent 70%);
    border-radius: 12px;
}

.fire-flame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    transition: all 0.3s ease;
    filter: 
        drop-shadow(0 0 10px #ff6b35)
        drop-shadow(0 0 20px #ffa500);
    z-index: 2;
}

.fire-label {
    font-size: 24px;
    color: #ffa500;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 
        0 0 20px rgba(255, 107, 53, 0.8),
        0 0 40px rgba(255, 165, 0, 0.5);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial Black', sans-serif;
}

/* Different fire intensities */
.checkbox-fire:nth-child(1) .fire-checkmark {
    border-color: rgba(255, 107, 53, 0.6);
}

.checkbox-fire:nth-child(2) .fire-checkmark {
    border-color: rgba(255, 69, 0, 0.7);
}

.checkbox-fire:nth-child(3) .fire-checkmark {
    border-color: rgba(255, 0, 0, 0.8);
}

.checkbox-fire:nth-child(1) input:checked + .fire-checkmark {
    background: linear-gradient(135deg, #ff6b35, #ffa500);
}

.checkbox-fire:nth-child(2) input:checked + .fire-checkmark {
    background: linear-gradient(135deg, #ff4500, #ff8c00);
}

.checkbox-fire:nth-child(3) input:checked + .fire-checkmark {
    background: linear-gradient(135deg, #ff0000, #ff4500);
}

.checkbox-fire input:checked + .fire-checkmark {
    transform: scale(1.15);
    animation: fireBurn 2s ease infinite alternate;
    box-shadow: 
        0 0 60px currentColor,
        inset 0 0 40px rgba(255, 255, 255, 0.4),
        0 20px 50px rgba(0, 0, 0, 0.7);
    border-color: transparent;
}

@keyframes fireBurn {
    0% { 
        transform: scale(1.15);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(255, 255, 255, 0.4);
    }
    50% { 
        transform: scale(1.2);
        box-shadow: 
            0 0 80px currentColor,
            inset 0 0 50px rgba(255, 255, 255, 0.6);
    }
    100% { 
        transform: scale(1.15);
        box-shadow: 
            0 0 60px currentColor,
            inset 0 0 40px rgba(255, 255, 255, 0.5);
    }
}

.checkbox-fire input:checked + .fire-checkmark .fire-flame {
    filter: 
        drop-shadow(0 0 20px #ff6b35)
        drop-shadow(0 0 40px #ffa500)
        drop-shadow(0 0 60px #ffff00);
    animation: flameFlicker 0.3s infinite alternate;
}

@keyframes flameFlicker {
    0% { 
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        filter: 
            drop-shadow(0 0 15px #ff6b35)
            drop-shadow(0 0 30px #ffa500);
    }
    33% { 
        transform: translate(-50%, -52%) scale(1.1) rotate(-5deg);
        filter: 
            drop-shadow(0 0 20px #ff4500)
            drop-shadow(0 0 40px #ff8c00);
    }
    66% { 
        transform: translate(-50%, -48%) scale(1.05) rotate(5deg);
        filter: 
            drop-shadow(0 0 18px #ffa500)
            drop-shadow(0 0 35px #ffff00);
    }
    100% { 
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        filter: 
            drop-shadow(0 0 15px #ff6b35)
            drop-shadow(0 0 30px #ffa500);
    }
}

.checkbox-fire input:checked ~ .fire-label {
    color: #ff6b35;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.5);
    animation: fireText 1.5s ease infinite alternate;
}

.checkbox-fire:nth-child(1) input:checked ~ .fire-label {
    color: #ff6b35;
}

.checkbox-fire:nth-child(2) input:checked ~ .fire-label {
    color: #ff4500;
}

.checkbox-fire:nth-child(3) input:checked ~ .fire-label {
    color: #ff0000;
}

@keyframes fireText {
    0% { 
        transform: translateX(0);
        letter-spacing: 1.5px;
    }
    100% { 
        transform: translateX(5px);
        letter-spacing: 3px;
    }
}

/* Create heat waves */
.heat-wave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    animation: heatRipple 2s linear infinite;
}

.checkbox-fire input:checked ~ .heat-wave {
    opacity: 0.3;
}

@keyframes heatRipple {
    0% { 
        transform: translateY(-100%);
        opacity: 0;
    }
    50% { 
        transform: translateY(0);
        opacity: 0.3;
    }
    100% { 
        transform: translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Fire & Flame checkbox functionality
document.querySelectorAll('.checkbox-fire input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-fire').querySelector('.fire-label').textContent;
        
        // Create fire particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createFireParticles(checkmark);
            
            // Add heat waves
            for(let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const heatWave = document.createElement('div');
                    heatWave.className = 'heat-wave';
                    heatWave.style.animationDelay = \`\${i * 0.5}s\`;
                    this.closest('.checkbox-fire').appendChild(heatWave);
                    
                    setTimeout(() => {
                        heatWave.remove();
                    }, 2000);
                }, i * 500);
            }
        }
        
        console.log(\`Fire Mode: "\${label}" - \${this.checked ? 'IGNITED' : 'EXTINGUISHED'}\`);
        
        // Simulate fire sound
        if(this.checked) {
            console.log('🔥 *CRACKLING FIRE*');
        }
    });
    
    // Add hover heat effect
    checkbox.addEventListener('mouseenter', function() {
        const checkmark = this.nextElementSibling;
        checkmark.style.boxShadow = \`
            inset 0 0 40px rgba(255, 107, 53, 0.6),
            0 0 40px rgba(255, 107, 53, 0.5)
        \`;
    });
    
    checkbox.addEventListener('mouseleave', function() {
        const checkmark = this.nextElementSibling;
        if(!this.checked) {
            checkmark.style.boxShadow = \`
                inset 0 0 30px rgba(255, 107, 53, 0.4),
                0 10px 30px rgba(0, 0, 0, 0.5)
            \`;
        }
    });
    
    function createFireParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#ff6b35', '#ffa500', '#ffff00', '#ff4500', '#ff0000'];
        
        for(let i = 0; i < 15; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 12 + 8;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 0 0 20px \${color};
                    filter: blur(1px);
                \`;
                
                document.body.appendChild(particle);
                
                // Fire-like movement (upwards with flicker)
                const distanceX = Math.random() * 40 - 20;
                const distanceY = Math.random() * -80 - 40;
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${distanceX}px, \${distanceY}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                // Flicker effect
                const flickerKeyframes = [
                    { opacity: 0.9, transform: 'scale(1)' },
                    { opacity: 0.6, transform: 'scale(1.2)' },
                    { opacity: 0.9, transform: 'scale(1)' }
                ];
                
                particle.animate(flickerKeyframes, {
                    duration: 100,
                    iterations: Math.floor(duration / 100)
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 43: Neural Network Checkbox
// ====================================================================
checkbox43: {
    name: "Neural Network Checkbox",
    category: "animated",
    html: `<div class="neural-network-container">
    <label class="checkbox-neural">
        <input type="checkbox">
        <span class="neural-checkmark">
            <span class="neuron"></span>
            <span class="synapse"></span>
        </span>
        <span class="neural-label">AI Processor</span>
    </label>
    <label class="checkbox-neural">
        <input type="checkbox" checked>
        <span class="neural-checkmark">
            <span class="neuron"></span>
            <span class="synapse"></span>
            <span class="synapse" style="width: 40px; height: 40px;"></span>
        </span>
        <span class="neural-label">Deep Learning</span>
    </label>
    <label class="checkbox-neural">
        <input type="checkbox">
        <span class="neural-checkmark">
            <span class="neuron"></span>
            <span class="synapse"></span>
        </span>
        <span class="neural-label">Neural Mesh</span>
    </label>
</div>`,
    css: `.neural-network-container {
    background: #0a0e17;
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 30px 60px rgba(102, 51, 153, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.neural-network-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(102, 51, 153, 0.3), transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(0, 204, 204, 0.3), transparent 50%);
    animation: neuralNetwork 15s ease infinite alternate;
    z-index: 1;
}

@keyframes neuralNetwork {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(20px);
    }
    33% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(25px);
    }
    66% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(15px);
    }
    100% { 
        transform: translate(0, 0) scale(1);
        filter: blur(20px);
    }
}

/* Neural connections animation */
.neural-network-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(90deg, transparent 49%, rgba(0, 204, 204, 0.1) 50%, transparent 51%),
        linear-gradient(transparent 49%, rgba(0, 204, 204, 0.1) 50%, transparent 51%);
    background-size: 50px 50px;
    animation: neuralGrid 20s linear infinite;
    opacity: 0.1;
    z-index: 1;
}

@keyframes neuralGrid {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

.checkbox-neural {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(16, 24, 40, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 2px solid rgba(102, 51, 153, 0.4);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-neural:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(102, 51, 153, 0.6),
        0 0 0 3px rgba(0, 204, 204, 0.2);
    border-color: rgba(0, 204, 204, 0.6);
}

.checkbox-neural::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 204, 0.2), transparent);
    transition: left 0.8s ease;
}

.checkbox-neural:hover::before {
    left: 100%;
}

.checkbox-neural input {
    display: none;
}

.neural-checkmark {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(102, 51, 153, 0.6);
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    overflow: visible;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(16, 24, 40, 0.95);
    box-shadow: 
        inset 0 0 30px rgba(102, 51, 153, 0.4),
        0 10px 30px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
}

.neural-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(102, 51, 153, 0.3), transparent 70%);
    border-radius: 50%;
}

.neuron {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #663399;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 
        0 0 15px #663399,
        inset 0 0 5px rgba(255, 255, 255, 0.3);
    z-index: 2;
}

.synapse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 2px solid rgba(0, 204, 204, 0.3);
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 1;
}

.synapse:nth-child(3) {
    width: 70px;
    height: 70px;
    border-width: 1px;
}

.neural-label {
    font-size: 22px;
    color: #00cccc;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 
        0 0 20px rgba(0, 204, 204, 0.6),
        0 0 40px rgba(102, 51, 153, 0.3);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
}

/* Different neural patterns */
.checkbox-neural:nth-child(1) .neural-checkmark {
    border-color: rgba(102, 51, 153, 0.6);
}

.checkbox-neural:nth-child(2) .neural-checkmark {
    border-color: rgba(0, 204, 204, 0.6);
}

.checkbox-neural:nth-child(3) .neural-checkmark {
    border-color: rgba(153, 50, 204, 0.6);
}

.checkbox-neural:nth-child(1) .neuron {
    background: #663399;
}

.checkbox-neural:nth-child(2) .neuron {
    background: #00cccc;
}

.checkbox-neural:nth-child(3) .neuron {
    background: #9932cc;
}

.checkbox-neural input:checked + .neural-checkmark {
    border-color: transparent;
    background: radial-gradient(circle, #663399, #0a0e17);
    transform: scale(1.15);
    animation: neuralActivate 2s ease infinite alternate;
    box-shadow: 
        0 0 60px currentColor,
        inset 0 0 40px rgba(0, 204, 204, 0.4),
        0 20px 50px rgba(0, 0, 0, 0.8);
}

.checkbox-neural:nth-child(1) input:checked + .neural-checkmark {
    background: radial-gradient(circle, #663399, #0a0e17);
}

.checkbox-neural:nth-child(2) input:checked + .neural-checkmark {
    background: radial-gradient(circle, #00cccc, #0a0e17);
}

.checkbox-neural:nth-child(3) input:checked + .neural-checkmark {
    background: radial-gradient(circle, #9932cc, #0a0e17);
}

@keyframes neuralActivate {
    0% { 
        transform: scale(1.15);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(0, 204, 204, 0.4);
    }
    100% { 
        transform: scale(1.2);
        box-shadow: 
            0 0 80px currentColor,
            inset 0 0 50px rgba(0, 204, 204, 0.6);
    }
}

.checkbox-neural input:checked + .neural-checkmark .neuron {
    background: #00cccc;
    box-shadow: 
        0 0 30px #00cccc,
        inset 0 0 10px rgba(255, 255, 255, 0.5);
    animation: neuronFire 0.5s infinite alternate;
}

@keyframes neuronFire {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        filter: brightness(1);
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.4);
        filter: brightness(1.5);
    }
}

.checkbox-neural input:checked + .neural-checkmark .synapse {
    border-color: #00cccc;
    animation: synapseOrbit 4s linear infinite;
}

.checkbox-neural input:checked + .neural-checkmark .synapse:nth-child(3) {
    animation: synapseOrbit 6s linear infinite reverse;
}

@keyframes synapseOrbit {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg);
        border-color: #00cccc;
    }
    25% { 
        transform: translate(-50%, -50%) rotate(90deg);
        border-color: #663399;
    }
    50% { 
        transform: translate(-50%, -50%) rotate(180deg);
        border-color: #9932cc;
    }
    75% { 
        transform: translate(-50%, -50%) rotate(270deg);
        border-color: #00cccc;
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg);
        border-color: #00cccc;
    }
}

.checkbox-neural input:checked ~ .neural-label {
    color: #ffffff;
    text-shadow: 
        0 0 40px currentColor,
        0 0 80px rgba(255, 255, 255, 0.3);
    animation: neuralText 2s ease infinite alternate;
}

.checkbox-neural:nth-child(1) input:checked ~ .neural-label {
    color: #00cccc;
}

.checkbox-neural:nth-child(2) input:checked ~ .neural-label {
    color: #663399;
}

.checkbox-neural:nth-child(3) input:checked ~ .neural-label {
    color: #9932cc;
}

@keyframes neuralText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
    }
    100% { 
        letter-spacing: 3px;
        transform: translateX(10px);
    }
}

/* Create neural connections between checkboxes */
.neural-connection {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00cccc, transparent);
    transform-origin: left center;
    opacity: 0;
    filter: blur(1px);
    z-index: 1;
}

.checkbox-neural input:checked ~ .neural-connection {
    opacity: 0.3;
    animation: neuralFlow 2s linear infinite;
}

@keyframes neuralFlow {
    0% { 
        background-position: 0% 50%;
        opacity: 0.3;
    }
    50% { 
        background-position: 100% 50%;
        opacity: 0.6;
    }
    100% { 
        background-position: 0% 50%;
        opacity: 0.3;
    }
}`,
    js: `// Neural Network checkbox functionality
document.querySelectorAll('.checkbox-neural input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-neural').querySelector('.neural-label').textContent;
        
        // Create neural network effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createNeuralParticles(checkmark);
            createNeuralConnections();
        } else {
            removeNeuralConnections();
        }
        
        console.log(\`Neural Network: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
        
        // Simulate neural sound
        if(this.checked) {
            console.log('🔊 *NEURAL BEEP* Synapses firing');
        }
    });
    
    // Create neural connections between activated checkboxes
    function createNeuralConnections() {
        const checkboxes = document.querySelectorAll('.checkbox-neural input:checked');
        const container = document.querySelector('.neural-network-container');
        
        // Remove existing connections
        removeNeuralConnections();
        
        if(checkboxes.length > 1) {
            const positions = [];
            checkboxes.forEach(cb => {
                const rect = cb.nextElementSibling.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                positions.push({
                    x: rect.left + rect.width/2 - containerRect.left,
                    y: rect.top + rect.height/2 - containerRect.top
                });
            });
            
            // Create connections between all activated neurons
            for(let i = 0; i < positions.length - 1; i++) {
                for(let j = i + 1; j < positions.length; j++) {
                    const connection = document.createElement('div');
                    const dx = positions[j].x - positions[i].x;
                    const dy = positions[j].y - positions[i].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    
                    connection.className = 'neural-connection';
                    connection.style.cssText = \`
                        position: absolute;
                        top: \${positions[i].y}px;
                        left: \${positions[i].x}px;
                        width: \${distance}px;
                        transform: rotate(\${angle}deg);
                        z-index: 1;
                    \`;
                    
                    container.appendChild(connection);
                }
            }
        }
    }
    
    function removeNeuralConnections() {
        const connections = document.querySelectorAll('.neural-connection');
        connections.forEach(conn => conn.remove());
    }
    
    function createNeuralParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#663399', '#00cccc', '#9932cc', '#ffffff'];
        
        for(let i = 0; i < 12; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 6 + 3;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 0 0 15px \${color};
                \`;
                
                document.body.appendChild(particle);
                
                // Neural-like movement (random with some intelligence)
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const duration = Math.random() * 1000 + 500;
                
                // Create a "smart" path (not completely random)
                const controlX = Math.cos(angle + Math.PI/4) * distance/2;
                const controlY = Math.sin(angle + Math.PI/4) * distance/2;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${controlX}px, \${controlY}px) scale(1.2)\`,
                        opacity: 0.7 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 100);
        }
    }
    
    // Update connections when any checkbox changes
    document.querySelectorAll('.checkbox-neural input').forEach(cb => {
        cb.addEventListener('change', createNeuralConnections);
    });
});`
},
// ====================================================================
// TEMPLATE 44: Quantum Particle Checkbox
// ====================================================================
checkbox44: {
    name: "Quantum Particle Checkbox",
    category: "animated",
    html: `<div class="quantum-particle-container">
    <label class="checkbox-quantum">
        <input type="checkbox">
        <span class="quantum-checkmark">
            <span class="particle">⚛️</span>
        </span>
        <span class="quantum-label">Superposition</span>
    </label>
    <label class="checkbox-quantum">
        <input type="checkbox" checked>
        <span class="quantum-checkmark">
            <span class="particle">⚛️</span>
        </span>
        <span class="quantum-label">Entanglement</span>
    </label>
    <label class="checkbox-quantum">
        <input type="checkbox">
        <span class="quantum-checkmark">
            <span class="particle">⚛️</span>
        </span>
        <span class="quantum-label">Wave Function</span>
    </label>
</div>`,
    css: `.quantum-particle-container {
    background: linear-gradient(135deg, #0b3d91 0%, #1a237e 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 30px 60px rgba(66, 165, 245, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.quantum-particle-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(66, 165, 245, 0.4), transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(171, 71, 188, 0.4), transparent 50%);
    animation: quantumUniverse 20s ease infinite alternate;
    filter: blur(50px);
    z-index: 1;
}

@keyframes quantumUniverse {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px) hue-rotate(0deg);
    }
    25% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(60px) hue-rotate(90deg);
    }
    50% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(40px) hue-rotate(180deg);
    }
    75% { 
        transform: translate(20px, 20px) scale(1.05);
        filter: blur(55px) hue-rotate(270deg);
    }
    100% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px) hue-rotate(360deg);
    }
}

/* Quantum probability waves */
.quantum-particle-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 2px),
        radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.05) 1px, transparent 2px);
    background-size: 100px 100px;
    animation: quantumWaves 10s linear infinite;
    opacity: 0.3;
    z-index: 1;
}

@keyframes quantumWaves {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

.checkbox-quantum {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(13, 27, 42, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 2px solid rgba(66, 165, 245, 0.4);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-quantum:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(66, 165, 245, 0.6),
        0 0 0 3px rgba(171, 71, 188, 0.2);
    border-color: rgba(171, 71, 188, 0.6);
}

.checkbox-quantum::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(171, 71, 188, 0.3), transparent);
    transition: left 0.8s ease;
}

.checkbox-quantum:hover::before {
    left: 100%;
}

.checkbox-quantum input {
    display: none;
}

.quantum-checkmark {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(66, 165, 245, 0.6);
    border-radius: 15px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(13, 27, 42, 0.95);
    box-shadow: 
        inset 0 0 30px rgba(66, 165, 245, 0.4),
        0 10px 30px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
}

.quantum-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        rgba(66, 165, 245, 0.2) 0%, 
        rgba(171, 71, 188, 0.2) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.particle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    transition: all 0.3s ease;
    filter: 
        drop-shadow(0 0 15px #42a5f5)
        drop-shadow(0 0 30px #ab47bc);
    z-index: 2;
}

.quantum-label {
    font-size: 22px;
    color: #42a5f5;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 
        0 0 20px rgba(66, 165, 245, 0.6),
        0 0 40px rgba(171, 71, 188, 0.3);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

/* Different quantum states */
.checkbox-quantum:nth-child(1) .quantum-checkmark {
    border-color: rgba(66, 165, 245, 0.6);
}

.checkbox-quantum:nth-child(2) .quantum-checkmark {
    border-color: rgba(171, 71, 188, 0.6);
}

.checkbox-quantum:nth-child(3) .quantum-checkmark {
    border-color: rgba(0, 188, 212, 0.6);
}

.checkbox-quantum:nth-child(1) input:checked + .quantum-checkmark {
    background: linear-gradient(135deg, #42a5f5, #2196f3);
}

.checkbox-quantum:nth-child(2) input:checked + .quantum-checkmark {
    background: linear-gradient(135deg, #ab47bc, #7b1fa2);
}

.checkbox-quantum:nth-child(3) input:checked + .quantum-checkmark {
    background: linear-gradient(135deg, #00bcd4, #0097a7);
}

.checkbox-quantum input:checked + .quantum-checkmark {
    border-color: transparent;
    transform: scale(1.15);
    animation: quantumSuperposition 3s ease infinite alternate;
    box-shadow: 
        0 0 60px currentColor,
        inset 0 0 40px rgba(255, 255, 255, 0.4),
        0 20px 50px rgba(0, 0, 0, 0.8);
}

@keyframes quantumSuperposition {
    0% { 
        transform: scale(1.15);
        filter: hue-rotate(0deg);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(255, 255, 255, 0.4);
    }
    33% { 
        transform: scale(1.2);
        filter: hue-rotate(120deg);
        box-shadow: 
            0 0 70px currentColor,
            inset 0 0 45px rgba(255, 255, 255, 0.5);
    }
    66% { 
        transform: scale(1.18);
        filter: hue-rotate(240deg);
        box-shadow: 
            0 0 60px currentColor,
            inset 0 0 35px rgba(255, 255, 255, 0.45);
    }
    100% { 
        transform: scale(1.15);
        filter: hue-rotate(360deg);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(255, 255, 255, 0.4);
    }
}

.checkbox-quantum input:checked + .quantum-checkmark::before {
    opacity: 1;
    animation: quantumWave 2s linear infinite;
}

@keyframes quantumWave {
    0% { 
        background-position: 0% 50%;
        transform: rotate(0deg);
    }
    50% { 
        background-position: 100% 50%;
        transform: rotate(180deg);
    }
    100% { 
        background-position: 0% 50%;
        transform: rotate(360deg);
    }
}

.checkbox-quantum input:checked + .quantum-checkmark .particle {
    animation: quantumDuality 4s linear infinite;
    filter: 
        drop-shadow(0 0 25px currentColor)
        drop-shadow(0 0 50px rgba(255, 255, 255, 0.3));
}

@keyframes quantumDuality {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
        filter: 
            drop-shadow(0 0 20px #42a5f5)
            drop-shadow(0 0 40px #ab47bc);
    }
    25% { 
        transform: translate(-50%, -50%) rotate(90deg) scale(1.3);
        filter: 
            drop-shadow(0 0 25px #ab47bc)
            drop-shadow(0 0 50px #42a5f5);
    }
    50% { 
        transform: translate(-50%, -50%) rotate(180deg) scale(1);
        filter: 
            drop-shadow(0 0 20px #00bcd4)
            drop-shadow(0 0 40px #ab47bc);
    }
    75% { 
        transform: translate(-50%, -50%) rotate(270deg) scale(1.3);
        filter: 
            drop-shadow(0 0 25px #42a5f5)
            drop-shadow(0 0 50px #00bcd4);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg) scale(1);
        filter: 
            drop-shadow(0 0 20px #42a5f5)
            drop-shadow(0 0 40px #ab47bc);
    }
}

.checkbox-quantum input:checked ~ .quantum-label {
    color: #ffffff;
    text-shadow: 
        0 0 40px currentColor,
        0 0 80px rgba(255, 255, 255, 0.3);
    animation: quantumText 2s ease infinite alternate;
}

.checkbox-quantum:nth-child(1) input:checked ~ .quantum-label {
    color: #42a5f5;
}

.checkbox-quantum:nth-child(2) input:checked ~ .quantum-label {
    color: #ab47bc;
}

.checkbox-quantum:nth-child(3) input:checked ~ .quantum-label {
    color: #00bcd4;
}

@keyframes quantumText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
        opacity: 1;
    }
    50% { 
        letter-spacing: 3px;
        transform: translateX(5px);
        opacity: 0.8;
    }
    100% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
        opacity: 1;
    }
}

/* Quantum entanglement effect */
.quantum-entanglement {
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, currentColor, transparent);
    opacity: 0;
    filter: blur(2px);
    z-index: 1;
}

.checkbox-quantum input:checked ~ .quantum-entanglement {
    opacity: 0.4;
    animation: entanglement 2s linear infinite;
}

@keyframes entanglement {
    0% { 
        transform: translateY(-100%);
        opacity: 0;
    }
    50% { 
        transform: translateY(0);
        opacity: 0.4;
    }
    100% { 
        transform: translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Quantum Particle checkbox functionality
document.querySelectorAll('.checkbox-quantum input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-quantum').querySelector('.quantum-label').textContent;
        
        // Create quantum particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createQuantumParticles(checkmark);
            
            // Add entanglement effect
            for(let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const entanglement = document.createElement('div');
                    entanglement.className = 'quantum-entanglement';
                    entanglement.style.left = \`\${Math.random() * 100}%\`;
                    entanglement.style.animationDelay = \`\${i * 0.3}s\`;
                    this.closest('.checkbox-quantum').appendChild(entanglement);
                    
                    setTimeout(() => {
                        entanglement.remove();
                    }, 2000);
                }, i * 300);
            }
        }
        
        console.log(\`Quantum State: "\${label}" - \${this.checked ? 'OBSERVED' : 'UNOBSERVED'}\`);
        
        // Quantum observation effect
        if(this.checked) {
            // Create wave function collapse effect
            const container = this.closest('.checkbox-quantum');
            container.style.animation = 'none';
            setTimeout(() => {
                container.style.animation = '';
            }, 100);
            
            console.log('🔊 *QUANTUM COLLAPSE* Wave function collapsed');
        }
    });
    
    // Add quantum uncertainty on hover
    checkbox.addEventListener('mouseenter', function() {
        const checkmark = this.nextElementSibling;
        const particle = checkmark.querySelector('.particle');
        
        // Create uncertainty effect (particle appears in multiple places)
        const uncertaintyInterval = setInterval(() => {
            const x = Math.random() * 20 - 10;
            const y = Math.random() * 20 - 10;
            particle.style.transform = \`translate(\${x}px, \${y}px)\`;
        }, 100);
        
        setTimeout(() => {
            clearInterval(uncertaintyInterval);
            if(!this.checked) {
                particle.style.transform = 'translate(-50%, -50%)';
            }
        }, 500);
    });
    
    function createQuantumParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#42a5f5', '#ab47bc', '#00bcd4', '#ffffff'];
        
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                // Create particle and anti-particle pairs
                for(let j = 0; j < 2; j++) {
                    const particle = document.createElement('span');
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const size = Math.random() * 8 + 4;
                    const isAnti = j === 1;
                    
                    particle.style.cssText = \`
                        position: fixed;
                        width: \${size}px;
                        height: \${size}px;
                        background: \${color};
                        border-radius: 50%;
                        top: \${rect.top + rect.height/2}px;
                        left: \${rect.left + rect.width/2}px;
                        pointer-events: none;
                        z-index: 1000;
                        opacity: 0.9;
                        box-shadow: 0 0 20px \${color};
                        filter: blur(\${isAnti ? '2px' : '1px'});
                    \`;
                    
                    if(isAnti) {
                        particle.style.background = 'conic-gradient(from 0deg, transparent, white, transparent)';
                        particle.style.mixBlendMode = 'screen';
                    }
                    
                    document.body.appendChild(particle);
                    
                    // Quantum-like movement (uncertain position)
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 120 + 60;
                    const duration = Math.random() * 1200 + 600;
                    
                    // Quantum tunneling effect (teleportation)
                    const keyframes = [
                        { 
                            transform: \`translate(0, 0) scale(1)\`,
                            opacity: 0.9 
                        },
                        { 
                            transform: \`translate(\${Math.cos(angle) * distance/2}px, \${Math.sin(angle) * distance/2}px) scale(0.5)\`,
                            opacity: 0.5 
                        },
                        { 
                            transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                            opacity: 0 
                        }
                    ];
                    
                    particle.animate(keyframes, {
                        duration: duration,
                        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    });
                    
                    setTimeout(() => {
                        particle.remove();
                    }, duration);
                }
            }, i * 150);
        }
    }
    
    // Quantum entanglement between checkboxes
    const checkboxes = document.querySelectorAll('.checkbox-quantum input');
    checkboxes.forEach(cb1 => {
        cb1.addEventListener('change', function() {
            if(this.checked) {
                // When one quantum checkbox is checked, others might get affected
                const probability = 0.3; // 30% chance of entanglement
                if(Math.random() < probability) {
                    checkboxes.forEach(cb2 => {
                        if(cb2 !== this && !cb2.checked && Math.random() < 0.5) {
                            setTimeout(() => {
                                cb2.click();
                                console.log('⚛️ Quantum entanglement detected!');
                            }, 300);
                        }
                    });
                }
            }
        });
    });
});`
},

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