cursos.unshift("React Native");
console.log("unshift", cursos);
cursos[1].unshift("Nextjs");
console.log("adsadsa", cursos);

console.log("Pop", "Elimina el ultimo elemento");
const valorEliminado = cursos.pop();
console.log(valorEliminado);
console.log(cursos);

console.log("Shift", "Eliminar el primero el elemento");
const valorEliminado2 = cursos.shift();
console.log(valorEliminado2);
console.log(cursos);

// For es un bucle es una estructura que se repite n veces
// Sintaxys de for

// cursos.length => retorna la cantidad de elementos
console.log("=================");
const newCursos = ["Angular", "React", "Vue", "Svelt"];
// console.log(newCursos[0]); // Angular
// i++
// i += 1
for (let i = 0; i < newCursos.length; i++) {
  // El i funge de indice
  // primera vuelta i = 0
  // segunda vuelta i = 1
  // Este console.log se hace 4 veces
  console.log(newCursos[i]);
}

console.log("=======forEach=========");
// Como seria la forma moderna
// Foreach va a recorrer el arreglo pero no retorna ni un valor
// necesita de una funcion que obtenga su valor en cada vuelta
newCursos.forEach(function (element, indice) {
  console.log(element, indice); // Angular, 0
});