let JuiEvent={};
//绑定事件
    JuiEvent._bind = function (obj, type, fn) {
        obj.addEventListener(type, fn, false);
    }
//取消绑定事件
    JuiEvent._unbind = function (obj, type, fn) {
        obj.removeEventListener(type, fn, false);
    };
//数据转换为字符串
    JuiEvent.toString = function(value){
    	return JSON.stringify(value)
    }

export default JuiEvent;
export { JuiEvent };