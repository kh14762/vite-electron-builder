import {ipcRenderer} from 'electron';

export function toggle() {
  return ipcRenderer.invoke('dark-mode:toggle');
}

export function system() {
  return ipcRenderer.invoke('dark-mode:system');
}


