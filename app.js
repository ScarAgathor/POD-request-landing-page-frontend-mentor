const email = document.querySelector('#email');
const form = document.querySelector('.form');
const error = document.querySelector('.error');

form.addEventListener("submit", e => {
    e.preventDefault()
    checkEmail();
})

email.addEventListener('click', () => {
    error.textContent = ``
})

function checkEmail() {
    if(email.value == '') {
        error.textContent = `Oops! Please check your email`
    }
    if(email.value!= '' && !emailFormat(email.value)) {
        error.textContent = `Oops! Please add your email`
    }
}

function emailFormat(email) {
    //learn how to translate regular expressions
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email)
}

