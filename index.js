'use strict';

hexo.extend.console.register('cgd', 'clean and generate and deploy.', async function (args) {
  await hexo.call('clean', args);
  await hexo.call('generate', args);
  await hexo.call('deploy', args);
});

hexo.extend.console.register('cgs', 'clean and generate and server.', async function (args) {
  await hexo.call('clean', args);
  await hexo.call('generate', args);
  await hexo.call('server', args);
});
hexo.extend.console.register('gd', 'generate and deploy.', async function (args) {
  await hexo.call('generate', args);
  await hexo.call('deploy', args);
});

hexo.extend.console.register('gs', 'generate and server.', async function (args) {
  await hexo.call('generate', args);
  await hexo.call('server', args);
});

hexo.extend.console.register('cgds', 'clean and generate and deploy and server.', async function (args) {
  await hexo.call('clean', args);
  await hexo.call('generate', args);
  await hexo.call('deploy', args);
  await hexo.call('server', args);
});

hexo.extend.console.register('gds', 'generate and deploy and server.', async function (args) {
  await hexo.call('generate', args);
  await hexo.call('deploy', args);
  await hexo.call('server', args);
});

// 最近很喜歡聽冰球樂團，好聽，不是遲早的問題🎵，我們不能在一起🎶
