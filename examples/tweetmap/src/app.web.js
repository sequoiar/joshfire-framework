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

Joshfire.define(['./app', 'joshfire/class', 'joshfire/vendor/jquery'], function(App, Class, jQuery) {
  return Class(App, {
    setup: function(callback) {
      this.__super(callback);
      Joshfire.require(['public/js/jquery.lettering-0.6.1.min'], function(PluginLettering) {
        jQuery('h1').lettering();
      });
    }
  });
});