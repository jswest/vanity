/*
 * THE WRITING MODELS
 * These models control the creation of the writing markup
 * along with its behavior.
 */
$(document).ready( function() {
  
  /*
   * THE WRITING BLURBS
   * These models control the very tail end of the writing behavior.
   *
   */
  // WRITING BLURB
  window.WritingBlurb = Backbone.Model.extend({
    
    url: function() {
      return 'writing/' + this.attributes.slug;
    }
    
  });
  
  window.WritingBlurbView = Backbone.View.extend({
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
    
    render: function() {
      var template = _.template( $('#writing-blurb-template').html(), this.model.toJSON() );
      var callback = function() {
        $('.content').html( template ).fadeIn( 250 );        
      }
      if( $('.content').children().length > 0 ) {
        $('.content').fadeOut( 250, function() {
          $('.content').children().hide( callback );
        });
      } else {
        callback();
      }
    }
      
  });
  
  
  
  /*
   * THE WRITING LIS
   * These models control the creation and behavior of the writing <li>s
   */
  // WRITING LI MODEL
  window.WritingLi = Backbone.Model.extend({
    
  });
  
  // WRITING LI COLLECTION
  window.WritingLis = Backbone.Collection.extend({
    
    model: window.WritingLi,
    
    url: 'writing_menu/'
  
  });
  
  // WRITING LI VIEW
  window.WritingLiView = Backbone.View.extend({
    
    tagName: 'li',
    
    events: {
      "mouseover": "mouseover_event",
      "mouseout": "mouseout_event",
      "click": "click_event"
    },
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
    
    render: function() {
      $('ul#writing-menu').append( $(this.el) );
      return this;
    },
    
    mouseover_event: function() {
      that = this
      var callback = function() {
        $('.content').append( '<h2 class="helper-text">' + that.model.get( 'title' ) + '</h1>' ).fadeIn(250);        
      }
      if( this.model.get( 'title' ) != $('.content h1').text() ) {
        if( $('.content').children().length > 0 ) {
          $('.content').fadeOut( 250, function() {
            $('.content').children().hide();
            callback();
          });
        } else {
          callback();
        }
      }
    },
    
    mouseout_event: function() {
      $('h2.helper-text').fadeOut( 250, function() {
        $('h2.helper-text').remove();
        $('.content').children().fadeIn( 250 );
      });
      
    },
    
    click_event: function() {
      if( !window.exists( $('.blurb-wrapper') ) ) {
        Backbone.history.navigate( '#writing/' + this.model.get( 'slug' ), true );
      } else if( $('.blurb-wrapper h1').text() != this.model.get( 'title' ) ) {
        Backbone.history.navigate( '#writing/' + this.model.get( 'slug' ), true );
      } else {
        return;
      }
    }
    
  });
  
  
  
  /*
   * THE WRITING NAV
   * This model controls the creation and behavior of the writing nav
   */
  window.WritingNavView = Backbone.View.extend({
    
    tagName: 'nav',
    
    id: 'writing-nav',
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
    
    render: function() {
      var that = this
      var template = _.template( $('#writing-nav-template').html(), {} );
      var writing_lis = new window.WritingLis();
      writing_lis.fetch({
        success: function() {
          if( $('ul#writing-menu').length == 0 ) {
            $('body').append( $(that.el).html( template ) );
            writing_menu_height = ( writing_lis.length * 80 ) + ( ( writing_lis.length - 1 ) * 35 )
            $('ul#writing-menu').css({
              'margin-top': -( writing_menu_height / 2 ) - 35,
              'height': writing_menu_height
            });
          }
          writing_lis.each( function( writing_li ) {
            var writing_li_view = new WritingLiView( { model: writing_li } );
            writing_li_view.render();
          });
          $(that.el).animate(
            {
              'top': '50%'
            },
            250
          );
          
        }
      });
      return this;
    }
    
  });
  
  
   
  /*
   * THE WRITING CONTENT
   * This model controls the creation and behavior of the main writing area.
   * It also spawns the writing nav and the writing <li>s.
   */
  // VIEW
  window.WritingView = Backbone.View.extend({
  
    tagName: 'div',
  
    className: 'content',
  
    id: 'writing-content',
  
    initialize: function() {
      _.bindAll( this, 'render' );
    },
  
    render: function() {
      if( $('#writing-content').length == 0 ) {
        $('.content').fadeOut( 250 ).remove();
      }
      $('#content-wrapper').html( $(this.el) );
      $(this.el).show();
      var writing_nav_view = new window.WritingNavView();
      writing_nav_view.render();
      return this;
    }
  
  });
  
});