/**
 * @name AppRoutes
 * @description navigate through the agencynotes app
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentsCollection = require('collections/agents'),
        AgentView = require('views/agent-view'),
        AgentsListView = require('views/agents-list-view'),
        AddAgentFormView = require('views/add-agent-form-view'),
        AgentDetailsView = require('views/agent-details-view'),
        AppView = require('views/app-view'),
        EventManager = require('vent'),
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
            this.agentsCollection.fetch();
        },

        index: function() {

            /*this.agentsCollection = new AgentsCollection([
                {
                    id: 1,
                    name: 'Lewis Cocker',
                    agency: 'Square One',
                    tel: '0207 479 7048',
                    email: 'lewis.cocker@squareone.com',
                    calldate: '4 June 2014',
                    role: 'Front-end Developer @ &pound;450 per day',
                    other: 'na',
                    status: 1
                },
                {
                    id: 2,
                    name: 'Craig Mullen',
                    agency: 'Oliver Bernards',
                    tel: '0207 479 7048',
                    email: 'craig.mullen@oliverbernards.co.uk',
                    calldate: '19 May 2014',
                    role: 'Front-end Developer @ &pound;380 per day for Salmon',
                    other: 'For Salmon, in Hammersmith not Watford',
                    status: 0
                },
                {
                    id: 3,
                    name: 'Matt Doe',
                    agency: 'PCR Digital',
                    tel: '0207 479 7048',
                    email: 'matthew.doe@pcrdigital.com',
                    calldate: '4 June 2014',
                    role: 'Front-end Developer @ &pound;450 per day',
                    other: 'For Apple, looking for FE dev keen on SEO too',
                    status: 0
                },
                {
                    id: 4,
                    name: 'Jack Adam',
                    agency: 'Marcus Donald',
                    tel: '0203 328 0400',
                    email: 'jadams@marcusdonald.com',
                    calldate: '2 June 2014',
                    role: 'Front-end Developer Backbone/Bootstrap @ &pound;450 per day',
                    other: 'For Apple, looking for FE dev keen on SEO too',
                    status: 1
                }
            ]);*/

            this.appView = new AppView({ collection: this.agentsCollection });
            this.$main.html(this.appView.render().el);
        },

        showAgentsList: function() {
            this.agentsListView = new AgentsListView({ collection: this.agentsCollection });
            this.changeView(this.agentsListView);
        },

        showAgentDetails: function(id) {
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
