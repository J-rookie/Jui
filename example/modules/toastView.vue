
<template>
        <nav class="list">
        <a v-for="item in list" @click.prevent="Prompt($index)">{{item.title}}</a>
        </nav>
        <nav class="list">
        <a v-for="item in position" @click.prevent="PromptP($index)">{{item}}</a>
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
    import toast from '../../src/components/toast/index.js';  
    //es6
    export default {
         data () {
            return {
                list:[
                {title:'文字提示'},
                {title:'图文提示'},
                {title:'图片提示'},
                ],
                position:["top","center","bottom"]
            }
        },
        components: {
        },
        methods:{
            Prompt(index){
                switch(index){
                    case 0:
                    toast("哈哈哈");
                    break;
                    case 1:
                    toast({
                        message:"回答正确",
                        type:1,
                        imgSrc:'example/temp/images/true.png',
                    });
                    break;
                    case 2:
                    toast.closeAll();
                    toast({
                        type:2,
                        imgSrc:'example/temp/images/loading.gif',
                        time:0,
                    });
                    break;
                    default:
                    break;
                }

            },
            PromptP(index){
                switch(index){
                    case 0:
                    toast({
                        message:"信息文本",
                        type:0,
                        time:1000,
                        position:'top',
                    });
                    break;
                    case 1:
                    toast({
                        message:"信息文本",
                        type:0,
                        time:1000,
                        position:'center',
                    });
                    break;
                    case 2:
                    toast({
                        message:"信息文本",
                        type:0,
                        time:1000,
                        position:'bottom',
                    });
                    break;
                    default:
                    break;
                }

            }
        }
    }

</script>