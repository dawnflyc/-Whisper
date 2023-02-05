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
		},methods:{
			copy(data){
				console.log(data)
				uni.setClipboardData({
					data: data,
					success: (e) => {
						uni.showToast({
							title:"复制成功",
							icon:'success'
						})
					},
					fail: (e) => {
						uni.showToast({
							title:"复制失败",
							icon:'error'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page{
		background-color: #fff;
		.from{
			padding: 10rpx;
			.input{
				.label{
					padding: 10rpx 0;
				}
				input,textarea{
					width: 100%;
					background-color: #ffffff;
					border: 1rpx solid #6c6c6c;
				}
			}
			.button{
				margin: 20rpx 0;
				background-color: #ffffff;
				border: 1rpx solid #6c6c6c;
				border-radius: 0;
			}
		}
		.button{
			margin: 20rpx;
			background-color: #ffffff;
			border: 1rpx solid #6c6c6c;
			border-radius: 0;
		}
	}

</style>
