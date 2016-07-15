<script>
    //es6
    export default {
        el:"#app",
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


<template>
	<div class="container js_container">
      <!-- main view -->
      <router-view></router-view>
  </div>
</template>