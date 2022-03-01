<template>
  <div class="action">
   <input type="text" placeholder="按下'Enter'键/点击'+'添加代办" v-model.trim="text" @keyup.enter="handleAddToDo" ref="input" :autofocus="true"><button @click="handleAddToDo">+</button>
  </div>
</template>

<script>
import {store} from '../store'
export default {
  name: 'Action',
  data(){
    return{
      text:''
    }
  },
  methods: {
    handleAddToDo(){
      this.$refs.input.focus()
      if (this.text) {
        store.addToDo({
        timestamp:(Date.now()),
        text:this.text,
        status:false
      })
      this.text=''
      console.log(store);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  width: 500px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-indent: 20px;
  outline-color: #42b983;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
}
button{
  width: 100px;
  height: 44px;
  border: 1px solid #ccc;
  font-size: 20px;
  font-weight: bold;
  background: #42b983;
  color: #fff;
  transform: translateY(2px) translateX(-3px);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
}
</style>
