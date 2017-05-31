<template>
	<div id="TalionNav">
		<header class="TalionNav">
			<div class="TalionNav-primary">
				<a href="/"><h1>豆瓣</h1></a>
				<nav>
					<ul>
						<li v-for="item in navbar">
							<a v-bind:style="{color:item.color}">{{item.title}}</a>
						</li>
					</ul>
					<span class=""></span>
				</nav>
			</div>
		</header>
	</div>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
			navbar:[
				{
					title:'电影',
					color:'#2384E8'
				},{
					title:'图书',
					color:'#9F7860'
				},{
					title:'广播',
					color:'#E4A813'
				},{
					title:'小组',
					color:'#2AB8CC'
				}
			]
		}
	}
}	
</script>
<style type="text/css">

</style>