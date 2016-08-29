import LayerVue from './layer.vue';

const layer = function(Vue){
	var defaults = {
	message:"",
	type:0,
	close:false,
	icon:0,
	shade:true,
	shadeClose:true,
	no:'',
	yes:'',
	timer:0,
	show:true,
	}

	var layerConstructor = Vue.extend(LayerVue);

	var initData,layerNum;

		layerNum = 0;

	var layerInit = function(){
		return new layerConstructor({el: document.createElement('div')});
	}

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

	var result = function(options){
		let InitLayer = layerInit();
		if( typeof options === "string"){
			initData = dataCopy(defaults);
			initData.message = options;
			for(var prop in initData){
				InitLayer[prop] = initData[prop]
			}		
		}else if(typeof options === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length){
			initData = dataCopy(defaults);
			for(var prop in options){
				initData[prop] = options[prop]
			}
			for(var prop in initData){
				InitLayer[prop] = initData[prop]
			}
		}
		InitLayer.$appendTo(document.body);
		result.assembly[layerNum] = InitLayer;
		layerNum++;
		result.assembly.length = layerNum;
		return InitLayer;
	};

	result.assembly = {};
	result.assembly.length = 0;
	 
	result.alert = function(msg,yesFn){
		let data = {
			type:1,
			message:msg,
			yes:yesFn||''
		}
		return result(data);
	}

	result.loading = function(iconType,time){
		let data = {
			type:2,
			icon:iconType,
			timer: time || 0,
			shadeClose: false,
		}
		return result(data);
	}

	result.confirm = function(msg,yesFn,noFn){
		let data = {
			type:3,
			message:msg,
			yes:yesFn||'',
			no:noFn||'',
		}
		return result(data);

	}

	result.closeAll = function(){
		for(var i=0;i<result.assembly.length;i++){
			result.assembly[i].$destroy(true);
		}
	}

	return result;
}

export default layer;
export { layer };