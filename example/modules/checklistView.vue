
<template>
<div class="check-list">
     <div class="check-head">你喜欢什么样的女生</div>
     <checklist :options="options1" :value.sync="value1"></checklist>
     <div class="check-foot">你选择了{{value1}}</div>
</div>

<div class="check-list">
     <div class="check-head">你喜欢什么样的人</div>
     <checklist :options="options2" :value.sync="value2" :max="2"></checklist>
     <div class="check-foot">你选择了{{value2}}</div>
</div>

</template>

<style lang="sass">
.check-list{
	padding:10px 0;
    .check-head{
        padding:10px;
        line-height:30px;
        color:#666;
        font-size:14px;
    }
    .check-foot{
        margin-top:10px;
        padding:10px;
        line-height:30px;
        border-bottom:1px solid #ccc;
        border-top:1px solid #ccc;
    }
}
</style>

<script>
    import Vue from 'vue'; 
    import checklist from '../../src/CssComponentes/checklist';   
    //es6
    export default {
    	data() {
		    return {
		      options1: ['女神','绿茶婊','女汉子','女博士'],
              value1:['女神'],
		      options2: [{
                label:'基佬',
                value:'A', },
                {
                label:'变态',
                value:'B', },
                {
                label:'帅的',
                value:'C', },
                {
                label:'富的',
                value:'D',}],
                value2:[],
		    };
		  },
        components: {
            checklist:checklist,
        },
    }

</script>