toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
var usernameError = document.getElementById('username-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

function validateUsername() {
    var username = document.getElementById('exampleInputUsername').value;
    if (username.length == 0) {
        usernameError.innerHTML = 'Username is required.';
        return false;
    }
    usernameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validatePassword() {
    var password = document.getElementById('exampleInputPassword1').value;
    if (password.length == 0) {
        passwordError.innerHTML = 'Password is required.';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateForm () {
    if (!validateUsername() || !validatePassword()){
        toastr.error("Please fill out the required fields.", "Validation Error");
        return false;
    }
    toastr.success("Login successful!", "Success");
    return true;
}