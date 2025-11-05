let currentSlide = 0
const slides = document.querySelectorAll(".carousel-slide")
const dots = document.querySelectorAll(".dot")
let autoPlayInterval

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Add active class to current slide and dot
  slides[index].classList.add("active")
  dots[index].classList.add("active")

  currentSlide = index
}

function nextSlide() {
  let next = currentSlide + 1
  if (next >= slides.length) {
    next = 0
  }
  showSlide(next)
}

function prevSlide() {
  let prev = currentSlide - 1
  if (prev < 0) {
    prev = slides.length - 1
  }
  showSlide(prev)
}

function goToSlide(index) {
  showSlide(index)
  resetAutoPlay()
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000)
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval)
  startAutoPlay()
}

// Initialize carousel
showSlide(0)
startAutoPlay()

// Pause autoplay on hover
const carousel = document.querySelector(".carousel")
carousel.addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval)
})

carousel.addEventListener("mouseleave", () => {
  startAutoPlay()
})
