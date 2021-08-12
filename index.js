let books = [];
window.onload = () => {
  const loadData = document.getElementById("load-data");
  loadData.addEventListener("click", () => {
    searchBooks();
    skipBook()
    changeStyleBtn()
  });
};

function searchBooks() {
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then((response) => response.json())
    .then((receiveData) => {
      books = receiveData;
      renderData(receiveData);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
const renderData = function (books) {
  const row = document.querySelector(".row");
  row.innerHTML = "";
  books.forEach((book) => {
    const card = `<div class="col-4">
        <div class="card mb-4 shadow-sm">
              <img src="${book.img}"/>
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                ${book.title}
                </p>
               
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

const changeStyleBtn = function (e) {
  const cartBtn = document.querySelector("cart-btn");
  cartBtn.forEach((btn) => {
    btn.onclick = function () {
      const cards = document.querySelectorAll("card");
      cards.forEach((card) => {
        card.classList.add("change-style");
      });
    };
  });
};
const skipBook = function (e) {
  const skipBtn = document.getElementById("#skip-btn")
  skipBtn.onclick= "this.parentNode.parentNode.removeChild(this.parentNode)"/* function () {
  const card = document.querySelector("card")
  card.remove */
  }


const changeStyleBtnTest = function () {
  const btn = document.getElementById("#test");

  btn.onclick = function () {
    const h1 = document.querySelector("h1");

    h1.classList.add("change-style");
  };
};
