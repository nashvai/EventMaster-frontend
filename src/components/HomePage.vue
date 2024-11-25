<template>
  <div class="home-page">
    <div class="content">
      <h1>Welcome to EventMaster!</h1>
      <p>
        EventMaster is a platform designed to help you manage complex events with ease.
        Whether you're organizing a conference, festival, or any other event, EventMaster simplifies
        event management through a hierarchical structure, allowing you to set up main events,
        sub-events, and manage resources effectively.
      </p>

      <p>
        Create an account to start managing your events and collaborate with your team!
      </p>

      <!-- Register Button -->
      <router-link to="/register" class="register-btn">
        Register Now
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-page {
  text-align: center;
  margin: 50px;
}

.content {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.register-btn {
  font-size: 1.2rem;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.register-btn:hover {
  background-color: #0056b3;
}
</style>
