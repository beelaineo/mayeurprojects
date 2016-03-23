<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  
  <div class ="col-sm-6 col-sm-offset-3 front-content">
  <?php get_template_part('templates/content', 'page'); ?>
  </div>
<?php endwhile; ?>
