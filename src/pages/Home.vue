<template>
  <div>
      <h1>Home Page</h1>
      <div>
        <CounterView :count="count"/>
        <CounterControl />
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CounterControl from '@/components/Counter/CounterControl'
import CounterView from '@/components/Counter/CounterView'

export default {
  components: {
    CounterControl,
    CounterView
  },
  computed: mapState({
    count: state => state.count
  })
}
</script>
