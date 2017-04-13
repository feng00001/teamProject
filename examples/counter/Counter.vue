<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <br/>
    <button @click="addTodoLocal()">addToDo</button>
    <br/>
    <input type="text" @keyup.enter="addTodoLocal" ref="ipt">
    <br/>    
    <ul>
      <li v-for="item in $store.state.todos">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: {
    addTodoLocal (e) {
      console.log(e.target.value)
      this.$store.commit('addToDo', { text: e.target.value})
    
      e.target.value = ''
    },
     ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
      'addToDo'
    ])
  }
}
</script>
