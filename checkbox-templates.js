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