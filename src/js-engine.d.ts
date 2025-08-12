declare global {
    interface Window {
        frametime: DOMHighResTimeStamp;
        deltatime: number;
    }
}

export {};