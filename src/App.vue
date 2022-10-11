<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";
import { ref } from "vue";
const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
onMounted(async () => {
  const appReady = ref(null);
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      appReady.value = true;
      router.push({ path: "/auth/login" });
    } else {
      // continue to dashboard
      // router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<template id="fondo">
  <div id="background" class="content">
    <router-view />
  </div>
</template>

<style>
@import url("http://fonts.googleapis.com/css?family=Lato:400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
html {
  font-family: "Lato";
}
/*#fondo {
  background-color: red;
  border: 3px solid blue;
}
#background {
  color: lightgray;
  border: 3px solid green;
  margin: 0 auto;
  text-align: center;
  width: 1200px;
  background-color: blueviolet;
}*/
.wu-text {
  color: black;
}
.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
