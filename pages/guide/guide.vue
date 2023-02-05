<template>
	<view>
		<view class="guide">
			<p>功能: 完全加密的聊天，软件是不联网的，可以自行实验</p>
			<p>介绍: 每个人都需要一个密钥对，聊天前互相交换公钥，用对方的公钥加密数据，将密文发给对方，对方即可使用自己私钥解密</p>
			<p>原理: 使用的是一种非对称加密算法RSA，即公钥加密只能由私钥解密，每个人的私钥不向外透露，因此对方加密的数据只有你的私钥能解密</p>
			<p>联系人是为了保存对方的公钥，并且作以区分,更方便一些。</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.guide{
		padding: 10rpx;
		p{
			margin: 15rpx 0;
		}
	}
</style>
