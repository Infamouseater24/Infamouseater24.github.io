// Function to filter fruits based on price range
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const fruitItems = document.querySelectorAll('.fruit-item');

// Update the displayed price range value
priceRange.addEventListener('input', function () {
    const selectedPrice = parseInt(priceRange.value);
    priceValue.textContent = selectedPrice + " NRs";
    filterFruitsByPrice(selectedPrice);
});

// Function to filter fruits based on selected price
function filterFruitsByPrice(maxPrice) {
    fruitItems.forEach(item => {
        const price = parseInt(item.querySelector('.price').textContent);
        if (price <= maxPrice) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to handle grade selection
const gradeSelects = document.querySelectorAll('.fruit-item select');

gradeSelects.forEach(select => {
    select.addEventListener('change', function () {
        const selectedGrade = select.value;
        alert(`You selected grade ${selectedGrade} for this fruit.`);
        // This can be expanded to update the price or details based on the grade.
    });
});

// Function to handle "Buy Now" button clicks
const buyButtons = document.querySelectorAll('.fruit-item button');

buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const fruitName = this.parentElement.querySelector('h3').textContent;
        const selectedGrade = this.parentElement.querySelector('select').value;
        alert(`You have added ${fruitName} (Grade: ${selectedGrade}) to your cart.`);
        // Here, you could integrate further cart logic or backend interaction.
    });
});
// Shopping Cart Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Function to update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Function to display cart items
function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const fruitDiv = document.createElement('div');
        fruitDiv.innerHTML = `<strong>${item.name}</strong> (Grade: ${item.grade}) - ${item.price} NRs`;
        cartItemsContainer.appendChild(fruitDiv);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total Price: ${totalPrice} NRs`;
}

// Event listener for the cart button
document.getElementById('cart-btn').addEventListener('click', function () {
    cartModal.style.display = 'block';
    displayCartItems();
});

// Event listener for closing the modal
document.querySelector('.close').addEventListener('click', function () {
    cartModal.style.display = 'none';
});

// Function to handle "Buy Now" button clicks
const buyButtons = document.querySelectorAll('.fruit-item button');

buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const fruitName = this.parentElement.querySelector('h3').textContent;
        const selectedGrade = this.parentElement.querySelector('select').value;
        const price = parseInt(this.parentElement.querySelector('.price').textContent);

        // Add item to cart
        cart.push({ name: fruitName, grade: selectedGrade, price: price });
        localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage
        updateCartCount(); // Update cart count
        alert(`You have added ${fruitName} (Grade: ${selectedGrade}) to your cart.`);
    });
});

// Initial call to set the cart count on page load
updateCartCount();
