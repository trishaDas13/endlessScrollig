let imageContainer = document.querySelector('.imageContainer');
const apiKey = 'BTGs7EWSmMTazDjzaH3xEbX3n0Jzp9-UloD1PsUEOpw';
const page = 10;

//todo: Fetch API
async function fetchAPI(){
    let data = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${page}`);
    let res = await data.json();
    cerateObject(res);
}
fetchAPI()
//todo: Create Object
function cerateObject(res){
    let imageArray = res.map((item) =>{
        return obj = {
            imageLink : item.urls.regular
        }
    });
    appendImage(imageArray);
}
//todo: append image
function appendImage(imageArray){
    imageArray.forEach(element => {
        let image = document.createElement('img');
        image.classList.add('image');
        image.src = element.imageLink;
        imageContainer.appendChild(image);
    });

}
window.addEventListener('scroll', () =>{
    fetchAPI();
    // appendImage();
});