
// js za header hamburger menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]; //iako je jedino togglebutton dugme da se osiguramo sa [0]
const navbarLinks = document.getElementsByClassName("meni_bar")[0]; //iako se na jednom mestu javlja meni_bar klasa da se osiguramo sa [0]

//klikom na hamburger menu tj. togglebutton prikazi meni
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

const ime = document.getElementById('ime')
const prezime = document.getElementById('prezime')
const email = document.getElementById('email')
const form = document.getElementById('form')
const poruka = document.getElementById('poruka');
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = [];

    let indicator = true;

    if (ime.value === '' || ime.value == null) {
        messages.push('Name is required')
        window.alert("Unesite ime")
        indicator = false
    }
    if (prezime.value === '' || prezime.value == null) {
        messages.push('Name is required')
        window.alert("Unesite prezime")
        indicator = false
    }
    if (email.value === '') {
        messages.push('Email must be longer than 6 characters')
        window.alert('Unesite mail')
        indicator = false
    }

    if (poruka.length > 0) {
        e.preventDefault()

    }
    if (indicator)
        window.alert('Uneti podaci: \n' + ime.value + '\n' + prezime.value + '\n' + email.value + '\n' + '\nUSPEŠNO POSLATO!')
})
