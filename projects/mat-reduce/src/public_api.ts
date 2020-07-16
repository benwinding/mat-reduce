import {
  FormBase,
  FormGroupTypeSafe,
  FormArrayTypeSafe,
  FormBuilderTypedService,
  Tag,
  TagObject,
} from './lib/from-core';
import { LibFormQuillEditorComponent } from './lib/quill-editor/form-quill-editor.component';
import { MatReduceQuillEditorModule } from './lib/quill-editor/quill-editor.module';

/*
 * Public API Surface of mat-reduce
 */

// export * from 'mat-reduce-core';
export { MatReduceModule } from './lib/mat-reduce.module';
export {
  FormBase,
  FormGroupTypeSafe,
  FormArrayTypeSafe,
  FormBuilderTypedService,
  Tag,
  TagObject,
};
export { LibFormQuillEditorComponent, MatReduceQuillEditorModule };
