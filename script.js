const gifContainerEl = document.querySelector('#gif-container');

function getGifs() {

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=rlGjlbEQibLMHv9podBx98qqxWvMQjFB&limit=10&rating="g"')
        .then((response) => response.json())
        .then((data) => {

            const results = data.data;

            console.log(results);

            results.map(gif => {
                let title = document.createElement('h4');
                let giphyBox = document.createElement('div');

                title.textContent = gif.title;
                giphyBox.innerHTML = `<img src="${gif.images.original.url}" alt="${gif.title}" />`

                console.log(giphyBox);

                gifContainerEl.append(title);
                gifContainerEl.append(giphyBox);

            })
        })
}

getGifs();