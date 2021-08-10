// < Dropdown Categories >

function dropDownCategories() {
	let content = document.getElementById("catalog-dropdown__content")
	let dropdownIcon = document.querySelector(".catalog-dropdown__icon")

	content.classList.toggle("_show");
	dropdownIcon.classList.toggle("_show-ico");
};

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
	var mainRoot = document.getElementById("navigation__catalog-dropdown");
	var bit = event.target.compareDocumentPosition(mainRoot);

	if ((!event.target.matches(".catalog-dropdown__btn")) && (bit !== 10)) {
		var dropdowns = document.getElementsByClassName("catalog-dropdown__content");

	  	for (let i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if ((openDropdown.classList.contains('_show'))) {
			  openDropdown.classList.remove('_show');
			}
	  	}

	  	var icons = document.getElementsByClassName("catalog-dropdown__icon");

	  	for (let i = 0; i < icons.length; i++) {
			var openDropdown = icons[i];
			if ((openDropdown.classList.contains('_show-ico'))) {
				openDropdown.classList.remove('_show-ico');
			}
	  	}
	}


});

// </ Dropdown Categories >

