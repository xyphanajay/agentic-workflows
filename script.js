// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .workflow-card, .agent-card, .pricing-card').forEach(card => {
    observer.observe(card);
});

// Section-specific animations with different transitions
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            const sectionId = section.id;
            
            // Different animation for each section
            switch(sectionId) {
                case 'features':
                    animateFeatures(section);
                    break;
                case 'workflows':
                    animateWorkflows(section);
                    break;
                case 'agents':
                    animateAgents(section);
                    break;
                case 'pricing':
                    animatePricing(section);
                    break;
                case 'contact':
                    animateContact(section);
                    break;
            }
        }
    });
}, {
    threshold: 0.2
});

// Observe sections
document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// Animation functions for different sections
function animateFeatures(section) {
    const cards = section.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `slideInFromLeft 0.8s ease forwards`;
            card.style.opacity = '1';
        }, index * 150);
    });
}

function animateWorkflows(section) {
    const cards = section.querySelectorAll('.workflow-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInScale 0.8s ease forwards`;
            card.style.opacity = '1';
        }, index * 200);
    });
}

function animateAgents(section) {
    const cards = section.querySelectorAll('.agent-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `slideInFromRight 0.8s ease forwards`;
            card.style.opacity = '1';
        }, index * 100);
    });
}

function animatePricing(section) {
    const cards = section.querySelectorAll('.pricing-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `bounceIn 0.8s ease forwards`;
            card.style.opacity = '1';
        }, index * 250);
    });
}

function animateContact(section) {
    const contactInfo = section.querySelector('.contact-info');
    const contactForm = section.querySelector('.contact-form');
    
    setTimeout(() => {
        contactInfo.style.animation = `slideInFromLeft 0.8s ease forwards`;
        contactInfo.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        contactForm.style.animation = `slideInFromRight 0.8s ease forwards`;
        contactForm.style.opacity = '1';
    }, 300);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideInFromRight {
        0% {
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeInScale {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes bounceIn {
        0% {
            transform: scale(0.3);
            opacity: 0;
        }
        50% {
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    /* Initially hide elements that will be animated */
    .feature-card,
    .workflow-card,
    .agent-card,
    .pricing-card,
    .contact-info,
    .contact-form {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#22c55e';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add particle animation to hero section
function createParticles() {
    const hero = document.querySelector('.hero-section');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: floatParticle ${Math.random() * 10 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        hero.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
createParticles();

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 50);
        }, 1000);
    }
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <i class="fas fa-robot" style="font-size: 4rem; margin-bottom: 1rem; animation: pulse 1s infinite;"></i>
            <h2 style="font-family: 'Inter', sans-serif; font-weight: 700;">AgenticFlow</h2>
            <p style="margin-top: 0.5rem; opacity: 0.8;">Loading amazing automation...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add console welcome message
console.log(`
%c🤖 Welcome to AgenticFlow! %c
%cBuilt with modern web technologies and lots of ❤️
%cInterested in our code? Check out our GitHub repository!
`,
'color: #6366f1; font-size: 20px; font-weight: bold;',
'',
'color: #333; font-size: 14px;',
'color: #666; font-size: 12px;'
);