#!/usr/bin/env node

/* eslint-disable no-console */

const {execFile} = require('child_process')
const {resolve} = require('path')

const ESLINT_PATH = require.resolve('eslint/bin/eslint')
const CONFIG_PATH = resolve(__dirname, '..', 'eslintrc.js')

const [,, ...args] = process.argv
if (args.find(arg => arg === '-c')) {
  console.log('[sui-lint-js] Dont use your own config file. Remove `-c` flag')
  process.exit(1)
}

const child = execFile(
  ESLINT_PATH,
  [
    '-c', CONFIG_PATH,
    '--ext', 'js',
    '--ext', 'jsx',
    '--ignore-pattern', 'lib',
    '--ignore-pattern', 'dist',
    '--ignore-pattern', 'node_modules',
    './'
  ].concat(args),
  err => err && err.code && process.exit(err.code)
)
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)