let templateMenu = [
  {
    label: "Almacenes",
    submenu: [
      {
        label: "crear",
        accelerator: "CommandOrControl+N",
        click() {
          menuEmitter.emit("create-keystorage");
        }
      },
      {
        label: "cargar",
        accelerator: "CommandOrControl+L",
        click() {
          menuEmitter.emit("load-keystorage");
        }
      },
      {
        label: "salir",
        role: "quit"
      }
    ]
  },
  {
    label: "Acciones",
    submenu: [
      {
        label: "Añadir clave",
        accelerator: "CommandOrControl+B",
        click() {
          menuEmitter.emit("add-keyregister");
        }
      },
      {
        label: "Editar clave",
        accelerator: "CommandOrControl+E",
        click() {
          menuEmitter.emit("edit-keyregister");
        }
      },
      {
        label: "Eliminar clave",
        accelerator: "CommandOrControl+D",
        click() {
          menuEmitter.emit("delete-keyregister");
        }
      }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  }
];

module.exports.templateMenu = templateMenu;
