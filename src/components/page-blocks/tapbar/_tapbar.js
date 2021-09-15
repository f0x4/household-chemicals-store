// < TapBar >
$(document).ready( function() {
    // Get page URL by breaking down window.location
    var page = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  
    // Search through each link, compare href to current page
    $(".tapbar__item").each( function(){
        if( $(this).attr("href") === page ||  (( page === "") && ($(this).attr("href") == "/")) )
        $(this).addClass("active");
    })
  });
  // < TapBar />
