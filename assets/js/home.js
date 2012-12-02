$(document).ready( function() {
  
  window.HomeView = Backbone.View.extend({
    
    tagName: 'div',
    
    className: 'content',
    
    id: 'home-content',
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
    
    render: function() {
      var template = _.template( $('#home-template').html(), {} );
      $('#content-wrapper').append( $(this.el).html( template ) );
      $(this.el).fadeIn( 1000, window.render_primary_menu_lis );
    }
  });
});