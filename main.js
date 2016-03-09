
var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width : 200,
    height : 70,
    transparent : true,
    frame : false,
    resizable : false
  });
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
