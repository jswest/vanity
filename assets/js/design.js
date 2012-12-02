/*
 * THE DESIGN MODELS
 * These models control the creation of the design markup
 * along with its behavior.
 */
$(document).ready( function() {
  
  /*
   * THE DESIGN LIGHTBOX
   * Displays a large image of the clicked thumbnail.
   */
  window.DesignLightbox = Backbone.Model.extend({

  });
  
  window.DesignLightboxView = Backbone.View.extend({
    
    tagName: 'div',
    
    className: 'content',
    
    id: 'design-lightbox-content',
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
    
    render: function() {
      var template = _.template( $('#design-lightbox-template').html(), this.model.toJSON() );
      $('#content-wrapper').html( $(this.el).html( template ) );
      $(this.el).fadeIn( 250 );
      return this;
    }
    
  });
  
  /*
   * THE DESIGN SUBPAGE
   * Displays the blurb for the design.
   */
  //
  // MODEL
  window.DesignSubpage = Backbone.Model.extend({
    url: function() {
      return 'design/' + this.get( 'slug' );
    }
  });
  
  // VIEW
  window.DesignSubpageView = Backbone.View.extend({
    
    tagName: 'div',
  
    className: 'content',
    
    id: 'design-subpage-content',
    
    events: {
      'click .design-subpage-thumbnail': 'thumbnail_click_event'
    },
    
    initialize: function() {
      _.bindAll( this, 'render', 'thumbnail_click_event' );
    },
    
    render: function() {
      /*
      if( $('#design-subpage-content').length == 0 ) {
        $('.content').fadeOut( 250 ).remove();
      }
      */
      var template = _.template( $('#design-subpage-template').html(), this.model.toJSON() );
      $('#content-wrapper').html( $(this.el).html( template ) );
      $(this.el).fadeIn( 250 );
      return this;
    },
    
    thumbnail_click_event: function( e ) {
      var thumbnail = $(e.currentTarget).data( 'thumbnail' );
      Backbone.history.navigate( '#design/' + this.model.get( 'slug' ) + '/' + thumbnail, true );
    }
  
  });
  
  
  /*
   * THE DESIGN MENU LI
   * Displays the <li> for each of the design items.
   */
  // MODEL
  window.DesignMenuLi = Backbone.Model.extend({
    
  });

  // COLLECTION
  window.DesignMenuLis = Backbone.Collection.extend({
    
    url: 'design/',
    
    model: window.DesignMenuLi
    
  });
  
  // VIEW
  window.DesignMenuLiView = Backbone.View.extend({
    
    tagName: 'li',
    
    events: {
      "mouseover": "mouseover_event",
      "mouseout": "mouseout_event",
      "click": "click_event"
    },
    
    initialize: function() {
      _.bindAll( this, 'render', 'mouseover_event', 'mouseout_event' );
    },
    
    render: function() {
      var thumbnails = this.model.get( 'thumbnails' );
      var rando = Math.floor( Math.random() * thumbnails.length );
      var template = _.template( $('#design-li-template').html(), { 'thumb': thumbnails[rando] } );
      $('ul#design-menu').append( $(this.el).html( template ) );
      return this;
    },
    
    mouseover_event: function() {
      $(this.el).find( '.image-thumb-gloss' ).hide();
    },
    
    mouseout_event: function() {
      $(this.el).find( '.image-thumb-gloss' ).fadeIn( 500 );
    },
    
    click_event: function() {
      Backbone.history.navigate( "#design/" + this.model.get( 'slug' ), true );
    }
    
  });
  
  
  
  
  /*
   * THE DESIGN NAV
   * This is the wrapper for the design menu.
   */
  // VIEW
  window.DesignNavView = Backbone.View.extend({
    
    tagName: 'nav',
    
    id: 'design-nav',
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
    
    render: function() {
      $('#content-wrapper').append( '<img id="ajax-loader" src="assets/images/ajax-loader.gif">' );
      var that = this
      var template = _.template( $('#design-nav-template').html(), {} );
      $('.content').html( $(this.el).html( template ) );
      var design_menu_lis = new window.DesignMenuLis();
      design_menu_lis.fetch({
        success: function() {
          var x = 0;
          var y = 0;
          design_menu_lis.each( function( design_menu_li ) {
            var design_menu_li_view = new window.DesignMenuLiView( { model: design_menu_li } );
            design_menu_li_view.render();
            $(design_menu_li_view.el).css({
              'top': y * 125,
              'left': x * 125
            })
            x++;
            if( x >= 4 ){
              x = 0;
              y++;
            }
          });
          var loaded = 0;
          var indices = new Array();
          for( n = 0; n <= design_menu_lis.length - 1; n++ ) {
            indices.push( n );
          }
          $('#design-menu li').each( function( index ) {
            $(this).find( 'img' ).load( function() {
              loaded++;
              if( loaded == design_menu_lis.length - 1 ) {
                $('#ajax-loader').remove();
                render_recursively = function( indices ) {
                  if( indices.length > 0 ) {
                    var rando = Math.floor( Math.random() * indices.length );
                    var index = indices[rando];
                    indices.splice( rando, 1 );
                    $('#design-menu li').eq( index ).fadeIn( 100, function() {
                      $(this).find('.image-thumb-gloss').fadeIn( 500 );
                      render_recursively( indices );
                    });
                  }
                }
                render_recursively( indices );
              }
            });
          });
        }
      });
      return this;
    }
    
  });
  
  /*
   * THE DESIGN CONTENT
   * This is the most upper level view for the design views.
   */
  // VIEW
  window.DesignView = Backbone.View.extend({
    
    tagName: 'div',
  
    className: 'content',
  
    id: 'design-content',
  
    events: {
      'mouseover': 'mouseover_event',
      'mouseout': 'mouseout_event',
      'click': 'click_event'
    },
    
    initialize: function() {
      _.bindAll( this, 'render' );
    },
  
    render: function() {
      if( !window.exists( $('#design-content') ) ) {
        $('.content').fadeOut( 250 ).remove();
      }
      $('#content-wrapper').html( $(this.el) );
      $(this.el).show();
      var design_nav_view = new window.DesignNavView();
      design_nav_view.render();
      return this;
    },
    
    mouseover_event: function() {
      $(this.el).find( 'h1#design-title' ).hide();
    },
    
    mouseout_event: function() {
      $(this.el).find( 'h1#design-title' ).fadeIn( 250 );
    },
    
    click_event: function() {
      $(this.el).find( 'h1#design-title' ).hide().remove();
    }
    
  });
  
});