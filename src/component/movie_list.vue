<template>
  <section class="grid has-search-bar">
  <div>
    <h1>{{type}}</h1>
    <div class="card">
      <router-link :to="{path:'movieSubject',query:{id:list.id}}" class="item" v-for="list in movieList">
      <div class="cover">
       <div class="wp">
        <img :src="list.images.large" class="img-show" />
       </div>
      </div> 
      <div class="info">
       <h3>{{list.title}}</h3>
      </div>
      </router-link>
    </div>

    <!-- <div>{{list.body.subjects.title}}</div> -->
  </div>
  </section>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default {
  data () {
    return {
      movieList:[]
    }
  },
  computed:{
    type:function(){
      return this.$store.state.movieType;
    }
    // movieList:function(){
      // this.$http.jsonp('https://api.douban.com/v2/movie/search?tag=' + this.$route.params.type).then((response)=>{
      //     if(response.ok === true){
      //       console.log("所选类型的电影",response.body.subjects);
      //       this.movieData = response.body;
      //       return response.body.subjects;
      //     }else{
      //       console.log('请求异常!');
      //     }
      // })
      // $.ajax({
      //   methods:'get',
      //   url:'https://api.douban.com/v2/movie/search?tag=' + this.$route.params.type,
      //   async:false,
      //   dataType:'jsonp',
      //   success:function(data){
      //     console.log(data.subjects);
      //     return data.subjects;
      //   }
      // })
    // }
  },
  // watch:{
  //   movieList:function(movieList){
  //     this.$http.jsonp('https://api.douban.com/v2/movie/search?tag=' + this.$route.params.type).then((response)=>{
  //         if(response.ok === true){
  //           console.log("所选类型的电影",response.body.subjects);
  //           return response.body.subjects;
  //         }else{
  //           console.log('请求异常!');
  //         }
  //     })
  //   }
  // },
  mounted:function(){
    this.$http.jsonp('https://api.douban.com/v2/movie/search?tag=' + this.$route.params.type).then((response)=>{
      console.log(response);
      this.movieList = response.body.subjects;
    })
  }
}   
</script>
<style type="text/css" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.grid.has-search-bar {
    padding: 0 15px;
}
.grid {
    padding: 40px 15px 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 660px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
}
.grid .card {
    clear: both;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    padding: 14px 0 0;
}
.grid .item {
    float: left;
    box-sizing: border-box;
    width: 33.33333%;
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 0;
    overflow: hidden;
    text-decoration: none;
    color: #9b9b9b;
    margin-left: 0;
}
.grid .item .cover {
    min-height: 87px;
    overflow: hidden;
    position: relative;
}
.grid .item .wp {
    position: relative;
}
.grid .item .wp:before {
    content: "";
    display: block;
    padding-top: 143%;
}
.grid .item .cover .img-show {
    width: 100%;
}
.grid .item img {
    display: block;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
}
.grid .item .info {
    height: 45px;
    overflow: hidden;
}
</style>