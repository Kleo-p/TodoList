"use strict";

let ull = document.getElementById("ull");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let utask = document.getElementById("utask");
let clr = document.getElementById("clr");
// const cbxs = document.querySelectorAll(".cbx");

let chec = document.querySelector(".chec");
let eli = document.getElementsByClassName("eli");

// defaul and when page loads
let arr = JSON.parse(localStorage.getItem("todo")) || [];

let show = function () {
  let lii = "";
  arr.forEach((element, index) => {
    lii += `<li class ="eli"><input class="cbx" type="checkbox"> ${element} <span onclick="delet(${index})";><i class="fas" >&#xf014;</i></span></li>`;
  });
  ull.innerHTML = lii;

  let no = arr.length;
  let task = `<p>You have ${no} undone task`;
  utask.innerHTML = task;
};
show();

// when the add button is clicked
btn.addEventListener("click", addNew);

function addNew() {
  let val = inp.value;
  arr.push(val);
  localStorage.setItem("todo", JSON.stringify(arr));
  inp.value = "";
  show();
}

function delet(index) {
  arr = JSON.parse(localStorage.getItem("todo"));
  arr.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(arr));
  show();
}

// function thick(index) {
//   arr = JSON.parse(localStorage.getItem("todo"));
//   let done = arr[index];
//   let don = document.createElement("p");

//   console.log(typeof(don));
//   don.style.color = "red";
// }
clr.addEventListener("click", clear);

function clear() {
  arr = JSON.parse(localStorage.getItem("todo"));
  arr = [];
  localStorage.setItem("todo", JSON.stringify(arr));
  show();
}
