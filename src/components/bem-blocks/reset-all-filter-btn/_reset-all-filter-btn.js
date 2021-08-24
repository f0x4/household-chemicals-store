var changesCounter = [];
var notEmptyInputs = [];
var allCheckbox = [];
var allSearches = [];

function markAllInputs() {
    let mobileShowBtn = document.getElementById("catalog-filters__show-btn");
    let resetAllBtn = document.getElementById("reset-all-filter-btn");
    let mobileResetAllBtn = document.getElementById("catalog-filters__reset");
    let allFiltersInputs =  resetAllBtn.parentNode.getElementsByTagName("input");
    for (let i = 0; i < allFiltersInputs.length; i++) {

        if (allFiltersInputs[i].type == 'checkbox') {

            allCheckbox.push(allFiltersInputs[i])

            allFiltersInputs[i].addEventListener('change', (event) => {

                if (event.target.checked == true) {
                    changesCounter.push(event.target);

                    if (changesCounter.length > 0) {

                        let grandGrandParentNode = event.target.parentNode.parentNode.parentNode;
                        let btn = grandGrandParentNode.getElementsByClassName("reset-filter-btn");
                        for (let i = 0; i < btn.length; i++) {
                            btn[i].classList.add("active");
                        }

                        resetAllBtn.classList.add("active");
                        mobileResetAllBtn.classList.add("active");
                        mobileShowBtn.classList.add("active");

                    }

                } else {
                    changesCounter = changesCounter.filter(item => {
                        return item !== event.target;
                    })

                    if ((changesCounter.length == 0) && (notEmptyInputs.length == 0)) {

                        let grandGrandParentNode = event.target.parentNode.parentNode.parentNode;
                        let btn = grandGrandParentNode.getElementsByClassName("reset-filter-btn");
                        console.log(grandGrandParentNode)
                        for (let i = 0; i < btn.length; i++) {
                            btn[i].classList.remove("active");
                        }

                        resetAllBtn.classList.remove("active");
                        mobileResetAllBtn.classList.remove("active");
                        mobileShowBtn.classList.remove("active");

                    }
                }

            });
        }
        if (allFiltersInputs[i].type == 'text') {

            allSearches.push(allFiltersInputs[i])

            allFiltersInputs[i].addEventListener('input', (event) => {
                console.log(changesCounter, allSearches, notEmptyInputs)
                allSearches.forEach(search => {
                    if (search.value !== '') {
                        notEmptyInputs.push(search)
                    } else {
                        notEmptyInputs = notEmptyInputs.filter(item => {
                            return item !== search;
                        })
                    }
                });

                if ((notEmptyInputs.length == 0) && (changesCounter.length == 0)) {

                    let grandGrandParentNode = event.target.parentNode.parentNode;
                    let btn = grandGrandParentNode.getElementsByClassName("reset-filter-btn");
                    for (let i = 0; i < btn.length; i++) {
                        btn[i].classList.remove("active");
                    }

                    resetAllBtn.classList.remove("active");
                    mobileResetAllBtn.classList.remove("active");
                    mobileShowBtn.classList.remove("active");
                }
                if (notEmptyInputs.length > 0) {

                    let grandGrandParentNode = event.target.parentNode.parentNode;
                    let btn = grandGrandParentNode.getElementsByClassName("reset-filter-btn");
                    for (let i = 0; i < btn.length; i++) {
                        btn[i].classList.add("active");
                    }

                    resetAllBtn.classList.add("active");
                    mobileResetAllBtn.classList.add("active");
                    mobileShowBtn.classList.add("active");
                }

            });
        }
    }
}


function resetAll(event) {
    let mobileShowBtn = document.getElementById("catalog-filters__show-btn");
    let resetAllBtn = document.getElementById("reset-all-filter-btn");
    let mobileResetAllBtn = document.getElementById("catalog-filters__reset");
    let allFiltersInputs =  resetAllBtn.parentNode.getElementsByTagName("input");

    for (let i = 0; i < allFiltersInputs.length; i++) {

        if (allFiltersInputs[i].type == 'checkbox') {
            
            if (allFiltersInputs[i].checked == true) {
                allFiltersInputs[i].checked = false;
            } 
        }
        if (allFiltersInputs[i].type == 'text') {
            if (allFiltersInputs[i].value !== '')
            allFiltersInputs[i].value = '';
            filter(event, allFiltersInputs[i]);
        }
    }

    changesCounter = [];
    notEmptyInputs = [];

    resetAllBtn.classList.remove("active");
    mobileResetAllBtn.classList.remove("active");
    mobileShowBtn.classList.remove("active");

    let btn = document.getElementsByClassName("reset-filter-btn");
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }


}
/*
allFiltersInputs[i].addEventListener('input', (event) => {

        //resetAllBtn.classList.add("active");
        
        
        
        
        // чистит поиск
        var cleen = parentNode.getElementsByClassName('filter-search-input__input');
        
        if (cleen.length !== 0) {
            for(var i = 0; i < cleen.length; i++) {
            
                cleen[i].value = '';
                filter(event);
            }
        }
        
    });
*/