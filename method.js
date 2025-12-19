const MENU = {
  main: {
    burger: {
      title: "Classic Burger",
      ingredients: "Beef patty, cheddar cheese, lettuce, tomato",
      price: "$8.99",
      model: "#model1"
    },
    pizza: {
      title: "Margherita Pizza",
      ingredients: "Mozzarella, tomato, basil",
      price: "$10.50",
      model: "#model2"
    }
  },
  dessert: {
    drink: {
      title: "Lemonade",
      ingredients: "Lemon, mint, soda",
      price: "$3.99",
      model: "#model3"
    }
  }
};

let currentCategory = "main";
let plate = [];

function selectCategory(cat) {
  currentCategory = cat;

  document.querySelectorAll('.categories button')
    .forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  renderItems();
}

function renderItems() {
  const container = document.getElementById('item-buttons');
  container.innerHTML = '';

  Object.keys(MENU[currentCategory]).forEach(key => {
    const btn = document.createElement('button');
    btn.innerText = MENU[currentCategory][key].title;
    btn.onclick = () => showDish(currentCategory, key);
    container.appendChild(btn);
  });
}

function showDish(cat, key) {
  const dish = MENU[cat][key];
  window.currentDish = dish;

  document.getElementById('dish-title').innerText = dish.title;
  document.getElementById('dish-ingredients').innerText = dish.ingredients;
  document.getElementById('dish-price').innerText = dish.price;

  switchModel(dish.model);
}

function addToPlate() {
  if (!currentDish) return;
  plate.push(currentDish);
  updatePlateCount();
}

function removeFromPlate() {
  plate.pop();
  updatePlateCount();
}

function updatePlateCount() {
  document.getElementById('plate-count').innerText = plate.length;
}
