/**
 * @name AgentView
 * @description display an agent in a list, with few details
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentViewTemplate = require('text!../templates/agent-view.html'),
        EventManager = require('vent'),
        AgentView;

    AgentView = Backbone.View.extend({

        template: _.template(AgentViewTemplate),
        tagName: 'li',
        className: 'agent list-group-item',

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.removeAgent);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        events: {
            'click .delete-btn': 'deleteAgent'
        },

        deleteAgent: function(e) {
            e.preventDefault();
            this.model.destroy();
        },

        removeAgent: function() {
            this.remove();
            EventManager.trigger('agent:removed');
        }
    });

    return AgentView;
});
