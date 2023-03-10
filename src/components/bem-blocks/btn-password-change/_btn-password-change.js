function passwordChangeBtn() {

    $(".profile-tabs__item>span").addClass("z0");

    let popup = document.getElementById('password-change__popup')
    popup.classList.add('password-change__popup-active')
    
    function outOfPasswordChangePopup(event) {

    	let mainRoot = document.getElementById("password-change__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            $(".profile-tabs__item>span").removeClass("z0");
            let popup = document.getElementById('password-change__popup')
            popup.classList.contains('password-change__popup-active');
            popup.classList.remove('password-change__popup-active');
            window.removeEventListener('mousedown', outOfPasswordChangePopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfPasswordChangePopup, true);

}

function passwordChangeCloseBtn() {
    $(".profile-tabs__item>span").removeClass("z0");
    let popup = document.getElementById('password-change__popup')
    popup.classList.contains('password-change__popup-active');
    popup.classList.remove('password-change__popup-active');
}
