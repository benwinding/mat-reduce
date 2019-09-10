# mat-reduced

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