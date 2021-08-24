function markAllFlyoutCatalogs() {

    let flyout = document.getElementsByClassName("flyout-catalog");
  
    for (let i = 0; i < flyout.length; i++) {

        flyout[i].addEventListener("click", function() {

            this.classList.add("active");
            
            var panel = this.nextElementSibling;
            panel.classList.add("active");

        });
    }
}

function catalogBack() {
    let flyout = document.getElementsByClassName("flyout-catalog");
    let wasOpen = false;
  
    for (let i = 0; i < flyout.length; i++) {
        if (flyout[i].matches(".active")) {
            flyout[i].classList.remove("active");
            var panel = flyout[i].nextElementSibling;
            panel.classList.remove("active");

            wasOpen = true;
        }
    }
    
    if (!wasOpen) window.history.back();
    
}