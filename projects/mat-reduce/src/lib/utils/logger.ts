export class SimpleLog {
  constructor(private debug: boolean) {}

  public get log() {
    if (!this.debug) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.log.bind(
      console,
      'mat-reduce:: '
    );
    return boundLogFn;
  }

  public get warn() {
    if (!this.debug) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.warn.bind(
      console,
      'mat-reduce:: '
    );
    return boundLogFn;
  }
}
