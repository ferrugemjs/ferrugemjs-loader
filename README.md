# ferrugemjs-loader
ferrugemjs-node is a simple webpack loader to converte template HTML engine to google incremental-DOM js.

[![NPM](https://nodei.co/npm/ferrugemjs-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ferrugemjs-loader/)

####Install

'npm install ferrugemjs-loader --save-dev'

####Usage

```js
module.exports = {
  module: {
    rules: [
      {test: /\.template\.html$/, use: 'ferrugemjs-loader'}
    ]
  }
};
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

