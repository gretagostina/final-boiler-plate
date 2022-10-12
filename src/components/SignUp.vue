<template>
  <div class="presentation">
    <h1>Sign up to IronTasks</h1>
    <h3>Join us and start organizing your tasks today!</h3>
  </div>
  <div class="signup">
    <h1>Sign up</h1>
    <p>Create your personal account to manage your own tasks.</p>
    <form @submit.prevent="signUp">
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
      <div class="">
        <label class="" for="">Password</label><br />
        <input
          class=""
          type="password"
          placeholder="choose your keyword"
          v-model="password"
          id="password"
        />
      </div>
      <div class="">
        <label class="" for="">Confirm Password</label><br />
        <input
          class=""
          type="password"
          placeholder="* * * * * *"
          v-model="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <br />
      <button class="" type="submit">Sign Up</button>
      <p class="">
        <span class="">Already have an account? </span>
        <PersonalRouter :route="route" :buttonText="buttonText" />
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
// Route Variables
const route = "/auth/login";
const buttonText = "Sign in";
// Input Fields
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
// Error Message
// Show hide password variable
// Show hide confrimPassword variable
// Router to push user once SignedUp to Log In
const redirect = useRouter();
// function to SignUp user to supaBase with a timeOut() method for showing the error
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      // if (error) throw error;
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}
</script>

<style></style>

✔
<!-- <template>
  <h1>Sign up</h1>
  <p>Email</p>
  <p>Password</p>
  <PersonalRouter :route="route" :buttonText="buttonText" />
</template>
<script setup>
✔import PersonalRouter from "./PersonalRouter.vue";
✔Route Variables
✔const route = "/auth/login";
✔const buttonText = "Test the Sign In Route";
✔Input Fields
✔Error Message
✔Show hide password variable
✔Show hide confrimPassword variable
✔Router to push user once SignedUp to Log In
✔Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>-->
<style>
.signup {
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 100px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.signup h1 {
  color: black;
}
.signup label {
  margin-top: 10px;
  display: block;
}
.signup input {
  padding: 5px;
}
.signup button {
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

.signup a {
  color: #410a82;
}
</style>
