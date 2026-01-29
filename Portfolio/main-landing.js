/* ========================================= */
/* LANDING PAGE JAVASCRIPT */
/* ========================================= */

// --- 1. MAGICAL PARTICLE SYSTEM FOR HERO ---
const canvas = document.getElementById('magic-canvas');
let particles = [];
let mouse = { x: undefined, y: undefined };
let ctx = null;
let animationFrameId = null;
let isAnimating = true;

if (canvas) {
    ctx = canvas.getContext('2d');
    
    const colors = [
        'rgba(255, 0, 136, 0.9)',   
        'rgba(255, 179, 217, 0.9)', 
        'rgba(163, 0, 163, 0.9)',   
        'rgba(247, 163, 255, 0.9)'  
    ];

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1; 
            this.color = color;
            
            this.velocity = {
                x: (Math.random() - 0.5) * 5.0,
                y: (Math.random() - 0.5) * 5.0
            };
            this.life = 150; 
        }

        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.size *= 0.98; 
            this.life -= 1; 
            this.velocity.y -= 0.01; 
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            
            ctx.shadowBlur = this.size * 8; 
            ctx.shadowColor = this.color.replace(/0.9/g, '1'); 
            
            ctx.fillStyle = this.color;
            ctx.fill();
            
            ctx.shadowBlur = 0; 
            ctx.shadowColor = 'transparent';
        }
    }

    function initCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function animate() {
        if (!isAnimating) {
            animationFrameId = null;
            return;
        }
        
        animationFrameId = requestAnimationFrame(animate); 
        
        ctx.fillStyle = 'rgba(13, 0, 26, 0.1)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].size < 0.2 || particles[i].life < 0) {
                particles.splice(i, 1);
            }
        }
    }

    // Mousemove handler - throttled
    let mouseMoveTimeout;
    canvas.addEventListener('mousemove', (event) => {
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;

            const particleCount = Math.floor(Math.random() * 4) + 5;
            for (let i = 0; i < particleCount; i++) {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(mouse.x, mouse.y, randomColor));
            }
        }, 16);
    });

    // Initialize and start animation
    initCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// --- 2. MAGICAL AURA EFFECT ON HERO HOVER ---
const heroSection = document.getElementById('hero-landing');

if (heroSection) {
    let auraGlow = null;
    
    // Create aura element
    const createAura = () => {
        if (!auraGlow) {
            auraGlow = document.createElement('div');
            auraGlow.className = 'madoka-aura';
            auraGlow.style.cssText = `
                position: absolute;
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background: radial-gradient(circle,
                    rgba(255, 179, 217, 0.4) 0%,
                    rgba(255, 0, 136, 0.3) 30%,
                    rgba(247, 163, 255, 0.2) 60%,
                    transparent 100%
                );
                pointer-events: none;
                z-index: 4;
                filter: blur(40px);
                opacity: 0;
                transition: opacity 0.5s ease;
                mix-blend-mode: screen;
            `;
            heroSection.appendChild(auraGlow);
        }
    };
    
    createAura();
    
    // Track mouse movement
    heroSection.addEventListener('mousemove', (e) => {
        if (auraGlow) {
            const x = e.clientX;
            const y = e.clientY;
            
            // Position aura at mouse
            auraGlow.style.left = `${x - 200}px`;
            auraGlow.style.top = `${y - 200}px`;
            
            // Show aura
            auraGlow.style.opacity = '1';
        }
    });
    
    // Fade out when mouse leaves
    heroSection.addEventListener('mouseleave', () => {
        if (auraGlow) {
            auraGlow.style.opacity = '0';
        }
    });
}

// --- 3. SOUL GEM BUTTON & ENTER PORTFOLIO WITH TRANSITION ---
const soulGemBtn = document.getElementById('soul-gem-btn');
const viewPortfolioBtn = document.getElementById('view-full-portfolio');

function createTransitionOverlay() {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(circle at center,
            rgba(255, 0, 136, 0.8) 0%,
            rgba(163, 0, 163, 0.9) 50%,
            rgba(13, 0, 26, 1) 100%
        );
        z-index: 99999;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        transition: opacity 0.8s ease;
    `;
    
    // Create Madokami image
    const madokami = document.createElement('img');
    madokami.src = 'images/madokami-full.png';
    madokami.style.cssText = `
        width: 400px;
        height: auto;
        opacity: 0;
        transform: scale(0.5) translateY(100px);
        filter: drop-shadow(0 0 40px #ff0088) drop-shadow(0 0 80px #f7a3ff);
        transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    `;
    
    overlay.appendChild(madokami);
    document.body.appendChild(overlay);
    
    return { overlay, madokami };
}

function goToPortfolio() {
    // Stop animation
    isAnimating = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    const { overlay, madokami } = createTransitionOverlay();
    
    // Step 1: Fade in overlay (0.3s)
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });
    
    // Step 2: Float in Madokami (starts at 0.5s)
    setTimeout(() => {
        madokami.style.opacity = '1';
        madokami.style.transform = 'scale(1) translateY(0)';
    }, 500);
    
    // Step 3: Add bobbing animation (starts at 1.7s)
    setTimeout(() => {
        madokami.style.animation = 'madokamiBob 1.5s ease-in-out infinite';
        
        // Add bobbing keyframes
        if (!document.getElementById('madokami-bob-animation')) {
            const style = document.createElement('style');
            style.id = 'madokami-bob-animation';
            style.textContent = `
                @keyframes madokamiBob {
                    0%, 100% {
                        transform: scale(1) translateY(0);
                    }
                    50% {
                        transform: scale(1.02) translateY(-20px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }, 1700);
    
    // Step 4: Zoom in effect (starts at 2.5s)
    setTimeout(() => {
        overlay.style.transition = 'transform 0.8s ease-in, opacity 0.3s ease 0.5s';
        overlay.style.transform = 'scale(3)';
        madokami.style.filter = 'drop-shadow(0 0 60px #ff0088) drop-shadow(0 0 120px #f7a3ff) brightness(1.5)';
    }, 2500);
    
    // Step 5: Store transition state and navigate (at 3.0s)
    setTimeout(() => {
        sessionStorage.setItem('madokamiTransition', 'active');
        window.location.href = 'portfolio.html';
    }, 3000);
}

if (soulGemBtn) {
    soulGemBtn.addEventListener('click', goToPortfolio);
    
    // Add sparkle effect on click
    soulGemBtn.addEventListener('click', (e) => {
        const rect = soulGemBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create explosion of sparkles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                const angle = (Math.PI * 2 * i) / 20;
                const distance = 100 + Math.random() * 50;
                const endX = centerX + Math.cos(angle) * distance;
                const endY = centerY + Math.sin(angle) * distance;
                
                sparkle.style.cssText = `
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: radial-gradient(circle, #ff0088 0%, transparent 70%);
                    border-radius: 50%;
                    box-shadow: 0 0 10px #ff0088;
                    left: ${centerX}px;
                    top: ${centerY}px;
                    pointer-events: none;
                    z-index: 9999;
                `;
                
                document.body.appendChild(sparkle);
                
                requestAnimationFrame(() => {
                    sparkle.style.transition = 'all 0.8s ease-out';
                    sparkle.style.left = endX + 'px';
                    sparkle.style.top = endY + 'px';
                    sparkle.style.opacity = '0';
                    sparkle.style.transform = 'scale(0)';
                });
                
                setTimeout(() => sparkle.remove(), 800);
            }, i * 20);
        }
    });
}

if (viewPortfolioBtn) {
    viewPortfolioBtn.addEventListener('click', goToPortfolio);
}

// --- 3. SMOOTH SCROLL FOR CHARACTER SECTIONS ---
document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to character images
    const characterSections = document.querySelectorAll('.character-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate character image when in view
                const img = entry.target.querySelector('.character-showcase-img');
                if (img) {
                    img.style.opacity = '0';
                    img.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        img.style.transition = 'all 1s ease';
                        img.style.opacity = '1';
                        img.style.transform = 'scale(1)';
                    }, 100);
                }
            }
        });
    }, {
        threshold: 0.3
    });
    
    characterSections.forEach(section => {
        observer.observe(section);
    });
});

/* Removed scroll indicator code */

// --- 4. MAGICAL SPARKLE EFFECT ON CHARACTER HOVER ---
const characterImages = document.querySelectorAll('.character-showcase-img');

characterImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        createSparkles(img);
    });
});

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#ff0088', '#ff66aa', '#f7a3ff', '#ffb3d9', '#a300a3'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const size = Math.random() * 8 + 4;
            const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.8;
            const startY = rect.top + rect.height / 2 + (Math.random() - 0.5) * rect.height * 0.8;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            sparkle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, ${color} 0%, transparent 70%);
                border-radius: 50%;
                box-shadow: 0 0 ${size * 2}px ${color};
                left: ${startX}px;
                top: ${startY}px;
                pointer-events: none;
                z-index: 9999;
                animation: sparkleFloat 1.5s ease-out forwards;
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1500);
        }, i * 100);
    }
}

// Add sparkle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translate(${(Math.random() - 0.5) * 100}px, ${-Math.random() * 100}px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${(Math.random() - 0.5) * 150}px, ${-Math.random() * 150}px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);