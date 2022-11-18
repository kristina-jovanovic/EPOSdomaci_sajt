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

        // if (messagesOne.value === '') {
        //     messages.push('Poruka je kraca od 10 karaktera')
        //     window.alert('Unesite poruku')
        //     indicator=false
        // }
    if (poruka.length > 0) {
            e.preventDefault()

    }
    if (indicator)
            window.alert('Uneti podaci: \n' + ime.value + '\n' + prezime.value + '\n' + email.value + '\n' + '\nUSPESNO POSLATO!')
    })
