<template>
    <div>
        Users List
        <div>
            <ul>
                <router-link to="/">
                    <a>Home</a>
                </router-link>
            </ul>
        </div>
        <ul v-if="loadedUsers.length > 0">
            <li v-for="user in loadedUsers" :key="user.id">
                {{ user.name }}
                <button @click="deleteUser(user.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  computed: {
    loadedUsers() {
      return this.$store.getters.loadedUsers;
    }
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("DELETE_USER", userId);
    }
  }
};
</script>
