'use strict';

requirejs.config({
    urlArgs: '_=' + Date.now(),
    paths: {
        'jquery': '../../node_modules/jquery/dist/jquery.min'
    }
});

define(['jquery'], function ($) {

});
