/* main.js - PORTFOLIO PAGE */

// --- 0. MADOKAMI TRANSITION ENTRANCE ---
window.addEventListener('DOMContentLoaded', () => {
    // Check if coming from landing page transition
    if (sessionStorage.getItem('madokamiTransition') === 'active') {
        sessionStorage.removeItem('madokamiTransition');
        
        // Create entrance overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center,
                rgba(255, 0, 136, 0.95) 0%,
                rgba(163, 0, 163, 0.98) 50%,
                rgba(13, 0, 26, 1) 100%
            );
            z-index: 99999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            pointer-events: auto;
            transform: scale(3);
            cursor: pointer;
        `;
        
        // Create Madokami
        const madokami = document.createElement('img');
        madokami.src = 'images/madokami-full.png';
        madokami.style.cssText = `
            width: 400px;
            height: auto;
            opacity: 1;
            filter: drop-shadow(0 0 60px #ff0088) drop-shadow(0 0 120px #f7a3ff) brightness(1.5);
            animation: madokamiBobEntry 1.5s ease-in-out infinite;
            cursor: pointer;
        `;
        
        // Create "Enter Your Destiny" text
        const destinyText = document.createElement('div');
        destinyText.style.cssText = `
            position: absolute;
            bottom: 20%;
            text-align: center;
            font-family: 'Cinzel', serif;
            color: #fff;
            text-shadow: 0 0 20px #ff0088, 0 0 40px #f7a3ff;
            opacity: 0;
            animation: textFloat 3s ease-in-out infinite, textFadeIn 1s ease-out 1.5s forwards;
            pointer-events: none;
        `;
        destinyText.innerHTML = `
            <div style="font-size: 2.5rem; font-weight: 700; margin-bottom: 10px;">Enter Your Destiny</div>
            <div style="font-size: 1.3rem; font-family: 'EB Garamond', serif; color: #ffb3d9;">運命に入る</div>
            <div style="font-size: 1rem; font-family: 'EB Garamond', serif; font-style: italic; color: #f7a3ff; margin-top: 5px;">(Unmei ni hairu)</div>
        `;
        
        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes madokamiBobEntry {
                0%, 100% {
                    transform: scale(1) translateY(0);
                }
                50% {
                    transform: scale(1.02) translateY(-20px);
                }
            }
            @keyframes textFloat {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            @keyframes textFadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        
        overlay.appendChild(madokami);
        overlay.appendChild(destinyText);
        document.body.appendChild(overlay);
        
        // Hide main content initially
        const mainContent = document.getElementById('main-portfolio-content');
        if (mainContent) {
            mainContent.style.opacity = '0';
        }
        
        // Zoom out from scale(3) to scale(1)
        requestAnimationFrame(() => {
            overlay.style.transition = 'transform 1s ease-out';
            overlay.style.transform = 'scale(1)';
        });
        
        // Click handler for overlay/Madokami
        let clickHandled = false;
        const handleClick = () => {
            if (clickHandled) return;
            clickHandled = true;
            
            // Fade out text immediately
            destinyText.style.transition = 'opacity 0.3s ease';
            destinyText.style.opacity = '0';
            
            // Continue with fade out
            setTimeout(() => {
                overlay.style.transition = 'opacity 0.8s ease';
                overlay.style.opacity = '0';
                
                // Show main content
                if (mainContent) {
                    mainContent.style.transition = 'opacity 1s ease';
                    mainContent.style.opacity = '1';
                    mainContent.style.visibility = 'visible';
                }
                
                // Remove overlay
                setTimeout(() => {
                    overlay.remove();
                    style.remove();
                    
                    // Now initialize everything else
                    initializePortfolio();
                }, 800);
            }, 300);
        };
        
        overlay.addEventListener('click', handleClick);
        
        // Auto-continue after 5 seconds if not clicked
        setTimeout(() => {
            if (!clickHandled) {
                handleClick();
            }
        }, 5000);
    } else {
        // Normal initialization (not coming from landing page)
        initializePortfolio();
    }
});

// Separate initialization function
function initializePortfolio() {
    startScreenHandler();
    setupMamiButton();
    initShimmerEffect();
    addMagicParticleStyles();
    initMagicParticleEffect();
    initFloatingParticles();
    
    // Initialize canvas if exists
    if (canvas && typeof initCanvas === 'function' && typeof animate === 'function') {
        isAnimating = true;
        initCanvas();
        animate();
    }
}

// --- 1. START SCREEN AND FADE LOGIC ---
let animationFrameId = null;
let isAnimating = false;
let resizeHandler = null;
let mousemoveHandler = null;

function startScreenHandler() {
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-portfolio-content');
    const madokaLink = document.getElementById('madoka-link');
    
    if (!startScreen || !mainContent || !madokaLink) {
        return;
    }

    const canvas = document.getElementById('magic-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    const referrer = document.referrer;
    const fromLessonPage = referrer && referrer.includes('lesson') && referrer.includes('page.html');
    const hasHash = window.location.hash && window.location.hash !== '#';
    
    if (fromLessonPage || hasHash) {
        startScreen.style.display = 'none';
        startScreen.style.opacity = '0';
        
        mainContent.style.opacity = '1';
        mainContent.style.display = 'block';
        mainContent.style.visibility = 'visible';
        
        if (hasHash) {
            setTimeout(() => {
                const targetElement = document.querySelector(window.location.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        
        return;
    }

    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.display = 'block';
        mainContent.style.visibility = 'hidden';
    }

    const handleStartClick = () => {
        isAnimating = false;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }

        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        
        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            resizeHandler = null;
        }
        if (mousemoveHandler && startScreen) {
            startScreen.removeEventListener('mousemove', mousemoveHandler);
            mousemoveHandler = null;
        }
        
        startScreen.style.opacity = '0';
        
        setTimeout(() => {
            startScreen.style.display = 'none';
            if (mainContent) {
                mainContent.style.visibility = 'visible';
                mainContent.style.opacity = '1';
            }
        }, 500);
    };
    
    madokaLink.addEventListener('click', handleStartClick);
    madokaLink.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleStartClick();
        }
    });
}


// --- 2. MAGICAL PARTICLE SYSTEM ---

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const canvas = document.getElementById('magic-canvas');
let particles = [];
let mouse = {
    x: undefined,
    y: undefined
};
let ctx = null;
let initCanvas = null;
let animate = null;

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

    initCanvas = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeHandler);

        const startScreen = document.getElementById('start-screen');
        if (startScreen) {
            mousemoveHandler = throttle((event) => {
                mouse.x = event.clientX;
                mouse.y = event.clientY;

                const particleCount = Math.floor(Math.random() * 4) + 5;
                for (let i = 0; i < particleCount; i++) {
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    particles.push(new Particle(mouse.x, mouse.y, randomColor));
                }
            }, 16);
            
            startScreen.addEventListener('mousemove', mousemoveHandler);
        }
    }

    animate = function() {
        if (!isAnimating) {
            animationFrameId = null;
            return;
        }
        
        const startScreen = document.getElementById('start-screen');
        if (!startScreen || startScreen.style.display === 'none' || startScreen.style.opacity === '0') {
            isAnimating = false;
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
}


// --- 3. MAMI BUTTON - RETURN TO LANDING PAGE ---

function setupMamiButton() {
    const mamiButton = document.getElementById('mami-landing-button');
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-portfolio-content');
    
    if (!mamiButton || !startScreen || !mainContent) {
        return;
    }
    
    mamiButton.addEventListener('click', () => {
        startScreen.style.display = 'flex';
        startScreen.style.opacity = '1';
        
        mainContent.style.opacity = '0';
        mainContent.style.visibility = 'hidden';
        
        const canvas = document.getElementById('magic-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            particles.length = 0;
            isAnimating = true;
            if (!animationFrameId) {
                animate();
            }
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- 4. MAGIC PARTICLE EFFECT FOR LESSON CARDS ---

function initMagicParticleEffect() {
    const lessonCards = document.querySelectorAll('.lesson-card');
    const aboutImageLink = document.querySelector('.about-image-link');
    
    lessonCards.forEach(card => {
        let particleInterval = null;
        
        card.addEventListener('mouseenter', () => {
            particleInterval = setInterval(() => {
                createMagicParticle(card);
            }, 150);
        });
        
        card.addEventListener('mouseleave', () => {
            if (particleInterval) {
                clearInterval(particleInterval);
                particleInterval = null;
            }
        });
    });
    
    if (aboutImageLink) {
        let particleInterval = null;
        
        aboutImageLink.addEventListener('mouseenter', () => {
            particleInterval = setInterval(() => {
                createMagicParticle(aboutImageLink);
            }, 150);
        });
        
        aboutImageLink.addEventListener('mouseleave', () => {
            if (particleInterval) {
                clearInterval(particleInterval);
                particleInterval = null;
            }
        });
    }
}

function createMagicParticle(card) {
    const rect = card.getBoundingClientRect();
    const cardTop = rect.top + window.scrollY;
    const cardLeft = rect.left;
    const cardWidth = rect.width;
    
    const particle = document.createElement('div');
    particle.className = 'magic-particle';
    
    const size = Math.random() * 6 + 4;
    const startX = cardLeft + cardWidth / 2 + (Math.random() - 0.5) * 20;
    const startY = cardTop + 10;
    const endY = startY - (Math.random() * 60 + 40);
    const endX = startX + (Math.random() - 0.5) * 30;
    const duration = Math.random() * 0.5 + 0.8;
    const delay = Math.random() * 0.2;
    
    const colors = ['#ff0088', '#ff66aa', '#f7a3ff', '#ffb3d9', '#a300a3'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        border-radius: 50%;
        box-shadow: 0 0 ${size * 2}px ${color}, 0 0 ${size * 3}px ${color};
        left: ${startX}px;
        top: ${startY}px;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
        animation: magicParticleRise ${duration}s ease-out ${delay}s forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, (duration + delay) * 1000 + 100);
}

function addMagicParticleStyles() {
    if (document.getElementById('magic-particle-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'magic-particle-styles';
    style.textContent = `
        @keyframes magicParticleRise {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(90deg);
            }
            100% {
                opacity: 0;
                transform: translate(${(Math.random() - 0.5) * 30}px, -${Math.random() * 100 + 50}px) scale(1.5) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// --- 5. MAGICAL SHIMMER EFFECT FOR CONTENT BOXES ---

function initShimmerEffect() {
    const contentBoxes = document.querySelectorAll('.content-box');
    
    if (contentBoxes.length === 0) {
        return;
    }
    
    function createMagicShimmer(box) {
        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;
        
        const particleCount = 4;
        const colors = ['#ff0088', '#ff66aa', '#f7a3ff', '#ffb3d9', '#a300a3'];
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'magic-shimmer-particle';
                
                const size = Math.random() * 2 + 2;
                const startX = Math.random() * (boxWidth - size * 2) + size;
                const startY = Math.random() * (boxHeight - size * 2) + size;
                const maxMoveX = Math.min(boxWidth * 0.3, startX, boxWidth - startX);
                const maxMoveY = Math.min(boxHeight * 0.3, startY, boxHeight - startY);
                const endX = startX + (Math.random() - 0.5) * maxMoveX * 2;
                const endY = startY + (Math.random() - 0.5) * maxMoveY * 2;
                const duration = Math.random() * 0.6 + 1.5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const rotation = Math.random() * 360;
                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: radial-gradient(circle, ${color} 0%, transparent 80%);
                    border-radius: 50%;
                    box-shadow: 
                        0 0 ${size * 1.5}px ${color},
                        0 0 ${size * 2.5}px ${color};
                    left: ${startX}px;
                    top: ${startY}px;
                    pointer-events: none;
                    z-index: 1;
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0) rotate(${rotation}deg);
                `;
                
                box.appendChild(particle);
                
                requestAnimationFrame(() => {
                    particle.style.transition = `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
                    particle.style.opacity = '0.6';
                    particle.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(1.2) rotate(${rotation + 360}deg)`;
                });
                
                setTimeout(() => {
                    particle.style.opacity = '0';
                    particle.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(0) rotate(${rotation + 720}deg)`;
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, duration * 1000);
                }, duration * 600);
            }, i * 150);
        }
    }
    
    function createShimmerWave(box) {
        const shimmerWave = document.createElement('div');
        shimmerWave.className = 'magic-shimmer-wave';
        
        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;
        
        shimmerWave.style.cssText = `
            position: absolute;
            top: 0;
            left: -${boxWidth}px;
            width: ${boxWidth * 2}px;
            height: ${boxHeight}px;
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 0, 136, 0.15) 20%,
                rgba(255, 102, 170, 0.25) 50%,
                rgba(247, 163, 255, 0.15) 80%,
                transparent 100%
            );
            pointer-events: none;
            z-index: 1;
            transform: skewX(-20deg);
            opacity: 0;
            overflow: hidden;
        `;
        
        box.appendChild(shimmerWave);
        
        requestAnimationFrame(() => {
            shimmerWave.style.transition = 'left 1.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease';
            shimmerWave.style.opacity = '0.7';
            shimmerWave.style.left = `${boxWidth}px`;
        });
        
        setTimeout(() => {
            shimmerWave.style.opacity = '0';
            setTimeout(() => {
                if (shimmerWave.parentNode) {
                    shimmerWave.parentNode.removeChild(shimmerWave);
                }
            }, 400);
        }, 1800);
    }
    
    function triggerMagicShimmer(box) {
        createShimmerWave(box);
        createMagicShimmer(box);
        
        box.style.transition = 'box-shadow 0.5s ease';
        box.style.boxShadow = `
            0 4px 10px rgba(0, 0, 0, 0.1),
            0 0 15px rgba(255, 0, 136, 0.15),
            0 0 25px rgba(255, 102, 170, 0.1),
            inset 0 0 15px rgba(247, 163, 255, 0.05)
        `;
        
        setTimeout(() => {
            box.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        }, 2200);
    }
    
    contentBoxes.forEach((box, index) => {
        setTimeout(() => {
            triggerMagicShimmer(box);
        }, index * 400 + 800);
    });
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerMagicShimmer(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    contentBoxes.forEach(box => {
        observer.observe(box);
    });
    
    contentBoxes.forEach(box => {
        let hoverTimeout = null;
        box.addEventListener('mouseenter', () => {
            if (hoverTimeout) clearTimeout(hoverTimeout);
            triggerMagicShimmer(box);
            
            hoverTimeout = setInterval(() => {
                createMagicShimmer(box);
            }, 1200);
        });
        
        box.addEventListener('mouseleave', () => {
            if (hoverTimeout) {
                clearInterval(hoverTimeout);
                hoverTimeout = null;
            }
        });
    });
}

// --- 6. FLOATING MAGICAL PARTICLES FOR BACKGROUND ---

function initFloatingParticles() {
    const startScreen = document.getElementById('start-screen');
    const isLessonPage = document.body.classList.contains('lesson-page');
    
    if (startScreen || isLessonPage) {
        return;
    }
    
    const particleCount = 15;
    const colors = ['#ff0088', '#ff66aa', '#f7a3ff', '#ffb3d9', '#a300a3', '#d4a5a5', '#e8c4c4'];
    const floatParticles = [];
    
    const particleContainer = document.createElement('div');
    particleContainer.id = 'floating-particles-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-magic-particle';
        
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        const horizontalRange = Math.random() * 200 + 100;
        const verticalRange = Math.random() * 200 + 100;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color} 0%, transparent 70%);
            border-radius: 50%;
            box-shadow: 
                0 0 ${size * 2}px ${color},
                0 0 ${size * 4}px ${color};
            left: ${startX}px;
            top: ${startY}px;
            opacity: ${Math.random() * 0.4 + 0.3};
            transform: translate(-50%, -50%);
            animation: floatParticle${i} ${duration}s ease-in-out infinite ${delay}s;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle${i} {
                0%, 100% {
                    transform: translate(-50%, -50%) translate(0, 0) scale(1);
                    opacity: ${Math.random() * 0.4 + 0.3};
                }
                25% {
                    transform: translate(-50%, -50%) translate(${horizontalRange * (Math.random() - 0.5)}px, -${verticalRange}px) scale(${Math.random() * 0.5 + 0.8});
                    opacity: ${Math.random() * 0.5 + 0.4};
                }
                50% {
                    transform: translate(-50%, -50%) translate(${horizontalRange * (Math.random() - 0.5)}px, ${verticalRange * (Math.random() - 0.5)}px) scale(${Math.random() * 0.5 + 1});
                    opacity: ${Math.random() * 0.6 + 0.5};
                }
                75% {
                    transform: translate(-50%, -50%) translate(-${horizontalRange * (Math.random() - 0.5)}px, ${verticalRange}px) scale(${Math.random() * 0.5 + 0.8});
                    opacity: ${Math.random() * 0.4 + 0.3};
                }
            }
        `;
        document.head.appendChild(style);
        
        particleContainer.appendChild(particle);
        floatParticles.push(particle);
    }
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            floatParticles.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                if (rect.left < 0 || rect.top < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight) {
                    particle.style.left = `${Math.random() * window.innerWidth}px`;
                    particle.style.top = `${Math.random() * window.innerHeight}px`;
                }
            });
        }, 250);
    });
}

// --- 7. SMOOTH ANCHOR SCROLLING ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});