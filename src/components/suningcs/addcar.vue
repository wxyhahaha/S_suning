<template>
	
		
	
	<transition  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
		
	
	<div class="addcar" v-if="this.$store.state.carimgshow" :style="{left:this.$store.state.proX,top:this.$store.state.proY}">
		<div class="graymask"></div>
		<img :src=this.$store.state.addcarimg alt="">
		
	</div>
	
</transition>
</template>
<style>
.addcar{
	position:fixed;
	width: 3.6rem;
	height: 3.6rem;
}
	.addcar img{
		/*transform: scale(0);*/
		/*opacity: 0;*/
		border-radius:10px;
		width: 100%;

	}
	.addsuccess{
		position: fixed;
		left: 0;
		top: 50%;
		margin-top: -3rem;
		width: 100%;
		height: 6rem;
		background-color: rgba(0,0,0,.5);
		color: #fff;
	}
</style>
<script>
	export default{
		data(){
			return{
				show:false,
				carX:this.$store.state.carX,
				carY:this.$store.state.carY,
			}
		},

		methods:{
			beforeEnter(el){
				// console.log(el)
				// el.style.opacity = 0
				el.style.left=this.$store.state.proX+'px';
				el.style.top=this.$store.state.proY+'px';
				
			},
			enter(el){
				el.style.transition = "all  1s"
				// el.style.transition = "opacity  0.5s"


				
				
			},
			afterEnter(el){
				
				let X=this.carX-this.$store.state.proX-10+'px';
				

				let Y=this.carY-this.$store.state.proY-10+'px';
				el.style.transform = 'translate('+X+','+Y+') scale(0)'
				console.log(el.style.transform)
				el.style.opacity = 1				
				this.$store.state.carimgshow = false;

			}
		}
		
	}
</script>