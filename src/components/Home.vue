<template>
  <div class="container">
    <h1>Home</h1>
    <button
      class="btn btn-success"
      @click="add"
    >
      Add Counter {{ count }}
    </button>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions({
      add: 'increment',
    }),
  },
}
</script>
<style>
h1 {
  color: blue;
}
</style>
