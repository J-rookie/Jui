
<template>
        <choice type="0" :data="selectOne"></choice>
        <choice type="1" :data="selectTwo"></choice>
        <choice type="1" :data="selectThr"></choice>
        <choice type="0" :data="selectFou"></choice>
</template>
<style lang="sass">
.select{
    border:1px solid #ccc;
    background-color:#419EFE;
    border-radius:4px;
    text-align: center;
    line-height:40px;
    height:40px;
    font-size:14px;
    color:#fff;
}  
</style>
<script>
    import Vue from 'vue'; 
    import choice from '../../src/components/select/select.vue';  
    //es6
    export default {
         data () {
            return {
                selectOne:{
                    choice:{
                        key:"有取消的选择框",
                        val:"none"
                    },
                    selectList:[
                    {key:"选项一",val:"1"},
                    {key:"选项二",val:"2"},
                    {key:"选项三",val:"3"},
                    {key:"选项四",val:"4"},
                    ],
                },
                selectTwo:{
                    choice:{
                        key:"有取消的选择框",
                        val:"none"
                    },
                    selectList:[
                    {key:"上天",val:"1",callback:function(){
                        alert("你上天了")
                    }},
                    {key:"入地",val:"2",callback:function(){
                         alert("你入地了")
                    }},
                    ]
                },
                selectThr:{
                    choice:{
                        key:"无取消的选择框",
                        val:"none"
                    },
                    selectList:[
                    {key:"寂寞的选项一",val:"1"},
                    {key:"闷骚的选项二",val:"2"},
                    ],
                    close:false,
                },
                selectFou:{
                    choice:{
                        key:"自定义样式",
                        val:"none"
                    },
                    selectList:[
                    {key:"寂寞的选项一",val:"1"},
                    {key:"闷骚的选项二",val:"2"},
                    ],
                    styleClass:"select",
                }
            }
        },
        components: {
            choice:choice,
        },
    }

</script>