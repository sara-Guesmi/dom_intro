// alert("test if they are linked");
// step1: we test if HTML is linked with JS
console.log("they are linked");
// selectors:
// ---------
// method: Getelements
// 1 - getelementById:
let titleId = document.getElementById("title");
let titleClass = document.getElementsByClassName("titlee");
let titleTag = document.getElementsByTagName("h1");
console.log(titleTag);
// method2: querySelector
// queryselector: return 1 element
let titleQuery = document.querySelector("h1");
let titleQueryClass = document.querySelector(".title");
let titleQueryId = document.querySelector("#title");
// querySelectorAll: return all elements

let titleQueryAll = document.querySelectorAll("h1");
console.log(titleQueryAll);
// ---------------------------------------------------------------

// events:
// addEventListner:
titleId.addEventListener("click", function () {
  //   titleId.innerHTML = " i changed the content";

  if (titleId.style.color == "red") {
    titleId.style.color = "black";
  } else {
    titleId.style.color = "red";
  }
});

// --------------------------------
// select the element
// let qte= document.getElementById("qte")

let qte = document.querySelector("#qte");
let btnPlus = document.getElementById("plus");
btnPlus.addEventListener("click", function () {
  //   alert("test");
  //   qte.innerHTML = +qte.innerHTML + 1;
  qte.innerHTML++;
});

// --------------------------------------
let qtes = document.getElementsByClassName("qte");
let btnsPlus = document.querySelectorAll(".plus");
// btnsPlus=[]
for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    qtes[i].innerHTML++;
  });
}
