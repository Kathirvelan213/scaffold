import { app, ipcMain, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = path.dirname(__filename$1);
function createWindow() {
  const win = new BrowserWindow({
    width: 1e3,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname$1, "preload.js")
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname$1, "../dist/index.html"));
  }
}
app.whenReady().then(createWindow);
ipcMain.handle("ping", async () => {
  return "pong from electron";
});
