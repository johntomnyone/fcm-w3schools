const active = document.querySelectorAll('.topbar-container .nav-menu ul li');
const activeLink = document.querySelectorAll('.topbar-container .nav-menu ul li a');

window.addEventListener('load', () => {
  for(let i = 0; i < active.length; i++) {
    // console.log(activeLink[1].innerHTML);
    if(window.location.href == 'http://127.0.0.1/fcm/') {
      active[0].classList.add('active');
      activeLink[0].classList.add('active');
    }
    if(window.location.href == 'http://127.0.0.1/fcm/about.php') {
      active[1].classList.add('active');
      activeLink[1].classList.add('active');
    }
    if(window.location.href == 'http://127.0.0.1/fcm/newproducts.php') {
      active[2].classList.add('active');
      activeLink[2].classList.add('active');
    }
    if(window.location.href == 'http://127.0.0.1/fcm/tools.php') {
      active[3].classList.add('active');
      activeLink[3].classList.add('active');
    }
    if(window.location.href == 'http://127.0.0.1/fcm/training.php') {
      active[4].classList.add('active');
      activeLink[4].classList.add('active');
    }
    if(window.location.href == 'http://127.0.0.1/fcm/downloads.php') {
      active[5].classList.add('active');
      activeLink[5].classList.add('active');
    }
  }
})

// const labelElement = document.createElement('label');

// HARMBURGER MENU - MOBILE menu
const burgerContainer = document.querySelector('.hamburger-container .hamburger');
let harmbug = document.querySelector('.hamburger-container .hamburger');
const showMenu = document.querySelector('.topbar-container');

burgerContainer.addEventListener('click', mobileMenu);

function mobileMenu(e) {
  harmbug.classList.toggle('burger');
  showMenu.classList.toggle('show-menu');
}

let searchInput = document.getElementById('search');
if(window.innerWidth <= 810) {
    searchInput.setAttribute('size', '20');
}else {
  searchInput.setAttribute('size', '30');
}

// PUBLIC API DATABASE
// curl --location --request GET 'https://api.ritekit.com/v1/stats/hashtag-suggestions?text=seo'
const apiData = async() => {
  const url = 'https://api.publicapis.org/entries';
  const dataFetch = await fetch(url);
  const data = await dataFetch.json();

  const displayAPIName = document.querySelector('.api-name');
  const displayAPIDesc = document.querySelector('.api-description');
  const displayAPICategory = document.querySelector('.api-category');
  const displayAPILink = document.querySelector('.api-link');

  data.entries.length = 10;
  for(let dt of data.entries) {
    const eachAPIName = document.createElement('li');
    eachAPIName.innerHTML = dt.API

    const eachAPIDesc = document.createElement('li');
    eachAPIDesc.innerHTML = dt.Description;

    const eachAPICategory = document.createElement('li');
    eachAPICategory.innerHTML = dt.Category;

    const eachAPILink = document.createElement('li');
    const apiLink = document.createElement('a');
    apiLink.innerHTML = dt.Link;
    apiLink.setAttribute('href', `${dt.Link}`);
    apiLink.setAttribute('target', '_blank');

    displayAPIName.appendChild(eachAPIName);
    displayAPIDesc.appendChild(eachAPIDesc);
    displayAPICategory.appendChild(eachAPICategory);
    displayAPILink.appendChild(eachAPILink).appendChild(apiLink);

  }
}

apiData();
// /PUBLIC API DATABASE

// NEW PRODUCTS
window.addEventListener('load', toggleNewProducts);

function toggleNewProducts() {
  let newProduct = document.querySelectorAll('.new-products .new-products-names');
  if(newProduct[0].classList.contains('show-product')) {
    newProduct[0].classList.remove('show-product');
    newProduct[1].classList.add('show-product');
  }else {
    newProduct[0].classList.add('show-product');
    newProduct[1].classList.remove('show-product');
  }
}
setInterval(toggleNewProducts, 2000);

// /NEW PRODUCTS
