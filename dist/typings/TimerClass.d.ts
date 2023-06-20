/// <reference types="node" />
export declare class Timer {
    current: NodeJS.Timeout | null;
    time: number;
    callback: (() => void) | undefined;
    constructor(time?: number);
    reset(): void;
    set(callback: () => void): void;
}
