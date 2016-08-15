<template>
	<div class="Jui-picker-slot" v-on:touchstart="_start($event)">
	<nav class="Jui-picker-options" :class="{duration:animation}" v-bind:style="{transform : sTransformY}">
		<a v-for="item in data.values" v-bind:class="{selected:selected==$index}">{{item}}</a>
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
				this.sTransformY = 'translate3d(0px, '+this.TransformY+'px, 0px)';
			}
		},
        ready(){
            this.selected = this.data.values.indexOf(this.data.value);
            this.TransformY = -this.selected*40+80;
        },
		methods:{
			_start(e){
                this.animation = false;
        		let self = this.eventKey;
				self.startY = e.touches[0].pageY;
				self.startT = new Date().getTime();
                self.top = this.TransformY;
				_event._bind(e.target,'touchmove',this._move);
                _event._bind(e.target,'touchend',this._end);
        	},
        	_move(e){
        		let self = this.eventKey;
				self.moveY = e.touches[0].pageY;
                this.TransformY = self.top + self.moveY - self.startY;		
        	},
            _end(e){
                this.animation = true;
                let self = this.eventKey;
                let limitTop = 80;
                let limitBottom = -(this.data.values.length-1)*40+80;
                self.endT = new Date().getTime();
                let speed = self.endT - self.startT;
                    if(this.TransformY>80){
                    this.TransformY = 80;
                    }else if(this.TransformY < limitBottom){
                        this.TransformY = -(this.data.values.length-1)*40+80;
                    }else{
                        if(speed<300){
                            if(self.moveY-self.startY>0){                 
                                this.TransformY = this.TransformY-this.TransformY%40;             
                            }else{
                                this.TransformY-this.TransformY%40-40 < limitBottom?this.TransformY = limitBottom:this.TransformY = this.TransformY-this.TransformY%40-40;
                            }
                        }else{                     
                            if(Math.abs(this.TransformY%40)<=40/2){                          
                                this.TransformY = this.TransformY-this.TransformY%40;                  
                            }else{  
                                this.TransformY-this.TransformY%40 >= 0 ?this.TransformY = this.TransformY-this.TransformY%40+40:this.TransformY = this.TransformY-this.TransformY%40-40;
                            }
                        }
                    }
                this.selected = Math.abs(~~(this.TransformY/40)-2);
                this.data.value =  this.data.values[this.selected];
                _event._unbind(e.target,'touchmove',this._move);
                _event._unbind(e.target,'touchend',this._end);
            }
		},
	}
</script>