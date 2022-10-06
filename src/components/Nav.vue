<template>
  <div id="nav">
    <h1><a href="">Tasks List</a></h1>
    <ul>
      <li>Welcome Back {{ userFetch.email }}</li>
      <form @submit.prevent="signOut">
        <li><button type="submit">Log Out</button></li>
      </form>
    </ul>
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
// constant that saves the user email and cleans out the @client from the user
// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style scoped>
#nav {
  border: 3px solid yellow;
}
</style>
