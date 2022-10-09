<template>
  <div class="signin">
    <h1>Sign in</h1>
    <p v-if="errorMsg" class="">
      {{ errorMsg }}
    </p>
    <form @submit.prevent="signIn">
      <div class="">
        <label class="" for="">Email</label><br />
        <input
          class=""
          type="email"
          placeholder="dave@wuTangfinancial.com"
          v-model="email"
          id="email"
        />
      </div>
      <div class="password">
        <label class="" for="">Password</label><br />
        <div class="">
          <input
            class="password2"
            :type="passwordFieldType"
            onpaste="return false"
            placeholder="************"
            v-model="password"
            id="password"
          />
          <span class="">
            <EyeIcon
              :class="[passwordFieldIcon]"
              @click.prevent="hidePassword = !hidePassword"
            />
          </span>
        </div>
      </div>
      <button class="" type="submit">Sign In</button>
      <p>Don't have an account?</p>
      <p class="">
        <PersonalRouter :route="route" :buttonText="buttonText" />
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
// Route Variables
const route = "/auth/sign-up";
const buttonText = "Create one!";
// Input Fields
const email = ref("");
const password = ref("");
// Error Message
const errorMsg = ref("");
//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);
// Router to push user once SignedIn to the HomeView
const redirect = useRouter();
// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>
html {
  background-image: url("../../public/img/background-signin.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #2b0d57;
}
#app {
  display: block !important;
}
.signin {
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 100px;
  text-align: center;
}
.signin label {
  margin-top: 10px;
  display: block;
}
.signin input {
  padding: 5px;
}
.signin button {
  margin-top: 25px;
  color: white;
  background-color: #410a82;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
}

.signin a {
  color: #410a82;
}
</style>
