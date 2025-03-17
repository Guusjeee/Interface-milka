const images = ["milka1.jpg", "milka2.jpg", "milka3.jpg"]; 
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("choco-img").src = images[currentIndex];
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("choco-img").src = images[currentIndex];
});
