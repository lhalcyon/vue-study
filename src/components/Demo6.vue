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
          TODO parrentMessage 未显示
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
      </div>


    </div>
</template>

<script>
    export default{
        data(){
            return {
              pMessage: 'Parent',
              items:[
                {message:'john'},
                {message:'james'}
              ],
              person:{
                  firstName:'john',
                  lastName: 'snow',
                  age:28
              }
            }
        }
    }
</script>

<style>
.divider{
  height: 1px;
  width: 100%;
  background-color: brown;
  align-self: baseline;
}
</style>
