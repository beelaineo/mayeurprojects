<article <?php post_class('row'); ?>>
	<div class="col-sm-5 col-sm-offset-1">
  <header>
    <h3 class="entry-title"><?php the_title(); ?></h3>
    <?php get_template_part('templates/entry-meta'); ?>
  </header>
  <div class="entry-content">
    <?php the_content(); ?>
  </div>
	</div>
	
	<div class="col-xs-5">
		<?php the_post_thumbnail( 'w800crop' ); ?>
	</div>
</article>