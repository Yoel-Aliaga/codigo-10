//* Crear componente
// * extends significa herencia de HTMLElement
class Card extends HTMLElement {
    constructor() {
        super();
        this.class; //= "card p-3 mt-3 bg-primary text-white";
        // this.classname= "";
        this.status;
    }

    // * Observa los atributos 
    static get observedAttributes() {
        return ["class", "classname", "status"];
    }

    // * Se llamara cada vez que se intente cambiar un atributo
    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "class":
                this.class = newValue;
                break;

            case "status":
                this.status = newValue;
                break;
        }

        // this[nameAtr] = newValue;

    }

    // * Va a ser instanciado cada vez que se agrega a nuestro DOM
    // * Cuando este elemento sea llamado a renderizarse 
    connectedCallback() {
        // al elemento resultante modificar su classlist

        this.innerHTML +=`
        <div class="card mt-3 p-3 bg-primary text-white">
                Hellou
            </div>
        `

        this.innerHTML = `
        <div class="tasks_container">
            <div class="tasks">Hellou : ${inputTask.value}</div>
            <div class="controls">
                <button type="button" class="btn btn-success" id="btnDone">D</button>
                <button type="button" class="btn btn-danger" id="btnDelete" onclick=deleteTask()>E</button>
                <button type="button" class="btn btn-warning" id="btnEdit"onclick=editTask>Ed</button>        
            </div>
        </div>       
        
        `;
        // this.status = `${this.status}`;

        // switch (this.status) {
        //     case 1:
        //         this.className = "card mt-3 p-3 bg-primary text-white ";
        //         break;

        //     case 2:
        //         this.className = "card mt-3 p-3 bg-warning text-white ";

        //         break;

        //     case 3:
        //         this.className = "card mt-3 p-3 bg-danger";

        //         break;


        // };

        // this.style.backgroundColor= bg-primary;
        // if (this.class){
        //     const classList = this.class.split(" ");
        //     classList.forEach((xclass)=> {
        //         this.classList.add(xclass);
        //     });
        // }

        // if (this.classname){
        //     const classList = this.classname.split(" ");
        //     classList.forEach((xclass)=> {
        //         this.classList.add(xclass);
        //     });
        // }
    }

    // * Va a ser instanciado cadfa vez que se elimina del DOM
    // * cuando sea llamado a quitarse de la renderizacion
    disconnectedCallback() {
    }
}
customElements.define("my-card", Card);


