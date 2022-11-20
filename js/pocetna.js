
// js za header hamburger menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]; //iako je jedino togglebutton dugme da se osiguramo sa [0]
const navbarLinks = document.getElementsByClassName("meni_bar")[0]; //iako se na jednom mestu javlja meni_bar klasa da se osiguramo sa [0]

//klikom na hamburger menu tj. togglebutton prikazi meni
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

//JS ZA DUGME ZA POVRATAK NA POCETAK STRANE

const backToTopButton = document.querySelector("#back-to-the-top"); //uhvati dugme

//scroll event
window.addEventListener("scroll", scrollFunction);
//kad se skroluje dodaj i oduymi odredjene klase
function scrollFunction() {
    if (window.pageYOffset > 300) {
        if (!backToTopButton.classList.contains("btnEntrance")) {
            //ako nema klase btnEntrance
            backToTopButton.classList.remove("btnExit"); //izbaci ovu klasu ako je ima
            backToTopButton.classList.add("btnEntrance"); //i ubaci ovu klasu
            //a zatim prikazi dugme na strani
            backToTopButton.style.display = "block";
        }
    } else {
        if (backToTopButton.classList.contains("btnEntrance")) {
            //ako ima ove klase
            backToTopButton.classList.remove("btnEntrance"); //izbaci je iz liste klasa
            backToTopButton.classList.add("btnExit"); //i ubaci ovu klasu
            setTimeout(function () {
                //a zatim
                //da se ne bi odjednom izgubilo dugme, ubaci kasnjenje od 250ms
                //i sakrij dugme
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

//kad se klikne na backtoTop dugme
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    //vrati na pocetak stranice
    window.scrollTo(0, 0);
}