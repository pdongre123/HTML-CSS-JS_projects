let namasteBtn=document.querySelector('button');
// namasteBtn.addEventListener('click',showMsg);
// function showMsg(){
//     alert("Namaste World");
// }

namasteBtn.addEventListener('click',inputMsg);
function inputMsg(){
    let name=prompt("Enter the Name of User");
    namasteBtn.textContent="Roll No. 1"+ name;
}