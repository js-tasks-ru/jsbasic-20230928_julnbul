function initCarousel() {
  let carousel = document.querySelector(".carousel");
  let carouselInner = document.querySelector(".carousel__inner");

  let slideNumber = 0;
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");

  if (slideNumber == 0) {
    arrowLeft.style.display = "none";
  }

  carousel.addEventListener("click", function (event) {
    let arrow = event.target.closest(".carousel__arrow"); 
    let widthSlide = carouselInner.offsetWidth; 

    if (arrow.classList.contains("carousel__arrow_right")) {
      slideNumber++;

      if (slideNumber == 1) {
        arrowLeft.style.display = "";
      } else if (slideNumber == 3) {
        arrowRight.style.display = "none";
      }

      carouselInner.style.transform = `translateX(-${slideNumber * widthSlide}px)`; 
    } else if (arrow.classList.contains("carousel__arrow_left")) {
      slideNumber--;

      if (slideNumber == 2) {
        arrowRight.style.display = "";
      } else if (slideNumber == 0) {
        arrowLeft.style.display = "none";
      }
      carouselInner.style.transform = `translateX(-${slideNumber * widthSlide}px)`;
    }
  });
}
