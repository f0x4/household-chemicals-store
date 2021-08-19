var resetAllBtn = document.getElementById("reset-all-filter-btn");

var allFiltersInputs =  resetAllBtn.parentNode.getElementsByTagName("input");

for (let i = 0; i < allFiltersInputs.length; i++) {
    allFiltersInputs[i].addEventListener('input', (event) => {

        resetAllBtn.classList.add("active");
        
        if(uncheck[i].type == 'checkbox') {
            uncheck[i].checked = false;
        }
        
        /*
        // чистит поиск
        var cleen = parentNode.getElementsByClassName('filter-search-input__input');
        
        if (cleen.length !== 0) {
            for(var i = 0; i < cleen.length; i++) {
            
                cleen[i].value = '';
                filter(event);
            }
        }
        */
    });
    
}
