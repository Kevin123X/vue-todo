<template>
  <div id="app">
    <h2>To Do List</h2>
    <ToDoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList/index.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h2{
  color: #2c3e50;
  font-size:24px;
}
</style>
