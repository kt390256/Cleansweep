$(document).ready(function() {
  var toggleOffset = function(affixElement, scrollElement, wrapper) {
    var height = affixElement.outerHeight(),
    top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("offset-md-2");
    }
    else {
        affixElement.removeClass("offset-md-2");
        wrapper.height('auto');
    }
  }


  $('#results').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleOffset(ele, $(this), wrapper);
    });

    toggleOffset(ele, $(this), wrapper);
  });
});