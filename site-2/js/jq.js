$(function () {
  //show project
    $(".project").slice(0, 3).show();
    $(".load-more").on('click', function () {
        $('.project:hidden').slice(0, 3).slideDown();
    });

    //counter
    $(window).on("scroll", function () {
      let w_top = $(window).scrollTop(),
          e_top = $('.counter-elements').offset().top;

      if (w_top >= e_top - 490) {
        $(".count").map(function (index, element) {

             $(element).animate({ num: $(element).attr('count') }, {
             duration: 3000,
             step: function (num){
                 this.innerHTML = (num + 3).toFixed(0) ;
             }
          });
       });
      }
    });
});
