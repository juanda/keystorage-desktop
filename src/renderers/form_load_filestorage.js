const fs = require("fs");
const { dialog } = require("electron").remote;
const { ipcRenderer } = require("electron");
const { Crypter } = require("../modules/Crypter");
const { KeyStorage } = require("../modules/KeyStorage");

document.getElementById("btn_cancel").onclick = () => {
  window.close()
}

document.getElementById("btn_select_file").onclick = e => {
  e.preventDefault();
  dialog.showOpenDialog(
    {
      title: "Selecciona el almacén de claves"
    },
    filename => {
      document.getElementById("file").value = filename.toString()
    }
  )
}

document.getElementById("btn_ok").onclick = () => {
  let key = document.getElementById("key").value
  let file = document.getElementById("file").value

  let crypter = new Crypter()

  let keyStorage = new KeyStorage(crypter, file)
  keyStorage.openDataFile(key)
  
  window.close()
};
