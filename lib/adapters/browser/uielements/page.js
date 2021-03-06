/*!
 * Joshfire Framework 0.9.0
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Wed Jun 29 16:25:37 2011
 */


Joshfire.define(['../../../uielements/page', 'joshfire/class', 'joshfire/vendor/underscore', 'joshfire/vendor/jquery'], function(Panel, Class, _, $) {
  /**
  * @class
  * @name adapters_browser_uielements_page
  * @extends {uielements_panel}
  */
  return Class(Panel,
      /**
      * @lends adapters_browser_uielements_page.prototype
      */
      {
        /**
        *
        * @ignore
        */
        enhance: function() {

        },
        /**
        * View from which start transitioning
        * @function
        * @param {Object} view
        */
        transitionFrom: function(view) {
          // Scroll back to top if already scrolled a lot
          if (Math.max($('body').scrollTop(), $('html').scrollTop()) > 100) {
            $('html, body').animate({'scrollTop': 0}); //, 'slow');
          }
        },
        /**
        * @function
        * @param {string} destination
        * @param {string} code
        */
        redirect: function(destination,code) {
          if (this.app.navigation) {
            if (!this.app.navigation.followLink(destination)) {
              return;
            }
          }
          window.location = destination;
        }

      });
});
