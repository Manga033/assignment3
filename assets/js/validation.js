var nameError = document.getElementById('name-error');
var lastnameError = document.getElementById('lastname-error');
var dateError = document.getElementById('date-error');
var emailError = document.getElementById('email-error');
var usernameError = document.getElementById('username-error');
var passwordError = document.getElementById('password-error');
var telnumError = document.getElementById('telnum-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('first_name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required.';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatelastname() {
    var lastname = document.getElementById('last_name').value;
    if (lastname.length == 0) {
        lastnameError.innerHTML = 'Last name is required.';
        return false;
    }
    lastnameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0 ) {
        emailError.innerHTML = 'Email is required.';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('tel_number').value;

    if(phone.length == 0) {
        telnumError.innerHTML = 'Telephone number is required.';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Telephone number should contain 10 digits.'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        telnumError.innerHTML = 'Telephone number contains only digits';
        return false;
    }
    telnumError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateUsername() {
    var username = document.getElementById('username_reg').value;
    if (username.length == 0) {
        usernameError.innerHTML = 'Username is required.';
        return false;
    }
    usernameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm () {
    if (!validateName() || !validatelastname() || !validateEmail() || !validatePhone() || !validateUsername()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fill out the required fields.";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}