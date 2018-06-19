/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.bioCuration = {
    attach: function (context, settings) {
      // Add is-active to parent li
      jQuery("a.is-active").closest("li.has-dropdown").find("> a").addClass("is-active");

      // Click on sponsors.
      jQuery(".sponsor-wrapper").click(function() {
        window.location = jQuery(this).find("a:first-child").attr("href");
      });

      // Show menu after page load.
      jQuery("#main-menu-wrapper").removeClass("hidden");
    }
  };

})(jQuery, Drupal);


