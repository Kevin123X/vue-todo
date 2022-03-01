<template>
	<div class="to-do-list">
		<Action></Action>
		<br>
		<br>
		<br>
		<ListItem v-for="(item, index) in list" :key="item.timestamp" :row="item" :index="index"></ListItem>
	</div>
</template>

<script>
import ListItem from "./components/list-item.vue";
import Action from "./components/action.vue";
import {store} from "./store";
export default {
	name: "ToDoList",
	components: {
		Action,
		ListItem,
	},
	data() {
		return {
			list: store.state.todos,
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .to-do-list{
    width: 700px;
    margin: 0 auto;
  }
</style>
