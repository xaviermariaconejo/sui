#!/usr/bin/env node

/* eslint-disable no-console */

const {execFile} = require('child_process')
const {resolve} = require('path')
const SASS_LINT_PATH = resolve(__dirname, '..', '..', '..', '.bin', 'sass-lint')
const CONFIG_PATH = resolve(__dirname, '..', 'sass-lint.yml')

const [,, ...args] = process.argv
if (args.find(arg => arg === '-c')) {
  console.log('[sui-lint-sass] Dont use your own config file. Remove `-c` flag')
  process.exit(1)
}

const child = execFile(
  SASS_LINT_PATH,
  [
    '-c', CONFIG_PATH,
    '-i', '"node_modules, lib, dist"',
    '-v',
    'src/**/*.scss'
  ].concat(args),
  err => err && err.code && process.exit(err.code)
)
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
