function profileEditBtn() {

    let popup = document.getElementById('profile-edit__popup')
    popup.classList.add('profile-edit__popup-active')
    
    function outOfProfileEditPopup(event) {

    	let mainRoot = document.getElementById("profile-edit__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            let popup = document.getElementById('profile-edit__popup')
            popup.classList.contains('profile-edit__popup-active');
            popup.classList.remove('profile-edit__popup-active');
            window.removeEventListener('mousedown', outOfProfileEditPopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfProfileEditPopup, true);

}

function profileEditCloseBtn() {
    let popup = document.getElementById('profile-edit__popup')
    popup.classList.contains('profile-edit__popup-active');
    popup.classList.remove('profile-edit__popup-active');
}
