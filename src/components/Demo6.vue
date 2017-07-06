<template>
  <div>
    <h2>列表渲染</h2>

    <div class="part">
      <h3>基本用法</h3>
      <ul>
        <li v-for="item in items">
          {{item.message}}
        </li>
      </ul>
      <h3>第二参数</h3>
      <ul>
        <li v-for="(item , index) in items">
          {{ pMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>

      <ul>
        <template v-for="item in items">
          <li>{{item.message}}</li>
          <li class="divider"></li>
        </template>
      </ul>
    </div>

    <div class="part">
      <h3>使用v-for遍历对象</h3>
      <ul>
        <li v-for="value in person">
          {{ value }}
        </li>
      </ul>
      <h4>带键值</h4>
      <ul>
        <li v-for="(value,key) in person">
          {{ key }} -- {{ value }}
        </li>
      </ul>
      <h4>带键值和索引</h4>
      <div v-for="(value, key, index) in person">
        {{ index }}. {{ key }} : {{ value }}
      </div>
    </div>

    <div class="part">


      <h4>使用v-for在整数值范围迭代</h4>
      <div>
        <span v-for="n in 5">{{ n }}</span>
      </div>
      <h4>组件与v-for</h4>
      <p class="todo">TODO</p>
      <h4>v-for 和 v-if</h4>
      <p>v-for的优先级高于v-if</p>
      <h5>for > if 示例</h5>
      <li v-for="todo in todos" v-if="!todo.isCompleted">
        {{ todo.thing }}
      </li>
      <h5>设置for < if 示例</h5>
      <ul v-if="shouldShowTodo">
        <li v-for="todo in todos">
          {{ todo }}
        </li>
      </ul>

      <h5>key</h5>

      <div v-for="todo in todos" :key="todo.id">
        {{ todo.id }} - {{ todo.thing }}
      </div>

    </div>

    <div class="part">
      <h3>数组更新检测</h3>
      <h4>变异方法</h4>
      <span v-for="hobby in hobbies">{{ hobby }},</span>

      <button @click="push">push</button>

      <h4>非变异方法</h4>
      <h4>注意事项</h4>
      <h4>显示排序或过滤结果</h4>
      <p class="todo">TODO</p>

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        pMessage: 'Parent',
        items: [
          {message: 'john'},
          {message: 'james'}
        ],
        person: {
          firstName: 'john',
          lastName: 'snow',
          age: 28
        },
        todos: [
          {
            thing: 'reading',
            isCompleted: true,
            id: 1
          },
          {
            thing: 'sleeping',
            isCompleted: false,
            id: 2
          }
        ],
        shouldShowTodo: true,
        hobbies:[
            'reading',
            'sleeping',
            'girl'
        ]
      }
    },
    methods:{
      push:function () {
        this.hobbies.push('hobby'+Math.random())
      }
    }
  }
</script>

<style>
  .divider {
    height: 1px;
    width: 100%;
    background-color: brown;
    align-self: baseline;
  }
</style>
