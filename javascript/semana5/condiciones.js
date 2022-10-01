function validarComoIrAEstudiar(hora, dinero) {
    if (hora === "6:00 am") {
      // Me levante temprano. puedo tomar desayuno
      console.log("Tomo desayuno");
      if (dinero > 20) {
        console.log("Tomo colectivo");
      } else if (dinero > 10) {
        console.log("Tomo el corredor");
      } else {
        console.log("Tomo el chino");
      }
      console.log("Llego a estudiar");
    } else if (hora === "7:00 am") {
      console.log("NO Tomo desayuno");
      // Si tengo dinero
      if (dinero) {
        console.log("Tomo el corredor");
      }
      console.log("Llego a estudiar");
    } else {
      console.log("NO Tomo desayuno");
      console.log("Tomo colectivo");
      console.log("Llego a estudiar");
    }
  }
  
  // casi 1
  console.log("Caso 1");
  validarComoIrAEstudiar("6:00 am", 10);
  console.log("Caso 2");
  validarComoIrAEstudiar("6:00 am", 15);
  console.log("Caso 3");
  validarComoIrAEstudiar("8:00 am", 15);

  // Arreglos: Son un conjunto de datos
// como es la sintaxys de arreglos

const nombres = ["Pepe", "Juan", "Luisa", "Maria", "Carlos"];

// cuantos datos hay en nombres: Podemos que el arreglo nombres tiene 5 elementos
// Tiene 5 elementos
// Hay una cosa llamada indice: Posicion de cada elemento y tiene como inicio el 0
console.log(nombres[0]); // Pepe
console.log(nombres[3]); // Maria
console.log(nombres[5]); // undefined

const edades = [18, 20, 22, 12];

console.log("Edades 1", edades);

const booleanos = [true, false, true, false];

// Funciones de array
// Funcion para agregar un elemento push
edades.push(34);
edades.push("Pepe");
edades.push(true);
edades.push(["Juan", "Luis"]);
console.log("Edades 2", edades);
console.log(edades[7][2]); // ["Juan, "Luis"]

// arrays multiples
const cursos = [
  ["React", "Angular", "Svelt", "Vue"],
  ["Laravel", "Sinfony", "Cake", ["poo", "java", "php", ["js", "css", "html"]]],
  ["Spring", "JHipster"],
];

console.log(cursos[1][3][3][1]);

cursos.unshift("React Native");
console.log("unshift", cursos);
cursos[1].unshift("Nextjs");
console.log("adsadsa", cursos);

