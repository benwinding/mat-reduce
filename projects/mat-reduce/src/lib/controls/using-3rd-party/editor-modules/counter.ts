import 'quill';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface QuillCounterConfig {
  container: string;
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

    const container = document.querySelector(this.options.container);

    this.quill.on('text-change', () => {
      this.updateTrigger.next();
    });

    this.updateTrigger.pipe(debounceTime(2000)).subscribe(() => {
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
