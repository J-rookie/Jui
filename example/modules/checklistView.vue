
<template>

<jui-header title="checklist" fixed back></jui-header>
<div class="page-checklist">
<div class="page-checklist-box">
     <div class="check-head">你喜欢什么样的女生</div>
     <jui-checklist :options="options1" :value.sync="value1"></jui-checklist>
     <div class="check-foot">你选择了{{value1}}</div>
</div>

<div class="page-checklist-box">
     <div class="check-head">你喜欢什么样的人</div>
     <jui-checklist :options="options2" :value.sync="value2" :max="2"></jui-checklist>
     <div class="check-foot">你选择了{{value2}}</div>
</div>

</div>

</template>

<style lang="sass">
.page-checklist{
    padding-top:40px;
}
.page-checklist-box{
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
    }

</script>