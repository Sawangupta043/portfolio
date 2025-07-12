// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        this.setupScrollSpy();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupNavbarBackground();
    }

    setupScrollSpy() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    this.setActiveNavLink(id);
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            if (section.id) {
                observer.observe(section);
            }
        });
    }

    setActiveNavLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }

    setupMobileMenu() {
        this.mobileMenuToggle.addEventListener('click', () => {
            this.mobileMenuToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenuToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.mobileMenuToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
            }
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Handle scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator a');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = scrollIndicator.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    setupNavbarBackground() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                this.navbar.style.background = 'var(--navbar-bg)';
                this.navbar.style.backdropFilter = 'blur(20px)';
            } else {
                this.navbar.style.background = 'rgba(15, 32, 39, 0.8)';
                this.navbar.style.backdropFilter = 'blur(10px)';
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupFadeInAnimations();
        this.setupParallaxEffects();
    }

    setupFadeInAnimations() {
        const elementsToAnimate = document.querySelectorAll(
            '.skill-category, .project-card, .education-item, .internship-card, .contact-item'
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in', 'visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        elementsToAnimate.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    setupParallaxEffects() {
        const hero = document.querySelector('.hero');
        const neuralNetwork = document.querySelector('.neural-network');
        const floatingParticles = document.querySelector('.floating-particles');

        if (hero && neuralNetwork && floatingParticles) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                const rate2 = scrolled * -0.3;

                neuralNetwork.style.transform = `translateY(${rate}px)`;
                floatingParticles.style.transform = `translateY(${rate2}px)`;
            });
        }
    }
}

// Back to Top Manager
class BackToTopManager {
    constructor() {
        this.backToTopBtn = document.getElementById('backToTop');
        this.init();
    }

    init() {
        this.setupScrollVisibility();
        this.setupClickHandler();
    }

    setupScrollVisibility() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.backToTopBtn.classList.add('show');
            } else {
                this.backToTopBtn.classList.remove('show');
            }
        });
    }

    setupClickHandler() {
        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Skill Badge Interactions
class SkillManager {
    constructor() {
        this.skillBadges = document.querySelectorAll('.skill-badge');
        this.init();
    }

    init() {
        this.setupHoverEffects();
        this.setupClickHandlers();
    }

    setupHoverEffects() {
        this.skillBadges.forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                this.addTooltip(badge);
            });

            badge.addEventListener('mouseleave', () => {
                this.removeTooltip(badge);
            });
        });
    }

    setupClickHandlers() {
        this.skillBadges.forEach(badge => {
            badge.addEventListener('click', () => {
                this.openWikipedia(badge);
            });

            // Add keyboard support
            badge.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openWikipedia(badge);
                }
            });
        });
    }

    openWikipedia(badge) {
        const skillName = badge.querySelector('span').textContent;
        const wikipediaUrl = this.getProgrammingWikipediaUrl(skillName);
        
        // Open Wikipedia in a new tab
        window.open(wikipediaUrl, '_blank', 'noopener,noreferrer');
        
        // Optional: Add a brief visual feedback
        badge.style.transform = 'scale(0.95)';
        setTimeout(() => {
            badge.style.transform = '';
        }, 150);
    }

    getProgrammingWikipediaUrl(skillName) {
        // Mapping of skill names to their specific programming Wikipedia URLs
        const skillUrlMap = {
            // Programming Languages
            'Python': 'https://www.python.org/',
            'C++': 'https://www.w3schools.com/cpp/cpp_intro.asp',
            'C': 'https://www.w3schools.com/c/c_intro.php',
            'HTML': 'https://www.w3schools.com/html/html_intro.asp',
            'CSS': 'https://www.w3schools.com/css/default.asp',
            'JavaScript': 'https://www.w3schools.com/js/default.asp',
            
            // AI/ML & Frameworks
            'Streamlit': 'https://streamlit.io/',
            'Pandas': 'https://pandas.pydata.org/',
            'NumPy': 'https://numpy.org/',
            'Flask': 'https://flask.palletsprojects.com/en/stable/',
            'Matplotlib': 'https://matplotlib.org/',
            'Scikit-learn': 'https://scikit-learn.org/',
            'Langchain': 'https://www.langchain.com/',
            'Google Gen AI': 'https://aistudio.google.com/',
            
            // DevOps & Tools
            'Docker': 'https://www.docker.com/',
            'Git': 'https://git-scm.com/',
            'GitHub': 'https://github.com/',
            'Jenkins': 'https://www.jenkins.io/',
            'MySQL': 'https://www.mysql.com/',
            'Red Hat Linux': 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux',
            
        };
        
        // Return the specific URL if available, otherwise fallback to general search
        return skillUrlMap[skillName] || `https://en.wikipedia.org/wiki/${encodeURIComponent(skillName)}`;
    }

    addTooltip(badge) {
        const skillName = badge.querySelector('span').textContent;
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.textContent = `Click to learn more about ${skillName}`;
        tooltip.style.cssText = `
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--card-bg);
            color: var(--text-primary);
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-size: 0.8rem;
            white-space: nowrap;
            backdrop-filter: blur(10px);
            border: 1px solid var(--card-border);
            z-index: 1000;
            opacity: 0;
            animation: fadeInTooltip 0.3s ease-out forwards;
        `;

        // Add CSS for animation
        if (!document.querySelector('#tooltip-styles')) {
            const style = document.createElement('style');
            style.id = 'tooltip-styles';
            style.textContent = `
                @keyframes fadeInTooltip {
                    from { opacity: 0; transform: translateX(-50%) translateY(5px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }

        badge.style.position = 'relative';
        badge.appendChild(tooltip);
    }

    removeTooltip(badge) {
        const tooltip = badge.querySelector('.skill-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
}

// Performance Optimization
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src; // Trigger loading
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    optimizeAnimations() {
        // Disable animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
            document.documentElement.style.setProperty('--transition-duration', '0.01ms');
        }
    }
}

// Accessibility Manager
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIALabels();
    }

    setupKeyboardNavigation() {
        // Enable keyboard navigation for custom interactive elements
        const interactiveElements = document.querySelectorAll(
            '.skill-badge, .project-card, .social-link, .theme-toggle'
        );

        interactiveElements.forEach(element => {
            if (!element.hasAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }

            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
    }

    setupFocusManagement() {
        // Improve focus visibility
        const style = document.createElement('style');
        style.textContent = `
            *:focus-visible {
                outline: 2px solid var(--accent-color);
                outline-offset: 2px;
                border-radius: 3px;
            }
        `;
        document.head.appendChild(style);
    }

    setupARIALabels() {
        // Add ARIA labels where missing
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (!link.hasAttribute('aria-label')) {
                const text = link.textContent.trim();
                link.setAttribute('aria-label', `Navigate to ${text} section`);
            }
        });

        // Add live region for dynamic content
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(liveRegion);
        
        this.liveRegion = liveRegion;
    }

    announce(message) {
        if (this.liveRegion) {
            this.liveRegion.textContent = message;
        }
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.formStatus = document.getElementById('formStatus');
        this.submitBtn = this.form?.querySelector('.form-submit');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.setupFormValidation();
        this.setupFormSubmission();
        this.setupInputAnimations();
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        field.classList.remove('error');
        this.removeFieldError(field);

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Name validation
        if (field.name === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters long';
            }
        }

        // Message validation
        if (field.name === 'message' && value) {
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters long';
            }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            display: block;
            animation: fadeInError 0.3s ease-out;
        `;

        // Add error animation CSS if not exists
        if (!document.querySelector('#error-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'error-animation-styles';
            style.textContent = `
                @keyframes fadeInError {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .input-group input.error,
                .input-group textarea.error {
                    border-color: #ef4444;
                    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
                }
            `;
            document.head.appendChild(style);
        }

        field.parentNode.appendChild(errorElement);
    }

    removeFieldError(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        this.removeFieldError(field);
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleFormSubmit();
        });
    }

    async handleFormSubmit() {
        // Validate all fields
        const inputs = this.form.querySelectorAll('input, textarea');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showFormStatus('error', 'Please fix the errors above');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            // Simulate form submission (replace with actual endpoint)
            await this.simulateFormSubmission();
            
            // Show success message
            this.showFormStatus('success', 'Message sent successfully!');
            this.form.reset();
            
            // Reset input labels
            setTimeout(() => {
                inputs.forEach(input => {
                    const label = input.nextElementSibling;
                    if (label && label.tagName === 'LABEL') {
                        label.style.transform = '';
                        label.style.color = '';
                        label.style.background = '';
                    }
                });
            }, 100);

        } catch (error) {
            console.error('Form submission error:', error);
            this.showFormStatus('error', 'Failed to send message. Please try again.');
        } finally {
            this.setLoadingState(false);
        }
    }

    async simulateFormSubmission() {
        // Simulate network delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    setLoadingState(isLoading) {
        if (isLoading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.disabled = true;
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }

    showFormStatus(type, message) {
        this.formStatus.className = `form-status show ${type}`;
        
        const statusElement = this.formStatus.querySelector(`.status-${type} span`);
        if (statusElement) {
            statusElement.textContent = message;
        }

        // Hide status after 5 seconds
        setTimeout(() => {
            this.formStatus.classList.remove('show');
        }, 5000);
    }

    setupInputAnimations() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Handle initial state for pre-filled inputs
            if (input.value.trim()) {
                const label = input.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.style.transform = 'translateY(-2.5rem) scale(0.85)';
                    label.style.color = 'var(--accent-color)';
                    label.style.background = 'var(--primary-bg)';
                    label.style.padding = '0 0.5rem';
                }
            }
        });
    }
}

// Error Handling
class ErrorHandler {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            this.handleError(e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            this.handleError(e.reason);
        });
    }

    handleError(error) {
        // Graceful degradation - hide animations if there are JavaScript errors
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation: none !important;
                transition: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize Application
class App {
    constructor() {
        this.managers = {};
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeManagers());
        } else {
            this.initializeManagers();
        }
    }

    initializeManagers() {
        try {
            // Initialize all managers
            this.managers.theme = new ThemeManager();
            this.managers.navigation = new NavigationManager();
            this.managers.animation = new AnimationManager();
            this.managers.backToTop = new BackToTopManager();
            this.managers.skill = new SkillManager();
            this.managers.performance = new PerformanceManager();
            this.managers.accessibility = new AccessibilityManager();
            this.managers.contactForm = new ContactFormManager();
            this.managers.errorHandler = new ErrorHandler();

            // Log successful initialization
            console.log('Portfolio application initialized successfully');
            
            // Announce to screen readers
            if (this.managers.accessibility) {
                setTimeout(() => {
                    this.managers.accessibility.announce('Portfolio website loaded successfully');
                }, 1000);
            }

        } catch (error) {
            console.error('Error initializing application:', error);
            // Fallback for basic functionality
            this.initializeFallback();
        }
    }

    initializeFallback() {
        // Basic theme toggle fallback
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }

        // Basic mobile menu fallback
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.querySelector('.nav-menu');
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });
        }
    }
}

// Start the application
const app = new App();