var api_key = "W5Y6Jyh7Ju0wPhQ9Vw0ahIAvHIb7uKjv"
var url_1 = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`
var url_2 = `https://api.giphy.com/v1/gifs/categories?api_key=${api_key}`
fetch(url_1)
.then(res=>{
    return res.json()
})
.then(data=>{
    add_gifs(data.data);
});

fetch(url_2)
.then(res=>{
    return res.json()
})
.then(data=>{
    // console.log(data.data);
    add_random_gifs(data.data);
})

function add_gifs(gifs){
    var gif_box = document.getElementById('gifs_id'); 
    gifs.forEach(element => {
        gif_box.innerHTML += 
        `<div class='gif'>
            <img src = ${element.images.original.url} alt='loading'>
        </div>`
    });
}

function add_random_gifs(gifs){
    var gif_box = document.getElementById('gifs_random'); 
    gifs.forEach(element => {
        gif_box.innerHTML += 
        `<div class='gif'>
            <img src = ${element.gif.images.original.url} alt='loading'>
        </div>`
    });
}