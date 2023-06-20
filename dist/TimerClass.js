"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(time) {
        this.current = null;
        this.time = time || 5000;
        this.callback = undefined;
    }
    reset() {
        if (this.current !== null) {
            clearTimeout(this.current);
        }
        if (this.callback !== undefined) {
            this.current = setTimeout(this.callback, this.time);
        }
        else {
            throw new Error("You must set a callback with Timer.set before you can use Timer.reset");
        }
    }
    set(callback) {
        this.callback = callback;
        this.current = setTimeout(callback, this.time);
    }
}
exports.Timer = Timer;
