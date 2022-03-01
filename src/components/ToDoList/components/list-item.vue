<template>
	<div class="list-item">
		<div class="todo" v-if="!row.status">
			<input
				type="checkbox"
				:checked="false"
				@change="handleSetToDo"
				id="todoItem"
			/><label for="todoItem">{{ row.text }}</label><span title="删除" @click="handleDelToDo">🗑</span>
		</div>
		<div class="done" v-else>
			<input
				type="checkbox"
				:checked="true"
				@change="handleSetToDo"
				id="doneItem"
			/><label for="doneItem">{{ row.text }}</label><span title="删除" @click="handleDelToDo">🗑</span>
		</div>
	</div>
</template>

<script>
import { store } from "../store";
export default {
	name: "ListItem",
	props: {
		row: Object,
		index: [String, Number],
	},
	methods: {
		handleSetToDo() {
			store.setToDo(this.index);
		},
    handleDelToDo(){
      store.delToDo(this.index)
    }
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
	text-align: left;
}
.list-item > div {
	font-size: 20px;
	font-weight: 600;
	color: #42b983;
	height: 40px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.list-item > div>span{
  font-size: 24px;
  color: #ff5353;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 5px;
}
.list-item:hover.list-item > div>span{
  display: block;
}
.list-item input[type="checkbox"] {
	margin: 0;
	margin-right: 20px;
	width: 20px;
	height: 22px;
	vertical-align: middle;
  background: #42b983;
  color: #42b983;
  border: 1px solid #ccc;
  outline: none;
}
.list-item label {
	line-height: 1;
}
.todo {
}
.done {
	text-decoration: line-through;
	opacity: 0.5;
}
</style>
