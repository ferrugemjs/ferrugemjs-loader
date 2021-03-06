## ferrugemjs-loader
ferrugemjs-node is a simple webpack loader to converte template HTML engine to google incremental-DOM js.

[![NPM](https://nodei.co/npm/ferrugemjs-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ferrugemjs-loader/)

#### Install

'npm install ferrugemjs-loader --save-dev'

#### Usage

``` js
//webpack.config.js 
module: {
    rules: [
        {
          test: /\.html$/
          ,loaders:[
		{ 
			loader: 'ferrugemjs-loader',
			options: {
				templateExtension:'.html', // default is '.html'
				env: 'production' // default is 'development'
			} 
		}
	   ]
        }
    ]
},
,resolve: {
    extensions: [".js",".html"]
    ,alias:{    		
    	"app":__dirname + '/src'
    	,"ferrugemjs":"ferrugemjs/dist/core"
    }    
}
```
to work with webpack there is 'ferrugemjs/platform' as a application bootstrapping.

``` typescript
import bootstrapper from "ferrugemjs/bootstrapper";
```
or

```typescript
import platform from "ferrugemjs/platform";
import init_app from "./init-app";
 
platform
    .bootstrap(init_app)
    .at(
        document.getElementById("init_app_id")
    );
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

