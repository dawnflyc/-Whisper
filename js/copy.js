module.exports = (data)=>{
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