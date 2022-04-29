const { app, BrowserWindow, Menu } = require('electron');
Menu.setApplicationMenu(false)

function createWindow () {
  let win = new BrowserWindow({
    width: 500,
    height: 500,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./index.html')
}

app.on('ready', createWindow);
