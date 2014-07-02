/**
 * @name AppView
 * @description Main app view to insert subviews
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        AgentsList = require('collections/agents'),
        AgentsListView = require('views/agents-list-view'),
        AddAgentFormView = require('views/add-agent-form-view'),
        AgentsListHeaderView = require('views/agents-list-header-view'),
        EventManager = require('vent'),
        AppView;

    AppView = Backbone.View.extend({

        className: 'app-view clearfix',

        events: {},

        initialize: function () {
            this.agentsList = new AgentsList;
            this.addAgentFormView = new AddAgentFormView({ collection: this.agentsList });
            this.agentsListView = new AgentsListView({ collection: this.agentsList });
            this.listHeaderView = new AgentsListHeaderView({ collection: this.agentsList });
        },

        render: function () {
            this.$el.append(this.addAgentFormView.render().el);
            this.$el.append(this.agentsListView.render().el);

            // wrap list view in a 'section' tag for semantic and styling purposes
            this.agentsListView.$el.wrap('<section class="list-panel"></section>');

            // add listing header to list view
            this.$el.find('.list-panel').prepend(this.listHeaderView.render().el);

            //this.$el.find('.list-panel').append('<p class="empty-msg hidden">Please add an agent.</p>');

            return this;
        }
    });

    return AppView;
});
