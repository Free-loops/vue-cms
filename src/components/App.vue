<template>
  <div class="app-container">
  <mt-header fixed title="黑马程序员·Vue项目">
    <span slot="left">
        <mt-button icon="back">返回</mt-button>
    </span>
  </mt-header>
  <transition>
		<router-view></router-view>
	</transition>
  <footer>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </footer>
  </div>
</template>
<script>

</script>

// 这里写的样式，要符合 scss 语法，并且，样式是 当前组件私有的，不会成为全局的样式，也不会应用给子组件
<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
	padding-bottom: 50px;
	overflow: hidden;
}
.v-enter{
	transform: translateX(100%)
}
.v-leave-to {
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	
	transition: 0.5s ease;
}
 .mui-bar-tab .mui-tab-item1.mui-active {
   color: #007aff;
 }

 .mui-bar-tab .mui-tab-item1 {
   display: table-cell;
   overflow: hidden;
   width: 1%;
   height: 50px;
   text-align: center;
   vertical-align: middle;
   white-space: nowrap;
   text-overflow: ellipsis;
   color: #929292;
 }

 .mui-bar-tab .mui-tab-item1 .mui-icon {
   top: 3px;
   width: 24px;
   height: 24px;
   padding-top: 0;
   padding-bottom: 0;
 }

 .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
   font-size: 11px;
   display: block;
   overflow: hidden;
   text-overflow: ellipsis;
 }
</style>
