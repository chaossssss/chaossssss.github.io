# douban-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


###总结

使用vue-cli搭建，vue全家桶开发(vue-resource,vue-router和vuex)，自己感觉对vue的基本指令已经掌握了，vuex还有很多不懂的地方，尤其是多个模块需要状态管理的情况下。使用了些ES6语法，基本上是import，export，箭头函数，let，const等等，没用到字符串模板有些遗憾。项目中没用到修饰符，过滤器，slot，ssr，一下子也没有想到可以用到的地方。目前就这么多，应该还有很多没有踩到。

###还要完善的地方

1.整体请求速度比较慢，需要过度动画
2.在computed中，能得到ajax数据，但是一直是undefined，这个问题一直没有解决，目前是在 movie_list 中隐藏了 movie_types
3.电影分类还要做个上拉加载，不过暂时没有头绪
4.头部搜索栏没有做功能，可以单页面完成。因为想要实现多页面开发，所以先留着，webpack的配置应该还要做修改
5.没用到gulp和webpack组合开发，相关配置教程不尽相同，感觉有一定难度


在线地址:https://chaossssss.github.io/
