<template>
  <div>
      <ul>
          <li><button @click="inc">+</button></li>
          <li><button @click="dec">-</button></li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['inc', 'dec'])
  }
}
</script>
