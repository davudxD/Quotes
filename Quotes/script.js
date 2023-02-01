var quotes = [];
var allQuotes = [];

function likeQuote(id) {
  fetch("https://js-course-server.onrender.com/quotes/like/" + id, {
    method: "PATCH",
  }).then((response) => {
    getQuotes();
  });
}

function deleteQuote(id) {
  fetch("https://js-course-server.onrender.com/quotes/delete/" + id, {
    method: "DELETE",
  }).then((response) => {
    getQuotes();
  });
}

function renderQuotes() {
  var parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  quotes.forEach(function (item, index) {
    var childEl = document.createElement("li");
    var quoteTextEl = document.createElement("p");
    var quoteLikesEl = document.createElement("p");
    var likeEl = document.createElement("img");
    var deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    quoteLikesEl.textContent = "Likes: " + item.likes;

    

    likeEl.src = "like.png";
    likeEl.style = "width: 30px";
    likeEl.onclick = function () {
      likeQuote(item._id);
      
    };

    deleteEl.src = "remove.png";
    deleteEl.style = "width: 30px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };

    childEl.appendChild(quoteTextEl);
    childEl.appendChild(quoteLikesEl);
    childEl.appendChild(likeEl);
    childEl.appendChild(deleteEl);

    parentEl.appendChild(childEl);
  });
}

async function getQuotes() {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quotes = data;
      allQuotes = data;
      renderQuotes();
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

getQuotes();

document.getElementById("search").addEventListener("keydown", function () {
  var searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter(function (item, index) {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});