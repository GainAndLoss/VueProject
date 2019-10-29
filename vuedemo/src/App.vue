<template>
  <div id="app">
    <!--<h1>服务名称</h1>-->
    <!--<ul>-->
    <!--<li v-for="(item, i) in formData" :key="i">-->
    <!--服务名称:<input v-model="item.num"/>&#8195;-->
    <!--<span id="add" @click="addServer">添加</span>-->
    <!--</li>-->
    <!--</ul>-->

    <!--<router-view></router-view>-->
    <!--<router-link to="/index">首页</router-link>-->
    <!--<router-link to="/userCenter">个人中心</router-link>-->
    <!--<div class="yv-header">-->
    <!--<div class="yv-header-content">-->
    <!--<div class="header-important">-->
    <!--<div class="header-title"><h1 id="header-title-font">网站</h1></div>-->
    <!--</div>-->

    <!--<div class="header-login-regist">-->
    <!--<div class="header-login">登录</div>-->
    <!--<div class="header-login">注册</div>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <el-container>
      <el-header class="header">
        <vHeader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import Navmenu from "./page/NavMenu"
    import Header from "./page/Header"
    export default {
        name: 'App',
        components: {
            'navmenu': Navmenu,
            'vHeader':Header
        }
        // data(){
        //     return{
        //         formData: [{ num: '', money: ''}],
        //         msg:''
        //     }
        // },
        // methods:{
        //     addServer:function () {
        //         this.formData.push({ num: '', money: ''})
        //     }
        // }
    }
</script>

<style>
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  !*text-align: center;*!*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/
  /*#add {*/
  /*  color:red;*/
  /*}*/
  /*#modify{*/
  /*  color: chartreuse;*/
  /*}*/
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
