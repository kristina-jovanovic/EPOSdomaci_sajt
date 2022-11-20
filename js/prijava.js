
// js za header hamburger menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]; //iako je jedino togglebutton dugme da se osiguramo sa [0]
const navbarLinks = document.getElementsByClassName("meni_bar")[0]; //iako se na jednom mestu javlja meni_bar klasa da se osiguramo sa [0]

//klikom na hamburger menu tj. togglebutton prikazi meni
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// FORMA
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


//ZA DUGMICE

$.fn.boom = function (e) {
    var colors = [
        '#80c5a0',
        '#df8787',
        '#333',
    ];
    var shapes = [
        '<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>',
        // '<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>',
        '<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
        '<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>'
    ];

    var btn = $(this);
    var group = [];
    var num = Math.floor(Math.random() * 50) + 30;

    for (i = 0; i < num; i++) {
        var randBG = Math.floor(Math.random() * colors.length);
        var getShape = Math.floor(Math.random() * shapes.length);
        var c = Math.floor(Math.random() * 10) + 5;
        var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
        var x = Math.floor(Math.random() * (150 + 100)) - 100;
        var y = Math.floor(Math.random() * (150 + 100)) - 100;
        var sec = Math.floor(Math.random() * 1700) + 1000;
        var cir = $('<div class="cir"></div>');
        var shape = $('<svg class="shape">' + shapes[getShape] + '</svg>');

        shape.css({
            top: e.pageY - btn.offset().top + 20,
            left: e.pageX - btn.offset().left + 40,
            'transform': 'scale(0.' + scale + ')',
            'transition': sec + 'ms',
            'fill': colors[randBG]
        });

        btn.siblings('.btn-particles').append(shape);

        group.push({ shape: shape, x: x, y: y });
    }

    for (var a = 0; a < group.length; a++) {
        var shape = group[a].shape;
        var x = group[a].x, y = group[a].y;
        shape.css({
            left: x + 50,
            top: y + 15,
            'transform': 'scale(0)'
        });
    }

    setTimeout(function () {
        for (var b = 0; b < group.length; b++) {
            var shape = group[b].shape;
            shape.remove();
        }
        group = [];
    }, 2000);

}

$(function () {
    $(document).on('click', '.btn', function (e) {
        $(this).boom(e);
    });

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
