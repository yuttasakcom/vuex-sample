<template>
  <div>
      <h1>Home Page</h1>
      <div>
        <CounterView :count="getCount"/>
        <CounterControl />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CounterControl from '@/components/Counter/CounterControl'
import CounterView from '@/components/Counter/CounterView'

export default {
  components: {
    CounterControl,
    CounterView
  },
  computed: {
    ...mapGetters(['getCount'])
  }
}
</script>
