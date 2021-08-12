// < Search Content >

function mobileScrollLockOn() {
	if (window.innerWidth <= 425) {
		document.body.style.overflow = "hidden";
	}
}

function mobileScrollLockOff() {
	if (window.innerWidth > 425) {
		document.body.removeAttribute('style');
	}
}

function searchContentShow() {
	let content = document.getElementById("navigation__search-content")

	content.classList.add("_show");
  if (window.innerWidth) {
    
  }
	mobileScrollLockOn();

  /*
	let iconMenu = document.querySelector(".menu__icon"); // menu
	iconMenu.classList.add("_active");

	let headerSearch = document.getElementById("header__search") // heder search
	headerSearch.classList.add("_open");

	let headerLogo = document.getElementById("header__logo") // heder search
	headerLogo.style.display = "none";
  */
};

function mobileSearchContentShow() {
	let content = document.getElementById("navigation__search-content")
  let iconMenu = document.querySelector(".menu__icon");
  let headerSearch = document.getElementById("header__search")
  let headerLogo = document.getElementById("header__logo")


	content.classList.add("_show");

  iconMenu.classList.add("_active");
	headerSearch.classList.add("_open");
	headerLogo.style.display = "none";

  mobileScrollLockOn();
};



// Функция для нахождения кординат относительно страницы
function getCoords(elem)  {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
      width: box.width,
      height: box.height
    };
}

// Позиционирование и изменение размера Search Content
class SearchContent {
    constructor() {
      
    }

    isOpen() {
      let searchContent = document.getElementById("navigation__search-content");
      return searchContent.classList.contains('_show');
    }
    
    positioning() {
      let windowInnerWidth = window.innerWidth;
      let searchContent = document.getElementById("navigation__search-content");
      let search = document.getElementById("navigation__search");

      var searchCords = getCoords(search);

	    if (windowInnerWidth > 425) {
	    	searchContent.style.left = searchCords.left + "px";
	    	searchContent.style.top = searchCords.top + searchCords.height + 4 + "px";
			  return;
	    }
		  searchContent.removeAttribute('style');
    }
	
    resizing() {
      let windowInnerWidth = window.innerWidth;
      let searchContent = document.getElementById("navigation__search-content");
      let search = document.getElementById("navigation__search");

      if ((windowInnerWidth > 425) && (windowInnerWidth <= 1024)) {
	    	let navWidth = document.getElementById("navigation").clientWidth;
	    	let dropdownWidth = document.getElementById("navigation__catalog-dropdown").clientWidth;
            
	    	searchContent.style.width = (navWidth - dropdownWidth - 80 - 35) + "px";
        return;
	    }
		  if (windowInnerWidth > 1024) {
	    	let searchWidth = search.clientWidth;

	    	searchContent.style.width = searchWidth + 2 + "px";
        return;
	    }
		  searchContent.removeAttribute('style');
    }

    // Close search content if the user clicks outside of it or outside of input
    closeIfClickOutside(event) {
      let windowInnerWidth = window.innerWidth;
      let searchContent = document.getElementById("navigation__search-content");
      let search = document.getElementById("navigation__search");

      var bit = event.target.compareDocumentPosition(searchContent);
      var exceptionsArray = ["#navigation__search-input", ".header__search", ".search-icon", ".green-button", ".header__search-input", ".branding__container"]

      var isTargetOneOfTheExceptions = exceptionsArray.some(element => {
        let isTargetAnExeption = event.target.matches(element);
      
        return isTargetAnExeption;
      });
    
    	if ((!isTargetOneOfTheExceptions) && (bit !== 10)) {
    		if (this.isOpen()) {
    			searchContent.classList.remove('_show');
    			document.body.removeAttribute('style');
        
    			let iconMenu = document.querySelector(".menu__icon"); // menu
    			if (iconMenu.classList.contains('_active')) {
            let menuBody = document.querySelector(".menu__body");
            if (!menuBody.classList.contains('_active'))
            iconMenu.classList.remove("_active");
          }
        
    			let headerSearch = document.getElementById("header__search") // heder search
    			headerSearch.classList.remove("_open");
        
    			let headerLogo = document.getElementById("header__logo") // heder search
    			headerLogo.style.display = "block";
    		}
    	}
    }

    close() {
      let searchContent = document.getElementById("navigation__search-content");

      if (this.isOpen()) {
        searchContent.classList.remove('_show');
        document.body.removeAttribute('style');
      
        let iconMenu = document.querySelector(".menu__icon"); // menu
    			if (iconMenu.classList.contains('_active')) {
            let menuBody = document.querySelector(".menu__body");
            if (!menuBody.classList.contains('_active'))
            iconMenu.classList.remove("_active");
          }
      
        let headerSearch = document.getElementById("header__search") // heder search
        headerSearch.classList.remove("_open");
      
        let headerLogo = document.getElementById("header__logo") // heder search
        headerLogo.style.display = "block";
      }
    }
}

var searchContent = new SearchContent()

function onResizeClose() {
  let content = document.getElementById("navigation__search-content");
  if (content.classList.contains('_show')) {
    searchContent.close()
  }
}
// </ Search Content >

// < Меню >

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const content = document.getElementById("navigation__search-content")

if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    if (iconMenu.classList.contains('_active')) {
      
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
      searchContent.closeIfClickOutside(body);
      
      return;
		}
    document.body.classList.add("_lock");
    iconMenu.classList.add("_active");
    menuBody.classList.add("_active");
  });
}

// < Меню />



document.addEventListener('DOMContentLoaded', function(){
	searchContent.positioning()
	searchContent.resizing()
});

window.addEventListener('resize', function() {
  searchContent.positioning()
  searchContent.resizing()

  mobileScrollLockOff()
  mobileScrollLockOn()
  onResizeClose()
});

window.addEventListener('click', function(event) {
	searchContent.closeIfClickOutside(event)
});


