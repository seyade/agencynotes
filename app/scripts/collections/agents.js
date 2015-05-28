/**
 * @name AgentsCollection
 * @description collection of model type: Agent
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Agent = require('models/agent'),
        Storage = require('backbonestorage'),
        AgentsCollection;

    AgentsCollection = Backbone.Collection.extend({

        model: Agent,

        localStorage: new Backbone.LocalStorage('agents')
    });

    return AgentsCollection;
});
