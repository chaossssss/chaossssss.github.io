<template>
	<section class="types">
      <header>
        <h2>分类浏览</h2>
      </header>
    <div class="section-content">
      
            <a name="cate"></a>
            <ul class="type-list">
                <li v-for="item in items" @click='getType(item.type)'><router-link :to="{path:item.toUrl}">{{item.type}}<span></span></router-link></li>
<!--                 <li><router-link to="/movie/classic">经典<span></span></router-link></li>
                <li><router-link to="/movie/underrated">冷门佳片<span></span></router-link></li>
                <li><router-link to="/movie/doubantop">豆瓣高分<span></span></router-link></li>
                <li><router-link to="/movie/action">动作<span></span></router-link></li>
                <li><router-link to="/movie/comedy">喜剧<span></span></router-link></li>
                <li><router-link to="/movie/love">爱情<span></span></router-link></li>
                <li><router-link to="/movie/mystery">悬疑<span></span></router-link></li>
                <li><router-link to="/movie/horror">恐怖<span></span></router-link></li>
                <li><router-link to="/movie/scifi">科幻<span></span></router-link></li>
                <li><router-link to="/movie/sweet">治愈<span></span></router-link></li>
                <li><router-link to="/movie/artfilm">文艺<span></span></router-link></li>
                <li><router-link to="/movie/youth">成长<span></span></router-link></li>
                <li><router-link to="/movie/animation">动画<span></span></router-link></li>
                <li><router-link to="/movie/chinese">华语<span></span></router-link></li>
                <li><router-link to="/movie/western">欧美<span></span></router-link></li>
                <li><router-link to="/movie/korean">韩国<span></span></router-link></li>
                <li><router-link to="/movie/japanese">日本<span></span></router-link></li>
 -->
                <!-- <li></li> -->
            </ul>
        
    </div>
  </section>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
			items:[
        {toUrl: '/classic',type: '经典'},
        {toUrl: '/underrated',type: '冷门佳片'},
        {toUrl: '/doubantop',type: '豆瓣高分'},
        {toUrl: '/action',type: '动作'},
        {toUrl: '/comedy',type: '喜剧'},
        {toUrl: '/mystery',type: '悬疑'},
        {toUrl: '/horror',type: '恐怖'},
        {toUrl: '/scifi',type: '科幻'},
        {toUrl: '/sweet',type: '治愈'},
        {toUrl: '/artfilm',type: '文艺'},
        {toUrl: '/youth',type: '成长'},
        {toUrl: '/animation',type: '动画'},
        {toUrl: '/chinese',type: '华语'},
        {toUrl: '/western',type: '欧美'},
        {toUrl: '/korean',type: '韩国'},
        {toUrl: '/japanese',type: '日本'}
      ]
		}
	},
  methods:{
    getType(type){
      // this.$store.state.movieType = type;
      this.$store.dispatch('changeType',{'newType' : type}
        //存到vuex中，对应actions来写
        );
    },
    getList(type){
        this.$http.jsonp('https://api.douban.com/v2/movie/search?tag=' + this.$route.params.type).then((response)=>{
            if(response.ok === true){
              console.log("所选类型的电影",response.body.subjects);
              this.movieData = response.body;
              this.$store.dispatch('saveMovie',{'movieDetail':this.movieData});
              // return response.body.subjects;
            }else{
              console.log('请求异常!');
            }
        })
    }
  }
}		
</script>
<style type="text/css" scoped>
	
</style>