<template>
	<section id="movie_latest">
	  <header>
	    <h2>新片速递</h2>
	    <!-- <a href="/movie/latest">更多</a> -->
	  </header>
	  <div class="section-content">
<!-- 	    <ul class="row items">
	      <li class="item item__movie">
	        <a href="/movie/subject/25766838?refer=home">
	          <div class="item-poster" style="background-image: url(https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2158176904.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg)"></div>
	          <span class="item-title">奇机少年</span>
	          <div class="item-rating">
	            <div class="rank">
	              <span class="rating-stars" data-rating="2.6">
	                <span class="rating-star rating-star-small-full"></span>
	                <span class="rating-star rating-star-small-full"></span>
	                <span class="rating-star rating-star-small-full"></span>
	                <span class="rating-star rating-star-small-gray"></span>
	                <span class="rating-star rating-star-small-gray"></span>
	              </span>
	              <span>5.2</span></div>
	          </div>
	        </a>
	      </li>
	    </ul> -->
	    <ul class="row items">
	      <div v-show="loading" class="spinner">
	        <div class="bounce1"></div>
	        <div class="bounce2"></div>
	        <div class="bounce3"></div>
	      </div>
				<li class="item item__movie" v-for="newMovie in newMovies">
				  <a href="/movie/subject/25766838?refer=home">
				  <router-link :to="{path:'movieSubject',query:{id:newMovie.id}}">
				    <div class="item-poster" :style="{'backgroundImage':'url(' + newMovie.images.large + ')'}"></div>
				    <span class="item-title">{{newMovie.title}}</span>
				    <div class="item-rating">
				      <div class="rank">
				        <span class="rating-stars" v-if="newMovie.rating.average != 0" v-bind:data-rating="newMovie.rating.average/2">
				          <span class="rating-star rating-star-small-full"></span>
				          <span class="rating-star rating-star-small-full"></span>
				          <span class="rating-star rating-star-small-full"></span>
				          <span class="rating-star rating-star-small-gray"></span>
				          <span class="rating-star rating-star-small-gray"></span>
				        </span>
				        <span v-if="newMovie.rating.average != 0">{{newMovie.rating.average}}</span>
				        <span v-else>暂无评分</span>
			          </div>
				    </div>
				  </router-link>
				</li>
	    </ul>
	  </div>
	</section>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
			newMovies:[],
			loading:true
		}
	},
	mounted:function(){
		this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon', {}, {
		    headers: {

		    },
		    emulateJSON: true
		}).then(function(response){
		  // 这里是处理正确的回调
		    console.log("新片速递:",response);
		    this.newMovies = response.data["subjects"];
		    this.loading = false;
		    // console.log("新片速递:",this.newMovies);
		    // console.log(response.bodyText);
		    // this.articles = response.data["subjects"] 也可以

		},function(response){
		    // 这里是处理错误的回调
		    console.log(response)
		});
	}
}		
</script>
<style type="text/css" scoped>


/*--动画效果--*/
.spinner {
  margin: 100px auto 0;
  width: 150px;
  text-align: center;
}
 
.spinner > div {
  width: 30px;
  height: 30px;
  background-color: #67CF22;
 
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
 
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>