/*
 * THE PRIMARY MENU MODELS
 * These models control the creation of the primary menu lis
 * along with the behaviour of the menu lis.
 */
$(document).ready( function() {
  
  // MODEL
  window.PrimaryLi = Backbone.Model.extend({

  });

  // COLLECTION
  window.PrimaryLis = Backbone.Collection.extend({

    model: window.PrimaryLi,
    
    url: 'primary_menu/'

  });

  // VIEW
  window.PrimaryLiView = Backbone.View.extend({
      
    tagName: 'li',
  
    events: {
      "mouseover": "mouseover_event",
      "mouseout": "mouseout_event",
      "click": "click_event"
    },
  
    initialize: function() {
      _.bindAll( this, 'render', 'mouseover_event', 'mouseout_event', 'click_event' );
    },

    render: function() {
      var template = _.template( $('#primary-li-template').html(), this.model.toJSON() );
      $('ul#primary-menu').append( $(this.el).html( template ) );
      $(this.el).fadeIn( 250 );
      return this;
    },
  
    mouseover_event: function() {
      var that = this;
      $('.content').fadeOut( 250, function() {
        $('.content').children().hide();
        $('.content').append( '<h1 class="helper-text">' + that.model.get( 'name' ) + '</h1>' ).fadeIn( 250 );
      });
    },
  
    mouseout_event: function() {
      $('h1.helper-text').fadeOut( 250, function() {
        $('h1.helper-text').remove();
        $('.content').children().fadeIn( 250 );        
      });
    },
  
    page_displayed: 'home',
  
    click_event: function() {
      letter = this.model.get( 'letter' )
      if( letter == 'A' ) {
        Backbone.history.navigate( '#about', true );
      } else if( letter == 'D') {
        Backbone.history.navigate( '#design', true );
      } else if( letter == 'W' ) {
        Backbone.history.navigate( '#writing', true );
      } else if( letter == 'G' || letter == 'B' ) {
        window.location = this.model.get( 'url' );
      } else {
        return
      }
    }


  });

});