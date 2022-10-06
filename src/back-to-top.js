export default function appendBackToTopButton(container){
    const backToTopButton = document.createElement("i");
    backToTopButton.classList.add("back-to-top-button", "fa-regular", "fa-square-caret-up");
    backToTopButton.title = "BACK TO TOP";

    backToTopButton.addEventListener("click", ()=>{
        window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", showBackToTopButton);

    function showBackToTopButton(){
        
        const buttonIsHidden = !backToTopButton.getAttribute("class").includes("show");
        const buttonIsVisible = !buttonIsHidden;

        if(window.scrollY > 1200){
            if (buttonIsHidden){
                backToTopButton.classList.toggle("show");
            }
            return;
        }
        
        if(buttonIsVisible){
            backToTopButton.classList.toggle("show");
        }
    }

    container.appendChild(backToTopButton);
    return;
}