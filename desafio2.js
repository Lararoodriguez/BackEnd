const fs = require('fs');

class Contenedor{
    crear() {
        fs.writeFile ('./productos.txt','Hola',(err,data)=>  {
            if(err) {console.log("Error")}   
            else{
              console.log("Funciona",data)
            }
        });
    }
}
let contenedor = new Contenedor();
contenedor.crear();

let personas =[{
    nombre: "Lara",
    apellido:"Rodriguez",
    id:1,
},
{
    nombre: "Juan",
    apellido:"Carlos",
    id:5
}
]

let miString = JSON.stringify(personas);

fs.writeFileSync('productos.txt', miString);