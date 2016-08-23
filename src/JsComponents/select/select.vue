
<template>
	<div v-bind:class="selectClass" @click="optionsShow=!optionsShow">{{data.choice.key}}</div>
	<div class="Jui-select-options" v-if="optionsShow" transition="expand">
		<div class="options-content" v-if="optionsShow" transition="slide">
			<nav class="options-list">
				<a v-for="item in data.selectList" @click="optionFn($index)">{{item.key}}</a>
			</nav>
			<div class="close" v-if="close" @click="optionsShow=!optionsShow">取消</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	 import './select.scss';
	 export default {
	 	props:['type','data'],
	 	data(){
	 		return {
	 			optionsShow:false,
	 			close:true,
	 			selectClass:'Jui-select',
	 		}
	 	},
	 	created(){
	 		this.data.close == false ? this.close = this.data.close:'';
	 		this.data.styleClass ? this.selectClass = this.data.styleClass:'';
	 	},
	 	methods:{
	 		optionFn:function(index){
	 			if(this.type==0) this.data.choice = this.data.selectList[index];

	 			this.optionsShow=!this.optionsShow;

	 			if(this.data.selectList[index].callback){
	 				this.data.selectList[index].callback();
	 			}
	 		}
	 	}
	 }
</script>
