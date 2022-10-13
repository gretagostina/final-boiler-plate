<template>
  <div class="presentation">
    <h1>Add a new task</h1>
    <p>
      keep your life organized, prepare for a trip? Start here. Today's date is
      {{ today }}
      {{ somedate }}
    </p>
  </div>
  <div id="createTask">
    <h2>Create task</h2>
    <br />
    <div class="inputs">
      <input
        v-model="taskTitle"
        type="text"
        id="newTaskTitle"
        placeholder="add a task title"
        onfocus="this.value=''"
      /><br /><br />
      <input
        v-model="taskDesc"
        type="text"
        id="newTaskDesc"
        onfocus="this.value=''"
        placeholder="add a task description"
      /><br /><br />
    </div>
    <div class="botones">
      <button @click.prevent="uploadTask">Create</button>
      <h3 v-if="errorBool">{{ emptyString }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useTaskStore } from "../stores/task.js";
import { useRouter } from "vue-router";
const emit = defineEmits(["childNewTask", "childGetTasks"]);
let taskTitle = ref("");
let taskDesc = ref("");
let errorBool = ref(false);
let errorMsg = ref("No se ha podido añadir la tarea.");
const emptyString = ref("");

function childGetTasks() {
  emit("childGetTasks");
}

//Definicion de la tienda de tareas dentro de una variable para utilizar dentro de este archivo de una manera mas limpia.
async function uploadTask() {
  if (taskTitle.value === "") {
    errorBool.value = true;
    emptyString.value = "Title is required.";
    setTimeout(() => {
      errorBool.value = false;
    }, 1000);
  } else {
    try {
      await useTaskStore().addTask(taskTitle.value, taskDesc.value);
      childGetTasks();
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;

    emit("childNewTask", taskTitle.value, taskDesc.value);
    taskTitle.value = "";
    taskDesc.value = "";
    console.log(taskTitle.value);
  }
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;
//✔ async function uploadTask() {
//✔   const { data, error } = await supabase.from("tasks").insert([
//     {
//       user_id: "5fa3d22c-892b-44fc-a3a6-efc7e5503032",
//       title: taskTitle.value,
//       description: taskDesc.value,
//       is_complete: false,
//     },
//   ]);
// }
// ✔constant to save a variable that define the custom event that will be emitted to the homeView
// ✔constant to save a variable that holds the value of the title input field of the new task
// ✔constant to save a variable that holds the value of the description input field of the new task
// ✔constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
// ✔const constant to save a variable that holds the value of the error message
// ✔arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
</script>

<style>
h2 {
  color: #9a9a9a;
}
.presentation {
  margin-top: 100px;
  margin-bottom: 100px;
}

#createTask {
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  padding: 4em;
  padding-top: 6em;
  padding-bottom: 6em;
  text-align: center;
  border: 5px dashed #b8aec2;
}

button {
  background-color: #e1e1e1;
  color: black;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  width: 100%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.012), 0 41.8px 33.4px rgba(0, 0, 0, 0.046),
    0 100px 80px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
button:hover {
  background-color: #aeaeae;
}

input {
  margin: 0 auto;
  height: 40px;
  padding: 0px;
  width: 100%;
  color: black;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  padding-left: 15px;
  margin-left: -8px;
  background-color: #fff47c;
  border-radius: 10px;
}
</style>
