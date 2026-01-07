'use strict';

const m = {
  c: ['clean'],
  g: ['generate'],
  d: ['deploy'],
  s: ['server']
};

function parse(s) {
  return s
    .split('')
    .filter(c => m[c])
    .flatMap(c => m[c]);
}

hexo.extend.console.register(
  'cg',
  'combo command',
  async function (args) {
    const s = args._[0] || '';
    const cmds = parse(s);

    if (!cmds.length) {
      hexo.log.info('Usage: hexo cg[d][s]');
      return;
    }

    for (const c of cmds) {
      hexo.log.info(`Running: hexo ${c}`);
      await hexo.call(c, args);
    }
  }
);
// 我最近很喜歡聽冰球樂團。
