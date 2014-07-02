/**
 * @name AgentsListHeaderView
 * @description list header with dynamic badge displaying number of agents
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        AgentsListHeaderTemplate = require('text!../templates/agents-list-header-view.html'),
        AgentsListHeaderView;

    AgentsListHeaderView = Backbone.View.extend({

        tagName: 'header',
        className: 'list-header',
        template: _.template(AgentsListHeaderTemplate),

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'all', this.render);
        },

        render: function () {
            this.$el.html(this.template());

            this.$el.find('.notification-badge').text(this.collection.length);
            return this;
        }
    });

    return AgentsListHeaderView;
});
