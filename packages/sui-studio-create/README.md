# sui-studio-create

> CLI to create studios for sui components development.


## Installation

```sh
$ npm install -g @schibstedspain/sui-studio-create
```

## Usage


```sh
$ sui-studio-create my-awesome-studio
$ cd my-awesome-studio
$ npm i
$ sui-studio start
```

And you're ready to go !

## CLI

### `$ sui-studio-create <project-name>`

Creates a studio with minimum files and config for a studio:
* Creates package.json
* Installs precommit rules (with git hook)
* Installs sui-studio