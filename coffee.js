const homeBtn = document.getElementById("home")
const name = document.getElementById("name")
const toTop = document.getElementById("toTop")

const goToPage = function (page) {
  window.location = page
}

toTop.addEventListener("click", () => {
  this.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

setInterval(() => {
  if (this.scrollY > 30) {
    name.classList.add("hidden")
    toTop.classList.remove("hidden")
  } else {
    name.classList.remove("hidden")
    toTop.classList.add("hidden")
  }
}, 10)
