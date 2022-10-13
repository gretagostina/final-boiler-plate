<template>
  <footer>
    <div id="pie">
      <p>SERVICES</p>
      <p>ABOUT</p>
      <p>LEGAL</p>
      <p>Ironhack st 56, 46352</p>
      <p>Spain</p>
      <h1>made by Greta© 2022 TaskApp. All rights reserved</h1>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  background-color: #e1e1e1;
}
#pie {
  justify-content: center;
  align-items: flex-end;
  padding-left: 30px;
  text-align: center;
  padding-right: 30px;
  padding-bottom: 5px;
  padding-top: 5px;
}
#pie h1 {
  color: black;
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

@media (max-width: 850px) {
  #pie {
    height: 20rem;
  }
}
</style>
