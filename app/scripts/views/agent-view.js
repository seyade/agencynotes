/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentViewTemplate = require('text!../templates/agent-view.html'),
        AgentView;

    AgentView = Backbone.View.extend({

        template: _.template(AgentViewTemplate),
        tagName: 'li',
        className: 'list-group-item',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return AgentView;
});
