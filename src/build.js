import layer from './JsComponents/layer/index.js'; 
import toast from './JsComponents/toast/index.js';
import search from './JsComponents/search/index.js';  

import sWitch from './CssComponentes/switch'; 
import swipe from './JsComponents/swipe/swipe.vue';
import actionSheet from './JsComponents/select/select.vue'; 
import grids from './CssComponentes/grids'; 
import cell from './CssComponentes/cell'; 

import picker from './JsComponents/picker/picker.vue';
import pickerDate from './JsComponents/picker/pickerDate.vue';
import pickerCity from './JsComponents/picker/pickerCity.vue';

 
import header from './CssComponentes/header';  
import checklist from './CssComponentes/checklist'; 
import radio from './CssComponentes/radio'; 

const install = function(Vue){

	if (install.installed) return;

	Vue.component(sWitch.name, sWitch);
	Vue.component(swipe.name, swipe);
	Vue.component(actionSheet.name, actionSheet);
	Vue.component(grids.name, grids);
	Vue.component(cell.name, cell);
	Vue.component(picker.name, picker);
	Vue.component(pickerCity.name, pickerCity);
	Vue.component(pickerDate.name, pickerDate);
	Vue.component(header.name, header);
	Vue.component(radio.name, radio);
	Vue.component(checklist.name, checklist);


	Vue.$layer = Vue.prototype.$layer = layer;
 	Vue.$toast = Vue.prototype.$toast = toast;
 	Vue.$search = Vue.prototype.$search = search;
}

if (typeof window !== 'undefined' && window.Vue) {
  	install(window.Vue);
};

module.exports = { 
	install,
	layer,
	toast,
	search,
	sWitch,
	swipe,
	actionSheet,
	grids,
	cell,
	picker,
	pickerDate,
	pickerCity,
	header,
	checklist,
	radio
	 }