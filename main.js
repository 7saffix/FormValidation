const btn = document.getElementById('submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error function
let showError = (input, message) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control failed';
    let small = formControl.querySelector('small');
    small.innerHTML = message;
}

//success function
let showSuccess = (input, message) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
    let small = formControl.querySelector('small');
    small.innerHTML = message;
}

//valid email
function validEmail(email) {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}

//formValidation
btn.addEventListener('click', (e) => {
    e.preventDefault();

    //userValidation
    if (username.value === '') {
        showError(username, 'Username cannot be blank');
    }
    else {
        showSuccess(username, '');
    }
    //emailValidation
    if (email.value === '') {
        showError(email, 'Email cannot be blank');
    }
    else if (!validEmail(email.value)) {
        showError(email, 'Invalid email');
    }
    else {
        showSuccess(email, '');
    }
    //passwordValidation
    if (password.value === '') {
        showError(password, 'Password cannot be blank');
    }
    else if (password.value.length < 8) {
        showError(password, 'Password must be minimum 8 digits');
    }
    else {
        showSuccess(password, '');
    }
    //password confirmation
    if (password2.value === '') {
        showError(password2, 'Password cannot be blank');
    }
    else if (password.value !== password2.value) {
        showError(password2, "Password doesn't match");
    }
    else {
        showSuccess(password2, '');
    }

})

