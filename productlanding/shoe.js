let sideNav = document.querySelector(".sidenav");
let openBtn = document.getElementById("openNav");
let closeBtn = document.getElementById("closeNav");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
  sideNav.style.width = "250px";
}

function closeNav() {
  sideNav.style.width = "0";
}

const name = document.getElementById('Name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;


localStorage.setItem('Name', Name);
localStorage.setItem('email', Email);
localStorage.setItem('message', message);


  
const storedName = localStorage.getItem('name');
const storedEmail = localStorage.getItem('email');
const storedMsg = localStorage.getItem('message');

document.getElementById('display-name').innerText = storedName;
document.getElementById('display-email').innerText = storedEmail; 
document.getElementById('display-message').innerText = storedMsg;

localStorage.removeItem('name');
localStorage.removeItem('email'); 
localStorage.removeItem('message');
form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  
    window.location.href = '/message.html';  
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach(contact => {
    
      // Create elements 
      let div = document.createElement('div');
      div.textContent = `${contact.name} - ${contact.email}`;
      
      document.body.appendChild(div);
      
    });
document.addEventListener('DOMContentLoaded', function () {
  function addToWishlist(productName) {
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlistItems.includes(productName)) {
      wishlistItems.push(productName);

      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));

      displayWishlist();
    } else {
      alert('Product is already in the wishlist!');
    }
  }

  function displayWishlist() {
    const wishlistContainer = document.getElementById('wishlist-items');

    wishlistContainer.innerHTML = '';

    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    wishlistItems.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      wishlistContainer.appendChild(li);
    });
  }

  displayWishlist();

 const wishlistButtons = document.querySelectorAll('.wishlist-button');
  wishlistButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const productName = this.closest('.feature').querySelector('h2').textContent;

      addToWishlist(productName);
    });
  });
});

  });