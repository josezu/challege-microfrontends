export interface INextEvent {
  requestNext: boolean;
}

export interface IRequestEvent {
  request: boolean;
}

export enum WindowEvents {
  NEXT = 'next',
  REQUEST = 'request',
}
export const WindowEventService = {
  fire: (event: WindowEvents, body?: CustomEventInit): void => {
    const customEvent = new CustomEvent(event, body);

    window.dispatchEvent(customEvent);
  },
  subscribe: (event: WindowEvents, listener: EventListener) => {
    window.addEventListener(event, listener);
  },
  unsubscribe: (event: WindowEvents, listener: EventListener) => {
    window.removeEventListener(event, listener);
  },
};
