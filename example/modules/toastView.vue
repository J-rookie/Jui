
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
                    break;
                    default:
                    break;
                }

            },
            PromptP(index){
                switch(index){
                    case 0:
                    break;
                    default:
                    break;
                }

            }
        }
    }

</script>