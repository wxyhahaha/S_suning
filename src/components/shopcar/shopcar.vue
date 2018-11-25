<template>
	<div id="shopcar">
		<div>
			<nav>
				<mt-header title="购物车">
				  <router-link to="/" slot="left">
				    <mt-button icon="back"></mt-button>
				  </router-link>
				  <mt-button icon="more" slot="right"></mt-button>
				</mt-header>
			</nav>
			<div class="login-tip">
				<span>登陆后同步电脑与手机购物车的商品</span>
				<a href="">登录</a>
			</div>
			<div class="pro-wrap">
				<div class="head">
					<div class="checkedboximg">
						<span class="checkedbox"></span>
					</div>
					<div class="right-info">
						<div class="shanjia">
							<img src="../../assets/images/icon2.png" alt="">
						苏宁自营</div>
						<span class="ticket">领优惠券</span>
					</div>
				</div>
				<div class="pro-main-wrap">
					<ul class="pro-item">
						<li v-for="(v,i) in shopcardata">
							<div class="checkedboximg">
								<span class="checkedbox"></span>
							</div>
							<div class="right-info">
								<img :src=v.imgurl alt="">
								<div class="pro-des">
									<div class="des-main">
										<p class="text1">{{v.title}} </p>
										<p class="text2">
											<span>重量：{{v.weight}}</span>
											<span>口味:{{v.taste}}</span>
										</p>
									</div>
									
									<div class="price-box">
										<span class="oneprice">￥{{v.price}}</span>
										<div class="numbox">
											<span class="left"></span>
											<input type="text" value="1">
											<span class="right"></span>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="mayblike">
				<div class="head_foot">
					<span class="line"></span>
					<span class="title">您可能感兴趣的商品</span>
					
				</div>
				<div class="mayb-mainpros-wrap">
					<ul class="pro-content">
						<li>
							<a href="">
								<img src="../../assets/images/135835432858493145491940_x.jpg" alt="">
								<p class="like-pro-des">
									邦仕尼木勺榉木无漆家用木汤勺长柄韩式粥勺实木稀饭勺木质厨具大号木头勺子
								</p>
								<div class="like-pro-buy">
									￥<span class="like-pro-price">12</span>.9
									<i class="car-icon"></i>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../../assets/images/135835432858493145491940_x.jpg" alt="">
								<p class="like-pro-des">
									邦仕尼木勺榉木无漆家用木汤勺长柄韩式粥勺实木稀饭勺木质厨具大号木头勺子
								</p>
								<div class="like-pro-buy">
									￥<span class="like-pro-price">12</span>.9
									<i class="car-icon"></i>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../../assets/images/135835432858493145491940_x.jpg" alt="">
								<p class="like-pro-des">
									邦仕尼木勺榉木无漆家用木汤勺长柄韩式粥勺实木稀饭勺木质厨具大号木头勺子
								</p>
								<div class="like-pro-buy">
									￥<span class="like-pro-price">12</span>.9
									<i class="car-icon"></i>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div class="head_foot foot">
					<span class="line"></span>
					<span class="title">以上根据您购物车中的商品推荐</span>
					
				</div>
			</div>
			<div class="jies-box">
				<div class="checkedboximg">
						<span class="checkedbox"></span>
				</div>
				<div class="label">全选</div>
				<div class="price-count">
					<div class="allprice-box">
						<em>合计</em>
						<span>￥435.50</span>
					</div>
					<div class="discount-box">
						<i>免运费</i>
						<i>已优惠￥41.00</i>
					</div>
				</div>
				<div class="jies-btn">
					<a href="">
						去结算(6)
					</a>
				</div>
			</div>
			<footer>
		        <div class="foot-item-wrap">
		        <div class="like-item">
		          <a href=""><img src="../../assets/images/149854823118881121.png" alt=""></a>
		          
		                   
		        </div>
		        <div class="classfy-item">  
		          <router-link to="/classfy">
		            <img src="../../assets/images/149854827751644127.png" alt="">
		          </router-link>           
		        </div>
		        <div class="count-item">         
		         <router-link to="/login"><img src="../../assets/images/149854824407094221.png" alt=""></router-link>
		          
		        </div>
		        <div class="cool-item">        
		           <router-link to="/bqlist"><img src="../../assets/images/149854829266356234.png" alt=""></router-link>
		          
		        </div>
		        <div class="shopcar-item">          
		          <router-link to="/shopcar"><img src="../../assets/images/150347580790917462.png" alt=""></router-link>
		        </div>
		        
		      </div>
		    </footer>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				shopcardata:this.$store.state.shopcardata
			}
		}
	}
</script>
<style>
	#app #shopcar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: #f2f2f2;
		overflow: auto;
		padding-bottom: 4rem;
	}
	#shopcar h1{
		color: #333;
		font-size: 0.59rem;
		font-weight: lighter;
	} 
	.login-tip{
		padding: 0.52rem;
		background-color: #fff0c9;
		font-size: 0.52;
		text-align: center;
		font-size: 0.48rem;
		margin-bottom: 0.7rem;
	}
	.login-tip a{
		display: inline-block;
	    padding: 0 .5rem;
	    height: 0.88rem;
	    line-height: 0.88rem;
	    font-size: 0.55rem;
	    background-color: #ff6600;
	    border-radius: 3px;
	    color: #fff;
	}
	.pro-wrap .head{
		width: 100%;
		height: 1.8rem;
		background-color: #fff;
		padding: 0 0.2rem;
	}
	.pro-wrap .head>div{
		float: left;
	}
	.checkedboximg{
		width: 9%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.checkedboximg .checkedbox{
		display: inline-block;
		width: .72rem;
		height: 0.72rem;
		border-radius: 50%;
		border:1px solid #DCDCDC;
	}
	.head .right-info{
		width: 91%;
		height: 100%;
		line-height: 1.8rem;
		/*padding-right: 0.1rem;*/
		font-size: 0.57rem;
	}
	.shanjia{
		float: left;
	}
	.ticket{
		color: #f60;
		float: right;
	}
	.shanjia img{
		width: 0.75rem;
		height: 0.75rem;
		vertical-align: middle;
	}
	.pro-item li{
		padding-top: 0.5rem;
		display: flex;
		border-bottom: 1px solid #ddd;
		background-color: #f8f8f8
	}
	
	
	.pro-item .right-info{
		width: 91%;
		display: flex;
		padding-bottom: 0.5rem;
	}
	.pro-item .checkedboximg{
		height: auto;
		padding-left: 0.2rem;
	}
	.pro-item .right-info img{
		width:4.5rem;
		height: 4.5rem;
		border:1px solid #d8d8d8;
	}
	.pro-des {
		margin-left: 0.35rem;
		height: 6.1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

	}
	.pro-des .text1{
		font-size: 0.55rem;
		padding-right: .4rem;
		display: -webkit-box;
	    word-wrap: break-word;
	    word-break: break-all;
	    -o-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    overflow: hidden;
	}
	.des-main p{
		margin-bottom: 0.1rem;
	}
	.pro-des .text2>span{
		font-size: 0.5rem;
		color: #999;
	}
	.price-box{
		color: 0.55rem;
		display: flex;;
		justify-content: space-between;
	}
	.price-box>span,.price-box input{
		font-size: 0.56rem
	}
	.price-box .oneprice{
		color: #f60;
		/*font-size: 0.55rem;*/
	}
	.numbox{
		display: flex;
		padding-right: 0.2rem;
	}
	.numbox>span{
		display: inline-block;
		width: 1.2rem;
		height: 0.8rem;
		/*height: 1.2rem;*/
		border:1px solid #DCDCDC;
	}
	.numbox .left{
		background: url(../../assets/images/min.png)center no-repeat #F5F5F5;
		background-size: 0.6rem;
	}
	.numbox .right{
		background: url(../../assets/images/add.png)center no-repeat #F5F5F5;
		background-size: 0.6rem;
	}
	.numbox input{
		width: 1.4rem;
		text-align: center;
		border:1px solid #DCDCDC;
		outline: none
	}


	/*可能喜欢*/
	.mayblike .head_foot{
		height: 01.2rem;
		display: flex;
		align-items: center;
		padding: 0 0.2rem;
		position: relative;
		justify-content: center;
		color: #999
	}
	.mayblike .head_foot.foot .title{
		width: 8.5rem;
	}
	/*.mayblike .head span{
		flex:1;
	}*/
	.mayblike .head_foot .line{
		position: absolute;
		height: 1px;
		width: 96%;
		top: 50%;
		margin-left: -48%;
		left: 50%;
		background-color: #999;
		z-index: 5
	}
	.mayblike .head_foot .title{
		position: relative;
		width: 5.5rem;
		background-color: #f2f2f2;
		text-align: center;
		font-size: 0.52rem;
		z-index: 10;


	}
	.pro-content{
		display: flex;
		flex-wrap: wrap;
	}
	.pro-content li{
		flex:48%;
		background-color: #fff;
		flex-grow: 0;
		margin-bottom: 0.2rem;
	}
	.pro-content li:nth-child(odd){
		margin-right: 2%;
	}
	.mayb-mainpros-wrap .pro-content img{
		width: 7.5rem;
		height: 7.5rem;
	}

	.like-pro-des{
	    display: -webkit-box;
	    height: 1.48rem;
	    word-wrap: break-word;
	    word-break: break-all;
	    -o-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    overflow: hidden;
	    
	}
	.like-pro-des{
		margin-bottom: 0.6rem;
	}
	.like-pro-des,.like-pro-buy {
		padding: 0 0.5rem;
		font-size: 0.52rem;
	}
	.like-pro-price{
		font-size:0.65rem; 
	}
	.like-pro-buy{
		color: #f60;
		letter-spacing: 0px;
		position: relative;
		margin-bottom: 0.15rem;
		/*line-height: 0.rem;*/
	}
	.car-icon{
		position: absolute;
		right: 0.5rem;
		top: -0.08rem;
		background: url(../../assets/images/addCart.png)no-repeat;
		width: 0.85rem;
		height: 0.8rem;
		background-size: contain;
	}
	#shopcar .foot-item-wrap{
		border-top: none;
	}
	#shopcar .foot-item-wrap img{
		width: 1.2rem;
		height: 1.4rem;
	}
	#shopcar .like-item img{
		position: static;
		margin-left:0;
	}
	#shopcar .foot-item-wrap>div{
		padding: 0.2rem 0 0.1rem;
	}
	/*去结算*/
	.jies-box{
		width: 100%;
		position: fixed;
		bottom: 1.76rem;
		left:0;
		background-color: #fff;
		display: flex;
		z-index: 9999;
		
	}
	.jies-box i,.jies-box em{
		font-style: normal;
	}
	.jies-box .checkedboximg{
		height: auto;
		padding-left: 0.2rem;
	}
	.jies-box .label{
		/*9+9*/
		line-height: 2.4rem;
		width: 9%;
	}
	.jies-box .price-count{
		/*18+52=70*/
		padding: 0.2rem 0.3rem;
		text-align: right;
		width: 52%;
	}
	.jies-box .price-count>div{
		margin-bottom: 0.1rem;
	}
	.jies-box .jies-btn{
		width: 30%;
		height: 2.4rem;
		line-height: 2.4rem;
		text-align: center;
		background: #f60;
		
	}
	.jies-box .jies-btn a{
		font-size: 0.7rem;
		color: #fff;
	}
	.jies-box .allprice-box span{
		color: #f60;
		font-size: 0.7rem
	}
</style>