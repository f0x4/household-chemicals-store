function productNewReview() {

    $(".product-tabs__item>span").addClass("z0");

    let popup = document.getElementById('review-add__popup')
    popup.classList.add('review-add__popup-active')
    
    function outOfProductNewReviewPopup(event) {

    	let mainRoot = document.getElementById("review-add__popup");
    	let bit = event.target.compareDocumentPosition(mainRoot);

    	if (bit !== 10) {
            $(".product-tabs__item>span").removeClass("z0");
            let popup = document.getElementById('review-add__popup')
            popup.classList.contains('review-add__popup-active');
            popup.classList.remove('review-add__popup-active');
            window.removeEventListener('mousedown', outOfProductNewReviewPopup, true);
    	}

    }

    window.addEventListener('mousedown', outOfProductNewReviewPopup, true);

}

function productNewReviewCloseBtn() {
    $(".product-tabs__item>span").removeClass("z0");
    let popup = document.getElementById('review-add__popup')
    popup.classList.contains('review-add__popup-active');
    popup.classList.remove('review-add__popup-active');
    
}
