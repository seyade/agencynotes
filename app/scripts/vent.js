/**
 * @name EventManager
 * @description event object to trigger and listen to events throughout the app
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        EventManager;

    EventManager = _.extend({}, Backbone.Events);

    return EventManager;
});
