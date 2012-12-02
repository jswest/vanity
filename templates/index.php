<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>John West</title>
    <link rel="stylesheet" type="text/css" media="all" href="./assets/css/fonts.css">
    <link rel="stylesheet" type="text/css" media="all" href="./assets/css/style.css">
    <script src="./assets/js/jquery.js" type="text/javascript"></script>
    <script src="./assets/js/underscore.js" type="text/javascript"></script>
    <script src="./assets/js/backbone.js" type="text/javascript"></script>
    <script src="./assets/js/app.js" type="text/javascript"></script>
    <script src="./assets/js/home.js" type="text/javascript"></script>
    <script src="./assets/js/primary_menu.js" type="text/javascript"></script>
    <script src="./assets/js/about.js" type="text/javascript"></script>
    <script src="./assets/js/writing.js" type="text/javascript"></script>
    <script src="./assets/js/design.js" type="text/javascript"></script>
    <script src="./assets/js/router.js" type="text/javascript"></script>
  </head>
  <body>
    
    <!-- templates -->
    <script id="primary-li-template" type="text/template">
      <%= letter %>
    </script>
    <script id="about-template" type="text/template">
      <h1><%= title %></h1>
      <p><%= body %></p>
    </script>
    <script id="home-template" type="text/template">
      <h1 class="name" id="john">John</h1>
      <h1 class="name" id="west">West</h1>
    </script>
    <script id="writing-nav-template" type="text/template">
      <ul id="writing-menu">
      </ul>
    </script>
    <script id="writing-blurb-template" type="text/template">
      <div class="blurb-wrapper">
        <h1><a href="<%= url %>"><%= title %></a></h1>
        <p><%= blurb %>.. <a href="<%= url %>">[Read more]</a></p>
      </div>
    </script>
    <script id="design-nav-template" type="text/template">
      <h1 id="design-title">Design</h1>
      <ul id="design-menu">
      </ul>
    </script>
    <script id="design-li-template" type="text/template">
      <div class="image-thumb-gloss"></div>
      <img class="thumb" src="<%= thumb %>">
    </script>
    <script id="design-subpage-template" type="text/template">
      <h1 class="x"><a href="#design">X</a></h1>
      <% if( url ) { %>
        <h1 id="design-subpage-title"><a href="<%= url %>"><%= name %></a></h1>
      <% } else { %>
        <h1 id="design-subpage-title"><%= name %></h1>
      <% } %>
      <p id="design-subpage-blurb"><%= blurb %></p>
      <ul id="design-subpage-thumnail-menu">
        <% for( i = 0; i < thumbnails.length; i++ ) { %>
          <li class="design-subpage-thumbnail" data-thumbnail="<%= i %>">
            <img src="<%= thumbnails[i] %>">
          </li>
        <% } %>
      </ul>
    </script>
    <script id="design-lightbox-template" type="text/template">
      <h1 class="x"><a href="#design/<%= slug %>">X</a></h1>
      <img class="lightboxed-img" src="<%= thumbnail %>">
    </script>
    <!-- end template -->
    

    <div id="page">
      <div id="content-wrapper">
      </div>
      <nav id="primary-nav">
        <ul id="primary-menu">
        </ul>
      </nav>
    </div>
  </body>
</html>