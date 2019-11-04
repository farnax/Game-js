//Add class with colors to carts

const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const addClassToCart = function(selector) {
  const colors = ['red', 'green', 'blue', 'lime', 'black', 'gray', 'pink', 'violet', 'yellow', 'brown'];
  let carts = document.querySelectorAll(selector);
  
  for (let i = 0; i < carts.length; i++) {
  	let index = getRandomInt(0, colors.length - 1);
  	carts[i].classList.add(colors[index]);
    colors.splice(index, 1);
  }
  return carts;
}

document.addEventListener('DOMContentLoaded', function() {
  addClassToCart('.row-1 .cart');
  addClassToCart('.row-2 .cart');
});

//Change background by click 

document.addEventListener('click', function(e){
  let cart = e.target.closest('.cart');
  if (cart) {
  	 let backgroundColor = cart.className.slice(5);
     cart.style.background = backgroundColor;

     cart.classList.add('active');
     const active = document.querySelectorAll('.active');
     const activeArr = Array.from(active);

     if(activeArr.length == 2) {
       matches(activeArr);
       active.forEach(function(elem){
      	 elem.classList.remove('active');
       });
      }
    }
});

const matches = function(arr, count) {
  setTimeout(() => {
  	if(arr[0].style.background == arr[1].style.background) {
      arr[0].style.display = arr[1].style.display = 'none';
      restartGame();
    } else {
      arr[0].style.backgroundImage = arr[1].style.backgroundImage = 'url(bg_image.jpg)';
    }
  }, 1000);
};

//Repeat game
const container = document.querySelector('.container');
const button = document.querySelector('button');

const restartGame = function() {
  let containerHeight = container.offsetHeight;
  console.log(containerHeight);
    if (containerHeight == 0) {
      button.style.display = 'block';
    }
}
button.addEventListener('click', () => {
  window.location.reload();
})