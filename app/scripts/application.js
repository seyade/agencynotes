/**
 * @name Application
 * @description main entry point to application. Settings can be added to Application object.
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        AppRoutes = require('routers/app-routes');
    
    // entry point object.
    var Application = {

        start: function() {
            var app = new AppRoutes();
            Backbone.history.start();
        }
    };

    return Application;
});
