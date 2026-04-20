const persona = {
     nombre: "Juan",
     saludar: function(){
            console.log("Hola, mi nombre es " + this.nombre);
     }  
}

persona.saludar(); // Output: Hola, mi nombre es Juan