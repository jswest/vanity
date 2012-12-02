/*
 * THE ABOUT MODELS
 * These models control the creation of the about markup
 * along with its behavior.
 */
$(document).ready( function() {
 
  // MODEL
  window.About = Backbone.Model.extend({
    
    url: 'about/'
  
  });

  // VIEW
  window.AboutView = Backbone.View.extend({
  
    tagName: 'div',
  
    className: 'content',
  
    id: 'about-content',
  
    initialize: function() {
      _.bindAll( this, 'render' );
    },
  
    render: function() {
      if( $('#about-content').length == 0 ) {
        $('.content').fadeOut( 250 ).remove();
      }
      var template = _.template( $('#about-template').html(), this.model.toJSON() );
      $('#content-wrapper').html( $(this.el).html( template ) );
      $(this.el).fadeIn( 250 );
      return this;
    }
  
  });

});