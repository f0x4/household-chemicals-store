function passwordChangeBtn() {

    let popup = document.getElementById('password-change__popup')
    popup.classList.add('password-change__popup-active')
    
    function outOfPasswordChangePopup(event) {

    	let mainRoot = document.getElementById("password-change__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            let popup = document.getElementById('password-change__popup')
            popup.classList.contains('password-change__popup-active');
            popup.classList.remove('password-change__popup-active');
            window.removeEventListener('click', outOfPasswordChangePopup, true);
    	}

    }

    window.addEventListener('click', outOfPasswordChangePopup, true);

}

function passwordChangeCloseBtn() {
    let popup = document.getElementById('password-change__popup')
    popup.classList.contains('password-change__popup-active');
    popup.classList.remove('password-change__popup-active');
}
