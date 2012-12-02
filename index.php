<?php

/*
 * SET IT UP
 */
require 'Slim/Slim.php';
require 'data/data.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(
  array(
    'debug' => true
  )
);


/*
 * DEFINE THOSE ROUTES
 */
// Root (GET)
$app->get( '/', function() use( $app ) {
  $app->render(
    '/index.php',
    array(),
    200
  );
});
// Primary Menu (/primary_menu/)
$app->get( '/primary_menu/', function() use( $app, $menu ) {
  header( "Content-Type: application/json" );
  echo json_encode( $menu );  
});
// About (/about/)
$app->get( '/about/', function() use( $app, $about ) {
  header( "Content-Type: application/json" );
  echo json_encode( $about );
});
// Writing (/writing/)
$app->get( '/writing_menu/', function() use( $app, $writing_menu ) {
  header( "Content-Type: application/json" );
  echo json_encode( $writing_menu );
});
// Blurb (/writing/:slug)
$app->get( '/writing/:slug', function( $slug ) use( $app, $writing_menu ) {
  $blurb = array();
  foreach( $writing_menu as $item ) {
    if( $item['slug'] == $slug ) {
      $blurb = $item;
    }
  }
  header( "Content-Type: application/json" );
  echo json_encode( $blurb );
});
// Design (/design/)
$app->get( '/design/', function() use( $app, $design_menu ) {
  header( "Content-Type: application/json" );
  echo json_encode( $design_menu );
});
// Design subpages (/design/:slug)
$app->get( '/design/:slug', function( $slug ) use( $app, $design_menu ) {
  $item = array();
  foreach( $design_menu as $menu_item ) {
    if( $menu_item['slug'] && $menu_item['slug'] == $slug ) {
      $item = $menu_item;
    }
  }
  header( "Content-Type: application/json");
  echo json_encode( $item );
});


/*
 * DO IT!
 */
$app->run();
