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
