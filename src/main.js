const { BrowserWindow, app, Menu } = require("electron");

const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

/**
 * 
 * browserWindow, la panatalla padre
 * width, anchura pantalla modal 
 * height altura pantalla modal
 * url, url del código a cargar en el proceso renderer
 */
function createFormModal(browserWindow, width, height, url) {
  let winForm = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    parent: browserWindow,
    modal: true
  })
  winForm.loadURL(url)
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/renderers/index.html`);

  // createFormModal(mainWindow, 400, 350, `file://${__dirname}/renderers/form_create_filestorage.html`)
  // createFormModal(mainWindow, 400, 350, `file://${__dirname}/renderers/form_load_filestorage.html`)
  // createFormModal(mainWindow, 500, 550, `file://${__dirname}/renderers/form_add_keyregister.html`)
  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Menú
  let templateMenu = require('./menu.js').templateMenu
  Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
