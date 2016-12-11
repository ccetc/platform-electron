'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {

    mainWindow = new BrowserWindow({
        frame: true,
        height: 600,
        width: 800
    });

    mainWindow.loadUrl('http://107.20.250.100/admin?electron=true');

});
