import julesRimet from "./images/trophies/jules-rimet.svg";
import parisOlympics from "./images/trophies/olympics-paris-1924.svg";
import amsterdamOlympics from "./images/trophies/olympics-amsterdam-1928.svg";
import copaAmerica from "./images/trophies/copa-america.svg";
import goldCup from "./images/trophies/world-champions-gold-cup-1980.svg";

export default function appendTrophies(container){

    const copaAmericaOneLink = document.createElement("a");
    copaAmericaOneLink.href = "https://www.auf.org.uy/copa-america-1916/";
    copaAmericaOneLink.target = "_blank";
    const copaAmericaOne = document.createElement("img");
    copaAmericaOne.src = copaAmerica;
    copaAmericaOne.classList.add("copa-america", "argentina-1916");
    copaAmericaOne.alt = "Copa America";
    copaAmericaOne.title = "Copa América 1916";
    copaAmericaOneLink.appendChild(copaAmericaOne);

    const copaAmericaTwoLink = document.createElement("a");
    copaAmericaTwoLink.href = "https://www.auf.org.uy/copa-america-1917/";
    copaAmericaTwoLink.target = "_blank";
    const copaAmericaTwo = document.createElement("img");
    copaAmericaTwo.src = copaAmerica;
    copaAmericaTwo.classList.add("copa-america", "uruguay-1917");
    copaAmericaTwo.alt = "Copa America";
    copaAmericaTwo.title = "Copa América 1917";
    copaAmericaTwoLink.appendChild(copaAmericaTwo);

    const copaAmericaThreeLink = document.createElement("a");
    copaAmericaThreeLink.href = "https://www.auf.org.uy/copa-america-1920/";
    copaAmericaThreeLink.target = "_blank";
    const copaAmericaThree = document.createElement("img");
    copaAmericaThree.src = copaAmerica;
    copaAmericaThree.classList.add("copa-america", "chile-1920");
    copaAmericaThree.alt = "Copa America";
    copaAmericaThree.title = "Copa América 1920";
    copaAmericaThreeLink.appendChild(copaAmericaThree);

    const copaAmericaFourLink = document.createElement("a");
    copaAmericaFourLink.href = "https://www.auf.org.uy/copa-america-1923614506/";
    copaAmericaFourLink.target = "_blank";
    const copaAmericaFour = document.createElement("img");
    copaAmericaFour.src = copaAmerica;
    copaAmericaFour.classList.add("copa-america", "uruguay-1923");
    copaAmericaFour.alt = "Copa America";
    copaAmericaFour.title = "Copa América 1923";
    copaAmericaFourLink.appendChild(copaAmericaFour);

    const copaAmericaFiveLink = document.createElement("a");
    copaAmericaFiveLink.href = "https://www.auf.org.uy/copa-america-1924/";
    copaAmericaFiveLink.target = "_blank";
    const copaAmericaFive = document.createElement("img");
    copaAmericaFive.src = copaAmerica;
    copaAmericaFive.classList.add("copa-america", "uruguay-1924");
    copaAmericaFive.alt = "Copa America";
    copaAmericaFive.title = "Copa América 1924";
    copaAmericaFiveLink.appendChild(copaAmericaFive);

    const firstOlympicsLink = document.createElement("a");
    firstOlympicsLink.href = "https://www.auf.org.uy/juegos-olimpicos-1924/";
    firstOlympicsLink.target = "_blank";
    const firstOlympics = document.createElement("img");
    firstOlympics.src = parisOlympics;
    firstOlympics.classList.add("olympics", "paris-1924");
    firstOlympics.alt = "Star";
    firstOlympics.title = "Paris Olympics 1924 | Uruguay 3 - 0 Switzerland";
    firstOlympicsLink.appendChild(firstOlympics);

    const copaAmericaSixLink = document.createElement("a");
    copaAmericaSixLink.href = "https://www.auf.org.uy/copa-america-1926/";
    copaAmericaSixLink.target = "_blank";
    const copaAmericaSix = document.createElement("img");
    copaAmericaSix.src = copaAmerica;
    copaAmericaSix.classList.add("copa-america", "chile-1926");
    copaAmericaSix.alt = "Copa America";
    copaAmericaSix.title = "Copa América 1926";
    copaAmericaSixLink.appendChild(copaAmericaSix);

    const secondOlympicsLink = document.createElement("a");
    secondOlympicsLink.href = "https://www.auf.org.uy/juegos-olimpicos-1928/";
    secondOlympicsLink.target = "_blank";
    const secondOlympics = document.createElement("img");
    secondOlympics.src = amsterdamOlympics;
    secondOlympics.classList.add("olympics", "amsterdam-1928");
    secondOlympics.alt = "Star";
    secondOlympics.title = "Amsterdam Olympics 1928 | Uruguay 3 - 2 Argentina";
    secondOlympicsLink.appendChild(secondOlympics);

    const firstJulesRimetLink = document.createElement("a");
    firstJulesRimetLink.href = "https://www.auf.org.uy/copa-del-mundo-1930/";
    firstJulesRimetLink.target = "_blank";
    const firstJulesRimet = document.createElement("img");
    firstJulesRimet.src = julesRimet;
    firstJulesRimet.classList.add("jules-rimet", "uruguay-1930");
    firstJulesRimet.alt = "Jules Rimet Trophy";
    firstJulesRimet.title = "FIFA World Cup 1930 | Uruguay 4 - 2 Argentina";
    firstJulesRimetLink.appendChild(firstJulesRimet);

    const copaAmericaSevenLink = document.createElement("a");
    copaAmericaSevenLink.href = "https://www.auf.org.uy/copa-america-1935/";
    copaAmericaSevenLink.target = "_blank";
    const copaAmericaSeven = document.createElement("img");
    copaAmericaSeven.src = copaAmerica;
    copaAmericaSeven.classList.add("copa-america", "peru-1935");
    copaAmericaSeven.alt = "Copa America";
    copaAmericaSeven.title = "Copa América 1935";
    copaAmericaSevenLink.appendChild(copaAmericaSeven);

    const copaAmericaEightLink = document.createElement("a");
    copaAmericaEightLink.href = "https://www.auf.org.uy/copa-america-1942/";
    copaAmericaEightLink.target = "_blank";
    const copaAmericaEight = document.createElement("img");
    copaAmericaEight.src = copaAmerica;
    copaAmericaEight.classList.add("copa-america", "uruguay-1942");
    copaAmericaEight.alt = "Copa America";
    copaAmericaEight.title = "Copa América 1942";
    copaAmericaEightLink.appendChild(copaAmericaEight);

    const secondJulesRimetLink = document.createElement("a");
    secondJulesRimetLink.href = "https://www.auf.org.uy/copa-del-mundo-1950/";
    secondJulesRimetLink.target = "_blank";
    const secondJulesRimet = document.createElement("img");
    secondJulesRimet.src = julesRimet;
    secondJulesRimet.classList.add("jules-rimet", "brazil-1950");
    secondJulesRimet.alt = "Jules Rimet Trophy";
    secondJulesRimet.title = "FIFA World Cup 1950 | Brazil 1 - 2 Uruguay";
    secondJulesRimetLink.appendChild(secondJulesRimet);

    const copaAmericaNineLink = document.createElement("a");
    copaAmericaNineLink.href = "https://www.auf.org.uy/copa-america-1956/";
    copaAmericaNineLink.target = "_blank";
    const copaAmericaNine = document.createElement("img");
    copaAmericaNine.src = copaAmerica;
    copaAmericaNine.classList.add("copa-america", "uruguay-1956");
    copaAmericaNine.alt = "Copa America";
    copaAmericaNine.title = "Copa América 1956";
    copaAmericaNineLink.appendChild(copaAmericaNine);

    const copaAmericaTenLink = document.createElement("a");
    copaAmericaTenLink.href = "https://www.auf.org.uy/copa-america-1959/";
    copaAmericaTenLink.target = "_blank";
    const copaAmericaTen = document.createElement("img");
    copaAmericaTen.src = copaAmerica;
    copaAmericaTen.classList.add("copa-america", "ecuador-1959");
    copaAmericaTen.alt = "Copa America";
    copaAmericaTen.title = "Copa América 1959";
    copaAmericaTenLink.appendChild(copaAmericaTen);

    const copaAmericaElevenLink = document.createElement("a");
    copaAmericaElevenLink.href = "https://www.auf.org.uy/copa-america-uruguay-1967/";
    copaAmericaElevenLink.target = "_blank";
    const copaAmericaEleven = document.createElement("img");
    copaAmericaEleven.src = copaAmerica;
    copaAmericaEleven.classList.add("copa-america", "uruguay-1967");
    copaAmericaEleven.alt = "Copa America";
    copaAmericaEleven.title = "Copa América 1967";
    copaAmericaElevenLink.appendChild(copaAmericaEleven);
    
    const worldChampionsGoldCupLink = document.createElement("a");
    worldChampionsGoldCupLink.href = "https://www.auf.org.uy/copa-de-oro-1980/";
    worldChampionsGoldCupLink.target = "_blank";
    const worldChampionsGoldCup = document.createElement("img");
    worldChampionsGoldCup.src = goldCup;
    worldChampionsGoldCup.classList.add("world-champions-gold-cup", "uruguay-1980");
    worldChampionsGoldCup.alt = "World Champions' Gold Cup";
    worldChampionsGoldCup.title = "World Champions' Gold Cup 1980";
    worldChampionsGoldCupLink.appendChild(worldChampionsGoldCup);

    const copaAmericaTwelveLink = document.createElement("a");
    copaAmericaTwelveLink.href = "https://www.auf.org.uy/copa-america-1983/";
    copaAmericaTwelveLink.target = "_blank";
    const copaAmericaTwelve = document.createElement("img");
    copaAmericaTwelve.src = copaAmerica;
    copaAmericaTwelve.classList.add("copa-america", "without-fixed-host-1983");
    copaAmericaTwelve.alt = "Copa America";
    copaAmericaTwelve.title = "Copa América 1983 | Uruguay 3 - 1 Brazil";
    copaAmericaTwelveLink.appendChild(copaAmericaTwelve);

    const copaAmericaThirteenLink = document.createElement("a");
    copaAmericaThirteenLink.href = "https://www.auf.org.uy/copa-america-1987/";
    copaAmericaThirteenLink.target = "_blank";
    const copaAmericaThirteen = document.createElement("img");
    copaAmericaThirteen.src = copaAmerica;
    copaAmericaThirteen.classList.add("copa-america", "argentina-1987");
    copaAmericaThirteen.alt = "Copa America";
    copaAmericaThirteen.title = "Copa América 1987 | Uruguay 1 - 0 Chile";
    copaAmericaThirteenLink.appendChild(copaAmericaThirteen);

    const copaAmericaFourteenLink = document.createElement("a");
    copaAmericaFourteenLink.href = "https://www.auf.org.uy/copa-america-1995/";
    copaAmericaFourteenLink.target = "_blank";
    const copaAmericaFourteen = document.createElement("img");
    copaAmericaFourteen.src = copaAmerica;
    copaAmericaFourteen.classList.add("copa-america", "uruguay-1995");
    copaAmericaFourteen.alt = "Copa America";
    copaAmericaFourteen.title = "Copa América 1995 | Uruguay 1(5) - 1(3) Brazil";
    copaAmericaFourteenLink.appendChild(copaAmericaFourteen);

    const copaAmericaFifteenLink = document.createElement("a");
    copaAmericaFifteenLink.href = "https://www.auf.org.uy/copa-america-2011/";
    copaAmericaFifteenLink.target = "_blank";
    const copaAmericaFifteen = document.createElement("img");
    copaAmericaFifteen.src = copaAmerica;
    copaAmericaFifteen.classList.add("copa-america", "argentina-2011");
    copaAmericaFifteen.alt = "Copa America";
    copaAmericaFifteen.title = "Copa América 2011 | Uruguay 3 - 0 Paraguay";
    copaAmericaFifteenLink.appendChild(copaAmericaFifteen);

    const TROPHIES = [
        copaAmericaOneLink,
        copaAmericaTwoLink,
        copaAmericaThreeLink,
        copaAmericaFourLink,
        copaAmericaFiveLink,
        firstOlympicsLink,
        copaAmericaSixLink,
        secondOlympicsLink,
        firstJulesRimetLink,
        copaAmericaSevenLink,
        copaAmericaEightLink,
        secondJulesRimetLink,
        copaAmericaNineLink,
        copaAmericaTenLink,
        copaAmericaElevenLink,
        worldChampionsGoldCupLink,
        copaAmericaTwelveLink,
        copaAmericaThirteenLink,
        copaAmericaFourteenLink,
        copaAmericaFifteenLink
    ];
    for(const trophy of TROPHIES){
        container.appendChild(trophy);
    }
}