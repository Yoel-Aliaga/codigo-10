const tasksList = document.querySelector("#tasks_list");
const inputTask = document.querySelector("#input_task");

// inputTask.addEventListener("keyup", function (e) {
// 	if (e.key === "Enter" && this.value !== "") {
// 		const task = new Task(this.value);
// 		tasksList.append(task);
// 		console.log(task);

// 		this.value = "";
// 		this.focus();
// 	}
// });

const task = new Task(inputTask.value);




const btnAdd = document.querySelector("#button-addon2");

btnAdd.addEventListener("click",function(){

if ((inputTask.value) === "" ){
	alert("El campo de texto no debe estar vacio")
	// console.log(task);
	inputTask.focus();
	return;
}

tasksList.innerHTML += `<my-card status="1"></my-card>`

	inputTask.value="";
	inputTask.focus();

	

}) ;

function deleteTask(){
// alert("eliminado")
tasksList.innerHTML =  `<my-card status="3"></my-card>`
};

function editTask(){
	// alert("eliminado")
	tasksList.innerHTML =  `<my-card status="2"></my-card>`
	};
	