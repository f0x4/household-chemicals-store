function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkEmail() {
    let error = document.getElementById("footer__email-error");
    let check = document.getElementById("check_email");
    let input = document.getElementById("footer__email-input");
    let button = input.nextElementSibling;
    let vall = input.value;

    if ((validateEmail(vall) || (vall == ""))) {
        error.classList.remove("active");
    }
    if ((validateEmail(vall) && (check.checked))) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }
}

function checkEmailShowStatus() {
    let error = document.getElementById("footer__email-error");
    let input = document.getElementById("footer__email-input");
    let vall = input.value;
    if (validateEmail(vall) || (vall == "")) {

        error.classList.remove("active")
    } else {
        error.classList.add("active")
    }
}
