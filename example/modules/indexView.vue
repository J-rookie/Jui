
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
                {title:'搜索',link:'/search'},
                {title:'头部',link:'/header'},
                {title:'部件',link:'/cell'},
                {title:'选择样式',link:'switch'},
                {title:'单选',link:'radio'},
                {title:'复选框',link:'checklist'}
                ]
            }
        }
    }
</script>