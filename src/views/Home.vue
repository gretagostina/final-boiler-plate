<template>
  <Suspense>
    <Nav />
  </Suspense>
  <NewTask @childGetTasks="getTasks" />
  <div class="cards">
    <TaskItem
      v-for="(miSuperTareaHechaPorGreta, index) in tasks"
      :key="index"
      v-bind:taskData="miSuperTareaHechaPorGreta"
      @childDelete="deleteTask"
      @childUpdate="updateTask"
    />
    <p id="totalTasks"></p>
  </div>
  <Footer />
</template>
<script setup>
// Carga librerías
import { ref } from "vue";
import Nav from "./../components/Nav.vue";
import Footer from "../components/Footer.vue";
import NewTask from "../components/NewTask.vue";
import { useTaskStore } from "../stores/task";
import TaskItem from "../components/TaskItem.vue";

// Template de funcion asyncronica
// async function nombreDeFuncion() {}
//declarar una variable en formato array para guardar tareas
let tasks = ref([]);

//Definicion de la tienda de tareas dentro de una variable para utilizar dentro de este archivo de una manera mas limpia.
let taskStore = useTaskStore();

//vamos a hace una función para conseguir las tareas del supabase
async function getTasks() {
  tasks.value = await taskStore.fetchTasks();
  let totalTasks = tasks.value.length;
  /* document.getElementById("totalTasks").innerHTML =
    "Total tareas: " + totalTasks;*/
}
getTasks();

//Creamos una función async para borrar la tarea
async function deleteTask(task) {
  await taskStore.deleteTask(task.id);
  getTasks();
}
// Actualizar tarea
async function updateTask(task) {
  await taskStore.updateTask(
    task.id,
    task.title,
    task.description,
    task.is_complete
  );
  getTasks();
}
</script>

<style>
#app {
  /* width: 100%;*/
  max-width: none;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  grid-gap: 25px;
  margin-bottom: 100px;
}

@media (max-width: 850px) {
  #app {
    max-width: none;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
  }
}

@media (max-width: 550px) {
  #app {
    /* width: 100%;*/
    max-width: none;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
  }
}
</style>

<!-- 
**Hints**
1. ref() is used here!
2. (NewTask, TaskItem, Footer, Nav) components are used here! 
3. Tasks are going to be contained in an array here!
4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will contain the
 tasks value which be use to store the fetchTasks method which lives inside the userTaskStore. This function needs to be called within the
  setUp script in order to run within the first instance of this component lifecycle.
5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this async function 
will call the taskStore that calls the addTask function from the store that pushes the info of the task to the backEnd. This is possible by
 passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask Component. 
7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem component. TaskItem
 will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show either a text or an icon to display 
 if the task is completed or not completed. 1 customEevent for removing/deleting the task out of the array. 1 customEvent for editing the task 
 title and description. This function needs to call the function mentioned on hint4.
7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument will be used to 
define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the value that checks wether this task is_complete. 1 of 
this constants will take of calling the id of this specific task in order to call the right id. 
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to call the deleteTaskmethod which will 
take the param/argument's id in order to delete the task. This function needs to call the function mentioned on hint4. 
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to take in 2 constants. 1 constant will 
take in the param/argument newValue. 1 constant will be used to get the param/argument oldValue id. These 2 constants will be sent to the backend via the useTaskStore 
which holds an editTask method. This function needs to call the function mentioned on hint4.
-->
