// Reglas de nuestra clase

/* 
* 1) Que debemos recibir 3 parametros cuiando instanciamos esta
* 2) Tenemos 3 estados
*  - status 1 = create
*  - status 2 = done
*  - status 3 = delete
* 3) Tendremos una funcion para poder renderizar nuestra tarea
* 4) Tendremos una funcion para actualizar la tarea
* 5) Tendremos una funcion para eliminar nuestra tarea
* CRUD => CREATE - READ - UPDATE - DELETE
*
*/

// ? Esta es la forma en la que instanciamos a la clase Task
// * const task = new Task("Tarea1", new Date(), 1);

// !! Importante : Una clase siempre inicia en mayusdcula

// ? Para poder usar import tenemos que decir que nuestra clase sea exportable
// ? con la palabra export antes de la clase

// * EJEMPLO INSTANCIAR UNA CLASE

/*
*  class Persona {
*    constructor(nombre) {
*      this.nombre = nombre;
*    }
*  }
*  
*  const persona = new Persona("Pepe");
*  
*  console.log(persona.nombre);
*/

// ? EXPORT PARA PODER IMPORTAR ESTA CLASE DESDE OTRO ARCHIVO

class Task {
    // Estos parametros
    constructor(id, name, date, status) {
      this._id = id;
      this._name = name;
      this._date = date;
      this._status = status;
    }
  
    static destroyRender(id) {
      const element = document.querySelector(`#task-${id}`);
      element.remove();
    }
  
    // Es una clase no hace falta usar la palabra function
    render() {
      return `
        <div id="task-${this._id}" class="item__task">
          <input type="checkbox" />
          <h6>${this._name}</h6>
          <button>
            <img src="./images/edit.png" width="15" alt="" />
          </button>
          <button onclick="destroy(${this._id})">
            <img src="./images/delete.png" width="15" alt="" />
          </button>
        </div>
        `;
    }
  }