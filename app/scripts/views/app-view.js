/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentsList = require('collections/agents'),
        AgentView = require('views/agent-view'),
        AgentsListView = require('views/agents-list-view'),
        AddAgentFormView = require('views/add-agent-form-view'),
        EventManager = require('vent'),
        AppView;

    AppView = Backbone.View.extend({

        className: 'app-view clearfix',

        events: {},

        initialize: function () {
            this.agentsList = new AgentsList;
            this.addAgentFormView = new AddAgentFormView({ collection: this.agentsList });
            this.agentsListView = new AgentsListView({ collection: this.agentsList });
        },

        render: function () {
            this.$el.append(this.addAgentFormView.render().el);
            this.$el.append(this.agentsListView.render().el);
            this.agentsListView.$el.wrap('<section class="list-panel"></section>');

            return this;
        }
    });

    return AppView;
});
