/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentListView = require('collections/agents'),
        AgentView = require('views/agent-view'),
        AgentDetailsViewTemplate = require('text!../templates/agent-details-view.html'),
        EventManager = require('vent'),
        AgentDetailsView;

    AgentDetailsView = Backbone.View.extend({

        template: _.template(AgentDetailsViewTemplate),
        tagName: 'article',
        className: 'agent-detail',

        events: {},

        initialize: function() {
            this.model.fetch();
            this.listenTo(this.model, 'all', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return AgentDetailsView;
});
