const todos=localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]
export const store={
  state:{
    todos:todos
  },
  addToDo(val){
    this.state.todos.unshift(val)
    this.saveLocal()
  },
  setToDo(index){
    const thisTodo=Object.assign({},this.state.todos[index])
    thisTodo.status=!thisTodo.status
    this.state.todos.splice(index,1)
    this.state.todos.push(thisTodo)
    this.saveLocal()
  },
  delToDo(index){
    this.state.todos.splice(index,1)
    this.saveLocal()
  },
  saveLocal(){
    localStorage.setItem('todos',JSON.stringify(this.state.todos))
  }
}