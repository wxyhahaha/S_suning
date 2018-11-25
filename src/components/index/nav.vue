<template>
	<nav>
    <div class="nav-content-box">
        <router-link class="nav-classify" to="/classfy"></router-link>
        
        <div class="nav-searchbox-wrap">
          <a class="nav-searchbox" href="">
            <input type="text" placeholder="商品/店铺">
          </a>
          
        </div> 
        
        <router-link to="/login" class="nav-login">
          登录
        </router-link>
        
      </div>
    </nav>
</template>
<script>
 

</script>
<style scoped="">
 nav{
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  z-index: 999;
  height:  1.76rem
}

.nav-content-box{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.76rem;
  background-color: #f60;
   /*background-color: transparent;*/
  /*background-color: rgb(255, 192, 1);*/
  padding-left: 5px;
  padding-right: 5px;
}
 .nav-classify{
  width: .88rem;
  height: 1.4rem;
  background: url(../../assets/images/classify.png) ;
  background-size: .88rem 1.4rem;
}
 .nav-searchbox-wrap{
  display: inline-block;
  border-radius: 50px;
background-color: rgba(255,255,255,.8);
}
.nav-searchbox-wrap input{
  width: 11.5rem;
  height: 1.4rem;
  border-radius: 50px;
  outline:none;
  border: none;
  text-indent: 25px;
  background-color: rgba(255,255,255,.8);
  font-size: 0.5rem;
}
 .nav-login{
  font-size: 0.5rem;
  color: #fff;
}
</style>