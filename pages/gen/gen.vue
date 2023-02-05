<template>
	<view>
		<view class="from">
			<view class="input">
				<view class="label">
					公钥:(<text @click="copy(pubkey)" style="color: #007AFF;">点击复制</text>)
				</view>
				<textarea  :maxlength="-1" v-model="pubkey" />
			</view>
			<view class="input">
				<view class="label">
					私钥:(<text @click="copy(prikey)" style="color: #007AFF;">点击复制</text>)
				</view>
				<textarea  :maxlength="-1" v-model="prikey" />
			</view>
			<button class="button"  @click="gen" >生成</button>
			<button class="button"  @click="save" >导入</button>
		</view>
	</view>
</template>

<script>
	// import keypair from '../../js/keypair.js'
	import JSEncrypt from '../../js/jsencrypt.js'
	export default {
		data() {
			return {
				prikey:'',
				pubkey:''
			}
		},
		onLoad() {
			this.prikey = uni.getStorageSync("prikey")
			this.pubkey = uni.getStorageSync("pubkey")
		},
		methods: {
			gen(){
				uni.showLoading({
					mask:true,
					title:"生成中"
				})
				let crypt = new JSEncrypt({default_key_size: 2048})
				// let keys = keypair()
				uni.hideLoading()
				uni.showToast({
					title:"生成成功"
				})
				// this.prikey = keys.private.replace(/\n/g,"")
				// this.pubkey = keys.public.replace(/\n/g,"")
				
				this.prikey = crypt.getPrivateKey()
				this.pubkey = crypt.getPublicKey()
				uni.setStorageSync("pubkey",this.pubkey)
				uni.setStorageSync("prikey",this.prikey)
			},save(){
				if(this.prikey=='' || this.prikey ==''){
					uni.showToast({
						title:"不能为空",
						icon:'error'
					})
					return
				}
				uni.setStorageSync("pubkey",this.pubkey)
				uni.setStorageSync("prikey",this.prikey)
				uni.showToast({
					title:"导入成功"
				})
			}

		}
	}
</script>

<style lang="scss" scoped >
	// .from{
	// 	padding: 10rpx;
	// 	.input{
	// 		.label{
	// 			padding: 10rpx 0;
	// 		}
	// 		textarea{
	// 			border: 5rpx solid #d3d3d3;
	// 			width: 100%;
	// 		}
	// 	}
	// 	button{
	// 		margin: 20rpx 0;
	// 	}
	// }
</style>
