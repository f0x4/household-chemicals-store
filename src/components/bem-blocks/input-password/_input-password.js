function typeToggle(event) {
    let btn = event.target
    let parrent = btn.parentElement.parentElement
    let input = parrent.getElementsByTagName('input')
    if (input[0].type == "password") {
        input[0].type = "text";
        return;
    } 
    input[0].type = "password";
}