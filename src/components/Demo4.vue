<template>
  <div>
    <div class="part">
      <h2>Class与Style绑定</h2>
      <h3>绑定HTMLClass</h3>
      <h4>对象语法</h4>
      <div v-bind:class="{active : isActive}">动态切换class</div>

      <div class="static" v-bind:class="{active : isActive,danger: isDanger }">多个class</div>

      <div v-bind:class="classObj">对象class(也可为计算属性)</div>

      <h4>数组语法</h4>

      <div v-bind:class="[class1,class2]">数组content</div>
      <div v-bind:class="[isActive?'':class1,class2]">数组content</div>
      <div v-bind:class="[{class1:!isActive},class2]">数组中使用对象</div>

      <h4>用在组件上</h4>

      <p class="todo">TODO</p>

      <h3>绑定内联样式</h3>

      <h4>对象语法</h4>

      <div v-bind:style="{color:activeColor,fontSize:fontSize+'px'}">对象语法</div>

      <div v-bind:style="styleObject">绑定对象</div>

      <h4>数组语法</h4>

      <p class="todo">TODO</p>

    </div>
  </div>
</template>


<script>
  export default{
      data(){
          return {
            isActive: true,
            isDanger: true,
            classObj:{
              active: true,
              danger: false
            },
            class1: 'active',
            class2: 'danger',
            activeColor: 'blue',
            fontSize: 30,
            styleObject:{
                color: 'red',
                fontSize: '30px'
            }
          }
      }

  }

</script>


<style>
  .active{
    background-color: bisque;
  }
  .danger{
    color: brown;
    width: 50%;

  }

  .static{
    height: 100px;
  }
</style>
