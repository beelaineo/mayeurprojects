<div class="col-sm-6 info content">
<?php the_content(); ?>
</div>

<div class="col-sm-5 col-sm-offset-1 info gallery">
	
	<div class="contact-section">
		<?php 
		$id=348; 
		$post = get_post($id); 
		$content = apply_filters('the_content', $post->post_content); 
		echo $content;  
		wp_reset_postdata();
		?>
	</div>
	
	<?php $args = array(
	      'id' => '267'
		  );
		  echo render_view( $args ); ?>
	
	<div class="extra-section">
	<?php 
	$id=350; 
	$post = get_post($id); 
	$content = apply_filters('the_content', $post->post_content); 
	echo $content;  
	wp_reset_postdata();
	?>
	</div>
</div>


