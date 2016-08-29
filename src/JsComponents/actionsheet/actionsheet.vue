
<template>
	<div v-bind:class="styleClass?styleClass:'Jui-actionsheet'" @click="optionsShow=!optionsShow">{{data.choice.key}}</div>
	<div class="Jui-select-options" v-if="optionsShow" transition="Jui-expand">
		<div class="options-content" v-if="optionsShow" transition="Jui-slide">
			<nav class="options-list">
				<a v-for="item in data.selectList" @click="optionFn($index)">{{item.key}}</a>
			</nav>
			<div class="close" v-if="close" @click="optionsShow=!optionsShow">取消</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	 import './actionsheet.scss';
	 export default {
	 	name:'jui-actionsheet',
	 	props:{
	 		type:Number,
	 		data:Object,
	 		styleClass:String,
	 	},
	 	data(){
	 		return {
	 			optionsShow:false,
	 			close:true,
	 		}
	 	},
	 	created(){
	 		this.data.close == false ? this.close = this.data.close:'';
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
