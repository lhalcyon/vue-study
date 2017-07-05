
<template>
  <div id="app">

    <div class="part">
      <h2>声明式渲染</h2>
      {{ msg }}
    </div>
    <div class="part">
      <p>声明式渲染</p>
      <span v-bind:title="message">
        鼠标停留此处几秒,可以看到动态绑定的title
      </span>
    </div>
    <div class="part">
      <p v-if="seen">now u can u me</p>
    </div>

    <div class="part">
      <ol>
        <todo-item
          v-for="item in todoList"
          v-bind:todo="item"
          v-bind:key="item.id"
        >
        </todo-item>
      </ol>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        msg: '声明式渲染数据',
        message: '页面加载于 ' + new Date(),
        seen: true,
        todoList:[
          { id:0,text: '看书'},
          { id:1,text: '打球'},
          { id:2,text: '看电影'}
        ]
      }
    }
  }
</script>

<style>


</style>
