import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(!process.contextIsolated){
  throw new Error('The preload script should be context isolated');
}

try {
  contextBridge.exposeInMainWorld('context', {
    //ToDo: Add your own API here
  })
}
catch (e) {
  console.error(e);
}
