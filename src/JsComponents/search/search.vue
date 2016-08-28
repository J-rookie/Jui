
<template>
	<div class="Jui-search">
    <form class="Jui-search-tool" @submit.prevent="requestFn">
        <div class="Jui-search-inner" :style="{'background-color':scolor}">
            <input type="text" v-el:keyword v-model="keyword"/>
            <button type="submit" class="Jui-search-submit" :style="{'background-color':scolor}"></button>
            <div class="iBack" @click='closeSearch'>取消</div>
        </div>
    </form> 
    <nav class="Jui-search-list">
         <a v-for="item in historical" :href="item.link">{{item.title}}</a>
    </nav>
    </div>
</template>

<script type="text/javascript">
	 import './search.scss';
	 export default {
	 	name:'jui-search',
	 	data(){
	 		return {
	 			request:'',
	 			historical:[],
	 			keyword:'',
	 			scolor:'',
	 		}
	 	},
	 	ready(){
	 		this.$els.keyword.focus();
	 	},
	 	methods:{
	 		closeSearch(){
	 			this.$destroy(true);
	 		},
	 		requestFn(){
	 			var self = this;
	 			this.request(this.keyword,self);
	 		}
	 	}
	 }
</script>
