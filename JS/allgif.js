var api_key = "W5Y6Jyh7Ju0wPhQ9Vw0ahIAvHIb7uKjv";
var url_1 = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;
var url_3 = `https://api.giphy.com/v1/stickers/trending?api_key=${api_key}`;
var search = document.getElementById("searchbarr");
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search_gifs();
});
function search_gifs() {
  var url_2 = `https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=${api_key}`;
  console.log(search.value);
  fetch(url_2)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      add_search(data.data);
    });
}

fetch(url_1)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    add_all(data.data);
  });

fetch(url_3)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    add_all(data.data);
  });

var gifs = document.getElementById("gifs");
function add_all(data) {
  data.forEach((gif) => {
    gifs.innerHTML += `<div class='gif'>
            <img src=${gif.images.original.webp}/>  
        </div>`;
  });
}

function add_search(data) {
  if (data.length > 0) {
    var search_gifs = document.getElementById("search_gifs");
    var gifs = document.getElementById("gifs_searched");
    data.forEach((gif) => {
      gifs.innerHTML += `<div class='gif'>
                    <img src=${gif.images.original.url}/>  
                </div>`;
    });
    search_gifs.style.visibility = "visible";
  }
}
