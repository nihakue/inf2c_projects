//code for smooth scroll shamelessly lifted from css-tricks
//http://css-tricks.com/snippets/jquery/smooth-scrolling/

$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    // $(".scroll").click(function(event){
    //     event.preventDefault();
    //     //calculate destination place
    //     var dest=0;
    //     if($(this.hash).offset().top > $(document).height()-$(window).height()){
    //         dest=$(document).height()-$(window).height();
    //     }else{
    //         dest=$(this.hash).offset().top;
    //     }
    //     //go to destination
    //     $('html,body').animate({scrollTop:dest}, 2000,'swing');
    // })
});