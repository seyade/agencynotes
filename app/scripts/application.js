define(function (require) {

    var _ = require('underscore'),
        Backbone = require('backbone'),
        AppRoutes = require('routers/app-routes');

    var Application = {
        start: function() {
            var app = new AppRoutes;
            Backbone.history.start();
        }
    };

    return Application;
});
