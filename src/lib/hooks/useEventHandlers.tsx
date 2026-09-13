import * as React from "react";

export enum SupportedEvents {
  POINTER_CLICK = "POINTER_CLICK",
  POINTER_UP = "POINTER_UP",
  POINTER_DOWN = "POINTER_DOWN",
  POINTER_ENTER = "POINTER_ENTER",
  POINTER_LEAVE = "POINTER_LEAVE",
  POINTER_MOVE = "POINTER_MOVE",
  POINTER_CANCEL = "POINTER_CANCEL"
}
type EventT = keyof HTMLElementEventMap;
const SupportedEventsValues: Partial<Record<EventT, SupportedEvents>> = {
  "click": SupportedEvents.POINTER_CLICK,
  "pointerup": SupportedEvents.POINTER_UP,
  "pointerdown": SupportedEvents.POINTER_DOWN,
  "pointerenter": SupportedEvents.POINTER_ENTER,
  "pointerleave": SupportedEvents.POINTER_LEAVE,
  "pointermove": SupportedEvents.POINTER_MOVE,
  "pointercancel": SupportedEvents.POINTER_CANCEL
}
interface EventHandlerArgs {
  type: SupportedEvents;
  nativeEvent: PointerEvent | MouseEvent;
}

export interface EventConfiguration {
  /**
   * If not provided, all supported events will be sent to handler
   */
  listenTo?: Array<SupportedEvents>;
  handler: (params: EventHandlerArgs) => void;
}

interface UseEventHandlersProps {
  eventConfigurations: Array<EventConfiguration> | undefined;
  ref: React.RefObject<HTMLDivElement | null>;
}
export const useEventHandlers = ({
  ref,
  eventConfigurations
}: UseEventHandlersProps): void => {

  React.useEffect(() => {
    if (!ref.current || !eventConfigurations || eventConfigurations.length === 0) {
      return;
    }
    const element = ref.current;
    const cleanupFunctions: Array<() => void> = [];
    for (const eventConfiguration of eventConfigurations) {
      const nativeEventHandler = (nativeEvent: Event): void => {
        eventConfiguration.handler({
          type: SupportedEventsValues[nativeEvent.type as EventT] as SupportedEvents,
          nativeEvent: nativeEvent as PointerEvent | MouseEvent
        });
      }
      const listenTo = eventConfiguration.listenTo || Object.values(SupportedEvents);
      const supportedEventTypes = (Object.keys(SupportedEventsValues) as EventT[])
        .filter(eventType => listenTo.includes(SupportedEventsValues[eventType] as SupportedEvents));
      supportedEventTypes.forEach(eventType => element.addEventListener(eventType, nativeEventHandler));
      cleanupFunctions.push(() => supportedEventTypes.forEach(eventType => element.removeEventListener(eventType, nativeEventHandler)));
    }
    return () => cleanupFunctions.forEach(cleanupFn => cleanupFn());
  }, [ref, JSON.stringify(eventConfigurations)]);

}