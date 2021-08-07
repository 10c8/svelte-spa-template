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
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    /* ... */
  }
};
