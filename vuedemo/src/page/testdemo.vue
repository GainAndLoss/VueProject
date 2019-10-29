<template>
  <div class="container">
    <div class="left">
      <!--      <table>-->
      <!--        <thead v-for="item in items" :key="item.id">-->
      <!--          <tr>{{ item.name }}</tr>-->
      <!--        </thead>-->
      <!--      </table>-->
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        <!--        <li>-->
        <!--          <left></left>-->
        <!--        </li>-->
        <!--        <li>-->
        <!--          <left1></left1>-->
        <!--        </li>-->
      </ul>
    </div>
    <div class="right">
      <right></right>
    </div>
  </div>
</template>

<script>
    import left from "./1"
    import left1 from './2'
    import right from './1-1'

    export default {
        name: "testdemo",
        data() {
            return {
                items: [{"name": "服务名称", "id": 0}, {"name": "测试用例", "id": 1}]
            }
        },
        components: {
            left, left1, right
        },
        methods: {
            getServiceName: function () {
                alert("1111")
            }
        }
    }
</script>

<style scoped>
  ul li {
    border: 1px;
    width: 290px;
    height: 50px;
    list-style: none;
    padding-left: 10px;
    color: #FF0000;
    font-family: "宋体";
    font-size: 20px;
  }

  .left {
    float: left;
    background-color: lightgoldenrodyellow;
  }

  /*.left{*/
  /*  font-size: 16px;*/
  /*  width:20%;*/
  /*  position:absolute;*/
  /*  !*display: flex;*!*/
  /*  !*display: -webkit-flex;*!*/
  /*  align-items:center;*/
  /*  justify-content:center;*/
  /*  color: #008cff;*/
  /*  !*border-right:1px solid #ebedf0;*!*/
  /*  border-bottom:1px solid #ebedf0;*/
  /*}*/
  .right {
    float: right;
    width: 55%;
  }
</style>
