<template>
	<div id="comment">
		<div class="banner">
		    <mt-swipe :auto="4000">
		        <mt-swipe-item v-for="(v,i) in bannerImgUrl">
		          <img :src=v alt="">
		        </mt-swipe-item>

		    </mt-swipe>
		</div>
		<div class="group" v-for="(v,i) in pros" >
			<h3>
				<em class="item">{{v[0].main}}</em>
				
				<i>
					<em class="right-des">热销榜</em>
					<img src="../../assets/images/more.png" alt="">
				</i>
			</h3>
			<div class="proshow-box" >
				<ul>
					<li v-for="(a,j) in v">
						<a href=""><img :src=a.imgurl alt=""></a>
						<em>{{a.title}}</em>
					</li>
				</ul>
			</div>
		</div>
		<a href="" class="enter-chano">
			<img src="../../assets/images/1493812252613_pc_list.jpg" alt="">
		</a>
	</div>

</template>
<script>
	export default{
		data(){
			return{
				bannerImgUrl:[
					"src/assets/images/1542014618832_app_wap_list.jpg",
					"src/assets/images/154192543715734728.jpg",
					"src/assets/images/1541988605268_app_wap_list.jpg"
				],

				pros:''
			}
		},
		props:['name'],
		mounted(){
			if(this.name=='手机相机'){
					this.pros = this.$store.state.phonepros;
			}
			if(this.name=='大家电'){
					this.pros = this.$store.state.homeelcpros
			}
		},
		watch:{
			name(){
				console.log(this.name)
				if(this.name=='手机相机'){
					this.pros = this.$store.state.phonepros;
				}
				if(this.name=='大家电'){
					this.pros = this.$store.state.homeelcpros
				}

			}
		}
	}
</script>
<style>
#comment .mint-swipe-items-wrap,#comment  .mint-swipe-item,#comment  .mint-swipe-items-wrap img{
	height: 4rem;
}


#comment i img{
	margin-left: 0.08rem;
    vertical-align: middle;
	width:0.25rem;
	height: 0.35rem; 
}
.proshow-box em{
	font-size: 0.5rem;
}
</style>