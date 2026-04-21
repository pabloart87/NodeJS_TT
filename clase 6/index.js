function asyncTask(callback) {
    setTimeout(() => {
        console.log("Tarea asincronica completada")
        callback()
    }, 3000);
}

console.log("inicio de la tarea")
asyncTask(() => {
    console.log("fin de la tarea")
});
