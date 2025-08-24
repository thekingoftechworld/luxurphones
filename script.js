// Countdown Timer
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    let time = countdownElement.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);
    
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                // Timer has ended
                clearInterval(countdownInterval);
                countdownElement.textContent = "Offer Expired!";
                return;
            }
        }
    }
    
    // Format the time to always show two digits
    countdownElement.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the countdown timer
const countdownInterval = setInterval(updateCountdown, 1000);

// Cart functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

// Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert('Product added to cart!');
    });
});

// Buy Now buttons
const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}
