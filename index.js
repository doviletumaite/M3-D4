let books = [];
let shoppingCartList = []
let filteredBooks = [] 
const shoppingCart = document.getElementById("shopping-cart")
window.onload = () => {
  const loadData = document.getElementById("load-data");
  loadData.addEventListener("click", () => {
    searchBooks();
    //skipBook()
    changeStyleBtn()
    addToCart()
  });
};

function searchBooks() {
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then((response) => response.json())
    .then((receiveData) => {
      books = receiveData;
      console.log(receiveData)
      renderData(receiveData);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
function renderData ( receiveData = books ) {
  const row = document.querySelector(".row");
  row.innerHTML = "";
  receiveData.forEach((book) => {
    const card = `<div class="col-4">
        <div class="card mb-4 shadow-sm">
              <img src="${book.img}" class="img-fluid card-img-top alt="${book.title}"/>
                <title>Placeholder</title>
              <div class="card-body">
                <p class="card-text">
                ${book.title}
                </p>
                <p class="card-text">
                ${book.category}
                </p>
                <a href="#" class="btn btn-light" onclick="addToCart('${String(book.asin)}', this)">$${book.price}</a>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondar cart-btn"
                      onclick="changeStyleBtn(e)"
                    >
                      Add to Cart
                    </button>
                     <button id="skip-btn" type="button" class="btn btn-light" onclick="skipBook(this)">Skip</button>
                  </div>
                 
                </div>
              </div> 
            </div>
           
          </div>`;
    row.innerHTML += card;
  });
};

function addToCart(asin, element) {
console.log(asin)
  const book = books.find((book) => book.asin == asin)
  shoppingCartList.push(book)
  console.log(shoppingCartList)
  refreshShoppingCart(); 

  element.closest(".card").classList.add("change-style")
}

function refreshShoppingCart() {
 
 shoppingCart.innerHTML = "";
  shoppingCartList.forEach((book) => {
    shoppingCart.innerHTML += `
    <div class="shopping-item">
              <div>
                ${book.title}
              </div>
              <div>
                ${book.price}
              </div>
              <div>
                <button class="btn btn-danger" onclick="deleteItem('${String(
                  book.asin
                )}')">Delete </button>
              </div>
            </div>
    `
  })
  console.log(shoppingCartList)
}
/* const changeStyleBtn = function (e) {
  const cartBtn = document.querySelector("cart-btn");
  cartBtn.forEach((btn) => {
    btn.onclick = function () {
      const cards = document.querySelectorAll("card");
      cards.forEach((card) => {
        card.classList.add("change-style");
      });
    };
  });
}; */
/* const skipBook = function (e) {
  const skipBtn = document.getElementById("#skip-btn")
  skipBtn.onclick= "this.parentNode.parentNode.removeChild(this.parentNode)"/* function () {
  const card = document.querySelector("card")
  card.remove */
  //} 



const changeStyleBtnTest = function () {
  const btn = document.getElementById("test");

  btn.onclick = function () {
    const h1 = document.querySelector("h1");

    h1.classList.add("change-style");
  };
};
