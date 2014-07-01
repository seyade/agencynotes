/* Event Aggregator */

define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        EventManager;

    EventManager = _.extend({}, Backbone.Events);

    return EventManager;
});
