function profileShopAdress() {

    $(".profile-tabs__item>span").addClass("z0");

    let popup = document.getElementById('btn-shop-address__popup')
    popup.classList.add('btn-shop-address__popup-active')
    
    function outOfProfileShopAdressPopup(event) {

    	let mainRoot = document.getElementById("btn-shop-address__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            $(".profile-tabs__item>span").removeClass("z0");
            let popup = document.getElementById('btn-shop-address__popup')
            popup.classList.contains('btn-shop-address__popup-active');
            popup.classList.remove('btn-shop-address__popup-active');
            window.removeEventListener('mousedown', outOfProfileShopAdressPopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfProfileShopAdressPopup, true);

}

function profileShopAdressCloseBtn() {
    $(".profile-tabs__item>span").removeClass("z0");
    let popup = document.getElementById('btn-shop-address__popup')
    popup.classList.contains('btn-shop-address__popup-active');
    popup.classList.remove('btn-shop-address__popup-active');
    
}
