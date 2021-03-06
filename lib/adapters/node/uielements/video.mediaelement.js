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


Joshfire.define(['joshfire/uielements/panel', 'joshfire/class', 'joshfire/vendor/underscore'], function(Panel, Class, _) {

  return Class(Panel, {

    getInnerHtml: function() {

      if (this.data && this.data.url) {
        return "<video src='" + this.data.url + "' />";
      }
      return '';

    }

  });

});
