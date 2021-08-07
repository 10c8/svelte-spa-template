/** @type {import('snowpack').SnowpackUserConfig } */
export default {
  mount: {
    src: '/dist',
    public: {
      url: '/',
      static: true
    }
  },
  plugins: [
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss'
  ],
  routes: [
    {
      'match': 'routes',
      'src': '.*',
      'dest': '/index.html'
    }
  ],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    splitting: true,
    target: 'es2020'
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    /* ... */
  }
};
