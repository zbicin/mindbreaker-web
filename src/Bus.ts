import { GameScreenType } from "./GameScreenType";

function on<T extends keyof EventPayloadMap>(eventName: T, callback: (payload: EventPayloadMap[T]) => void): void {
    document.addEventListener(eventName.toString(), (e) => {
        e.preventDefault();
        if (e instanceof CustomEvent) {
            callback(e.detail);
        } else {
            callback(null);
        }
    });
}

function emit<T extends keyof EventPayloadMap>(eventName: T, data: EventPayloadMap[T]): void {
    const customEvent = new CustomEvent(eventName.toString(), { detail: data });
    document.dispatchEvent(customEvent);
}

function hook<T extends any>(element: HTMLElement, eventPrefix: string, eventSuffix: string): void {
    element.addEventListener(eventPrefix, (e) => {
        emit(`${eventPrefix}.${eventSuffix}`, null);
    });
}

export const Bus = { on, emit, hook };

type EventPayloadMap = {
    ['goToScreen']: GameScreenType;
    [key: string]: any;
}
