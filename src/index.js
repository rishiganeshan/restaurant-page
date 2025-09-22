import { createHomeDiv } from "./home"
import { createAboutDiv } from "./about"
import { createMenuDiv } from "./menu"
console.log('yo')

const content = document.getElementById("content")
const homeButton = document.querySelector("button.home")
const menuButton = document.querySelector("button.menu")
const aboutButton = document.querySelector("button.about")




function clickHomeTab() {
    content.innerHTML = ""
    createHomeDiv()

}

function clickMenuTab() {
    content.innerHTML = ""
    createMenuDiv()

}

function clickAboutTab() {
    content.innerHTML = ""
    createAboutDiv()

}

homeButton.addEventListener("click", clickHomeTab)

menuButton.addEventListener("click", clickMenuTab)
aboutButton.addEventListener("click", clickAboutTab)



