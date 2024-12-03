<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  
  export default {
    name: "LoginPage",
    data() {
      return {
        username: "",
        password: "",
        error: "",
      };
    },
    methods: {
      async loginUser() {
        try {
          // Send login request to the backend API
          const response = await axios.post("token/", {
            username: this.username,
            password: this.password,
          });
          // Store the JWT token in localStorage for use in subsequent requests
          localStorage.setItem("jwt", response.data.access);
          this.$router.push("/dashboard"); // Redirect to the dashboard
        } catch (err) {
          // Handle error response
          this.error = "Invalid credentials, please try again.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  .input-group {
    margin-bottom: 15px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  