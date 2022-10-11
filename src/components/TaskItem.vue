<template>
  <div class="taskItem">
    <div class="title">
      <b>{{ taskData.title }}</b>
    </div>
    <br />
    <div class="description">
      <i> {{ taskData.description }}</i>
    </div>
    <br />
    <div class="buttonsItem">
      <button id="complete-btn" @click="completeTask">
        <i class="fa fa-check"></i>
      </button>
      <button id="uncomplete-btn" @click="uncompleteTask">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button @click="childDelete">
        <i class="fa fa-trash"></i>
      </button>
      <button @click="showHideEdit" class="edit">
        <i class="fa fa-edit"></i>
      </button>
    </div>
    <div class="sectionEditable hide">
      <div class="title-edit">
        <input id="edit-title" name="title" v-model="props.taskData.title" />
      </div>
      <div class="edit-desc">
        <input
          id="edit-description"
          name="description"
          v-model="props.taskData.description"
        />
      </div>
      <button class="btn-update" @click="childUpdate">Update</button>
    </div>
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
  let sectionEditable = current.parentElement.parentElement.nextSibling;
  //cuando pulsamos el botón se ejecuta la funcion, esta comprueba el div contiene los datos de edicion tiene la clase hide definida, si no la tiene, la añade, si la tiene. la quita.
  if (sectionEditable.classList.contains("hide")) {
    sectionEditable.classList.remove("hide");
  } else {
    sectionEditable.classList.add("hide");
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
/*li {
  margin: 1rem 0rem;
}*/
.hide {
  display: none;
}
h2 {
  font-size: 35px;
}
.taskItem {
  background-color: #e2b4bd;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.taskItem li {
  list-style: none;
}

.buttonsItem {
  text-align: center;
  margin-bottom: 20px;
  color: grey;
}

.sectionEditable {
  color: lightgrey;
}
.title {
  padding-top: 20px;
  font-size: 25px;
  text-transform: uppercase;
}
.description {
  text-align: justify;
}
.buttonsItem button {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 18px;
  border-radius: 20px;
}
.buttonsItem button i {
  padding-top: 20px;
  font-size: 25px;
  margin-left: -12px;
  margin-top: -32px;
  position: absolute;
}
.buttonsItem button i.fa-trash {
  margin-left: -10px;
}
.btn-update {
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
