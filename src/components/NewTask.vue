<template>
  <div id="createTask">
    <h2>Create task</h2>
    <br />
    <div class="inputs">
      <input
        v-model="taskTitle"
        type="text"
        id="newTaskTitle"
        placeholder="Title"
      /><br /><br />
      <input
        v-model="taskDesc"
        type="text"
        id="newTaskDesc"
        placeholder="Description"
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
// async function uploadTask() {
//   const { data, error } = await supabase.from("tasks").insert([
//     {
//       user_id: "5fa3d22c-892b-44fc-a3a6-efc7e5503032",
//       title: taskTitle.value,
//       description: taskDesc.value,
//       is_complete: false,
//     },
//   ]);
// }
// constant to save a variable that define the custom event that will be emitted to the homeView
// constant to save a variable that holds the value of the title input field of the new task
// constant to save a variable that holds the value of the description input field of the new task
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
// const constant to save a variable that holds the value of the error message
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
</script>

<style>
html {
  background-color: white;
  color: grey;
}

h2 {
  color: #9a9a9a;
}

#createTask {
  margin: 0 auto;
  background-color: #f1e9f6;
  border-radius: 10px;
  padding: 4em;
  margin-right: px;
  text-align: center;
  border: 5px dashed lightgrey;
}

button {
  background-color: #410a82;
  color: white;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}

input {
  margin: 0 auto;
  height: 40px;
  padding: 0px;
  width: 100%;
  color: lightgrey;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
}
</style>
