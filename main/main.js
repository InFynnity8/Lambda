import { app, BrowserWindow, ipcMain  } from "electron";
import serve from "electron-serve";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import db from './database.js' ;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
process.env.APP_USER_DATA = app.getPath('userData');


const appServe = app.isPackaged ? serve({
  directory: path.join(__dirname, "../out")
}) : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600, 
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://-");
    });
  } else {
    win.loadURL("http://localhost:3000");
    // win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
}); 