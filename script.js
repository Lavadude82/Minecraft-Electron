const { app, BrowserWindow } = require("electron");

app.on("ready", (e) => {
  const window = new BrowserWindow({
    show: false,
    fullscreenable: true,
    icon: "./icon.png",
    title: "Minecraft",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      zoomFactor: 1,
    },
  });
  window.once("ready-to-show", (e) => {
    window.show();
  });
  window.menuBarVisible = false;
  window.loadFile("./pages/home.html");
});

app.once("window-all-closed", (e) => {
  process.exit();
});
