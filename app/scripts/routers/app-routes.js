/**
 * @name AppRoutes
 * @description navigate through the agencynotes app
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        //Agent = require('models/agent'),
        AgentsCollection = require('collections/agents'),
        //AgentView = require('views/agent-view'),
        AgentsListView = require('views/agents-list-view'),
        //AddAgentFormView = require('views/add-agent-form-view'),
        AgentDetailsView = require('views/agent-details-view'),
        AppView = require('views/app-view'),
        //EventManager = require('vent'),
        AppRoutes;

    AppRoutes = Backbone.Router.extend({

        $main: $('.main'),

        routes: {
            '': 'index',
            '#': 'index',
            'home': 'index',
            'agents': 'showAgentsList',
            'agents/:id': 'showAgentDetails',
        },

        initialize: function() {
            this.agentsCollection = new AgentsCollection();

        },

        index: function() {

            this.appView = new AppView({ collection: this.agentsCollection });
            this.$main.html(this.appView.render().el);
        },

        showAgentsList: function() {
            this.agentsListView = new AgentsListView({ collection: this.agentsCollection });
            this.changeView(this.agentsListView);
        },

        showAgentDetails: function(id) {
            this.agentsCollection.fetch();
            this.agentDetailsView = new AgentDetailsView({ model: this.agentsCollection.get(id) });
            this.changeView(this.agentDetailsView);
        },

        changeView: function(view) {
            if(this.currentView) {
                if (this.currentView === view) {
                    return;
                }

                this.currentView.remove();
            }

            this.$main.html(view.render().el);
            this.currentView = view;
        }
    });

    return AppRoutes;

});
