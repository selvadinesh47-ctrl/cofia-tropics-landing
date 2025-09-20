// Cofia Coconut Products - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simple validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#B83248';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Thank you! Your message has been sent. We\'ll respond within 24 hours.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    // Product Card Interactions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productType = this.getAttribute('data-product');
            showProductModal(productType);
        });
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-0.5rem) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button Click Handlers
    const heroButtons = document.querySelectorAll('.btn-hero, .btn-hero-outline');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Shop')) {
                showNotification('Shop feature coming soon! Stay tuned for our online store.', 'info');
            } else if (this.textContent.includes('Distributor')) {
                showDistributorModal();
            }
        });
    });

    const distributorButtons = document.querySelectorAll('.btn-premium');
    distributorButtons.forEach(button => {
        button.addEventListener('click', function() {
            showDistributorModal();
        });
    });

    const collectionButton = document.querySelector('.btn-collection');
    if (collectionButton) {
        collectionButton.addEventListener('click', function() {
            showNotification('Complete collection coming soon! Follow us for updates.', 'info');
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .usp-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const scrollPercent = scrolled / heroHeight;
        
        if (scrollPercent <= 1) {
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((el, index) => {
                const speed = 0.5 + (index * 0.2);
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });

    // Initialize floating animations
    initFloatingAnimations();
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? 'var(--cofia-green)' : type === 'error' ? 'var(--cofia-spice)' : 'var(--cofia-brown)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-premium);
        z-index: 1000;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        font-family: var(--font-poppins);
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    closeButton.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Product Modal
function showProductModal(productType) {
    const products = {
        vanilla: {
            name: 'Velvet Vanilla',
            description: 'Our premium vanilla coconut chips offer a perfect blend of sweet vanilla flavor and crispy coconut texture. Made from the finest coconuts and natural vanilla extract.',
            features: ['100% Natural Vanilla', 'No Artificial Flavors', 'Gluten-Free', 'Rich in Fiber']
        },
        spice: {
            name: 'Spice Pop Coconut',
            description: 'Experience the bold and exciting taste of our spice pop coconut chips. A perfect fusion of traditional spices and premium coconut for an unforgettable snacking experience.',
            features: ['Authentic Spice Blend', 'Bold Flavor Profile', 'Natural Ingredients', 'Perfect Heat Level']
        },
        golden: {
            name: 'Golden Crunch',
            description: 'Our signature golden crunch coconut chips represent the perfect balance of traditional toasting techniques and premium coconut selection for the ultimate crunch.',
            features: ['Classic Toasted Flavor', 'Perfect Crunch', 'Premium Quality', 'Traditional Recipe']
        }
    };
    
    const product = products[productType];
    if (!product) return;
    
    showNotification(`${product.name}: ${product.description}`, 'info');
}

// Distributor Modal - Redirect to WhatsApp
function showDistributorModal() {
    const message = encodeURIComponent("Hello! I'm interested in becoming a distributor for your coconut chips. Please share the details and requirements. Thank you!");
    const whatsappUrl = `https://wa.me/919994898713?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Floating Animations
function initFloatingAnimations() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        const duration = 3000 + (index * 500); // Different speeds
        const amplitude = 10 + (index * 5); // Different amplitudes
        
        setInterval(() => {
            const randomY = Math.sin(Date.now() / duration) * amplitude;
            const randomX = Math.cos(Date.now() / (duration * 1.2)) * (amplitude * 0.5);
            
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 50);
    });
}

// Scroll to Top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (scrollTop > 300) {
        if (!scrollToTopBtn) {
            scrollToTopBtn = document.createElement('button');
            scrollToTopBtn.id = 'scrollToTopBtn';
            scrollToTopBtn.innerHTML = '↑';
            scrollToTopBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                background-color: var(--cofia-brown);
                color: var(--cofia-cream);
                border: none;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                box-shadow: var(--shadow-card);
                z-index: 1000;
                transition: all 0.3s ease;
                opacity: 0;
                transform: scale(0.8);
            `;
            
            scrollToTopBtn.addEventListener('click', scrollToTop);
            scrollToTopBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--cofia-dark-brown)';
                this.style.transform = 'scale(1.1)';
            });
            scrollToTopBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'var(--cofia-brown)';
                this.style.transform = 'scale(1)';
            });
            
            document.body.appendChild(scrollToTopBtn);
        }
        
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'scale(1)';
    } else if (scrollToTopBtn) {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'scale(0.8)';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(function() {
    // Any additional scroll handling can go here
}, 10));