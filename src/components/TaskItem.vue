<template>
  <div class="taskItem">
    <li>
      <b>{{ taskData.title }} </b>
      <br />
      <i> {{ taskData.description }}</i>
      <br />
      <div class="buttonsItem">
        <button id="complete-btn" @click="completeTask">complete</button>
        <button id="uncomplete-btn" @click="uncompleteTask">uncomplete</button>
        <button @click="childDelete">delete</button>
        <button @click="showHideEdit" class="edit">edit</button>
      </div>
      <div class="sectionEditable hide">
        <input id="edit-title" name="title" />
        <input id="edit-description" name="description" />
        <button @click="childUpdate">update</button>
      </div>
    </li>
  </div>
</template>

<script setup>
const emit = defineEmits(["childDelete", "childUpdate"]);

const props = defineProps(["taskData"]);

//creamos una función para pasarle nuestro evento particular (custom) al padre para poder habilitar el delete de una tarea en particular. Esto se hace mediante un emit.

function childDelete() {
  emit("childDelete", props.taskData);
}
//he creado un condicional que permite esconder o mostrar la seccion para actualizar los datos a través de un botón.
function showHideEdit(event) {
  let current = event.target;
  let nextSibling = current.nextSibling;
  //cuando pulsamos el botón se ejecuta la funcion, esta comprueba el div contiene los datos de edicion tiene la clase hide definida, si no la tiene, la añade, si la tiene. la quita.
  if (nextSibling.classList.contains("hide")) {
    nextSibling.classList.remove("hide");
  } else {
    nextSibling.classList.add("hide");
  }
}
//creamos una función que saca los recursos para poder actualizar una tarea que hay en el task.js.
function childUpdate() {
  props.taskData.title = document.getElementById("edit-title").value;
  //Añado la descripción como un dato más para actualizar.
  props.taskData.description =
    document.getElementById("edit-description").value;
  emit("childUpdate", props.taskData);
}

function completeTask() {
  props.taskData.is_complete = true;
  emit("childUpdate", props.taskData);
}
function uncompleteTask() {
  props.taskData.is_complete = false;
  emit("childUpdate", props.taskData);
}
</script>

<style>
li {
  margin: 1rem 0rem;
}
<!--cr-- > .hide {
  display: none;
}

.taskItem {
  margin: 0 auto;
  background-color: white;
  width: 100%;
}

.buttonsItem {
  border: 3px solid red;
  height: 40px;
  text-align: right;
  /*padding: 30px;*/
  color: grey;
  text-transform: uppercase;
}
</style>
