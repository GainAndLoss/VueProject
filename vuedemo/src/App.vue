<template>
  <div id="app">
    <h1>服务名称</h1>
    <ul>
      <li v-for="(item, i) in formData" :key="i">
        服务名称:<input v-model="item.num"/>&#8195;
        <span id="add" @click="addServer">添加</span>
      </li>
    </ul>

    <router-link to="/index">首页</router-link>
    <router-link to="/userCenter">个人中心</router-link>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return{
                formData: [{ num: '', money: ''}]
                }
        },
        methods:{
            addServer:function () {
                this.formData.push({ num: '', money: ''})
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #add {
    color:red;
  }
</style>
