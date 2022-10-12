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
  <section class="top-nav hamburger">
    <h1><a href="">Tasks List</a></h1>
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>
    <ul class="menu">
      <li>
        <p>Welcome Back {{ userFetch.email }}</p>
      </li>
      <li class="signOut-mobile">
        <form @submit.prevent="signOut">
          <button type="submit">Log Out</button>
        </form>
      </li>
    </ul>
  </section>
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
// ✔constant to save a variable that will hold the use router method
// ✔constant to save a variable that will get the user from store with a computed function imported from vue
// ✔constant that calls user email from the useUSerStore
// TODO: Falta quitar la extensión del email "@gmail.com" del usuario.
// ✔constant that saves the user email and cleans out the @client from the user
// ✔async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style scoped>
#nav {
  margin: 0 auto;
  background-color: #e1e1e1;
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
#nav h1 a {
  color: black;
  font-family: "Montserrat" !important;
  text-decoration: none !important;
}
.nav-title {
  padding-left: 20px;
  padding-top: 5px;
}
.nav-user {
  text-align: right;
  padding-right: 30px;
}
.nav-user p {
  font-size: 18px;
}
.nav-user button {
  background-color: #fff47c;
  color: black;
  border-radius: 15px;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 140px;
}

#nav .ul .li {
  border: 3px solid brown;
}

/* HAMBURGUESA */
@import url(https://fonts.googleapis.com/css?family=Raleway);
h2 {
  vertical-align: center;
  text-align: center;
}

html,
body {
  margin: 0;
  height: 100%;
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #e2b4bd;
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  height: 50px;
  padding: 1em;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}
.hamburger {
  display: none;
}

@media (max-width: 700px) {
  #nav {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 90px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 3em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    padding-top: 0px;
  }
  #menu-toggle:checked ~ .menu li.signOut-mobile {
    padding-top: 5px;
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>
