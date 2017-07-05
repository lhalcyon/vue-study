<template>
  <div>
    <div class="part">
      <h2>条件渲染</h2>
      <p v-if="ok">结果1</p>
      <p v-else>结果2</p>
      <template v-if="ok_block">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>

      <p v-if="type === 1">type1可见</p>
      <p v-else-if="type === 2">type2可见</p>
      <p v-else>其余type可见</p>

    </div>

    <div class="part">
      <h3>使用key控制元素重用 无key或者key相同的组件会被重用</h3>

      <template v-if="loginType === 'mobile'">
        <label>Mobile</label>
        <input placeholder="Enter ur mobile" key="mobile_input"/>
      </template>

      <template v-else-if="loginType === 'email'">
        <label>Email</label>
        <input placeholder="Enter ur email" key="email_input"/>
      </template>

      <br/>
      <button @click="switchLoginType">切换登录方式</button>

      <h3>v-if和v-show</h3>
      <p>v-if是真实的渲染,切换过程中会销毁重建,v-show只是单纯的隐藏及显示,并且其不支持 template</p>

      <label>v-if</label>  <input v-if="show" placeholder="enter content"/>
      <br/>
      <label>v-show</label> <input v-show="show" placeholder="enter content"/>
      <button @click="changeShow">change show</button>
    </div>

  </div>
</template>

<script>
  export default{
      data(){
          return {
            ok: false,
            ok_block: true,
            type:3,
            loginType:'mobile',
            show: true
          }
      },
      methods:{
        switchLoginType:function () {
            if (this.loginType === 'mobile'){
                this.loginType = 'email'
            } else {
                this.loginType = 'mobile'
            }
        },
        changeShow:function () {
          this.show = !this.show
        }
      }
  }
</script>

<style>

</style>
