
<template>
	<div class="cell-padding">
    <jui-switch :value.sync="value1">
    	<label v-text="value1"></label>
    </jui-switch>
    </div>
    <div class="cell-padding">
    <jui-switch :value.sync="value4">
    	<label v-text="value4"></label>
    </jui-switch>
    </div>
    <jui-cell :title="'选项 ' + value3">
    	<jui-switch :value.sync="value3"></jui-switch>
    </jui-cell>
    <jui-cell :title="'选项 ' + value2">
    	<jui-switch :value.sync="value2"></jui-switch>
    </jui-cell>
</template>

<style lang="sass">
.cell-padding{
	padding:10px;
}
</style>

<script>  
    //es6
    export default {
    	data() {
		    return {
		      value1: false,
		      value2: false,
		      value3: true,
		      value4: true
		    };
		  },
        watch:{
        	value3(val){
        		alert(val)
        	},
        	value2(val){
        		alert(val)
        	},
        }
    }

</script>