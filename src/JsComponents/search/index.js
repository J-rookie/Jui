import Vue from 'vue';
import searchVue from './search.vue';

var defaults={
	request: function(val,self){
		self.$destroy(true);
	},
	scolor:'#419EFE',
	historical:[],
}

var searchConstructor = Vue.extend(searchVue);

var searchInit = function(){
	return new searchConstructor({el: document.createElement('div')});
};

var initData;

var dataCopy = function(obj){

	if(typeof obj != 'object'){
		return obj;
	}	
	var newData = {};	
	for(var attr in obj){
		newData[attr] = dataCopy(obj[attr]);
	}	
	return newData;
}

var search = function(options){
	let InitSearch = searchInit();
	initData = dataCopy(defaults);
	if(typeof options === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length){
		for(var prop in options){
			initData[prop] = options[prop]
		}
	}
	for(var prop in initData){
			InitSearch[prop] = initData[prop]
		}
	InitSearch.$appendTo(document.body);
}

export default search;
export { search };