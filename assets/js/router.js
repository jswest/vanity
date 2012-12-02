$(document).ready( function() {
  
  window.AppRouter = Backbone.Router.extend({
  
    routes: {
      '': 'home',
      'about': 'about',
      'writing': 'writing',
      'writing/:slug': 'writing_blurb',
      'design': 'design',
      'design/:slug': 'design_blurb',
      'design/:slug/:thumbnail': 'design_thumbnail'
    },
    
    home: function() {
      
      $('.content').fadeOut( 250 ).remove();
      home = new window.HomeView();
      home.render();
    },
    
    about: function() {
      window.render_primary_menu_lis();
      window.remove_writing_nav();
      var about = new window.About();
      about.fetch({
        success: function() {
          var about_view = new window.AboutView( { model: about } );
          about_view.render();
        }
      });
    },
    
    writing: function() {
      window.render_primary_menu_lis();
      var writing_view = new window.WritingView();
      writing_view.render();
    },
    
    writing_blurb: function( param ) {
      window.render_primary_menu_lis();
      if( !$('.content').length > 0 ) {
        var writing_view = new window.WritingView();
        writing_view.render();
      }
      var blurb = new window.WritingBlurb( { slug: param } );
      blurb.fetch({
        success: function() {
          var blurb_view = new window.WritingBlurbView( { model: blurb } );
          blurb_view.render();
        }
      });
    },
    
    design: function() {
      window.render_primary_menu_lis();
      window.remove_writing_nav();
      var design_view = new window.DesignView();
      design_view.render();
    },
    
    design_blurb: function( param ) {
      window.render_primary_menu_lis();
      window.remove_writing_nav();
      var design_subpage = new window.DesignSubpage({ slug: param });
      design_subpage.fetch({
        success: function() {
          var design_subpage_view = new window.DesignSubpageView({ model: design_subpage });
          design_subpage_view.render();          
        }
      });
    },
    
    design_thumbnail: function( slug_param, thumbnail_param ) {
      window.render_primary_menu_lis();
      window.remove_writing_nav();
      var design_subpage = new window.DesignSubpage({ slug: slug_param });
      design_subpage.fetch({
        success: function() {
          thumbnails = design_subpage.get( 'images' );
          var design_lightbox = new window.DesignLightbox({
            slug: slug_param,
            thumbnail: thumbnails[thumbnail_param]
          });
          var design_lightbox_view = new window.DesignLightboxView({ model: design_lightbox });
          design_lightbox_view.render();
        }
      });
    }
  
  });

  // Do it, England.
  var router = new AppRouter();
  Backbone.history.start();

});
