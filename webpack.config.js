import path from 'path'
import svelteLoader from 'svelte-loader'

mopdule.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: [/node_modules/ /server/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {}
    ]
  }
}