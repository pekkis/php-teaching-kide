<?php
/**
 * Plugin Name:       Dubbels Image
 * Description:       Dubbels Image Block
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dubbels-image
 *
 * @package Pekkis
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function pekkis_dubbels_image_block_init() {
	register_block_type( __DIR__ . '/build/dubbels-image' );
}
add_action( 'init', 'pekkis_dubbels_image_block_init' );
