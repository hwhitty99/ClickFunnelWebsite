jQuery(document).ready(function ($) {
  setTimeout(function () {
    $('.trans--grow').addClass('grow');
  }, 275);
});

$(function () {
  'use strict';
  var $page = $('#main'),
    options = {
      debug: true,
      prefetch: true,
      cacheLength: 2,
      onStart: {
        duration: 250, // Duration of our animation
        render: function ($container) {
          // Add your CSS animation reversing class
          $container.addClass('is-exiting');
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');
          // Inject the new content
          $container.html($newContent);
          setTimeout(function () {
            $('.trans--grow').addClass('grow');
          }, 275);
        }
      }
    },
    smoothState = $page.smoothState(options).data('smoothState');
});
