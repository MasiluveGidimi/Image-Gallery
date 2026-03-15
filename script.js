const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

images.forEach(img => {

img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
});

});

close.addEventListener("click", () => {
lightbox.style.display = "none";
});



const buttons = document.querySelectorAll(".tag-buttons button");
const items = document.querySelectorAll(".image");

buttons.forEach(button => {

button.addEventListener("click", () => {

document.querySelector(".active").classList.remove("active");
button.classList.add("active");

const filter = button.dataset.filter;

items.forEach(item => {

if(filter === "all" || item.dataset.category === filter){
item.style.display = "grid";
}else{
item.style.display = "none";
}

});

});

});

