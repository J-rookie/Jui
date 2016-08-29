
<template>
    <jui-header title="toast" back></jui-header>
    <div class="page-toast">
        <nav class="list">
        <a v-for="item in list" @click.prevent="Prompt($index)">{{item.title}}</a>
        </nav>
        <nav class="list">
        <a v-for="item in position" @click.prevent="PromptP($index)">{{item}}</a>
        </nav>
    </div>
</template>
<style lang="sass">
 .page-toast{
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
        } 
    }
}    
</style>
<script>
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
                    this.$toast("哈哈哈");
                    break;
                    case 1:
                    this.$toast({
                        message:"回答正确",
                        type:1,
                        imgSrc:'example/temp/images/true.png',
                    });
                    break;
                    case 2:
                    this.$toast.closeAll();
                    this.$toast({
                        type:2,
                        imgSrc:'example/temp/images/loading.gif',
                        time:1000,
                    });
                    break;
                    default:
                    break;
                }

            },
            PromptP(index){
                switch(index){
                    case 0:
                    this.$toast({
                        message:"信息文本",
                        type:0,
                        time:1000,
                        position:'top',
                    });
                    break;
                    case 1:
                    this.$toast({
                        message:"信息文本",
                        type:0,
                        time:1000,
                        position:'center',
                    });
                    break;
                    case 2:
                    this.$toast({
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