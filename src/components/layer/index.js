import Vue from 'vue';
import LayerVue from './layer.vue';

var defaults = {
	message:"",
	type:0,
	close:false,
	icon:0,
	shade:true,
	shadeClose:true,
	no:'',
	yes:'',
}

var layerConstructor = Vue.extend(LayerVue);

var initData;

var layerInit = function(){
	return new layerConstructor({el: document.createElement('div')});
}

var layer = function(options){
	let InitLayer = layerInit();
	if( typeof options === "string"){
		initData = defaults;
		initData.message = options;
		for(var prop in initData){
			InitLayer[prop] = initData[prop]
		}
		InitLayer.$appendTo(document.body);
	}else if(typeof options === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length){
		initData = defaults;
		for(var prop in options){
			initData[prop] = options[prop]
		}
		for(var prop in initData){
			InitLayer[prop] = initData[prop]
		}
		InitLayer.$appendTo(document.body);
	}
	
};

layer.alert = function(msg,yesFn){
	defaults['type']=1;
	let data = {
		message:msg,
		yes:yesFn||''
	}
	return layer(data)
}

layer.loading = function(iconType,Timer){
	defaults['type']=2;
	let data = {
		icon:iconType,
	}
	return layer(data)
}

layer.confirm = function(){

}

export default layer;
export { layer };