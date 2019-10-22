<template>
  <div id="name">
    <button @click="getList">后台返回数据是：</button>
    <p v-bind:value="getList">{{ msg1 }}</p>
  </div>
</template>

<script>
    export default {
        name: "test",
        data(){
            return{
                msg1:'1'
            }
        },
        methods: {
          getList: function(){
            this.$http.get('http://localhost:8089/hello').then(
              function(res){
                  console.log(res.bodyText);
                this.msg1 = res.bodyText;
                console.log(this.msg1);
              },function(res){
                console.log(res.status);
              })
          }
        }
    }
</script>

<style scoped>
  p{
    display: block;
    background: #77FFFF;
  }
</style>
