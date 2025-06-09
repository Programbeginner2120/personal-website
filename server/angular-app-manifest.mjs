
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/personal-website/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1149, hash: 'c3fba13226634d3b0ca084154edd819f9d4d4a2b3cccfa44e78a4e195d8fa539', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1331, hash: '5a65f4bc3d39682e632544d70919b0e7991e9666e10602e180bc307b4d830879', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QR2K3CJM.css': {size: 207, hash: 'NX54be7Fit4', text: () => import('./assets-chunks/styles-QR2K3CJM_css.mjs').then(m => m.default)}
  },
};
