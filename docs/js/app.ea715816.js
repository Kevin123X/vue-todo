(function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"0934":function(t,e,o){},"093d":function(t,e,o){"use strict";o("0934")},"4d50":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h2",[t._v("To Do List")]),o("ToDoList",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"to-do-list"},[o("Action"),o("br"),o("br"),o("br"),t._l(t.list,(function(t,e){return o("ListItem",{key:t.timestamp,attrs:{row:t,index:e}})}))],2)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-item"},[t.row.status?o("div",{staticClass:"done"},[o("input",{attrs:{type:"checkbox",id:"doneItem"},domProps:{checked:!0},on:{change:t.handleSetToDo}}),o("label",{attrs:{for:"doneItem"}},[t._v(t._s(t.row.text))]),o("span",{attrs:{title:"删除"},on:{click:t.handleDelToDo}},[t._v("🗑")])]):o("div",{staticClass:"todo"},[o("input",{attrs:{type:"checkbox",id:"todoItem"},domProps:{checked:!1},on:{change:t.handleSetToDo}}),o("label",{attrs:{for:"todoItem"}},[t._v(t._s(t.row.text))]),o("span",{attrs:{title:"删除"},on:{click:t.handleDelToDo}},[t._v("🗑")])])])},l=[],u=(o("a9e3"),o("a434"),o("e9c4"),localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]),d={state:{todos:u},addToDo:function(t){this.state.todos.unshift(t),this.saveLocal()},setToDo:function(t){var e=Object.assign({},this.state.todos[t]);e.status=!e.status,this.state.todos.splice(t,1),this.state.todos.push(e),this.saveLocal()},delToDo:function(t){this.state.todos.splice(t,1),this.saveLocal()},saveLocal:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},p={name:"ListItem",props:{row:Object,index:[String,Number]},methods:{handleSetToDo:function(){d.setToDo(this.index)},handleDelToDo:function(){d.delToDo(this.index)}}},f=p,h=(o("a98a"),o("2877")),m=Object(h["a"])(f,c,l,!1,null,"0e003a45",null),v=m.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"action"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],ref:"input",attrs:{type:"text",placeholder:"按下'Enter'键/点击'+'添加代办",autofocus:!0},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAddToDo.apply(null,arguments)},input:function(e){e.target.composing||(t.text=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),o("button",{on:{click:t.handleAddToDo}},[t._v("+")])])},x=[],y={name:"Action",data:function(){return{text:""}},methods:{handleAddToDo:function(){this.$refs.input.focus(),this.text&&(d.addToDo({timestamp:Date.now(),text:this.text,status:!1}),this.text="",console.log(d))}}},g=y,_=(o("093d"),Object(h["a"])(g,b,x,!1,null,"3b30bd58",null)),D=_.exports,T={name:"ToDoList",components:{Action:D,ListItem:v},data:function(){return{list:d.state.todos}}},O=T,w=(o("6db9"),Object(h["a"])(O,i,a,!1,null,"664a9de0",null)),j=w.exports,k={name:"App",components:{ToDoList:j}},S=k,L=(o("034f"),Object(h["a"])(S,r,s,!1,null,null,null)),I=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(I)}}).$mount("#app")},"6db9":function(t,e,o){"use strict";o("f5e3")},"85ec":function(t,e,o){},a98a:function(t,e,o){"use strict";o("4d50")},f5e3:function(t,e,o){}});
//# sourceMappingURL=app.ea715816.js.map