const nextConfig = {
  poweredByHeader: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    _KEY_: "BING GO",
  },
  webpack: (config, options) => {
    const nextCssLoaders = config.module.rules.find(
      (rule) => typeof rule.oneOf === "object",
    )

    nextCssLoaders.oneOf.forEach((loader) => {
      if (
        loader.sideEffects &&
        loader.issuer &&
        loader.issuer.include &&
        loader.issuer.include.endsWith("_app.tsx")
      ) {
        delete loader.issuer
      }
    })

    return config
  },
  env: {
    API_HOST: process.env.API_HOST,
  },
}

module.exports = nextConfig
