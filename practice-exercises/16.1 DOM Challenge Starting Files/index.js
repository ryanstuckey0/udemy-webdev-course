document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "This was changed by Javascript"

// there are a couple different ways to get elements in HTML
document.getElementsByTagName("li");
document.getElementsByClassName("btn");
document.getElementById("title");

// or can use the CSS selector syntax to make more specific selections
document.querySelector("h1");
document.querySelector("#title");
document.querySelector("ul > li > a");

// can also use a different method to get all matching elemnts
document.querySelectorAll(".list");
