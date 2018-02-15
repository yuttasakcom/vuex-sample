<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>

