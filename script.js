// script.js
// Product data
const products = [
    {
        title: "iPhone 14 Pro",
        description: "The ultimate iPhone experience with Dynamic Island, Always-On display, and the most powerful camera system ever on iPhone.",
        price: "$999",
        image: "#"
    },
    {
        title: "iPhone 14",
        description: "A powerful smartphone with an impressive camera system, long battery life, and a stunning design.",
        price: "$799",
        image: "#"
    },
    {
        title: "iPhone 13",
        description: "A sophisticated design with an advanced dual-camera system, powerful A15 Bionic chip, and longer battery life.",
        price: "$699",
        image: "#"
    },
    {
        title: "iPhone SE",
        description: "The most affordable iPhone featuring the powerful A15 Bionic chip, 5G connectivity, and a compact design.",
        price: "$429",
        image: "#"
    },
    {
        title: "iPhone 12",
        description: "A superpowerful chip, 5G speed, an advanced dual-camera system, and a Ceramic Shield front cover.",
        price: "$599",
        image: "#"
    },
    {
        title: "iPhone 11",
        description: "A powerful dual-camera system, all-day battery life, and the fastest performance ever in an iPhone.",
        price: "$499",
        image: "#"
    }
];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const loader = document.getElementById('loader');
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;

// Function to generate product cards
function generateProductCards(startIndex, count) {
    for (let i = startIndex; i < startIndex + count && i < products.length; i++) {
        const product = products[i];
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="buy-now" onclick="window.location.href='#'">Buy Now</button>
                    <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    }
}

// Function to add to cart
function addToCart() {
    cartItems++;
    cartCount.textContent = cartItems;
    
    // Show a quick visual feedback
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 300);
}

// Infinite scroll functionality
let currentIndex = 0;
const productsPerLoad = 4;

function loadMoreProducts() {
    // Show loader
    loader.style.display = 'block';
    
    // Simulate network delay
    setTimeout(() => {
        generateProductCards(currentIndex, productsPerLoad);
        currentIndex += productsPerLoad;
        
        // Hide loader
        loader.style.display = 'none';
        
        // If we've loaded all products, reset to beginning for infinite effect
        if (currentIndex >= products.length) {
            currentIndex = 0;
        }
    }, 1000);
}

// Check if user has scrolled to the bottom
function checkScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = document.documentElement.scrollHeight - window.innerHeight - 100;
    
    if (scrollY > threshold && loader.style.display === 'none') {
        loadMoreProducts();
    }
}

// Initial load
generateProductCards(0, 4);
currentIndex = 4;

// Add scroll event listener
window.addEventListener('scroll', checkScroll);

// Add to cart functionality for all buttons
document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});