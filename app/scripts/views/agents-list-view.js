/**
 * @name AgentsListView
 * @description display a list of agents
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentView = require('views/agent-view'),
        AgentDetailsView = require('views/agent-details-view'),
        EventManager = require('vent'),
        AgentsListView;

    AgentsListView = Backbone.View.extend({
        tagName: 'ul',
        // added extra classes from Bootstrap
        className: 'agents-list list-unstyled list-group',

        initialize: function () {
            this.listenTo(this.collection, 'add', this.addAgent);

            // to reset the collection in the view
            this.collection.fetch({ reset: true });
        },

        render: function () {
            this.collection.each(this.addAgent, this);
            return this;
        },

        addAgent: function(agent) {
            var agentView = new AgentView({ model: agent });
            this.$el.append(agentView.render().el);
        }
    });

    return AgentsListView;
});
