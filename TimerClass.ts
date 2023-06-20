export class Timer {
  current: NodeJS.Timeout | null;
  time: number;
  callback: (() => void) | undefined;

  constructor(time?: number) {
    this.current = null;
    this.time = time || 5000;
    this.callback = undefined;
  }

  reset() {
    if (this.callback !== undefined) {
      if (this.current !== null) {
        clearTimeout(this.current);
      }
      this.current = setTimeout(this.callback, this.time);
    } else {
      throw new Error(
        "You must set a callback with Timer.set before you can use Timer.reset"
      );
    }
  }

  set(callback: () => void) {
    this.callback = callback;
    this.current = setTimeout(this.callback, this.time);
  }
}
