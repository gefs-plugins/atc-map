'use strict';

const electron = require('electron');
const url = require('url');

const { app, BrowserWindow } = electron;

// Creates application
app.on('ready', () => {
    new BrowserWindow().loadURL(url.format({
        pathname: 'source/map.html',
        protocol: 'file:',
        slashes: true
    }));
});
