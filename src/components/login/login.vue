<template>
	<div id="login">
		<div>
			
		
		<nav>
			<mt-header title="登录">
			  <router-link to="/" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			</mt-header>
		</nav>
		<div class="in_up-box">
			<ul>
				<li @click="qie(0)" >
					<div :class="{current:selected==0}">快捷登录</div>
				</li>
				<li @click="qie(1)" >
					<div :class="{current:selected==1}">账号密码登录</div>
				</li>
			</ul>
		</div>

		<div class="in_up-main" v-show="selected == 0">
			<div class="form-content">
				<span>手机号</span>
				<div class="form-input">
					<input type="text" placeholder="请输入手机号">
				</div>
			</div>
			<div class="form-content">
				<span>手机验证码</span>
				<div class="form-input">
					<input type="text" placeholder="请输入手机验证码">
				</div>
				<div class="phonecode">
					<a href="">获取验证码</a>
				</div>
			</div>			
		</div>
		<div class="in_up-main"  v-show="selected == 1">
			<div class="form-content">
				<span>账
				号</span>
				<div class="form-input">
					<input type="text" placeholder="手机号/邮箱/用户名/门店会员卡">
				</div>
			</div>
			<div class="form-content">
				<span>密
				码</span>
				<div class="form-input">
					<input type="text" placeholder="请输入6-20位易购密码">
				</div>
				<div class="noseeicon">
					<i></i>
				</div>
			</div>			
		</div>
		<div class="login-oper">
			<div class="login-btn">
				<a href="">登录</a>
			</div>
			<div class="login-guide">
				<a href="" class="doorcar">门店卡登录</a>
				<a href="" class="forgetpass">忘记密码?</a>
			</div>
			<div class="sign-up-box">
				<a href="" class="signup">
					快速注册
				</a>
			</div>
			
		</div>
		<div class="other-loginway">
			<div class="otherloginway-title">
				<div class="throught-line"></div>
				<span>其他方式登录</span>
				<div class="throught-line"></div>
			</div>
			<div class="icon">
				<ul>
					<li>
						<i class="qq"></i>
						<span>QQ</span>
					</li>
					<li>
						<i class="yi"></i>
						<span>易付宝</span>
					</li>
				</ul>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				selected:0
			}
		},
		methods:{
			qie(i){
				this.selected = i
			}
		}
	}
</script>
<style>
    div.current{
    	border-bottom: .12rem solid #f60
    }
	#login{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		background-color: #fff
	}
	#login>div{
		padding-top: 1.77rem;
	}
	#login nav{
		width: 100%;
		position: fixed;
		z-index: 99999;
		top: 0;
		left: 0;
		background-color: #fff;
		border-bottom: 1px solid #DCDCDC
	}
	#login .mint-header-title{
		color: #333;
		font-size: 0.6rem;
		font-weight: lighter;
	}
	.in_up-box ul{
		display: flex;
		border-bottom:1px solid #ddd
	}
	.in_up-box ul li{
		flex:1;
		height: 2rem;
		text-align: center;
	}
	.in_up-box ul li>div{
		display: inline-block;
		text-align: center;
		line-height: 1.89rem;
		font-size: 0.6rem;
		/*border-bottom: .12rem solid #f60*/
	}
	.in_up-main {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		padding: 2rem 0.5rem 0;
	}
	.in_up-main>div{
		display: flex;
		height: 2rem;
		line-height: 2rem;
		border-bottom: 1px solid #ddd;
		flex:1;

	}
	.form-input{
		flex:1;
		margin-left: 0.8rem;
	}
	.form-input input{
		outline: none;
		border: none;
		width: 100%;
		font-size: 0.55rem;
		color: #222530;
		background-color: #fff;
	}
	.form-content>span{
		width: 3.2rem;
		color: #222530;
		font-size: 0.6rem;
	}
	.phonecode{
		width: 4rem;
		text-align: center;
		
	}
	.phonecode a{
		color: #222530;
	}
	.login-oper{
		padding: 0 0.5rem;
		margin-top: 1rem;	
	}
	.login-btn{
		width: 100%;

	}
	.login-btn a{
		display: block;
		width: 100%;
		height: 1.8rem;
		text-align: center;
		line-height: 1.8rem;
		color: #fff;
		font-size: 0.6rem;
		lighting-color: 1.8rem;
		background-color: #f60;
		border-radius: 5px;
	}
	.login-guide{
		margin-top: 0.5rem;
		display: flex;
		justify-content: space-between;
	}
	.doorcar{
		color: #f60;
		font-size: 0.34rem;

	}
	.forgetpass{

		color: #222530;
	}
	.login-guide a{
		
		font-size: 0.5rem;
	}
	.sign-up-box{
		margin-top: 1rem;
	}
	.sign-up-box .signup{
		display: block;
		width: 4.4rem;
    	height: 1.2rem;
    	line-height: 1.2rem;
    	text-align: center;
    	border-radius: 5px;
    	color: #f50;
    	border: 1px solid #f60;
    	margin: 0 auto;
	}
	.other-loginway{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0 0.3rem;
		margin-bottom: 0.3rem;
	}
	.otherloginway-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.otherloginway-title span{
		padding: 0 0.6rem;
		color: #999;
	}
	.throught-line{
		flex:1;
		height: 1px;
		background-color: #ddd;
	}
	.icon ul{
		display: flex;
		justify-content: center;
	}
	.icon ul li{
		width: 25%;
		text-align: center;
	}
	.icon .qq{
		background: url(../../assets/images/qq.png) no-repeat;
		background-size: contain;
	}
	.icon .yi{
		background: url(../../assets/images/yi.png) no-repeat;
		background-size: contain;
	}
	.icon i{
		display: block;
		width: 1rem;
		height: 1rem;
		margin: 0.45rem auto 0.3rem;
		
	}
	.noseeicon{
		display: flex;
		align-items: center;
	}
	.noseeicon i{
		display: block;
		background: url(../../assets/images/nosee.png)no-repeat;
		background-size: contain;
		width: 1.6rem;
		height: 1.6rem;
	}
</style>