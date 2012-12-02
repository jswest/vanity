$(document).ready( function() {
  
  window.exists = function( el ) {
    var length = el.length
    if( length > 0 ) {
      return true
    } else {
      return false
    }
  }
  
  
  window.render_primary_menu_lis = function() {
    if ( $('#primary-menu li').length == 0 ) {
      var primary_menu_lis = new window.PrimaryLis();
      primary_menu_lis.fetch({
        success: function() {
          primary_menu_lis.each( function( primary_li ) {
            var primary_menu_li_view = new window.PrimaryLiView( { model: primary_li } );
            primary_menu_li_view.render();
          });
        }
      });
    }
  }
  
  window.remove_writing_nav = function() {
    if( $('#writing-nav').length > 0 ) {
      $('#writing-nav').animate(
        {
          'top': '-50%'
        },
        500,
        function() {
          $(this).remove();
        }
      );
    }
  }

});