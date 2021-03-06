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


Joshfire.define(['../../../uielements/page', 'joshfire/class'], function(Page, Class) {
  return Class(Page, {

    redirect: function(destination,code) {
      this.app.setHttpHeader('Location', destination);
      this.app.setHttpStatus(code || 302);

      return "<a href='" + destination + "'>See " + destination + '</a>';
    }

  });
});
