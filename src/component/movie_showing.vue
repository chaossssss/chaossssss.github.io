<template>
<section id="movie_showing" v-if="showingStatus">
  <header>
    <h2>影院热映</h2>
    <a href="/movie/nowintheater?loc_id=108288">更多</a></header>
  <div class="section-content">
<!--     <ul class="row items">
      <li class="item item__movie">
        <a href="/movie/subject/26182910?refer=home">
          <div class="item-poster" style="background-image: url(https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2412371389.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg)"></div>
          <span class="item-title">功夫瑜伽</span>
          <div class="item-rating">
            <div class="rank">
              <span class="rating-stars" data-rating="2.7">
                <span class="rating-star rating-star-small-full"></span>
                <span class="rating-star rating-star-small-full"></span>
                <span class="rating-star rating-star-small-full"></span>
                <span class="rating-star rating-star-small-gray"></span>
                <span class="rating-star rating-star-small-gray"></span>
              </span>
              <span>5.4</span></div>
          </div>
        </a>
      </li>
    </ul> -->
    <ul class="row items">
    	<li v-on:click="hideItem" class="item item__movie" v-for="article in articles">
    	  <router-link :to="{path:'movieSubject',query:{id:article.id}}">
    	    <div class="item-poster" v-bind:style="{'backgroundImage':'url('+article.images.large+')'}"></div>
    	    <!-- <span class="item-title">{{article.images.small}}</span> -->
    	    <span class="item-title">{{article.title}}</span>
    	    <!-- <span class="item-title">{{article.rating.average/2}}</span> -->
    	    <div class="item-rating">
    	      <div class="rank">
    	        <span v-if="article.rating.average != 0" class="rating-stars" v-bind:data-rating="(article.rating.average/2)">
    	          <span class="rating-star rating-star-small-full"></span>
    	          <span class="rating-star rating-star-small-full"></span>
    	          <span class="rating-star rating-star-small-full"></span>
    	          <span class="rating-star rating-star-small-gray"></span>
    	          <span class="rating-star rating-star-small-gray"></span>
    	        </span>
    	        <span v-if="article.rating.average != 0">{{article.rating.average}}</span>
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
			articles: [],
			showingStatus: true,
      id:''
		}
	},
	mounted () {
		this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {}, {
		    headers: {

		    },
		    emulateJSON: true
		}).then(function(response) {
		  // 这里是处理正确的回调
		    console.log("正在上映:",response);
		    // console.log(response.bodyText);
		    this.articles = response.data.subjects
		    // this.articles = response.data["subjects"] 也可以

		}, function(response) {
		    // 这里是处理错误的回调
		    console.log(response)
		});
		// this.$http.jsonp('https://api.douban.com/v2/movie/subject/3230115', {}, {
		//     headers: {

		//     },
		//     emulateJSON: true
		// }).then(function(response) {
		//     console.log(response);
		//     this.articles = response.data.subjects

		// }, function(response) {
		//     console.log(response)
		// });
	},
	methods:{
		hideItem:function(e){
			// this.showingStatus = false;
		}
	}
}		
</script>
<style type="text/css" scoped>
	
</style>