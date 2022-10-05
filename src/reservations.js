import reservationPath from "./images/reservations.png";

export default function displayReservationsPage(container){

    const reservationsPage = document.createElement("section");
    reservationsPage.classList.add("reservations-page");

    const reservationContainer = document.createElement("section");
    reservationContainer.classList.add("reservation-container");

    const reservationsImage = document.createElement("img");
    reservationsImage.src = reservationPath;
    reservationContainer.appendChild(reservationsImage);

    const reservationButtonContainer = document.createElement("section");
    reservationButtonContainer.classList.add("reservation-button-container");

    const reservationMessage = document.createElement("p");
    reservationMessage.innerText = "You'll be redirected to our reservations website";
    reservationButtonContainer.appendChild(reservationMessage);

    const reservationButton = document.createElement("button");
    reservationButton.innerText = "Make a reservation";
    const rickRoll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    reservationButton.addEventListener("click", ()=>{window.location.href = rickRoll});
    reservationButtonContainer.appendChild(reservationButton);  
    reservationContainer.appendChild(reservationButtonContainer);

    reservationsPage.appendChild(reservationContainer);

    container.appendChild(reservationsPage);
}