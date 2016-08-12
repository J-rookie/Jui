<template>
	<div class="Jui-picker-value" @click="pickerShow = !pickerShow">{{data.name}}</div>
	<div class="Jui-picker" v-if="pickerShow">
		<div class="Jui-picker-mask"></div>
		<div class="Jui-picker-content">
			<nav class="Jui-picker-menu">
				<a @click="pickerShow = !pickerShow">取消</a>
				<a class="active" @click="yesFn">确定</a>
			</nav>
			<div class="Jui-picker-select">
				<div class="Jui-picker-highlight">
					<picker-slot :data="data.years"></picker-slot>
					<picker-slot :data="data.years"></picker-slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import slot from "./picker-slot.vue";
	import "./picker.scss";

	export default{
		props:['data'],
		data(){
			return {
				pickerShow:true
			}
		},
		components:{
			pickerSlot:slot
		},
		methods:{
			yesFn(){

			}
		}
	}
</script>