var content = document.getElementById("body");
var button = document.getElementById("nav-btn");
var ancher = document.querySelectorAll("a");
var nav_links = document.querySelectorAll("nav ul li a");
var footer_text = document.querySelector("footer p");
var footer_heading = document.querySelectorAll("footer h3");
var headings = document.querySelectorAll("h3");
var paras = document.querySelectorAll("p");
var services_box = document.querySelectorAll(".middle-box");
var list_items = document.querySelectorAll(".info-list .info-item");
var form = document.querySelector(".order-form");
var input = document.querySelectorAll(".order-form input");
var order_option = document.querySelector(".order-form__option");
var order_options = document.querySelectorAll("form option");
var header = document.querySelector(".header");

button.onclick = function () {
    if (content.className == "dark") {
        content.className = "";
        button.innerHTML = "Dark";
        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].style.color = "#000000";
        }
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.color = "#000000";
        }
        for (let i = 0; i < paras.length; i++) {
            paras[i].style.color = "#000000";
        }
        for (let i = 0; i < footer_heading.length; i++) {
            footer_heading[i].style.color = "white";
        }
        for (let i = 0; i < services_box.length; i++) {
            services_box[i].style.boxShadow = "0px 8px 8px rgb(0 0 0 / 10%)";
        }
        for (let i = 0; i < list_items.length; i++) {
            list_items[i].style.boxShadow = "none";
        }
        for (let i = 0; i < input.length; i++) {
            input[i].style.backgroundColor = "#F3F3F3";
            input[i].classList.remove("placeholder-color");
        }
        form.style.backgroundColor = "#ffffff";
        order_option.style.backgroundColor = "#F3F3F3";
        order_option.style.color = "#000000";
        footer_text.style.color = "white";
        header.style.boxShadow = " 0px 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
        content.classList.add("dark");
        button.innerHTML = "Light";
        for (let i = 0; i < ancher.length; i++) {
            ancher[i].style.color = "white";
        }
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.color = "white";
        }
        for (let i = 0; i < paras.length; i++) {
            paras[i].style.color = "white";
        }
        for (let i = 0; i < services_box.length; i++) {
            services_box[i].style.boxShadow = "0px 8px 8px gray";
        }
        for (let i = 0; i < list_items.length; i++) {
            list_items[i].style.boxShadow = "0px 2px 4px gray";
            list_items[i].style.padding = "20px";
        }
        for (let i = 0; i < input.length; i++) {
            input[i].style.backgroundColor = "#00bafc";
            input[i].classList.add("placeholder-color");
        }
        form.style.backgroundColor = "#191919";
        order_option.style.backgroundColor = "#00bafc";
        order_option.style.color = "white";
        header.style.boxShadow = "0px 4px 20px gray";
    }
};
