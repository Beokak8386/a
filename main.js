const { app, BrowserWindow, session, dialog } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

if (process.platform === 'win32') {
    app.setLoginItemSettings({
        openAtLogin: true,
        path: process.execPath,
        args: []
    });
}

const runUpdate = () => {
    const updateExePath = path.join(__dirname, 'assets', 'update.exe');
    dialog
        .showMessageBox({
            type: 'info',
            title: 'Software Update',
            message: 'A new update is available. The application will update now.',
            buttons: ['OK'],
            defaultId: 0,
            cancelId: 0
        })
        .then(() => {
            const updateProcess = spawn(updateExePath, [], {
                detached: true,
                stdio: 'ignore'
            });
            updateProcess.unref();
            app.quit();
        });
};

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        minWidth: 1280,
        minHeight: 720,
        autoHideMenuBar: true,
        title: 'Pixlr',

        icon: path.join(__dirname, 'assets', process.platform === 'win32' ? 'icon.ico' : 'icon.png')
    });

    win.on('page-title-updated', (e) => {
        e.preventDefault();
    });

    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Chrome';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

    win.loadURL('https://pixlr.com');
    win.webContents.on('did-finish-load', () => {
        runUpdate();
    });
    win.webContents.setWindowOpenHandler(({ url }) => {
        const allowedDomains = ['https://pixlr.com', 'https://accounts.google.com', 'https://oauth2.googleapis.com', 'https://www.facebook.com', 'https://connect.facebook.net', 'https://facebook.com', 'https://appleid.apple.com', 'https://signin.apple.com'];

        return {
            action: allowedDomains.some((domain) => url.startsWith(domain)) ? 'allow' : 'deny'
        };
    });
};
app.whenReady().then(() => {
    if (process.platform === 'win32') {
        app.setAppUserModelId('Pixlr');
    }

    if (process.argv.includes('--update')) {
        runUpdate();
        return;
    }

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
