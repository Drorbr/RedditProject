var webpack = require('webpack');
var path = require('path'); 
var sass = require('node-sass');
//var jsonImporter = require('node-sass-json-importer');
 


module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
   'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
externals: {
jquery: 'jQuery'
},

plugins: [
  
new webpack.ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery'
  
}),


],

  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
				test: /\.css$/,
				loader: "style-loader!css-loader?modules&-url",
			},
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      }
      // {
			// 	test: /.jsx?$/,
			// 	loader: "babel-loader",
			// },
			// {
			// 	test: /.js?$/,
			// 	loader: "babel-loader",
			// 	exclude: /node_modules/,
			// },
			// {
			// 	test: dcss$/,
			// 	loader: "style-loader!css-loader?modules&-url",
			// },
			// {
			// 	test: /.json?$/,
			// 	loader: "json-loader",
			// },
			// {
			// 	test: /.svg/,
			// 	loader: "babel!svg-react",
			// 	exclude: /node_modules/,
			// },
			// {
			// 	test: /\.png/,
			// 	loader: "base64-image-loader",
			// 	exclude: /node_modules/,
			// }
    ]
  }
 
};




