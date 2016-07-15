<script>
    //es6
    export default {
        el:"#index",
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
	<nav>
		<a v-for="item in list" v-link="{ path: item.link }">{{item.title}}</a>
	</nav>
</template>