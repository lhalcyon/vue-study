<template>
    <div class="content">

      <p class="mark_title">本邮件为程序自动发送,请勿回复:)</p>

      <p>嘻牛基金Android测试包 ${BUILD_PREFIX}_${JENKINS_TIME}_${DAY_VERSION}.apk 自动构建成功,已上传蒲公英!</p>

      <h4>
        主要更新内容:
      </h4>

      <div class="updateContent">
          1.blabla
          2.blabla
          3.nothing
      </div>
      <div class="qrcode">
        <h4>二维码 密码:hljj</h4>
        <img src="https://github.com/lhalcyon/RefImageRepo/raw/master/Jenkins_170713/auto_package_qrcode.png"/>
        <h4>链接地址: <a href="https://www.pgyer.com/Qz91">链接</a> 密码:hljj</h4>
      </div>

    </div>
</template>

<script>
    export default{
        data(){
            return {}
        }
    }
</script>

<style>

  .content{
    background-color: lavender;
    border-radius: 8px;
    margin: 24px 12px;
    padding: 12px;
    text-align: center;
  }

  .mark_title{
    color: darkslateblue;
    font-size: 16px;
  }

  .updateContent{
    text-align: center;
    padding: 6px;
    background-color: ghostwhite;
    margin: 24px 12%;
    min-height: 60px;
  }

  img{
    display: block;
    margin: 0 auto;
  }

  .qrcode{
    margin:0 auto;
  }

</style>
