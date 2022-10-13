<template>
  <div class="presentation">
    <h1>Log In to IronTasks</h1>
    <h3>Start Organizing your tasks today!</h3>
  </div>
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
          placeholder="user@example.com"
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
            placeholder="* * * * * *"
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
      <p>
        Don't have an account?
        <PersonalRouter :route="route" :buttonText="buttonText" />
      </p>
      <p>Forgot password? No worries and clic.</p>
      <!--<button @click="resetPassword">HERE</button>-->
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
async function resetPassword() {
  let res = await supabase.auth.api.resetPasswordForEmail(
    "gretagostina@gmail.com"
  );
}
</script>

<style>
#app {
  display: block !important;
}
.presentation {
  text-align: center;
}
.presentation h1 {
  color: black;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 40px;
}
.signin {
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 45px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
.signin h1 {
  color: black;
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
  color: black;
  background-color: #e1e1e1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  border: none;
}

.signin a {
  color: #410a82;
}
</style>
