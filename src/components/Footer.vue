<template>
  <footer>
    <div id="pie" class="left-footer">
      <h1>made by Greta</h1>
      <p>Ironhack st 56, 46352</p>
      <br />Spain
    </div>
    <div class="right-footer">
      <p>SERVICES</p>
      <p>ABOUT</p>
      <p>LEGAL</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: purple;
}
#pie {
  height: 4rem;
  justify-content: center;
  align-items: flex-end;
}
.right-footer {
  text-align: right;
  margin-right: 50px;
}

#container {
  padding-top: 20px;
  margin-top: 20px;
  width: 100vw;
  color: white;
  background-color: #292354;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
