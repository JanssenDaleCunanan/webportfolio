
window.onscroll = function() {myFunction()};


var navbar = document.getElementById("nav");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const text = document.querySelector('#circular-text h2');


 text.innerHTML = text.innerText.split("").map(
  (char,i) =>
  `<span style="transform:rotate(${i * 7.2}deg)">${char}</span>`
 ).join("")


// ***************EXPERIMENT 2******************


 // const text2 = document.querySelector('#circular-text2 h2');


 // text2.innerHTML = text2.innerText.split("").map(
 //  (char,i) =>
 //  `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
 // ).join("")



 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

// ONLOAD

 function refresh() {
  window.replace("./capstone.html")
 }