import path from 'path'
const excludes = [/node_modules/, /server/]

mopdule.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: excludes,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(svelte)$/,
        exclude: excludes,
        use: [
          {
            loader: 'svelte-loader'
          }
        ]
      }
    ]
  }
}