
<template>
    <jui-header title="swipe" back></jui-header>
    <div class="page-swipe">
    <jui-swipe :swipeitem="swipeitem" :shuffling="shuffling" :pagination="pagination"></jui-swipe>
        <nav class="list">
            <a v-for="item in list" @click.prevent="_swipe($index)" :class="{active:act==$index}">{{item.title}}</a>
        </nav>
    </div>
</template>
<style lang="sass">
 .page-swipe{
    padding-top:10px;
     .list{
        padding:10px;
        background-color:#fff;
        color:#323232;
    a{
        display: block;
        line-height:40px;
        text-align: center;
        border:1px solid #ccc;
        margin-bottom: 10px;
        background-color:#f1f1f1;
        border-radius: 4px;
        &.active{
            background-color:#419EFE;
            color:#fff;
            }
        }
    } 
}  
</style>
<script>
    //es6
    export default {
         data () {
            return {
                act:0,
                list:[
                {title:'默认值'},
                {title:'自动播放'},
                {title:'分页符'},
                {title:'自动播放显示分页符'},
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
        methods:{
            _swipe(index){
                this.act = index;
                switch(index){
                    case 0:
                    this.shuffling = false;
                    this.pagination = false;
                    break;
                    case 1:
                    this.shuffling = true;
                    this.pagination = false;
                    break;
                    case 2:
                    this.shuffling = false;
                    this.pagination = true;
                    break;
                    case 3:
                    this.shuffling = true;
                    this.pagination = true;
                    break;
                    default:
                    break;
                }
            }
        }
    }

</script>