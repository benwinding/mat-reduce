# mat-reduce

<!-- [START badges] -->
[![NPM Version](https://img.shields.io/npm/v/mat-reduce.svg)](https://www.npmjs.com/package/mat-reduce) 
[![License](https://img.shields.io/npm/l/mat-reduce.svg)](https://github.com/benwinding/mat-reduce/blob/master/LICENSE) 
[![Downloads/week](https://img.shields.io/npm/dm/mat-reduce.svg)](https://www.npmjs.com/package/mat-reduce) 
[![Github Issues](https://img.shields.io/github/issues/benwinding/mat-reduce.svg)](https://github.com/benwinding/mat-reduce)
<!-- [END badges] -->

A _less_ verbose angular material.

## Get Started
`yarn add mat-reduce`

### Simple (Without Quill)
To include all form controls, except the Quill Editor, use the following:

``` typescript
import { MatReduceCoreModule } from 'mat-reduce-core';

@NgModule({
  ...,
  MatReduceCoreModule,
  ...
})
```

### Advanced (With Quill)
To include all modules and the `<form-quill-editor />`, use the following:

``` typescript
import { MatReduceModule } from 'mat-reduce';

@NgModule({
  ...,
  MatReduceModule,
  ...
})
```

Add the quill script to `angular.json`, like so:
``` json
...
"scripts": [
  "node_modules/quill/dist/quill.min.js"
],
...

```

## Development
To develop on this locally, simply clone this repo and run:
```
yarn
yarn start
``` 
And a development demo of each of the controls is available on http://localhost:4567
