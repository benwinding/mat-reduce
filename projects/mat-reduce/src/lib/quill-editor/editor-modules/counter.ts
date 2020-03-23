import 'quill';
import { Subject, OperatorFunction, concat } from 'rxjs';
import { debounceTime, take, publish } from 'rxjs/operators';

function debounceTimeAfterFirst(
  dueTime: number
): OperatorFunction<number, number> {
  return publish(value =>
    concat(value.pipe(take(1)), value.pipe(debounceTime(dueTime)))
  );
}

export interface QuillCounterConfig {
  divId: string;
  units: 'words' | 'chars' | 'kb';
}

export interface QuillInstance {
  on: any;
  getText: any;
  root: any;
}

export default class Counter {
  quill: QuillInstance;
  options: QuillCounterConfig;
  updateTrigger = new Subject();

  constructor(quill, options) {
    this.quill = quill;
    this.options = options;

    const toolbarModule = quill.getModule('toolbar');
    if (!toolbarModule) {
      throw new Error(
        'quill.counter requires the "toolbar" module to be included too'
      );
    }
    const container = toolbarModule.container.querySelector(
      '#' + this.options.divId
    );

    this.quill.on('text-change', () => {
      this.updateTrigger.next();
    });

    this.updateTrigger.pipe(debounceTimeAfterFirst(2000)).subscribe(() => {
      const length = this.calculate();
      container.innerHTML = length + ' ' + this.options.units;
      // console.log('form-html-editor: updating counter =' + container.innerHTML);
    });
  }

  calculate() {
    const text = this.quill.getText().trim();

    if (this.options.units === 'words') {
      return !text ? 0 : text.split(/\s+/).length;
    }
    if (this.options.units === 'kb') {
      const html = this.quill.root.innerHTML;
      return Math.round(html.length / 1024);
    }
    return text.length;
  }
}
