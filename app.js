const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    frame: true, // Hide/unhide the default title bar
  });
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
});
