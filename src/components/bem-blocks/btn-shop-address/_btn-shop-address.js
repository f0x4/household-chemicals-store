function zHide() {
    $('.header').css({"display":"none"})
}
function zShow() {
    $('.header').css({"display":""})
}
function shopsHeight() {
    let one = $('.btn-shop-address__content').height()
    let two = $('.btn-shop-address__header').outerHeight(true)
    let three = $('.btn-shop-address__info').outerHeight(true)
    let four = $('.input-search').outerHeight(true)
    let height = one - (two + three + four);
    $('.shops-search-and-map__search-items').css({"maxHeight":height+"px"});
}
function profileShopAdress() {

    zHide()
    $(".profile-tabs__item>span").addClass("z0");

    let popup = document.getElementById('btn-shop-address__popup')
    popup.classList.add('btn-shop-address__popup-active')
    
    shopsHeight()

    window.addEventListener("resize", shopsHeight, false);
    
    function outOfProfileShopAdressPopup(event) {

    	let mainRoot = document.getElementById("btn-shop-address__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            zShow()
            $(".profile-tabs__item>span").removeClass("z0");
            let popup = document.getElementById('btn-shop-address__popup')
            popup.classList.contains('btn-shop-address__popup-active');
            popup.classList.remove('btn-shop-address__popup-active');
            window.removeEventListener('mousedown', outOfProfileShopAdressPopup, true);
            window.removeEventListener("resize", shopsHeight);
    	}

    }

    window.addEventListener('mousedown', outOfProfileShopAdressPopup, true);

}

function profileShopAdressCloseBtn() {
    zShow()
    window.removeEventListener("resize", shopsHeight);
    $(".profile-tabs__item>span").removeClass("z0");
    let popup = document.getElementById('btn-shop-address__popup')
    popup.classList.contains('btn-shop-address__popup-active');
    popup.classList.remove('btn-shop-address__popup-active');
    
}
