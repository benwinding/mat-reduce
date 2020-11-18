export function MakeLogger(loggerName: string) {
  const logger = new SimpleLogger2();
  logger.SetSubtitle(loggerName);
  return logger;
}

export class SimpleLogger2 {
  private title = '👇';
  private subtitle = ' default ';
  private enabled = false;

  SetEnabled(isEnabled: boolean) {
    this.enabled = isEnabled;
  }

  SetSubtitle(subtitle: string) {
    this.subtitle = subtitle;
  }

  private isEnabled() {
    return this.enabled;
  }

  private getStr() {
    return `${this.title} ${this.subtitle}:`;
  }

  public get log() {
    if (!this.isEnabled()) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.log.bind(
      console,
      this.getStr()
    );
    return boundLogFn;
  }

  public get warn() {
    if (!this.isEnabled()) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.warn.bind(
      console,
      this.getStr()
    );
    return boundLogFn;
  }

  public get error() {
    if (!this.isEnabled()) {
      return (...any) => {};
    }
    const boundLogFn: (...any) => void = console.error.bind(
      console,
      this.getStr()
    );
    return boundLogFn;
  }
}
