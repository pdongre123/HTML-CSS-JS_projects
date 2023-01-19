document.querySelectorAll(".book").forEach((item) => {
    item.addEventListener("click", () => {
      item.style.display = "none";
    });
  });
  
  document.querySelector(".help button").addEventListener("click", () => {
    document.querySelectorAll(".book").forEach((book) => {
      book.style.display = "block";
    })
  });