function addListener(eventName: string, callback: EventListener): void {
    document.addEventListener(eventName, callback);
}

function emit(eventName: string, data: any): void {
    const customEvent = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(customEvent);
}

function hook(element: HTMLElement, eventPrefix: string, eventSuffix: string): void {
    element.addEventListener(eventPrefix, (e) => {
        emit(`${eventPrefix}.${eventSuffix}`, e);
    });
}

export const Bus = { on: addListener, emit, hook };