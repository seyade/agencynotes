/*global define*/

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
        className: 'agents-list list-unstyled list-group',

        initialize: function () {
            this.listenTo(this.collection, 'add', this.addAgent);
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
