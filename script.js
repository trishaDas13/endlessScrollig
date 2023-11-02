let imageContainer = document.querySelector('.imageContainer');
const apiKey = 'xygnL49gQZTMKBvzHCFMa2gBB86XTG3iTJ4xOjLDjJY';
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
    if(window.scrollY + window.innerHeight  >= document.body.offsetHeight){
        fetchAPI();
    }
});