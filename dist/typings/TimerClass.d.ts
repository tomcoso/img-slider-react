/// <reference types="node" />
export declare class Timer {
    current: NodeJS.Timeout | null;
    time: number;
    constructor(time?: number);
    clear(): void;
    set(callback: () => void): void;
}
