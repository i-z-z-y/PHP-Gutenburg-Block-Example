<?php
/**
 * Plugin Name: Code Blog Block
 * Plugin URI: https://codez.local
 * Description: code-blog-block
 * Version: 1.0 AlPHA
 * Author: iSRAEL CHEN
 * Author URI: https://codez.local
 * License: Copyright 2023
 * License URI: https://codez.local
 * Text Domain: code-blog-block
 *
 * @package code-blog-block
 */

 define( 'MY_PLUGIN_URL', plugins_url( 'code-blog-block' ) );
 define( 'MY_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );

  function mytemplate() {

    // Block front end styles.
    wp_register_style(
       'my-block-front-end-styles',
       MY_PLUGIN_URL . '/style.css',
       array( 'wp-edit-blocks' ),
       filemtime( MY_PLUGIN_DIR_PATH . 'style.css' )
    );

    // Block editor styles.
    wp_register_style(
       'my-block-editor-styles',
       MY_PLUGIN_URL . '/editor.css',
       array( 'wp-edit-blocks' ),
       filemtime( MY_PLUGIN_DIR_PATH . 'editor.css' )
    );

    // Block Editor Script.
    wp_register_script(
       'my-block-editor-js',
       MY_PLUGIN_URL . '/template.js',
       array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
       filemtime( MY_PLUGIN_DIR_PATH . 'template.js' ),
       true
    );

   register_block_type( 'my-theme/template', array(
     'style'         => 'my-block-front-end-styles',
     'editor_style'  => 'my-block-editor-styles',
     'editor_script' => 'my-block-editor-js',
   ) );
  }

  // Register the My Template block.
  add_action( 'init', 'mytemplate' );
