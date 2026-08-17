const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

function addToWishlist(productName, price) {
  const item = {
    productName: productName,
    price: price,
  };

  wishlistItems.push(item);

  localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
}

function displayWishlist() {
  const wishlistContainer = document.getElementById('wishlist-items');

  wishlistContainer.innerHTML = '';

  wishlistItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - Rs.${item.price}`;
    wishlistContainer.appendChild(listItem);
  });
}

window.addEventListener('load', displayWishlist);


document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('homeBtn');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistContainer = document.getElementById('wishlist-items');
  
    homeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  
    wishlistBtn.addEventListener('click', () => {
      window.location.href = 'wishlist.html';
    });
  
    function displayWishlist() {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  
      wishlistContainer.innerHTML = '';
  
      wishlistItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - Rs.${item.price}`;
        wishlistContainer.appendChild(listItem);
      });
    }
  
    function addToWishlist(productName, price) {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
      const item = {
        productName: productName,
        price: price,
      };
  
      wishlistItems.push(item);
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  
      displayWishlist();
    }
  
    window.addEventListener('load', displayWishlist);
  });


document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('homeBtn');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistContainer = document.getElementById('wishlist-items');
  
    homeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  
    wishlistBtn.addEventListener('click', () => {
      window.location.href = 'wishlist.html';
    });
  
    function displayWishlist() {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  
      wishlistContainer.innerHTML = '';
  
      wishlistItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - Rs.${item.price}`;
        
        listItem.addEventListener('click', () => {
          removeFromWishlist(index);
        });
  
        wishlistContainer.appendChild(listItem);
      });
    }
  
    function addToWishlist(productName, price) {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
      const item = {
        productName: productName,
        price: price,
      };
  
      wishlistItems.push(item);
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  
      displayWishlist();
    }
  
    function removeFromWishlist(index) {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  
      wishlistItems.splice(index, 1);
  
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  
      displayWishlist();
    }
  
    window.addEventListener('load', displayWishlist);
  });
  