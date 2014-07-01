/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent = require('models/agent'),
        AgentView = require('views/agent-view'),
        AddFormTemplate = require('text!../templates/add-agent-form-view.html'),
        AddAgentFormView;

    AddAgentFormView = Backbone.View.extend({
        tagName: 'section',
        className: 'add-form-panel',
        template: _.template(AddFormTemplate),

        events: {
            'submit .add-agent-form': 'addAgentDetails'
        },

        addAgentDetails: function(e) {
            var formData = {
                id: this.$el.find('#id').val(),
                name: this.$el.find('#name').val(),
                agency: this.$el.find('#agency').val(),
                tel: this.$el.find('#tel').val(),
                email: this.$el.find('#email').val(),
                role: this.$el.find('#role').val(),
                other: this.$el.find('#other').val(),
                status: this.$el.find('#status').val()
            };

            e.preventDefault();

            this.collection.create(formData);
        },

        render: function() {
            this.$el.append(this.template());
            return this;
        }
    });

    return AddAgentFormView;
});
