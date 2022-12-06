const { contextBridge, ipcRenderer } = require('electron');

const electronAPI = {
    openInBrowser: (url) => {
        ipcRenderer.invoke('open-in-browser', url)
    }
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);