import 'regenerator-runtime';
import '../styles/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import data.json
import data from '../public/data/DATA.json';

// Display data.json to DOM
const restaurantCard = document.querySelector('.restaurant-list');
data.restaurants.forEach((restaurant) => {
    const card = document.createElement('div');
    card.classList.add('restaurant-card');

    card.innerHTML = `
        <div class="restaurant-image">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="restaurant-info">
            <h3 class="name">${restaurant.name}</h3>
            <p class="city"><i class="bi bi-geo-alt-fill"></i> ${restaurant.city}</p>
            <p class="rating"><i class="bi bi-star-fill"></i> ${restaurant.rating}</p>
            <p class="description">${restaurant.description}</p>
            <p class="read-more">Read More</p>
        </div>
    `;

    restaurantCard.appendChild(card);
});

const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const description = button.previousElementSibling;
        description.classList.toggle('expanded');
    });
});

const menuButton = document.querySelector('.nav_menu');
const navList = document.querySelector('.nav_list');

menuButton.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Close the menu if the user clicks outside of it
document.addEventListener('click', (event) => {
  if (!navList.contains(event.target) && !menuButton.contains(event.target)) {
    navList.classList.remove('open');
  }
});
