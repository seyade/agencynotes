/**
 * @name AgentDetailsView
 * @description display an agent full details
 * @param {function} require
 */
define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        AgentDetailsViewTemplate = require('text!../templates/agent-details-view.html'),
        EventManager = require('vent'),
        AgentDetailsView;

    AgentDetailsView = Backbone.View.extend({

        tagName: 'article',
        className: 'agent-detail',
        template: _.template(AgentDetailsViewTemplate),

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
