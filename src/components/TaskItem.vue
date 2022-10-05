<template>
  <div class="taskItem">
    <li>
      <b>{{ taskData.title }} </b>
      <br />
      <i> {{ taskData.description }}</i>
      <br />
      <button id="complete-btn" @click="completeTask">complete</button>
      <button id="uncomplete-btn" @click="uncompleteTask">uncomplete</button>
      <button @click="childDelete">delete</button>
      <button @click="showHideEdit" class="edit">edit</button>
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
  //emit("nombreEmit" , los valores del prop)
  emit("childDelete", props.taskData);
}

function showHideEdit(event) {
  let current = event.target;
  let nextSibling = current.nextSibling;
  if (nextSibling.classList.contains("hide")) {
    nextSibling.classList.remove("hide");
  } else {
    nextSibling.classList.add("hide");
  }
}

function childUpdate() {
  props.taskData.title = document.getElementById("edit-title").value;
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
.hide {
  display: none;
}
</style>
