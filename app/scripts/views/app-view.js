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

            this.listenTo(this.collection, 'all', this.render);
        },

        render: function () {
            var emptyMsgClass = '.empty-msg',
                $listPanel;

            this.$el.append(this.addAgentFormView.render().el);
            this.$el.append(this.agentsListView.render().el);

            // wrap list view in a 'section' tag for semantic and styling purposes
            this.agentsListView.$el.wrap('<section class="list-panel"></section>');

            $listPanel = this.$el.find('.list-panel');

            // add listing header to list view
            $listPanel.prepend(this.listHeaderView.render().el);
            $listPanel.append('<p class="empty-msg hidden">Please add an agent.</p>');

            if (this.$el.find('.agent').length < 1) {
                $listPanel.find(emptyMsgClass).removeClass('hidden');
            } else {
                $listPanel.find(emptyMsgClass).addClass('hidden');
            }

            EventManager.on('agent:removed', function() {
                if (this.$el.find('.agent').length < 1) {
                    $listPanel.find(emptyMsgClass).removeClass('hidden');
                }
            }, this);

            EventManager.on('agent:added', function() {
                $listPanel.find(emptyMsgClass).addClass('hidden');
            }, this);

            return this;
        }
    });

    return AppView;
});
