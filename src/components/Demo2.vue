<template>
  <div>
    <div class="part">
      <h2>插值</h2>
      <span>文本:{{text}}</span> <br/>
      <span v-once>once文本:{{text}}</span> <br/>
      <span v-html="html"></span> <br/>
    </div>

    <div class="part">
      <h2>属性</h2>
      <div v-bind:class="dynamicId">
        Mustache 不能在 HTML 属性中使用，应使用 v-bind 指令
      </div>

      <button v-bind:disabled="isDisabled">按钮</button>

    </div>

    <div class="part">
      <h2>指令</h2>

    </div>

    <input/>
  </div>
</template>

<script>
  export default{
      data(){
          return {
            text: 'text',
            html: '<a href="http://www.baidu.com" target="_blank">html链接</a>',
            dynamicId: 'my_id',
            isDisabled: true
          }
      }
  }
</script>


<style>
  .part{
    background-color: azure;
    padding: 16px;
    margin: 16px;
  }

  .my_id{

    background-color: blueviolet;
  }
</style>
