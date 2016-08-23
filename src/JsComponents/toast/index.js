import Vue from 'vue';
import ToastVue from './toast.vue';

var defaults = {
	message:"",
	type:0,
	position:'center',
	imgSrc:false,
	time:2000,
}

var toastConstructor = Vue.extend(ToastVue);

var initData,toastNum;

	toastNum = 0;

var toastInit = function(){
	return new toastConstructor({el: document.createElement('div')});
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

var toast = function(options){

	let InitToast = toastInit();
	if( typeof options === "string"){
		initData = dataCopy(defaults);
		initData.message = options;
		for(var prop in initData){
			InitToast[prop] = initData[prop]
		}		
	}else if(typeof options === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length){
		initData = dataCopy(defaults);
		for(var prop in options){
			initData[prop] = options[prop]
		}
		for(var prop in initData){
			InitToast[prop] = initData[prop]
		}
	}
	InitToast.$appendTo(document.body);
	toast.assembly[toastNum] = InitToast;
	toastNum++;
	toast.assembly.length = toastNum;
	return InitToast;
}

toast.assembly = {};
toast.assembly.length = 0;

toast.closeAll = function(){
	for(var i=0;i<toast.assembly.length;i++){
		toast.assembly[i].$destroy(true);
	}
}

export default toast;
export { toast };