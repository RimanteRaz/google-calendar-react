import { Event } from "../utilities/events";

export const SAVE_EVENT = "SAVE_EVENT";

export const saveEvent = (event: Event) => ({ type: SAVE_EVENT, payload: event });
