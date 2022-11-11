let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

function addOutput(e) {
  console.log(e.target.innerText);
  let char = e.target.innerText;
  console.log(screen.value);
  if (char == "C") {
    screen.value = " ";
  } else if (char == "=") {
    screen.value = eval(screen.value);
  } else {
    screen.value += char;
  }
}

for (item of buttons) {
  item.addEventListener("click", addOutput);
}
