var api_key = "W5Y6Jyh7Ju0wPhQ9Vw0ahIAvHIb7uKjv"
var url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`

fetch(url)
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data.data);
    add_gifs(data.data);
})

function add_gifs(gifs){
    var gif_box = document.getElementById('gifs_id'); 
    gifs.forEach(element => {
        gif_box.innerHTML += 
        `<div>
            <img src = ${element.images.original.url} alt='loading'>
        </div>`
    });
}