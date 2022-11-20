
// js za header hamburger menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]; //iako je jedino togglebutton dugme da se osiguramo sa [0]
const navbarLinks = document.getElementsByClassName("meni_bar")[0]; //iako se na jednom mestu javlja meni_bar klasa da se osiguramo sa [0]

//klikom na hamburger menu tj. togglebutton prikazi meni
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

