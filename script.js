function setupSlider(sliderId) {
    const sliderTrack = document.getElementById(sliderId);
    const images = sliderTrack.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;

    function updateSlider() {
        const imageWidth = images[0].clientWidth; 
        const newTransform = -currentIndex * imageWidth + "px";
        sliderTrack.style.transform = `translateX(${newTransform})`;
    }

    document.querySelector(`[data-slider="${sliderId}"].next`).addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalImages; 
        updateSlider();
    });

    document.querySelector(`[data-slider="${sliderId}"].prev`).addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSlider();
    });

  
    window.addEventListener("resize", updateSlider);
}


setupSlider("favorites-slider");
setupSlider("new-products-slider");
