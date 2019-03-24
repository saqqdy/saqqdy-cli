#!/usr/bin/env node

const program = require('commander');
const shell = require('shelljs');
const logUpdate = require('log-update');
const clone = require('git-clone');
const log = require('tracer').colorConsole();

program
    .version('1.0.1')
    .usage('app_name')
    .description('选择Vue模板');
    // .parse(process.argv);

// if (!program.args.length) {
//   program.help();
// }
// if (program.args.length === 1) {
  program
      .command('* <tpl> <project>')
      .action(function(tpl, project) {
        log.info('目前saqqdy-cli支持以下模板：vue_px_to_viewport_h5/vue_px_to_rem_h5/vue_cli3_px_to_viewport_h5/vue_cli3_px_to_rem_h5');
        log.info('使用例子：saqqdy vue_px_to_viewport_h5 myproject');
        if (tpl && project) {
          if (project === '.' || project === '/') {
            project = ''
          }
          let pwd = shell.pwd();
          // console.log(pwd + '', 'pwd');
          // console.log(project, 'project');
          // log.info(pwd + '');
          // log.info(project);
          log.info(`正在拉取模板代码，下载位置：${pwd}/${project} ...`);
          clone(`https://github.com/saqqdy/${tpl}.git`, pwd + `${project ? '/' : ''}${project}`, null, function() {
            shell.rm('-rf', pwd + `/${project}${project ? '/' : ''}.git`); // 删除git目录
            shell.rm('-rf', pwd + `/${project}${project ? '/' : ''}.gitee`); // 删除gitee目录
            log.info('建立完成')
          })
        } else {
          log.error('正确命令例子：saqqdy vue_px_to_viewport_h5 myproject')
        }
      });
  program.parse(process.argv);

  console.log('\n\n\n');
  console.log(program, 'program');
  // console.log('\n\n\n');
  // logUpdate(program.args, 'args');
  // console.log('\n\n\n');
  // logUpdate(process.argv, 'argv');
  // console.log('\n\n\n');


  // shell.mkdir('-p', program.args[0]);
  // shell.cd(program.args[0]);
  // shell.exec('git init');
  // let i = 0;
  // const frames = ['-', '\\', '|', '/'];
  // const interval = setInterval(() => {
  //   const frame = frames[i = ++i % frames.length];
  //   console.log('\n\n\n')
  //   console.log(i, frame, 'frame')
  //   console.log('\n\n\n')
  //   logUpdate('i + frame:' + i + '---' + frame)
  //   console.log('\n\n\n')
  //   logUpdate(`👉 👉 ${frame} initializing ${frame} 👈 👈`);
  // }, 500)
  // shell.exec('git pull git@github.com:saqqdy/vue_cli3_px_to_viewport_h5.git', (code) => {
  // // shell.exec('git pull https://github.com/saqqdy/vue_px_to_viewport_h5.git', (code) => {
  //   console.log('\n\n\n')
  //   console.log(code, 'code')
  //   console.log('\n\n\n')
  //   logUpdate('code:' + code)
  //   console.log('\n\n\n')
  //   clearInterval(interval);
  //   if (code !== 0) {
  //     console.log('\n\n\n')
  //     console.log('Error! Try again');
  //     console.log('\n\n\n')
  //     shell.exit(1);
  //   }
  //   console.log('\n\n\n')
  //   console.log('👏 👏 Completed! You are good to go! 👏 👏');
  //   console.log('\n\n\n')
  // })
// }

