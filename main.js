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

    mainWindow.loadUrl('http://192.168.0.3:8080/admin?electron=true');

});
