
<template>
<jui-header title="radio" fixed back></jui-header>
<div class="page-radio">
<div class="radio-list">
     <div class="radio-head">你喜欢什么样的女生</div>
     <jui-radio :options="options1" :value.sync="value1"></jui-radio>
     <div class="radio-foot">你选择了{{value1}}</div>
</div>

<div class="radio-list">
     <div class="radio-head">你喜欢什么样的基友</div>
     <jui-radio :options="options2" :value.sync="value2"></jui-radio>
     <div class="radio-foot">你选择了{{value2}}</div>
</div>
</div>
</template>

<style lang="sass">
.page-radio{
    paddingt-top:40px;
    .radio-list{
	padding:10px 0;
    .radio-head{
        padding:10px;
        line-height:30px;
        color:#666;
        font-size:14px;
    }
    .radio-foot{
        margin-top:10px;
        padding:10px;
        line-height:30px;
        border-bottom:1px solid #ccc;
        border-top:1px solid #ccc;
    }
}
}
</style>

<script> 
    //es6
    export default {
    	data() {
		    return {
		      options1: ['女神','绿茶婊','女汉子'],
              value1:'女神',
		      options2: [{
                label:'文艺青年',
                value:'A', },
                {
                label:'中二青年',
                value:'B', },
                {
                label:'普通青年',
                value:'C', },
                {
                label:'优质青年',
                value:'D',
                disabled:'disabled' }],
                value2:'',
		    };
		  },
    }

</script>