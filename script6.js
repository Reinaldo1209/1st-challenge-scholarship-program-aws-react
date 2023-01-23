function validar(){
    var email = document.getElementById('email').value;
    var idade = document.getElementById('nome').value;
    var age = document.getElementById('number').value;

    if(nome && number && validateEmail(email) && !ageok(number))
    window.location.href = "index.html";
    else
    alert('Fill in the fields')
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function ageok(number){
    if (number < 130)
    return false
}