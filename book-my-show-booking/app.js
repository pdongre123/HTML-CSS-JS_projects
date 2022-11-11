let no = document.querySelectorAll(".no")
let img = document.querySelector("img")
var a = 0

for (let x = 0; x < no.length; x++) {
  function remove(a) {
    for (let y = 0; y < 10; y++) {
      if (y == a) {
        no[y].classList.add("selected")
      } else {
        no[y].classList.remove("selected")}
    }
}

    no[x].addEventListener("click", () => {
      if (x == 0) {
        img.src = "images/bicycle.png";
        remove(x);
      } else if (x == 1) {
        img.src = "images/motorcycle.png";
        remove(x);
      } else if (x == 2) {
        img.src = "images/autorickshaw.png";
        remove(x);
      } else if (x == 3) {
        img.src = "images/car.png";
        remove(x);
      } else if (x == 4) {
        img.src = "images/bus.png";
        remove(x);
      } else if (x == 5) {
        img.src = "images/truck.png";
        remove(x);
      } else if (x == 6) {
        img.src = "images/bicycle.png";
        remove(x);
      } else if (x == 7) {
        img.src = "images/motorcycle.png";
        remove(x);
      } else if (x == 8) {
        img.src = "images/autorickshaw.png";
        remove(x);
      } else if (x == 9) {
        img.src = "images/car.png";
        remove(x);
      } else if (x == 10) {
        img.src = "images/bus.png";
        remove(x);
      }
    });
    img.addEventListener("change", () => {

    });
  }

