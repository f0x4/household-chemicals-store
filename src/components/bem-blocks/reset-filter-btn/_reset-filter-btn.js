// Приводит все элементы в начальное состояния
function reset(event){

    let mobileShowBtn = document.getElementById("catalog-filters__show-btn");
    let resetAllBtn = document.getElementById("reset-all-filter-btn");

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

    var btn = event.target;
    btn.classList.remove("active");

    parentNode.getElementsByClassName('filter-search-input__input');
    notEmptyInputs = notEmptyInputs.filter(item => {
        return item !== cleen[0];
    })

    for (let i = 0; i < uncheck.length; i++) {
        if(uncheck[i].type == 'checkbox') {
            changesCounter = changesCounter.filter(item => {
                return item !== uncheck[i];
            })
        }
    }

    if ((notEmptyInputs.length == 0) && (changesCounter.length == 0)) {
        resetAllBtn.classList.remove("active");
        let anovherRessetBtn = document.getElementById("catalog-filters__reset");
        anovherRessetBtn.classList.remove("active");
        mobileShowBtn.classList.remove("active");

    }

}
