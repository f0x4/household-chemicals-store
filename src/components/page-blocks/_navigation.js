// < Dropdown Categories >

function dropDownCategories() {
	let content = document.getElementById("catalog-dropdown__content")
	let dropdownIcon = document.querySelector(".catalog-dropdown__icon")

	content.classList.toggle("show");
	dropdownIcon.classList.toggle("show-ico");
};

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
	var mainRoot = document.getElementById("navigation__catalog-dropdown");
	var bit = event.target.compareDocumentPosition(mainRoot);

	if ((!event.target.matches(".catalog-dropdown__btn")) && (bit !== 10)) {
		var dropdowns = document.getElementsByClassName("catalog-dropdown__content");

	  	for (let i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if ((openDropdown.classList.contains('show'))) {
			  openDropdown.classList.remove('show');
			}
	  	}

	  	var icons = document.getElementsByClassName("catalog-dropdown__icon");

	  	for (let i = 0; i < icons.length; i++) {
			var openDropdown = icons[i];
			if ((openDropdown.classList.contains('show-ico'))) {
				openDropdown.classList.remove('show-ico');
			}
	  	}
	}


});

// </ Dropdown Categories >

