
<template>
      <nav class="menu">
        <a v-for="item in list" v-link="{ path: item.link }">{{item.title}}</a>
      </nav>
      <!-- main view -->
      <router-view></router-view>     
</template>
<style lang="sass">
.menu{
  a{
    display: block;
    line-height:40px;
    text-align: center;
    color:#999;
    text-decoration:none;
    border-bottom:1px solid #ccc;
  }
}
</style>
<script>
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
                list:[
                {title:'弹层',link:'/layer'},
                {title:'轮播',link:'/swipe'},
                {title:'消息提示',link:'/toast'},
                {title:'复选框',link:'/select'},
                {title:'选择器',link:'/picker'},
                ]
            }
        }
    }
</script>