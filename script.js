// DOM elements
const callSlider = document.getElementById('call-slider');
const callCount = document.getElementById('call-count');
const priceElement = document.getElementById('price');
const perCallElement = document.getElementById('per-call');
const annualToggle = document.getElementById('annual-toggle');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const demoPlayer = document.getElementById('demo-player');
const demoBtns = document.querySelectorAll('.demo-btn');

// Pricing calculator functionality
function updatePricing() {
    const calls = parseInt(callSlider.value);
    let monthlyPrice = 0;
    let pricePerCall = 0;

    // Pricing tiers based on call volume
    if (calls <= 500) {
        monthlyPrice = Math.max(49, calls * 0.15);
        pricePerCall = monthlyPrice / calls;
    } else if (calls <= 1000) {
        monthlyPrice = 75 + (calls - 500) * 0.12;
        pricePerCall = monthlyPrice / calls;
    } else if (calls <= 2000) {
        monthlyPrice = 135 + (calls - 1000) * 0.10;
        pricePerCall = monthlyPrice / calls;
    } else {
        monthlyPrice = 235 + (calls - 2000) * 0.08;
        pricePerCall = monthlyPrice / calls;
    }

    // Update display
    callCount.textContent = calls.toLocaleString();
    priceElement.textContent = `$${Math.round(monthlyPrice)}`;
    perCallElement.textContent = `$${pricePerCall.toFixed(2)}`;
}

// Annual/Monthly pricing toggle
function updatePricingCards() {
    const isAnnual = annualToggle.checked;
    const amounts = document.querySelectorAll('.amount');
    
    amounts.forEach(amount => {
        const monthlyPrice = parseInt(amount.dataset.monthly);
        const annualPrice = parseInt(amount.dataset.annual);
        
        if (monthlyPrice && annualPrice) {
            amount.textContent = isAnnual ? annualPrice : monthlyPrice;
        }
    });
}

// Voice demo functionality
const voiceDemos = {
    realtor: 'data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=', // Placeholder
    dental: 'data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=', // Placeholder
    coaching: 'data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=' // Placeholder
};

function playVoiceDemo(voiceType) {
    // Reset all demo buttons
    demoBtns.forEach(btn => {
        btn.innerHTML = '<span class="play-icon">▶️</span>Play Demo';
        btn.classList.remove('playing');
    });

    // Find the clicked button
    const clickedBtn = event.currentTarget;
    
    // Since we don't have actual audio files, we'll simulate playing
    clickedBtn.innerHTML = '<span class="play-icon">⏸️</span>Playing...';
    clickedBtn.classList.add('playing');
    
    // Simulate audio duration
    setTimeout(() => {
        clickedBtn.innerHTML = '<span class="play-icon">▶️</span>Play Demo';
        clickedBtn.classList.remove('playing');
        
        // Show a demo message
        showNotification(`Demo: "${getVoiceMessage(voiceType)}"`);
    }, 3000);
}

function getVoiceMessage(voiceType) {
    const messages = {
        realtor: "Hi, this is Rachel from Premier Real Estate. I'm calling to see if you're interested in learning about the current market value of your property.",
        dental: "Hello, this is Dr. Smith's office. We wanted to remind you about your upcoming dental cleaning appointment.",
        coaching: "Hi there! This is Lisa, your business coach. I wanted to check in on your progress with this quarter's goals."
    };
    return messages[voiceType] || "This is a demo of our AI voice technology.";
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 0.875rem;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Mobile menu functionality
function toggleMobileMenu() {
    navLinks.classList.toggle('mobile-open');
    mobileMenuToggle.classList.toggle('active');
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('mobile-open')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .metric-value');
    
    counters.forEach(counter => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.textContent.replace(/[^0-9]/g, '')) || 0;
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number appropriately
        const originalText = element.textContent;
        if (originalText.includes('M+')) {
            element.textContent = Math.floor(current) + 'M+';
        } else if (originalText.includes('%')) {
            element.textContent = current.toFixed(1) + '%';
        } else if (originalText.includes('min')) {
            element.textContent = Math.floor(current) + 'min';
        } else if (originalText.includes('$')) {
            element.textContent = '$' + current.toLocaleString();
        } else {
            element.textContent = current.toLocaleString();
        }
    }, 50);
}

// Form validation and submission
function initFormHandling() {
    // Trial button functionality
    const trialButtons = document.querySelectorAll('.btn-primary');
    trialButtons.forEach(btn => {
        if (btn.textContent.includes('Trial')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('🚀 Free trial started! Check your email for setup instructions.');
            });
        }
    });
    
    // Demo button functionality
    const demoBtns = document.querySelectorAll('.btn-secondary');
    demoBtns.forEach(btn => {
        if (btn.textContent.includes('Demo')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('📅 Demo scheduled! Our team will contact you shortly.');
            });
        }
    });
}

// Upload zone functionality
function initUploadZone() {
    const uploadZone = document.querySelector('.upload-zone');
    if (uploadZone) {
        uploadZone.addEventListener('click', function() {
            showNotification('📁 File upload feature would open here in a real implementation.');
        });
        
        uploadZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--primary-color)';
            this.style.background = '#eff6ff';
        });
        
        uploadZone.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--border-color)';
            this.style.background = 'var(--background-light)';
        });
        
        uploadZone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--border-color)';
            this.style.background = 'var(--background-light)';
            showNotification('📁 Files would be processed here in a real implementation.');
        });
    }
}

// Real-time analytics simulation
function simulateAnalytics() {
    const metrics = document.querySelectorAll('.metric-value');
    
    setInterval(() => {
        metrics.forEach(metric => {
            if (metric.textContent.includes(',')) {
                const currentValue = parseInt(metric.textContent.replace(/[^0-9]/g, ''));
                const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
                const newValue = Math.max(0, currentValue + change);
                metric.textContent = newValue.toLocaleString();
            }
        });
    }, 5000); // Update every 5 seconds
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Pricing calculator
    if (callSlider) {
        callSlider.addEventListener('input', updatePricing);
        updatePricing(); // Initial calculation
    }
    
    // Annual toggle
    if (annualToggle) {
        annualToggle.addEventListener('change', updatePricingCards);
    }
    
    // Mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Voice demos
    demoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const voiceType = this.dataset.voice;
            playVoiceDemo(voiceType);
        });
    });
    
    // Initialize all features
    initScrollAnimations();
    initSmoothScrolling();
    initNavbarScrollEffect();
    animateCounters();
    initFormHandling();
    initUploadZone();
    simulateAnalytics();
    
    // Add some demo interactivity
    console.log('🤖 HybridCaller website loaded successfully!');
    console.log('✨ Try the pricing calculator, voice demos, and navigation!');
});

// Add mobile-specific styles
const mobileStyles = `
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            z-index: 999;
            display: flex !important;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;

// Inject mobile styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileStyles;
document.head.appendChild(styleSheet);