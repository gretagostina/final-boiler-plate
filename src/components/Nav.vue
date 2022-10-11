<template>
  <div id="nav">
    <div class="nav-title">
      <h1><a href="">Tasks List</a></h1>
    </div>
    <div class="nav-user">
      <p>Welcome Back {{ userFetch.email }}</p>
      <form @submit.prevent="signOut">
        <button type="submit">Log Out</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
// Error Message
const errorMsg = ref("");
const redirect = useRouter();
const userFetch = await useUserStore().fetchUser();
let position = userFetch.email.search("@");
userFetch.email = userFetch.email.slice(0, position);
const signOut = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signOut();
    // redirects user to the login
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
//constant to save a variable that will hold the use router method
// constant to save a variable that will get the user from store with a computed function imported from vue
// constant that calls user email from the useUSerStore
// TODO: Falta quitar la extensión del email "@gmail.com" del usuario.
// constant that saves the user email and cleans out the @client from the user
// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style scoped>
#nav {
  margin: 0 auto;
  background-color: #a3d9ff;
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}
.nav-title {
  padding-left: 20px;
  padding-top: 5px;
}
.nav-user {
  text-align: right;
}
.nav-user p {
  font-size: 18px;
}
.nav-user button {
  background-color: #da3e52;
  color: #a3d9ff;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}

#nav .ul .li {
  border: 3px solid brown;
}

html {
  margin: 30px;
  border: 3px solid red;
}
</style>
