<template>
<div>
<h1 class="title">{{movieSubject.title}}</h1>
<p>{{movieSubject.durations}}</p>
<section class="subject-info">
  <div class="right">
    <a href="https://www.douban.com/doubanapp/dispatch?uri=/movie/3230115&amp;from=mdouban&amp;channel=card_movie_cover&amp;download=1" rel="nofollow" onclick="ga('send', 'event', 'ios', 'click', 'card more link')">
      <img :src="imgUrl" :alt="movieSubject.title" class="cover"></a>
  </div>
  <div class="left">
    <p class="rating">
      <span class="rating-stars" v-bind:data-rating="average/2">
        <span class="rating-star rating-star-medium-full"></span>
        <span class="rating-star rating-star-medium-full"></span>
        <span class="rating-star rating-star-medium-full"></span>
        <span class="rating-star rating-star-medium-gray"></span>
        <span class="rating-star rating-star-medium-gray"></span>
      </span>
      <strong>{{average}}</strong>
      <span>{{movieSubject.comments_count}}人评价</span></p>
    <p class="meta">{{detail}}</p>
    <a href="https://www.douban.com/doubanapp/app?model=B&amp;copy=1&amp;page=&amp;channel=m_ad_yingren&amp;direct_dl=1" class="open-app" rel="nofollow">用App查看影人资料</a></div>
</section>
</div>
</template>
<script type="text/javascript">
import {foreachArr} from '../js/util.js'
export default {
	data () {
		return {
			movieSubject:[],
      genres:'',
      imgUrl:'',
      average:'',
      detail:''
		}
	},
  mounted:function(){
    // console.log("id:"+this.$route.query.id);
    this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.query.id).then((response)=>{
      console.log(response);
      this.movieSubject = response.body;
      this.genres = response.body.genres.join(' / ');
      this.imgUrl = response.body.images.large;
      this.average = response.body.rating.average;
      // console.log("演员数组",response.body.casts.name);
      // this.movieDetail = this.movieDetail(response.body.casts);
      // console.log(this.genres);
      // var name = 'name';
      var directors = foreachArr(response.body.directors,'name');
      // console.log(directors);
      var casts = foreachArr(response.body.casts,'name');
      this.detail = this.genres + ' / ' + directors + ' / ' + casts;
      console.log(this.detail);
      // console.log(casts);
    })
  }
}		
</script>
<style type="text/css" scoped>
	
</style>