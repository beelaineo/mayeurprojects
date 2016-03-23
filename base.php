<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?> prefix="og: http://ogp.me/ns#">
  <?php get_template_part('templates/head'); ?>
  
  <?php
	// Add custom taxonomies to the body class
	
	if ( is_singular('project')) :
	
	function tax_body_class($classes) {
	  global $post;
	  $tax_terms = get_the_terms( $post->ID, 'project-type' );
	  $tax_terms = wp_list_pluck($tax_terms,'slug');
	  $classes = array_merge($classes,$tax_terms);
	  return $classes;
	}
	add_filter('body_class','tax_body_class');
	
	endif;
  ?>
  
  <body <?php body_class(); ?>>
	  <div id="page" <?php body_class(); ?>>
    <!--[if IE]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>
    <div class="wrap container" role="document">
      <div class="content row">
        <main class="main">
          <?php include Wrapper\template_path(); ?>
        </main><!-- /.main -->
        <?php if (Setup\display_sidebar()) : ?>
          <aside class="sidebar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
      </div><!-- /.content -->
    <?php if ( is_page( array( 'info', 'residencies', 'artists' ) ) ) :
      get_template_part('templates/gradient-footer');
      endif; ?>
    </div><!-- /.wrap -->
    <?php
	  if ( !is_page( array( 'exhibitions', 'residencies', 'artists', 'chat' ) ) xor is_single() ) : ;
      do_action('get_footer');
      get_template_part('templates/footer');
      endif;
      wp_footer();
    ?>
      </div>
  </body>
</html>
