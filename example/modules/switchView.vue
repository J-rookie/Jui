
<template>
	<div class="cell-padding">
    <control :value.sync="value1">
    	<label v-text="value1"></label>
    </control>
    </div>
    <div class="cell-padding">
    <control :value.sync="value4">
    	<label v-text="value4"></label>
    </control>
    </div>
    <juicell :title="'选项 ' + value3">
    	<control :value.sync="value3"></control>
    </juicell>
    <juicell :title="'选项 ' + value2">
    	<control :value.sync="value2"></control>
    </juicell>
</template>

<style lang="sass">
.cell-padding{
	padding:10px;
}
</style>

<script>
    import Vue from 'vue'; 
    import control from '../../src/CssComponentes/switch'; 
    import cell from '../../src/CssComponentes/cell';   
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
        components: {
            control:control,
            juicell:cell,
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