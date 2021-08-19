// Приводит все элементы в начальное состояния
function reset(event){

    var parentNode = event.target.parentNode
    
    var uncheck = parentNode.getElementsByTagName('input');
    
    for(var i = 0; i < uncheck.length; i++) {
    
        if(uncheck[i].type == 'checkbox') {
            uncheck[i].checked = false;
        }
    }

    // чистит поиск
    var cleen = parentNode.getElementsByClassName('filter-search-input__input');
    
    if (cleen.length !== 0) {
        for(var i = 0; i < cleen.length; i++) {
        
            cleen[i].value = '';
            filter(event)
        }
    }
}
