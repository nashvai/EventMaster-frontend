<template>
  <div class="dashboard-container">
    <h2>Welcome, Event Organizer</h2>
    <div v-if="events && events.length > 0">
      <h3>Your Events</h3>
      <ul>
        <li v-for="event in events" :key="event.id">
          <span>{{ event.name }} ({{ event.date }})</span>
          <button @click="viewEvent(event.id)">View Details</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No events found. Please create one!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "UserDashboard",
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const token = localStorage.getItem("jwt");
        if (!token) {
          this.$router.push("/login");
        } else {
          // Fetch events for the logged-in user using the JWT token
          const response = await axios.get("events/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.events = response.data;
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    },
    viewEvent(eventId) {
      // Redirect to the event details page
      this.$router.push(`/event/${eventId}`);
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
