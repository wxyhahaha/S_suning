<template>
      <footer>
        <div class="foot-item-wrap">
        <div class="like-item">
          <a href=""><img src="../../assets/images/like.png" alt=""></a>
          <div class="img-space"></div>
          <span>猜你喜欢</span>          
        </div>
        <div class="classfy-item">  
          <router-link to="/classfy">
            <img src="../../assets/images/classfy2.png" alt="">
            <span>分类</span>
          </router-link>           
        </div>
        <div class="cool-item">        
           <router-link to="/bqlist"><img src="../../assets/images/cool.png" alt=""></router-link>
          <span>必抢清单</span>
        </div>
        <div class="shopcar-item">          
          <router-link to="/shopcar"><img src="../../assets/images/shopCar.png" alt=""></router-link>
          <span>购物车</span>
        </div>
        <div class="count-item">         
         <router-link to="/login"><img src="../../assets/images/count.png" alt=""></router-link>
          <span>我的易购</span>
        </div>
      </div>
    </footer>
</template>
<script>

</script>
<style>
  /*底部*/

#app footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.foot-item-wrap{
  display: flex;
  width: 100%;
  border-top: 1px solid #ccc;
}
.foot-item-wrap img{
  width: 1rem;

}
.like-item{
  position: relative;
}
.img-space {
  height: 1.15rem;
}
.like-item img{
  width: 1.8rem;
  position: absolute;
  top: -.4rem;
  left: 50%;
  margin-left: -0.9rem;
}
.foot-item-wrap .like-item span{
  color: rgb(255, 192, 1)
}
.foot-item-wrap a{
}
.foot-item-wrap>div{
  float: left;
  text-align: center;
  flex:1;
/*  margin-left: 0.5px;*/
  padding: 0.2rem 0;
  background-color: #fff;
  /*background-color: #efefef;*/
}
.foot-item-wrap>div span{
  display: block;
  font-size: 0.4rem;
  color: #333;
}
</style>
