<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div>
        <label for="role">Role</label>
        <select v-model="role" id="role">
          <option value="organizer">Event Organizer</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      role: 'organizer', // Default role
    };
  },
  methods: {
    async registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role,
      };

      try {
        console.log('Sending request to:', this.$axios.defaults.baseURL + 'users/');
        const response = await this.$axios.post('users/', userData);
        console.log('User registered successfully:', response.data);
        // Redirect user or show success message
      } catch (error) {
        console.error('Registration error:', error);
        // Handle error (e.g., show message)
      }
    },
  },
};
</script>
