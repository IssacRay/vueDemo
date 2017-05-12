module.exports={
	entry: __dirname + "/main.js",
	output:{
		path: __dirname +"/public",
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			loader:"babel-loader",
			test:/\.js$/
		},{
			test:/\.vue$/,
			loader:"vue-loader"
		},{
			test:/\.css$/,
			loader:"style-loader!css-loader"
		},{
			test:/\.(jpg|png)$/,
			loader:"url-loader"
		},{
			test:/\.(icon|svg)$/,
			loader:"file-loader"
		}]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	devServer:{
		contentBase:"./public",
		port:9988,
		inline:true
	}
}