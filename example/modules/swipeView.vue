
<template>
    <swipe :swipeitem="swipeitem" :shuffling="shuffling" :pagination="pagination"></swipe>
        <nav class="list">
        <a v-for="item in list" @click.prevent="_swipe($index)">{{item.title}}</a>
    </nav>
</template>
<style lang="sass">
 .list{
  background-color:#fff;
  color:#323232;
  a{
    display: block;
    line-height:30px;
  }
}   
</style>
<script>
    import Vue from 'vue'; 
    import swipe from '../../src/JsComponents/swipe/swipe.vue';
    //es6
    export default {
         data () {
            return {
                list:[
                {title:'默认值'},
                {title:'自动播放'},
                {title:'分页符'},
                ],
                swipeitem:[
                        {image:'example/temp/images/swipe_00.jpg',link:'https://www.baidu.com/'},
                        {image:'example/temp/images/swipe_01.jpg',link:'https://www.baidu.com/'},
                        {image:'example/temp/images/swipe_02.jpg',link:'https://www.baidu.com/'}
                    ],
                shuffling:false,
                pagination:false,
            }
        },
        components: {
                swipe,
        },
        methods:{
            _swipe(index){
                switch(index){
                    case 0:
                    this.shuffling = false;
                    this.pagination = false;
                    break;
                    case 1:
                    this.shuffling = !this.shuffling;
                    break;
                    case 2:
                    this.pagination = !this.pagination;
                    break;
                    default:
                    break;
                }
            }
        }
    }

</script>