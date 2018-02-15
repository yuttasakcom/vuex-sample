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
import CounterControl from '@/components/Counter/CounterControl'
import CounterView from '@/components/Counter/CounterView'

export default {
  components: {
    CounterControl,
    CounterView
  },
  data: () => ({
    count: 0
  })
}
</script>
