# mat-reduce

<!-- [START badges] -->
[![NPM Version](https://img.shields.io/npm/v/mat-reduce.svg)](https://www.npmjs.com/package/mat-reduce) 
[![License](https://img.shields.io/npm/l/mat-reduce.svg)](https://github.com/benwinding/mat-reduce/blob/master/LICENSE) 
[![Downloads/week](https://img.shields.io/npm/dm/mat-reduce.svg)](https://www.npmjs.com/package/mat-reduce) 
[![Github Issues](https://img.shields.io/github/issues/benwinding/mat-reduce.svg)](https://github.com/benwinding/mat-reduce)
<!-- [END badges] -->

A _less_ verbose angular material.

## Get Started

### 1. Install
`yarn add mat-reduced`

### 2. Add to Angular Module
``` typescript
import { MatReduceModule } from 'mat-reduce';

@NgModule({
  ...,
  MatReduceModule,
  ...
})
```

### 3. Add quill script to `angular.json`

``` json
...
"scripts": [
  "node_modules/quill/dist/quill.min.js"
],
...

```
