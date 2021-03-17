const nextConfig = {
  poweredByHeader: false,
  publicRuntimeConfig: {
    _KEY_: process.env.TEST_KEY, // "BING GO",
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
    TEST_KEY: process.env.TEST_KEY,
  },
}

module.exports = nextConfig
