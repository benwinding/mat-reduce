export class SimpleLog {
  constructor(private debug: boolean) {}

  public get log() {
    if (!this.debug) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.log.bind(
      console,
      'form-tag-single:: '
    );
    return boundLogFn;
  }

  public get warn() {
    if (!this.debug) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.warn.bind(
      console,
      'form-tag-single:: '
    );
    return boundLogFn;
  }
}
