const gifContainerEl = document.querySelector('#gif-container');
let searchBoxEl = document.querySelector('#search-box');
const searchButtonEl = document.querySelector('#search-button');



function getGifs() {

    let searchTerm = searchBoxEl.value;
    console.log(searchTerm);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=rlGjlbEQibLMHv9podBx98qqxWvMQjFB&limit=10&rating="g"&q=' + searchTerm +'')
        .then((response) => response.json())
        .then((data) => {

            const results = data.data;

            // console.log(results);

            results.map(gif => {
                let title = document.createElement('h4');
                let giphyBox = document.createElement('div');

                title.textContent = gif.title;
                giphyBox.innerHTML = `<img src="${gif.images.original.url}" alt="${gif.title}" />`

                // console.log(giphyBox);

                gifContainerEl.append(title);
                gifContainerEl.append(giphyBox);

            })
        })
}



