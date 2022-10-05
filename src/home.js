import appendBackToTopButton from "./back-to-top.js";
import restaurantPath from "./images/restaurant.png";
import meatPath from "./images/meat.png";
import winePath from "./images/wine.png";
import worldCupEventPath from "./images/world-cup-event.png";
import locationPath from "./images/location.png";

export default function displayHomePage(container){

    const homePage = document.createElement("section");
    homePage.classList.add("home-page");

    appendBackToTopButton(homePage);

    const slideshow = document.createElement("section");
    slideshow.classList.add("slideshow");
    homePage.appendChild(slideshow);

    const description = document.createElement("section");
    description.classList.add("description");

    const localProduce = document.createElement("article");
    localProduce.classList.add("local-produce");
    const localProduceHeading = document.createElement("h2");
    localProduceHeading.innerText = "Uruguayan Cuisine with Quality Local Produce";
    const localProduceParagraph = document.createElement("p");
    localProduceParagraph.innerHTML = `Our proposal depicts a homemade style food of outstanding quality and flavour, made with only the best local seasonal products and with the culinary prowess of our chef.<br>
    Lo del Fede offers a friendly and familiar setting, where the chef himself often brings trays and dishes of his creation to the table, and where conversation between the kitchen and the customers is encouraged.<br>
    Our menu changes according to the seasons and is ideal for those looking for something light as well as those looking for a more filling meal.<br>
    We use the best national export beef, lamb, local fish, and veggies from individual farmers.<br>
    Moreover, at Lo del Fede we also host special events on match days and similar occasions. Make sure to make a reservation!`;
    const restaurantImage = document.createElement("img");
    restaurantImage.src = restaurantPath;
    restaurantImage.id = "restaurant";
    restaurantImage.alt = "Restaurant table";
    localProduce.appendChild(localProduceHeading);
    localProduce.appendChild(localProduceParagraph);
    localProduce.appendChild(restaurantImage);

    const meat = document.createElement("article");
    meat.classList.add("meat");
    const meatHeading = document.createElement("h2");
    meatHeading.innerText = "Our Meat";
    const meatParagraphOne = document.createElement("p");
    meatParagraphOne.innerHTML = `In the Uruguayan prairies, cattle are raised outdoors all year round, in complete harmony with nature. The mild climate and fertile land ensure the welfare of the animals.`
    const meatParagraphTwo = document.createElement("p");
    meatParagraphTwo.innerHTML = `Experiencing Uruguayan meat is not only a culinary treat, but it is also good for your health.<br>
    Associated to cattle fed only with natural pastures, our meat contains 4 times more Omega 3 and high levels of vitamin E, a natural antioxidant that acts against human aging.`;
    const meatImage = document.createElement("img");
    meatImage.src = meatPath;
    meatImage.id = "meat";
    meatImage.alt = "Meat";
    meat.appendChild(meatHeading);
    meat.appendChild(meatParagraphOne);
    meat.appendChild(meatParagraphTwo);
    meat.appendChild(meatImage);

    const wine = document.createElement("article");
    wine.classList.add("wine");
    const wineHeading = document.createElement("h2");
    wineHeading.innerText = "Our Wine";
    const wineParagraphOne = document.createElement("p");
    wineParagraphOne.innerHTML = `The restaurant has a unique collaboration with some of the most important local independent wine producers.<br>
    The owner chose the wines after having visited the wineries and establishing direct contact with the producers.
    <br>Lo del Fede is an excellent place to begin or end your wine tour in Uruguay.`;
    const wineParagraphTwo = document.createElement("p");
    wineParagraphTwo.innerHTML = `Wine tasting events are held on Friday and Saturday evenings, accompanied by selected boards to compliment the flavours.<br>
    It's a great time to get together with friends and experience the charm of our home, whether in the garden or main room.`;
    const wineImage = document.createElement("img");
    wineImage.src = winePath;
    wineImage.id = "wine";
    wineImage.alt = "Wine";
    wine.appendChild(wineHeading);
    wine.appendChild(wineParagraphOne);
    wine.appendChild(wineParagraphTwo);
    wine.appendChild(wineImage);

    const liveFootball = document.createElement("article");
    liveFootball.classList.add("love-football");
    const liveFootballHeading = document.createElement("h2");
    liveFootballHeading.innerText = "Live Football";
    const liveFootballParagraph = document.createElement("p");
    liveFootballParagraph.innerHTML = `Catch all the action while enjoying the best wine and meat Uruguay has to offer.<br>
    At Lo del Fede, we don't just love football, we live it.<br>
    Come soak up the atmosphere in front of our two giant projectors, and our selection of other giant screens. Wherever you are you'll have a great view to enjoy the game.<br>
    We've got it all from Uruguayan First Division, Argentine Professional League, Brasileirao Seria A, English Premier League, and Spanish La Liga along with all other major tournaments!<br>
    Plus, we'll be hosting a month-long special event during the World Cup this November, so keep an eye out for our upcoming announcements!`;
    const worldCupEventImage = document.createElement("img");
    worldCupEventImage.src = worldCupEventPath;
    worldCupEventImage.id = "world-cup-event";
    worldCupEventImage.alt = "World Cup event";
    liveFootball.appendChild(liveFootballHeading);
    liveFootball.appendChild(liveFootballParagraph);
    liveFootball.appendChild(worldCupEventImage);
    
    description.appendChild(localProduce);
    description.appendChild(meat);
    description.appendChild(wine);
    description.appendChild(liveFootball);

    homePage.appendChild(description);

    const mapContainer = document.createElement("map-container");
    mapContainer.classList.add("map-container");
    const mapWrapper = document.createElement("section");
    mapWrapper.classList.add("map-wrapper");
    const textContainer = document.createElement("section");
    textContainer.classList.add("text-container");
    const phoneNumber = document.createElement("p");
    phoneNumber.classList = "phone-number";
    phoneNumber.innerHTML = "<i class='fa-solid fa-phone'></i> 123 456 789";
    const address = document.createElement("p");
    address.classList.add("address");
    address.innerHTML = "<i class='fa-solid fa-shop'></i> Parque Batlle, Montevideo, Uruguay";
    textContainer.appendChild(phoneNumber);
    textContainer.appendChild(address);
    const map = document.createElement("img");
    map.src = locationPath;
    map.alt = "Restaurant location";
    mapWrapper.appendChild(textContainer);
    mapWrapper.appendChild(map);
    mapContainer.appendChild(mapWrapper);
    homePage.appendChild(mapContainer);

    container.appendChild(homePage);
}