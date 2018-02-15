<template>
  <div>
      <ul>
          <li><button @click="increment">+</button></li>
          <li><button @click="decrement">-</button></li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['inc', 'dec']),
    increment() {
      this.inc()
    },
    decrement() {
      this.dec()
    }
  }
}
</script>
