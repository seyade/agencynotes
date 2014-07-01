/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Agent;

    Agent = Backbone.Model.extend({

        defaults: {
            id: 0,
            name: 'anon',
            agency: 'Agency Anon',
            tel: '0207 479 7048',
            email: 'anon@sample.com',
            calldate: '1 January 2014',
            role: 'Front-end Developer @ £450 per day',
            other: 'For some client, looking for FE dev keen on SEO too',
            status: 0
        },

        dateFormat: function(modelDate) {
            var monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                pureDate = modelDate,
                callDate = pureDate.split(/[- :]/),
                callDateFormatted = new Date(callDate[0], callDate[1]-1, callDate[2], callDate[3], callDate[4], callDate[5]),
                month = monthsList[callDateFormatted.getMonth()],
                day = callDateFormatted.getDate(),
                year = callDateFormatted.getFullYear();

            return day + ' ' + month + ' ' + year;
        }
    });

    return Agent;
});
