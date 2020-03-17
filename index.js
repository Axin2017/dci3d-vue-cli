
const program = require('commander')
const path = require('path')
const fs = require('fs')
const downloadGit = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

program.command('init').action(function (env, options) {
  if (options) {
    const projectName = options[0]
    const projectPath = path.resolve(projectName)
    // 创建文件夹
    if (fs.existsSync(projectPath)) {
      throw new Error('the path' + projectPath +' is already exits!')
    }
    fs.mkdirSync(projectPath)
    // 下载git
    const templateUrl = 'Axin2017/dci3d-vue-template'
    const spinner = ora('cloning the project template...')
    spinner.start()
    downloadGit(templateUrl, projectName, {
      clone: false
    }, err => {
      spinner.stop()
      if (err) {
        fs.rmdirSync(projectPath)
        throw err
      } else {
        console.log(chalk.green('project created success!'))
      }
    })
  } else {
    console.log(chalk.red('the parameter for project name are required!'))
  }
})

program.parse(process.argv)
