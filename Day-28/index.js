let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.createElement("h1");

item3.innerHTML = "Best Developer";
item3.style.color = "skyblue";
item3.style.fontFamily =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ";

document.querySelector("body").appendChild(item3);

item1.classList.add("btn123");
item1.classList.remove("btn123");
item1.style.color = "red";
item2.style.color = "green";

let btn1 = document.querySelector(".btn1");
    let downLoadBegin = 0;
btn1.addEventListener("click", function () {

  if ((downLoadBegin == 0)) {
    btn1.innerHTML = "starting...";
    btn1.style.backgroundColor = "green";
    downLoadBegin = 1;
  } else {
    btn1.innerHTML = "Click Me";
    btn1.style.backgroundColor = "white";
    downLoadBegin = 0;
  }
});

document.querySelector("body").addEventListener("mousemove", function () {
  console.log("moving.....");
});
