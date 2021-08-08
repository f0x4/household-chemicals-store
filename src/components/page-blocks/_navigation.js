// < Dropdown Categories >

function dropDownCategories() {
	let content = document.getElementById("catalog-dropdown__content")
	let dropdownIcon = document.querySelector(".catalog-dropdown__icon")

	content.classList.toggle("show");
	dropdownIcon.classList.toggle("show-ico");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if ((!event.target.matches('.catalog-dropdown__btn')) && (!event.target.matches('.catalog-dropdown__icon'))) {
	  var dropdowns = document.getElementsByClassName("catalog-dropdown__content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if ((openDropdown.classList.contains('show'))) {
		  openDropdown.classList.remove('show');
		}
	  }
	  
	  var icons = document.getElementsByClassName("catalog-dropdown__icon");
	  var i;
	  for (i = 0; i < icons.length; i++) {
		var openDropdown = icons[i];
		if ((openDropdown.classList.contains('show-ico'))) {
			openDropdown.classList.remove('show-ico');
		}
	  }
	}
}

// </ Dropdown Categories >
