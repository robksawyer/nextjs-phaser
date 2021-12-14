const nextConfig = {
  webpack: (config, { dev, webpack }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(spec,test,stories)\.(js|jsx)$/,
        loader: 'ignore-loader',
      })
    }

    // SVG Loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Load GLSL Shaders
    // config.module.rules.push({
    //   test: /\.(glsl|vs|fs|vert|frag)$/,
    //   exclude: /node_modules/,
    //   use: ['raw-loader', 'glslify-loader'],
    // })

    return config
  },

  env: {},
}

module.exports = nextConfig
