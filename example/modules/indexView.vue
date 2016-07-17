
<template>
    <nav>
        <a v-for="item in list" v-link="{ path: item.link }">{{item.title}}</a>
      </nav>
      <!-- main view -->
      <router-view></router-view>

      
</template>
<style lang="sass">

</style>
<script>
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
                list:[
                {title:'弹层',link:'/layer'},
                {title:'轮播',link:'/shuffling'},
                ]
            }
        }
    }
</script>