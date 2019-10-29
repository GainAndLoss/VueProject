<template>
  <div class="container" :style="conheight">
    <div class="left" :style="conheight">
      <div>联系物业</div>
    </div>
    <div class="right" :style="conheight">
      <div class="top">
        <div>服务名称</div>
      </div>
      <div class="bottom">
        <div>测试用例</div>
      </div>
    </div>
  </div>
</template>


<script>
    // import menus from './menu'
    // import pages from './pages'
    export default {
        // components: {
        //   menus,pages
        // }
        data () {
            return {
                conheight: {
                    height: ''
                }
            }
        },
        created () {
            window.addEventListener('resize', this.getHeight)
            this.getHeight()
        },
        methods: {
            getHeight () {
                this.conheight.height = window.innerHeight - (window.innerHeight * 0.85) + 'px'
            }
        }
    }
</script>

<style scoped>
  .container{
    background: white;
    margin-top: 8px;
    text-align: center;
    float:left;
    width:100%;
  }
  .left{
    font-size: 16px;
    width:44%;
    position:absolute;
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
    color: #008cff;
    border-right:1px solid #ebedf0;
  }
  .left img{
    width: 40%;
  }
  .right{
    float: right;
    width: 55%;
  }
  .top{
    float: top;
    border-bottom:1px solid #ebedf0;
  }
  .bottom{
    float: bottom;
  }
  .top,.bottom{
    height: 50%;
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
    color: #008cff;
  }
  .top img, .bottom img{
    width: 20%;
  }
</style>
