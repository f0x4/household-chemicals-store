function profileEditBtn() {

    $(".profile-tabs__item>span").addClass("z0");

    let popup = document.getElementById('profile-edit__popup')
    popup.classList.add('profile-edit__popup-active')
    
    function outOfProfileEditPopup(event) {

    	let mainRoot = document.getElementById("profile-edit__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            $(".profile-tabs__item>span").removeClass("z0");
            let popup = document.getElementById('profile-edit__popup')
            popup.classList.contains('profile-edit__popup-active');
            popup.classList.remove('profile-edit__popup-active');
            window.removeEventListener('mousedown', outOfProfileEditPopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfProfileEditPopup, true);

}

function profileEditCloseBtn() {
    $(".profile-tabs__item>span").removeClass("z0");
    let popup = document.getElementById('profile-edit__popup')
    popup.classList.contains('profile-edit__popup-active');
    popup.classList.remove('profile-edit__popup-active');
}
