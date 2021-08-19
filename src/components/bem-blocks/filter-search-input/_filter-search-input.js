// Поиск 
function filter(event) {
    var input, filter, div, container, label, i;
    input = event.target;
    filter = input.value.toUpperCase();
    div = input.parentNode;
    container = div.parentNode;
    label = container.getElementsByTagName("label");
    for (i = 0; i < label.length; i++) {
        txtValue = label[i].textContent || label[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            label[i].style.display = "";
        } else {
            label[i].style.display = "none";
        }
    }
}
