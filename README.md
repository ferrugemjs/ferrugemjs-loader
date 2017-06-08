# ferrugemjs-loader
ferrugemjs-node is a simple webpack loader to converte template HTML engine to google incremental-DOM js.

[![NPM](https://nodei.co/npm/ferrugemjs-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ferrugemjs-loader/)

####Install

'npm install ferrugemjs-loader --save-dev'

####Usage

```js
//webpack.config.js 
module: {
    rules: [
        {
          test: /\.html$/
          ,loader:'ferrugemjs-loader'
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

