var api_key = "W5Y6Jyh7Ju0wPhQ9Vw0ahIAvHIb7uKjv";
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

fetch(url_3)
.then(res=>{
    return res.json();
})
.then(data=>{
    console.log(data);
    add_stickers(data.data);
})


function add_stickers(data){
    var gifs = document.getElementById('gifs');
    data.forEach(gif =>{
        gifs.innerHTML+= 
        `<div class='gif'>
            <img src=${gif.images.original.url}/>  
        </div>`  
    });
};

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
  };