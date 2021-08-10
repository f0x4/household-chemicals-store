// < Search Content >

function mobileScrollLockOn() {
	if (window.innerWidth <= 425) {
		document.body.style.overflow = "hidden";
	}
}
function mobileScrollLockOff() {
	if (window.innerWidth <= 425) {
		document.body.removeAttribute('style');
	}
}


function searchContentShow() {
	let content = document.getElementById("navigation__search-content")

	content.classList.add("_show");
	mobileScrollLockOn();
};

function searchContentHide() {
	setTimeout(function() {
		let content = document.getElementById("navigation__search-content")
		content.classList.remove('_show');
  	}, 200);
};

// Close search content if the user clicks outside of it or outside of input
function searchContentClose(event) {
	var navSearchContent = document.getElementById("navigation__search-content");

	var bit = event.target.compareDocumentPosition(navSearchContent);
	
	var isSearchInput = event.target.matches("#navigation__search-input");
	var isHeaderSearch = event.target.matches(".header__search");
	var isSearchIcon = event.target.matches(".search-icon");
	var isGreenButton = event.target.matches(".green-button");
	
	if ((!isSearchInput) && (!isHeaderSearch) && (!isSearchIcon) && (!isGreenButton) && (bit !== 10)) {
		if ((navSearchContent.classList.contains('_show'))) {
			navSearchContent.classList.remove('_show');
			document.body.removeAttribute('style');
		}
	}
}

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
        this.windowInnerWidth = window.innerWidth;
        this.searchContent = document.getElementById("navigation__search-content");
		this.search = document.getElementById("navigation__search");
    }
    
    positioning() {
        var searchCords = getCoords(this.search);

	    if (this.windowInnerWidth > 425) {
	    	this.searchContent.style.left = searchCords.left + "px";
	    	this.searchContent.style.top = searchCords.top + searchCords.height + 4 + "px";
			return;
	    }
		this.searchContent.removeAttribute('style');
    }
	
    resizing() {
        if ((this.windowInnerWidth > 425) && (this.windowInnerWidth <= 1024)) {
	    	let navWidth = document.getElementById("navigation").clientWidth;
	    	let dropdownWidth = document.getElementById("navigation__catalog-dropdown").clientWidth;
            
	    	this.searchContent.style.width = (navWidth - dropdownWidth - 80 - 35) + "px";
            return;
	    }
		if (this.windowInnerWidth > 1024) {
	    	let searchWidth = this.search.clientWidth;

	    	this.searchContent.style.width = searchWidth + 2 + "px";
            return;
	    }
		this.searchContent.removeAttribute('style');
    }	
}

document.addEventListener('DOMContentLoaded', function(){
    let searchContent = new SearchContent()
	searchContent.positioning()
	searchContent.resizing()
});

window.addEventListener('resize', function() {
	let searchContent = new SearchContent()
    searchContent.positioning()
    searchContent.resizing()
});

window.addEventListener('click', function(event) {
	searchContentClose(event)
});

// </ Search Content >
