// En Ts podemos colocar el tipo de dato de cada variable
let nombre: string = "pepito";

nombre = "juanita ";
// En esta caso estamos usando a al clase String para convertus el number a string

nombre = String (1);

nombre = "1234"

//Creando una interface para nuestro objeto !!! importante poner ; al final
// Creas la interface como tipo de dato de objetos
interface Usuario{
    id: number;
    name: string ; 
    last_name: string; 
    is_Admin:boolean;
    //La interrogacion hace que el campo sea opcional , en el id:1 se requiere y en el id:2 no se requiere
    phone_number?:number,
}

//Aqui defines a user como tipo User del interface
const user:Usuario = {
    id:1,
    name:"Yoel",
    last_name:"Aliaga",
    is_Admin:true
}


const users: Usuario[] = [
    {
        id:1,
        name:"Yoel",
        last_name:"Aliaga",
        is_Admin:false,
        phone_number:99999,
    },
    {
        id:1,
        name:"Luisa",
        last_name:"Zapata",
        is_Admin:false
    }
]

function agregarUsuario(user:Usuario){
    user.id = users.length + 1;
    //Como agregamos un elemento  a un array
    users.push(user)
}

agregarUsuario({
    id:1,
    name:"Juancito",
    last_name:"Perez",
    is_Admin:true
})

console.log(users);

//Retorna un tipo un string
function saludar(nombre:string):string{
    return `Hola como estas me llano ${nombre}`
}

function sumar(n1:number, n2:number):string{
    return `La suma es ${n1 + n2}`;
}

function esMayorEdad(edad:number):boolean{
    //no es necesario poner true o false el operador de comparacion devuelve un boolean
    //return edad > 18 ? true: false;
    return edad > 18;
}

console.log(esMayorEdad(20));
console.log(esMayorEdad(14));


//Es lo mismo que el anterios pero mas resumido con un arrow funcion 
const esMayorEdad2 = (edad:number):boolean => edad >18;
console.log(esMayorEdad(14));

// En Ts existe un tipo de dato llamado any 
// any puede ser cualquier tipo de dato

let nombreCompleto: any = "Yoel Aliaga";

nombreCompleto = true;
nombreCompleto = 1;
nombreCompleto = {id:1}

// Perdemos el tipado
// Solo se debe usar en casos extraños donde 
// no sepamos el tipo de dato
// Es RECOMENDABLE no usarlo