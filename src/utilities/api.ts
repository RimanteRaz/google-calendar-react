import { Event } from "./events";

const EVENTS_DB_URL = "/events";

export const api = {
  getEvents: () => safeFetch(EVENTS_DB_URL, { method: "GET" }),
  saveEvent: (event: Event) =>
    safeFetch(EVENTS_DB_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }),
  deleteEvent: (eventID: string) =>
    safeFetch(`${EVENTS_DB_URL}/${eventID}`, { method: "DELETE" }),
};

export const safeFetch = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw response.statusText;
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
