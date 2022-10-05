import appendBackToTopButton from "./back-to-top.js";

const MENU = [
    {
        category: "pasta",
        title: "Handmade Pasta",
        dishes: [
            {name: "Gnocchi Bolognese", price: 640},
            {name: "Cannelloni Rossini", price: 640},
            {name: "Pumpkin and Provolone Ravioli", price: 640},
            {name: "Capeletis with Caruso Sauce", price: 640},
            {name: "Muzzarella and Prosciutto Sorrentinos", price: 640},
            {name: "Sauteed Spaghetti", price: 795},
        ]
    },
    {
        category: "rice",
        title: "Rices",
        dishes: [
            {name: "Vegetables Risotto", price: 640},
            {name: "Mushroom Risotto", price: 640},
            {name: "Rice with Seafood", price: 795},
        ]
    },
    {
        category: "brochette",
        title: "Brochettes",
        dishes: [
            {name: "Chicken and Pineapple Brochette", price: 590},
            {name: "Tenderloin Brochette", price: 750},
        ]
    },
    {
        category: "grill",
        title: "Grill",
        dishes: [
            {name: "Rib Eye Steak", price: 650},
            {name: "Thin Skirt", price: 650},
            {name: "Center Rib Plate Premium", price: 650},
            {name: "Rib Eye Roll", price: 660},
            {name: "Beef Tenderloin", price: 660},
            {name: "Beef Rump Cap", price: 690},
            {name: "French Rack of Lamb", price: 890},
            {name: "Salmon", price: 890},
            {name: "Grilled Chicken", price: 470},
            {name: "Glazed Pork Tenderloin", price: 550},
        ]
    },
    {
        category: "chivito",
        title: "Chivitos",
        dishes: [
            {name: "Chivito with French Fries", price: 485},
            {name: "Canadian Chivito", price: 755},
            {name: "Canadian For Two", price: 1070},
        ]
    },
    {
        category: "specials",
        title: "Specials",
        dishes: [
            {name: "Grilled Corvina and Vegetables", price: 880},
            {name: "Thin Skirt with Potates, Mustard Sauce, and Thyme", price: 880},
            {name: "Cutlet with Tenderloin and Garnishes", price: 790},
            {name: "Magnum Steak with Fresh Mushrooms", price: 1590},
        ]
    },
    {
        category: "sauces",
        title: "Sauces",
        dishes: [
            {name: "Brava", price: 100},
            {name: "Cheddar", price: 130},
            {name: "Champignon Cream", price: 130},
        ]
    },
    {
        category: "fries",
        title: "Fries",
        dishes: [
            {name: "French Fries", price: 260},
            {name: "Rustic Fries", price: 260},
            {name: "Provençal Fries", price: 320},
            {name: "Bravas", price: 320},
            {name: "French Fries with Cheddar", price: 350},
            {name: "French Fries with Mushrooms", price: 390},
        ]
    },
    {
        category: "hot-garnishes",
        title: "Hot Garnishes",
        dishes: [
            {name: "Glazed Sweet Potato", price: 250},
            {name: "Fried Rice", price: 280},
            {name: "Stuffed Potatoes", price: 280},
            {name: "Roasted Vegetables", price: 330},
            {name: "Potatoes with Mustard Sauce", price: 330},
            {name: "Spinach Au Gratin", price: 360},
        ]
    },
    {
        category: "salads",
        title: "Salads",
        dishes: [
            {name: "Fresh Tomatoes", price: 120},
            {name: "Mixed Salad", price: 220},
            {name: "Mixed Green Salad", price: 230},
            {name: "Arugula and Parmesan", price: 290},
            {name: "Salad Greens, Palm Hearts, and Apple", price: 290},
            {name: "Salad Greens, Provolone, Cherrys, Cucumber, and Nuts", price: 360},
        ]
    },
    {
        category: "purees",
        title: "Purees",
        dishes: [
            {name: "Mashed Potatoes", price: 260},
            {name: "Mashed Pumpkin", price: 260},
            {name: "Apple Puree", price: 260},
        ]
    },
    {
        category: "desserts",
        title: "Desserts",
        dishes: [
            {name: "Uruguayan Pudding with Dulce de Leche", price: 290},
            {name: "Apple Crepe with Ice ream", price: 390},
            {name: "Rice with Dulce de Leche, Ice Cream, Worcestershire Sauce, and Flambéed with Brown Sugar", price: 390},
            {name: "Caramelized Dulce de Leche Pancake with Ice Cream", price: 390},
            {name: "Dulce de Leche Volcano with Coconut, Nut Crisp, and Ice Cream", price: 390},
            {name: "Chocolate Volcano with Red Fruit Sauce and Ice Cream", price: 440},
            {name: "Tiramisú", price: 390},
            {name: "Pionono with Chantilly and Golden Yolks Cream", price: 390},
            {name: "Fruit Salad with Ice Cream", price: 320},
            {name: "Ice Cream", price: 270},
        ]
    },
    {
        category: "sugarfree-desserts",
        title: "Sugar-Free Desserts",
        dishes: [
            {name: "Dulce de Leche Pancake with Ice Cream", price: 360},
            {name: "Roll Cake with Whipped Cream and Strawberries", price: 390},
            {name: "Sugar-Free Ice Cream", price: 270},
        ]
    },
    {
        category: "beverages",
        title: "Beverages",
        dishes: [
            {name: "Plain Mineral Water", price: 120},
            {name: "Sparkling Mineral Water", price: 120},
            {name: "Fruit Juice", price: 190},
            {name: "Fruit Smoothies", price: 240},
            {name: "Soft Drinks", price: 120},
        ]
    },
    {
        category: "national-beers",
        title: "National Beers",
        dishes: [
            {name: "Non-Alcoholic Beer - 330cc", price: 160},
            {name: "Patricia - 1lt", price: 280},
            {name: "Zillertal - 1lt", price: 290},
        ]
    },
    {
        category: "imported-beers",
        title: "Imported Beers",
        dishes: [
            {name: "Stella Artois - 330cc", price: 180},
            {name: "Corona - 330cc", price: 200},
            {name: "Corona - 2/3", price: 300},
        ]
    },
    {
        category: "coffees-and-teas",
        title: "Coffee and Tea",
        dishes: [
            {name: "Espresso", price: 120},
            {name: "Decaf Espresso", price: 120},
            {name: "Large Black Coffee", price: 120},
            {name: "Ristretto", price: 120},
            {name: "Double Shot Espresso", price: 195},
            {name: "Espresso with Cream", price: 195},
            {name: "Double Shot Espresso with Milk", price: 200},
            {name: "Decaf Espresso with Milk", price: 150},
            {name: "Capuccino", price: 180},
            {name: "Hot Milk and Dark Chocolate", price: 195},
            {name: "Macchiatto", price: 160},
            {name: "Espresso with Milk", price: 160},
        ]
    },
    {
        category: "domestic-3/8-wines",
        title: "Domestic 3/8 Wines",
        dishes: [
            {name: "Tannat Alta Reserva", price: 690},
            {name: "Malbec Alta Reserva", price: 690},
            {name: "C. Sauvignon Alta Reserva", price: 690},
            {name: "Tannat RPF", price: 820},
            {name: "Cabernet Sauvignon RPF", price: 820},
            {name: "Preludio", price: 1590},
        ]
    },
    {
        category: "domestic-sparkling-wines",
        title: "Domestic Sparkling Wines",
        dishes: [
            {name: "Castelar Brut Reserva", price: 1190},
            {name: "Castelar Extra Brut", price: 1190},
            {name: "Tannat Espumante", price: 1340},
        ]
    },
    {
        category: "domestic-white-wines",
        title: "Domestic White Wines",
        dishes: [
            {name: "Chardonnay", price: 790},
            {name: "Sauvignon Blanc Alta Reserva", price: 860},
            {name: "Sauvignon Blanc", price: 940},
            {name: "Albariño", price: 1390},
            {name: "Dinastía", price: 1590},
            {name: "Preludio", price: 2690},
        ]
    },
    {
        category: "domestic-pinot-noir-wines",
        title: "Domestic Pinot Noir Wines",
        dishes: [
            {name: "Pinot Noir", price: 1020},
            {name: "Pinot Noir Reserva", price: 1590},
        ]
    },
    {
        category: "domestic-rose-wines",
        title: "Domestic Rose Wines",
        dishes: [
            {name: "Las Brujas Rose", price: 940},
        ]
    },
    {
        category: "domestic-red-wine-blends",
        title: "Domestic Red Wine Blends",
        dishes: [
            {name: "Tannat-Merlot-Cabernet", price: 820},
            {name: "Tempranillo Tannat", price: 1250},
            {name: "Preludio", price: 2590},
            {name: "Monte vide eu", price: 2690},
        ]
    },
    {
        category: "domestic-tannat-wines",
        title: "Domestic Tannat Wines",
        dishes: [
            {name: "Tannat", price: 820},
            {name: "Tannat Alta Reserva", price: 960},
            {name: "Tannat Viejo", price: 1060},
            {name: "Tannat RPF Roble", price: 1190},
            {name: "Tannat Reserva", price: 1390},
            {name: "Tannat Premium", price: 1590},
            {name: "Parcela Única", price: 2290},
            {name: "Osiris", price: 3100},
            {name: "Luis A. Giménez", price: 3180},
            {name: "Massimo", price: 3590},
        ]
    },
    {
        category: "domestic-cabernet-wines",
        title: "Domestic Cabernet Wines",
        dishes: [
            {name: "C. Sauvignon", price: 820},
            {name: "C. Sauvignon Alta Reserva", price: 960},
            {name: "C. Sauvignon RPF Roble", price: 1190},
            {name: "Cabernet Franc (Prima DOnna)", price: 1090},
        ]
    },
    {
        category: "domestic-malbec-wines",
        title: "Domestic Malbec Wines",
        dishes: [
            {name: "Malbec Alta Reserva", price: 990},
            {name: "Malbec", price: 1190},
        ]
    },
    {
        category: "domestic-merlot-wines",
        title: "Domestic Merlot Wines",
        dishes: [
            {name: "Merlot", price: 1290},
            {name: "Merlot Osiris", price: 2890},
        ]
    },
    {
        category: "imported-sparkling-wines",
        title: "Imported Sparkling Wines",
        dishes: [
            {name: "Álamos Extra Brut", price: 1590},
        ]
    },
    {
        category: "imported-white-wines",
        title: "Imported White Wines",
        dishes: [
            {name: "Sauvignon Blanc", price: 820},
        ]
    },
    {
        category: "imported-malbec-wines",
        title: "Imported Malbec Wines",
        dishes: [
            {name: "Malbec Reserva", price: 990},
            {name: "Malbec Álamos", price: 1090},
            {name: "Malbec", price: 1390},
            {name: "Malbec DV", price: 2650},
        ]
    },
    {
        category: "imported-cabernet-wines",
        title: "Imported Cabernet Wines",
        dishes: [
            {name: "C. Sauvignon Álamos", price: 1090},
            {name: "C. Sauvignon", price: 1390},
            {name: "Cabernet DV", price: 2750},
        ]
    },
    {
        category: "imported-shyraz-wines",
        title: "Imported Shyraz Wines",
        dishes: [
            {name: "Shyraz", price: 820},
        ]
    },
    {
        category: "imported-pinot-noir-wines",
        title: "Imported Pinot Noir Wines",
        dishes: [
            {name: "Álamos", price: 1090},
        ]
    },
    {
        category: "distilled-drinks",
        title: "Distilled Drinks",
        dishes: [
            {name: "Sandy Mac", price: 250},
            {name: "J&B", price: 250},
            {name: "White Horse", price: 250},
            {name: "Johnnie Walker - Red Label", price: 250},
            {name: "Grants", price: 250},
            {name: "Johnnie Walker - Black Label", price: 320},
            {name: "Buchanan's", price: 320},
            {name: "Old Parr", price: 320},
            {name: "Johnnie Walker - Double Black Lebel", price: 360},
            {name: "Johnnie Walker - Platinum Label", price: 590},
            {name: "Johnnie Walker - Blue Label", price: 990},
        ]
    },
    {
        category: "cocktails",
        title: "Cocktails",
        dishes: [
            {name: "Blue Hawaiian", price: 320},
            {name: "Cuban Mojito", price: 320},
            {name: "French 75", price: 350},
            {name: "Caribean Vodka", price: 320},
            {name: "Daykiri Frozen", price: 320},
            {name: "Margarita", price: 360},
            {name: "Kaipirinha", price: 320},
            {name: "Garibaldi", price: 320},
            {name: "Negroni", price: 320},
        ]
    },
]

export default function displayMenuPage(container){
    const menuPage = document.createElement("section");
    menuPage.classList.add("menu-page");

    appendBackToTopButton(menuPage);
    
    for(const articleData of MENU){
        const article = document.createElement("article");
        article.classList.add(articleData.category);

        const articleTitle = document.createElement("h2");
        articleTitle.innerText = articleData.title;
        article.appendChild(articleTitle);

        for(const dish of articleData.dishes){
            const dishContainer = document.createElement("section");
            dishContainer.classList.add("dish-container");

            const dishName = document.createElement("p");
            dishName.classList.add("dish-name");
            dishName.innerText = dish.name;
            dishContainer.appendChild(dishName);

            const dishPrice = document.createElement("p");
            dishPrice.classList.add("dish-price");
            dishPrice.innerText = dish.price;
            dishPrice.title = `${dish.price} Uruguayan Pesos`;
            dishContainer.appendChild(dishPrice);

            article.appendChild(dishContainer);
        }

        menuPage.appendChild(article);
    }

    container.appendChild(menuPage);
}