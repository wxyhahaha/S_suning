<template>
	<div id="bqlist">
		<div>
			<nav>
				<div class="title"></div>
				<mt-header title="">
				  <router-link to="/" slot="left">
				    <mt-button icon="back"></mt-button>
				  </router-link>

				</mt-header>
			</nav>
			<div class="channel-tab-wrap">
				<div class="channel-tab">
					<div>
						<ul class="tab-nav">
							<li v-for="(v,i) in tabnavdata" :class="{now:selected==i}" @click="qie(i,v.channeltitle)">
								<img  v-lazy=v.imgurl alt="">
								<div class="channel-title">{{v.channeltitle}}</div>
							</li>

						</ul>
					</div>
				</div>
			</div>
			<div class="channel-content-wrap">
				<div class="channel-content">
					<div class="item-box" v-for="(v,i) in Prolist">
						<div class="gl-bg">
							<div :class="{graymask:v.bigimgurl!=''}"></div>
							<a href="">
								<img :src=v.bigimgurl alt="">
								<i class="gl-tag">
									<span class="num">{{v.gltag[0]}}</span>
									<span>{{v.gltag[1]}}</span>
								</i>
								<p class="gl-title">{{v.imgtitle}}</p>
							</a>
						</div>
						<div class="item-title">{{v.title}}<span></span>
						</div>
						<div class="bq-pro-img">
							<ul>
								<li v-for="(a,j) in v.pros">
									<a href="">
										<img :src=a.imgurl alt="">
									</a>
									<div class="thisprice">
										<i :class="{des:a.des!=''}">{{a.des}}</i>
										<i :class="{borders:true, exsit:a.ticket!=''}">{{a.ticket}}</i>
										<i class="price">
											￥{{a.price}}
										</i>
									</div> 
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<ul>
					<li v-for="(v,i) in footernav">
						<a href="">
							<img :src=v.imgurl alt="">
							<span>{{v.title}}</span>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				selected:0,		
				Prolist:this.$store.state.bqlistjingxuan,
				tabnavdata:[
					{
						imgurl:'src/assets/images/151384318928031476.png',
						channeltitle:'精选'
					},
					{
						imgurl:'src/assets/images/151384314706144635.png',
						channeltitle:'家电'
					},
					{
						imgurl:'src/assets/images/151384323374513944.png',
						channeltitle:'酷机'
					},
					{
						imgurl:'src/assets/images/151375579188137688.png',
						channeltitle:'超市'
					},
					{
						imgurl:'src/assets/images/151375580058931338.png',
						channeltitle:'穿搭'
					},
					{
						imgurl:'src/assets/images/151383933612448185.png',
						channeltitle:'置家'
					},
					{
						imgurl:'src/assets/images/151375578418753424.png',
						channeltitle:'育儿'
					},
					{
						imgurl:'src/assets/images/151477677270136261.png',
						channeltitle:'办公'
					},
					{
						imgurl:'src/assets/images/151669485755224183.png',
						channeltitle:'运动'
					}
				],
				footernav:[
					{
						imgurl:'src/assets/images/bq-home.png',
						title:'预售主会场'
					},
					{
						imgurl:'src/assets/images/bq-jiadian.png',
						title:'家电预售'
					},
					{
						imgurl:'src/assets/images/bq-phone.png',
						title:'手机电脑'
					},
					{
						imgurl:'src/assets/images/bq-me.png',
						title:'我的活动'
					}
				]
			}
		},
		methods:{
			qie(n,v){
				this.selected = n;
				switch (v) {
					case '精选':
						this.Prolist = this.$store.state.bqlistjingxuan
						break;
					case '家电':
						this.Prolist = this.$store.state.bqlistjiadian
						break;
					case '酷机':
						this.Prolist = this.$store.state.bqlistkuji
						break;
					case '超市':
						this.Prolist = this.$store.state.bqlistchaoshi
						break;
					case '穿搭':
						this.Prolist = this.$store.state.bqlistchaunda
						break;	
					case '置家':
						this.Prolist = this.$store.state.bqlistzhijia
						break;
					case '育儿':
						this.Prolist = this.$store.state.bqlistyuer
						break;
					case '办公':
						this.Prolist = this.$store.state.bqlistbangong
						break;
					case '运动':
						this.Prolist = this.$store.state.bqlistyundong
						break;		
				}

				
				
			}
		}
	}
</script>
<style>
	#bqlist{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: #fff;
		overflow: auto
	}
	#bqlist>div{
		padding-bottom: 2rem;
	}
	#app #bqlist{
		background-color: rgb(172, 3, 105)
	}
	#bqlist nav{
		position: relative;
		background-color: #fff;
	}
	#bqlist nav .title{
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -2.5rem;
		width: 5rem;
		height: 1.76rem;
	    background-image: url(../../assets/images/tittle.png);
	    background-repeat: no-repeat;
	    background-size: 3.02rem .8rem;
	    background-position: center;	
	    z-index: 999
	}
	.channel-tab-wrap{
		height: 2.2rem;
		background-color: #ff342d;
		position: relative;
	}
	.item-box{

	}
	.channel-content{
		margin-top: 0.4rem;
	}
	.channel-content .item-box{
		width: 14.3rem;
		margin: 0 auto 0.5rem;
		background-color: #fff;
		border-radius: 4px;
		padding: 0.2rem
	}
	.bq-pro-img{
		padding: 0.3rem 0
	}
	.bq-pro-img img{
		width:4.4rem;
		height: 4.4rem
	}
	.bq-pro-img ul{
		display: flex;
	}
	.bq-pro-img li{
		flex:1;
		text-align: center;
	}
	.item-title{
		line-height: 0.76rem;
		/*padding-top: 0.4rem;*/
		margin-bottom: 0.2rem;
		white-space: normal;
		font-weight: bold;
		font-size: 0.65rem;
	}
	.thisprice{
		margin-top: 0.2rem;
		line-height: 0.8rem;
		color: #a5a5a5;
		text-align: center;
		
	}
	.thisprice i{
		font-size: 0.55rem;
	}
	.borders.exsit{
		border: 1px solid #ff2a57;
	}
	.thisprice .borders{
		
   		background: #ffedef;
   		font-size: xx-small;
   		border-radius: 2px;
   		line-height: 0.2rem;
   		color: #fe053a;
   		padding-top: 0.22rem;
   		font-size: 0.4rem;
   		display: table;
   		height: 0.6rem;
	}
	.thisprice i{
		
		font-style: normal;
		margin: 0 auto
	}
	.thisprice .des{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-bottom: 0.5rem;
		color: #666;
		width: 4.2rem;
	}
	.gl-bg img{
		width: 100%;
		height: 6.76rem;
		object-fit: cover;
	}

	.gl-bg{
		position: relative;
	}
	.gl-tag,.gl-title{
		position: absolute;
	}
	.gl-tag{
		top: 0.3rem;
		right: 0.45rem;
		color: #fff;
		border: 1px solid #fff;
		padding: 0.1rem 0.2rem;
		border-radius: 3px;
	}
	.gl-tag .num{
		font-weight: bold;
	}
	.gl-title{
		width: 90%;
		color: #fff;
		bottom: 1rem;
		left:50%;
		font-size: 0.8rem;
		transform: translateX(-50%)
	}
	.gl-bg i{
		font-style: normal;
		
	}

	.gl-bg:after{
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -0.35rem;
		border-bottom: 0.35rem solid #fff;
		border-left: 0.35rem solid transparent;
		border-right: 0.35rem solid transparent;

	}
	#bqlist .graymask{
		width: 100%;
		height: 98%;
		position: absolute;
		background: rgba(0,0,0,.12);
	}
	.channel-tab{
		height: 2.2rem;
		width: 100%;
		overflow: auto;
	}
	.channel-tab>div{
		width: 100%;
		height: 100%;
	}
	.tab-nav{
		width: 30rem;
		height: 100%;
	}
	.tab-nav li{
		display: inline-block;
		white-space: nowrap;
		width: 3rem;
		color: #fff;
		text-align: center;
		font-size: 0.55rem;
		height: 100%;
	}
	.tab-nav li img{
		margin-top: .2rem;
		width: 1rem;
		height: 1rem;
	}
	.tab-nav li.now{
		background: #cd0031	
	}
	#bqlist footer{
		background: #fff;
	}
	#bqlist footer img{
		width: 1rem;
		height: 1rem;
	}
	#bqlist footer ul {
		display: flex;
	}
	#bqlist footer ul li{
		flex:1;
		text-align: center;
	}
	#bqlist footer span{
		margin-top: 0.3rem;
		margin-bottom: 0.1rem;
		color: #222530;
		font-size: 0.4rem;
		display: block;
	}
</style>