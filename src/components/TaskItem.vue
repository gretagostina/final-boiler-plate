<template>
  <div class="taskItem">
    <li>
      <b>{{ taskData.title }} </b>
      <br />
      <i> {{ taskData.description }}</i>
      <br />
      <button @click="childDelete">delete</button>
      <!--<button class="red_btn">X-Delete</button> -->
    </li>
  </div>
</template>

<script setup>
const emit = defineEmits(["childDelete"]);

const props = defineProps(["taskData"]);

//creamos una función para pasarle nuestro evento particular (custom) al padre para poder habilitar el delete de una tarea en particular. Esto se hace mediante un emit.

function childDelete() {
  //emit("nombreEmit" , los valores del prop)
  emit("childDelete", props.taskData);
}
</script>

<style>
li {
  margin: 1rem 0rem;
}
</style>
