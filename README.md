# vue-cli-plugin-yaml-loader

Start to support YAML file within your Vue application in minutes

This is a vue-cli plugin to add support for YAML file, using [yaml-loader](#https://github.com/eemeli/yaml-loader) and [webpack](https://webpack.js.org/).

## ⭐Features

- Enable support for YAML file
- Enable support for YAML file that includes multiple Yaml Document
- Convert YAML to JSON

## Install

This plugin can be installed from the Vue-CLI and does not require any configuration or settings.

### Installation through the Vue UI:

- Initialize the UI: `vue ui`
- Access the `plugin` menu
- Click `Add Plugin` on the top right or search for `vue-cli-plugin-yaml-loader`
- Click `Install vue-cli-plugin-yaml-loader`
- Follow the screen settings
- Voila'... you are ready lo load Yaml in your project

### Intallation through the CLI

- Navigate to your project
- type `vue add vue-cli-plugin-yaml-loader`
- follow the CLI promps
- Voila'... you are ready lo load Yaml in your project

## USAGE

Just add a YAML file within your project. The Plugin offer two option. One to load simple YAML, and one to include multiple YAML documents.

### Simple YAML

```
# src/asset/sample.yaml

sampleKey: SampleValue
```

Now just import them:
```
//src/main.js

# Simple Import
import myYamlObj from './asset/sample.yaml';

console.log(myYamlObj); //{ "sampleKey": "sampleValue"}

# By Omitting extension
import myYamlObj from './asset/sample';

console.log(myYamlObj); //{ "sampleKey": "sampleValue"}

# By destructuring the yaml (JSON) returned
import { sampleKey } from './asset/sample.yaml';

console.log(sampleKey); //"sampleValue"
```

### Multiple YAML documents

A single YAML file can include MULTIPLE YAML document. This are usually defined by start of document separator "---". To use this feature you need to add a "stream" parameters, within the YAML import:


```
# src/asset/multiDocument.yaml

---
title: Document one
---
title: Document two
```

Now just import them using the stream flag:
```
# Multi Document import
import multiDocumentYaml from './asset/multiDocument.yaml?stream';

console.log(multiDocumentYaml); //[{ "title": "Document one"}, { "title": "Document Two"}]
```
