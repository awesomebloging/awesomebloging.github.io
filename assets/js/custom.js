if ($(window).width() >= 1210) {
      $('body').prepend("<a name='top' class='top2' />");
      $('body').append("<div id='go-top'><div id='go-top-text'></div></div>")
      $(window).scroll(function(){
        if ($(document).scrollTop() > 200) {
          $('#go-top').fadeIn();
        } else {
          $('#go-top').fadeOut();
        }
      });
      $('#go-top').click(function(){
        $("html, body").animate({
          scrollTop: 0
        }, 600);
        return false;
      });
    }
    $(window).resize(function() {
      if ($(window).width() < 1210) {
        $('#go-top').css({
          'display':'none'
        });
      }
    });
	
	var $images = $('.single-post__full-image');

var imagePosition = function ($image, $placeholder) {
  var height = $image.outerHeight();
  $placeholder.height(height);
};

$images.each(function(index, image) {
  var $image = $(image);

  var $placeholder = $('<div></div>');

  $placeholder
    .addClass('single-post__full-image--placeholder')
    .insertAfter($image);

  imagePosition($image, $placeholder);

  var t = new Tether({
    element: $image,
    target: $placeholder,
    attachment: 'middle center',
    targetAttachment: 'middle center'
  });

  imagePosition($image, $placeholder);

  $('.single-post').imagesLoaded()
    .done( function( instance ) {
      $(window).trigger('fit-image');
    });

  // Resize placeholder to same size as the image
  $(window).on('resize fit-image', function () {
    t.position();
    imagePosition($image, $placeholder);
  });
});