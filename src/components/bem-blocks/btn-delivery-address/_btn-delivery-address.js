function profileDeliveryAdress() {

    $(".profile-tabs__item>span").addClass("z0");

    let popup = document.getElementById('btn-delivery-address__popup')
    popup.classList.add('btn-delivery-address__popup-active')
    
    function outOfProfileDeliveryAdressPopup(event) {

    	let mainRoot = document.getElementById("btn-delivery-address__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            $(".profile-tabs__item>span").removeClass("z0");
            let popup = document.getElementById('btn-delivery-address__popup')
            popup.classList.contains('btn-delivery-address__popup-active');
            popup.classList.remove('btn-delivery-address__popup-active');
            window.removeEventListener('mousedown', outOfProfileDeliveryAdressPopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfProfileDeliveryAdressPopup, true);

}

function profileDeliveryAdressCloseBtn() {
    $(".profile-tabs__item>span").removeClass("z0");
    let popup = document.getElementById('btn-delivery-address__popup')
    popup.classList.contains('btn-delivery-address__popup-active');
    popup.classList.remove('btn-delivery-address__popup-active');
    
}
