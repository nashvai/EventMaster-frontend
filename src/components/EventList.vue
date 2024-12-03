<template>
  <div class="container">
    <h1>Event List</h1>
    <ul>
      <li v-for="event in events" :key="event.id" class="event-card">
        <h2>{{ event.name }} - {{ event.date }}</h2>
        <p>{{ event.description }}</p>

        <h3>Sub-Events:</h3>
        <ul v-if="event.sub_events && event.sub_events.length">
          <li v-for="subEvent in event.sub_events" :key="subEvent.id" class="sub-event-card">
            <h4>{{ subEvent.title }} - {{ subEvent.date }}</h4>
            <p>{{ subEvent.description }}</p>

            <h5>Components:</h5>
            <ul v-if="subEvent.components && subEvent.components.length">
              <li v-for="component in subEvent.components" :key="component.id" class="component-item">
                <strong>{{ component.name }}</strong> ({{ component.type }}) - Quantity: {{ component.quantity }}
                <p v-if="component.notes">{{ component.notes }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      error: null,
    };
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await this.$axios.get('events/');
        this.events = response.data;

        // Now, fetch sub-events and components for each event
        for (let event of this.events) {
          await this.fetchSubEvents(event);
        }
      } catch (error) {
        console.error("There was an error fetching events:", error);
        this.error = "Failed to load events.";
      }
    },
    async fetchSubEvents(event) {
      try {
        const response = await this.$axios.get(`events/${event.id}/sub-events/`);
        event.sub_events = response.data;

        // Fetch components for each sub-event
        for (let subEvent of event.sub_events) {
          await this.fetchComponents(event.id, subEvent);
        }
      } catch (error) {
        console.error("Error fetching sub-events for event", event.id, error);
      }
    },
    async fetchComponents(eventId, subEvent) {
      try {
        const response = await this.$axios.get(`events/${eventId}/sub-events/${subEvent.id}/components/`);
        subEvent.components = response.data;
      } catch (error) {
        console.error("Error fetching components for sub-event", subEvent.id, error);
      }
    },
  }
}
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 20px;
}
h1 {
  color: #333;
}
.event-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
}
.sub-event-card {
  border-top: 1px solid #ccc;
  margin-top: 10px;
  padding-top: 10px;
}
.component-item {
  font-size: 14px;
  padding: 5px;
  color: #666;
}
.error {
  color: red;
  font-weight: bold;
}
</style>
