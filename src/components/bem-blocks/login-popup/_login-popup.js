function loginPopupBtn() {

    let popup = document.getElementById('login-popup__popup')
    popup.classList.add('login-popup__popup-active')
    
    function outOfLoginPopup(event) {

    	let mainRoot = document.getElementById("login-popup__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            let popup = document.getElementById('login-popup__popup')
            popup.classList.contains('login-popup__popup-active');
            popup.classList.remove('login-popup__popup-active');
            window.removeEventListener('mousedown', outOfLoginPopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfLoginPopup, true);

}

function loginPopupCloseBtn() {
    let popup = document.getElementById('login-popup__popup')
    popup.classList.contains('login-popup__popup-active');
    popup.classList.remove('login-popup__popup-active');
}

function forgotClick() {
    let popup = document.getElementById('login-popup__popup')
    popup.classList.add('forgot')
}
function forgotClose() {
    let popup = document.getElementById('login-popup__popup')
    popup.classList.remove('forgot')
}
