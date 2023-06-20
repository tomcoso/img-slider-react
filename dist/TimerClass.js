"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(time) {
        this.current = null;
        this.time = time || 5000;
    }
    clear() {
        this.current = null;
    }
    set(callback) {
        this.current = setTimeout(callback, this.time);
    }
}
exports.Timer = Timer;
