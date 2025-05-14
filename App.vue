<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #F5E6D3;
		font-family: "楷体", KaiTi, serif;
	}
	
	/* 去除按钮默认边框 */
	button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
	}
	
	button::after {
		border: none;
	}
	
	/* 去除图片默认间距 */
	image {
		vertical-align: middle;
	}
</style>
