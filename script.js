// Typing Effect for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.querySelector('.typed-text');
    const textArray = ["Er. Akant Raju, B.O.E.", "Mechanical Engineer", " 20+ Years in Boiler & Power Plant"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(type, 1000);
});

// Scroll Reveal Animation
function revealOnScroll() {
    const revealElements = document.querySelectorAll('.timeline-item, .education-card, .skill-item, .language-item, .animated-text');
    
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('visible');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Parallax Effect for Hero Section
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    hero.style.backgroundPosition = `${50 + xAxis}% ${50 + yAxis}%`;
});

// Animated Background Elements
function createBackgroundElements() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create some animated background elements
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'bg-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.width = Math.random() * 10 + 5 + 'px';
        element.style.height = element.style.width;
        element.style.opacity = Math.random() * 0.5 + 0.1;
        element.style.animationDuration = Math.random() * 10 + 5 + 's';
        hero.appendChild(element);
    }
}

// Add styles for background elements
const bgStyles = `
    .bg-element {
        position: absolute;
        background-color: rgba(255, 107, 53, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(30px, -20px) rotate(120deg); }
        66% { transform: translate(-20px, 20px) rotate(240deg); }
        100% { transform: translate(0, 0) rotate(360deg); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.innerText = bgStyles;
document.head.appendChild(styleSheet);

// Initialize background elements
createBackgroundElements();

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        if (header) header.classList.add('scrolled');
    } else {
        if (header) header.classList.remove('scrolled');
    }
});

// Certificate hover effect enhancement
document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px -15px rgba(255, 107, 53, 0.6)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
    });
});

// Skill icon animation enhancement
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.skill-icon');
        icon.style.transform = 'scale(1.3) rotate(15deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    skill.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.skill-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Contact form input animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-5px)';
        this.parentElement.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.2)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
        this.parentElement.style.boxShadow = 'none';
    });
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.4)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.querySelector('.close');
    const viewCertificateButtons = document.querySelectorAll('.view-certificate-btn');
    
    // Add click event to all "View Certificate" buttons
    viewCertificateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certificateType = this.getAttribute('data-certificate');
            openCertificateModal(certificateType);
        });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Function to open certificate modal
    function openCertificateModal(certificateType) {
        const title = document.getElementById('certificateTitle');
        const image = document.getElementById('certificateImage');
        const placeholderText = document.getElementById('certificatePlaceholderText');
        const downloadBtn = document.getElementById('downloadCertificate');
        
        // Reset elements
        image.style.display = 'none';
        placeholderText.style.display = 'block';
        downloadBtn.style.display = 'none';
        
        // Set content based on certificate type
        if (certificateType === 'boe') {
            title.textContent = 'Boiler Operation Engineer (B.O.E.) Certificate';
            // Display the actual certificate image
            image.src = 'public/BOE.jpg';
            image.alt = 'B.O.E. Certificate';
            image.style.display = 'block';
            placeholderText.style.display = 'none';
            downloadBtn.style.display = 'inline-block';
            
            // Set up download functionality
            downloadBtn.onclick = function() {
                const link = document.createElement('a');
                link.href = 'public/BOE.jpg';
                link.download = 'BOE_Certificate_Akant_Raju.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        }
        
        // Display the modal
        modal.style.display = 'block';
    }
});
