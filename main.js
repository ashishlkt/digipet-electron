// Electron main process
const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        frame :false,
        transparent: true,
        alwaysOnTop: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'), 
        }

});
win.loadFile('index.html');
win.setAlwaysOnTop(true, 'screen-saver');
}
app.whenReady().then(()=> {
    createWindow();
});
