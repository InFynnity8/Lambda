import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electronAPI", {
    on: (channel, callback) => {
        ipcRenderer.on(channel, callback);
    },
    send: (channel, args) => {
        ipcRenderer.send(channel, args);
    }
});

// contextBridge.exposeInMainWorld('electron', {
//     getUsers: () => ipcRenderer.invoke('get-users'),
//     addUser: (user) => ipcRenderer.invoke('add-user', user),
//     getUserPDFs: (userId) => ipcRenderer.invoke('get-user-pdfs', userId),
//     uploadPDF: (userId, filePath) => ipcRenderer.invoke('upload-pdf', userId, filePath),
// }); 