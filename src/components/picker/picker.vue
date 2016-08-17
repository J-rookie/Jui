<template>
	<div v-bind:class="styleClass?styleClass:'Jui-picker-value'" @click="pickerShow = !pickerShow">{{value}}</div>
	<div class="Jui-picker" v-if="pickerShow">
		<div class="Jui-picker-mask"></div>
		<div class="Jui-picker-content">
			<nav class="Jui-picker-menu">
				<a @click="pickerShow = !pickerShow">取消</a>
				<a class="active" @click="yesFn">确定</a>
			</nav>
			<div class="Jui-picker-select">
				<picker-slot v-for="item in data.length" :data.sync="data[item]"></picker-slot>
				<div class="Jui-picker-highlight"></div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import slot from "./picker-slot.vue";
	import "./picker.scss";

	export default{
		props:['data','default','response','success','styleClass'],
		data(){
			return {
				pickerShow:false,
				valueTotal:false,
				results:{
					values:[],
					value:'',
				},
			}
		},
		components:{
			pickerSlot:slot
		},
		computed:{
			value(){
				return this.valueTotal ? this.results.value : this.default;
			}
		},
		ready(){
			if(this.response != undefined){
				this.response = this.results;
			}
		},
		methods:{
			yesFn(){
				this.getvalues()
				this.valueTotal = true;
				if(!this.success){
				}else{
					this.success(this.results);
				}
				this.pickerShow = !this.pickerShow;
			},
			getvalues(){
				this.results.values= [];
				this.results.value= '';	
				for(let i = 0;i < this.data.length; i++){
					this.results.values.push(this.data[i].value);
				}
				this.results.value = this.results.values.join("-")
			}
		},
	}
</script>