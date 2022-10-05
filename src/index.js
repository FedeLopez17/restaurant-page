import "./style.css";
import appendTrophies from "./uruguay-achievements.js";
import displayHomePage from "./home.js";
import displayReservationsPage from "./reservations.js";
import displayMenuPage from "./menu.js";
import logo from "./images/lo-del-fede-logo.svg";
import uruguay from "./images/flag-of-uruguay.svg";
import fourStars from "./images/four-stars.svg";
import github from "./images/github-logo.svg";


const CONTAINER = document.querySelector("div#content");

// Create header
const header = document.createElement("header");
const upperHeader = document.createElement("section");
upperHeader.classList.add("upper");
header.appendChild(upperHeader);
const lowerHeader = document.createElement("section");
lowerHeader.classList.add("lower");
header.appendChild(lowerHeader);

const navBar = document.createElement("nav");
const navBarLinks = document.createElement("ul");

function clearPreviousSection(){
    const main = document.querySelector("main");
    const previousSection = document.querySelectorAll("main > *");
    if (previousSection){
    while(main.firstChild) main.removeChild(main.firstChild);
    }
}

const homeButton = document.createElement("li");
homeButton.classList.add("home");
homeButton.innerText = "Home";
homeButton.addEventListener("click", ()=>{

    const alreadyInHomepage = document.querySelector(".home-page");
    if(alreadyInHomepage) return;

    updateCurrentPageClass(homeButton);
    clearPreviousSection();
    displayHomePage(main);
});

const menuButton = document.createElement("li");
menuButton.classList.add("menu");
menuButton.innerText = "Menu";
menuButton.addEventListener("click", ()=>{

    const alreadyInMenuPage = document.querySelector(".menu-page");
    if(alreadyInMenuPage) return;

    updateCurrentPageClass(menuButton);
    clearPreviousSection();
    displayMenuPage(main);
});

const reservationsButton = document.createElement("li");
reservationsButton.classList.add("reservations");
reservationsButton.innerText = "Reservations";
reservationsButton.addEventListener("click", ()=>{

    const alreadyInReservationsPage = document.querySelector(".reservations-page");
    if(alreadyInReservationsPage) return;

    updateCurrentPageClass(reservationsButton);
    clearPreviousSection();
    displayReservationsPage(main);
});

navBarLinks.appendChild(homeButton);
navBarLinks.appendChild(menuButton);
navBarLinks.appendChild(reservationsButton);
navBar.appendChild(navBarLinks);
upperHeader.appendChild(navBar);

const logoImage = document.createElement("img");
logoImage.src = logo;
logoImage.alt = "Logo";
logoImage.classList.add("logo");
lowerHeader.appendChild(logoImage);

CONTAINER.appendChild(header);

// Create main section
const main = document.createElement("main");
CONTAINER.appendChild(main);

// Create footer
const footer = document.createElement("footer");
const upperFooter = document.createElement("section");
upperFooter.classList.add("upper");
const footerMessage = document.createElement("p");
footerMessage.innerHTML = "Made with <i class='fa-solid fa-heart' title='LOVE'></i> by Fede";
upperFooter.appendChild(footerMessage);
footer.appendChild(upperFooter);

const lowerFooter = document.createElement("section");
lowerFooter.classList.add("lower");
const lowerLeftFooter = document.createElement("section");
lowerLeftFooter.classList.add("left");
// Add the trophies
appendTrophies(lowerLeftFooter);
const INCREMENT = 2;
let lastScrollLeft = null;

function scrollThroughTrophies(){
    if(window.scrollY < 560) return;
    document.removeEventListener("scroll", scrollThroughTrophies);
    setInterval(()=>{
        if(lowerLeftFooter.scrollLeft === lastScrollLeft && lastScrollLeft !== 0){
            lastScrollLeft = lowerLeftFooter.scrollLeft;
            lowerLeftFooter.scroll(0, 0);
            return;
        }
        lastScrollLeft = lowerLeftFooter.scrollLeft;
        lowerLeftFooter.scroll(lowerLeftFooter.scrollLeft + INCREMENT, 0);
    }, 50);
}

// Start scrolling through the trophies once the user scrolls past the header.
document.addEventListener("scroll", scrollThroughTrophies);

const lowerRightFooter = document.createElement("section");
lowerRightFooter.classList.add("right");

const flagOfUruguayContainer = document.createElement("section");
flagOfUruguayContainer.classList.add("uruguay-flag-container");
const flagOfUruguay = document.createElement("img");
flagOfUruguay.src = uruguay;
flagOfUruguay.classList.add("flag-of-uruguay");
flagOfUruguay.alt = "Flag of Uruguay";
flagOfUruguay.title = "Based in Uruguay";
flagOfUruguayContainer.appendChild(flagOfUruguay);
const stars = document.createElement("img");
stars.src = fourStars;
stars.alt = "four-stars";
stars.classList.add("stars");
flagOfUruguayContainer.appendChild(stars);

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/FedeLopez17";
githubLink.target = "_blank";
const githubLogo = document.createElement("img");
githubLogo.src = github;
githubLogo.classList.add("github-logo");
githubLogo.alt = "Github Logo";
githubLogo.title = "GitHub | FedeLopez17";
githubLink.appendChild(githubLogo);

lowerRightFooter.appendChild(flagOfUruguayContainer);
lowerRightFooter.appendChild(githubLink);

lowerFooter.appendChild(lowerLeftFooter);
lowerFooter.appendChild(lowerRightFooter);
footer.appendChild(lowerFooter);
CONTAINER.appendChild(footer);

// Display the home page by default
updateCurrentPageClass(homeButton);
displayHomePage(main);

// Helper function
function updateCurrentPageClass(button){
    const previousPage = document.querySelector(".current-page");
    if(previousPage) previousPage.classList.remove("current-page");
    button.classList.add("current-page");
}