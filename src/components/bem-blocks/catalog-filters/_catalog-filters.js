
function markAllAccordions() {
  window.addEventListener("resize", closeFilters);
  var tapbar = document.getElementById("tapbar");
  var filtersMobileNav = document.getElementById("catalog-filters__mobile-nav")

  let acc = document.getElementsByClassName("catalog-filters");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("mousedown", function() {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;

      /*let panelResetBtn = panel.getElementById("reset-filter-btn");
      if (panelResetBtn.matches(".active")) {
        panelResetBtn.style.display
      } */

      if ( window.innerWidth > 1024 ) {
        if ( panel.style.maxHeight ) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
      if ( window.innerWidth <= 1024 ) {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.top = null;
        } else {
          panel.style.maxHeight = `100%`;
          panel.style.height = `calc(100% - ${filtersMobileNav.offsetHeight + "px"} -  ${tapbar.offsetHeight + "px"})`;
          panel.style.top = filtersMobileNav.offsetHeight + "px";
        }
      }

    });
  }
}



function backBtn() {
  var isOpen = false;
  let acc = document.getElementsByClassName("catalog-filters");

  for (i = 0; i < acc.length; i++) {

    if (acc[i].matches(".active")) {
      isOpen = true;
    }
    if (isOpen == true) {
      acc[i].classList.remove("active")
      var panel = acc[i].nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
    }
  }

  if (isOpen == false) {
      let filtersContainer = document.getElementById("catalog-filters__container");
      filtersContainer.classList.remove("active");
      document.body.style.overflow = null;
  }

}



function filterOpenBtn() {
  let catalogFiltersWrapper = document.getElementById("catalog-filters__wrapper")
  let catalogFiltersContainer = document.getElementById("catalog-filters__container")
  let filtersContainer = document.getElementById("catalog-filters__container");
  let tapbar  = document.getElementById("tapbar")
  let filtersMobileNav = document.getElementById("catalog-filters__mobile-nav")

  filtersContainer.classList.add("active");

  catalogFiltersWrapper.style.height = `calc(100% - ${filtersMobileNav.offsetHeight + "px"})`;
  if (window.innerWidth <= 460) {
    catalogFiltersContainer.style.height = `calc(100% - ${tapbar.offsetHeight + "px"})`;
  } else {
    catalogFiltersContainer.style.height = `calc(100%)`;
  }
  
  document.body.style.overflow = "hidden";


}

var transition = true;

function closeFilters() {
  let acc = document.getElementsByClassName("catalog-filters");
  let catalogFiltersWrapper = document.getElementById("catalog-filters__wrapper")
  let filtersMobileNav = document.getElementById("catalog-filters__mobile-nav")
  let filtersContainer = document.getElementById("catalog-filters__container");

  if (window.innerWidth <= 460) {
    catalogFiltersWrapper.style.height = `calc(100% - ${filtersMobileNav.offsetHeight + "px"})`;
  }
  
  if ((window.innerWidth <= 1024) && (!transition)) {
    
    for (i = 0; i < acc.length; i++) {
      if(acc[i].matches(".active")) {
        acc[i].classList.remove("active");
        
        var panel = acc[i].nextElementSibling;
        
        panel.style.maxHeight = null;
        panel.style.height = null;
        panel.style.top = null;

      }
      
    }
    filtersContainer.classList.remove("active");
    document.body.style.overflow = null;
    transition = true;
  }
  if ((window.innerWidth > 1024) && (transition)) {
    for (i = 0; i < acc.length; i++) {
      if(acc[i].matches(".active")) {
        acc[i].classList.remove("active");
        
        var panel = acc[i].nextElementSibling;
        
        panel.style.maxHeight = null;
        panel.style.height = null;
        panel.style.top = null;

      }
      
    }
    filtersContainer.classList.remove("active");
    document.body.style.overflow = null;
    transition = false;
  }
}

function showClick() {
  let catalogFiltersContainer = document.getElementById("catalog-filters__container")
  if ((notEmptyInputs.length == 0) && (changesCounter.length == 0)) return;
  catalogFiltersContainer.classList.remove("active");
}
