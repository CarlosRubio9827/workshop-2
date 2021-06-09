const getFox = document.querySelector('.getFox')
const deleteFox = document.querySelector('.deleteFox')
const baseUrl = 'https://randomfox.ca/floof/';

const fetchFox = (event)=>{

fetch(baseUrl)
  .then(response => response.json())
  .then(data => {

    const img = document.createElement("img");
    img.src = data.image;
    img.classList='mx-auto m-5 fox-img'
    img.loading = 'lazy'
    const container = document.querySelector("#images")
    container.append(img)
});
}

getFox.addEventListener('click', fetchFox) 
deleteFox.addEventListener('click', ()=>{
    const container = document.querySelector("#images")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
})       
