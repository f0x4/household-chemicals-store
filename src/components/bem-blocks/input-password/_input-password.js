function typeToggle(event) {
    let btn = event.target
    let parrent = btn.parentElement.parentElement
    let input = parrent.getElementsByTagName('input')
    let img = parrent.getElementsByTagName('img')
    if (input[0].type == "password") {
        input[0].type = "text";
        img[0].src = "img/svg/eye-close.svg"
        return;
    } 
    input[0].type = "password";
    img[0].src = "img/svg/eye.svg";
}