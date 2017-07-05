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

      <div v-if="seen">v-if</div>

      <a v-bind:href="url" target="_blank">参数</a>

      <a v-on:click="doAlert">事件</a>

      <br/>

      <form v-on:submit.prevent="onSubmit">
        TODO 事件冒泡
      </form>
    </div>

    <div class="part">
      <h2>过滤器</h2>
      <p>在mustaches中:{{ message | capitalize }}</p>
      <!--<div v-bind:id="rawId | formedId">在v-bind中 TODO找出问题</div>-->

      <h2>缩写</h2>

      <a :href="url">v-bind缩写</a>

      <a @click="doAlert">v-on缩写</a>

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
            isDisabled: true,
            seen: true,
            url: 'http://www.qq.com',
            message: 'abc',
            rawId: 'yellowP',
            redP: 'redP'
          }
      },
      methods:{
        doAlert:function () {
          alert('事件弹框')
        },
        onSubmit:function () {
          alert('onSubmit')
        }
      },
      filters:{
        capitalize:function (val) {
          if (!val) return ''
          val  = val.toString()
          return val.charAt(0).toUpperCase() + val.slice(1)
        },
        formedId:function (val) {
          if (val) return this.rawId
          return this.redP
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

  #redP{
    background-color: crimson;
  }

  #yellowP{
    background-color: yellow;
  }

</style>
