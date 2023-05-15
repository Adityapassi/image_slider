// Trageting Elements
let slider = document.querySelector(".slider") //Silder is container of Images
let slider_img = document.querySelectorAll(".slider_img") // Images
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

console.log(prevBtn)
sliderIndex=0

slider_img[sliderIndex].classList.add("active")  

prevBtn.addEventListener("click",prevSlide)

function prevSlide(){
    slider_img[sliderIndex].classList.remove("active")

    sliderIndex=(sliderIndex === 0) ? slider_img.length-1 : sliderIndex - 1;
    slider_img[sliderIndex].classList.add("active") 
    slider.style.transform=`translateX(-${sliderIndex * 100}%)`;
}

nextBtn.addEventListener("click",nextSlide)

function nextSlide(){
    slider_img[sliderIndex].classList.remove("active")

    sliderIndex=(sliderIndex === slider_img.length - 1) ? 0 : sliderIndex + 1;
    slider_img[sliderIndex].classList.add("active") 
    slider.style.transform=`translateX(-${sliderIndex * 100}%)`;
}

setInterval(nextSlide,5000)