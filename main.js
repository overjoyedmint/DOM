const mainHeading = document.getElementById("main-heading");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para4 = document.getElementById("para4");
const btn = document.getElementById("btn");

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const black = document.getElementById("black");
const remo = document.getElementsByClassName("card");
mainHeading.innerText = "New DOM Layout";
para1.innerText =
  "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

para2.innerText =
  "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

btn.addEventListener("click", () => {
  para4.innerText =
    ' "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";';
});

for (let i = 0; i < remo.length; i++) {
  remo[i].classList.remove("bg-white");
  remo[i].getElementsByClassName.backgroundColor = "blue";
}

red.classList.add("bg-danger");
blue.classList.add("bg-primary");
green.classList.add("bg-success");
yellow.classList.add("bg-warning");
black.classList.add("bg-dark");
