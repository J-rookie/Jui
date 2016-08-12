<template>
	<div class="Jui-picker-slot">
	<nav class="Jui-picker-options" :class="{duration:animation}" v-bind:style="{transform : sTransformY}" v-on:touchstart="_start($event)">
		<a v-for="item in data" v-bind:class="{selected:selected==$index}">{{item}}</a>
	</nav>
	</div>
</template>

<script type="text/javascript">
	import "./picker-slot.scss";
	import _event from '../../lib/event';

	export default{
		props:['data'],
		data(){
			return {
				selected : 0,
                sTransformY:'translate3d(0px, 0px, 0px)',
                TransformY:0,
                animation:true,
            	eventKey:{
            		startY:0,
            		moveY:0,
            		startT:0,
            		endT:0,
                    top:0,
            	}
			}
		},
		watch:{
			TransformY(){
				this.sTransformY = 'translate3d(0px, '+this.TransformY+'px, 0px)'
			}
		},
		methods:{
			_start(e){
                this.animation = false;
        		var self = this.eventKey;
				self.startY = e.touches[0].pageY;
				self.startT = new Date().getTime();
                self.top = this.TransformY;
				_event._bind(e.target,'touchmove',this._move);
                _event._bind(e.target,'touchend',this._end);
                clearInterval(this.swipetimer)
        	},
        	_move(e){
        		var self = this.eventKey;
				self.moveY = e.touches[0].pageY;
                this.TransformY = self.top + self.moveY - self.startY;	
                this.selected = parseInt(Math.abs(this.TransformY)/40);		
        	},
            _end(e){
                this.animation = true;
                var self = this.eventKey;
                self.endT = new Date().getTime();
                var speed = self.endT - self.startT;
                    if(this.TransformY>0){
                    this.TransformY = 0;
                    }else if(this.TransformY <-(this.data.length-1)*40){
                        this.TransformY = -(this.data.length-1)*40;
                    }else{
                        if(speed<300){
                            if(self.moveY-self.startY>0){                 
                                this.TransformY = this.TransformY-this.TransformY%40;
                            }else{
                                this.TransformY = this.TransformY-this.TransformY%40-40;
                            }
                        }else{
                            if(Math.abs(this.TransformY%40)<=40/2){
                                this.TransformY = this.TransformY-this.TransformY%40
                            }else{
                                this.TransformY = this.TransformY-40-this.TransformY%40;
                            }
                        }
                    }
                this.TransformY>0?this.TransformY = 0:'';
                this.TransformY<(this.data.length-1)*-40?this.TransformY = (this.data.length-1)*-40:'';
                this.selected = parseInt(Math.abs(this.TransformY)/40);
                _event._unbind(e.target,'touchmove',this._move);
                _event._unbind(e.target,'touchend',this._end);
            }
		}
	}
</script>