"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(time) {
        this.current = null;
        this.time = time || 6500;
    }
    clear() {
        if (this.current !== null) {
            clearTimeout(this.current);
        }
    }
    set(callback) {
        if (this.current !== null) {
            return;
        }
        this.current = setTimeout(callback, this.time);
    }
}
exports.Timer = Timer;
