export class Timer {
  current: NodeJS.Timeout | null;
  time: number;

  constructor(time?: number) {
    this.current = null;
    this.time = time || 5000;
  }

  clear() {
    if (this.current !== null) {
      clearTimeout(this.current);
    }
    this.current = null;
  }

  set(callback: () => void) {
    this.current = setTimeout(callback, this.time);
  }
}
