
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/DigitalBondProject"
  }
],
  assets: new Map([
['index.csr.html', {size: 5713, hash: 'a4a89be228605f58ae4de639cd60997233dec31ffc7278758f4241b160981715', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1211, hash: 'c57c169624397dc2e6dd3e0cd457c6913cd6e3105ac0439dec591ae2f5022cb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 62645, hash: '780a9fcd1cf441c2be355d1093809534cc051c3d405ab09f2b02c4e873252037', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['main-IIO3AIVH.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)}], 
['main.server.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)}], 
['styles-B3SA6HC3.css', {size: 265112, hash: 'Qc6lqRfUEFg', text: () => import('./assets-chunks/styles-B3SA6HC3_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
