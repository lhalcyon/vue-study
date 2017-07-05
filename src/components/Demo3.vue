<template>
  <div>
    <div class="part">
      <h2>计算属性</h2>
      <h3>基础例子</h3>
      <p>原文本:{{ message }}</p>
      <p>计算文本:{{ reversedMessage }}</p>

      <h3>计算属性 setter & getter</h3>
      <p>全名{{ fullName }}</p>
      <button @click="changeName">john snow</button>

      <h3>Watcher</h3>
      <input v-model="question"/>
      <p>{{answer}}</p>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
        return {
          message: 'message',
          firstName: 'David',
          lastName: 'Beckham',
          question: 'r u ready?',
          answer: 'no'
        }
    },
    computed:{
        reversedMessage:function () {
          return this.message.split('').reverse().join('')
        },
        fullName:{
            get: function () {
              return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
              var names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[1]
            }
        }
    },
    watch:{
      question:function (newQuestion) {
        var length = newQuestion.length
        if (length > 5){
            this.answer = 'yes'
        } else {
            this.answer = 'no'
        }
      }
    },
    methods:{
      changeName:function () {
        this.fullName = 'John Snow'
      }
    }
  }
</script>

<style>

</style>
